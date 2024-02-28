import AdminOption from '@component/molecules/AdminOption/AdminOption';
import CreateRestaurantSettingModal from '@component/molecules/CreateRestaurantSettingModal/CreateRestaurantSettingModal';
import AdminRestaurantSettingsList from '@component/organisms/AdminRestaurantSettingsList/AdminRestaurantSettingsList';
import LoginSection from '@component/organisms/LoginSection/LoginSection';
import { api } from '@util/api';
import { toastError, toastSuccessful } from '@util/toast-utils';
import type { NextPage } from 'next';
import { signOut, useSession } from 'next-auth/react';
import { useRef } from 'react';
import type { Id } from 'react-toastify';
import { toast } from 'react-toastify';

const LoginPage: NextPage = () => {
  const { data: session } = useSession();
  const toastId = useRef<Id>(0);
  const { mutate: reScrapeAll } = api.admin.reScrapeAll.useMutation({
    onSuccess() {
      toastSuccessful(toastId.current);
    },
    onError(error) {
      toastError(toastId.current, error);
    },
    onMutate() {
      toastId.current = toast.loading('Scraping in progress...');
    },
  });

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
            <AdminOption buttonValue='Logout' onClick={() => void signOut()} />
          </div>
        </div>
      ) : (
        <LoginSection />
      )}
    </>
  );
};

export default LoginPage;
