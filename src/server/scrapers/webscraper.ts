import { handleScraper } from '@router/helpers/scraper-helper';
import type { PrismaType } from '@type/prisma-custom';
import type { RestaurantType } from '@type/restaurant-links';
import type Scraper from '@type/scraper';
import augustasWebScraper from './augustas';
import bergHjortWebScraper from './berg-hjort';
import blocoWebScraper from './bloco';
import brynersWebScraper from './bryners';
import estreetWebScraper from './estreet';
import innergardenWebScraper from './innegarden';
import invitoWebScraper from './invito';
import steakhouseWebScraper from './steakhouse';

const webScraper = async (
  prisma: PrismaType,
  restaurantName: RestaurantType
) => {
  let scraper: Scraper;
  switch (restaurantName) {
    case 'Augustas':
      scraper = augustasWebScraper;
      break;
    case 'Berg & Hjort':
      scraper = bergHjortWebScraper;
      break;
    case 'Bloco':
      scraper = blocoWebScraper;
      break;
    case 'Bryners':
      scraper = brynersWebScraper;
      break;
    case 'E Street':
      scraper = estreetWebScraper;
      break;
    case 'Innergården 1891':
      scraper = innergardenWebScraper;
      break;
    case 'Invito':
      scraper = invitoWebScraper;
      break;
    case 'Steakhouse':
      scraper = steakhouseWebScraper;
      break;
  }
  return handleScraper(prisma, restaurantName, scraper);
};

export default webScraper;
