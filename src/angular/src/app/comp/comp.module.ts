import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaInputComponent } from './fa-input/fa-input.component';
import { HelloComponent } from './hello/hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FooterComponent } from './footer/footer.component';;

@NgModule({
  imports: [CommonModule, AppRoutingModule],
  declarations: [
    FaInputComponent,
    HelloComponent,
    NavbarComponent,
    FooterComponent
  ],
  exports: [FaInputComponent, HelloComponent, NavbarComponent, FooterComponent]
})
export class CompModule {}
