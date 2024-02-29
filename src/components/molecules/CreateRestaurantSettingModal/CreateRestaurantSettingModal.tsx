import InputButton from '@component/atoms/Button/Button';
import Text from '@component/atoms/Text/Text';
import TextBox from '@component/atoms/TextBox/TextBox';
import Modal from '@component/molecules/Modal/Modal';
import { api } from '@util/api';
import { toastError, toastSuccessful } from '@util/toast-utils';
import { useRef } from 'react';
import type { Id } from 'react-toastify';
import { toast } from 'react-toastify';
import { useToggle } from 'usehooks-ts';

const CreateRestaurantSettingModal = () => {
  const [enabled, toggleEnabled] = useToggle();
  const name = useRef<string>();
  const homeUrl = useRef<string>();
  const lunchUrl = useRef<string>();
  const lunchRegex = useRef<string>();
  const weeklyRegex = useRef<string>();
  const toastId = useRef<Id>(0);

  const { mutate: createRestaurantSetting } =
    api.admin.createRestaurantSetting.useMutation({
      onSuccess() {
        toastSuccessful(toastId.current);
      },
      onError(error) {
        toastError(toastId.current, error);
      },
      onMutate() {
        toastId.current = toast.loading('Creating restaurant...');
      },
    });

  return (
    <>
      <Modal title='Add restaurant' className='self-end'>
        <Text variant='h3'>{'Edit resstaurant'}</Text>
        <TextBox
          placeholder='Name'
          onChange={(event) => (name.current = event.target.value)}
        />
        <TextBox
          placeholder='Homepage URL'
          onChange={(event) => (homeUrl.current = event.target.value)}
        />
        <TextBox
          placeholder='Lunch menu URL'
          onChange={(event) => (lunchUrl.current = event.target.value)}
        />
        <TextBox
          placeholder='Lunch Regex (Optional)'
          onChange={(event) => (lunchRegex.current = event.target.value)}
        />
        <TextBox
          placeholder='Weekly Regex (Optional)'
          onChange={(event) => (weeklyRegex.current = event.target.value)}
        />
        <InputButton
          value={enabled ? 'Enabled' : 'Disabled'}
          className={
            enabled
              ? 'dark:text-green-800 dark:hover:text-green-600'
              : 'dark:text-red-800 dark:hover:text-red-600'
          }
          onClick={toggleEnabled}
        />
        <div className='flex gap-4 self-end'>
          <InputButton
            value={'Create'}
            onClick={() => {
              if (name.current && homeUrl.current && lunchUrl.current) {
                void createRestaurantSetting({
                  name: name.current,
                  homeUrl: homeUrl.current,
                  lunchUrl: lunchUrl.current,
                  lunchRegex: lunchRegex.current,
                  weeklyRegex: weeklyRegex.current,
                  enabled: enabled.valueOf(),
                });
              }
            }}
          />
        </div>
      </Modal>
    </>
  );
};

export default CreateRestaurantSettingModal;
