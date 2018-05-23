import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcule'
})
export class CalculePipe implements PipeTransform {
  transform(value: number, args?: any): any {
    console.log('update');
    return value + 12;
  }
}
