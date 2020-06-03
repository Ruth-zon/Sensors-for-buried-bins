import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Garbage } from '../garbage.model';
import { GarbageService } from '../garbage.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-garbage',
  templateUrl: './add-garbage.component.html',
  styleUrls: ['./add-garbage.component.css']
})
export class AddGarbageComponent implements OnInit {

  @Input()
  garbage: Garbage;

  @Output()
  isUpdated: EventEmitter<any> = new EventEmitter();

  isAdd: boolean = true;
  clicked: boolean = false;

  formGarbage: FormGroup;
  constructor(private _garbageService: GarbageService) { }
  ngOnInit() {
    this.formGarbage = new FormGroup({
      code: new FormControl(''),
      city: new FormControl('', [
        Validators.required]),
      area: new FormControl('', [
        Validators.required]),
      street: new FormControl('', [
        Validators.required]),
      sensorName: new FormControl('', [
        Validators.required])
    });
    if (!(this.garbage != null && this.garbage != undefined)) {
      this.garbage = new Garbage();
    }
    else {
      this.isAdd = false;
    }
  }
  addOrUpdate() {
    if (this.formGarbage.valid) {
      this.clicked = true;
      if (!this.isAdd) {
        Swal.fire({
          title: 'Please wait...',
          onBeforeOpen: () => {
            Swal.showLoading()
          }
        });
        this._garbageService.updateGarbage(this.garbage).
          subscribe(
            data =>{ 
              Swal.close();
              this.isUpdated.emit();
            },
            fail => console.log(fail));
      }
      else {
        this._garbageService.addGarbage(this.garbage).subscribe(
          data=>{console.log(data)},
          error => {
            Swal.fire({
              type: 'error',
              title: 'Oopss...',
              text: 'Something went wrong with the details!'
            });
          }
        );
      }
    }
  }
}
