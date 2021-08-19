import React, { createContext, useState } from 'react';

const initialState = {
  token: '',
};

const AppContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);

  const saveUser = (data) => {
    setUser(data);
  };

  return (
    <AppContext.Provider value={{ user, saveUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => {
  return React.useContext(AppContext);
};
