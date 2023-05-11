import { createTRPCRouter, publicProcedure } from '../trpc';
import { handleLunchScrapers } from './helpers/scraper-helper';

export const scrapeRouter = createTRPCRouter({
  restaurants: publicProcedure.query(async ({ ctx }) => {
    await handleLunchScrapers(ctx.prisma);
    return;
  }),
});

export default scrapeRouter;
