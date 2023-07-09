import type { LunchMenu, WeekMenu } from './lunch-menu';

interface Scraper {
  (regex?: RegExp | undefined): Promise<LunchMenu[] | WeekMenu>;
}

export default Scraper;
