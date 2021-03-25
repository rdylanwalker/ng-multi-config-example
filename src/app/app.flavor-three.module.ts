import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppFlavorThreeComponent } from "./app.flavor-three.component";
import { AnyComponent } from './any/any.component';
import { FlavorThreeComponent } from './flavor-three/flavor-three.component';

@NgModule({
  declarations: [
    AppFlavorThreeComponent,
    AnyComponent,
    FlavorThreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [ AppFlavorThreeComponent ]
})
export class AppModule { }
