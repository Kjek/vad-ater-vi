import { type NextPage } from 'next';
import { api } from '~/utils/api';
import LunchList from './components/LunchList';

const Home: NextPage = () => {
  const restaurants = api.lunch.menu.useQuery().data;

  return (
    <>
      <main className='flex min-h-screen flex-col items-center justify-center bg-neutral-800'>
        <div className='container flex flex-col items-center justify-center gap-12 px-4 py-16 '>
          <LunchList restaurants={restaurants} />
        </div>
      </main>
    </>
  );
};

export default Home;
