import { useCallback } from 'react';
import { useGlobalState } from '~/hooks/useGlobalState';
import useToggle from '~/hooks/useToggle';
import { sweDays } from '~/types/lunch-menu';

const SwitchButton = () => {
  const { dispatch } = useGlobalState();
  const [isMultiSelect, toggleMultiSelect] = useToggle();
  const today = sweDays[new Date().getDay() - 1];
  const onClick = useCallback(
    () => {
      dispatch({
        type: !isMultiSelect ? 'multi-select' : 'single-select',
        payload: {
          day: !isMultiSelect ? undefined : today,
          isSelected: isMultiSelect,
        },
      });
      toggleMultiSelect();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isMultiSelect]
  );

  return (
    <>
      <div className='inline-flex items-center'>
        <label className='relative inline-flex cursor-pointer items-center transition-all duration-500'>
          <input
            type='checkbox'
            value=''
            className='peer sr-only'
            onClick={onClick}
          />
          <div className="peer h-6  w-11 rounded-full bg-gray-200 transition-all duration-500 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
        </label>
        <span className=' ml-3 text-sm font-medium text-gray-800 transition-all duration-500 dark:text-gray-300'>
          Multi-select
        </span>
      </div>
    </>
  );
};

export default SwitchButton;
