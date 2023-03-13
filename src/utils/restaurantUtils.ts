import type {
  Menu as MenuModel,
  Restaurant as RestaurantModel,
  WeeklySpecial as WeeklySpecialModel,
} from '@prisma/client';
import type { LunchMenu, Restaurant, WeeklySpecial } from '~/types/lunch-menu';
import { lunchToday, sortLunch } from './sort-lunch';

export const convertRestaurant = (
  restaurantModel: RestaurantModel & {
    menu: MenuModel[];
    weeklySpecial: WeeklySpecialModel[];
  }
) => {
  return {
    name: restaurantModel.name,
    menu: sortLunch(convertToLunchMenu(restaurantModel.menu)),
    today: lunchToday(convertToLunchMenu(restaurantModel.menu)),
    weeklySpecials: convertToWeeklySpecials(restaurantModel.weeklySpecial),
  } as Restaurant;
};

export const convertToLunchMenu = (lunchMenus: MenuModel[]) => {
  return lunchMenus.map(
    (lunchMenu) => ({ day: lunchMenu.day, food: lunchMenu.food } as LunchMenu)
  );
};

export const convertToWeeklySpecials = (
  weeklySpecials: WeeklySpecialModel[]
) => {
  return weeklySpecials.map(
    (weeklySpecial) =>
      ({ type: weeklySpecial.type, food: weeklySpecial.food } as WeeklySpecial)
  );
};
