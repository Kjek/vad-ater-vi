import type { LunchMenu } from '@type/lunch-menu';
import type Scraper from '@type/scraper';
import type { SwedishDay } from '@type/swedish-days';
import { sweDays } from '@type/swedish-days';
import { decodeHtmlEntity } from '@util/html-utils';
import { parseHTML } from 'linkedom';

const genericWebScraper: Scraper = async (lunchUrl, regex) => {
  console.time(`Generic scraper for ${lunchUrl}`);

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
      regex ||
        /(Måndag|Tisdag|Onsdag|Torsdag|Fredag)\n+([\wåäömé,.;& \n-]*?)(?=(Måndag|Tisdag|Onsdag|Torsdag|Fredag)\n+|$)/gim
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
  console.time(`Generic scraper for ${lunchUrl}`);
  return lunchWeek;
};

export default genericWebScraper;
