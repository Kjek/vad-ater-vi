import { JSDOM } from 'jsdom';
import { type LunchMenu } from '~/types/lunch-menu';
import type { SwedishDay } from '~/types/swedish-days';
import { sweDays } from '~/types/swedish-days';

const bergHjortWebScraper = async () => {
  console.log('Fetching Berg & Hjort menu!');

  const dom = await JSDOM.fromURL(
    'https://www.matochmat.se/lunch/sundsvall/berg-och-hjort-foajen/',
    {
      resources: 'usable',
    }
  );
  const scrapedDocument = dom.window.document;

  const lunchMenuSeperated = Array.from(
    scrapedDocument.querySelectorAll('span')
  )
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

  console.log(lunchMenu);

  return lunchMenu;
};

export default bergHjortWebScraper;
