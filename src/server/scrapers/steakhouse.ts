import type { LunchMenu } from '@type/lunch-menu';
import { RestaurantURL } from '@type/restaurant-links';
import type { SwedishDay } from '@type/swedish-days';
import { sweDays } from '@type/swedish-days';
import { JSDOM } from 'jsdom';
import * as pdfjs from 'pdfjs-dist';
import type { TextItem } from 'pdfjs-dist/types/src/display/api';

const steakHouseWebScraper = async () => {
  const dom = await JSDOM.fromURL(RestaurantURL['Steakhouse'], {
    resources: 'usable',
  });
  const scrapedDocument = dom.window.document;

  const a = Array.from(
    scrapedDocument.querySelector('#menu-download-pdf')
      ?.children as HTMLCollection
  ).filter((a) => a.innerHTML.includes('LUNCH'))[0] as HTMLAnchorElement;
  const url = a.querySelector('a')?.href as string;

  const test = pdfjs.getDocument({ url: url });
  const pdf = await test.promise;
  const page = await pdf.getPage(1);
  const content = await page.getTextContent();
  const splittedText = content.items
    .map((item) => ((item as TextItem).hasEOL ? '\n' : (item as TextItem).str))
    .join('')
    .split('\n');

  const joinedText = splittedText
    .flatMap((text) =>
      sweDays.includes(text.replaceAll(/^[^a-ö]+/gim, '') as SwedishDay) ||
      text.includes('Veckans')
        ? `<break>${text.replaceAll(/^[^a-ö]+/gim, '')}`
        : text
    )
    .join('\n');

  const lunchMenu: LunchMenu[] = [];
  const match = joinedText.matchAll(/^\<\w+\>([a-ö]+)\n([a-ö\s\W][^<]+)/gim);
  for (const group of match) {
    lunchMenu.push({
      day: group[1],
      food: group[2],
    } as LunchMenu);
  }

  return lunchMenu;
};

export default steakHouseWebScraper;
