/* eslint-disable @typescript-eslint/no-empty-interface */
export interface RestaurantSetting {
  id: string;
  name: string;
  homeUrl: string;
  lunchUrl: string;
  regex?: string;
  enabled?: boolean;
}

export interface CreateRestaurantSetting
  extends Omit<RestaurantSetting, 'id'> {}
export interface UpdateRestaurantSetting
  extends Partial<Omit<RestaurantSetting, 'id'>> {}
