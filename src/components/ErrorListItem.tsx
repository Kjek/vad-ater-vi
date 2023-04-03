import type { RestaurantType } from '@type/restaurant-links';
import { RestaurantURL } from '@type/restaurant-links';

interface ErrorListItemProps {
  restaurantName: string;
}

const ErrorListItem = (props: ErrorListItemProps) => {
  const { restaurantName } = props;
  return (
    <>
      <li key='error-message'>
        <h3 className='text-2xl font-bold text-gray-800 dark:text-gray-300'>
          {
            'Fel vid hämtning av menyer gå till restaurangens hemsida istället: '
          }
        </h3>
        <a
          className='text-2xl font-bold text-blue-700 underline hover:no-underline dark:text-gray-500'
          href={RestaurantURL[restaurantName as RestaurantType].home}
        >
          {RestaurantURL[restaurantName as RestaurantType].home}
        </a>
      </li>
    </>
  );
};

export default ErrorListItem;
