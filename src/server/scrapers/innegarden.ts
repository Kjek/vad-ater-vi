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
      /\>([a-ö]+)\:(?:\s?\<\/?\w+\>\s?)+\*?\s?(?!\<\w+\>)(.*?)(?=\<\w+\>[a-ö]+\:| ?<br><br>)/gim
    );
    for (const lu of match) {
      if (lu[1] && lu[2] && sweDays.includes(lu[1] as SwedishDay)) {
        lunchWeek.push({
          day: lu[1].trim(),
          food: decodeHtmlEntity(lu[2])
            .replaceAll(/\<\/?\w+\>\*/g, '. ')
            .replaceAll(/\<\/?\w+\>/g, '')
            .replaceAll('Går även bra att ta Take Away', '')
            .replaceAll(/<\/?[^>]+>|$/gim, '')
            .replaceAll(/\s?\|+\s?/gm, ', ')
            .toFullSentenceCase()
            .replaceAll(/\s?\.\s/g, '.\n'),
        } as LunchMenu);
      }
    }
  }
  console.log(lunchWeek);
  console.timeEnd('Fetching Innergården 1891 menu');
  return lunchWeek;
};

export default innergardenWebScraper;
