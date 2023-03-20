import type { Dispatch, SetStateAction } from 'react';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useTheme } from '~/hooks/useTheme';

interface SearchBarProps {
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

const SearchBar = (props: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputText, setInputText] = useState<string>();
  const { theme } = useTheme();
  const { setSearchQuery } = props;

  const onClear = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      setInputText(undefined);
    }
  };

  useEffect(() => {
    setSearchQuery(inputText ?? '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputText]);

  return (
    <>
      <div className='flex justify-center'>
        <div className='relative'>
          <input
            title='Sök på restauranger som ska visas i listan'
            type='text'
            id='search-restaurant'
            ref={inputRef}
            className='self-center rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 transition duration-500 focus:border-gray-300 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-600 dark:focus:ring-gray-600 md:w-auto'
            placeholder='Sök restauranger...'
            onChange={(event) => setInputText(event.currentTarget.value)}
          />
          <button
            type='button'
            className='absolute right-0 bottom-[5px] rounded-lg px-2 py-2 text-sm font-medium text-white sm:bottom-[55px] lg:bottom-[5px]'
            onClick={() => onClear()}
          >
            {inputText && (
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
