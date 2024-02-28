import type { LunchMenu, WeeklySpecial } from '@type/lunch-menu';
import type Scraper from '@type/scraper';
import { sweDays } from '@type/swedish-days';
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
  const searchRegex = new RegExp('\nTisdag|\nTis', 'gim');
  const lunchMenu =
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
      .map(({ innerText }) => innerText)[0];

  if (debug) {
    console.timeEnd(`Generic scraper for ${lunchUrl}`);
    return JSON.stringify(lunchMenu);
  }

  const lunchWeek = [];
  const weeklySpecials = [];
  if (lunchMenu) {
    const lunchMatch = lunchMenu.matchAll(
      lunchRegex ||
        /(?:Måndag|MÅNDAG)\:?(?:\s\d+\/\d)?\s+([\W\w]*?)(?=\nTisdag)\nTisdag\:?(?:\s\d+\/\d)?\s+([\W\w]*?)(?=\nOnsdag)\nOnsdag\:?(?:\s\d+\/\d)?\s+([\W\w]*?)(?=\nTorsdag)\nTorsdag\:?(?:\s\d+\/\d)?\s+([\W\w]*?)(?=\nFredag)\nFredag\:?(?:\s\d+\/\d)?\s+([\W\w]*?)(?=\nVeckans|Lördag|\n{2,}|\n+\s{2,})|(?:Mån|MÅN)\:?(?:\s\d+\/\d)?\s+([\W\w]*?)(?=\nTis)\nTis\:?(?:\s\d+\/\d)?\s+([\W\w]*?)(?=\nOns)\nOns\:?(?:\s\d+\/\d)?\s+([\W\w]*?)(?=\nTors)\nTors\:?(?:\s\d+\/\d)?\s+([\W\w]*?)(?=\nFre)\nFre\:?(?:\s\d+\/\d)?\s+([\W\w]*?)(?=\nVeckans|Lördag|\n{2,}|\n+\s{2,})/gim
    );
    const weeklyMatch = lunchMenu.matchAll(
      weeklyRegex ||
        /\n?(Veckans\s\w+)\:?\s+([a-zA-ZåäöÅÄÖ,.0-9\s-]*?)(?=\nVeckans|Måndag|MÅNDAG|\-{3,}|\n[A-Ö])/gim
    );
    const lunchGroups = [...lunchMatch][0];
    if (lunchGroups) {
      lunchGroups.shift();
      for (const group of lunchGroups) {
        if (group) {
          lunchWeek.push({
            day: sweDays[lunchGroups.indexOf(group)],
            food: decodeHtmlEntity(
              group.replace(/\d\.\s?/gim, '').replace(/^\s?\*\s?/gm, '')
            ).trim(),
          } as LunchMenu);
        }
      }
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
  return weeklySpecials.length > 0 ? { lunchWeek, weeklySpecials } : lunchWeek;
};

export default genericWebScraper;
