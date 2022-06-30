import React from 'react';
import { Container, CssBaseline, Box, Button } from '@mui/material';

const EditForm = (props) => {
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
        }}
      >
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
            {props.btnText}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default EditForm;
