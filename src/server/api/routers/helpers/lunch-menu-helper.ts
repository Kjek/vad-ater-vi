import webScraper from '@scraper/webscraper';
import type { Restaurant } from '@type/lunch-menu';
import type { PrismaType } from '@type/prisma-custom';
import type { RestaurantType } from '@type/restaurant-links';
import { RestaurantURL } from '@type/restaurant-links';
import { convertRestaurant } from '@util/restaurantUtils';
import { searchRestaurantByName } from './db-helper';

export const handleLunchScrapers = async (prisma: PrismaType) => {
  return (
    (await Promise.all(
      Object.keys(RestaurantURL).map((restaurantName) =>
        webScraper(prisma, restaurantName as RestaurantType)
      )
    )) as Restaurant[]
  ).filter((i) => i);
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
