import { Injectable } from '@angular/core';
import {ICourse} from '../../interfaces/icourse';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: ICourse[];

  constructor(private http: HttpClient) {}

  getList(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>('http://localhost:3004/courses' );
  }

  createCourse() {
    console.log('save');
  }

  getItemById(id): Observable<ICourse> {
    return this.http.get<ICourse>(`http://localhost:3004/courses/${id}`);
  }

  updateItem() {}

  removeItem(id) {
    this.courses = this.courses.filter(course => course.id !== id);
  }

}
