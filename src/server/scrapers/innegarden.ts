import puppeteer from 'puppeteer';
import { sweDays, type LunchMenu } from '~/types/lunch-menu';

const innegardenWebScraper = async () => {
  console.log('Fetching Innegården menu!');

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('http://www.innergarden.se/#lunchmeny', {
    waitUntil: 'networkidle0',
  });

  const lunchMenu = await page.evaluate(() => {
    return document.querySelector('#lunchmeny')?.innerHTML;
  });
  const lunchWeek: LunchMenu[] = [];
  if (lunchMenu) {
    const match = lunchMenu.matchAll(
      /\>([A-Öa-ö]+):\s?\<\/?\S+[\s<br>]+\*\s([A-Öa-ö\s<>*.\/]+[^<>\w:])/gm
    );
    for (const lu of match) {
      if (lu[1] && lu[2] && sweDays.includes(lu[1])) {
        lunchWeek.push({
          day: lu[1],
          food: lu[2]
            .replaceAll('<br>*', '\n')
            .replaceAll('<br>', '')
            .replaceAll('&', ''),
        } as LunchMenu);
      }
    }
  }

  console.log(lunchWeek);

  await browser.close();
  return lunchWeek;
};

export default innegardenWebScraper;
