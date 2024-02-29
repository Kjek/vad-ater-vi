import InputButton from '@component/atoms/Button/Button';
import DebugContentModal from '@component/molecules/DebugContentModal/DebugContentModal';
import SettingsModal from '@component/organisms/SettingsModal/SettingsModal';
import type {
  DeleteRestaurantFunction,
  IdParamVoidFunction,
  UpdateSettingsFunction,
} from '@type/api-types';
import type { Dispatch, SetStateAction } from 'react';

interface AdminRestaurantSettingsListProps {
  restaurantSettings:
    | {
        id: string;
        name: string;
        restaurantId: string;
        enabled: boolean;
        homeUrl: string;
        lunchUrl: string;
        lunchRegex: string | null;
        weeklyRegex: string | null;
      }[]
    | undefined;
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
  return (
    <>
      {restaurantSettings?.map((restaurantSetting) => (
        <div key={restaurantSetting.name} className='flex w-full gap-4'>
          <SettingsModal
            restaurant={restaurantSetting}
            deleteRestaurant={deleteRestaurant}
            updateSettings={updateSettings}
          />
          <DebugContentModal
            restaurantName={restaurantSetting.restaurantId}
            debugData={debugData}
            setDebugName={setDebugRestaurantId}
          />
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
