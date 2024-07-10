import AdminOption from '@component/molecules/AdminOption/AdminOption';
import CreateRestaurantSettingModal from '@component/molecules/CreateRestaurantSettingModal/CreateRestaurantSettingModal';
import AdminRestaurantSettingsList from '@component/organisms/AdminRestaurantSettingsList/AdminRestaurantSettingsList';
import LoginSection from '@component/organisms/LoginSection/LoginSection';
import { api } from '@util/api';
import { toastError, toastSuccessful } from '@util/toast-utils';
import { signOut, useSession } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';
import type { Id } from 'react-toastify';
import { toast } from 'react-toastify';

const AdminMain = () => {
  const { data: session } = useSession();
  const toastId = useRef<Id>(0);
  const [currentDebugRestaurantId, setDebugRestaurantId] = useState<string>('');

  const { data: restaurantSettings, refetch: fetchRestaurants } =
    api.admin.getRestaurantSettings.useQuery(undefined);

  const { mutate: reScrape } = api.admin.reScrape.useMutation({
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

  const { mutate: deleteRestaurant } = api.admin.deleteRestaurant.useMutation({
    onSuccess() {
      toastSuccessful(toastId.current);
      void fetchRestaurants();
    },
    onError(error) {
      toastError(toastId.current, error);
    },
    onMutate() {
      toastId.current = toast.loading('Updating in progress...');
    },
  });

  const { mutate: updateSettings } =
    api.admin.updateRestaurantSetting.useMutation({
      onSuccess() {
        toastSuccessful(toastId.current);
        void fetchRestaurants();
      },
      onError(error) {
        toastError(toastId.current, error);
      },
      onMutate() {
        toastId.current = toast.loading('Updating in progress...');
      },
    });

  const { data: debugData, refetch: fetchDebug } =
    api.admin.debugContent.useQuery(
      { restaurantId: currentDebugRestaurantId },
      { enabled: false, refetchOnWindowFocus: false }
    );

  const { mutate: createRestaurantSetting } =
    api.admin.createRestaurantSetting.useMutation({
      onSuccess() {
        toastSuccessful(toastId.current);
        void fetchRestaurants();
      },
      onError(error) {
        toastError(toastId.current, error);
      },
      onMutate() {
        toastId.current = toast.loading('Creating restaurant...');
      },
    });

  useEffect(() => {
    if (currentDebugRestaurantId) {
      void fetchDebug();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDebugRestaurantId]);

  return (
    <>
      {session?.user ? (
        <div className='flex items-center justify-center'>
          <div className='dark:bg-gray-custom flex h-full w-full flex-col gap-4 bg-white p-4 md:mx-80 md:my-8 md:p-8'>
            <AdminOption
              text='Re-scrape all restaurants'
              buttonValue='Re-scrape all'
              onClick={() => void reScrapeAll()}
            />
            <AdminRestaurantSettingsList
              restaurantSettings={restaurantSettings}
              debugData={debugData}
              setDebugRestaurantId={setDebugRestaurantId}
              deleteRestaurant={deleteRestaurant}
              updateSettings={updateSettings}
              reScrape={reScrape}
            />
            <CreateRestaurantSettingModal
              createRestaurantSetting={createRestaurantSetting}
            />
            <AdminOption buttonValue='Logout' onClick={() => void signOut()} />
          </div>
        </div>
      ) : (
        <LoginSection />
      )}
    </>
  );
};

export default AdminMain;
