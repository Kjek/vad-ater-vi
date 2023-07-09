import { createTRPCRouter, protectedProcedure } from '@server/api/trpc';
import { z } from 'zod';
import { handleLunchScrapers } from './helpers/scraper-helper';
import webScraper from '@scraper/webscraper';
import type { RestaurantType } from '@type/restaurant-links';

export const adminRouter = createTRPCRouter({
  regex: protectedProcedure
    .input(
      z.object({
        restaurantId: z.string().nonempty(),
        regex: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      console.log('Updating regex', input.restaurantId, input.regex);
      await ctx.prisma.restaurant.update({
        where: {
          id: input.restaurantId,
        },
        data: {
          restaurantRegex: {
            upsert: {
              create: {
                regex: input.regex || null,
              },
              update: {
                regex: input.regex || null,
              },
            },
          },
        },
      });
    }),
  restaurants: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.restaurant.findMany({
      select: {
        id: true,
        name: true,
        restaurantRegex: {
          select: {
            regex: true,
          },
        },
      },
    });
  }),
  reScrape: protectedProcedure
    .input(
      z.object({
        restaurantId: z.string().nonempty(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const restaurant = await ctx.prisma.restaurant.findUnique({
        where: {
          id: input.restaurantId,
        },
        select: {
          name: true,
        },
      });
      if (restaurant) {
        await webScraper(ctx.prisma, restaurant.name as RestaurantType);
      }
    }),
  reScrapeAll: protectedProcedure.mutation(async ({ ctx }) => {
    await handleLunchScrapers(ctx.prisma);
  }),
});
