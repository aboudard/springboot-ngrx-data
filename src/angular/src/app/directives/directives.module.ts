import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputRefDirective } from './input-ref.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InputRefDirective],
  exports: [InputRefDirective]
})
export class DirectivesModule { }
