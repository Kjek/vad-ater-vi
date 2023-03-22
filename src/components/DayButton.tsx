import { useGlobalState } from '@hook/useGlobalState';
import { useCallback } from 'react';

interface DayButtonProps {
  title: string;
}

const DayButton = (props: DayButtonProps) => {
  const { state, dispatch } = useGlobalState();
  const { title } = props;
  const isSelected = state.daysSelected.get(title);

  const onClick = useCallback(
    () =>
      dispatch({
        type: 'selected',
        payload: {
          day: title,
        },
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isSelected]
  );

  const selectedClasses = isSelected
    ? 'z-10 outline-none ring-2 ring-gray-700 duration-75 dark:ring-gray-400'
    : '';

  return (
    <>
      <input
        title='Tryck för att visa den här dagens lunch i listan nedan'
        className={`cursor-pointer rounded-lg border border-gray-200 bg-white py-2.5 px-5 text-sm font-medium text-gray-800 transition-all duration-500 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white ${selectedClasses}`}
        type='button'
        value={props.title}
        onClick={onClick}
      />
    </>
  );
};

export default DayButton;
