import React, { useState } from 'react';
// import { Formik, Form } from 'formik';
// import { Button, CircularProgress, Grid } from '@material-ui/core';

import { FormContextProvider } from 'App/pages/MainPage/FormContext';
import PersonalInfo from 'App/pages/MainPage/Components/PersonalInfo';
import ContactInfo from 'App/pages/MainPage/Components/ContactInfo';
import Confirmation from './Components/Confirmation';

const steps = [PersonalInfo, ContactInfo];

const MainPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length;

  const ComponentToRender = steps[activeStep];

  const onBack = () => {
    setActiveStep(activeStep - 1);
  };

  const onNext = (values) => {
    setActiveStep(activeStep + 1);
  };

  return (
    <React.Fragment>
      <h1>Main Body is here</h1>
      <FormContextProvider>
        {isLastStep ? (
          <Confirmation />
        ) : (
          <ComponentToRender onNext={onNext} onBack={onBack} />
        )}
      </FormContextProvider>
    </React.Fragment>
  );
};

export default MainPage;
