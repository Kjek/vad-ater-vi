import Text from '@component/atoms/Text/Text';
import { cn } from '@util/cn';

const ListItemSkeleton = () => {
  const menuToShow = [1];
  const weeklySpecials = [1, 2];

  const skeletonClasses =
    'rounded-full bg-gray-200 dark:bg-gray-700 transition duration-500';

  return (
    <>
      <li className='dark:bg-gray-custom flex flex-col gap-4 border-b p-6 shadow-md transition duration-500 last:border-none dark:border-gray-700 dark:shadow-none md:flex-row'>
        <Text variant='h2'>
          <a className={cn('flex', skeletonClasses)}>&nbsp;</a>
        </Text>
        <div className='flex flex-col gap-6 sm:w-2/3 sm:grow'>
          <ul>
            {menuToShow.map((_, index) => (
              <li key={index} className='flex flex-col gap-2'>
                <Text variant='h3' className={skeletonClasses}>
                  &nbsp;
                </Text>
                <Text variant='p' className={skeletonClasses}>
                  &nbsp;
                </Text>
              </li>
            ))}
          </ul>

          <ul id='weekly-specials-list' className='flex flex-col gap-4'>
            {weeklySpecials.map((_, index) => (
              <li
                className='flex flex-col gap-2 whitespace-pre-line'
                key={index}
              >
                <Text variant='h4' className={skeletonClasses}>
                  &nbsp;
                </Text>
                <Text variant='h5' className={skeletonClasses}>
                  &nbsp;
                </Text>
              </li>
            ))}
          </ul>
        </div>
      </li>
    </>
  );
};

export default ListItemSkeleton;
