import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule, MdTableModule, MdCheckboxModule, MdIconModule, MdButtonModule, MdSlideToggleModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

import { AppComponent } from './app.component';
import { FF4JService } from './app.service';
import { HttpModule, JsonpModule } from '@angular/http'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserModule, HttpModule, JsonpModule, MaterialModule, MdTableModule, CdkTableModule, MdSlideToggleModule
  ],
  providers: [
    FF4JService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
