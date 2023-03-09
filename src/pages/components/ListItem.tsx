import type { Restaurant } from '~/types/lunch-menu';
import Collapsable from './Collapsable';

interface ListProps {
  restaurant: Restaurant;
}

const ListItem = (props: ListProps) => {
  return (
    <>
      <div>
        <div className='rounded-md bg-gradient-to-r p-1 dark:from-[#ef473a] dark:to-[#cb2d3e]'>
          <div className='dark:bg-gray-custom rounded-md bg-white'>
            <div className='whitespace-pre-line p-10'>
              <h1 className='text-center text-3xl font-bold text-gray-800 dark:text-gray-300'>
                {props.restaurant.name}
              </h1>
              <h2 className='text-2xl font-bold text-gray-800 dark:text-gray-300'>
                {props.restaurant.today.day}
              </h2>
              <p className='text-lg text-gray-500 dark:text-gray-300'>
                {props.restaurant.today.food}
              </p>
              <div className='pt-4'>
                {props.restaurant.weeklySpecials &&
                props.restaurant.weeklySpecials.length > 0
                  ? props.restaurant.weeklySpecials.map((item) => (
                      <div className='whitespace-pre-line pb-4' key={item.type}>
                        <h3 className='font-bold text-gray-800 dark:text-gray-300'>
                          {item.type}
                        </h3>
                        <h4 className='text-gray-500 dark:text-gray-300'>
                          {item.food}
                        </h4>
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
          <Collapsable lunchMenu={props.restaurant.menu} />
        </div>
      </div>
    </>
  );
};

export default ListItem;
