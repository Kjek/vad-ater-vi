import { type AppType } from 'next/app';

import { api } from '../utils/api';

import '../styles/globals.css';

import {} from '~/utils/date-utils'; // To inizialize the functions
import {} from '~/utils/string-utils'; // To inizialize the functions
import { ThemeProvider } from '~/hooks/useTheme';
import { StateProvider } from '~/hooks/useGlobalState';

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
