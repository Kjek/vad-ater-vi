import LoadingIndicator from '@component/atoms/LoadingIndicator/LoadingIndicator';
import Header from '@component/molecules/Header/Header';
import LunchList from '@component/molecules/LunchList/LunchList';
import FilterSection from '@component/organisms/FilterSection/FilterSection';
import FilterSectionMobile from '@component/organisms/FilterSectionMobile/FilterSectionMobile';
import { api } from '@util/api';
import { type NextPage } from 'next';
import { useState } from 'react';
import { useIsFirstRender, useWindowSize } from 'usehooks-ts';
import MetaHeader from '../components/MetaHeader';

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
