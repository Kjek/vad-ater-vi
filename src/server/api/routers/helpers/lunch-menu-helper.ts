import type { PrismaType } from '@type/prisma-custom';
import { convertRestaurant } from '@util/restaurantUtils';
import {
  getAllRestaurantSettings,
  getAllRestaurants,
  searchRestaurantByName,
} from './db-helper';
import { handleLunchScrapers } from './scraper-helper';

export const handleGetRestaurants = async (prisma: PrismaType) => {
  const restaurantSettings = await getAllRestaurantSettings(prisma);
  const enabledRestaurants = new Map(
    restaurantSettings.map((i) => [i.name, i.enabled])
  );
  const restarantHomeUrls = new Map(
    restaurantSettings.map((i) => [i.name, i.homeUrl])
  );
  let restaurants = (await getAllRestaurants(prisma)).map((restaurant) =>
    convertRestaurant(restaurant)
  );
  if (restaurants.length === 0) {
    await handleLunchScrapers(prisma);
    restaurants = (await getAllRestaurants(prisma)).map((restaurant) =>
      convertRestaurant(restaurant)
    );
  }

  return restaurants
    .map((restaurant) => {
      return {
        ...restaurant,
        homeUrl: restarantHomeUrls.get(restaurant.name),
      };
    })
    .filter((restaurant) => enabledRestaurants.get(restaurant.name));
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
