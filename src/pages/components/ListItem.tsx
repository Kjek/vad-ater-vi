import { useGlobalState } from '~/hooks/useGlobalState';
import type { Restaurant } from '~/types/lunch-menu';

interface ListProps {
  restaurant: Restaurant;
}

const ListItem = (props: ListProps) => {
  const { state } = useGlobalState();
  const { restaurant } = props;
  const daysToShow = state.daysSelected;
  const menuToShow = restaurant.menu.filter((item) => daysToShow.get(item.day));
  return (
    <>
      <div className='dark:bg-gray-custom rounded-md bg-white shadow-md transition-all duration-500 dark:shadow-gray-800'>
        <div className='whitespace-pre-line p-6'>
          <h2 className='text-center text-3xl font-bold text-gray-800 dark:text-gray-300'>
            {restaurant.name}
          </h2>
          <ul>
            {menuToShow.map((lunch) => (
              <li key={lunch.day} className='pb-6'>
                <h3 className='text-2xl font-bold text-gray-800 dark:text-gray-300'>
                  {lunch.day}
                </h3>
                <p className='text-lg text-gray-500 dark:text-gray-300'>
                  {lunch.food}
                </p>
              </li>
            ))}
          </ul>
          {restaurant.weeklySpecials && restaurant.weeklySpecials.length > 0 ? (
            <ul id='weekly-specials-list'>
              {restaurant.weeklySpecials.map((item, index) => (
                <li
                  className={`whitespace-pre-line  ${
                    restaurant.weeklySpecials.length - 1 === index ? '' : 'pb-4'
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
      </div>
    </>
  );
};

export default ListItem;
