import { api } from '@util/api';
import { type NextPage } from 'next';
import { useState } from 'react';
import { useIsFirstRender, useWindowSize } from 'usehooks-ts';
import FilterSection from '../components/FilterSection';
import Header from '../components/Header';
import LoadingIndicator from '../components/LoadingIndicator';
import LunchList from '../components/LunchList';
import MetaHeader from '../components/MetaHeader';
import FilterSectionMobile from '../components/mobile/FilterSectionMobile';

const Home: NextPage = () => {
  const isMobile = useWindowSize().width < 640;
  const isFirstRender = useIsFirstRender();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const restaurants = searchQuery
    ? api.lunch.menuSearch.useQuery({ searchText: searchQuery }).data
    : api.lunch.menu.useQuery(undefined).data;

  return (
    <>
      {!isFirstRender ? (
        <div className='min-h-screen overflow-hidden bg-neutral-100 transition duration-500 dark:bg-gray-900'>
          <MetaHeader />
          <Header />
          <main>
            {isMobile ? (
              <FilterSectionMobile setSearchQuery={setSearchQuery} />
            ) : (
              <FilterSection setSearchQuery={setSearchQuery} />
            )}
            {restaurants ? (
              <LunchList restaurants={restaurants} />
            ) : (
              <LoadingIndicator />
            )}
          </main>
        </div>
      ) : null}
    </>
  );
};

export default Home;
