import React from 'react';
import { Formik, Form } from 'formik';
import { Grid, Typography, Button } from '@material-ui/core';
import { useStyle } from 'App/common/styles';
import InputField from 'App/common/InputField';
import { useFormContext } from 'App/pages/MainPage/FormContext';

const ContactInfo = ({ onNext, onBack }) => {
  const classes = useStyle();
  const { dispatch } = useFormContext();
  const initialValues = {
    city: '',
    country: ''
  };

  const onSubmit = (values) => {
    dispatch({ type: 'submit', data: values });
    onNext();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form id={'ContactInfo'}>
        <Typography variant="h6" gutterBottom>
          Contact Info
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputField name={'city'} label={'City'} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField name={'country'} label={'Country'} fullWidth />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Button onClick={onBack} className={classes.button}>
              Back
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
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

export default ContactInfo;
