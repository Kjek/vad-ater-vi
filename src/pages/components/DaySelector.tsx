import { useCallback, useEffect } from 'react';
import useMultiSelector from '~/hooks/useMultiSelector';
import { sweDays } from '~/types/lunch-menu';
import DayButton from './DayButton';
import SwitchButton from './SwitchButton';

const DaySelector = () => {
  const { state, dispatch } = useMultiSelector();
  const days = sweDays;
  const today = days[new Date().getDay() - 1] as string;

  const onClickButton = useCallback(
    (day: string, isSelected: boolean) =>
      dispatch({
        type: state.isMultiSelect ? 'multi-select' : 'single-select',
        payload: {
          isSelected: isSelected,
          day: day,
        },
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state]
  );

  const onClickMultiSelect = useCallback(
    (isMultiSelect: boolean) =>
      dispatch({
        type: isMultiSelect ? 'multi-select' : 'single-select',
        payload: {
          day: isMultiSelect ? undefined : today,
          isSelected: !isMultiSelect,
        },
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [today]
  );

  useEffect(() => {
    dispatch({
      type: 'single-select',
      payload: {
        isSelected: true,
        day: today,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-row'>
          {days.map((day) => (
            <DayButton
              key={day}
              title={day}
              selected={state.daysSelected.get(day) ?? false}
              onClick={onClickButton}
            />
          ))}
        </div>
        <div className='flex justify-center'>
          <SwitchButton onClick={onClickMultiSelect} />
        </div>
      </div>
    </>
  );
};

export default DaySelector;
