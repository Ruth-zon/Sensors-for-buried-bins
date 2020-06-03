import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User, Job } from '../user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  @Input()
  user: User;

  @Output()
  isUpdated: EventEmitter<any> = new EventEmitter();

  isAdd: boolean = true;
  clicked: boolean = false;
  formUser: FormGroup;
  actualjob: string;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.formUser = new FormGroup({
      id: new FormControl('', [
        Validators.required]),
      firstName: new FormControl('', [
        Validators.required]),
      lastName: new FormControl('', [
        Validators.required]),
      password: new FormControl('', [
        Validators.required]),
      job: new FormControl(''
      ),
      area: new FormControl('', [
        Validators.required]),
      phone: new FormControl('')
    });
    if (!(this.user != null && this.user != undefined)) {
      this.user = new User();
      this.actualjob = "choose job";
    }
    else {
      this.isAdd = false;
      switch (this.user.Job) {
        case Job.Manager:
          this.actualjob = 'Manager';
          break;
        case Job.MunicipalityWorker:
          this.actualjob = 'Municipality Worker';
          break;
        case Job.TruckWorker:
          this.actualjob = 'Truck Worker';
          break;
        default:
          break;
      }
    }
  }
  addOrUpdate() {
    if (this.formUser.valid) {
      this.clicked = true;
      if (!this.isAdd) {
        try {
          this._userService.updateUser(this.user).subscribe(
            data => { this.isUpdated.emit(); },
            error => {
              Swal.fire({
                type: 'error',
                title: 'Oopss...',
                text: 'Something went wrong with the details!'
              });
            });
        } catch (error) {
          Swal.fire({
            type: 'error',
            title: 'Oopss...',
            text: 'Unknown user'
          })
        }
      }
      else {
        Swal.fire({
          title: 'Please wait...',
          onBeforeOpen: () => {
            Swal.showLoading()
          }
        });
        try {
          this._userService.addUser(this.user).subscribe(
            data => { Swal.close(); },
            error => {
              Swal.fire({
                type: 'error',
                title: 'Oopss...',
                text: 'Something went wrong with the details!'
              });
            }
          );
        } catch (error) {
          Swal.fire({
            type: 'error',
            title: 'Oopss...',
            text: 'Unknown user'
          })
        }
      };
      this.clicked = false;
    }
  }

  chooseJob(job: string) {
    this.actualjob = job;
    switch (job) {
      case 'Manager':
        this.user.Job = Job.Manager;
        break;
      case 'Municipality Worker':
        this.user.Job = Job.MunicipalityWorker;
        break;
      case 'Truck Worker':
        this.user.Job = Job.TruckWorker;
        break;
      default:
        break;
    }
  }
}
