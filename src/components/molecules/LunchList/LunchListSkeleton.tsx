import ListItemSkeleton from '../ListItem/ListItemSkeleton';

const LunchListSkeleton = () => {
  const restaurants = [1, 2, 3, 4];

  return (
    <div
      role='status'
      className='flex animate-pulse justify-center py-8 pb-16 md:py-0'
    >
      <div className='container mb-6 px-4 md:m-0'>
        <div id='restaurant-list'>
          <ul id='restaurant-list-ul'>
            {restaurants
              ? restaurants.map((_, index) => <ListItemSkeleton key={index} />)
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LunchListSkeleton;
