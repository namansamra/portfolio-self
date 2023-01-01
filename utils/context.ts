import React from 'react';
interface Props {
  showLoader: boolean;
  setShowLoader: (val: boolean) => void;
}
export const MainContext = React.createContext<Props | null>(null);

export const useMainContext = () => {
  const context = React.useContext(MainContext);

  if (!context) {
    throw new Error('MainContext must only be used within its Provider');
  }

  return context;
};
