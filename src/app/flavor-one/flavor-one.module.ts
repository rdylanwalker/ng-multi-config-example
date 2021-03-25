import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneChildComponent } from "./one-child/one-child.component";
import { FlavorOneComponent } from "./flavor-one.component";


@NgModule({
  declarations: [
    FlavorOneComponent,
    OneChildComponent,
  ],
  exports: [
    FlavorOneComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FlavorOneModule { }
