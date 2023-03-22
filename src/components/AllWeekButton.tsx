import { useGlobalState } from '@hook/useGlobalState';
import { useCallback } from 'react';

const AllWeekButton = () => {
  const { dispatch } = useGlobalState();
  const onClick = useCallback(() => {
    dispatch({
      type: 'all',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <input
        title='Tryck för att rensa valen och visa dagens lunch'
        className='cursor-pointer rounded-lg border border-gray-200 py-2.5 px-5 text-sm font-thin text-gray-800 transition-all duration-500 hover:bg-gray-200 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
        type='button'
        value='Hela veckan'
        onClick={onClick}
      />
    </>
  );
};

export default AllWeekButton;
