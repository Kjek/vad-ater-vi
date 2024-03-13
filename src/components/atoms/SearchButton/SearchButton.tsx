import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { cn } from '@util/cn';
import { type ComponentPropsWithoutRef } from 'react';

interface SearchButtonProps extends ComponentPropsWithoutRef<'span'> {
  isSearchBarVisible: boolean;
  toggleSearchBar: () => void;
}

const SearchButton = ({
  isSearchBarVisible,
  toggleSearchBar,
  className,
  ...props
}: SearchButtonProps) => {
  const activeClasses = isSearchBarVisible
    ? 'ring-1 ring-gray-300 dark:ring-gray-600'
    : '';

  return (
    <>
      <span
        {...props}
        className={cn(
          'flex cursor-pointer rounded-md border border-gray-200 bg-white px-2.5 py-2.5 transition duration-500 hover:bg-gray-200 hover:transition-none dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700',
          className,
          activeClasses
        )}
        onClick={toggleSearchBar}
      >
        <MagnifyingGlassIcon className='text-black dark:text-white' />
      </span>
    </>
  );
};

export default SearchButton;
