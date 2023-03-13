import type { Restaurant } from '~/types/lunch-menu';
import ListItem from './ListItem';

interface LunchListProps {
  restaurants: Restaurant[] | undefined;
}

const LunchList = (props: LunchListProps) => {
  const restaurants = props.restaurants;

  return (
    <div id='restaurant-list'>
      <ul
        id='restaurant-list-ul'
        className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      >
        {restaurants
          ? restaurants.map((restaurant) => (
              <li key={restaurant.name}>
                <ListItem restaurant={restaurant} />
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default LunchList;
