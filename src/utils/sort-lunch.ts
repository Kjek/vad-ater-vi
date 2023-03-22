import type { LunchMenu } from '@type/lunch-menu';
import type { SwedishDay } from '@type/swedish-days';
import { sweDays } from '@type/swedish-days';

export const sortLunch = (lunchMenu: LunchMenu[]) => {
  return lunchMenu.sort((lhs: LunchMenu, rhs: LunchMenu) =>
    sweDays.indexOf(lhs.day as SwedishDay) >
    sweDays.indexOf(rhs.day as SwedishDay)
      ? 1
      : -1
  );
};
