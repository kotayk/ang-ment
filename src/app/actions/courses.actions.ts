import { Action } from '@ngrx/store';
import {ICourse} from '../interfaces/icourse';

export enum CoursesActionTypes {
  GetList = '[Courses] GetList',
  GetListSuccess = '[Courses] GetListSuccess',
  GetListFailure = '[Courses] GetListFailure',
  AddPage = '[Courses] AddPage',
  CreateCourse = '[Courses] CreateCourse',
  CreateCourseFailure = '[Courses] CreateCourseFailure',
  CreateCourseSuccess = '[Courses] CreateCourseSuccess',
}

export class GetList implements Action {
  readonly type = CoursesActionTypes.GetList;

  constructor(public paging: any, public searchQuery?: string) {}
}

export class AddPage implements Action {
  readonly type = CoursesActionTypes.AddPage;

  constructor(public newCourses: ICourse[]) {}
}

export class GetListSuccess implements Action {
  readonly type = CoursesActionTypes.GetListSuccess;

  constructor(public payload: any) {}
}

export class GetListFailure implements Action {
  readonly type = CoursesActionTypes.GetListFailure;

  constructor(public payload: any) {}
}

export class CreateEditCourse implements Action {
  readonly type = CoursesActionTypes.CreateCourse;

  constructor(public course: ICourse, public isCreation: boolean) {}
}

export class CreateCourseSuccess implements Action {
  readonly type = CoursesActionTypes.CreateCourseSuccess;

  constructor() {}
}

export class CreateCourseFailure implements Action {
  readonly type = CoursesActionTypes.CreateCourseFailure;

  constructor(public payload: any) {}
}

export type CoursesActions =
  | GetList
  | AddPage
  | GetListSuccess
  | GetListFailure
  | CreateEditCourse
  | CreateCourseSuccess
  | CreateCourseFailure;
