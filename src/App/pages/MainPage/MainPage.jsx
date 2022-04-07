import React, { useState } from 'react';

import { FormContextProvider } from 'App/pages/MainPage/FormContext';
import PersonalInfo from 'App/pages/MainPage/Components/PersonalInfo';
import ContactInfo from 'App/pages/MainPage/Components/ContactInfo';
import Confirmation from './Components/Confirmation';
import StepTracker from 'App/common/StepTracker';

const steps = [
  { label: 'Personal Info', component: PersonalInfo },
  { label: 'Contact Info', component: ContactInfo }
];

const MainPage = () => {
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
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default MainPage;
