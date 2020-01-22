import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefixforname'
})
export class PrefixfornamePipe implements PipeTransform {

  transform(name: string, gender: string): any {
    if (gender.toLowerCase() === 'male') {
      return 'Mr. ' + name;
    } else {
      return 'Mrs. ' + name;
    }
  }

}
