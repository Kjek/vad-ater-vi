import { StateProvider } from '@hook/useGlobalState';
import { api } from '@util/api';
import {} from '@util/init-utils';
import { Analytics } from '@vercel/analytics/react';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { type AppType } from 'next/app';
import ToastProvider from '@provider/ToastProvider';
import '../styles/globals.css';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps,
}) => {
  return (
    <StateProvider>
      <SessionProvider session={pageProps.session}>
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
        <Analytics />
      </SessionProvider>
    </StateProvider>
  );
};

export default api.withTRPC(MyApp);
