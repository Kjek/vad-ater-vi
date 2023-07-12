import AdminOption from '@component/admin/AdminOption';
import AdminRestaurantSettingsList from '@component/admin/AdminRestaurantSettingsList';
import CreateRestaurantSettingModal from '@component/admin/CreateRestaurantSettingModal';
import LoginSection from '@component/admin/LoginSection';
import { api } from '@util/api';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';

const LoginPage: NextPage = () => {
  const { data: session } = useSession();
  const { mutate: reScrapeAll } = api.admin.reScrapeAll.useMutation();

  return (
    <>
      {session?.user ? (
        <div className='flex items-center justify-center'>
          <div className='dark:bg-gray-custom mx-80 my-8 flex h-full w-full flex-col gap-4 bg-white p-8'>
            <AdminOption
              text='Re-scrape all restaurants'
              buttonValue='Re-scrape all'
              onClick={() => void reScrapeAll()}
            />
            <AdminRestaurantSettingsList />
            <CreateRestaurantSettingModal />
          </div>
        </div>
      ) : (
        <LoginSection />
      )}
    </>
  );
};

export default LoginPage;
