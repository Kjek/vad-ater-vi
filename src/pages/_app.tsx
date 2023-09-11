import useDarkMode from '@hook/useDarkMode';
import { StateProvider } from '@hook/useGlobalState';
import { ThemeProvider } from '@hook/useTheme';
import { api } from '@util/api';
import {} from '@util/init-utils';
import { Analytics } from '@vercel/analytics/react';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { type AppType } from 'next/app';
import '../styles/globals.css';

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
          <Analytics />
        </ThemeProvider>
      </SessionProvider>
    </StateProvider>
  );
};

export default api.withTRPC(MyApp);
