import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EditForm from '../../components/EditForm/EditForm';
import FormElement from '../../components/UI/FormElement/FormElement';
import InputFile from '../../components/UI/InputFile/InputFile';
import { baseUrl } from '../../constants';
import { editUser, getUserMe } from '../../store/actions/usersActions';
import './AccountEdit.css';

const AccountEdit = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.users.user);

  const [state, setState] = useState({
    username: user.username,
    password: '123',
    image: user.image,
  });

  const [fileName, setFileName] = useState('No selected files');

  // useEffect(() => {
  //   dispatch(getUserMe());
  // }, [dispatch]);

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

  const editUserHandler = async (e) => {
    e.preventDefault();
    const userData = new FormData();
    Object.keys(state).forEach((key) => {
      userData.append(key, state[key]);
    });
    await dispatch(editUser(userData));
    navigate('/account');
  };

  const imagePath = state.image
    ? `${baseUrl}/uploads/${state.image}`
    : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

  return (
    <div className='Account'>
      <div className='Account__image'>
        <div
          className='Account__image__img'
          style={{ backgroundImage: `url(${imagePath}` }}
        />
        <InputFile onChangeFile={onChangeFile} fileName={fileName} />
      </div>
      <div className='Account__content'>
        <EditForm onSubmit={editUserHandler} btnText='Сохранить'>
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

export default AccountEdit;
