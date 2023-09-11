import type { LunchMenu, WeeklySpecial } from '@type/lunch-menu';
import type Scraper from '@type/scraper';
import type { SwedishDay } from '@type/swedish-days';
import { sweDays } from '@type/swedish-days';
import { decodeHtmlEntity } from '@util/html-utils';
import { parseHTML } from 'linkedom';

const opusWebScraper: Scraper = async (lunchUrl, regex) => {
  console.time('Fetching Opus menu');

  const html = await (
    await fetch(lunchUrl, {
      headers: {
        'Accept-Encoding': 'gzip',
      },
    })
  ).text();
  const { document } = parseHTML(html);
  const searchRegex = new RegExp('Tisdag', 'gim');
  const lunchMenu = Array.from(document.querySelectorAll('div'))
    .filter(({ textContent }) => textContent && searchRegex.test(textContent))
    .map(({ innerText }) => innerText)[0];

  const lunchWeek = [];
  if (lunchMenu) {
    const match = lunchMenu?.matchAll(
      /(Måndag|Tisdag|Onsdag|Torsdag|Fredag)\n+([\wåäömé,.;& \n-]*?)(?=(Måndag|Tisdag|Onsdag|Torsdag|Fredag)\n+|Alltid hos oss)/gim
    );
    for (const lu of match) {
      if (
        lu[1] &&
        lu[2] &&
        sweDays.includes(lu[1].toSentenceCase() as SwedishDay)
      ) {
        lunchWeek.push({
          day: lu[1].trim().toSentenceCase(),
          food: decodeHtmlEntity(lu[2])
            .replaceAll(/\s{2,}/gm, ' ')
            .trim(),
        } as LunchMenu);
      }
    }
  }
  console.timeEnd('Fetching Opus menu');
  return lunchWeek;
};

export default opusWebScraper;
