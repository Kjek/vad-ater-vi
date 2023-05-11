import type { PrismaType } from '@type/prisma-custom';
import { convertRestaurant } from '@util/restaurantUtils';
import { getAllRestaurants, searchRestaurantByName } from './db-helper';

export const handleGetRestaurants = async (prisma: PrismaType) => {
  return (await getAllRestaurants(prisma)).map((restaurant) =>
    convertRestaurant(restaurant)
  );
};

export const handleLunchSearch = async (
  prisma: PrismaType,
  searchText: string,
  limit?: number
) => {
  return (await searchRestaurantByName(prisma, searchText, limit)).map(
    (restaurant) => convertRestaurant(restaurant)
  );
};
