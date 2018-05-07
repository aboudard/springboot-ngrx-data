import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaInputComponent } from './fa-input/fa-input.component';
import {HelloComponent} from "./hello/hello.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FaInputComponent, HelloComponent],
  exports: [FaInputComponent, HelloComponent]
})
export class CompModule { }
