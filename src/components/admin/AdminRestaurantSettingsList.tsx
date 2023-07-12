import { api } from '@util/api';
import { useRef } from 'react';
import InputButton from './Button';
import Text from './Text';
import TextBox from './TextBox';

const AdminRestaurantSettingsList = () => {
  const regex = useRef<string>();
  const { mutate: reScrape } = api.admin.reScrape.useMutation();
  const { mutate: saveRegex } = api.admin.updateRegex.useMutation();
  const { data: restaurants } = api.admin.getRestaurantSettings.useQuery(
    undefined,
    {
      refetchOnWindowFocus: false,
    }
  );

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
              saveRegex({
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
            onClick={() => {
              reScrape({ name: restaurant.name });
            }}
          />
        </div>
      ))}
    </>
  );
};

export default AdminRestaurantSettingsList;
