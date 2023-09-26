import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("dark");

const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState('light');

  const handleSetTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark':'light')
  }

  return <ThemeContext.Provider value={{
    theme,
    changeTheme: handleSetTheme
  }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext)

export default ThemeProvider;
