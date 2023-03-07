import type { LunchMenu, WeeklySpecial } from '~/types/lunch-menu';
import type { PrismaInterface, PrismaType } from '~/types/prisma-custom';
import type { MenuProps, WeeklySpecialProps } from '~/types/restaurant-props';

export const getUpdatedAt = async (
  ctx: { prisma: PrismaType },
  name: string
) => {
  return await ctx.prisma.restaurant.findFirst({
    where: {
      name: name,
    },
    select: {
      updatedAt: true,
    },
  });
};

export const removeMenuAndWeekly = async (ctx: PrismaInterface, id: string) => {
  await ctx.prisma.restaurant.update({
    where: {
      id: id,
    },
    data: {
      menu: {
        set: [],
      },
      weeklySpecial: {
        set: [],
      },
    },
  });
};

export const createRestaurantIfNotExists = async (
  ctx: PrismaInterface,
  name: string,
  menu: LunchMenu[],
  weeklySpecials: WeeklySpecial[] = []
) => {
  let restaurant = await ctx.prisma.restaurant.findFirst({
    where: {
      name: name,
    },
    include: {
      menu: true,
      weeklySpecial: true,
    },
  });

  if (!restaurant) {
    restaurant = await ctx.prisma.restaurant.create({
      data: {
        name: name,
      },
      include: {
        menu: true,
        weeklySpecial: true,
      },
    });
  }

  return await ctx.prisma.restaurant.upsert({
    where: {
      id: restaurant?.id,
    },
    include: {
      menu: true,
      weeklySpecial: true,
    },
    create: {
      name: name,
      menu: {
        connectOrCreate: menu.map(
          (item) =>
            ({
              create: { day: item.day, food: item.food },
              where: {
                restaurantId_day: {
                  restaurantId: restaurant?.id,
                  day: item.day,
                },
              },
            } as MenuProps)
        ),
      },
      weeklySpecial: {
        connectOrCreate: weeklySpecials.map(
          (item) =>
            ({
              create: { type: item.type, food: item.food },
              where: {
                restaurantId_type: {
                  restaurantId: restaurant?.id,
                  type: item.type,
                },
              },
            } as WeeklySpecialProps)
        ),
      },
    },
    update: {
      menu: {
        connectOrCreate: menu.map(
          (item) =>
            ({
              create: { day: item.day, food: item.food },
              where: {
                restaurantId_day: {
                  restaurantId: restaurant?.id,
                  day: item.day,
                },
              },
            } as MenuProps)
        ),
      },
      weeklySpecial: {
        connectOrCreate: weeklySpecials.map(
          (item) =>
            ({
              create: { type: item.type, food: item.food },
              where: {
                restaurantId_type: {
                  restaurantId: restaurant?.id,
                  type: item.type,
                },
              },
            } as WeeklySpecialProps)
        ),
      },
    },
  });
};

export const findRestaurantByName = async (
  ctx: PrismaInterface,
  name: string
) => {
  return await ctx.prisma.restaurant.findFirst({
    where: {
      name: name,
    },
    include: {
      menu: true,
      weeklySpecial: true,
    },
  });
};
