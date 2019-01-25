import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseDuration'
})
export class CourseDurationPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    if (!value) { return ''; }
    if (!Number.isInteger(value)) { return 'Wrong value'; }

    const hrs = Math.floor(value / 60);
    const mins = value % 60;
    return hrs ? `${hrs} hr ${mins} min` : `${mins} min`;
  }

}
