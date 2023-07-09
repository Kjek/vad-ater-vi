import type { LunchMenu } from '@type/lunch-menu';
import { RestaurantURL } from '@type/restaurant-links';
import type Scraper from '@type/scraper';
import { parseHTML } from 'linkedom';

const invitoWebScraper: Scraper = async () => {
  console.time('Fetching Invito menu');

  const html = await (await fetch(RestaurantURL['Invito'].lunch)).text();
  const { document } = parseHTML(html);

  const lunchMenu = Array.from(
    document.querySelectorAll('#meny-objekt-veckans-lunch-ul')
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

  console.timeEnd('Fetching Invito menu');
  return lunchMenu;
};

export default invitoWebScraper;
