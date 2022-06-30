import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  GET_USER_ME_SUCCESS,
  GET_USER_ME_FAILURE,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILURE,
} from '../actionTypes';

const initialState = {
  user: null,
  registerError: null,
  loginError: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return { ...state, user: action.user, registerError: null };
    case CREATE_USER_FAILURE:
      return { ...state, registerError: action.error };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.user, loginError: null };
    case LOGIN_USER_FAILURE:
      return { ...state, loginError: action.error };
    case LOGOUT_USER:
      return { ...state, user: null };
    case GET_USER_ME_SUCCESS:
      return { ...state, user: action.user, error: null };
    case GET_USER_ME_FAILURE:
      return { ...state, error: action.error };
    case EDIT_USER_SUCCESS:
      return { ...state, user: action.user, error: null };
    case EDIT_USER_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default reducer;
