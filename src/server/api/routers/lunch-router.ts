import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';
import augustasWebScraper from '~/server/scrapers/augustas';
import bergHjortWebScraper from '~/server/scrapers/berg-hjort';
import brynersWebScraper from '~/server/scrapers/bryners';
import estreetWebScraper from '~/server/scrapers/estreet';
import innegardenWebScraper from '~/server/scrapers/innegarden';
import invitoWebScraper from '~/server/scrapers/invito';
import type { Restaurant } from '~/types/lunch-menu';
import { handleScraper } from './helpers/scraper-helpter';

const Restaurants = {
  augustas: 'Augustas',
  bergHjort: 'Berg & Hjort',
  bryners: 'Bryners',
  estreet: 'E Street',
  innegarden: 'Innegården',
  invito: 'Invito',
};

export const lunchRouter = createTRPCRouter({
  menu: publicProcedure.query(async ({ ctx }) => {
    const bryners = await handleScraper(
      ctx,
      Restaurants.bryners,
      brynersWebScraper
    );
    const augustas = await handleScraper(
      ctx,
      Restaurants.augustas,
      augustasWebScraper
    );
    const invito = await handleScraper(
      ctx,
      Restaurants.invito,
      invitoWebScraper
    );
    const estreet = await handleScraper(
      ctx,
      Restaurants.estreet,
      estreetWebScraper
    );
    const innegarden = await handleScraper(
      ctx,
      Restaurants.innegarden,
      innegardenWebScraper
    );

    const bergHjort = await handleScraper(
      ctx,
      Restaurants.bergHjort,
      bergHjortWebScraper
    );

    return [
      augustas,
      bergHjort,
      bryners,
      estreet,
      innegarden,
      invito,
    ] as Restaurant[];
  }),
});
