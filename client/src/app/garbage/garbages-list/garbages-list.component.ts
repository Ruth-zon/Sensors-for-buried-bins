import { Component, OnInit } from '@angular/core';
import { Garbage } from '../garbage.model';
import { GarbageService } from '../garbage.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-garbages-list',
  templateUrl: './garbages-list.component.html',
  styleUrls: ['./garbages-list.component.css']
})
export class GarbagesListComponent implements OnInit {
  currentGarbage: Garbage;
  garbages: Garbage[];
  isOpenUpdate = false;
  overEdit = -1;
  overDel = -1;
  constructor(private _garbageService: GarbageService, private _router: Router) {

  }
  openUpdate(garbage: Garbage) {
    this.currentGarbage = new Garbage();
    this.currentGarbage.Area = garbage.Area;
    this.currentGarbage.City = garbage.City;
    this.currentGarbage.GarbageCode = garbage.GarbageCode;
    this.currentGarbage.SensorName = garbage.SensorName;
    this.currentGarbage.Street = garbage.Street;
    this.isOpenUpdate = true;
  }

  delete(garbage: Garbage) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "Do you want to delete garbage " + garbage.GarbageCode + " ?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it',
      cancelButtonText: 'No, cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'garbage ' + garbage.GarbageCode,
          'success'
        )
        this._garbageService.deleteGarbage(garbage).
          subscribe(
            data => (this.getAllGarbages(true)),
            fail => console.log(fail));
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          '',
          'error'
        )
      }
    })
  };
  update() {
    this.isOpenUpdate = false;
    this.getAllGarbages(true);

  }
  getAllGarbages(refresh:boolean) {
    if (this._garbageService.garbages == undefined || refresh) {
      Swal.fire({
        title: 'Please wait...',
        onBeforeOpen: () => {
          Swal.showLoading()
        }
      });
      this._garbageService.getAllGarbages()
        .subscribe(
          data => {
            Swal.close();
            this.garbages = data;
            this._garbageService.garbages = data;
          },
          fail => {
            console.log(fail)
          });
    }
    else {
      this.garbages = this._garbageService.garbages;
    }
  }
  ngOnInit() {
    this.getAllGarbages(false);
  }
}
