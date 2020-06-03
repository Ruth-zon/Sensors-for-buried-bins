import { Component, OnInit, Input } from '@angular/core';
import { MeasurementService } from '../measurement.service';
import { Measurement } from '../measurement.model';
import { UserService } from '../../user/user.service';
import { ReturnStatement } from '@angular/compiler';
import { GarbageService } from '../../garbage/garbage.service';

@Component({
  selector: 'app-measurement-list',
  templateUrl: './measurement-list.component.html',
  styleUrls: ['./measurement-list.component.css']
})
export class MeasurementListComponent implements OnInit {
  indexShow: number;
  ind:number=0;
  area: string;
  heightGarbage: number;
  measurements: Measurement[];
  textToSearch: string="";

  constructor(private _measurementService: MeasurementService, private _userService: UserService, private _garbageService: GarbageService) {
    this.area = _userService.getCurrentUser().Area;
  }
  ngOnInit() {
    if (this._measurementService.measurements == null || this._measurementService.measurements == undefined) {
      this._measurementService.getAllMeasurements(this.area).subscribe(
        data => {
          this.measurements = data;
          this._measurementService.measurements = data;
        },
        fail => {
          console.log(fail);
        });
    } else {
      this.measurements = this._measurementService.getMeasurements();
    }
    if (this._garbageService.heightGarbage == null || this._garbageService.heightGarbage == undefined) {
      this._garbageService.getHeightOfGarbage()
        .subscribe(data => {
          this.heightGarbage = data;
          this._garbageService.heightGarbage = data;
        });
    }
    this.heightGarbage = this._garbageService.heightGarbage;
    //   return this.measurements;
  }
  changeIndexShow(ind: number) {
    if (this.indexShow == ind)
      this.indexShow = -1;
    else
      this.indexShow = ind;
  }
  contain(i: number) {
    if (this.measurements[i].Distance.toString().includes(this.textToSearch) ||
      this.measurements[i].Garbage.Area.toString().includes(this.textToSearch) ||
      this.measurements[i].Garbage.City.toString().includes(this.textToSearch) ||
      (i+1).toString().includes(this.textToSearch) ||
      this.measurements[i].Garbage.GarbageCode.toString().includes(this.textToSearch) ||
      this.measurements[i].Garbage.SensorName.toString().includes(this.textToSearch) ||
      this.measurements[i].Garbage.Street.toString().includes(this.textToSearch) ||
      this.measurements[i].MeasurementTime.toString().includes(this.textToSearch))
      return true;
    return false;
  }
  sortByDistance() {
    this.measurements.sort((a,b)=>a.Distance-b.Distance);
    this.ind=4;
  }
  sortByArea(){
    this.measurements.sort((a,b)=>a.Garbage.Area.localeCompare(b.Garbage.Area));
    this.ind=2;
  }
  sortByCity(){
    this.measurements.sort((a,b)=>a.Garbage.City.localeCompare(b.Garbage.City));
    this.ind=1;
  }
  sortByStreet(){
    this.measurements.sort((a,b)=>a.Garbage.Street.localeCompare(b.Garbage.Street));
    this.ind=3;
  }
  sortByCode(){
    this.measurements.sort((a,b)=>a.Garbage.GarbageCode-b.Garbage.GarbageCode);
    this.ind=0;
  }
}
