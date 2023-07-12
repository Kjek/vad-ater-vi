import { createTRPCRouter, protectedProcedure } from '@server/api/trpc';
import { z } from 'zod';
import { handleLunchScrapers } from './helpers/scraper-helper';
import webScraper from '@scraper/webscraper';

export const adminRouter = createTRPCRouter({
  getRestaurantSettings: protectedProcedure.query(async ({ ctx }) => {
    return (
      await ctx.prisma.restaurantSetting.findMany({
        select: {
          id: true,
          name: true,
          regex: true,
          enabled: true,
        },
      })
    ).sort((left, right) => {
      const lName = left.name.toLowerCase(),
        rName = right.name.toLocaleLowerCase();
      if (lName > rName) {
        return 1;
      } else if (rName > lName) {
        return -1;
      } else {
        return 0;
      }
    });
  }),
  createRestaurantSetting: protectedProcedure
    .input(
      z.object({
        name: z.string().nonempty(),
        homeUrl: z.string().nonempty(),
        lunchUrl: z.string().nonempty(),
        regex: z.string().optional(),
        enabled: z.boolean().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.restaurantSetting.create({
        data: {
          name: input.name,
          homeUrl: input.homeUrl,
          lunchUrl: input.lunchUrl,
          regex: input.regex,
          enabled: input.enabled,
        },
      });
      await webScraper(ctx.prisma, input.name);
    }),
  updateRestaurantSetting: protectedProcedure
    .input(
      z.object({
        name: z.string().nonempty(),
        homeUrl: z.string().optional(),
        lunchUrl: z.string().optional(),
        regex: z.string().optional(),
        enabled: z.boolean().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.restaurantSetting.update({
        where: {
          name: input.name,
        },
        data: {
          name: input.name,
          homeUrl: input.homeUrl,
          lunchUrl: input.lunchUrl,
          regex: input.regex,
          enabled: input.enabled,
        },
      });
    }),
  reScrape: protectedProcedure
    .input(
      z.object({
        name: z.string().nonempty(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await webScraper(ctx.prisma, input.name);
    }),
  reScrapeAll: protectedProcedure.mutation(async ({ ctx }) => {
    await handleLunchScrapers(ctx.prisma);
  }),
});
