import { type NextPage } from 'next';
import { api } from '~/utils/api';
import LunchList from './components/LunchList';

const Home: NextPage = () => {
  const restaurants = api.lunch.menu.useQuery().data;

  return (
    <>
      <main className='flex min-h-screen justify-center bg-neutral-800'>
        <div className='container flex justify-center px-4 py-16'>
          <LunchList restaurants={restaurants} />
        </div>
      </main>
    </>
  );
};

export default Home;
