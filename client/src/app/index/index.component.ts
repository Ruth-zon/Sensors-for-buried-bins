import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  isLogin: boolean = false;
  constructor(private _userService: UserService) {
    
  }
  ngOnInit() {
    
  }

}
