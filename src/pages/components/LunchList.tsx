import type { Restaurant } from '~/types/lunch-menu';
import ListItem from './ListItem';

interface LunchListProps {
  restaurants: Restaurant[] | undefined;
}

const LunchList = (props: LunchListProps) => {
  const restaurants = props.restaurants;

  return (
    <div id='restaurant-list' className='flex'>
      <ul id='restaurant-list-ul' className='flex flex-col gap-8'>
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
