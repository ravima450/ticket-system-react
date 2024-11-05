import React, { useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { useContext } from 'react';

const ThemeProvider = ({children} :any)=>{
    const [theme, updateTheme] = useState<string>('light')

    const toggleTheme = () => {
      updateTheme((a:string) => ( a == 'light' ? 'dark' : 'light'));
    };

    return (
      <ThemeContext.Provider value={{theme, toggleTheme}} >
        {children}
      </ThemeContext.Provider >
    )
    
}

export default ThemeProvider