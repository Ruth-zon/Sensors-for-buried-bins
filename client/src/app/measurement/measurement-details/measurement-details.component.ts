import { Component, OnInit, Input } from '@angular/core';
import { Measurement } from '../measurement.model';
import { MeasurementService } from '../measurement.service';
import { GarbageService } from '../../garbage/garbage.service';

@Component({
  selector: 'app-measurement-details',
  templateUrl: './measurement-details.component.html',
  styleUrls: ['./measurement-details.component.css']
})
export class MeasurementDetailsComponent implements OnInit {
  @Input()
  measurement:Measurement;
  heightGarbage:number;
  constructor(private _garbageService: GarbageService) { }

  ngOnInit() {
    if (this._garbageService.heightGarbage == null || this._garbageService.heightGarbage == undefined) {
      this._garbageService.getHeightOfGarbage()
        .subscribe(data => {
          this.heightGarbage = data;
          this._garbageService.heightGarbage = data;
        });
    }
  }
}
