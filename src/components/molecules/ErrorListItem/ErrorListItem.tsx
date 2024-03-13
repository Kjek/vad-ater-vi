import Text from '@component/atoms/Text/Text';

interface ErrorListItemProps {
  restaurantHomeUrl?: string;
}

const ErrorListItem = ({ restaurantHomeUrl }: ErrorListItemProps) => {
  return (
    <>
      <li key='error-message'>
        <Text variant='h3'>
          {
            'Fel vid hämtning av menyer gå till restaurangens hemsida istället: '
          }
        </Text>
        <a
          className='text-2xl font-bold text-blue-700 underline hover:no-underline dark:text-gray-500'
          href={restaurantHomeUrl}
        >
          {restaurantHomeUrl}
        </a>
      </li>
    </>
  );
};

export default ErrorListItem;
