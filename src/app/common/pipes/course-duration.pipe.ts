import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseDuration'
})
export class CourseDurationPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    const num = +value;
    if (!num) { return ''; }
    if (!Number.isInteger(num)) { return 'Wrong value'; }

    const hrs = Math.floor(num / 60);
    const mins = num % 60;
    return hrs ? `${hrs} hr ${mins} min` : `${mins} min`;
  }

}
