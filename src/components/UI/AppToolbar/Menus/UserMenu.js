import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Fade, Grid, Menu, MenuItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../../../store/actions/usersActions';

const UserMenu = ({ user }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <Grid container direction='row' alignItems='center'>
      <Typography variant='button'>
        <Link
          to='/people'
          style={{
            textDecoration: 'none',
            color: 'inherit',
            '&:hover': {
              color: '#ccc',
            },
          }}
        >
          Accounts
        </Link>
      </Typography>
      <Button
        aria-controls='fade-menu'
        aria-haspopup='true'
        onClick={handleClick}
        color='inherit'
      >
        Hello, {user.username}
      </Button>
      <Menu
        id='fade-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem component={Link} to='/account'>
          Profile
        </MenuItem>
        <MenuItem onClick={logoutHandler} component={Link} to='/'>
          Logout
        </MenuItem>
      </Menu>
    </Grid>
  );
};

export default UserMenu;
