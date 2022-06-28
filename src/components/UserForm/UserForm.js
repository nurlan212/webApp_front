import React from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  Typography,
  Container,
  Box,
  Grid,
  Link,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const UserForm = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            {props.title}
          </Typography>
          <Box
            component='form'
            onSubmit={(e) => {
              props.onSubmit(e);
            }}
            noValidate
            sx={{ mt: 1 }}
          >
            {props.children}
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              sx={{ mt: 3, mb: 2 }}
            >
              {props.title}
            </Button>
            {props.linkTo && (
              <Grid container justifyContent='flex-end'>
                <Grid item>
                  <Link
                    variant='body2'
                    component={RouterLink}
                    to={props.linkTo.to}
                  >
                    {props.linkTo.text}
                  </Link>
                </Grid>
              </Grid>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default UserForm;
