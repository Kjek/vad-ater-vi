import { useGlobalState } from '@hook/useGlobalState';
import { cn } from '@util/cn';
import type { Dispatch, InputHTMLAttributes, SetStateAction } from 'react';
import { useCallback } from 'react';
import { useWindowSize } from 'usehooks-ts';

interface DayButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  setAllSelected: Dispatch<SetStateAction<boolean>>;
}

const DayButton = ({ title, setAllSelected, ...props }: DayButtonProps) => {
  const isMobile = useWindowSize().width < 640;
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
    ? 'z-10 outline-none ring-2 ring-gray-700 bg-white dark:ring-gray-400 dark:bg-gray-800'
    : '';

  return (
    <>
      <input
        {...props}
        title='Tryck för att visa den här dagens lunch i listan nedan'
        className={cn(
          'cursor-pointer rounded-lg border border-gray-300 px-3.5 py-2 text-sm font-medium text-gray-800 transition duration-500 hover:bg-gray-200 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white md:px-5 md:py-2.5',
          selectedClasses
        )}
        type='button'
        value={isMobile ? title.slice(0, 2) : title}
        onClick={onClick}
      />
    </>
  );
};

export default DayButton;
