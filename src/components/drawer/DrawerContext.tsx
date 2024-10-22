
import React, { FC, createContext, useContext, useState, useEffect } from 'react';

interface DrawerContextType { 
  expandAll: boolean;
  setExpandAll: (expandAll: boolean) => void;
  registerSubDrawer: (id: string, isOpen: boolean) => void;
  updateSubDrawerState: (id: string, isOpen: boolean) => void;
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('useDrawerContext must be used within a DrawerProvider');
  }
  return context;
}

interface DrawerProviderProps { 
  children: React.ReactNode;
}

export const DrawerProvider: FC<DrawerProviderProps> = ({ children }) => {
  const [expandAll, setExpandAll] = useState(false);
  const [subDrawerStates, setSubDrawerStates] = useState<{ [key: string]: boolean }>({});

  const registerSubDrawer = (id: string, isOpen: boolean) => {
    console.log('hello', id, isOpen)
    setSubDrawerStates((prevState) => ({ ...prevState, [id]: isOpen }));
  };

  const updateSubDrawerState = (id: string, isOpen: boolean) => { 
    setSubDrawerStates((prevState) => ({ ...prevState, [id]: isOpen }));
  };

  useEffect(() => { 
    const allClosed = Object.values(subDrawerStates).every((isOpen) => !isOpen);
    if (allClosed) {
      setExpandAll(false);
    }
  }, [subDrawerStates]);

  return (
    <DrawerContext.Provider value={{ expandAll, setExpandAll, registerSubDrawer, updateSubDrawerState }}>
      {children}
    </DrawerContext.Provider>
  )
}