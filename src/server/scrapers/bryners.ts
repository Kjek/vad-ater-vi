import type { LunchMenu } from '@type/lunch-menu';
import { RestaurantURL } from '@type/restaurant-links';
import type { SwedishDay } from '@type/swedish-days';
import { sweDays } from '@type/swedish-days';
import { parseHTML } from 'linkedom';

const brynersWebScraper = async () => {
  console.time('Fetching Bryners menu');

  const html = await (await fetch(RestaurantURL['Bryners'].lunch)).text();
  const { document } = parseHTML(html);

  const lunchMenu = Array.from(document.querySelectorAll('ul'))
    .filter((ul) =>
      sweDays.includes(
        (ul.previousElementSibling?.textContent?.split(' ')[0] as SwedishDay) ??
          ''
      )
    )
    .map(
      (item) =>
        ({
          day: item.previousElementSibling?.textContent?.split(' ')[0],
          food: item.textContent?.trim(),
        } as LunchMenu)
    );

  console.timeEnd('Fetching Bryners menu');
  return lunchMenu;
};

export default brynersWebScraper;
