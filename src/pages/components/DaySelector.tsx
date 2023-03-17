import useEffectOnce from '~/hooks/useEffectOnce';
import { useGlobalState } from '~/hooks/useGlobalState';
import { sweDays } from '~/types/lunch-menu';
import DayButton from './DayButton';
import SwitchButton from './SwitchButton';

const DaySelector = () => {
  const { dispatch } = useGlobalState();
  useEffectOnce(() => {
    dispatch({
      type: 'single-select',
      payload: {
        day: sweDays[new Date().getDay() - 1],
        isSelected: true,
      },
    });
  });

  const days = sweDays;
  return (
    <>
      <div className='flex flex-col gap-4 sm:flex-row'>
        <ul
          id='day-button-list'
          className='flex flex-wrap items-center justify-center gap-2'
        >
          {days.map((day) => (
            <li key={day}>
              <DayButton title={day} />
            </li>
          ))}
        </ul>
        <div className='flex justify-center'>
          <SwitchButton />
        </div>
      </div>
    </>
  );
};

export default DaySelector;
