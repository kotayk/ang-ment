import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseDuration'
})
export class CourseDurationPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    const hrs = Math.floor(value / 60);
    const mins = value % 60;
    if (!hrs) {
      return `${mins} min`;
    } else {
      return `${hrs} hr ${mins} min`;
    }
  }

}
