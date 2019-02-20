import { Action } from '@ngrx/store';

export enum CoursesActionTypes {
  GetList = '[Courses] GetList',
  GetListSuccess = '[Courses] GetListSuccess',
  GetListFailure = '[Courses] GetListFailure',
}

export class GetList implements Action {
  readonly type = CoursesActionTypes.GetList;

  constructor(public payload: any) {}
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
  | GetListSuccess
  | GetListFailure;
