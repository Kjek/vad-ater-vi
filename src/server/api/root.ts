import { createTRPCRouter } from '@server/api/trpc';
import {} from '@util/init-utils';
import { lunchRouter } from './routers/lunch-router';
import { adminRouter } from '@router/admin-router';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  lunch: lunchRouter,
  admin: adminRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
