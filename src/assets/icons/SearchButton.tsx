import type { Dispatch, SetStateAction } from 'react';
import { useTheme } from '~/hooks/useTheme';

interface SearchButtonProps {
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

const SearchButton = (props: SearchButtonProps) => {
  const { theme } = useTheme();
  const { setSearchQuery } = props;

  return (
    <span className='flex cursor-pointer rounded-md border border-gray-200 bg-white py-2.5 px-3.5 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill={theme === 'dark' ? 'white' : 'currentColor'}
        className='h-4 w-4'
      >
        <path
          fillRule='evenodd'
          d='M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z'
          clipRule='evenodd'
        />
      </svg>
    </span>
  );
};

export default SearchButton;
