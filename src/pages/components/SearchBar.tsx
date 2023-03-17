import type { Dispatch, SetStateAction } from 'react';

interface SearchBarProps {
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

const SearchBar = (props: SearchBarProps) => {
  const { setSearchQuery } = props;
  return (
    <>
      <input
        type='text'
        id='search-restaurant'
        className='w-5/6 self-center rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 transition duration-500 focus:border-gray-300 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-600 dark:focus:ring-gray-600 md:w-auto'
        placeholder='Sök restauranger...'
        required
        onChange={(event) => setSearchQuery(event.currentTarget.value)}
      />
    </>
  );
};

export default SearchBar;
