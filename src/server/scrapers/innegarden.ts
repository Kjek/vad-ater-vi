import { args, executablePath, headless } from 'chrome-aws-lambda';
import playwright from 'playwright';
import { type LunchMenu } from '~/types/lunch-menu';
import type { SwedishDay } from '~/types/swedish-days';
import { sweDays } from '~/types/swedish-days';
import { decodeHtmlEntity } from '~/utils/html-utils';

const innegardenWebScraper = async () => {
  console.log('Fetching Innegården menu!');

  const isVercel = process.env.AWS_LAMBDA_FUNCTION_VERSION;

  const options = isVercel
    ? {
        args: args,
        executablePath: await executablePath,
        headless: headless,
      }
    : { headless: true };

  const browser = await playwright.chromium.launch(options);
  const page = await browser.newPage();

  await page.goto('http://www.innergarden.se/#lunchmeny', {
    waitUntil: 'networkidle',
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
