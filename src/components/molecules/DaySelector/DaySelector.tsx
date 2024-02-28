import AllWeekButton from '@component/atoms/AllWeekButton/AllWeekButton';
import DayButton from '@component/atoms/DayButton/DayButton';
import { useGlobalState } from '@hook/useGlobalState';
import { sweDays } from '@type/swedish-days';
import { useEffect } from 'react';
import { useToggle } from 'usehooks-ts';

const DaySelector = () => {
  const { dispatch } = useGlobalState();
  const [isAllSelected, _, setAllSelected] = useToggle();

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
          className='flex flex-wrap items-center justify-center gap-2'
        >
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
        </ul>
      </div>
    </>
  );
};

export default DaySelector;
