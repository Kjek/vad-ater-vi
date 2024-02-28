import SearchButton from '@asset/SearchButton';
import AllWeekButton from '@component/atoms/AllWeekButton/AllWeekButton';
import DayButtonMobile from '@component/atoms/DayButtonMobile/DayButtonMobile';
import SearchBar from '@component/atoms/SearchBar/SearchBar';
import { useGlobalState } from '@hook/useGlobalState';
import { sweDays } from '@type/swedish-days';
import { useEffect, type Dispatch, type SetStateAction } from 'react';
import { useToggle } from 'usehooks-ts';

interface DaySelectorMobileProps {
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

const DaySelectorMobile = (props: DaySelectorMobileProps) => {
  const { dispatch } = useGlobalState();
  const [isSearchBarVisible, toggleSearchBar] = useToggle();
  const [isAllSelected, _, setAllSelected] = useToggle();
  const { setSearchQuery } = props;

  useEffect(() => {
    dispatch({
      type: 'reset',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <AllWeekButton
              isAllSelected={isAllSelected}
              setAllSelected={setAllSelected}
            />
          </li>
          {sweDays.map((day) => (
            <li key={day}>
              <DayButtonMobile
                isAllSelected={isAllSelected}
                setAllSelected={setAllSelected}
                title={day}
              />
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
