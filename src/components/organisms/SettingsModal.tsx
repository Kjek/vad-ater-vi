import InputButton from '@component/admin/Button';
import IconButton from '@component/atoms/IconButton';
import Text from '@component/atoms/Text';
import { api } from '@util/api';
import { toastError, toastSuccessful } from '@util/toast-utils';
import { useRef } from 'react';
import type { Id } from 'react-toastify';
import { toast } from 'react-toastify';
import { useToggle } from 'usehooks-ts';
import SettingsItem from '../molecules/SettingsItem';

interface SettingsModalProps {
  restaurant: {
    id: string;
    name: string;
    homeUrl: string;
    lunchUrl: string;
    regex: string | null;
  };
}

const SettingsModal = (props: SettingsModalProps) => {
  const { restaurant } = props;
  const [open, toggleOpen] = useToggle();
  const toastId = useRef<Id>(0);
  const restaurantName = useRef<string>(restaurant.name);
  const homeUrl = useRef<string>(restaurant.homeUrl);
  const lunchUrl = useRef<string>(restaurant.lunchUrl);
  const regex = useRef<string>(restaurant.regex || '');
  const { mutate: updateSettings } =
    api.admin.updateRestaurantSetting.useMutation({
      onSuccess() {
        toastSuccessful(toastId.current);
      },
      onError(error) {
        toastError(toastId.current, error);
      },
      onMutate() {
        toastId.current = toast.loading('Updating in progress...');
      },
    });

  const handleUpdate = () => {
    updateSettings({
      id: restaurant.id,
      name: restaurantName.current,
      homeUrl: homeUrl.current,
      lunchUrl: lunchUrl.current,
      regex: regex.current,
    });
  };

  return (
    <>
      <Text className='flex-1 cursor-pointer' onClick={toggleOpen}>
        {restaurant.name}
      </Text>
      {open ? (
        <>
          <div className='absolute left-0 top-0 h-screen w-screen bg-black opacity-30' />
          <div className='dark:bg-gray-custom fixed left-[50%] top-[50%] flex max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] flex-col gap-4 rounded-[6px] bg-white p-6'>
            <Text variant='h3'>Edit restaurant</Text>
            <Text variant='h5'>
              {
                "Make changes to the restaurant here. Click save when you're done."
              }
            </Text>
            <div>
              <SettingsItem
                title='Name'
                inputDefaultValue={restaurantName.current}
                inputPlaceholder='Name'
                onChange={(event) =>
                  (restaurantName.current = event.target.value)
                }
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
                title='Regex'
                inputDefaultValue={regex.current}
                inputPlaceholder='/^([a-z])$/gm'
                onChange={(event) => (regex.current = event.target.value)}
              />
              <div className='mt-6 flex justify-end'>
                <InputButton
                  value='Save changes'
                  aria-label='Save'
                  onClick={handleUpdate}
                />
              </div>
            </div>
            <IconButton
              variant='cancel'
              className='absolute right-2 top-2 p-2'
              onClick={toggleOpen}
            />
          </div>
        </>
      ) : null}
    </>
  );
};

export default SettingsModal;
