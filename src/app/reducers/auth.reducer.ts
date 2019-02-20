import {AuthActions, AuthActionTypes} from '../actions/auth.actions';

export interface State {
  userIsLogged: boolean;
}

const initialState: State = {
  userIsLogged: false,
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
    default:
      return state;
  }
}

export const userIsLogged = (state: State) => state.userIsLogged;
