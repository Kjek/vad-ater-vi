import type { Dispatch, SetStateAction } from 'react';
import DaySelector from './DaySelector';
import SearchBar from './SearchBar';

interface FilterSectionProps {
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

const FilterSection = (props: FilterSectionProps) => {
  const { setSearchQuery } = props;
  return (
    <div id='filter-section' className='py-12'>
      <div className='flex flex-col justify-center gap-2 pb-4 sm:flex-row'>
        <h2 className='text-center text-3xl font-bold text-gray-800 dark:text-gray-300'>{`v.${new Date().getWeek()}`}</h2>
        <DaySelector />
      </div>
      <div className='flex justify-center'>
        <SearchBar setSearchQuery={setSearchQuery} />
      </div>
    </div>
  );
};

export default FilterSection;
