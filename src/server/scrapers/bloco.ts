import type { LunchMenu, WeeklySpecial } from '@type/lunch-menu';
import type Scraper from '@type/scraper';
import { parseHTML } from 'linkedom';

const blocoWebScraper: Scraper = async (lunchUrl, regex) => {
  console.time('Fetching Bloco menu');

  const html = await (await fetch(lunchUrl)).text();
  const { document } = parseHTML(html);

  const lunchWeek = [];
  const weeklySpecials = [];

  const scrapedMenu = Array.from(document.querySelectorAll('p'))
    .filter((p) =>
      p.innerHTML.match(/\<\w\>([a-ö]{3,7})(?:\<+\/?\w+\>+)+([a-ö\s\”",]+)/gim)
    )
    .map((p) => p.innerHTML)
    .join(' ');

  if (scrapedMenu) {
    const match = scrapedMenu.matchAll(
      /\<\w\>([a-ö]{3,7})(?:\<+\/?\w+\>+)+([a-ö\s\”\",]+)/gim
    );
    for (const text of match) {
      if (text[1] && text[2]) {
        lunchWeek.push({
          day: text[1].trim(),
          food: text[2].trim(),
        } as LunchMenu);
      }
    }
  }

  const scrapedWeekly = Array.from(document.querySelectorAll('p'))
    .filter(
      (p) =>
        p.innerHTML.match(
          /^\<\w\>([a-ö\s]+)(?:\<\/?\w+\>)+([a-ö\s,\”\"]+$)/gim
        ) &&
        (p.innerHTML.includes('Veckans') || p.innerHTML.includes('Vegetarisk'))
    )
    .map((p) => p.innerHTML)
    .join(' ');

  if (scrapedWeekly) {
    const match = scrapedWeekly.matchAll(
      /\<\w\>([a-ö\s]+)(?:\<\/?\w+\>)+([a-ö\s,\”\"]+)/gim
    );
    for (const text of match) {
      if (text[1] && text[2]) {
        weeklySpecials.push({
          type: text[1].trim(),
          food: text[2].trim(),
        } as WeeklySpecial);
      }
    }
  }
  console.timeEnd('Fetching Bloco menu');
  return { lunchWeek, weeklySpecials };
};

export default blocoWebScraper;
