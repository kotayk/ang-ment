import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAuth from './auth.reducer';
import * as fromCourses from './courses.reducer';


export interface State {
  auth: fromAuth.State;
  courses: fromCourses.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  courses: fromCourses.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
