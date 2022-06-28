import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Grid, MenuItem } from '@mui/material';

const FormElement = (props) => {
  let inputChildren = null;
  if (props.select) {
    inputChildren = props.options.map((item) => {
      return (
        <MenuItem key={item._id} value={item._id}>
          {item.name}
        </MenuItem>
      );
    });
  }

  return (
    <Grid item xs={12}>
      <TextField
        margin='normal'
        variant='outlined'
        fullWidth
        required={props.required}
        id={props.name}
        type={props.type}
        multiline={props.multiline}
        minRows={3}
        label={props.label}
        name={props.name}
        autoComplete={props.name}
        value={props.value}
        onChange={props.onChange}
        error={!!props.error}
        helperText={props.error}
        select={props.select}
        disabled={props.disabled}
      >
        {inputChildren}
      </TextField>
    </Grid>
  );
};

FormElement.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  multiline: PropTypes.bool,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  select: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default FormElement;
