import { createTRPCRouter } from '@server/api/trpc';
import {} from '@util/date-utils'; // To inizialize the functions
import { lunchRouter } from './routers/lunch-router';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  lunch: lunchRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
