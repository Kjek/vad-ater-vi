import { JSDOM } from 'jsdom';
import type { WeeklySpecial } from '~/types/lunch-menu';
import { type LunchMenu } from '~/types/lunch-menu';
import type { SwedishDay } from '~/types/swedish-days';
import { sweDays } from '~/types/swedish-days';

const estreetWebScraper = async () => {
  console.log('Fetching E-Street menu!');

  const dom = await JSDOM.fromURL('https://www.estreet.nu/', {
    resources: 'usable',
  });
  const scrapedDocument = dom.window.document;

  const lunchWeek = Array.from(scrapedDocument.querySelectorAll('div'))
    .filter(
      (div) =>
        div.textContent && sweDays.includes(div.textContent as SwedishDay)
    )
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

  const weeklySpecials = Array.from(scrapedDocument.querySelectorAll('div'))
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
  const lunchMenu = { lunchWeek, weeklySpecials };
  console.log(lunchMenu);

  return lunchMenu;
};

export default estreetWebScraper;
