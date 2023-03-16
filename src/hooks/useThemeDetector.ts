import { useEffect, useState } from 'react';

const useThemeDetector = () => {
  const getCurrentTheme = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDarkOS, setIsDarkOS] = useState(false);
  const mqListener = (event: MediaQueryListEvent) => {
    setIsDarkOS(event.matches);
  };

  useEffect(() => {
    setIsDarkOS(getCurrentTheme());
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeMq.addEventListener('change', mqListener);
    return () => darkThemeMq.removeEventListener('change', mqListener);
  }, []);
  return { isDarkOS, setIsDarkOS };
};

export default useThemeDetector;
