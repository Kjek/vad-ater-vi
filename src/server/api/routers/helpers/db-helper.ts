import type { LunchMenu, WeeklySpecial } from '@type/lunch-menu';
import type { PrismaType } from '@type/prisma-custom';

export const getRestaurantNeedsUpdating = async (
  prisma: PrismaType,
  name: string
) => {
  const restaurant = await prisma.restaurant.findFirst({
    where: {
      restaurantSetting: {
        name: name,
      },
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
      restaurantSetting: {
        name: name,
      },
    },
    include: {
      menu: true,
      weeklySpecial: true,
      restaurantSetting: true,
    },
  });

  if (!restaurant) {
    restaurant = await prisma.restaurant.create({
      data: {
        restaurantSetting: {
          connect: {
            name: name,
          },
        },
      },
      include: {
        menu: true,
        weeklySpecial: true,
        restaurantSetting: true,
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
      restaurantSetting: true,
    },
    create: {
      menu: {
        createMany: {
          data: menu.map((item) => {
            return {
              day: item.day,
              food: item.food,
            };
          }),
        },
      },
      weeklySpecial: {
        createMany: {
          data: weeklySpecials.map((item) => {
            return {
              type: item.type,
              food: item.food,
            };
          }),
        },
      },
    },
    update: {
      updatedAt: new Date(),
      menu: {
        deleteMany: {
          restaurantId: restaurant.id,
        },
        createMany: {
          data: menu.map((item) => {
            return {
              day: item.day,
              food: item.food,
            };
          }),
        },
      },
      weeklySpecial: {
        deleteMany: {
          restaurantId: restaurant.id,
        },
        createMany: {
          data: weeklySpecials.map((item) => {
            return {
              type: item.type,
              food: item.food,
            };
          }),
        },
      },
    },
  });
};

export const getAllRestaurants = async (prisma: PrismaType) => {
  return await prisma.restaurant.findMany({
    include: {
      menu: true,
      weeklySpecial: true,
      restaurantSetting: true,
    },
    orderBy: {
      restaurantSetting: {
        name: 'asc',
      },
    },
  });
};

export const findRestaurantByName = async (
  prisma: PrismaType,
  name: string
) => {
  return await prisma.restaurant.findFirst({
    where: {
      restaurantSetting: {
        name: name,
      },
    },
    include: {
      menu: true,
      weeklySpecial: true,
      restaurantSetting: true,
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
      restaurantSetting: true,
    },
    where: {
      restaurantSetting: {
        name: {
          startsWith: searchText,
          mode: 'insensitive',
        },
      },
    },
    take: limit ?? 100,
  });
};

export const getAllRestaurantSettings = async (prisma: PrismaType) => {
  return await prisma.restaurantSetting.findMany({
    select: { name: true, homeUrl: true, enabled: true },
  });
};
