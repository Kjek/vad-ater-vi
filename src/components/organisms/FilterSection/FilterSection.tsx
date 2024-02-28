import SearchBar from '@component/atoms/SearchBar/SearchBar';
import DaySelector from '@component/molecules/DaySelector/DaySelector';
import type { Dispatch, SetStateAction } from 'react';

interface FilterSectionProps {
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

const FilterSection = (props: FilterSectionProps) => {
  const { setSearchQuery } = props;
  return (
    <div className='flex justify-center'>
      <div className='container flex justify-center px-4'>
        <div id='filter-section' className='flex w-full gap-4 py-12'>
          <div className='flex w-full flex-col justify-center gap-2 pb-4 sm:flex-row'>
            <h2 className='text-center text-3xl font-bold text-gray-800 dark:text-gray-300'>{`v.${new Date().getWeek()}`}</h2>
            <DaySelector />
            <SearchBar setSearchQuery={setSearchQuery} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
