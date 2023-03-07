import type {
  Menu,
  Restaurant as RestaurantModel,
  WeeklySpecial,
} from '@prisma/client';
import type { Restaurant } from '~/types/lunch-menu';
import { lunchToday, sortLunch } from './sort-lunch';

export const convertRestaurant = (
  restaurantModel: RestaurantModel & {
    menu: Menu[];
    weeklySpecial: WeeklySpecial[];
  }
) => {
  return {
    name: restaurantModel.name,
    menu: sortLunch(restaurantModel.menu),
    today: lunchToday(restaurantModel.menu),
    weeklySpecials: restaurantModel.weeklySpecial,
  } as Restaurant;
};
