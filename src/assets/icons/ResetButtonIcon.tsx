import { useCallback } from 'react';
import { useGlobalState } from '~/hooks/useGlobalState';
import { useTheme } from '~/hooks/useTheme';

const ResetButtonIcon = () => {
  const { dispatch } = useGlobalState();
  const { theme } = useTheme();
  const onClick = useCallback(() => {
    console.log('sdfsadf');
    dispatch({
      type: 'reset',
      payload: {},
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span
      className='flex cursor-pointer rounded-md border border-gray-200 py-2.5 px-3.5 transition duration-500 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-700'
      onClick={onClick}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill={theme === 'dark' ? 'white' : 'currentColor'}
        className='h-4 w-4'
      >
        <path
          fillRule='evenodd'
          d='M6.72 5.66l11.62 11.62A8.25 8.25 0 006.72 5.66zm10.56 12.68L5.66 6.72a8.25 8.25 0 0011.62 11.62zM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788z'
          clipRule='evenodd'
        />
      </svg>
    </span>
  );
};

export default ResetButtonIcon;
