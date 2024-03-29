import { cn } from '@util/cn';
import { type ComponentPropsWithoutRef } from 'react';

const LoadingIndicator = ({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      {...props}
      className={cn('flex h-full w-full justify-center', className)}
    >
      <svg
        className='my-auto h-5 w-5 animate-spin text-gray-800 dark:text-gray-300'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
      >
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        ></path>
      </svg>
      <p className='ml-2 text-lg text-gray-800 dark:text-gray-300'>
        Laddar menyer vänligen vänta en stund...
      </p>
    </div>
  );
};

export default LoadingIndicator;
