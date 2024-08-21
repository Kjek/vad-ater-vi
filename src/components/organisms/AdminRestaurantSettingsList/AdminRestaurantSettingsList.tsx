import InputButton from '@component/atoms/Button/Button';
import IconButton from '@component/atoms/IconButton/IconButton';
import Text from '@component/atoms/Text/Text';
import DebugContentModal from '@component/molecules/DebugContentModal/DebugContentModal';
import SettingsModal from '@component/organisms/SettingsModal/SettingsModal';
import { type RestaurantSetting } from '@prisma/client';
import type {
  DeleteRestaurantFunction,
  IdParamVoidFunction,
  UpdateSettingsFunction,
} from '@type/api-types';
import { type Dispatch, type SetStateAction, useState } from 'react';
import { useToggle } from 'usehooks-ts';

interface AdminRestaurantSettingsListProps {
  restaurantSettings: RestaurantSetting[] | undefined;
  debugData: string | undefined;
  setDebugRestaurantId: Dispatch<SetStateAction<string>>;
  reScrape: IdParamVoidFunction;
  deleteRestaurant: DeleteRestaurantFunction;
  updateSettings: UpdateSettingsFunction;
}

const AdminRestaurantSettingsList = ({
  restaurantSettings,
  debugData,
  setDebugRestaurantId,
  reScrape,
  deleteRestaurant,
  updateSettings,
}: AdminRestaurantSettingsListProps) => {
  const [isOpen, toggleOpen] = useToggle();
  const [currentRestaurant, setCurrentRestaurant] =
    useState<RestaurantSetting>();
  const toggleModal = (restaurantSetting: RestaurantSetting) => {
    setCurrentRestaurant(restaurantSetting);
    toggleOpen();
  };

  return (
    <>
      {currentRestaurant && isOpen ? (
        <SettingsModal
          toggleOpen={toggleOpen}
          restaurant={currentRestaurant}
          deleteRestaurant={deleteRestaurant}
          updateSettings={updateSettings}
        />
      ) : null}
      {restaurantSettings?.map((restaurantSetting) => (
        <div
          key={restaurantSetting.name}
          className='flex w-full gap-2 md:gap-4'
        >
          <Text
            className='flex-1 cursor-pointer self-center'
            onClick={() => toggleModal(restaurantSetting)}
          >
            {restaurantSetting.name}
          </Text>
          <DebugContentModal
            restaurantId={restaurantSetting.restaurantId}
            debugData={debugData}
            setDebugId={setDebugRestaurantId}
          />
          <InputButton
            value='Re-scrape'
            className='max-md:hidden'
            onClick={() => {
              reScrape({ restaurantId: restaurantSetting.restaurantId });
            }}
          />
          <IconButton
            variant='hobby knife'
            className='rounded-md border border-gray-300 p-3 dark:border-gray-600 md:hidden'
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
