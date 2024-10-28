
import React, { FC, createContext, useContext, useState, useEffect } from 'react';

interface DrawerContextType { 
  expandAll: boolean;
  setExpandAll: (expandAll: boolean) => void;
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

  const updateSubDrawerState = (id: string, isOpen: boolean) => { 
    setSubDrawerStates((prevState) => {
      const newState = { ...prevState, [id]: isOpen };
      const allClosed = Object.values(newState).every((isOpen) => !isOpen);
      if (allClosed) {
        setExpandAll(false);
      }
      return newState;
    });
  };

  useEffect(() => { 
    const allClosed = Object.values(subDrawerStates).every((isOpen) => !isOpen);
    if (allClosed) {
      setExpandAll(false);
    }
  }, [subDrawerStates]);

  return (
    <DrawerContext.Provider value={{ expandAll, setExpandAll, updateSubDrawerState }}>
      {children}
    </DrawerContext.Provider>
  )
}

export { DrawerContext };