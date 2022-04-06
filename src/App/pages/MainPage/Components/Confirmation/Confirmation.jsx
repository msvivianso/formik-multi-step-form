import React from 'react';
import { useFormContext } from 'App/pages/MainPage/FormContext';

const Confirmation = () => {
  const { data } = useFormContext();

  return (
    <React.Fragment>
      <h2>Sign up was successful!</h2>
      {JSON.stringify(data, null, 2)}
    </React.Fragment>
  );
};

export default Confirmation;
