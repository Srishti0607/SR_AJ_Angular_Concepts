import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthLimit'
})
export class LengthLimitPipe implements PipeTransform {

  transform(value: any,limit:Number) {
    if (value.length > limit) {
      return value.substr(0, limit) + '....';
    }
    else {
      return value;
    }
  }

}
