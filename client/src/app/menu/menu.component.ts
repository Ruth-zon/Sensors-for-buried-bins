import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { UserService } from '../user/user.service';
import { Job } from '../user/user.model';
import Swal from 'sweetalert2';
@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
  })

  export class MenuComponent implements OnInit {

    isManager(){
      try {
      return this._userService.getCurrentUser().Job==Job.Manager;        
      } catch (error) {
        Swal.fire({
          type: 'error',
          title: 'Oopss...',
          text: 'Unknown user'
        })
      }
    }

    constructor(private _userService:UserService) {
    }
    indexActive:number=2;
    ngOnInit() {
      
    }
}
