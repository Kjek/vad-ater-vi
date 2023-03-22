import augustasWebScraper from '@scraper/augustas';
import bergHjortWebScraper from '@scraper/berg-hjort';
import brynersWebScraper from '@scraper/bryners';
import estreetWebScraper from '@scraper/estreet';
import innegardenWebScraper from '@scraper/innegarden';
import invitoWebScraper from '@scraper/invito';
import type { Restaurant } from '@type/lunch-menu';
import type { PrismaType } from '@type/prisma-custom';
import { convertRestaurant } from '@util/restaurantUtils';
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

  return [
    await augustas,
    await bergHjort,
    await bryners,
    await estreet,
    await innegarden,
    await invito,
  ] as Restaurant[];
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
