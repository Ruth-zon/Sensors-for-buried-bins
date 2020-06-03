import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user/user.service';
import { User, Job } from '../user/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { serializePath } from '@angular/router/src/url_tree';
import Swal from 'sweetalert2';
import { MeasurementService } from '../measurement/measurement.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id: string = '';
  password: string = '';
  firstId: boolean = true;
  firstPwd: boolean = true;
  user: User;
  formLogin: FormGroup;
  clicked: boolean = false;
  wasErrorId: boolean = false;
  wasErrorPassword: boolean = false;

  constructor(private _userService: UserService, private _measurementService: MeasurementService, private _router: Router) { }

  login() {
    this._userService.isLogin = false;
    this._measurementService.measurements = undefined;

    this.wasErrorId = true;
    this.wasErrorPassword = true;
    Swal.fire({
      type: 'error',
      title: 'Oopss...',
      text: 'You need to fill all the required fields'
    })
    if (this.formLogin.valid) {
      Swal.fire({
        title: 'Please wait...',
        onBeforeOpen: () => {
          Swal.showLoading()
        }
      });

      this._userService.getUserByIdAndPassword(this.password, this.id).subscribe(
        data => {
          this.user = data;
          this._userService.user = data;
          Swal.close();
          if (data != null) {
            this._userService.isLogin = true;
            this._router.navigate(['../measurement']);
          }
          else {
            this.clicked = false;
            this.formLogin.controls.id.setValue("");
            this.wasErrorId = true;
            this.formLogin.controls.password.setValue("");
            this.wasErrorPassword = true;
            Swal.fire({
              type: 'error',
              title: 'Oops...',
              text: 'This user is not existent'
            })
          }
        },
        fail => {
          console.log(fail)
        });
    }
  }


  ngOnInit() {
    this.formLogin = new FormGroup({
      id: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9)]
      ),
      password: new FormControl('', [
        Validators.required])
    });
  }

}
