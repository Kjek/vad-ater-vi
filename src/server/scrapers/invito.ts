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
    ?.textContent?.matchAll(regex ?? /^([a-öA-Ö]+) \n+(.*)/gm);

  const lunchMenu: LunchMenu[] = [];

  for (const text of matched ?? []) {
    lunchMenu.push({ day: text[1], food: text[2] } as LunchMenu);
  }

  console.timeEnd('Fetching Invito menu');
  return lunchMenu;
};

export default invitoWebScraper;
