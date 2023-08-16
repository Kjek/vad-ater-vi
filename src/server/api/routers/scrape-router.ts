import { createTRPCRouter, publicProcedure } from '@server/api/trpc';
import { handleLunchScrapers } from './helpers/scraper-helper';

export const scrapeRouter = createTRPCRouter({
  all: publicProcedure.query(async ({ ctx }) => {
    await handleLunchScrapers(ctx.prisma);
  }),
});
