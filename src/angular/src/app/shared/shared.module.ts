import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalculePipe } from './calcule.pipe';
import { FilterPipe } from './filter.pipe';
import { InputRefDirective } from './input-ref.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [InputRefDirective, FilterPipe, CalculePipe],
  exports: [InputRefDirective, FilterPipe, CalculePipe]
})
export class SharedModule {}
