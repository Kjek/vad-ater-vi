import type { Restaurant } from '~/types/lunch-menu';
import ListItem from './ListItem';

interface LunchListProps {
  restaurants: Restaurant[] | undefined;
}

const LunchList = (props: LunchListProps) => {
  const restaurants = props.restaurants;

  return (
    <div id='restaurant-list'>
      <ul id='restaurant-list-ul' className='flex flex-col gap-8'>
        {restaurants ? (
          restaurants.map((restaurant) => (
            <li key={restaurant.name}>
              <ListItem restaurant={restaurant} />
            </li>
          ))
        ) : (
          <p className='text-lg text-white'>Loading menu...</p>
        )}
      </ul>
    </div>
  );
};

export default LunchList;
