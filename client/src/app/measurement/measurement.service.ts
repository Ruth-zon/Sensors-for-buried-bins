import { Injectable } from '@angular/core';
import { Measurement } from './measurement.model';
import { Garbage } from '../garbage/garbage.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';
import { Job } from '../user/user.model';

@Injectable(

)
export class MeasurementService {
  deleteUntilDate(deleteDate: Date): Observable<void> {
   return this._http.delete<void>("/api/Measurement?dateTime="+deleteDate);
  }
    measurements: Measurement[];
    constructor(private _http: HttpClient, private _userService: UserService) { }
    getAllMeasurements(area: string): Observable<Measurement[]> {
        if (this._userService.user != undefined) {
            if (this._userService.user.Job != Job.TruckWorker)
                return this._http.get<Measurement[]>("/api/Measurement/GetUpdatedStateGarbages?area=" + area);
            else {
                return this._http.get<Measurement[]>("/api/Measurement/GetMeasurementForFullGarbages?area=" + area);
            }
        }
    }
    getMeasurements(): Measurement[] {
        return this.measurements;
    }
    
}