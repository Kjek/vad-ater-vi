import SettingsModal from '@component/organisms/SettingsModal';
import { api } from '@util/api';
import { toastError, toastSuccessful } from '@util/toast-utils';
import { useEffect, useRef } from 'react';
import type { Id } from 'react-toastify';
import { toast } from 'react-toastify';
import InputButton from './Button';

const AdminRestaurantSettingsList = () => {
  const toastId = useRef<Id>(0);
  const { data: restaurants, refetch: fetchRestaurants } =
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

  return (
    <>
      {restaurants?.map((restaurant) => (
        <div key={restaurant.name} className='flex w-full gap-4'>
          <SettingsModal restaurant={restaurant}></SettingsModal>
          <InputButton
            value='Re-scrape'
            onClick={() => {
              reScrape({ name: restaurant.name });
            }}
          />
          <InputButton
            value={restaurant.enabled ? 'Disable' : 'Enable'}
            className={
              restaurant.enabled
                ? 'dark:text-red-800 dark:hover:text-red-600'
                : 'dark:text-green-800 dark:hover:text-green-600'
            }
            onClick={() => {
              void updateSettings({
                id: restaurant.id,
                enabled: !restaurant.enabled,
              });
            }}
          />
        </div>
      ))}
    </>
  );
};

export default AdminRestaurantSettingsList;
