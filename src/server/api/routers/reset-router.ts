import { createTRPCRouter, publicProcedure } from '../trpc';
import { handleLunchScrapers } from './helpers/scraper-helper';

export const resetRouter = createTRPCRouter({
  all: publicProcedure.query(async ({ ctx }) => {
    await ctx.prisma.menu.deleteMany();
    await ctx.prisma.weeklySpecial.deleteMany();
    await ctx.prisma.restaurant.deleteMany();
    await handleLunchScrapers(ctx.prisma);
    return 'ok';
  }),
});

export default resetRouter;
