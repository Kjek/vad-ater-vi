import type { LunchMenu } from '@type/lunch-menu';
import { RestaurantURL } from '@type/restaurant-links';
import type { SwedishDay } from '@type/swedish-days';
import { sweDays } from '@type/swedish-days';
import { decodeHtmlEntity } from '@util/html-utils';
import { JSDOM } from 'jsdom';

const innegardenWebScraper = async () => {
  console.log('Fetching Innegården menu!');

  const dom = await JSDOM.fromURL(RestaurantURL['Innegården'], {
    resources: 'usable',
  });
  const scrapedDocument = dom.window.document;

  const lunchMenu = scrapedDocument.querySelector('#lunchmeny')?.innerHTML;
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
            .trim(),
        } as LunchMenu);
      }
    }
  }

  return lunchWeek;
};

export default innegardenWebScraper;
