import CalendarIcon from '@asset/CalendarIcon';
import CancelIcon from '@asset/CancelIcon';
import { useGlobalState } from '@hook/useGlobalState';
import { useTheme } from '@hook/useTheme';
import type { Dispatch, InputHTMLAttributes, SetStateAction } from 'react';

interface AllWeekButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  isAllSelected: boolean;
  setAllSelected: Dispatch<SetStateAction<boolean>>;
}

const AllWeekButton = ({
  isAllSelected,
  setAllSelected,
  ...props
}: AllWeekButtonProps) => {
  const { dispatch } = useGlobalState();
  const { theme } = useTheme();
  const onClick = () => {
    dispatch({
      type: !isAllSelected ? 'all' : 'reset',
    });
    setAllSelected(!isAllSelected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  const icon = isAllSelected ? <CancelIcon /> : <CalendarIcon theme={theme} />;

  const selectedClasses = isAllSelected
    ? 'ring-2 ring-gray-700 duration-75 bg-white dark:ring-gray-400 dark:bg-gray-800'
    : '';

  return (
    <span
      {...props}
      className={`flex cursor-pointer rounded-md border border-gray-300 px-2.5 py-2.5 transition duration-500 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-700 sm:p-3 ${selectedClasses}`}
      onClick={onClick}
    >
      {icon}
    </span>
  );
};

export default AllWeekButton;
