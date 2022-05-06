import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInput, MatInputModule} from "@angular/material/input";
import { KlikaczComponent } from './Klikacz/klikacz/klikacz.component';
import {SumujService} from "./Klikacz/Servis/sumuj.service";

@NgModule({
  declarations: [
    AppComponent,
    KlikaczComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    SumujService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
