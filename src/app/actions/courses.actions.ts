import { Action } from '@ngrx/store';
import {ICourse} from '../interfaces/icourse';

export enum CoursesActionTypes {
  GetList = '[Courses] GetList',
  GetListSuccess = '[Courses] GetListSuccess',
  GetListFailure = '[Courses] GetListFailure',
  AddPage = '[Courses] AddPage',
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

export type CoursesActions =
  | GetList
  | AddPage
  | GetListSuccess
  | GetListFailure;
