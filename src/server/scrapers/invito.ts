import { JSDOM } from 'jsdom';
import type { LunchMenu } from '~/types/lunch-menu';

const invitoWebScraper = async () => {
  console.log('Fetching Invito menu!');

  const dom = await JSDOM.fromURL(
    'http://sundsvall.invitobar.se/mat/#veckans-lunch',
    {
      resources: 'usable',
    }
  );
  const scrapedDocument = dom.window.document;

  const lunchMenu = Array.from(
    scrapedDocument.querySelectorAll('#meny-objekt-veckans-lunch-ul')
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
  console.log(lunchMenu);

  return lunchMenu;
};

export default invitoWebScraper;
