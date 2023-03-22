import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '@server/api/trpc';
import {
  handleLunchScrapers,
  handleLunchSearch,
} from './helpers/lunch-menu-helper';

export const lunchRouter = createTRPCRouter({
  menu: publicProcedure.query(async ({ ctx }) => {
    return await handleLunchScrapers(ctx.prisma);
  }),
  menuSearch: publicProcedure
    .input(
      z.object({
        searchText: z.string().nonempty(),
        limit: z.number().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      return await handleLunchSearch(ctx.prisma, input.searchText, input.limit);
    }),
});
