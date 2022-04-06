import React from 'react';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';

const InputField = ({ name, label, ...rest }) => {
  const [field, meta] = useField(name);

  return (
    <TextField
      type="text"
      error={meta.touched && meta.error}
      label={label}
      {...field}
      {...rest}
    />
  );
};

export default InputField;
