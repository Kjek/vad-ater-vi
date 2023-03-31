import type { LunchMenu } from '@type/lunch-menu';
import { RestaurantURL } from '@type/restaurant-links';
import type { SwedishDay } from '@type/swedish-days';
import { sweDays } from '@type/swedish-days';
import { parseHTML } from 'linkedom';

const bergHjortWebScraper = async () => {
  console.time('Fetching Berg & Hjort menu');

  const html = await (await fetch(RestaurantURL['Berg & Hjort'].lunch)).text();
  const { document } = parseHTML(html);

  const lunchMenuSeperated = Array.from(document.querySelectorAll('span'))
    .filter((span) =>
      sweDays.includes(
        (span.parentElement?.parentElement?.parentElement?.previousElementSibling?.textContent?.split(
          ' '
        )[0] as SwedishDay) ?? ''
      )
    )
    .map(
      (span) =>
        ({
          day: span.parentElement?.parentElement?.parentElement?.previousElementSibling?.textContent?.split(
            ' '
          )[0],
          food: span.textContent
            ?.concat(span.parentElement?.nextElementSibling?.textContent ?? '')
            .concat('\n'),
        } as LunchMenu)
    );

  const lunchMenu = Array.from(
    lunchMenuSeperated.reduce((acc, item) => {
      const food = acc.get(item.day);
      if (food) {
        acc.set(item.day, food.concat(item.food));
      } else {
        acc.set(item.day, item.food);
      }
      return acc;
    }, new Map<string, string>()),
    (item) => ({ day: item[0].trim(), food: item[1].trim() } as LunchMenu)
  );

  console.timeEnd('Fetching Berg & Hjort menu');
  return lunchMenu;
};

export default bergHjortWebScraper;
