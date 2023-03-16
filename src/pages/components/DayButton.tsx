import { useCallback } from 'react';
import { useGlobalState } from '~/hooks/useGlobalState';

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
        type: state.isMultiSelect ? 'multi-select' : 'single-select',
        payload: {
          isSelected: !isSelected,
          day: title,
        },
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state]
  );

  const selectedClasses = isSelected
    ? 'z-10 outline-none ring-4 ring-gray-200 duration-75 dark:ring-gray-700'
    : '';

  return (
    <>
      <input
        className={`mr-2 mb-2 cursor-pointer rounded-lg border border-gray-200 bg-white py-2.5 px-5 text-sm font-medium text-gray-900 transition-all duration-500 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${selectedClasses}`}
        type='button'
        value={props.title}
        onClick={onClick}
      />
    </>
  );
};

export default DayButton;
