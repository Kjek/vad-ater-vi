import Text from '@component/atoms/Text/Text';
import ListItem from '@component/molecules/ListItem/ListItem';
import type { Restaurant } from '@type/lunch-menu';

interface LunchListProps {
  restaurants: Restaurant[] | undefined;
}

const LunchList = ({ restaurants }: LunchListProps) => {
  return (
    <div className='mb-14 flex justify-center py-8 md:mb-0 md:pt-0'>
      <div className='container px-4'>
        <div className='flex w-full text-center md:text-start'>
          <Text variant='p'>Lunchmenyer uppdateras kl. 9 på måndagar</Text>
        </div>
        <div id='restaurant-list'>
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
