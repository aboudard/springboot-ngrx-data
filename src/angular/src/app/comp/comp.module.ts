import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaInputComponent } from './fa-input/fa-input.component';
import {HelloComponent} from "./hello/hello.component";
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FaInputComponent, HelloComponent, NavbarComponent],
  exports: [FaInputComponent, HelloComponent, NavbarComponent]
})
export class CompModule { }
