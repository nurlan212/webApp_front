import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EditForm from '../../components/EditForm/EditForm';
import FormElement from '../../components/UI/FormElement/FormElement';
import { baseUrl } from '../../constants';
import '../AccountEdit/AccountEdit.css';

const Account = (props) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.users.user);

  const clickButtonHandler = (e) => {
    e.preventDefault();
    navigate('/account/edit');
  };

  const imagePath = user.image
    ? `${baseUrl}/uploads/${user.image}`
    : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

  return (
    <div className='Account'>
      <div className='Account__image'>
        <div
          className='Account__image__img'
          style={{ backgroundImage: `url(${imagePath}` }}
        />
      </div>
      <div className='Account__content'>
        <EditForm onSubmit={clickButtonHandler} btnText='Изменить'>
          <FormElement
            name='username'
            label='Username'
            type='text'
            value={user.username}
            disabled
          />
        </EditForm>
      </div>
    </div>
  );
};

export default Account;
