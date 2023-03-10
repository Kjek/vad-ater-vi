import { useState } from 'react';
import ExpandMore from '~/assets/icons/Expand-More';
import type { LunchMenu } from '~/types/lunch-menu';

interface CollapsableProps {
  lunchMenu: LunchMenu[];
}

const Collapsable = (props: CollapsableProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={
          'dark:bg-gray-custom cursor-pointer whitespace-pre-line rounded-md bg-white p-4 transition-all duration-500'
        }
        onClick={() => setOpen(!open)}
      >
        <div className='grid justify-center'>
          <ExpandMore className={open ? 'rotate-[-180deg]' : ''} />
        </div>
        {open && (
          <ul id='weekly-lunch-list'>
            {props.lunchMenu.map((item) => (
              <li key={item.day}>
                <h3 className='text-lg font-bold text-gray-800 dark:text-gray-300'>
                  {item.day}
                </h3>
                <p className='text-gray-500 dark:text-gray-300'>{item.food}</p>
                <br />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Collapsable;
