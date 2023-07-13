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
      regex: true,
      enabled: true,
    },
  });
  return {
    ...restaurant,
    regex: restaurant?.regex ? new RegExp(restaurant.regex) : undefined,
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
      regex: createRestaurantSetting.regex,
    },
  });
};
