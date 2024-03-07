export interface LunchMenu {
  day: string;
  food: string;
}

export interface Restaurant {
  menu: LunchMenu[];
  name: string;
  weeklySpecials: WeeklySpecial[];
  homeUrl?: string;
}

export interface Restaurants {
  restaurants: Restaurant[];
}

export interface WeekMenu {
  lunchWeek: LunchMenu[];
  weeklySpecials: WeeklySpecial[];
}

export interface WeeklySpecial {
  type: string;
  food: string;
}

/**
 * Type guard for WeekMenu.
 * @param   {unknown} object  Unknown object to type check.
 * @returns {boolean}         True if object is of type WeekMenu. Otherwise false.
 */
export const isWeekMenu = (object: unknown): object is WeekMenu => {
  return (
    typeof object === 'object' &&
    object !== null &&
    'lunchWeek' in object &&
    'weeklySpecials' in object
  );
};

/**
 * Type guard for LunchMenu.
 * @param   {unknown} object  Unknown object to type check.
 * @returns {boolean}         True if object is of type LunchMenu. Otherwise false.
 */
export const isLunchMenu = (object: unknown): object is LunchMenu => {
  return (
    typeof object === 'object' &&
    object !== null &&
    'day' in object &&
    'food' in object
  );
};

/**
 * Type guard for LunchMenu array.
 * @param   {unknown} object  Unknown object to type check.
 * @returns {boolean}         True if object is of type LunchMenu array. Otherwise false.
 */
export const isLunchMenus = (object: unknown): object is LunchMenu[] => {
  return (
    Array.isArray(object) &&
    object.length > 0 &&
    isLunchMenu((object as LunchMenu[])[0] as unknown as LunchMenu)
  );
};
