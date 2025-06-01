// src/Context/AppContext.jsx
import { createContext, useState, useContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [collapsed, setCollapsed] = useState(true);

  return (
    <AppContext.Provider value={{ 
      userName, 
      setUserName,
      collapsed,
      setCollapsed
    }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook para consumir el contexto
export const useAppContext = () => useContext(AppContext);
