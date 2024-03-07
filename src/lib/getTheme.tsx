type Theme = 'dark' | 'light';

declare global {
  interface Window {
    __theme: string;
    __onThemeChange: (theme: Theme) => void;
    __setPreferredTheme: (theme: Theme) => void;
  }
}

const code = () => {
  window.__onThemeChange = () => null;

  const setTheme = (newTheme: Theme) => {
    document.documentElement.classList.remove(window.__theme);
    window.__theme = newTheme;
    preferredTheme = newTheme;
    document.documentElement.dataset.theme = newTheme;
    window.__onThemeChange(newTheme);
    document.documentElement.classList.add(newTheme);
  };

  let preferredTheme;

  try {
    preferredTheme = localStorage.getItem('dark-mode') as Theme;
  } catch (err) {}

  window.__setPreferredTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    try {
      localStorage.setItem('dark-mode', newTheme);
    } catch (err) {}
  };

  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  darkQuery.addEventListener('change', function (e) {
    window.__setPreferredTheme(e.matches ? 'dark' : 'light');
  });

  setTheme(preferredTheme ?? (darkQuery.matches ? 'dark' : 'light'));
};

// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
const getTheme = `(${code})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: getTheme }} />;
}
