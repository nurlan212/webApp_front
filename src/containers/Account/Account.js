import React, { useState } from 'react';
import EditForm from '../../components/EditForm/EditForm';
import FormElement from '../../components/UI/FormElement/FormElement';
import InputFile from '../../components/UI/InputFile/InputFile';
import './Account.css';

const Account = (props) => {
  const [state, setState] = useState({
    username: '',
    password: '',
    image: '',
  });

  const [fileName, setFileName] = useState('No selected files');

  const changeInputHandler = (e) => {
    const { name, value } = e.target;
    setState((prev) => {
      return { ...prev, [name]: value };
    });
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
    <div className='Account'>
      <div className='Account__image'>
        <img
          src='https://www.imgonline.com.ua/examples/bee-on-daisy.jpg'
          alt='profile_image'
        />
        <InputFile onChangeFile={onChangeFile} fileName={fileName} />
      </div>
      <div className='Account__content'>
        <EditForm>
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
        </EditForm>
      </div>
    </div>
  );
};

export default Account;
