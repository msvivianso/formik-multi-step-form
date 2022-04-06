import React, { useReducer } from 'react';

const FormContext = React.createContext();

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'submit': {
      const updatedData = Object.assign({}, state, action.data);
      return updatedData;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const FormContextProvider = ({ children }) => {
  const [data, dispatch] = useReducer(dataReducer, {});
  const value = { data, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

const useFormContext = () => {
  const context = React.useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormContextProvider');
  }
  return context;
};

export { FormContextProvider, useFormContext };
