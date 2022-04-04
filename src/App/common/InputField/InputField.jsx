import React from 'react';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';

const InputField = (props) => {
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);

  return (
    <TextField
      type="text"
      error={meta.touched && meta.error && true}
      {...field}
      {...rest}
    />
  );
};

export default InputField;
