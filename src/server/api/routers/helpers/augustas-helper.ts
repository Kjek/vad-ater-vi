import augustasWebScraper from '~/server/scrapers/augustas';
import type { PrismaInterface } from '~/types/prisma-custom';
import { convertRestaurant } from '~/utils/restaurantUtils';
import {
  createRestaurantIfNotExists,
  findRestaurantByName,
  getUpdatedAt,
} from './router-helper';

export const handleAugustas = async (ctx: PrismaInterface, name: string) => {
  const augustasRestaurant = await getUpdatedAt(ctx, name);
  let augustas = null;
  if (
    !augustasRestaurant ||
    (augustasRestaurant &&
      new Date().getWeek() !== augustasRestaurant.updatedAt.getWeek())
  ) {
    const menu = await augustasWebScraper();
    const restaurantModel = await createRestaurantIfNotExists(
      ctx,
      name,
      menu.lunchWeek,
      menu.weeklySpecials
    );
    augustas = restaurantModel && convertRestaurant(restaurantModel);
  } else {
    const restaurantModel = await findRestaurantByName(ctx, name);
    augustas = restaurantModel && convertRestaurant(restaurantModel);
  }
  return augustas;
};
