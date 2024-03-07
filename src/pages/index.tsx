import Header from '@component/molecules/Header/Header';
import LunchList from '@component/molecules/LunchList/LunchList';
import LunchListSkeleton from '@component/molecules/LunchList/LunchListSkeleton';
import FilterSection from '@component/organisms/FilterSection/FilterSection';
import { api } from '@util/api';
import { type NextPage } from 'next';
import { useState } from 'react';
import MetaHeader from '../components/MetaHeader';

const Home: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const restaurants = searchQuery
    ? api.lunch.menuSearch.useQuery({ searchText: searchQuery }).data
    : api.lunch.menu.useQuery(undefined).data;

  return (
    <>
      <div className='min-h-screen overflow-hidden bg-neutral-100 transition duration-500 dark:bg-gray-900'>
        <MetaHeader />
        <Header />
        <main>
          <FilterSection
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          {restaurants ? (
            <LunchList restaurants={restaurants} />
          ) : (
            <LunchListSkeleton />
          )}
        </main>
      </div>
    </>
  );
};

export default Home;
