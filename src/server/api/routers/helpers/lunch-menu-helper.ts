import type { PrismaType } from '@type/prisma-custom';
import { convertRestaurant } from '@util/restaurantUtils';
import { getAllRestaurants, searchRestaurantByName } from './db-helper';
import { handleLunchScrapers } from './scraper-helper';

export const handleGetRestaurants = async (prisma: PrismaType) => {
  const restaurants = (await getAllRestaurants(prisma)).map((restaurant) =>
    convertRestaurant(restaurant)
  );
  if (restaurants.length === 0) {
    await handleLunchScrapers(prisma);
    return (await getAllRestaurants(prisma)).map((restaurant) =>
      convertRestaurant(restaurant)
    );
  } else {
    return restaurants;
  }
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
