import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from '@server/api/trpc';
import { z } from 'zod';
import {
  handleDebugScraper,
  handleLunchScrapers,
} from './helpers/scraper-helper';
import webScraper from '@scraper/webscraper';
import bcrypt from 'bcrypt';
import { TRPCError } from '@trpc/server';

export const adminRouter = createTRPCRouter({
  getRestaurantSettings: protectedProcedure.query(async ({ ctx }) => {
    return (
      await ctx.prisma.restaurantSetting.findMany({
        select: {
          id: true,
          name: true,
          homeUrl: true,
          lunchUrl: true,
          lunchRegex: true,
          weeklyRegex: true,
          enabled: true,
          restaurantId: true,
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
        name: z.string().min(1),
        homeUrl: z.string().min(1),
        lunchUrl: z.string().min(1),
        lunchRegex: z.string().optional(),
        weeklyRegex: z.string().optional(),
        enabled: z.boolean().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.restaurant.create({
        data: {
          restaurantSetting: {
            create: {
              name: input.name,
              homeUrl: input.homeUrl,
              lunchUrl: input.lunchUrl,
              lunchRegex: input.lunchRegex,
              weeklyRegex: input.weeklyRegex,
              enabled: input.enabled,
            },
          },
        },
      });
      await webScraper(ctx.prisma, input.name);
    }),
  updateRestaurantSetting: protectedProcedure
    .input(
      z.object({
        id: z.string().min(1),
        name: z.string().optional(),
        homeUrl: z.string().optional(),
        lunchUrl: z.string().optional(),
        lunchRegex: z.string().optional(),
        weeklyRegex: z.string().optional(),
        enabled: z.boolean().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.restaurantSetting.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          homeUrl: input.homeUrl,
          lunchUrl: input.lunchUrl,
          lunchRegex: input.lunchRegex,
          weeklyRegex: input.weeklyRegex,
          enabled: input.enabled,
        },
      });
    }),
  deleteRestaurant: protectedProcedure
    .input(z.object({ id: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.restaurant.delete({
        where: {
          id: input.id,
        },
      });
    }),
  reScrape: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await webScraper(ctx.prisma, input.name);
    }),
  reScrapeAll: protectedProcedure.mutation(async ({ ctx }) => {
    await handleLunchScrapers(ctx.prisma);
  }),
  debugContent: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .query(async ({ ctx, input }) => {
      const debugData = await handleDebugScraper(ctx.prisma, input.name);
      if (typeof debugData === 'string') {
        return debugData;
      } else {
        return undefined;
      }
    }),
  createAdminAccount: publicProcedure
    .input(
      z.object({
        username: z.string().min(1),
        password: z.string().min(1),
        secret: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      if (
        process.env.ADMIN_SECRET &&
        process.env.ADMIN_SECRET === input.secret
      ) {
        await ctx.prisma.user.create({
          data: {
            username: input.username,
            password: bcrypt.hashSync(input.password, 10),
          },
        });
      } else {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
        });
      }
    }),
});
