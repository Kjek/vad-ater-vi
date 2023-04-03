import type { LunchMenu, WeeklySpecial } from '@type/lunch-menu';
import { RestaurantURL } from '@type/restaurant-links';
import { sweDays } from '@type/swedish-days';
import { parseHTML } from 'linkedom';

const estreetWebScraper = async () => {
  console.time('Fetching E-Street menu');

  const html = await (await fetch(RestaurantURL['E Street'].lunch)).text();
  const { document } = parseHTML(html);

  const sweDaysCaps = sweDays.map((day) => day.toUpperCase());

  const lunchWeek = Array.from(document.querySelectorAll('div'))
    .filter((div) => div.textContent && sweDaysCaps.includes(div.textContent))
    .map(
      (item) =>
        ({
          day: item.textContent?.toSentenceCase(),
          food: item.nextElementSibling?.textContent
            ?.replace(/^\s?\W\s?/gm, '')
            .replace(/\s+\W\s?[^\w]/gm, '\n')
            .replace(/[^a-öA-Ö]\W\s*[^a-öA-Ö]/gm, '.\n'),
        } as LunchMenu)
    );

  const weeklySpecials = Array.from(document.querySelectorAll('div'))
    .filter(
      (div) =>
        div.textContent && /^veckans\s\w*\s?\w*:?$/i.test(div.textContent)
    )
    .map(
      (item) =>
        ({
          type: item.textContent?.toSentenceCase(),
          food: item.nextElementSibling?.textContent
            ?.replace(/^\s?\W\s?/gm, '')
            .replace(/\s+\W\s?[^\w]/gm, '\n')
            .replace(/[^a-öA-Ö]\W\s*[^a-öA-Ö]/gm, '.\n')
            .trim(),
        } as WeeklySpecial)
    );
  const lunchMenu = { lunchWeek, weeklySpecials };

  console.timeEnd('Fetching E-Street menu');
  return lunchMenu;
};

export default estreetWebScraper;
