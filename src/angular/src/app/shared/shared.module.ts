import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputRefDirective } from './input-ref.directive';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InputRefDirective, FilterPipe],
  exports: [InputRefDirective, FilterPipe]
})
export class SharedModule { }
