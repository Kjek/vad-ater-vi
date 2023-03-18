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
      <li className='dark:bg-gray-custom whitespace-pre-line border-b bg-white p-6 shadow-md transition-all duration-500 last:border-none dark:border-gray-700 dark:shadow-none sm:flex'>
        <h2 className='pb-4 text-center text-3xl font-bold text-gray-800 dark:text-gray-300 sm:w-1/3 sm:grow sm:pb-0'>
          {restaurant.name}
        </h2>
        <div className='sm:w-2/3 sm:grow'>
          <ul>
            {menuToShow.map((lunch, index) => (
              <li key={lunch.day} className='pb-6'>
                <h3 className='text-2xl font-bold text-gray-800 dark:text-gray-300'>
                  {lunch.day + ` ${lunch.day.getShortDate()}`}
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
      </li>
    </>
  );
};

export default ListItem;
