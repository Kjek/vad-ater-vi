import type { Restaurant } from '~/types/lunch-menu';
import Collapsable from './Collapsable';

interface ListProps {
  restaurant: Restaurant;
}

const ListItem = (props: ListProps) => {
  return (
    <>
      <div className='dark:bg-gray-custom rounded-md bg-white shadow-md dark:shadow-gray-800'>
        <div className='whitespace-pre-line p-4 pb-0'>
          <h1 className='text-center text-3xl font-bold text-gray-800 dark:text-gray-300'>
            {props.restaurant.name}
          </h1>
          <h2 className='text-2xl font-bold text-gray-800 dark:text-gray-300'>
            {props.restaurant.today.day}
          </h2>
          <p className='text-lg text-gray-500 dark:text-gray-300'>
            {props.restaurant.today.food}
          </p>
          {props.restaurant.weeklySpecials &&
          props.restaurant.weeklySpecials.length > 0 ? (
            <ul id='weekly-specials-list' className='pt-4'>
              {props.restaurant.weeklySpecials.map((item) => (
                <li className='whitespace-pre-line pb-4' key={item.type}>
                  <h3 className='font-bold text-gray-800 dark:text-gray-300'>
                    {item.type}
                  </h3>
                  <h4 className='text-gray-500 dark:text-gray-300'>
                    {item.food}
                  </h4>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <Collapsable lunchMenu={props.restaurant.menu} />
      </div>
    </>
  );
};

export default ListItem;
