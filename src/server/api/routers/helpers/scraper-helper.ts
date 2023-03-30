import type { Restaurant } from '@type/lunch-menu';
import { isLunchMenus, isWeekMenu } from '@type/lunch-menu';
import type { PrismaType } from '@type/prisma-custom';
import type Scraper from '@type/scraper';
import { convertRestaurant } from '@util/restaurantUtils';
import {
  createRestaurantIfNotExists,
  deleteMenuAndWeekly,
  findRestaurantByName,
  getRestaurantNeedsUpdating,
} from './db-helper';

const scrapeNewData = async (
  prisma: PrismaType,
  name: string,
  scraper: Scraper
) => {
  const menu = await scraper();

  if (isLunchMenus(menu)) {
    const restaurantModel = await createRestaurantIfNotExists(
      prisma,
      name,
      menu
    );
    return convertRestaurant(restaurantModel);
  } else if (isWeekMenu(menu)) {
    const restaurantModel = await createRestaurantIfNotExists(
      prisma,
      name,
      menu.lunchWeek,
      menu.weeklySpecials
    );
    return convertRestaurant(restaurantModel);
  }
  return null;
};

export const handleScraper = async (
  prisma: PrismaType,
  name: string,
  scraper: Scraper
) => {
  const { restaurantId, updatedAt } = await getRestaurantNeedsUpdating(
    prisma,
    name
  );
  let restaurant: Restaurant | null = null;
  const today = new Date();
  if (
    !restaurantId ||
    (updatedAt?.getUTCDay() !== today.getUTCDay() && today.isPastNine())
  ) {
    if (
      restaurantId &&
      updatedAt?.getUTCDay() !== today.getUTCDay() &&
      today.isPastNine()
    ) {
      await deleteMenuAndWeekly(prisma, restaurantId);
    }
    restaurant = await scrapeNewData(prisma, name, scraper);
  } else {
    const restaurantModel = await findRestaurantByName(prisma, name);
    restaurant = restaurantModel && convertRestaurant(restaurantModel);
  }

  if (restaurant && restaurant.menu.length < 5 && restaurantId) {
    await deleteMenuAndWeekly(prisma, restaurantId);
    restaurant = await scrapeNewData(prisma, name, scraper);
  }
  return restaurant;
};
