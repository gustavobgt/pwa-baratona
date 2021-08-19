import React, { createContext, useState } from 'react';

const AppContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [user, setUser] = useState({});

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
