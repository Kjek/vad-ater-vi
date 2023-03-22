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
