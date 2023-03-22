import { useGlobalState } from '@hook/useGlobalState';
import { sweDays } from '@type/swedish-days';
import { useEffectOnce } from 'usehooks-ts';
import DayButton from './DayButton';
import AllWeekButton from './AllWeekButton';
import AllWeekButtonIcon from '@asset/AllWeekButtonIcon';

const DaySelector = () => {
  const { dispatch } = useGlobalState();

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
          className='flex flex-wrap items-center justify-center gap-2'
        >
          <li key='all-week'>
            <AllWeekButtonIcon />
          </li>
          {sweDays.map((day) => (
            <li key={day}>
              <DayButton title={day} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DaySelector;
