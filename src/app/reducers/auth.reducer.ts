import {AuthActions, AuthActionTypes} from '../actions/auth.actions';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface State {
  userIsLogged: boolean;
  userData: object;
}

const initialState: State = {
  userIsLogged: false,
  userData: {}
};

export function reducer(
  state: State = initialState,
  action: AuthActions
): State {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess: {
      return {
        ...state,
        userIsLogged: true,
      };
    }
    case AuthActionTypes.Logout: {
      return initialState;
    }
    case AuthActionTypes.GetUserInfoSuccess: {
      return {
        ...state,
        userData: action.payload
      };
    }
    default:
      return state;
  }
}

export const userIsLogged = (state: State) => state.userIsLogged;

export const selectAuthState = createFeatureSelector<State>('auth');
export const getUserData = createSelector(selectAuthState, (state: State) => state.userData);
