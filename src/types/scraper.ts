import type { LunchMenu, WeekMenu } from './lunch-menu';

interface Scraper {
  (): Promise<LunchMenu[] | WeekMenu>;
}

export default Scraper;
