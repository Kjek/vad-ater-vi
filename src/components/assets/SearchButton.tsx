import { useTheme } from '@hook/useTheme';

interface SearchButtonProps {
  isSearchBarVisible: boolean;
  toggleSearchBar: () => void;
}

const SearchButton = (props: SearchButtonProps) => {
  const { theme } = useTheme();
  const { isSearchBarVisible, toggleSearchBar } = props;
  const activeClasses = isSearchBarVisible
    ? 'ring-1 ring-gray-300 dark:ring-gray-600'
    : '';

  return (
    <>
      <span
        className={`flex cursor-pointer rounded-md border border-gray-200 bg-white py-2.5 px-2.5 transition duration-500 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 ${activeClasses}`}
        onClick={toggleSearchBar}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill={theme === 'dark' ? '#D1D5DB' : 'currentColor'}
          className='h-4 w-4'
        >
          <path
            fillRule='evenodd'
            d='M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z'
            clipRule='evenodd'
          />
        </svg>
      </span>
    </>
  );
};

export default SearchButton;
