import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MeasurementDetailsComponent } from './measurement-details/measurement-details.component';
import { MeasurementElementComponent } from './measurement-element/measurement-element.component';
import { MeasurementListComponent } from './measurement-list/measurement-list.component';
import { MeasurementMapComponent } from './measurement-map/measurement-map.component';
import { MeasurementService } from './measurement.service';
import { HttpClientModule } from "@angular/common/http"
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction'; 

@NgModule({
    declarations: [MeasurementDetailsComponent, MeasurementElementComponent,MeasurementListComponent,MeasurementMapComponent],
    imports: [CommonModule, FormsModule, HttpClientModule,AgmCoreModule,AgmDirectionModule],
    exports: [MeasurementDetailsComponent, MeasurementElementComponent,MeasurementListComponent],
    providers: [MeasurementService]
})
export class MeasurementModule {

}