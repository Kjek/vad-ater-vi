import type { LunchMenu } from '@type/lunch-menu';
import { RestaurantURL } from '@type/restaurant-links';
import type { SwedishDay } from '@type/swedish-days';
import { sweDays } from '@type/swedish-days';
import { JSDOM } from 'jsdom';

const brynersWebScraper = async () => {
  console.log('Fetching Bryners menu!');

  const dom = await JSDOM.fromURL(RestaurantURL['Bryners'], {
    resources: 'usable',
  });
  const scrapedDocument = dom.window.document;

  const lunchMenu = Array.from(scrapedDocument.querySelectorAll('ul'))
    .filter((ul) =>
      sweDays.includes(
        (ul.previousElementSibling?.textContent?.split(' ')[0] as SwedishDay) ??
          ''
      )
    )
    .map(
      (item) =>
        ({
          day: item.previousElementSibling?.textContent?.split(' ')[0],
          food: item.textContent?.trim(),
        } as LunchMenu)
    );

  return lunchMenu;
};

export default brynersWebScraper;
