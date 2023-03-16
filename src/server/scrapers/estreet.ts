import puppeteer from 'puppeteer';
import type { WeeklySpecial } from '~/types/lunch-menu';
import { type LunchMenu } from '~/types/lunch-menu';

const estreetWebScraper = async () => {
  console.log('Fetching E-Street menu!');

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://www.estreet.nu/', {
    waitUntil: 'networkidle0',
  });

  const lunchMenu = await page.evaluate(() => {
    const sweDays = ['MÅNDAG', 'TISDAG', 'ONSDAG', 'TORSDAG', 'FREDAG'];
    const lunchWeek = Array.from(document.querySelectorAll('div'))
      .filter((div) => div.textContent && sweDays.includes(div.textContent))
      .map(
        (item) =>
          ({
            day: item.textContent
              ?.charAt(0)
              .concat(item.textContent?.slice(1).toLocaleLowerCase()),
            food: item.nextElementSibling?.textContent
              ?.replace(/^\s?\W\s?/gm, '')
              .replace(/\s+\W\s?[^\w]/gm, '\n')
              .replace(/[^a-öA-Ö]\W\s*[^a-öA-Ö]/gm, '.\n'),
          } as LunchMenu)
      );

    const weeklySpecials = Array.from(document.querySelectorAll('div'))
      .filter(
        (div) =>
          div.textContent && /^veckans\s\w*\s?\w*:?$/i.test(div.textContent)
      )
      .map(
        (item) =>
          ({
            type: item.textContent
              ?.charAt(0)
              .concat(item.textContent?.slice(1).toLocaleLowerCase()),
            food: item.nextElementSibling?.textContent
              ?.replace(/^\s?\W\s?/gm, '')
              .replace(/\s+\W\s?[^\w]/gm, '\n')
              .replace(/[^a-öA-Ö]\W\s*[^a-öA-Ö]/gm, '.\n'),
          } as WeeklySpecial)
      );
    return { lunchWeek, weeklySpecials };
  });
  console.log(lunchMenu);

  await browser.close();
  return lunchMenu;
};

export default estreetWebScraper;
