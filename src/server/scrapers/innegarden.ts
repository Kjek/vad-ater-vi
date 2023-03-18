import puppeteer from 'puppeteer';
import { type LunchMenu } from '~/types/lunch-menu';
import type { SwedishDay } from '~/types/swedish-days';
import { sweDays } from '~/types/swedish-days';
import { decodeHtmlEntity } from '~/utils/html-utils';

const innegardenWebScraper = async () => {
  console.log('Fetching Innegården menu!');

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('http://www.innergarden.se/#lunchmeny', {
    waitUntil: 'networkidle0',
  });

  const lunchMenu = await page.evaluate(
    () => document.querySelector('#lunchmeny')?.innerHTML
  );
  const lunchWeek: LunchMenu[] = [];
  if (lunchMenu) {
    const match = decodeHtmlEntity(lunchMenu).matchAll(
      /(?:\<\/?\w+\>)([a-öA-Ö]+)\:(?:\s?\<\/?\w+\>\s?)+\*+\s+([a-öA-Ö\s<>*-\/&]+[^<>\w:])/gm
    );
    for (const lu of match) {
      if (lu[1] && lu[2] && sweDays.includes(lu[1] as SwedishDay)) {
        lunchWeek.push({
          day: lu[1].trim(),
          food: decodeHtmlEntity(lu[2])
            .replaceAll('<br>*', '\n')
            .replaceAll('Går även bra att ta Take Away', '')
            .replaceAll(/<\/?[^>]+>|$/gim, '')
            .trim(),
        } as LunchMenu);
      }
    }
  }

  console.log(lunchWeek);

  await browser.close();
  return lunchWeek;
};

export default innegardenWebScraper;
