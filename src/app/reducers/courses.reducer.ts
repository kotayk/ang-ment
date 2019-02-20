import {ICourse} from '../interfaces/icourse';
import {CoursesActions, CoursesActionTypes} from '../actions/courses.actions';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface State {
  // userIsLogged: boolean;
  courses: ICourse[];
}

const initialState: State = {
  courses: [],
};

export function reducer(
  state: State = initialState,
  action: CoursesActions
): State {
  switch (action.type) {
    case CoursesActionTypes.GetListSuccess: {
      console.log('GetListSuccess: ', action.payload)
      return {
        ...state,
        courses: action.payload
      };
    }
    default:
      return state;
  }
}

export const courseList = (state: State) => state.courses;

export const selectCoursesState = createFeatureSelector<State>('courses');
export const getCourseList = createSelector(selectCoursesState, (state: State) => state.courses);


