import { Injectable } from '@angular/core';
import { Garbage } from './garbage.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable(
    { providedIn: 'root' }
)
export class GarbageService {
    garbages: Garbage[];
  heightGarbage: any;
    constructor(private _http: HttpClient) { }
    getAllGarbages(): Observable<Garbage[]> {
        return this._http.get<Garbage[]>("/api/Garbage/GetAll");
    }
    addGarbage(garbage: Garbage) {
        return this._http.post("/api/Garbage", garbage);
    }
    deleteGarbage(garbage: Garbage) {
        return this._http.delete("/api/Garbage?id=" + garbage.GarbageCode);
    }
    updateGarbage(garbage: Garbage): any {
        return this._http.put("/api/Garbage/Put", garbage);
    }

    getMaxHeight(): Observable<number> {
        return this._http.get<number>("/api/Garbage/GetMaxHeight");
    }
    getHeightOfGarbage(): Observable<number> {
        return this._http.get<number>("/api/Garbage/GetHeightOfGarbage");
    }
    getLengthOfGarbage(): Observable<number> {
        return this._http.get<number>("/api/Garbage/GetLengthOfGarbage");
    }
    getWidthOfGarbage(): Observable<number> {
        return this._http.get<number>("/api/Garbage/GetWidthOfGarbage");
    }
    setMaxHeight(maxHeight:number):Observable<void> {
        return this._http.put<void>("/api/Garbage/PutMaxHeight?maxHeight="+maxHeight,null);
    }
    setHeightOfGarbage(heightOfGarbage:number):Observable<void> {
        return this._http.put<void>("/api/Garbage/PutHeightOfGarbage?heightOfGarbage="+heightOfGarbage,null);
    }
    setLengthOfGarbage(lengthOfGarbage:number):Observable<void> {
        return this._http.put<void>("/api/Garbage/PutLengthOfGarbage?lengthOfGarbage="+lengthOfGarbage,null);
    }
    setWidthOfGarbage(widthOfGarbage:number):Observable<void> {
        return this._http.put<void>("/api/Garbage/PutWidthOfGarbage?widthOfGarbage="+widthOfGarbage,null);
    }
    setDefultSettings():Observable<void> {
        return this._http.put<void>("api/Garbage/PutDefultSettings",null);
    }
}