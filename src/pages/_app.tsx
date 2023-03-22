import { type AppType } from 'next/app';

import { api } from '@util/api';

import '../styles/globals.css';

import { StateProvider } from '@hook/useGlobalState';
import { ThemeProvider } from '@hook/useTheme';
import {} from '@util/date-utils'; // To inizialize the functions
import {} from '@util/string-utils'; // To inizialize the functions

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <StateProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </StateProvider>
  );
};

export default api.withTRPC(MyApp);
