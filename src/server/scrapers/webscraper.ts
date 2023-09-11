import { handleScraper } from '@router/helpers/scraper-helper';
import type { PrismaType } from '@type/prisma-custom';
import type Scraper from '@type/scraper';
import augustasWebScraper from './augustas';
import blocoWebScraper from './bloco';
import brynersWebScraper from './bryners';
import estreetWebScraper from './estreet';
import innergardenWebScraper from './innegarden';
import invitoWebScraper from './invito';
import steakhouseWebScraper from './steakhouse';
import brandstationWebScraper from './brandstation';
import opusWebScraper from './opus';
import genericWebScraper from './generic';

const webScraper = async (prisma: PrismaType, restaurantName: string) => {
  let scraper: Scraper;
  switch (restaurantName) {
    case 'Augustas':
      scraper = augustasWebScraper;
      break;
    case 'Bloco':
      scraper = blocoWebScraper;
      break;
    case 'Brandstation':
      scraper = brandstationWebScraper;
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
    case 'Opus':
      scraper = opusWebScraper;
      break;
    case 'Steakhouse':
      scraper = steakhouseWebScraper;
      break;
    default:
      scraper = genericWebScraper;
      return;
  }
  await handleScraper(prisma, restaurantName, scraper);
};

export default webScraper;
