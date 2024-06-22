import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false //could lead to performance issues if the data too large
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterValue: string, propName: string): any {
    if (value?.length === 0){
      return value;
    }
    return value.filter(item => item[propName].includes(filterValue));
  }

}
