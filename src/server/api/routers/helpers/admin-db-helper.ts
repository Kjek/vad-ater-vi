import type { PrismaType } from '@type/prisma-custom';
import type { CreateRestaurantSetting } from '@type/restaurant-setting-type';

export const getRestaurantSetting = async (
  prisma: PrismaType,
  name: string
) => {
  const restaurant = await prisma.restaurantSetting.findUnique({
    where: {
      name: name,
    },
    select: {
      homeUrl: true,
      lunchUrl: true,
      lunchRegex: true,
      weeklyRegex: true,
      enabled: true,
    },
  });
  return {
    ...restaurant,
    lunchRegex: restaurant?.lunchRegex
      ? new RegExp(
          restaurant.lunchRegex.replace('/', '').replace(/\/\w+?$/, ''),
          restaurant.lunchRegex.split('/').slice(-1)[0]
        )
      : undefined,
    weeklyRegex: restaurant?.weeklyRegex
      ? new RegExp(
          restaurant.weeklyRegex.replace('/', '').replace(/\/\w+?$/, ''),
          restaurant.weeklyRegex.split('/').slice(-1)[0]
        )
      : undefined,
  };
};

export const createRestaurantSetting = async (
  prisma: PrismaType,
  createRestaurantSetting: CreateRestaurantSetting
) => {
  await prisma.restaurantSetting.create({
    data: {
      name: createRestaurantSetting.name,
      homeUrl: createRestaurantSetting.homeUrl,
      lunchUrl: createRestaurantSetting.lunchUrl,
      enabled: createRestaurantSetting.enabled,
      lunchRegex: createRestaurantSetting.lunchRegex,
      weeklyRegex: createRestaurantSetting.weeklyRegex,
    },
  });
};
