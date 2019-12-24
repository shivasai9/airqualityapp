import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirdataComponent } from './airdata/airdata.component';
import { HomeComponent } from './home/home.component';
import { AirqualityService } from './airquality.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { LearnmoreComponent } from './learnmore/learnmore.component';
import { FormsModule } from '@angular/forms';
import { StaticdataService } from './staticdata.service';

@NgModule({
  declarations: [
    AppComponent,
    AirdataComponent,
    HomeComponent,
    NotfoundComponent,
    LearnmoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [AirqualityService,StaticdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
