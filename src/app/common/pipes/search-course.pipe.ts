import { Pipe, PipeTransform } from '@angular/core';
import {ICourse} from '../../interfaces/icourse';

@Pipe({
  name: 'searchCourse'
})
export class SearchCoursePipe implements PipeTransform {

  transform(array: ICourse[], args?: any): any {
    if (!array.length) {
      return [];
    }
    const query = args ? args[0] : '';
    const courseItems = array.slice(0);
    const filteredArray = courseItems.filter(course =>
      course.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    return filteredArray;
  }

}
