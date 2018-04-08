import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], fieldFilter: string, keywords:string ): any {
    if(!fieldFilter ||!keywords){
      return list
    }
    return list.filter(item=>{
      let fieldValue = item[fieldFilter]
      return fieldValue.indexOf(keywords)>0
    });
  }

}
