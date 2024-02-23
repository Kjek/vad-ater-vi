import type { LunchMenu } from '@type/lunch-menu';
import type Scraper from '@type/scraper';
import { parseHTML } from 'linkedom';

const invitoWebScraper: Scraper = async (lunchUrl, regex) => {
  console.time('Fetching Invito menu');

  const html = await (await fetch(lunchUrl)).text();
  const { document } = parseHTML(html);

  const matched = document
    .querySelector('#lunchmeny')
    ?.nextElementSibling?.querySelector('div')
    ?.innerText?.matchAll(
      regex ??
        /(Måndag|Tisdag|Onsdag|Torsdag|Fredag|Veckans vegetariska:?|Veckans fisk:?|Veckans sallad:?|Veckans soppa:?|Veckans pasta:?)\s+([\W\w]*?)(?=Måndag|Tisdag|Onsdag|Torsdag|Fredag|Veckans veg:?|Veckans vegetariska:?|Veckans fisk:?|Veckans sallad:?|Veckans soppa:?|Veckans pasta:?|Är du allergisk?)/gim
    );

  const lunchMenu: LunchMenu[] = [];

  for (const text of matched ?? []) {
    lunchMenu.push({ day: text[1], food: text[2] } as LunchMenu);
  }

  console.timeEnd('Fetching Invito menu');
  return lunchMenu;
};

export default invitoWebScraper;
