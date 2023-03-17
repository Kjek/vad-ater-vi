import useEffectOnce from '~/hooks/useEffectOnce';
import { useGlobalState } from '~/hooks/useGlobalState';
import { sweDays } from '~/types/lunch-menu';
import DayButton from './DayButton';
import ResetButton from './ResetButton';

const DaySelector = () => {
  const { dispatch } = useGlobalState();
  useEffectOnce(() => {
    dispatch({
      type: 'reset',
      payload: {
        day: sweDays[new Date().getDay() - 1],
        isSelected: true,
      },
    });
  });

  const days = sweDays;
  return (
    <>
      <div className='flex flex-grow flex-col justify-center gap-2 sm:flex-row'>
        <ul
          id='day-button-list'
          className='flex flex-wrap items-center justify-center gap-2'
        >
          {days.map((day) => (
            <li key={day}>
              <DayButton title={day} />
            </li>
          ))}
          <li key='reset'>
            <ResetButton />
          </li>
        </ul>
      </div>
    </>
  );
};

export default DaySelector;
