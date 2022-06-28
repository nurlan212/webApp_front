import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AnonimousMenu = () => {
  return (
    <>
      <Button color='inherit' component={Link} to='/register'>
        SIGN UP
      </Button>
      <Button color='inherit' component={Link} to='/login'>
        SIGN IN
      </Button>
    </>
  );
};

export default AnonimousMenu;
