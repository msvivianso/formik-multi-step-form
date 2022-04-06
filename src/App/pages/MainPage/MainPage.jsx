import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Button, CircularProgress, Grid } from '@material-ui/core';

import { useStyle } from 'App/common/styles';
import PersonalInfo from 'App/pages/MainPage/Components/PersonalInfo';
import ContactInfo from 'App/pages/MainPage/Components/ContactInfo';

const formModel = {
  formId: 'mainForm',
  formField: {
    firstName: {
      name: 'firstName',
      label: 'First name'
    },
    lastName: {
      name: 'lastName',
      label: 'Last name'
    },
    city: {
      name: 'city',
      label: 'City'
    },
    country: {
      name: 'country',
      label: 'Country'
    }
  }
};

const initialValues = {
  firstName: '',
  lastName: '',
  city: '',
  country: ''
};

const steps = [PersonalInfo, ContactInfo];

const MainPage = () => {
  const classes = useStyle();
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;

  const ComponentToRender = steps[activeStep];

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const submitForm = async (values, actions) => {
    await sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  };

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  return (
    <React.Fragment>
      <h1>Main Body is here</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form id={formModel.formId}>
            <ComponentToRender formField={formModel.formField} />

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <div className={classes.wrapper}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      {isLastStep ? 'Submit' : 'Next'}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </div>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default MainPage;
