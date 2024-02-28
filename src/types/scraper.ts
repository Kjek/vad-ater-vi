import type { LunchMenu, WeekMenu } from './lunch-menu';

interface Scraper {
  (
    lunchUrl: string,
    lunchRegex?: RegExp | undefined,
    weeklyRegex?: RegExp | undefined,
    debug?: boolean
  ): Promise<LunchMenu[] | WeekMenu | string>;
}

export default Scraper;
