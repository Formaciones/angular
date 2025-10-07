import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'siono',
  standalone: false
})
export class SionoPipe implements PipeTransform {

  transform(value: boolean | undefined, arg1: string = 'Sí', arg2 = 'No'): string {
    //if(value === undefined) return;    
    return value ? arg1 : arg2;
  }

}
