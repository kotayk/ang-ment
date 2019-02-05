import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ICourse} from '../../interfaces/icourse';
import {CoursesService} from '../../common/services/courses.service';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsResolverService implements Resolve<ICourse> {

  constructor(private coursesService: CoursesService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id');
    return this.coursesService.getItemById(id);
  }

}
