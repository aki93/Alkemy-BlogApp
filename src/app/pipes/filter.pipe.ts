import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filter: any): any {

    if (!items || !filter) {
      return items;
  }
  console.log(items)
  return items.filter(item => item.userId) ;
 
}
}


