import type { LunchMenu, WeekMenu } from './lunch-menu';

interface Scraper {
  (lunchUrl: string, regex?: RegExp | undefined): Promise<
    LunchMenu[] | WeekMenu
  >;
}

export default Scraper;
