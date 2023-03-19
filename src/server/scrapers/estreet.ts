import chrome from 'chrome-aws-lambda';
import playwright from 'playwright';
import type { WeeklySpecial } from '~/types/lunch-menu';
import { type LunchMenu } from '~/types/lunch-menu';

const estreetWebScraper = async () => {
  console.log('Fetching E-Street menu!');

  const isVercel = process.env.AWS_LAMBDA_FUNCTION_VERSION;

  const options = isVercel
    ? {
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: chrome.headless,
      }
    : { headless: true };

  const browser = await playwright.chromium.launch(options);
  const page = await browser.newPage();

  await page.goto('https://www.estreet.nu/', {
    waitUntil: 'networkidle',
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
              .concat(item.textContent?.slice(1).toLocaleLowerCase())
              .trim(),
            food: item.nextElementSibling?.textContent
              ?.replace(/^\s?\W\s?/gm, '')
              .replace(/\s+\W\s?[^\w]/gm, '\n')
              .replace(/[^a-öA-Ö]\W\s*[^a-öA-Ö]/gm, '.\n')
              .trim(),
          } as WeeklySpecial)
      );
    return { lunchWeek, weeklySpecials };
  });
  console.log(lunchMenu);

  await browser.close();
  return lunchMenu;
};

export default estreetWebScraper;
