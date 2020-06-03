import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MeasurementListComponent } from './measurement/measurement-list/measurement-list.component';
import { MeasurementMapComponent } from './measurement/measurement-map/measurement-map.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { AddGarbageComponent } from './garbage/add-garbage/add-garbage.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { GarbagesListComponent } from './garbage/garbages-list/garbages-list.component';
import { AuthGuard } from './auth-guard'
import { AuthGuardManager } from './auth-guard-manager'
import { SettingComponent } from './setting/setting.component';

// import { MAIN_ROUTES } from "./+main";
// import { AUTH_ROUTES} from "./+auth";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "login", component: LoginComponent },
  {
    path: "measurement",
    canActivate: [AuthGuard],
    children: [
      { path: "", component: MeasurementListComponent },

      { path: "map", component: MeasurementMapComponent }
    ]
  },
  {
    path: "garbage",
    canActivate: [AuthGuardManager],
    children: [
      { path: "", component: GarbagesListComponent },
      { path: "add", component: AddGarbageComponent },
      { path: "update", component: AddGarbageComponent }
    ]
  },
  {
    path: "user",
    canActivate: [AuthGuardManager],
    children: [
      { path: "", component: UserListComponent },
      { path: "add", component: AddUserComponent },
      { path: "update", component: AddUserComponent }
    ]
  },
  {
    path: "setting",
    canActivate: [AuthGuardManager],
    component: SettingComponent
  },
  {
    path: "**", redirectTo: "login"
  }
  // ...AUTH_ROUTES, 
  // ...MAIN_ROUTES  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
