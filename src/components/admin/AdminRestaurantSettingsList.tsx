import { api } from '@util/api';
import { useEffect, useRef } from 'react';
import InputButton from './Button';
import Text from './Text';
import TextBox from './TextBox';

const AdminRestaurantSettingsList = () => {
  const regex = useRef<string>();
  const { mutate: reScrape } = api.admin.reScrape.useMutation();
  const { mutate: updateSettings, isSuccess } =
    api.admin.updateRestaurantSetting.useMutation();
  const { data: restaurants, refetch: fetchRestaurants } =
    api.admin.getRestaurantSettings.useQuery(undefined);

  useEffect(() => {
    void fetchRestaurants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <>
      {restaurants?.map((restaurant) => (
        <div key={restaurant.name} className='flex w-full gap-4'>
          <Text className='flex-1 self-center'>{restaurant.name}</Text>
          <TextBox
            placeholder='Insert regex'
            defaultValue={restaurant.regex || undefined}
            onChange={(event) => {
              regex.current = event.target.value;
            }}
          />
          <InputButton
            value={'Save'}
            onClick={() =>
              updateSettings({
                name: restaurant.name,
                regex: regex.current,
              })
            }
          />
          <InputButton
            value={'Re-scrape'}
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
                name: restaurant.name,
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
