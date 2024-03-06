import SearchBar from '@component/atoms/SearchBar/SearchBar';
import DaySelector from '@component/molecules/DaySelector/DaySelector';
import DaySelectorMobile from '@component/molecules/DaySelectorMobile/DaySelectorMobile';
import type { Dispatch, SetStateAction } from 'react';

interface FilterSectionProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  isMobile: boolean;
}

const FilterSection = ({
  searchQuery,
  setSearchQuery,
  isMobile,
}: FilterSectionProps) => {
  return (
    <div className='fixed bottom-0 w-full self-center bg-neutral-100 pb-8 pt-4 transition duration-500 dark:bg-gray-900 md:static md:bottom-auto md:flex md:justify-center md:py-0'>
      <div className='container flex justify-center md:px-4'>
        <div id='filter-section' className='flex w-full gap-4 md:py-12'>
          <div className='flex w-full flex-col justify-center gap-2 md:flex-row md:pb-4'>
            {isMobile ? (
              <DaySelectorMobile
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            ) : (
              <>
                <h2 className='text-center text-3xl font-bold text-gray-800 dark:text-gray-300'>{`v.${new Date().getWeek()}`}</h2>
                <DaySelector />
                <SearchBar
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
