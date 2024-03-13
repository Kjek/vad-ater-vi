import LunchList from '@component/molecules/LunchList/LunchList';
import LunchListSkeleton from '@component/molecules/LunchList/LunchListSkeleton';
import FilterSection from '@component/organisms/FilterSection/FilterSection';
import { api } from '@util/api';
import { useState } from 'react';

const Main = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const restaurants = searchQuery
    ? api.lunch.menuSearch.useQuery({ searchText: searchQuery }).data
    : api.lunch.menu.useQuery(undefined).data;

  return (
    <main>
      <FilterSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {restaurants && restaurants?.length > 0 ? (
        <LunchList restaurants={restaurants} />
      ) : (
        <LunchListSkeleton />
      )}
    </main>
  );
};

export default Main;
