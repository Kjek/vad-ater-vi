import type { LunchMenu, WeeklySpecial } from '@type/lunch-menu';
import { RestaurantURL } from '@type/restaurant-links';
import type { SwedishDay } from '@type/swedish-days';
import { sweDays } from '@type/swedish-days';
import { JSDOM } from 'jsdom';

const blocoWebScraper = async () => {
  console.log('Fetching Bloco menu!');

  const dom = await JSDOM.fromURL(RestaurantURL['Bloco'], {
    resources: 'usable',
  });
  const scrapedDocument = dom.window.document;

  const scrapedMenu = Array.from(scrapedDocument.querySelectorAll('p'))
    .filter(
      (p) =>
        p.innerHTML.match(
          /\<\w\>([a-ö]{3,4})(?:\<+\/?\w+\>+)+([a-ö\s\”",]+)/gim
        ) &&
        (p.innerHTML.includes('Mån') || p.innerHTML.includes('Fre'))
    )
    .map((p) => p.innerHTML)
    .join(' ');

  const lunchMenu = [];

  if (scrapedMenu) {
    const match = scrapedMenu.matchAll(
      /\<\w\>([a-ö]{3,4})(?:\<+\/?\w+\>+)+([a-ö\s\”\",]+)/gim
    );
    for (const text of match) {
      if (text[1] && text[2]) {
        lunchMenu.push({
          day: text[1].concat('dag').trim(),
          food: text[2].trim(),
        } as LunchMenu);
      }
    }
  }

  return lunchMenu;
};

export default blocoWebScraper;
