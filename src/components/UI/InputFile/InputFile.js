import React, { useRef } from 'react';
import { TextField, Button, Box } from '@mui/material';

const InputFile = ({ onChangeFile, fileName }) => {
  const inputRef = useRef();

  const clickTrigger = () => {
    inputRef.current.click();
  };

  return (
    <Box item container sx={{ my: 0, display: 'flex', flexDirection: 'row' }}>
      <input
        type='file'
        style={{ display: 'none' }}
        ref={inputRef}
        onChange={(e) => {
          onChangeFile(e);
        }}
      />
      <Button sx={{ mr: 1 }} variant='contained' onClick={clickTrigger}>
        Choose the file
      </Button>
      <TextField value={fileName} disabled />
    </Box>
  );
};

export default InputFile;
