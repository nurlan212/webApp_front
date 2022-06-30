import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'date-fns';
import FormElement from '../../components/UI/FormElement/FormElement';
import UserForm from '../../components/UserForm/UserForm';
import { createUser } from '../../store/actions/usersActions';
import InputFile from '../../components/UI/InputFile/InputFile';
import { LocalizationProvider, DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField, Stack } from '@mui/material';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.users.registerError);
  const [state, setState] = useState({
    username: '',
    password: '',
    email: '',
    sex: '',
    birthdate: new Date(),
    image: '',
  });

  const [fileName, setFileName] = useState('No selected files');

  const changeInputHandler = (e) => {
    const { name, value } = e.target;
    setState((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleDateChange = (date) => {
    setState((prev) => {
      return { ...prev, birthdate: date };
    });
  };

  const getFieldError = (fieldName) => {
    try {
      return error.errors[fieldName].message;
    } catch (err) {
      return undefined;
    }
  };

  const createUserHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(state).forEach((key) => {
      formData.append(key, state[key]);
    });
    dispatch(createUser(formData, navigate));
  };

  const onChangeFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      setState((prev) => {
        return { ...prev, image: file };
      });

      setFileName(file.name);
    }
  };

  return (
    <UserForm
      title='Sign Up'
      onSubmit={createUserHandler}
      linkTo={{ to: '/login', text: 'Already have an account? Sign in' }}
    >
      <FormElement
        name='username'
        label='Username'
        type='text'
        error={getFieldError('username')}
        onChange={changeInputHandler}
        value={state.username}
      />
      <FormElement
        name='password'
        label='Password'
        type='password'
        error={getFieldError('password')}
        onChange={changeInputHandler}
        value={state.password}
      />
      <FormElement
        name='email'
        label='email'
        type='email'
        error={getFieldError('email')}
        onChange={changeInputHandler}
        value={state.email}
      />
      <FormElement
        name='sex'
        label='sex'
        select={true}
        options={[
          { _id: 'male', name: 'male' },
          { _id: 'female', name: 'female' },
        ]}
        type='text'
        error={getFieldError('sex')}
        onChange={changeInputHandler}
        value={state.sex}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3} sx={{ my: 3 }}>
          <DesktopDatePicker
            label='Birth date'
            value={state.birthdate}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
      <InputFile onChangeFile={onChangeFile} fileName={fileName} />
    </UserForm>
  );
};

export default Register;
