import { createContext, useContext, useEffect } from 'react';
import { useDarkMode } from 'usehooks-ts';

type Theme = 'light' | 'dark';

type Props = {
  children: React.ReactNode;
};

interface ThemeContextValue {
  theme: Theme;
  toggle: VoidFunction;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  toggle: () => null,
});

const ThemeProvider = ({ children }: Props) => {
  const { isDarkMode, toggle } = useDarkMode();

  const contextValue: ThemeContextValue = {
    theme: isDarkMode ? 'dark' : 'light',
    toggle,
  };

  // OS interaction
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
