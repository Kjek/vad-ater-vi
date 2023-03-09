import { useState } from 'react';
import ExpandMore from '~/assets/icons/expand-more';
import type { LunchMenu } from '~/types/lunch-menu';

interface CollapsableProps {
  lunchMenu: LunchMenu[];
}

const Collapsable = (props: CollapsableProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='bg-gradient-to-r from-[#ef473a] to-[#cb2d3e] pt-1'>
        <div
          className='grid cursor-pointer justify-center'
          onClick={() => setOpen(!open)}
        >
          <ExpandMore className={open ? 'rotate-[-180deg]' : ''} />
        </div>
      </div>
      {open && (
        <div className='bg-neutral-775 whitespace-pre-line rounded-md p-4'>
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
