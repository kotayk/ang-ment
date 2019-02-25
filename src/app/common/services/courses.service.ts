import { Injectable } from '@angular/core';
import {ICourse} from '../../interfaces/icourse';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import * as Courses from '../../actions/courses.actions';
import {select, Store} from '@ngrx/store';
import * as fromCourses from '../../reducers/courses.reducer';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: ICourse[];

  constructor(private http: HttpClient, private store: Store<fromCourses.State>) {}

  getList(page?, searchQuery?): Observable<ICourse[]> {
    const params = {} as any;
    if (page) {
      params.start = page.start;
      params.count = page.count;
    }
    if (searchQuery) {
      params.textFragment = searchQuery;
    }
    return this.http.get<ICourse[]>('http://localhost:3004/courses', {params});
  }

  getItemById(id): Observable<ICourse> {
    return this.http.get<ICourse>(`http://localhost:3004/courses/${id}`);
  }

  updateItem(course): Observable<ICourse> {
    return this.http.patch<ICourse>(`http://localhost:3004/courses/${course.id}`, course);
  }

  removeItem(id): Observable<ICourse> {
    return this.http.delete<ICourse>(`http://localhost:3004/courses/${id}`);
  }

  createCourse(course): Observable<ICourse> {
    return this.http.post<ICourse>(`http://localhost:3004/courses/`, course);
  }

  dispatchGetList(paging, params?) {
    this.store.dispatch(new Courses.GetList(paging, params));
  }

  dispatchAddPage(courses) {
    this.store.dispatch(new Courses.AddPage(courses));
  }

  dispatchCreateEditCourse(course, isCreation) {
    this.store.dispatch(new Courses.CreateEditCourse(course, isCreation));
  }

  connectCoursesToStore(): Observable<ICourse[]> {
    return this.store.pipe(select(fromCourses.getCourseList));
  }

}
