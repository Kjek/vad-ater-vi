import type { LunchMenu, WeeklySpecial } from '@type/lunch-menu';
import type { PrismaType } from '@type/prisma-custom';
import type { MenuProps, WeeklySpecialProps } from '@type/restaurant-props';

export const getRestaurantNeedsUpdating = async (
  prisma: PrismaType,
  name: string
) => {
  const restaurant = await prisma.restaurant.findFirst({
    where: {
      name: name,
    },
    select: {
      id: true,
      updatedAt: true,
    },
  });

  return { restaurantId: restaurant?.id, updatedAt: restaurant?.updatedAt };
};

export const deleteMenuAndWeekly = async (prisma: PrismaType, id: string) => {
  await prisma.menu.deleteMany({
    where: {
      restaurantId: id,
    },
  });

  await prisma.weeklySpecial.deleteMany({
    where: {
      restaurantId: id,
    },
  });
};

export const createRestaurantIfNotExists = async (
  prisma: PrismaType,
  name: string,
  menu: LunchMenu[],
  weeklySpecials: WeeklySpecial[] = []
) => {
  let restaurant = await prisma.restaurant.findFirst({
    where: {
      name: name,
    },
    include: {
      menu: true,
      weeklySpecial: true,
    },
  });

  if (!restaurant) {
    restaurant = await prisma.restaurant.create({
      data: {
        name: name,
      },
      include: {
        menu: true,
        weeklySpecial: true,
      },
    });
  }

  return await prisma.restaurant.upsert({
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

export const getAllRestaurants = async (prisma: PrismaType) => {
  return await prisma.restaurant.findMany({
    include: {
      menu: true,
      weeklySpecial: true,
    },
    orderBy: {
      name: 'asc',
    },
  });
};

export const findRestaurantByName = async (
  prisma: PrismaType,
  name: string
) => {
  return await prisma.restaurant.findFirst({
    where: {
      name: name,
    },
    include: {
      menu: true,
      weeklySpecial: true,
    },
  });
};

export const searchRestaurantByName = async (
  prisma: PrismaType,
  searchText: string,
  limit?: number
) => {
  return await prisma.restaurant.findMany({
    include: {
      menu: true,
      weeklySpecial: true,
    },
    where: {
      name: {
        startsWith: searchText,
        mode: 'insensitive',
      },
    },
    take: limit ?? 100,
  });
};
