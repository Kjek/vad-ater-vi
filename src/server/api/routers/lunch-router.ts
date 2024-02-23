import { createTRPCRouter, publicProcedure } from '@server/api/trpc';
import { z } from 'zod';
import {
  handleGetRestaurants,
  handleLunchSearch,
} from './helpers/lunch-menu-helper';

export const lunchRouter = createTRPCRouter({
  menu: publicProcedure.query(async ({ ctx }) => {
    return await handleGetRestaurants(ctx.prisma);
  }),
  menuSearch: publicProcedure
    .input(
      z.object({
        searchText: z.string().min(1),
        limit: z.number().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      return await handleLunchSearch(ctx.prisma, input.searchText, input.limit);
    }),
});
