import brynersWebScraper from '~/server/scrapers/bryners';
import type { PrismaInterface } from '~/types/prisma-custom';
import { convertRestaurant } from '~/utils/restaurantUtils';
import {
  createRestaurantIfNotExists,
  findRestaurantByName,
  getUpdatedAt,
} from './router-helper';

export const handleBryners = async (ctx: PrismaInterface, name: string) => {
  const brynersRestaurant = await getUpdatedAt(ctx, name);
  let bryners = null;
  if (
    !brynersRestaurant ||
    (brynersRestaurant &&
      new Date().getWeek() !== brynersRestaurant.updatedAt.getWeek())
  ) {
    const brynersMenu = await brynersWebScraper();
    const restaurantModel = await createRestaurantIfNotExists(
      ctx,
      name,
      brynersMenu
    );
    bryners = restaurantModel && convertRestaurant(restaurantModel);
  } else {
    const restaurantModel = await findRestaurantByName(ctx, name);
    bryners = restaurantModel && convertRestaurant(restaurantModel);
  }
  return bryners;
};
