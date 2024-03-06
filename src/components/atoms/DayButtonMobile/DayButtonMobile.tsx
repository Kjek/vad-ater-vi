import { useGlobalState } from '@hook/useGlobalState';
import { cn } from '@util/cn';
import type { Dispatch, InputHTMLAttributes, SetStateAction } from 'react';
import { useCallback } from 'react';

interface DayButtonMobileProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  setAllSelected: Dispatch<SetStateAction<boolean>>;
}

const DayButton = ({
  title,
  setAllSelected,
  ...props
}: DayButtonMobileProps) => {
  const { state, dispatch } = useGlobalState();
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
    ? 'z-10 outline-none ring-1 ring-gray-700 dark:ring-gray-400'
    : '';

  return (
    <>
      <input
        {...props}
        className={cn(
          'cursor-pointer rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-800 transition duration-500 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white',
          selectedClasses
        )}
        type='button'
        value={title.slice(0, 2)}
        onClick={onClick}
      />
    </>
  );
};

export default DayButton;
