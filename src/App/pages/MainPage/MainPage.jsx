import React, { useState } from 'react';
import { Paper } from '@material-ui/core';

import { FormContextProvider } from 'App/pages/MainPage/FormContext';
import PersonalInfo from 'App/pages/MainPage/Components/PersonalInfo';
import ContactInfo from 'App/pages/MainPage/Components/ContactInfo';
import Confirmation from './Components/Confirmation';
import StepTracker from 'App/common/StepTracker';
import { useStyle } from 'App/common/styles';

const steps = [
  { label: 'Personal Info', component: PersonalInfo },
  { label: 'Contact Info', component: ContactInfo }
];

const MainPage = () => {
  const classes = useStyle();
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length;

  const ComponentToRender = steps[activeStep]?.component;

  const onBack = () => {
    setActiveStep(activeStep - 1);
  };

  const onNext = (values) => {
    setActiveStep(activeStep + 1);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <h1>Main Body is here</h1>
        <FormContextProvider>
          {isLastStep ? (
            <Confirmation />
          ) : (
            <>
              <StepTracker activeStep={activeStep} steps={steps} />
              <ComponentToRender onNext={onNext} onBack={onBack} />
            </>
          )}
        </FormContextProvider>
      </Paper>
    </div>
  );
};

export default MainPage;
