import InputButton from '@component/atoms/Button/Button';
import IconButton from '@component/atoms/IconButton/IconButton';
import Spinner from '@component/atoms/Spinner/Spinner';
import Modal from '@component/molecules/Modal/Modal';
import SettingsModal from '@component/organisms/SettingsModal/SettingsModal';
import { api } from '@util/api';
import { toastError, toastSuccessful } from '@util/toast-utils';
import { useEffect, useRef, useState } from 'react';
import type { Id } from 'react-toastify';
import { toast } from 'react-toastify';

const AdminRestaurantSettingsList = () => {
  const toastId = useRef<Id>(0);
  const [currentDebugName, setDebugName] = useState<string>('');

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
      { name: currentDebugName },
      { enabled: false, refetchOnWindowFocus: false }
    );

  useEffect(() => {
    if (currentDebugName) {
      void fetchDebug();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDebugName]);

  useEffect(() => {
    console.log('deeebuuuug');
    console.log(debugData);
  }, [debugData]);

  return (
    <>
      {restaurantSettings?.map((restaurantSetting) => (
        <div key={restaurantSetting.name} className='flex w-full gap-4'>
          <SettingsModal restaurant={restaurantSetting}></SettingsModal>
          <Modal
            title='Debug content'
            onClick={() => setDebugName(restaurantSetting.name)}
          >
            <IconButton
              variant={'copy'}
              className='self-end'
              onClick={() =>
                debugData &&
                void navigator.clipboard.writeText(
                  JSON.parse(debugData) as string
                )
              }
            />
            {debugData ? (
              <textarea
                id={`${restaurantSetting.name}.textarea`}
                rows={100}
                className='min-h-full rounded-md'
                value={JSON.parse(debugData) as string}
                disabled
              ></textarea>
            ) : (
              <Spinner />
            )}
          </Modal>
          <InputButton
            value='Re-scrape'
            onClick={() => {
              reScrape({ restaurantId: restaurantSetting.restaurantId });
            }}
          />
          <InputButton
            value={restaurantSetting.enabled ? 'Disable' : 'Enable'}
            className={
              restaurantSetting.enabled
                ? 'dark:text-red-800 dark:hover:text-red-600'
                : 'dark:text-green-800 dark:hover:text-green-600'
            }
            onClick={() => {
              void updateSettings({
                id: restaurantSetting.id,
                enabled: !restaurantSetting.enabled,
              });
            }}
          />
        </div>
      ))}
    </>
  );
};

export default AdminRestaurantSettingsList;
