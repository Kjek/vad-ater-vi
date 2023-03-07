import type { Restaurant } from '~/types/lunch-menu';
import ListItem from './ListItem';

interface LunchListProps {
  restaurants: Restaurant[] | undefined;
}

const LunchList = (props: LunchListProps) => {
  const restaurants = props.restaurants;

  return (
    <>
      <ul id='restaurant-list'>
        {restaurants ? (
          restaurants.map((restaurant) => (
            <li className='mb-8' key={restaurant.name}>
              <ListItem restaurant={restaurant} />
            </li>
          ))
        ) : (
          <p className='text-lg text-white'>Loading menu...</p>
        )}
      </ul>
    </>
  );
};

export default LunchList;
