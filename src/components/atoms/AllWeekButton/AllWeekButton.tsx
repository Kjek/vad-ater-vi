import { useGlobalState } from '@hook/useGlobalState';
import { CalendarIcon, Cross1Icon } from '@radix-ui/react-icons';
import type { ComponentPropsWithoutRef, Dispatch, SetStateAction } from 'react';

interface AllWeekButtonProps extends ComponentPropsWithoutRef<'button'> {
  isAllSelected: boolean;
  setAllSelected: Dispatch<SetStateAction<boolean>>;
}

const AllWeekButton = ({
  isAllSelected,
  setAllSelected,
  ...props
}: AllWeekButtonProps) => {
  const { dispatch } = useGlobalState();
  const onClick = () => {
    dispatch({
      type: !isAllSelected ? 'all' : 'reset',
    });
    setAllSelected(!isAllSelected);
  };

  const icon = isAllSelected ? (
    <Cross1Icon className='text-red-500 dark:text-red-700' />
  ) : (
    <CalendarIcon className='text-black dark:text-white' />
  );

  const selectedClasses = isAllSelected
    ? 'ring-2 ring-gray-700 bg-white dark:ring-gray-400 dark:bg-gray-800'
    : '';

  return (
    <button
      {...props}
      type='button'
      className={`flex cursor-pointer rounded-md border border-gray-300 px-2.5 py-2.5 transition duration-500 hover:bg-gray-200 hover:transition-none dark:border-gray-600 dark:hover:bg-gray-700 sm:p-3 ${selectedClasses}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default AllWeekButton;
