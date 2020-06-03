import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DirectionService {

  constructor(private _http: HttpClient) { }
  GetOrigin(): Observable<string> {
    return this._http.get<string>("/api/Direction/GetOrigin");
  }
  GetDestination(): Observable<string> {
    return this._http.get<string>("/api/Direction/GetDestination");
  }
  setOrigin(origin: string): Observable<void> {
    return this._http.put<void>("/api/Direction/PutOrigin?origin="+ origin,null);
  }
  setDestination(destination: string): Observable<void> {
    return this._http.put<void>("/api/Direction/PutDestination?destination="+ destination,null);
  }
  setDefultSettings(): Observable<void> {
    return this._http.put<void>("api/Direction/PutDefultSettings", null);
  }
  /*  latitude = 31.7717675;
  longitude = 35.2200404;
  zoom = 12;
  minZoom = 12;*/
}
