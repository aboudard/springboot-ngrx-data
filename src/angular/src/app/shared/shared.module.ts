import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputRefDirective } from './input-ref.directive';
import { FilterPipe } from './filter.pipe';
import { CalculePipe } from './calcule.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [InputRefDirective, FilterPipe, CalculePipe],
  exports: [InputRefDirective, FilterPipe, CalculePipe]
})
export class SharedModule {}
