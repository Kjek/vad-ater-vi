import { cn } from '@util/cn';
import type { HTMLAttributes, SVGProps } from 'react';

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  svgProps?: SVGProps<SVGElement>;
}

const Spinner = (props: SpinnerProps) => {
  return (
    <div {...props} className={cn('flex self-center', props.className)}>
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
    </div>
  );
};

export default Spinner;
