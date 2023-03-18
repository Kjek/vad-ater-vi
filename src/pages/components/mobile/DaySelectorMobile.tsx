import type { Dispatch, SetStateAction } from 'react';
import { useEffectOnce } from 'usehooks-ts';
import ResetButtonIcon from '~/assets/icons/ResetButtonIcon';
import SearchButton from '~/assets/icons/SearchButton';
import { useGlobalState } from '~/hooks/useGlobalState';
import { sweDays } from '~/types/swedish-days';
import DayButtonMobile from './DayButtonMobile';

interface DaySelectorMobileProps {
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

const DaySelectorMobile = (props: DaySelectorMobileProps) => {
  const { dispatch } = useGlobalState();
  const { setSearchQuery } = props;

  useEffectOnce(() => {
    dispatch({
      type: 'reset',
      payload: {},
    });
  });

  return (
    <>
      <div className='flex flex-grow flex-col justify-center gap-2 sm:flex-row'>
        <ul
          id='day-button-list'
          className={`flex flex-wrap items-center justify-center gap-1`}
        >
          {sweDays.map((day) => (
            <li key={day}>
              <DayButtonMobile title={day} />
            </li>
          ))}
          <li key='reset'>
            <ResetButtonIcon />
          </li>
          <li key='search'>
            <SearchButton setSearchQuery={setSearchQuery} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default DaySelectorMobile;
