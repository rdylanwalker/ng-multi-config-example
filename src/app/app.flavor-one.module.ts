import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppFlavorOneComponent } from './app.flavor-one.component';
import { AnyComponent } from './any/any.component';
import { FlavorOneModule } from "./flavor-one/flavor-one.module";

@NgModule({
  declarations: [
    AppFlavorOneComponent,
    AnyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlavorOneModule,
  ],
  providers: [],
  bootstrap: [ AppFlavorOneComponent ]
})
export class AppModule { }
