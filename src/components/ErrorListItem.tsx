interface ErrorListItemProps {
  restaurantHomeUrl?: string;
}

const ErrorListItem = (props: ErrorListItemProps) => {
  const { restaurantHomeUrl } = props;
  return (
    <>
      <li key='error-message'>
        <h3 className='text-2xl font-bold text-gray-800 dark:text-gray-300'>
          {
            'Fel vid hämtning av menyer gå till restaurangens hemsida istället: '
          }
        </h3>
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
