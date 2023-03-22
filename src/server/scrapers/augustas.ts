import type { LunchMenu, WeeklySpecial } from '@type/lunch-menu';
import { RestaurantURL } from '@type/restaurant-links';
import type { SwedishDay } from '@type/swedish-days';
import { sweDays } from '@type/swedish-days';
import { JSDOM } from 'jsdom';

const augustasWebScraper = async () => {
  console.log('Fetching Mamma Augustas menu!');

  const dom = await JSDOM.fromURL(RestaurantURL['Augustas'], {
    resources: 'usable',
  });
  const scrapedDocument = dom.window.document;

  const lunchMenu = Array.from(scrapedDocument.querySelectorAll('strong'))
    .filter((strong) => strong.textContent?.includes('Måndag'))
    .map((item) =>
      item.parentElement?.innerHTML
        .replaceAll('\n', ' ')
        .replaceAll(/\<\w+\>\s+/gm, ' ')
        .replaceAll('<br><br>&nbsp;', '\n') // used to seperate days
        .replaceAll('<br>&nbsp;', ' ') // used to 'concat' broken sentences
        .replaceAll('<br><br>', '<br>')
        .replaceAll('<br>', '\n')
        .replaceAll('  ', ' ')
        .replaceAll('   ', ' ')
    )[0];

  const lunchWeek = [];
  const weeklySpecials: WeeklySpecial[] = [];

  if (lunchMenu) {
    const match = lunchMenu.matchAll(
      /^([a-öA-Ö ]+)\:?\s*\n\<?\/?[a-z]*\>?([a-öA-Ö,\- ]+)$/gm
    );
    for (const lu of match) {
      if (lu[1] && lu[2] && sweDays.includes(lu[1] as SwedishDay)) {
        lunchWeek.push({ day: lu[1].trim(), food: lu[2].trim() } as LunchMenu);
      } else if (lu[1] && lu[2] && /Veckans\s.*:?$/.test(lu[1])) {
        weeklySpecials.push({
          type: lu[1].replace(':', '').trim(),
          food: lu[2].trim(),
        } as WeeklySpecial);
      }
    }
  }

  return { lunchWeek, weeklySpecials };
};

export default augustasWebScraper;
