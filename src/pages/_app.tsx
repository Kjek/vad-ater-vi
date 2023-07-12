import { type AppType } from 'next/app';

import { api } from '@util/api';

import '../styles/globals.css';

import { StateProvider } from '@hook/useGlobalState';
import { ThemeProvider } from '@hook/useTheme';
import {} from '@util/init-utils';
import useDarkMode from '@hook/useDarkMode';
import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps,
}) => {
  useDarkMode();
  return (
    <StateProvider>
      <SessionProvider session={pageProps.session}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </StateProvider>
  );
};

export default api.withTRPC(MyApp);
