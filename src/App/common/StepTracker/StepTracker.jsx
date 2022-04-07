import React from 'react';
import { Stepper, Step, StepLabel } from '@material-ui/core';

import { useStyle } from 'App/common/styles';

const StepTracker = ({ activeStep, steps }) => {
  const classes = useStyle();

  return (
    <Stepper activeStep={activeStep} className={classes.stepper}>
      {steps.map((step) => (
        <Step key={step.label}>
          <StepLabel>{step.label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default StepTracker;
