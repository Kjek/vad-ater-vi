import AllWeekButton from '@component/atoms/AllWeekButton/AllWeekButton';
import DayButton from '@component/atoms/DayButton/DayButton';
import SearchBar from '@component/atoms/SearchBar/SearchBar';
import SearchButton from '@component/atoms/SearchButton/SearchButton';
import { sweDays } from '@type/swedish-days';
import type { Dispatch, SetStateAction } from 'react';
import { useToggle } from 'usehooks-ts';

interface DaySelectorProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

const DaySelector = ({ searchQuery, setSearchQuery }: DaySelectorProps) => {
  const [isSearchBarVisible, toggleSearchBar] = useToggle();
  const [isAllSelected, _, setAllSelected] = useToggle();

  return (
    <>
      <div className='flex flex-grow flex-col justify-center gap-2 sm:flex-row'>
        <ul
          id='day-button-list'
          className='flex flex-wrap items-center justify-center gap-2'
        >
          {isSearchBarVisible ? (
            <li key='search-bar' className='block w-full md:hidden '>
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </li>
          ) : null}
          <li key='all-week'>
            <AllWeekButton
              isAllSelected={isAllSelected}
              setAllSelected={setAllSelected}
            />
          </li>
          {sweDays.map((day) => (
            <li key={day}>
              <DayButton title={day} setAllSelected={setAllSelected} />
            </li>
          ))}
          <li key='search-button' className='block md:hidden'>
            <SearchButton
              isSearchBarVisible={isSearchBarVisible}
              toggleSearchBar={toggleSearchBar}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default DaySelector;
