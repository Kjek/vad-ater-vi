import type { AllWeekButtonProps } from '@component/AllWeekButton';
import { useGlobalState } from '@hook/useGlobalState';
import { useCallback } from 'react';

interface DayButtonMobileProps extends AllWeekButtonProps {
  title: string;
}

const DayButton = (props: DayButtonMobileProps) => {
  const { state, dispatch } = useGlobalState();
  const { title, setAllSelected } = props;
  const isSelected = state.daysSelected.get(title);

  const onClick = useCallback(
    () => {
      dispatch({
        type: 'selected',
        payload: {
          day: title,
        },
      }),
        setAllSelected(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const selectedClasses = isSelected
    ? 'z-10 outline-none ring-1 ring-gray-700 duration-75 dark:ring-gray-400'
    : '';

  return (
    <>
      <input
        className={`cursor-pointer rounded-lg border border-gray-200 bg-white py-2 px-3.5 text-sm font-medium text-gray-800 transition-all duration-500 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white ${selectedClasses}`}
        type='button'
        value={title.slice(0, 2)}
        onClick={onClick}
      />
    </>
  );
};

export default DayButton;
