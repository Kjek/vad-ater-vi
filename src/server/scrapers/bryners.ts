import type { LunchMenu } from '@type/lunch-menu';
import type Scraper from '@type/scraper';
import type { SwedishDay } from '@type/swedish-days';
import { sweDays } from '@type/swedish-days';
import { parseHTML } from 'linkedom';

const brynersWebScraper: Scraper = async (lunchUrl, regex) => {
  console.time('Fetching Bryners menu');

  const html = await (await fetch(lunchUrl)).text();
  const { document } = parseHTML(html);

  const lunchMenu = Array.from(document.querySelectorAll('ul'))
    .filter((ul) =>
      sweDays.includes(
        (ul.previousElementSibling?.textContent?.split(' ')[0] as SwedishDay) ??
          ''
      )
    )
    .map(
      (item) =>
        ({
          day: item.previousElementSibling?.textContent?.split(' ')[0],
          food: item.textContent?.trim(),
        } as LunchMenu)
    );

  console.timeEnd('Fetching Bryners menu');
  return lunchMenu;
};

export default brynersWebScraper;
