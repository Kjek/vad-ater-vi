import { type NextPage } from 'next';
import { useEffect, useState } from 'react';
import useIsFirstRender from '~/hooks/useIsFirstRender';
import { api } from '~/utils/api';
import FilterSection from './components/FilterSection';
import Header from './components/Header';
import LoadingIndicator from './components/LoadingIndicator';
import LunchList from './components/LunchList';
import MetaHeader from './components/MetaHeader';

const Home: NextPage = () => {
  const isFirstRender = useIsFirstRender();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const restaurants = searchQuery
    ? api.lunch.menuSearch.useQuery({
        searchText: searchQuery,
      }).data
    : api.lunch.menu.useQuery().data;

  return (
    <>
      {!isFirstRender ? (
        <div
          className={`bg-white dark:bg-gray-900 ${
            isFirstRender ? '' : 'transition duration-500'
          }`}
        >
          <MetaHeader />
          <Header />
          <main>
            <FilterSection setSearchQuery={setSearchQuery} />
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
