import type { LunchMenu } from '@type/lunch-menu';
import { RestaurantURL } from '@type/restaurant-links';
import type { SwedishDay } from '@type/swedish-days';
import { sweDays } from '@type/swedish-days';
import { decodeHtmlEntity } from '@util/html-utils';
import { parseHTML } from 'linkedom';

const innergardenWebScraper = async () => {
  console.time('Fetching Innergården 1891 menu');

  const html = await (
    await fetch(RestaurantURL['Innergården 1891'].lunch)
  ).text();
  const { document } = parseHTML(html);

  const lunchMenu = document.querySelector('#lunchmeny')?.innerHTML;
  const lunchWeek: LunchMenu[] = [];
  if (lunchMenu) {
    const match = decodeHtmlEntity(lunchMenu).matchAll(
      /(?:\<\/?\w+\>)([a-öA-Ö]+)\:(?:\s?\<\/?\w+\>\s?)+\*+\s+([a-öA-Ö\s<>*-\/&]+[^<>\w:])/gm
    );
    for (const lu of match) {
      if (lu[1] && lu[2] && sweDays.includes(lu[1] as SwedishDay)) {
        lunchWeek.push({
          day: lu[1].trim(),
          food: decodeHtmlEntity(lu[2])
            .replaceAll('<br>*', '\n')
            .replaceAll('Går även bra att ta Take Away', '')
            .replaceAll(/<\/?[^>]+>|$/gim, '')
            .replaceAll(/\s?\|+\s/gm, ', ')
            .trim(),
        } as LunchMenu);
      }
    }
  }

  console.timeEnd('Fetching Innergården 1891 menu');
  return lunchWeek;
};

export default innergardenWebScraper;
