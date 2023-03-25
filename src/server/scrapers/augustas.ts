import type { LunchMenu, WeeklySpecial } from '@type/lunch-menu';
import { RestaurantURL } from '@type/restaurant-links';
import type { SwedishDay } from '@type/swedish-days';
import { sweDays } from '@type/swedish-days';
import { decodeHtmlEntity } from '@util/html-utils';
import { JSDOM } from 'jsdom';

const augustasWebScraper = async () => {
  console.log('Fetching Mamma Augustas menu!');

  const dom = await JSDOM.fromURL(RestaurantURL['Augustas'], {
    resources: 'usable',
  });
  const scrapedDocument = dom.window.document;

  const lunchMenu = Array.from(scrapedDocument.querySelectorAll('strong'))
    .filter((strong) => strong.textContent?.includes('Måndag'))
    .map((item) => item.parentElement?.innerHTML)[0];

  const lunchWeek = [];
  const weeklySpecials: WeeklySpecial[] = [];

  // Backup /\>([a-ö]+)(?:\<\w+\>+)+([a-ö\s,]+)+/gim
  if (lunchMenu) {
    const match = lunchMenu.matchAll(
      /\>([a-ö]+(?:\s{2,})?[a-ö\s]+)\:?(?:\<\w+\>)+?(?:\&\w+\;)?([a-ö,\s]+)/gim
    );
    for (const lu of match) {
      if (lu[1] && lu[2] && sweDays.includes(lu[1] as SwedishDay)) {
        lunchWeek.push({
          day: lu[1].trim(),
          food: decodeHtmlEntity(lu[2])
            .replaceAll(/\s{2,}/gm, ' ')
            .trim(),
        } as LunchMenu);
      } else if (lu[1] && lu[2] && lu[1].includes('Veckans')) {
        weeklySpecials.push({
          type: lu[1].replaceAll(/\s{2,}/gm, ' ').trim(),
          food: decodeHtmlEntity(lu[2])
            .replaceAll(/\s{2,}/gm, ' ')
            .trim(),
        } as WeeklySpecial);
      }
    }
  }

  return { lunchWeek, weeklySpecials };
};

export default augustasWebScraper;
