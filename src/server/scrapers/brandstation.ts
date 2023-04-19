import type { LunchMenu } from '@type/lunch-menu';
import { RestaurantURL } from '@type/restaurant-links';
import { sweDays } from '@type/swedish-days';
import { parseHTML } from 'linkedom';

const brandstationWebScraper = async () => {
  console.time('Fetching Restaturang Brandstation menu');

  const html = await (await fetch(RestaurantURL['Brandstation'].lunch)).text();

  const { document } = parseHTML(html);

  const lunchMenu = Array.from(document.querySelectorAll('p'))
    .filter((p) => sweDays.some((day) => p.innerHTML.includes(day)))
    .map((p) => p.innerHTML)
    .join('');

  const lunchWeek = [];

  if (lunchMenu) {
    const match = lunchMenu.matchAll(
      /\>|\s?([a-ö]+)+(?:\<\/?\w+\>\s?)+([a-ö\s<>]+(?=\>[a-ö]+\<|$))/gim
    );
    for (const groups of match) {
      if (groups[1] && groups[2]) {
        lunchWeek.push({
          day: groups[1]?.trim(),
          food: groups[2]?.replaceAll(/\<\/?\w+\>?/g, '').trim(),
        } as LunchMenu);
      }
    }
  }

  console.timeEnd('Fetching Restaturang Brandstation menu');
  return lunchWeek;
};

export default brandstationWebScraper;
