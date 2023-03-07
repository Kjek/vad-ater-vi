import invitoWebScraper from '~/server/scrapers/invito';
import type { PrismaInterface } from '~/types/prisma-custom';
import { convertRestaurant } from '~/utils/restaurantUtils';
import {
  createRestaurantIfNotExists,
  findRestaurantByName,
  getUpdatedAt,
} from './router-helper';

export const handleInvito = async (ctx: PrismaInterface, name: string) => {
  const invitoRestaurant = await getUpdatedAt(ctx, name);
  let invito = null;
  if (
    !invitoRestaurant ||
    (invitoRestaurant &&
      new Date().getWeek() !== invitoRestaurant.updatedAt.getWeek())
  ) {
    const invitoMenu = await invitoWebScraper();
    const restaurantModel = await createRestaurantIfNotExists(
      ctx,
      name,
      invitoMenu
    );
    invito = restaurantModel && convertRestaurant(restaurantModel);
  } else {
    const restaurantModel = await findRestaurantByName(ctx, name);
    invito = restaurantModel && convertRestaurant(restaurantModel);
  }
  return invito;
};
