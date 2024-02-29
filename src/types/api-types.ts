export interface UpdateSettingsParamsProps {
  id: string;
  name?: string;
  enabled?: boolean;
  homeUrl?: string;
  lunchUrl?: string;
  lunchRegex?: string;
  weeklyRegex?: string;
}

export interface DeleteRestaurantParamsProps {
  id: string;
}

export interface UpdateSettingsFunction {
  ({}: UpdateSettingsParamsProps): void;
}

export interface DeleteRestaurantFunction {
  ({}: DeleteRestaurantParamsProps): void;
}

export interface IdParamVoidFunction {
  ({}: { restaurantId: string }): void;
}
