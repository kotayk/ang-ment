import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Effect, Actions, ofType} from '@ngrx/effects';
import {tap, map, exhaustMap, catchError} from 'rxjs/operators';
import {AuthService} from '../common/services/auth.service';
import {of} from 'rxjs';

// import {
//   Login,
//   LoginSuccess,
//   LoginFailure,
//   AuthActionTypes,
// } from '../actions/auth.actions';
import {CoursesActionTypes, GetList, GetListFailure, GetListSuccess} from '../actions/courses.actions';
import {CoursesService} from '../common/services/courses.service';
import {ICourse} from '../interfaces/icourse';

@Injectable()
export class CoursesEffects {
  @Effect()
  getList$ = this.actions$.pipe(
    ofType(CoursesActionTypes.GetList),
    map((action: GetList) => ({paging: action.paging, searchQuery: action.searchQuery})),
    exhaustMap((params: any) =>
      this.coursesService
        .getList(params.paging, params.searchQuery)
        .pipe(
          map((courses: ICourse[]) => new GetListSuccess(courses)),
          catchError(error => of(new GetListFailure(error)))
        )
    )
  );

  // @Effect({dispatch: false})
  // getListSuccess$ = this.actions$.pipe(
  //   ofType(CoursesActionTypes.GetListSuccess),
  //   map((action: GetListSuccess) => action)
  // );

  // @Effect({dispatch: false})
  // getListFailure$ = this.actions$.pipe(
  //   ofType(CoursesActionTypes.GetListFailure),
  //   map((action: GetListSuccess) => action.payload)

  // );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private router: Router
  ) {
  }
}
