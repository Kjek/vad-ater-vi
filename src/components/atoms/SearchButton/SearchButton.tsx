import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

interface SearchButtonProps {
  isSearchBarVisible: boolean;
  toggleSearchBar: () => void;
}

const SearchButton = (props: SearchButtonProps) => {
  const { isSearchBarVisible, toggleSearchBar } = props;
  const activeClasses = isSearchBarVisible
    ? 'ring-1 ring-gray-300 dark:ring-gray-600'
    : '';

  return (
    <>
      <span
        className={`flex cursor-pointer rounded-md border border-gray-200 bg-white px-2.5 py-2.5 transition duration-500 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 ${activeClasses}`}
        onClick={toggleSearchBar}
      >
        <MagnifyingGlassIcon className='text-black dark:text-white' />
      </span>
    </>
  );
};

export default SearchButton;
