import { type LunchMenu, sweDays } from '~/types/lunch-menu';

export const sortLunch = (lunchMenu: LunchMenu[]) => {
  return lunchMenu.sort((lhs: LunchMenu, rhs: LunchMenu) =>
    sweDays.indexOf(lhs.day) > sweDays.indexOf(rhs.day) ? 1 : -1
  );
};

export const lunchToday = (lunchMenu: LunchMenu[]) => {
  const dayOfWeek = new Date().getDay() - 1;
  return lunchMenu.filter((item) => sweDays[dayOfWeek] == item.day)[0];
};
