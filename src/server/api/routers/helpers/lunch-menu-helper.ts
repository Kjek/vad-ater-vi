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
  const bryners = await handleScraper(
    prisma,
    Restaurants.bryners,
    brynersWebScraper
  );
  const augustas = await handleScraper(
    prisma,
    Restaurants.augustas,
    augustasWebScraper
  );
  const invito = await handleScraper(
    prisma,
    Restaurants.invito,
    invitoWebScraper
  );
  const estreet = await handleScraper(
    prisma,
    Restaurants.estreet,
    estreetWebScraper
  );
  const innegarden = await handleScraper(
    prisma,
    Restaurants.innegarden,
    innegardenWebScraper
  );

  const bergHjort = await handleScraper(
    prisma,
    Restaurants.bergHjort,
    bergHjortWebScraper
  );

  return (
    [augustas, bergHjort, bryners, estreet, innegarden, invito] as Restaurant[]
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
