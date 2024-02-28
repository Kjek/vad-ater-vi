import genericWebScraper from '@scraper/generic';
import { isLunchMenus, isWeekMenu } from '@type/lunch-menu';
import type { PrismaType } from '@type/prisma-custom';
import { getRestaurantSetting } from './admin-db-helper';
import { deleteMenuAndWeekly, updateRestaurantFood } from './db-helper';

export const scrapeNewData = async (
  prisma: PrismaType,
  restaurantId: string
) => {
  const { lunchUrl, lunchRegex, weeklyRegex, enabled } =
    await getRestaurantSetting(prisma, restaurantId);
  if (enabled && lunchUrl) {
    const menu = await genericWebScraper(lunchUrl, lunchRegex, weeklyRegex);
    if (isLunchMenus(menu)) {
      await updateRestaurantFood(prisma, restaurantId, menu);
    } else if (isWeekMenu(menu)) {
      await updateRestaurantFood(
        prisma,
        restaurantId,
        menu.lunchWeek,
        menu.weeklySpecials
      );
    }
  }
};

export const handleScraper = async (
  prisma: PrismaType,
  restaurantId: string
) => {
  await deleteMenuAndWeekly(prisma, restaurantId);
  await scrapeNewData(prisma, restaurantId);
};

export const handleLunchScrapers = async (prisma: PrismaType) => {
  const restaurants = await prisma.restaurantSetting.findMany({
    select: {
      restaurantId: true,
    },
  });
  await Promise.all(
    restaurants.map(({ restaurantId }) => handleScraper(prisma, restaurantId))
  );
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
