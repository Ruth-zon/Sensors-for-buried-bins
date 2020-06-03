import { Component, OnInit, Input, Output } from '@angular/core';
import { Measurement } from '../measurement.model';
import { MeasurementService } from '../measurement.service';

@Component({
  selector: 'app-measurement-element',
  templateUrl: './measurement-element.component.html',
  styleUrls: ['./measurement-element.component.css']
})
export class MeasurementElementComponent implements OnInit {

  @Input()
  isShowDetails:boolean;

  @Input()
  measurement:Measurement;

  @Input()
  index:number;
  @Input()
  heightGarbage:number;
  constructor(private _measurementService: MeasurementService) { 
    
  }
  ngOnInit() {

  }


}
