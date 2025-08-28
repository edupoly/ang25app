import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    console.log('value::', value);
    console.log('args::', args);

    return value.sort((a: any, b: any) => {
      if (args[0] == 'dec') {
        return a > b ? -1 : 1;
      } else {
        return a > b ? 1 : -1;
      }
    });
  }
}
