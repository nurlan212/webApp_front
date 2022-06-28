import React from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import UserMenu from './Menus/UserMenu';
import AnonimousMenu from './Menus/AnonimousMenu';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const AppToolBar = () => {
  const user = useSelector((state) => state.users.user);

  return (
    <ThemeProvider theme={theme}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' sx={{ flexGrow: 1 }}>
            <Link
              to='/'
              style={{
                textDecoration: 'none',
                color: 'inherit',
                '&:hover': {
                  color: '#ccc',
                },
              }}
            >
              WebApp
            </Link>
          </Typography>
          <Grid item>
            {user ? <UserMenu user={user} /> : <AnonimousMenu />}
          </Grid>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default AppToolBar;
