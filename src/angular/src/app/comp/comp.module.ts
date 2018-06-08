import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaInputComponent } from './fa-input/fa-input.component';
import { HelloComponent } from './hello/hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

/**
 * Module des composants annexes non liés aux routes
 */
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    FaInputComponent,
    HelloComponent,
    NavbarComponent,
    FooterComponent
  ],
  exports: [FaInputComponent, HelloComponent, NavbarComponent, FooterComponent]
})
export class CompModule {}
