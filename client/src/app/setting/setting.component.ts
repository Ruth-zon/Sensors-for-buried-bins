import { Component, OnInit } from '@angular/core';
import { TruckService } from '../truck/truck.service';
import { GarbageService } from '../garbage/garbage.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DirectionService } from '../direction/direction.service';
import { MeasurementService } from '../measurement/measurement.service';
import Swal from 'sweetalert2';
import { Observable, observable } from 'rxjs';
import { promise } from 'protractor';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  maxHeight: number;
  heightOfGarbage: number;
  lengthOfGarbage: number;
  widthOfGarbage: number;
  beforeMaxHeight: number;
  beforeHeightOfGarbage: number;
  beforeLengthOfGarbage: number;
  beforeWidthOfGarbage: number;
  isGarbageChange: boolean = false;
  formGarbage: FormGroup;

  truckCapacity: number;
  beforeTruckCapacity: number;
  isTruckChange: boolean = false;
  formTruck: FormGroup;

  directionOrigin: string;
  beforeDirectionOrigin: string;
  directionDestination: string;
  beforeDirectionDestination: string;
  isDirectionChange: boolean = false;
  formDirection: FormGroup;

  deleteDate: Date;
  isMeasurementChange: boolean = false;
  formMeasurement: FormGroup;

  constructor(private _truckService: TruckService, private _garbageService: GarbageService, private _directionService: DirectionService, private _measurementService: MeasurementService) {
  }

  swalCancel() {
    Swal.fire(
      'Cancelled',
      '',
      'error'
    )
  }
  async swalSave(): Promise<boolean> {
    var res: boolean = false;
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    });
    await swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "Do you want to change the settings?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, change it',
      cancelButtonText: 'No, cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        res = true;
      }
    });
    return res;
  }
  async setDefaultSettings() {
    if (await this.swalSave()) {
        await this._truckService.setDefultSettings().subscribe(data =>console.log(data));
        await this._garbageService.setDefultSettings().subscribe(data => console.log(data));
        await this._directionService.setDefultSettings().subscribe(data =>console.log(data));
        this.getSettings();
    }
  }
  async saveGarbage() {
    if (this.formGarbage.valid && await this.swalSave()) {
      this._garbageService.setHeightOfGarbage(this.heightOfGarbage).subscribe(data => console.log(data));
      this._garbageService.setLengthOfGarbage(this.lengthOfGarbage).subscribe(data => console.log(data));
      this._garbageService.setMaxHeight(this.maxHeight).subscribe(data => console.log(data));
      this._garbageService.setWidthOfGarbage(this.widthOfGarbage).subscribe(data => console.log(data));
      this.isGarbageChange = false;
    }
  }
  cancelGarbage() {
    this.swalCancel();
    this.maxHeight = this.beforeMaxHeight;
    this.heightOfGarbage = this.beforeHeightOfGarbage;
    this.lengthOfGarbage = this.beforeLengthOfGarbage;
    this.widthOfGarbage = this.beforeWidthOfGarbage;
    this.isGarbageChange = false;
  }
  async saveDirection() {
    if (this.formDirection.valid && await this.swalSave()) {
      this._directionService.setDestination(this.directionDestination).subscribe(data => console.log(data));
      this._directionService.setOrigin(this.directionOrigin).subscribe(data => console.log(data));
      this.isDirectionChange = false;
    }
  }
  cancelDirection() {
    this.swalCancel();
    this.directionDestination = this.beforeDirectionDestination;
    this.directionOrigin = this.beforeDirectionOrigin;
    this.isTruckChange = false;
  }
  async saveTruck() {
    if (this.formTruck.valid && await this.swalSave()) {
      this._truckService.setCapacity(this.heightOfGarbage).subscribe(data => console.log(data));
      this.isTruckChange = false;
    }
  }
  cancelTruck() {
    this.swalCancel();
    this.truckCapacity = this.beforeTruckCapacity;
    this.isTruckChange = false;
  }
  async saveMeasurement() {
    if (this.formMeasurement.valid && await this.swalSave()) {
      this._measurementService.deleteUntilDate(this.deleteDate).subscribe(data => console.log(data));
      this.isMeasurementChange = false;
    }
  }
  cancelMeasurement() {
    this.swalCancel();
    this.truckCapacity = this.beforeTruckCapacity;
    this.isTruckChange = false;
  }
  ngOnInit() {
    this.formGarbage = new FormGroup({
      garbageHeight: new FormControl('', [
        Validators.required]),
      garbageWidth: new FormControl('', [
        Validators.required]),
      garbageLength: new FormControl('', [
        Validators.required]),
      garbageMaxHeight: new FormControl('', [
        Validators.required])
    });
    this.formTruck = new FormGroup({
      truckCapacity: new FormControl('', [
        Validators.required])
    });
    this.formDirection = new FormGroup({
      directionDestination: new FormControl('', [
        Validators.required]),
      directionOrigin: new FormControl('', [
        Validators.required])
    });
    this.formMeasurement = new FormGroup({
      deleteDate: new FormControl('', [
        Validators.required])
    });
    this.getSettings();
  }
  getSettings() {
    this._garbageService.getHeightOfGarbage().subscribe(
      data => this.heightOfGarbage = this.beforeHeightOfGarbage = data,
      fail => console.log(fail)
    );
    this._garbageService.getLengthOfGarbage().subscribe(
      data => this.lengthOfGarbage = this.beforeLengthOfGarbage = data,
      fail => console.log(fail)
    );
    this._garbageService.getMaxHeight().subscribe(
      data => this.maxHeight = this.beforeMaxHeight = data,
      fail => console.log(fail)
    );
    this._garbageService.getWidthOfGarbage().subscribe(
      data => this.widthOfGarbage = this.beforeWidthOfGarbage = data,
      fail => console.log(fail)
    );
    this._truckService.getCapacity().subscribe(
      data => this.truckCapacity = this.beforeTruckCapacity = data,
      fail => console.log(fail)
    );
    this._directionService.GetDestination().subscribe(
      data => this.directionDestination = this.beforeDirectionDestination = data,
      fail => console.log(fail)
    );
    this._directionService.GetOrigin().subscribe(
      data => this.directionOrigin = this.beforeDirectionOrigin = data,
      fail => console.log(fail)
    );
  }

}
