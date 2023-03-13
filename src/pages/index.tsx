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
            {restaurants ? (
              <LunchList restaurants={restaurants} />
            ) : (
              <div className='flex h-fit justify-center'>
                <svg
                  className='m-auto h-5 w-5 animate-spin text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
                <p className='ml-2 text-lg text-black dark:text-white'>
                  Loading menu...
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
