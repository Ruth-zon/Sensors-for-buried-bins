import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeasurementModule } from './measurement/measurement.module';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { UserModule } from './user/user.module';
import { GarbageModule } from './garbage/garbage.module';

// import { MenubarModule, SharedModule } from 'primeng/primeng';
import { AgmCoreModule } from '@agm/core';
import { IndexComponent } from './index/index.component';
import { AgmDirectionModule} from 'agm-direction';
import { AuthGuardManager } from './auth-guard-manager';
import { AuthGuard } from './auth-guard';
import { SettingComponent } from './setting/setting.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    IndexComponent,
    SettingComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MeasurementModule,
    FormsModule,
    UserModule,
    GarbageModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBzKb5jFrwYnDB6V5iPO9KEedkmg42CPdU',
      language:  'he'
    }),
    AgmDirectionModule
    // ,
    // MenubarModule,
    // SharedModule
  ],
  providers: [
    AuthGuard,
    AuthGuardManager
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
