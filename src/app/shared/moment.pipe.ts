import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moment',
  pure: false
})
export class MomentPipe implements PipeTransform {

  transform(value: any, format: string = 'MMMM YYYY'): string {
    return value.format(format);
  }
}
