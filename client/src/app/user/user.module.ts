import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http"
import { AddUserComponent } from './add-user/add-user.component';
import { UserService } from './user.service';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
    declarations: [AddUserComponent,UserListComponent],
    imports: [CommonModule, FormsModule, HttpClientModule,ReactiveFormsModule],
    exports: [AddUserComponent,UserListComponent],
    providers: [UserService]
})
export class UserModule {

}