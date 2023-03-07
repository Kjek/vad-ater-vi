import puppeteer from 'puppeteer';
import type { LunchMenu } from '~/types/lunch-menu';

const invitoWebScraper = async () => {
  console.log('Fetching Invito menu!');

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('http://sundsvall.invitobar.se/mat/#veckans-lunch', {
    waitUntil: 'networkidle0',
  });

  const lunchMenu = await page.evaluate(() => {
    return Array.from(
      document.querySelectorAll('#meny-objekt-veckans-lunch-ul')
    )
      .flatMap((ul) => Array.from(ul.querySelectorAll('li')))
      .flatMap(
        (li) =>
          ({
            day: li.querySelector('p')?.textContent,
            food: li
              .querySelector('.beskrivning')
              ?.textContent?.replaceAll('\t', '')
              .replace('\n', ''),
          } as LunchMenu)
      );
  });
  console.log(lunchMenu);

  await browser.close();
  return lunchMenu;
};

export default invitoWebScraper;
