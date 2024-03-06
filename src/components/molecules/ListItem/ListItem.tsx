import Text from '@component/atoms/Text/Text';
import ErrorListItem from '@component/molecules/ErrorListItem/ErrorListItem';
import { useGlobalState } from '@hook/useGlobalState';
import type { Restaurant } from '@type/lunch-menu';

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
      <li className='dark:bg-gray-custom whitespace-pre-line break-words border-b bg-white p-6 shadow-md last:border-none dark:border-gray-700 dark:shadow-none sm:flex'>
        <Text variant='h2'>
          <a title='Gå till restaurangens hemsida' href={restaurant.homeUrl}>
            {restaurant.name}
          </a>
        </Text>
        <div className='sm:w-2/3 sm:grow'>
          <ul>
            {menuToShow.length > 0 ? (
              menuToShow.map((lunch) => (
                <li key={lunch.day} className='pb-6 last:pb-0'>
                  <Text variant='h3'>
                    {lunch.day + ` ${lunch.day.getShortDate()}`}
                  </Text>
                  <Text variant='p'>{lunch.food}</Text>
                </li>
              ))
            ) : (
              <ErrorListItem
                key='error-message'
                restaurantHomeUrl={restaurant.homeUrl}
              />
            )}
          </ul>
          {restaurant.weeklySpecials && restaurant.weeklySpecials.length > 0 ? (
            <ul id='weekly-specials-list' className='pt-6'>
              {restaurant.weeklySpecials.map((item, index) => (
                <li
                  className={`whitespace-pre-line  ${
                    restaurant.weeklySpecials.length - 1 === index ? '' : 'pb-4'
                  }`}
                  key={item.type}
                >
                  <Text variant='h4'>{item.type}</Text>
                  <Text variant='h5'>{item.food}</Text>
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
