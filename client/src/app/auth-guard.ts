import {UserService} from "./user/user.service"
import { Job } from "./user/user.model";
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router/src/utils/preactivation";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(private _userService: UserService,private _router: Router) {}

  canActivate(
  ): Observable<boolean>|Promise<boolean>|boolean {
    if (this._userService.user != undefined) {
      return true;
    }
    this._router.navigate(['../login']);
    return false;
  }

}