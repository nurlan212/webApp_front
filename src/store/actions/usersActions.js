import axios from '../../axiosWebApp';
import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  GET_USER_ME_SUCCESS,
  GET_USER_ME_FAILURE,
  EDIT_USER_FAILURE,
  EDIT_USER_SUCCESS,
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE_FAILURE,
} from '../actionTypes';

const createUserSuccess = (user) => {
  return { type: CREATE_USER_SUCCESS, user };
};

const createUserFailure = (error) => {
  return { type: CREATE_USER_FAILURE, error };
};

export const createUser = (userData, navigate) => {
  return async (dispatch) => {
    try {
      const resp = await axios.post('/users', userData);
      dispatch(createUserSuccess(resp.data));
      navigate('/people');
    } catch (err) {
      if (err.response && err.response.data) {
        dispatch(createUserFailure(err.response.data));
      } else {
        dispatch(createUserFailure(err));
      }
    }
  };
};

const loginUserSuccess = (user) => {
  return { type: LOGIN_USER_SUCCESS, user };
};

const loginUserFailure = (error) => {
  return { type: LOGIN_USER_FAILURE, error };
};

export const loginUser = (userData, navigate) => {
  return async (dispatch) => {
    try {
      let res = await axios.post('/users/sessions', userData);
      dispatch(loginUserSuccess(res.data));
      navigate('/people');
    } catch (err) {
      dispatch(loginUserFailure(err));
    }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    try {
      await axios.delete('/users/sessions');
      dispatch({ type: LOGOUT_USER });
    } catch (err) {
      console.log(err);
    }
  };
};

const getUserMeSuccess = (user) => {
  return { type: GET_USER_ME_SUCCESS, user };
};

const getUserMeFailure = (error) => {
  return { type: GET_USER_ME_FAILURE, error };
};

export const getUserMe = () => {
  return async (dispatch) => {
    try {
      const resp = await axios.get('/users/me');
      dispatch(getUserMeSuccess(resp.data));
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch(getUserMeFailure(error.response.data));
      } else {
        dispatch(getUserMeFailure(error));
      }
    }
  };
};

const editUserSuccess = (user) => {
  return { type: EDIT_USER_SUCCESS, user };
};

const editUserFailure = (error) => {
  return { type: EDIT_USER_FAILURE, error };
};

export const editUser = (user) => {
  return async (dispatch) => {
    try {
      const resp = await axios.put('/users/edit', user);
      dispatch(editUserSuccess(resp.data));
    } catch (error) {
      if (error.response && error.response.data) {
        dispatch(editUserFailure(error.response.data));
      } else {
        dispatch(editUserFailure(error));
      }
    }
  };
};

const getPeopleSuccess = (people) => {
  return { type: GET_PEOPLE_SUCCESS, people };
};

const getPeopleError = (error) => {
  return { type: GET_PEOPLE_FAILURE, error };
};

export const getPeople = () => {
  return async (dispatch) => {
    try {
      const resp = await axios.get('/users/people');
      dispatch(getPeopleSuccess(resp.data));
    } catch (error) {
      dispatch(getPeopleError(error));
    }
  };
};
