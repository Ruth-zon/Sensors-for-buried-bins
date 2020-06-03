import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  currentUser: User;
  users: User[];
  isOpenUpdate = false;
  overEdit = -1;
  overDel = -1;

  constructor(private _userService: UserService, private _router: Router) {

  }
  openUpdate(user: User) {
    this.currentUser = new User();
    this.currentUser.Id = user.Id;
    this.currentUser.Password = user.Password;
    this.currentUser.FirstName = user.FirstName;
    this.currentUser.LastName = user.LastName;
    this.currentUser.Area = user.Area;
    this.currentUser.Job = user.Job;
    this.currentUser.Phone = user.Phone;

    this.isOpenUpdate = true;
  }

  delete(user: User) {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
      showCloseButton: true
    })
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "Do you want to delete " + user.FirstName + ' ' + user.LastName + " ?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it',
      cancelButtonText: 'No, cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          user.FirstName + ' ' + user.LastName,
          'success'
        )
        this._userService.deleteUser(user).subscribe(data => {
          this.getAllUsers(true);
        },
          fail => {
            console.log(fail)
          });
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          '',
          'error'
        )
      }
    })
  };
  update() {
    this.isOpenUpdate = false;
    this.getAllUsers(true);
  }

  getAllUsers(refresh:boolean) {
    
    if (this._userService.users == undefined || refresh) {
      Swal.fire({
      title: 'Please wait...',
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    });
      this._userService.getAllUsers()
        .subscribe(data => {
          Swal.close();
          this.users = data;
          this._userService.users=data;
        },
          fail => {
            console.log(fail)
          });
    } else {
      this.users =this._userService.users;
    }
  }
  ngOnInit() {
    this.getAllUsers(false);
  }

}
