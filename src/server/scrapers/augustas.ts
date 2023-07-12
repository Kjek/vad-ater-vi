import type { LunchMenu, WeeklySpecial } from '@type/lunch-menu';
import type Scraper from '@type/scraper';
import type { SwedishDay } from '@type/swedish-days';
import { sweDays } from '@type/swedish-days';
import { decodeHtmlEntity } from '@util/html-utils';
import { parseHTML } from 'linkedom';

const augustasWebScraper: Scraper = async (lunchUrl, regex) => {
  console.time('Fetching Mamma Augustas menu');

  const html = await (
    await fetch(lunchUrl, {
      headers: {
        'Accept-Encoding': 'gzip',
      },
    })
  ).text();
  const { document } = parseHTML(html);

  const lunchMenu =
    Array.from(document.querySelectorAll('strong'))
      .filter((strong) => strong.textContent?.includes('Tisdag'))
      .map((item) =>
        item.parentElement?.innerHTML
          .replaceAll(/\<\/?\w+\>/gm, '\n')
          .replaceAll(/\s{2,}/gm, ' ')
      )[0] ??
    Array.from(document.querySelectorAll('p'))
      .filter((strong) => strong.textContent?.includes('Tisdag'))
      .map((item) =>
        item.parentElement?.innerHTML
          .replaceAll(/\<\/?\w+\>/gm, '\n')
          .replaceAll(/\s{2,}/gm, ' ')
      )[0] ??
    Array.from(document.querySelectorAll('div.articleTemplate_Content'))
      .filter(
        ({ textContent }) => textContent && textContent?.includes('Tisdag')
      )
      .map(({ innerHTML }) =>
        innerHTML.replaceAll(/\<\/?\w+\>/gm, '\n').replaceAll(/\s{2,}/gm, ' ')
      )[0] ??
    Array.from(document.querySelectorAll('div'))
      .filter(
        ({ textContent }) => textContent && textContent?.includes('Tisdag')
      )
      .map(({ innerHTML }) =>
        innerHTML.replaceAll(/\<\/?\w+\>/gm, '\n').replaceAll(/\s{2,}/gm, ' ')
      )[0];

  const lunchWeek = [];
  const weeklySpecials: WeeklySpecial[] = [];

  if (lunchMenu) {
    const match = lunchMenu.matchAll(
      regex ||
        /(Måndag|Tisdag|Onsdag|Torsdag|Fredag|Veckans vegetariska:?|Veckans fisk:?|Veckans sallad:?|Veckans soppa:?)\s+([\wåäömé,. \n\–]*?)(?=(Måndag|Tisdag|Onsdag|Torsdag|Fredag|Veckans vegetariska:?|Veckans fisk:?|Veckans sallad:?|Veckans soppa:?)|Är du allergisk\?|-{3,})/gim
    );
    for (const lu of match) {
      if (lu[1] && lu[2] && sweDays.includes(lu[1] as SwedishDay)) {
        lunchWeek.push({
          day: lu[1].trim(),
          food: decodeHtmlEntity(lu[2])
            .replaceAll(/\s{2,}/gm, ' ')
            .replaceAll('\n', ' ')
            .trim(),
        } as LunchMenu);
      } else if (lu[1] && lu[2] && lu[1].includes('Veckans')) {
        weeklySpecials.push({
          type: lu[1].replaceAll(/\s{2,}/gm, ' ').trim(),
          food: decodeHtmlEntity(lu[2])
            .replaceAll(/\s{2,}/gm, ' ')
            .replaceAll('\n', ' ')
            .trim(),
        } as WeeklySpecial);
      }
    }
  }
  console.timeEnd('Fetching Mamma Augustas menu');
  return { lunchWeek, weeklySpecials };
};

export default augustasWebScraper;
