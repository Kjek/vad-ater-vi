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
      <div className='bg-gradient-to-r pt-1 dark:from-[#ef473a] dark:to-[#cb2d3e]'>
        <div
          className='grid cursor-pointer justify-center'
          onClick={() => setOpen(!open)}
        >
          <ExpandMore className={open ? 'rotate-[-180deg]' : ''} />
        </div>
      </div>
      {open && (
        <div className='dark:bg-neutral-775 whitespace-pre-line rounded-md bg-white p-4'>
          {props.lunchMenu.map((item) => (
            <div key={item.day}>
              <h3 className='text-lg font-bold'>{item.day}</h3>
              <p>{item.food}</p>
              <br />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Collapsable;
