import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { useTheme } from './useTheme';
import useThemeDetector from './useThemeDetector';

interface UseDarkModeOutput {
  isDarkMode: boolean;
  toggle: () => void;
}

const useDarkMode = (): UseDarkModeOutput => {
  const { setTheme } = useTheme();
  const { isDarkOS } = useThemeDetector();
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>(
    'dark-mode',
    isDarkOS
  );

  // OS interaction
  useEffect(() => {
    if (isDarkOS) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setIsDarkMode(isDarkOS);
    setTheme(isDarkMode ? 'dark' : 'light');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkOS]);

  // User interaction
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setTheme(isDarkMode ? 'dark' : 'light');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkMode]);
  return { isDarkMode, toggle: () => setIsDarkMode((prev) => !prev) };
};

export default useDarkMode;
