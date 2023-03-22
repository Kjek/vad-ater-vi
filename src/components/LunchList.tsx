import type { Restaurant } from '@type/lunch-menu';
import ListItem from './ListItem';

interface LunchListProps {
  restaurants: Restaurant[] | undefined;
}

const LunchList = (props: LunchListProps) => {
  const { restaurants } = props;

  return (
    <div className='flex justify-center pb-8'>
      <div className='container flex justify-center px-4'>
        <div id='restaurant-list' className='flex grow'>
          <ul id='restaurant-list-ul' className='flex grow flex-col'>
            {restaurants
              ? restaurants.map((restaurant) => (
                  <ListItem key={restaurant.name} restaurant={restaurant} />
                ))
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LunchList;
