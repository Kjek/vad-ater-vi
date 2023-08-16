import { adminRouter } from '@router/admin-router';
import { scrapeRouter } from '@router/scrape-router';
import { createTRPCRouter } from '@server/api/trpc';
import {} from '@util/init-utils';
import { lunchRouter } from './routers/lunch-router';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  lunch: lunchRouter,
  admin: adminRouter,
  scrape: scrapeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
