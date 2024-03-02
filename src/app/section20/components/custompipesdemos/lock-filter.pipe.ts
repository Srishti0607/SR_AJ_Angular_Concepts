import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'LockFilter'
})
export class LockFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, filterMetadata: any
    ,sortOn:string,sortDir:any): any {
    
      searchText ? sortOn = '' : sortOn = sortOn;


    if(!items) return [];

    if(!sortOn){}
    else{
        items.sort((a,b)=>{
           a= a[sortOn].toLowerCase();
           b= b[sortOn].toLowerCase();
           return a.localeCompare(b) * sortDir;
         });
         return items;
       }

       
  if(!searchText) {
      filterMetadata.count = items.length;     
      return items;
    }
    searchText = searchText.toLowerCase();

    let filteredItems = items.filter(function(item){
      return JSON.stringify(Object.values(item)).toLowerCase().includes(searchText);
  });

  filterMetadata.count = filteredItems.length; 
  return filteredItems;
}

}
