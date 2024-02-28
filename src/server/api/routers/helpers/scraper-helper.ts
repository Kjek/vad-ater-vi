import genericWebScraper from '@scraper/generic';
import webScraper from '@scraper/webscraper';
import type { LunchMenu, Restaurant } from '@type/lunch-menu';
import { isLunchMenus, isWeekMenu } from '@type/lunch-menu';
import type { PrismaType } from '@type/prisma-custom';
import type Scraper from '@type/scraper';
import { convertRestaurant } from '@util/restaurantUtils';
import { getRestaurantSetting } from './admin-db-helper';
import {
  createRestaurantIfNotExists,
  deleteMenuAndWeekly,
  getRestaurantNeedsUpdating,
} from './db-helper';

const scrapeNewData = async (
  prisma: PrismaType,
  name: string,
  scraper: Scraper
) => {
  try {
    const { lunchUrl, lunchRegex, weeklyRegex, enabled } =
      await getRestaurantSetting(prisma, name);
    if (enabled && lunchUrl) {
      const menu = await scraper(lunchUrl, lunchRegex, weeklyRegex);
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
    }
    return null;
  } catch (error) {
    console.error(name, error);
    return { name: name, menu: [] as LunchMenu[] } as Restaurant;
  }
};

export const handleScraper = async (
  prisma: PrismaType,
  name: string,
  scraper: Scraper
) => {
  const restaurant = await scrapeNewData(prisma, name, scraper);
  const { restaurantId } = await getRestaurantNeedsUpdating(prisma, name);
  if (restaurant && restaurant.menu.length < 5 && restaurantId) {
    await deleteMenuAndWeekly(prisma, restaurantId);
    await scrapeNewData(prisma, name, scraper);
  }
};

export const handleLunchScrapers = async (prisma: PrismaType) => {
  const restaurants = await prisma.restaurantSetting.findMany({
    select: { name: true },
  });
  await Promise.all(restaurants.map(({ name }) => webScraper(prisma, name)));
};

export const handleDebugScraper = async (prisma: PrismaType, name: string) => {
  const { lunchUrl, lunchRegex, weeklyRegex } = await getRestaurantSetting(
    prisma,
    name
  );
  if (lunchUrl) {
    return await genericWebScraper(lunchUrl, lunchRegex, weeklyRegex, true);
  }
};
