import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputRefDirective } from './input-ref.directive';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ InputRefDirective ],
  exports: [ InputRefDirective ]
})
export class InputRefModule {
}