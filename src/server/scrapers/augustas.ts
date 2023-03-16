import puppeteer from 'puppeteer';
import {
  sweDays,
  type LunchMenu,
  type WeeklySpecial,
} from '~/types/lunch-menu';

const augustasWebScraper = async () => {
  console.log('Fetching Mamma Augustas menu!');

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(
    'https://www.baltichotell.com/mamma-augustas-kok-restaurang-sundsvall/lunch',
    {
      waitUntil: 'networkidle0',
    }
  );

  const lunchMenu = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('strong'))
      .filter((strong) => strong.textContent?.includes('Måndag'))
      .map((item) =>
        item.parentElement?.innerHTML
          .replaceAll('\n', ' ')
          .replaceAll('<br><br>&nbsp;', '\n') // used to seperate days
          .replaceAll('<br>&nbsp;', ' ') // used to 'concat' broken sentences
          .replaceAll('<br><br>', '<br>')
          .replaceAll('<br>', '\n')
          .replaceAll('  ', ' ')
          .replaceAll('   ', ' ')
      )[0];
  });

  const lunchWeek = [];
  const weeklySpecials: WeeklySpecial[] = [];

  if (lunchMenu) {
    const match = lunchMenu.matchAll(
      /^(.*[^-:]):?\s*\n\<?[\/][a-z]*\>?(.*?)$/gm
    );
    for (const lu of match) {
      if (lu[1] && lu[2] && sweDays.includes(lu[1])) {
        lunchWeek.push({ day: lu[1].trim(), food: lu[2].trim() } as LunchMenu);
      } else if (lu[1] && lu[2] && /Veckans\s.*:?$/.test(lu[1])) {
        weeklySpecials.push({
          type: lu[1].replace(':', '').trim(),
          food: lu[2].trim(),
        } as WeeklySpecial);
      }
    }
  }

  console.log(lunchWeek);
  console.log(weeklySpecials);

  await browser.close();
  return { lunchWeek, weeklySpecials };
};

export default augustasWebScraper;
