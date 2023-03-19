import chrome from 'chrome-aws-lambda';
import playwright from 'playwright';
import type { LunchMenu } from '~/types/lunch-menu';

const invitoWebScraper = async () => {
  console.log('Fetching Invito menu!');

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

  await page.goto('http://sundsvall.invitobar.se/mat/#veckans-lunch', {
    waitUntil: 'networkidle',
  });

  const lunchMenu = await page.evaluate(() => {
    return Array.from(
      document.querySelectorAll('#meny-objekt-veckans-lunch-ul')
    )
      .flatMap((ul) => Array.from(ul.querySelectorAll('li')))
      .flatMap(
        (li) =>
          ({
            day: li.querySelector('p')?.textContent?.trim(),
            food: li
              .querySelector('.beskrivning')
              ?.textContent?.replaceAll('\t', '')
              .replace('\n', '')
              .trim(),
          } as LunchMenu)
      );
  });
  console.log(lunchMenu);

  await browser.close();
  return lunchMenu;
};

export default invitoWebScraper;
