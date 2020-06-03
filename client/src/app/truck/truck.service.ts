import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { error } from 'util';

@Injectable(
    { providedIn: 'root' }
)
export class TruckService {

    constructor(private _http: HttpClient) { }
    
    getCapacity(): Observable<number> {
        return this._http.get<number>("/api/Truck/GetCapacity");
    }
    setCapacity(capacity:number):Observable<void> {
        return this._http.put<void>("/api/Truck/PutCapacity",capacity);
    }
    setDefultSettings():Observable<void> {
        return this._http.put<void>("api/Truck/PutDefultSettings",null);
    }
}