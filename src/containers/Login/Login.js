import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Alert, AlertTitle } from '@mui/material';
import FormElement from '../../components/UI/FormElement/FormElement';
import UserForm from '../../components/UserForm/UserForm';
import { loginUser } from '../../store/actions/usersActions';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.users.loginError);
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const changeInputHandler = (e) => {
    const { name, value } = e.target;
    setState((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser({ ...state }, navigate));
  };

  return (
    <UserForm title='Sign In' onSubmit={onSubmitHandler}>
      {error && (
        <Alert severity='error' sx={{ width: '100%' }}>
          <AlertTitle>Error</AlertTitle>
          {error.response.data.error}
        </Alert>
      )}
      <FormElement
        name='username'
        label='Username'
        type='text'
        onChange={changeInputHandler}
        value={state.username}
      />
      <FormElement
        name='password'
        label='Password'
        type='password'
        onChange={changeInputHandler}
        value={state.password}
      />
    </UserForm>
  );
};

export default Login;
