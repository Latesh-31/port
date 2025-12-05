'use client';

import { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('intro');
  // `scrollTo` will hold the label name of the section to scroll to
  const [scrollTo, setScrollTo] = useState(null); 

  const value = {
    scrollProgress,
    setScrollProgress,
    activeSection,
    setActiveSection,
    scrollTo,
    setScrollTo,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
