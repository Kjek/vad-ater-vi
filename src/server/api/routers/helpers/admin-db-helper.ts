import type { PrismaType } from '@type/prisma-custom';
import type { CreateRestaurantSetting } from '@type/restaurant-setting-type';

export const getRestaurantSetting = async (
  prisma: PrismaType,
  restaurantId: string
) => {
  const restaurant = await prisma.restaurantSetting.findUniqueOrThrow({
    where: {
      restaurantId: restaurantId,
    },
  });
  return {
    ...restaurant,
    lunchRegex: restaurant.lunchRegex?.toRegExp(),
    weeklyRegex: restaurant.weeklyRegex?.toRegExp(),
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
