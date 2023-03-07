import estreetWebScraper from '~/server/scrapers/estreet';
import type { PrismaInterface } from '~/types/prisma-custom';
import { convertRestaurant } from '~/utils/restaurantUtils';
import {
  createRestaurantIfNotExists,
  findRestaurantByName,
  getUpdatedAt,
} from './router-helper';

export const handleEstreet = async (ctx: PrismaInterface, name: string) => {
  const estreetRestaurant = await getUpdatedAt(ctx, name);
  let estreet = null;
  if (
    !estreetRestaurant ||
    (estreetRestaurant &&
      new Date().getWeek() !== estreetRestaurant.updatedAt.getWeek())
  ) {
    const menu = await estreetWebScraper();
    const restaurantModel = await createRestaurantIfNotExists(
      ctx,
      name,
      menu.lunchWeek,
      menu.weeklySpecials
    );
    estreet = restaurantModel && convertRestaurant(restaurantModel);
  } else {
    const restaurantModel = await findRestaurantByName(ctx, name);
    estreet = restaurantModel && convertRestaurant(restaurantModel);
  }
  return estreet;
};
