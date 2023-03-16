import { useState } from 'react';
import useEffectOnce from './useEffectOnce';

const useThemeDetector = () => {
  const getCurrentTheme = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDarkOS, setIsDarkOS] = useState(false);
  const mqListener = (event: MediaQueryListEvent) => {
    setIsDarkOS(event.matches);
  };

  useEffectOnce(() => {
    setIsDarkOS(getCurrentTheme());
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeMq.addEventListener('change', mqListener);
    return () => darkThemeMq.removeEventListener('change', mqListener);
  });
  return { isDarkOS, setIsDarkOS };
};

export default useThemeDetector;
