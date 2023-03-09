import { isLunchMenus, isWeekMenu } from '~/types/lunch-menu';
import type { PrismaInterface } from '~/types/prisma-custom';
import type Scraper from '~/types/scraper';
import { convertRestaurant } from '~/utils/restaurantUtils';
import {
  createRestaurantIfNotExists,
  findRestaurantByName,
  getRestaurantNeedsUpdating,
  deleteMenuAndWeekly,
} from './db-helper';

export const handleScraper = async (
  ctx: PrismaInterface,
  name: string,
  scraper: Scraper
) => {
  const { restaurantId, newWeek } = await getRestaurantNeedsUpdating(ctx, name);
  let restaurant = null;
  if (!restaurantId || newWeek) {
    if (restaurantId && newWeek) {
      await deleteMenuAndWeekly(ctx, restaurantId);
    }
    const menu = await scraper();

    if (isLunchMenus(menu)) {
      const restaurantModel = await createRestaurantIfNotExists(
        ctx,
        name,
        menu
      );
      restaurant = restaurantModel && convertRestaurant(restaurantModel);
    } else if (isWeekMenu(menu)) {
      const restaurantModel = await createRestaurantIfNotExists(
        ctx,
        name,
        menu.lunchWeek,
        menu.weeklySpecials
      );
      restaurant = restaurantModel && convertRestaurant(restaurantModel);
    }
  } else {
    const restaurantModel = await findRestaurantByName(ctx, name);
    restaurant = restaurantModel && convertRestaurant(restaurantModel);
  }
  return restaurant;
};
