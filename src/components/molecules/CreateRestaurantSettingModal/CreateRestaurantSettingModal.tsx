import InputButton from '@component/atoms/Button/Button';
import Text from '@component/atoms/Text/Text';
import TextBox from '@component/atoms/TextBox/TextBox';
import Modal from '@component/molecules/Modal/Modal';
import { type CreateRestaurantSettingsFunction } from '@type/api-types';
import { cn } from '@util/cn';
import { useRef } from 'react';
import { useToggle } from 'usehooks-ts';

interface CreateRestaurantSettingModalProps {
  createRestaurantSetting: CreateRestaurantSettingsFunction;
}

const CreateRestaurantSettingModal = ({
  createRestaurantSetting,
}: CreateRestaurantSettingModalProps) => {
  const [isOpen, toggleOpen] = useToggle();
  const [enabled, toggleEnabled] = useToggle();
  const name = useRef<string>();
  const homeUrl = useRef<string>();
  const lunchUrl = useRef<string>();
  const lunchRegex = useRef<string>();
  const weeklyRegex = useRef<string>();

  const onClickCreate = () => {
    if (name.current && homeUrl.current && lunchUrl.current) {
      void createRestaurantSetting({
        name: name.current,
        homeUrl: homeUrl.current,
        lunchUrl: lunchUrl.current,
        lunchRegex: lunchRegex.current,
        weeklyRegex: weeklyRegex.current,
        enabled: enabled.valueOf(),
      });
      toggleOpen();
    }
  };

  return (
    <>
      <InputButton
        value={'Add restaurant'}
        className='flex-1 cursor-pointer self-end'
        onClick={toggleOpen}
      />
      {isOpen ? (
        <Modal toggleOpen={toggleOpen}>
          <Text variant='h3'>{'Add restaurant'}</Text>
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
            className={cn(
              enabled
                ? 'text-green-400 hover:text-green-600 dark:text-green-800 dark:hover:text-green-600'
                : 'text-red-400 hover:text-red-600 dark:text-red-800 dark:hover:text-red-600',
              'w-fit self-end'
            )}
            onClick={toggleEnabled}
          />
          <div className='flex gap-4 self-end'>
            <InputButton value={'Create'} onClick={onClickCreate} />
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default CreateRestaurantSettingModal;
