import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: false,
  pure: true
})
export class SortPipe implements PipeTransform {

  transform(value: any, field: string = '', order: 'asc' | 'desc' = 'asc'): any {
    if (!value) return '';
    
    value.sort((a: any, b: any) => {
      if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
      if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
      return 0;
    });
    
    return value;
  }

}
