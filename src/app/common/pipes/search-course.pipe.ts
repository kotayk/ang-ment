import { Pipe, PipeTransform } from '@angular/core';
import {Course} from '../../models/course';

@Pipe({
  name: 'searchCourse'
})
export class SearchCoursePipe implements PipeTransform {

  transform(array: Course[], args?: any): any {
    const query = args ? args[0] : '';
    const courseItems = array.slice(0);
    const filteredArray = courseItems.filter(course =>
      course.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    return filteredArray;
  }

}
