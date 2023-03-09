import puppeteer from 'puppeteer';
import { type LunchMenu } from '~/types/lunch-menu';

const bergHjortWebScraper = async () => {
  console.log('Fetching Berg & Hjort menu!');

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(
    'https://www.matochmat.se/lunch/sundsvall/berg-och-hjort-foajen/',
    {
      waitUntil: 'networkidle0',
    }
  );

  const lunchMenuSeperated = await page.evaluate(() => {
    const sweDays = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag'];
    return Array.from(document.querySelectorAll('span'))
      .filter((span) =>
        sweDays.includes(
          span.parentElement?.parentElement?.parentElement?.previousElementSibling?.textContent?.split(
            ' '
          )[0] ?? ''
        )
      )
      .map(
        (span) =>
          ({
            day: span.parentElement?.parentElement?.parentElement?.previousElementSibling?.textContent?.split(
              ' '
            )[0],
            food: span.textContent
              ?.concat(
                span.parentElement?.nextElementSibling?.textContent ?? ''
              )
              .concat('\n'),
          } as LunchMenu)
      );
  });

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
    (item) => ({ day: item[0], food: item[1] } as LunchMenu)
  );

  console.log(lunchMenu);

  await browser.close();
  return lunchMenu;
};

export default bergHjortWebScraper;
