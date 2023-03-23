import { useGlobalState } from '@hook/useGlobalState';
import { useTheme } from '@hook/useTheme';
import type { Dispatch, SetStateAction } from 'react';
import { useCallback } from 'react';
import CalendarIcon from './assets/CalendarIcon';
import CloseIcon from './assets/CloseIcon';

export interface AllWeekButtonProps {
  isAllSelected?: boolean;
  setAllSelected: Dispatch<SetStateAction<boolean>>;
}

const AllWeekButton = (props: AllWeekButtonProps) => {
  const { dispatch } = useGlobalState();
  const { theme } = useTheme();
  const { isAllSelected, setAllSelected } = props;
  const onClick = useCallback(() => {
    dispatch({
      type: !isAllSelected ? 'all' : 'reset',
    });
    setAllSelected(!isAllSelected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAllSelected]);

  const icon = isAllSelected ? <CloseIcon /> : <CalendarIcon theme={theme} />;

  const selectedClasses = isAllSelected
    ? 'ring-2 ring-gray-700 duration-75 bg-white dark:ring-gray-400 dark:bg-gray-800'
    : '';

  return (
    <span
      className={`flex cursor-pointer rounded-md border border-gray-300 py-2.5 px-2.5 transition duration-500 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-700 sm:p-3 ${selectedClasses}`}
      onClick={onClick}
    >
      {icon}
    </span>
  );
};

export default AllWeekButton;
