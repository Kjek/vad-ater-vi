export const sweDays = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag'];

export interface LunchMenu {
  day: string;
  food: string;
}

export interface Restaurant {
  menu: LunchMenu[];
  name: string;
  today: LunchMenu;
  weeklySpecials: WeeklySpecial[];
}

export interface Restaurants {
  restaurants: Restaurant[];
}

export interface WeeklySpecial {
  type: string;
  food: string;
}
