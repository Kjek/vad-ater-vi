import { createTRPCRouter, publicProcedure } from '../trpc';

export const resetRouter = createTRPCRouter({
  all: publicProcedure.query(async ({ ctx }) => {
    await ctx.prisma.menu.deleteMany();
    await ctx.prisma.weeklySpecial.deleteMany();
    await ctx.prisma.restaurant.deleteMany();
    return 'ok';
  }),
});

export default resetRouter;
