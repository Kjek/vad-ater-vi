import { type AppRouter } from '@server/api/root';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTRPCReact, httpBatchLink } from '@trpc/react-query';
import type { PropsWithChildren } from 'react';
import { useState } from 'react';
import superjson from 'superjson';

export const mockedTrpc = createTRPCReact<AppRouter>();
export const StorybookTrpcProvider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: { queries: { staleTime: Infinity } },
    })
  );
  const [trpcClient] = useState(() =>
    mockedTrpc.createClient({
      links: [
        httpBatchLink({
          url: '',
        }),
      ],
      transformer: superjson,
    })
  );
  return (
    <mockedTrpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </mockedTrpc.Provider>
  );
};

type TrpcContext = ReturnType<(typeof mockedTrpc)['useContext']>;

// Hack to be able to access trpcContext
const ActOnTrpcContext = ({
  callback,
  children,
}: PropsWithChildren<{
  callback: (trpcContext: TrpcContext) => void;
}>) => {
  const trpcContext = mockedTrpc.useContext();
  callback(trpcContext);
  return <>{children}</>;
};

export const withTrpcContext =
  // eslint-disable-next-line react/display-name
  (callback: (context: TrpcContext) => void) => (Story: React.FC) => (
    <ActOnTrpcContext callback={callback}>
      <Story />
    </ActOnTrpcContext>
  );
