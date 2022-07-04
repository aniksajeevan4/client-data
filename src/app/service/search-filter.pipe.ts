import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(collection:any=[],searchValue:string): any {
    if(!collection || !searchValue){
        return collection
    }
    return collection.filter((Collect:any)=>
        Collect.firstname.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        Collect.occupation.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        Collect.cdistrict.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) 


         );
  }
}

