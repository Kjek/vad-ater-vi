import type { LunchMenu, WeeklySpecial } from '@type/lunch-menu';
import type Scraper from '@type/scraper';
import type { SwedishDay } from '@type/swedish-days';
import { sweDays } from '@type/swedish-days';
import { decodeHtmlEntity } from '@util/html-utils';
import { parseHTML } from 'linkedom';

const steakhouseWebScraper: Scraper = async (lunchUrl, regex) => {
  console.time('Fetching Steakhosue menu');

  const html = await (await fetch(lunchUrl)).text();

  const { document } = parseHTML(html);

  const scrapedHtml = Array.from(document.querySelectorAll('strong'))
    .filter((strong) => strong.textContent?.includes('Måndag'))
    .map(
      (strong) =>
        strong.parentElement?.parentElement?.innerText
          .trim()
          .replaceAll(/\<\w+\>\<\/\w+\>/gm, '\n')
          .replaceAll(/\<\/\w\>\s+\<[a-ö\s=";:\-]+\>/gim, '\n')
    )[0];

  const lunchWeek: LunchMenu[] = [];
  const weeklySpecials: WeeklySpecial[] = [];
  if (scrapedHtml) {
    const matchDaily = scrapedHtml?.matchAll(
      regex ||
        /(Måndag|Tisdag|Onsdag|Torsdag|Fredag|Veckans)\s?([\W\w]*?)(?=Måndag|Tisdag|Onsdag|Torsdag|Fredag|Veckans)/gim
    );
    for (const group of matchDaily) {
      if (sweDays.includes(group[1] as SwedishDay) && group[2]) {
        lunchWeek.push({
          day: group[1]?.trim(),
          food: decodeHtmlEntity(group[2]).trim(),
        } as LunchMenu);
      }
    }
    const matchWeekly = scrapedHtml.matchAll(
      /\<\w+\>([a-ö\s]+)\([a-ö\s\-]+\)\s^(.*)$/gim
    );
    for (const group of matchWeekly) {
      if (group[1]?.includes('Veckans') && group[2]) {
        weeklySpecials.push({
          type: group[1].trim(),
          food: decodeHtmlEntity(group[2]).trim(),
        } as WeeklySpecial);
      }
    }
  }

  console.timeEnd('Fetching Steakhosue menu');
  return { lunchWeek, weeklySpecials };
};

export default steakhouseWebScraper;

// \<\w+\>([a-ö]+)\<\w+\>\<\/\w+\>([a-ö\s&;,.\-]+)
