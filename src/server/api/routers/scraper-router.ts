import { createTRPCRouter, publicProcedure } from '../trpc';
import { handleLunchScrapers } from './helpers/scraper-helper';

export const scrapeRouter = createTRPCRouter({
  restaurants: publicProcedure.query(async ({ ctx }) => {
    await ctx.prisma.menu.deleteMany(); // Temporary fix
    await ctx.prisma.weeklySpecial.deleteMany(); // Temporary fix
    await handleLunchScrapers(ctx.prisma);
    return;
  }),
});

export default scrapeRouter;
