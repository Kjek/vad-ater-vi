import InputButton from '@component/atoms/Button/Button';
import Text from '@component/atoms/Text/Text';
import Modal from '@component/molecules/Modal/Modal';
import SettingsItem from '@component/molecules/SettingsItem/SettingsItem';
import type { UpdateSettingsFunction } from '@type/api-types';
import { useRef } from 'react';

interface SettingsModalProps {
  restaurant: {
    id: string;
    name: string;
    homeUrl: string;
    lunchUrl: string;
    lunchRegex: string | null;
    weeklyRegex: string | null;
    restaurantId: string;
  };
  deleteRestaurant: ({}: { id: string }) => void;
  updateSettings: UpdateSettingsFunction;
}

const SettingsModal = ({
  restaurant,
  deleteRestaurant,
  updateSettings,
}: SettingsModalProps) => {
  const restaurantName = useRef<string>(restaurant.name);
  const homeUrl = useRef<string>(restaurant.homeUrl);
  const lunchUrl = useRef<string>(restaurant.lunchUrl);
  const lunchRegex = useRef<string>(restaurant.lunchRegex || '');
  const weeklyRegex = useRef<string>(restaurant.weeklyRegex || '');

  const handleUpdate = () => {
    updateSettings({
      id: restaurant.id,
      name: restaurantName.current,
      homeUrl: homeUrl.current,
      lunchUrl: lunchUrl.current,
      lunchRegex: lunchRegex.current,
      weeklyRegex: weeklyRegex.current,
    });
  };

  const handleDelete = () => {
    deleteRestaurant({ id: restaurant.restaurantId });
  };

  return (
    <>
      <Modal
        title={restaurant.name}
        variant='text'
        className='flex-grow self-center'
      >
        <Text variant='h3'>{'Edit resstaurant'}</Text>
        <Text variant='h5'>
          {"Make changes to the restaurant here. Click save when you're done."}
        </Text>
        <div>
          <SettingsItem
            title='Name'
            inputDefaultValue={restaurantName.current}
            inputPlaceholder='Name'
            onChange={(event) => (restaurantName.current = event.target.value)}
          />
          <SettingsItem
            title='Home URL'
            inputDefaultValue={homeUrl.current}
            inputPlaceholder='https://example.com'
            onChange={(event) => (homeUrl.current = event.target.value)}
          />
          <SettingsItem
            title='Lunch URL'
            inputDefaultValue={lunchUrl.current}
            inputPlaceholder='https://example.com/lunch'
            onChange={(event) => (lunchUrl.current = event.target.value)}
          />
          <SettingsItem
            title='Lunch Regex'
            inputDefaultValue={lunchRegex.current}
            inputPlaceholder='/^([a-z])$/gm'
            onChange={(event) => (lunchRegex.current = event.target.value)}
          />
          <SettingsItem
            title='Weekly Regex'
            inputDefaultValue={weeklyRegex.current}
            inputPlaceholder='/^([a-z])$/gm'
            onChange={(event) => (weeklyRegex.current = event.target.value)}
          />
          <div className='mt-6 flex gap-4'>
            <div className='flex-1'>
              <InputButton
                value='Delete'
                aria-label='Delete'
                onClick={handleDelete}
                className='text-red-500 dark:text-red-700'
              />
            </div>
            <InputButton
              value='Save changes'
              aria-label='Save'
              onClick={handleUpdate}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SettingsModal;
