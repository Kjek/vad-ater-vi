import { type NextPage } from 'next';
import { api } from '~/utils/api';
import Header from './components/Header';
import LunchList from './components/LunchList';
import MetaHeader from './components/MetaHeader';

const Home: NextPage = () => {
  const restaurants = api.lunch.menu.useQuery().data;

  return (
    <>
      <div className='bg-white dark:bg-gray-900'>
        <MetaHeader />
        <Header />
        <main className='flex min-h-screen justify-center'>
          <div className='container flex justify-center px-4 py-16'>
            <LunchList restaurants={restaurants} />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
