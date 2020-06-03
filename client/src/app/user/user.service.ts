import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Job } from './user.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { error } from 'util';

@Injectable(
    { providedIn: 'root' }
)
export class UserService {
    isLogin: boolean = false;
    user: User;
    users: User[];
    constructor(private _http: HttpClient, private _router: Router) { }
    getUserByIdAndPassword(password: string, id: string): Observable<User> {
        if (password == '') {
            password = "0";
        }
        if (id == '') {
            id = "0";
        }
        return this._http.get<User>("/api/User?id=" + id + "&password=" + password)
    }
    getAllUsers(): Observable<User[]> {
        return this._http.get<User[]>("/api/User");
    }
    getCurrentUser(): User {
        return this.user;
    }
    addUser(user: User): Observable<void> {
        return this._http.post<void>("/api/User", user);
    }
    updateUser(user: User): Observable<void> {
        return this._http.put<void>("/api/User", user);
    }
    deleteUser(user: User): Observable<void> {
        return this._http.delete<void>("/api/User?id=" + user.Id);
    }

}