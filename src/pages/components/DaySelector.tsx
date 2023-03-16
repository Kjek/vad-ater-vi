import { useEffect } from 'react';
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
      <div className='flex flex-col gap-2'>
        <div className='flex flex-row'>
          {days.map((day) => (
            <DayButton key={day} title={day} />
          ))}
        </div>
        <div className='flex justify-center'>
          <SwitchButton />
        </div>
      </div>
    </>
  );
};

export default DaySelector;
