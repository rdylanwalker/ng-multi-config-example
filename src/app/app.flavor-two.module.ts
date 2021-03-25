import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppFlavorTwoComponent } from './app.flavor-two.component';
import { AnyComponent } from './any/any.component';
import { FlavorTwoComponent } from './flavor-two/flavor-two.component';

@NgModule({
  declarations: [
    AppFlavorTwoComponent,
    AnyComponent,
    FlavorTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [ AppFlavorTwoComponent ]
})
export class AppModule { }
