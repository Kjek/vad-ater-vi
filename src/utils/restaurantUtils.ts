import type {
  Menu as MenuModel,
  Restaurant as RestaurantModel,
  RestaurantSetting as RestaurantSettingModel,
  WeeklySpecial as WeeklySpecialModel,
} from '@prisma/client';
import type { LunchMenu, Restaurant, WeeklySpecial } from '@type/lunch-menu';
import { sortLunch } from './sort-lunch';

export const convertRestaurant = (
  restaurantModel: RestaurantModel & {
    menu: MenuModel[];
    weeklySpecial: WeeklySpecialModel[];
    restaurantSetting: RestaurantSettingModel | null;
  }
) => {
  return {
    name: restaurantModel.restaurantSetting?.name,
    menu: sortLunch(convertToLunchMenu(restaurantModel.menu)),
    weeklySpecials: convertToWeeklySpecials(restaurantModel.weeklySpecial),
  } as Restaurant;
};

export const convertToLunchMenu = (lunchMenus: MenuModel[]) => {
  return lunchMenus.map(
    (lunchMenu) => ({ day: lunchMenu.day, food: lunchMenu.food }) as LunchMenu
  );
};

export const convertToWeeklySpecials = (
  weeklySpecials: WeeklySpecialModel[]
) => {
  return weeklySpecials.map(
    (weeklySpecial) =>
      ({ type: weeklySpecial.type, food: weeklySpecial.food }) as WeeklySpecial
  );
};
