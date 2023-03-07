import type { WeekMenu } from '~/types/lunch-menu';
import type { LunchMenu } from '~/types/lunch-menu';
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

const isWeekMenu = (object: unknown): object is WeekMenu => {
  return (
    typeof object === 'object' &&
    object !== null &&
    'lunchWeek' in object &&
    'weeklySpecials' in object
  );
};

const isLunchMenu = (object: unknown): object is LunchMenu => {
  return (
    typeof object === 'object' &&
    object !== null &&
    'day' in object &&
    'food' in object
  );
};

const isLunchMenus = (object: unknown): object is LunchMenu[] => {
  return (
    Array.isArray(object) &&
    isLunchMenu((object as LunchMenu[])[0] as LunchMenu)
  );
};
