import { useEffect, useState } from 'react';

const useThemeDetector = () => {
  const getCurrentTheme = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const mqListener = (event: MediaQueryListEvent) => {
    setIsDarkTheme(event.matches);
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeMq.addEventListener('change', mqListener);
    return () => darkThemeMq.removeEventListener('change', mqListener);
  }, []);
  return isDarkTheme;
};

export default useThemeDetector;
