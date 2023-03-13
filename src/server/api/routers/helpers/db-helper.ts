import type { LunchMenu, WeeklySpecial } from '~/types/lunch-menu';
import type { PrismaInterface, PrismaType } from '~/types/prisma-custom';
import type { MenuProps, WeeklySpecialProps } from '~/types/restaurant-props';

export const getRestaurantNeedsUpdating = async (
  ctx: { prisma: PrismaType },
  name: string
) => {
  const restaurant = await ctx.prisma.restaurant.findFirst({
    where: {
      name: name,
    },
    select: {
      id: true,
      updatedAt: true,
    },
  });

  return {
    restaurantId: restaurant?.id,
    newWeek: new Date().getWeek() !== restaurant?.updatedAt?.getWeek(),
  };
};

export const deleteMenuAndWeekly = async (ctx: PrismaInterface, id: string) => {
  await ctx.prisma.menu.deleteMany({
    where: {
      restaurantId: id,
    },
  });

  await ctx.prisma.weeklySpecial.deleteMany({
    where: {
      restaurantId: id,
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
      updatedAt: new Date(),
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
