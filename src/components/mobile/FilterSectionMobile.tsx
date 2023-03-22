import type { Dispatch, SetStateAction } from 'react';
import DaySelectorMobile from './DaySelectorMobile';

interface FilterSectionProps {
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

const FilterSectionMobile = (props: FilterSectionProps) => {
  const { setSearchQuery } = props;
  return (
    <div className='fixed bottom-0 w-full justify-center bg-neutral-100 dark:bg-gray-900'>
      <div className='container flex justify-center'>
        <div id='filter-section' className='flex w-full py-4 px-4'>
          <div className='flex w-full flex-col justify-center gap-2 pb-4 sm:flex-row'>
            <DaySelectorMobile setSearchQuery={setSearchQuery} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSectionMobile;
