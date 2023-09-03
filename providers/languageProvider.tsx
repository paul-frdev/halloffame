'use client'

import React, { useState } from 'react';


interface ContextType {
  selectedLanguage: string;
  setSelectedLanguage?: (data: string) => void;
}

const initialState = {
  selectedLanguage: 'ua',

};
export const LanguageContext = React.createContext<ContextType>(initialState);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}