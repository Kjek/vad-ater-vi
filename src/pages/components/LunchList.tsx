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
          <p className='text-lg text-black dark:text-white'>
            <svg
              className='-ml-1 mr-3 h-5 w-5 animate-spin text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
            Loading menu...
          </p>
        )}
      </ul>
    </div>
  );
};

export default LunchList;
