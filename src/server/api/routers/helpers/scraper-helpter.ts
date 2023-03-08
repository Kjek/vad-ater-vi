import { isLunchMenus, isWeekMenu } from '~/types/lunch-menu';
import type { PrismaInterface } from '~/types/prisma-custom';
import type Scraper from '~/types/scraper';
import { convertRestaurant } from '~/utils/restaurantUtils';
import {
  createRestaurantIfNotExists,
  findRestaurantByName,
  getUpdatedAt,
} from './db-helper';

export const handleScraper = async (
  ctx: PrismaInterface,
  name: string,
  scraper: Scraper
) => {
  const updatedAt = (await getUpdatedAt(ctx, name))?.updatedAt;
  let restaurant = null;
  if (
    !updatedAt ||
    (updatedAt && new Date().getWeek() !== updatedAt.getWeek())
  ) {
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
