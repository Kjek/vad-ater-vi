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

export type UpdateSettingsFunction = ({}: UpdateSettingsParamsProps) => void;

export type DeleteRestaurantFunction =
  ({}: DeleteRestaurantParamsProps) => void;

export type IdParamVoidFunction = ({}: { restaurantId: string }) => void;
