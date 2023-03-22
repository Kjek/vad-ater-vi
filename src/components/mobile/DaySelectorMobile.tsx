import AllWeekButtonIcon from '@asset/AllWeekButtonIcon';
import SearchButton from '@asset/SearchButton';
import { useGlobalState } from '@hook/useGlobalState';
import { sweDays } from '@type/swedish-days';
import type { Dispatch, SetStateAction } from 'react';
import { useEffectOnce, useToggle } from 'usehooks-ts';
import SearchBar from '../SearchBar';
import DayButtonMobile from './DayButtonMobile';

interface DaySelectorMobileProps {
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

const DaySelectorMobile = (props: DaySelectorMobileProps) => {
  const { dispatch } = useGlobalState();
  const [isSearchBarVisible, toggleSearchBar] = useToggle();
  const { setSearchQuery } = props;

  useEffectOnce(() => {
    dispatch({
      type: 'reset',
    });
  });

  return (
    <>
      <div className='flex flex-grow flex-col justify-center gap-2 sm:flex-row'>
        <ul
          id='day-button-list'
          className={`flex flex-wrap items-center justify-center gap-1`}
        >
          {isSearchBarVisible ? (
            <li key='search-bar' className='w-full'>
              <SearchBar setSearchQuery={setSearchQuery} />
            </li>
          ) : null}
          <li key='all'>
            <AllWeekButtonIcon />
          </li>
          {sweDays.map((day) => (
            <li key={day}>
              <DayButtonMobile title={day} />
            </li>
          ))}
          <li key='search-button'>
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

export default DaySelectorMobile;
