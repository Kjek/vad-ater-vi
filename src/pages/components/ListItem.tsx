import type { Restaurant } from '~/types/lunch-menu';
import Collapsable from './Collapsable';

interface ListProps {
  restaurant: Restaurant;
}

const ListItem = (props: ListProps) => {
  return (
    <>
      <div className='dark:bg-gray-custom rounded-md bg-white shadow-md dark:shadow-gray-800'>
        <div className='whitespace-pre-line p-6 pb-0'>
          <h2 className='text-center text-3xl font-bold text-gray-800 dark:text-gray-300'>
            {props.restaurant.name}
          </h2>
          <h3 className='text-2xl font-bold text-gray-800 dark:text-gray-300'>
            {props.restaurant.today.day}
          </h3>
          <p className='text-lg text-gray-500 dark:text-gray-300'>
            {props.restaurant.today.food}
          </p>
          {props.restaurant.weeklySpecials &&
          props.restaurant.weeklySpecials.length > 0 ? (
            <ul id='weekly-specials-list' className='pt-6'>
              {props.restaurant.weeklySpecials.map((item, index) => (
                <li
                  className={`whitespace-pre-line  ${
                    props.restaurant.weeklySpecials.length - 1 === index
                      ? ''
                      : 'pb-4'
                  }`}
                  key={item.type}
                >
                  <h4 className='font-bold text-gray-800 dark:text-gray-300'>
                    {item.type}
                  </h4>
                  <h5 className='text-gray-500 dark:text-gray-300'>
                    {item.food}
                  </h5>
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
