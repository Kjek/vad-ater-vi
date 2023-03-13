import type { HTMLAttributes } from 'react';

const ExpandMore = (props: HTMLAttributes<HTMLDivElement>) => {
  props.className;
  const className = `ml-auto -mr-1 shrink-0 transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-gray-300 dark:group-[[data-te-collapse-collapsed]]:fill-white ${
    props.className ? props.className : ''
  }`;
  return (
    <span className={className}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='40'
        viewBox='0 96 960 960'
        width='40'
      >
        <path d='M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z' />
      </svg>
    </span>
  );
};

export default ExpandMore;
