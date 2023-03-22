import type { LunchMenu, WeeklySpecial } from '@type/lunch-menu';
import { RestaurantURL } from '@type/restaurant-links';
import { sweDays } from '@type/swedish-days';
import { JSDOM } from 'jsdom';

const estreetWebScraper = async () => {
  console.log('Fetching E-Street menu!');

  const dom = await JSDOM.fromURL(RestaurantURL['E Street'], {
    resources: 'usable',
  });
  const scrapedDocument = dom.window.document;

  const sweDaysCaps = sweDays.map((day) => day.toUpperCase());

  const lunchWeek = Array.from(scrapedDocument.querySelectorAll('div'))
    .filter((div) => div.textContent && sweDaysCaps.includes(div.textContent))
    .map(
      (item) =>
        ({
          day: item.textContent
            ?.charAt(0)
            .concat(item.textContent?.slice(1).toLocaleLowerCase()),
          food: item.nextElementSibling?.textContent
            ?.replace(/^\s?\W\s?/gm, '')
            .replace(/\s+\W\s?[^\w]/gm, '\n')
            .replace(/[^a-öA-Ö]\W\s*[^a-öA-Ö]/gm, '.\n'),
        } as LunchMenu)
    );

  const weeklySpecials = Array.from(scrapedDocument.querySelectorAll('div'))
    .filter(
      (div) =>
        div.textContent && /^veckans\s\w*\s?\w*:?$/i.test(div.textContent)
    )
    .map(
      (item) =>
        ({
          type: item.textContent
            ?.charAt(0)
            .concat(item.textContent?.slice(1).toLocaleLowerCase())
            .trim(),
          food: item.nextElementSibling?.textContent
            ?.replace(/^\s?\W\s?/gm, '')
            .replace(/\s+\W\s?[^\w]/gm, '\n')
            .replace(/[^a-öA-Ö]\W\s*[^a-öA-Ö]/gm, '.\n')
            .trim(),
        } as WeeklySpecial)
    );
  const lunchMenu = { lunchWeek, weeklySpecials };

  return lunchMenu;
};

export default estreetWebScraper;
