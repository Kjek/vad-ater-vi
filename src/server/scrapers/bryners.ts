import puppeteer from 'puppeteer';
import { type LunchMenu } from '~/types/lunch-menu';

const brynersWebScraper = async () => {
  console.log('Fetching Bryners menu!');

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://bryners.se/veckans-lunch-v-j/bryners-bistro.html', {
    waitUntil: 'networkidle0',
  });

  const lunchMenu = await page.evaluate(() => {
    const sweDays = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag'];
    return Array.from(document.querySelectorAll('ul'))
      .filter((ul) =>
        sweDays.includes(
          ul.previousElementSibling?.textContent?.split(' ')[0] ?? ''
        )
      )
      .map(
        (item) =>
          ({
            day: item.previousElementSibling?.textContent?.split(' ')[0],
            food: item.textContent?.trim(),
          } as LunchMenu)
      );
  });
  console.log(lunchMenu);

  await browser.close();
  return lunchMenu;
};

export default brynersWebScraper;
