export interface MenuProps {
  create: {
    day: string;
    food: string;
  };
  where: {
    restaurantId_day: {
      restaurantId: string;
      day: string;
    };
  };
}

export interface WeeklySpecialProps {
  create: {
    type: string;
    food: string;
  };
  where: {
    restaurantId_type: {
      restaurantId: string;
      type: string;
    };
  };
}
