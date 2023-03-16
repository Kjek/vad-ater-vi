import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import useThemeDetector from './useThemeDetector';

interface UseDarkModeOutput {
  isDarkMode: boolean;
  toggle: () => void;
}

const useDarkMode = (): UseDarkModeOutput => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkOS]);

  // User interaction
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  return { isDarkMode, toggle: () => setIsDarkMode((prev) => !prev) };
};

export default useDarkMode;
