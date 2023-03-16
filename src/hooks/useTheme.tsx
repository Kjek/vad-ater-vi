import { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark';

type Props = {
  children: React.ReactNode;
};

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: () => {},
});

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>('dark');

  const contextValue: ThemeContextValue = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
