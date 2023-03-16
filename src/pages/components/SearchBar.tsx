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
        id='first_name'
        className='w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 md:w-1/3 lg:w-1/6'
        placeholder='Sök restauranger...'
        required
        onChange={(event) => setSearchQuery(event.currentTarget.value)}
      />
    </>
  );
};

export default SearchBar;
