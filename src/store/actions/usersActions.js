import axios from '../../axiosWebApp';
import { push } from 'connected-react-router';
import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
} from '../actionTypes';

const createUserSuccess = (user) => {
  return { type: CREATE_USER_SUCCESS, user };
};

const createUserFailure = (error) => {
  return { type: CREATE_USER_FAILURE, error };
};

export const createUser = (userData) => {
  return async (dispatch) => {
    try {
      const resp = await axios.post('/users', userData);
      dispatch(createUserSuccess(resp.data));
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

export const loginUser = (userData) => {
  return async (dispatch) => {
    try {
      let res = await axios.post('/users/sessions', userData);
      dispatch(loginUserSuccess(res.data));
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
      dispatch(push('/'));
    } catch (err) {
      console.log(err);
    }
  };
};
