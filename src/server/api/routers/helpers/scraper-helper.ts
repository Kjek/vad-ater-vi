import { isLunchMenus, isWeekMenu } from '~/types/lunch-menu';
import type { PrismaType } from '~/types/prisma-custom';
import type Scraper from '~/types/scraper';
import { convertRestaurant } from '~/utils/restaurant-utils';
import {
  createRestaurantIfNotExists,
  findRestaurantByName,
  getRestaurantNeedsUpdating,
  deleteMenuAndWeekly,
} from './db-helper';

export const handleScraper = async (
  prisma: PrismaType,
  name: string,
  scraper: Scraper
) => {
  const { restaurantId, newWeek } = await getRestaurantNeedsUpdating(
    prisma,
    name
  );
  let restaurant = null;
  if (!restaurantId || newWeek) {
    if (restaurantId && newWeek) {
      await deleteMenuAndWeekly(prisma, restaurantId);
    }
    const menu = await scraper();

    if (isLunchMenus(menu)) {
      const restaurantModel = await createRestaurantIfNotExists(
        prisma,
        name,
        menu
      );
      restaurant = restaurantModel && convertRestaurant(restaurantModel);
    } else if (isWeekMenu(menu)) {
      const restaurantModel = await createRestaurantIfNotExists(
        prisma,
        name,
        menu.lunchWeek,
        menu.weeklySpecials
      );
      restaurant = restaurantModel && convertRestaurant(restaurantModel);
    }
  } else {
    const restaurantModel = await findRestaurantByName(prisma, name);
    restaurant = restaurantModel && convertRestaurant(restaurantModel);
  }
  return restaurant;
};
