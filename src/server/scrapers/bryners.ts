import { JSDOM } from 'jsdom';
import { type LunchMenu } from '~/types/lunch-menu';
import type { SwedishDay } from '~/types/swedish-days';
import { sweDays } from '~/types/swedish-days';

const brynersWebScraper = async () => {
  console.log('Fetching Bryners menu!');

  const dom = await JSDOM.fromURL(
    'https://bryners.se/veckans-lunch-v-j/bryners-bistro.html',
    {
      resources: 'usable',
    }
  );
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

  console.log(lunchMenu);

  return lunchMenu;
};

export default brynersWebScraper;
