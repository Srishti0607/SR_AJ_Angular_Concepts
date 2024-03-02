import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(rate: any): string {

    if(rate >= 4)
     return rate + "[ Excellent]";
    if (rate >= 3 ) {
      return rate + "[ Very Good ]";
    }
    else if (rate >= 1.5 ) {
      return rate + "[ Average ]";
    }
    else{
      return rate + "[ Poor ]";
    }
  }


}
