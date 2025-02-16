import { createContext, useContext } from "react";
import { useToggle } from "react-haiku";
const themeContext = createContext();

export const ThemeContextWrapper = ({ children }) => {
  const [theme, toggleTheme] = useToggle("dark", ["dark", "light"]);
  return (
    <themeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </themeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(themeContext);
};
