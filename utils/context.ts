import React from 'react';

export const MainContext = React.createContext<any>({});

export const useMainContext = () => {
  const context = React.useContext(MainContext);

  if (!context) {
    throw new Error('MainContext must only be used within its Provider');
  }

  return context;
};
