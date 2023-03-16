import { type NextPage } from 'next';
import { useState } from 'react';
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
    <div
      className={`min-h-screen bg-white dark:bg-gray-900 ${
        isFirstRender ? '' : 'transition duration-500'
      }`}
    >
      {!isFirstRender ? (
        <>
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
        </>
      ) : null}
    </div>
  );
};

export default Home;
