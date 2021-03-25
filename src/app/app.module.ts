import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnyComponent } from './any/any.component';
import { FlavorTwoComponent } from './flavor-two/flavor-two.component';
import { FlavorThreeComponent } from './flavor-three/flavor-three.component';
import { FlavorOneModule } from "./flavor-one/flavor-one.module";

@NgModule({
  declarations: [
    AppComponent,
    AnyComponent,
    FlavorTwoComponent,
    FlavorThreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlavorOneModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
