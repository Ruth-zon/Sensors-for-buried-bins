import { Component, OnInit, Input, Directive } from '@angular/core';
import { MeasurementService } from '../measurement.service';
import { UserService } from '../../user/user.service';
import { Job } from '../../user/user.model';
import { Measurement } from '../measurement.model';
import { DirectionService } from '../../direction/direction.service';
import { GarbageService } from '../../garbage/garbage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-measurement-map',
  templateUrl: './measurement-map.component.html',
  styleUrls: ['./measurement-map.component.css']
})
export class MeasurementMapComponent implements OnInit {
  @Input()
  area: string;
  latitude:number;
  longitude :number;
  zoom = 12;
  minZoom = 12;
  address_country = 'Il';
  mapType = 'satellite';
  waypoints: Array<any> = new Array();
  markers: Array<any> = new Array();
  origin;
  destination;
  measurements: Measurement[];
 
  blue= "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
  red= "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
  maxHeight: number;
  heightOfGarbage: number;
  isTruckWorker: boolean;
  
  constructor(private _measurementService: MeasurementService, private _userService: UserService, private _directionService: DirectionService,private _garbageService: GarbageService) { }

  ngOnInit() {
    this.measurements = this._measurementService.getMeasurements();
    this._directionService.GetOrigin().subscribe(data => {
      this.origin = { lat: parseFloat(data.split(',')[0]), lng: parseFloat(data.split(',')[1]) };
    });
    this._directionService.GetDestination().subscribe(data => {
      this.destination = { lat: parseFloat(data.split(',')[0]), lng: parseFloat(data.split(',')[1]) };
    });
    for (let measurement of this.measurements) {
      let lat = measurement.Garbage.Street.split(',')[0];
      let lng = measurement.Garbage.Street.split(',')[1];
      this.markers.push({ latitude: lat, longitude: lng, measurement: measurement });
      this.waypoints.push({ location: { lat: parseFloat(lat), lng: parseFloat(lng) }, stopover: true });
    }
    var maxLat=0,minLat=Number.MAX_VALUE,maxLng=0,minLng=Number.MAX_VALUE;
    this.markers.forEach(marker => {
      if(parseFloat(marker.latitude)>maxLat) maxLat=parseFloat(marker.latitude);
      if(parseFloat(marker.latitude)<minLat) minLat=parseFloat(marker.latitude);
      if(parseFloat(marker.longitude)>maxLng) maxLng=parseFloat(marker.longitude);
      if(parseFloat(marker.longitude)<minLng) minLng=parseFloat(marker.longitude);
    });
    this.latitude = (maxLat+minLat)/2;
    this.longitude = (maxLng+minLng)/2;
    this.isTruckWorker = this._userService.getCurrentUser().Job == Job.TruckWorker;
    this._garbageService.getMaxHeight().subscribe(data=>{
      this.maxHeight=data;
  });
  this._garbageService.getHeightOfGarbage().subscribe(data=>{
    this.heightOfGarbage=data;
})
  }
  full(measurement:Measurement):boolean{
    return this.maxHeight< this.heightOfGarbage-measurement.Distance;
  }
}
