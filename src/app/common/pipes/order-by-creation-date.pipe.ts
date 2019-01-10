import { Pipe, PipeTransform } from '@angular/core';
import {Course} from '../../models/course';

@Pipe({
  name: 'orderByCreationDate'
})
export class OrderByCreationDatePipe implements PipeTransform {

  transform(array: Course[], args?: any): any {
    const asc = args ? args[0] : false;
    const courseItems = array;
    courseItems.sort((a: any, b: any) => {
      const dateA = new Date(a.creationDate).getTime();
      const dateB = new Date(b.creationDate).getTime();
      if (asc) {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
    return courseItems;
  }

}
