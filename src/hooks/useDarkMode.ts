import { useEffect } from 'react';
import { useTernaryDarkMode } from 'usehooks-ts';
import { useTheme } from './useTheme';

interface UseDarkModeOutput {
  isDarkMode: boolean;
  toggle: () => void;
}

const useDarkMode = (): UseDarkModeOutput => {
  const { setTheme } = useTheme();
  const { isDarkMode, toggleTernaryDarkMode } = useTernaryDarkMode();

  // OS interaction
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setTheme(isDarkMode ? 'dark' : 'light');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkMode]);

  return { isDarkMode, toggle: toggleTernaryDarkMode };
};

export default useDarkMode;
