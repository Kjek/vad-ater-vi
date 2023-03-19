import augustasWebScraper from '~/server/scrapers/augustas';
import bergHjortWebScraper from '~/server/scrapers/berg-hjort';
import brynersWebScraper from '~/server/scrapers/bryners';
import estreetWebScraper from '~/server/scrapers/estreet';
import innegardenWebScraper from '~/server/scrapers/innegarden';
import invitoWebScraper from '~/server/scrapers/invito';
import type { Restaurant } from '~/types/lunch-menu';
import type { PrismaType } from '~/types/prisma-custom';
import { convertRestaurant } from '~/utils/restaurantUtils';
import { searchRestaurantByName } from './db-helper';
import { handleScraper } from './scraper-helper';

const Restaurants = {
  augustas: 'Augustas',
  bergHjort: 'Berg & Hjort',
  bryners: 'Bryners',
  estreet: 'E Street',
  innegarden: 'Innegården',
  invito: 'Invito',
};

export const handleLunchScrapers = async (prisma: PrismaType) => {
  const bryners = handleScraper(prisma, Restaurants.bryners, brynersWebScraper);
  const augustas = handleScraper(
    prisma,
    Restaurants.augustas,
    augustasWebScraper
  );
  const invito = handleScraper(prisma, Restaurants.invito, invitoWebScraper);
  const estreet = handleScraper(prisma, Restaurants.estreet, estreetWebScraper);
  const innegarden = handleScraper(
    prisma,
    Restaurants.innegarden,
    innegardenWebScraper
  );

  const bergHjort = handleScraper(
    prisma,
    Restaurants.bergHjort,
    bergHjortWebScraper
  );

  return (
    [
      await augustas,
      await bergHjort,
      await bryners,
      await estreet,
      await innegarden,
      await invito,
    ] as Restaurant[]
  ).filter((restaurant) => restaurant.menu.length > 0);
};

export const handleLunchSearch = async (
  prisma: PrismaType,
  searchText: string,
  limit?: number
) => {
  return (await searchRestaurantByName(prisma, searchText, limit)).map(
    (restaurant) => convertRestaurant(restaurant)
  );
};
