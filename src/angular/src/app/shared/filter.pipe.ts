import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filter?: any): any {
    // clean undefined object properties
    Object.keys(filter).forEach(key => !filter[key] && delete filter[key]);

    return this.checkComplexType(items, filter);
  }

  private checkComplexType(values, filter): any {
    if (!values || !filter || Object.entries(filter).length === 0) {
      return values;
    }
    const result = [];

    // find in all records
    values.forEach(row => {
      let match = false;
      // find in all filters in the object of filters
      for (const [key, value] of Object.entries(filter)) {
        match = this.checkValue(row, key, value);
        if (!match) {
          return false;
        }
      }
      if (match) {
        result.push(row); // add row in return
      }
    });

    return result;
  }

  private checkValue(item, key, value): boolean {
    if (!item || !key || !value || value === '') {
      return true;
    }
    return (
      item[key]
        .toString()
        .toLowerCase()
        .indexOf(value.toString().toLowerCase()) !== -1
    );
  }
}
