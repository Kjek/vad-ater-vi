import type { LunchMenu } from '@type/lunch-menu';
import { RestaurantURL } from '@type/restaurant-links';
import { JSDOM } from 'jsdom';

const invitoWebScraper = async () => {
  console.log('Fetching Invito menu!');

  const dom = await JSDOM.fromURL(RestaurantURL['Invito'], {
    resources: 'usable',
  });
  const scrapedDocument = dom.window.document;

  const lunchMenu = Array.from(
    scrapedDocument.querySelectorAll('#meny-objekt-veckans-lunch-ul')
  )
    .flatMap((ul) => Array.from(ul.querySelectorAll('li')))
    .flatMap(
      (li) =>
        ({
          day: li.querySelector('p')?.textContent?.trim(),
          food: li
            .querySelector('.beskrivning')
            ?.textContent?.replaceAll('\t', '')
            .replace('\n', '')
            .trim(),
        } as LunchMenu)
    );

  return lunchMenu;
};

export default invitoWebScraper;
