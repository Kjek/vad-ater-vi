import { createTRPCRouter, protectedProcedure } from '@server/api/trpc';
import { z } from 'zod';
import { handleLunchScrapers } from './helpers/scraper-helper';
import webScraper from '@scraper/webscraper';
import type { RestaurantType } from '@type/restaurant-links';

export const adminRouter = createTRPCRouter({
  updateRegex: protectedProcedure
    .input(
      z.object({
        name: z.string().nonempty(),
        regex: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      console.log('Updating regex', input.name, input.regex);
      await ctx.prisma.restaurantSetting.update({
        where: {
          name: input.name,
        },
        data: {
          regex: input.regex || null,
        },
      });
    }),
  getRestaurantSettings: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.restaurantSetting.findMany({
      select: {
        id: true,
        name: true,
        regex: true,
        enabled: true,
      },
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
      return await ctx.prisma.restaurantSetting.create({
        data: {
          name: input.name,
          homeUrl: input.homeUrl,
          lunchUrl: input.lunchUrl,
          regex: input.regex,
          enabled: input.enabled,
        },
      });
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
      await webScraper(ctx.prisma, input.name as RestaurantType);
    }),
  reScrapeAll: protectedProcedure.mutation(async ({ ctx }) => {
    await handleLunchScrapers(ctx.prisma);
  }),
});
