import React from 'react';
import { Formik, Form } from 'formik';
import { Grid, Typography, Button } from '@material-ui/core';
import { useStyle } from 'App/common/styles';
import InputField from 'App/common/InputField';
import { useFormContext } from 'App/pages/MainPage/FormContext';

const PersonalInfo = ({ onNext }) => {
  const classes = useStyle();
  const { dispatch } = useFormContext();
  const initialValues = {
    firstName: '',
    lastName: ''
  };

  const onSubmit = (values) => {
    dispatch({ type: 'submit', data: values });
    onNext();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form id={'PersonalInfo'}>
        <Typography variant="h6" gutterBottom>
          Personal Info
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputField name={'firstName'} label={'First name'} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField name={'lastName'} label={'Last name'} fullWidth />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
};

export default PersonalInfo;
