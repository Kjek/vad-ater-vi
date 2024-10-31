import type { LunchMenu, WeeklySpecial } from '@type/lunch-menu';
import type Scraper from '@type/scraper';
import { sweDays } from '@type/swedish-days';
import { removeDuplicatesWithKey } from '@util/array-utils';
import { decodeHtmlEntity } from '@util/html-utils';
import { parseHTML } from 'linkedom';

const genericWebScraper: Scraper = async (
  lunchUrl,
  lunchRegex,
  weeklyRegex,
  debug
) => {
  console.time(`Generic scraper for ${lunchUrl}`);

  const html = await (
    await fetch(lunchUrl, {
      headers: {
        'Accept-Encoding': 'gzip',
      },
    })
  ).text();
  const { document } = parseHTML(html);
  const searchRegex = /\n(?:Tisdag|Tis|Torsdag|Tors)(?!\w)(?!\s*\:\s*\d)/gim;
  const lunchMenu = (
    Array.from(document.querySelectorAll('div'))
      .filter(({ innerText }) => innerText && searchRegex.test(innerText))
      .map(({ innerText }) => innerText)[0] ??
    Array.from(document.querySelectorAll('strong'))
      .filter(({ innerText }) => innerText && searchRegex.test(innerText))
      .map(({ innerText }) => innerText)[0] ??
    Array.from(document.querySelectorAll('p'))
      .filter(({ innerText }) => innerText && searchRegex.test(innerText))
      .map(({ innerText }) => innerText)[0] ??
    Array.from(document.querySelectorAll('ul'))
      .filter(({ innerText }) => innerText && searchRegex.test(innerText))
      .map(({ innerText }) => innerText)[0] ??
    Array.from(document.querySelectorAll('span'))
      .filter(({ innerText }) => innerText && searchRegex.test(innerText))
      .map(({ innerText }) => innerText)[0]
  )?.replace(
    /(?:\nM[åÅ]ndag)\:?(?:\s\d+\/\d)?\s+(?=\nTisdag)\nTisdag\:?(?:\s\d+\/\d)?\s+(?=\nOnsdag)\nOnsdag\:?(?:\s\d+\/\d)?\s+(?=\nTorsdag)\nTorsdag\:?(?:\s\d+\/\d)?\s+(?=\nFredag)\nFredag\:?(?:\s\d+\/\d)?\s+(?=\nVeckans|L[öÖ]rdag|\n{2,}|\n+\s{2,})|(?:\nM[åÅ]n)\:?(?:\s\d+\/\d)?\s+(?=\nTis)\nTis\:?(?:\s\d+\/\d)?\s+(?=\nOns)\nOns\:?(?:\s\d+\/\d)?\s+(?=\nTors)\nTors\:?(?:\s\d+\/\d)?\s+(?=\nFre)\nFre\:?(?:\s\d+\/\d)?\s+(?=\nVeckans|L[öÖ]rdag|\n{2,}|\n+\s{2,})/gim,
    ''
  );

  if (debug) {
    console.timeEnd(`Generic scraper for ${lunchUrl}`);
    return JSON.stringify(lunchMenu);
  }

  const lunchWeek: LunchMenu[] = [];
  const weeklySpecials: WeeklySpecial[] = [];
  if (lunchMenu) {
    const lunchMatch = lunchMenu.matchAll(
      lunchRegex ??
        /(?:\nM[åÅ]ndag)\:?(?:\s\d+\/\d)?\s+([\W\w]*?)(?=\nTisdag)\nTisdag\:?(?:\s\d+\/\d)?\s+([\W\w]*?)(?=\nOnsdag)\nOnsdag\:?(?:\s\d+\/\d)?\s+([\W\w]*?)(?=\nTorsdag)\nTorsdag\:?(?:\s\d+\/\d)?\s+([\W\w]*?)(?=\nFredag)\nFredag\:?(?:\s\d+\/\d)?\s+([\W\w]*?)(?=\nVeckans|L[öÖ]rdag|\n{2,}|\n+\s{2,})|(?:\nM[åÅ]n)\:?(?:\s\d+\/\d)?\s+([\W\w]*?)(?=\nTis)\nTis\:?(?:\s\d+\/\d)?\s+([\W\w]*?)(?=\nOns)\nOns\:?(?:\s\d+\/\d)?\s+([\W\w]*?)(?=\nTors)\nTors\:?(?:\s\d+\/\d)?\s+([\W\w]*?)(?=\nFre)\nFre\:?(?:\s\d+\/\d)?\s+([\W\w]*?)(?=\nVeckans|L[öÖ]rdag|\n{2,}|\n+\s{2,})/gim
    );
    const weeklyMatch = lunchMenu.matchAll(
      weeklyRegex ??
        /\n+(Veckans\s(?!Lunch)\w+)\:?\s+(?!\/\s?Veckans)([a-zA-ZåäöÅÄÖ\W,.0-9\s-]*?)(?=\nVeckans|M[åÅ]ndag|\-{3,}|\n[A-Ö])/gim
    );
    const lunchGroups = [...lunchMatch][0];
    if (lunchGroups) {
      lunchGroups.shift();
      lunchGroups.forEach((group, index) => {
        if (group) {
          lunchWeek.push({
            day: sweDays[index],
            food: decodeHtmlEntity(
              group
                .replace(/\d\.\s?/gim, '')
                .replace(/^\s?\*\s?/gm, '')
                .replace(/\n{2,}/gim, '\n')
            ).trim(),
          } as LunchMenu);
        }
      });
    }
    for (const group of weeklyMatch) {
      if (group[1] && group[2] && group[2].length > 0) {
        weeklySpecials.push({
          type: group[1].toSentenceCase(),
          food: decodeHtmlEntity(group[2].replaceAll(/\d\.\s?/gim, '')).trim(),
        } as WeeklySpecial);
      }
    }
  }
  console.timeEnd(`Generic scraper for ${lunchUrl}`);
  return weeklySpecials.length > 0
    ? {
        lunchWeek,
        weeklySpecials: removeDuplicatesWithKey<WeeklySpecial>(
          weeklySpecials,
          'type'
        ),
      }
    : lunchWeek;
};

export default genericWebScraper;
