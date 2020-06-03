import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http"
import { AddGarbageComponent } from './add-garbage/add-garbage.component';
import { GarbagesListComponent } from './garbages-list/garbages-list.component';

import { GarbageService } from './garbage.service';

@NgModule({
    declarations: [AddGarbageComponent,GarbagesListComponent],
    imports: [CommonModule, FormsModule, HttpClientModule,ReactiveFormsModule],
    exports: [AddGarbageComponent,GarbagesListComponent],
    providers: [GarbageService]
})
export class GarbageModule {

}