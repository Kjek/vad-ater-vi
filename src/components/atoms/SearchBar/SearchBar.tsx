import { useTheme } from '@hook/useTheme';
import type { Dispatch, SetStateAction } from 'react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  const { theme } = useTheme();

  const onClear = () => {
    setSearchQuery('');
  };

  return (
    <>
      <div className='hidden justify-center md:flex'>
        <div className='relative w-full sm:w-auto'>
          <input
            title='Sök på restauranger som ska visas i listan'
            type='text'
            id='search-restaurant'
            className='w-full self-center rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-800 outline-none transition duration-500 focus:border-gray-300 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-gray-600 dark:focus:ring-gray-600 md:w-auto'
            placeholder='Sök restauranger...'
            onChange={(event) => setSearchQuery(event.currentTarget.value)}
          />
          <button
            aria-label='rensa sökfältet'
            type='button'
            className='absolute bottom-[5px] right-0 rounded-lg px-2 py-2 text-sm font-medium text-white sm:bottom-[55px] lg:bottom-[5px]'
            onClick={() => onClear()}
          >
            {searchQuery && (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill={theme === 'dark' ? '#767f89' : 'dark'}
                className='h-4 w-4'
              >
                <path
                  fillRule='evenodd'
                  d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
                  clipRule='evenodd'
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
