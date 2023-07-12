import { api } from '@util/api';
import { useRef } from 'react';
import { useToggle } from 'usehooks-ts';
import InputButton from './Button';
import TextBox from './TextBox';

const CreateRestaurantSettingModal = () => {
  const [open, toggleOpen] = useToggle();
  const [enabled, toggleEnabled] = useToggle();
  const name = useRef<string>();
  const homeUrl = useRef<string>();
  const lunchUrl = useRef<string>();
  const regex = useRef<string>();

  const { mutate: createRestaurantSetting } =
    api.admin.createRestaurantSetting.useMutation();

  return (
    <>
      {open ? (
        <div className='absolute right-0 top-0 h-full w-full backdrop-blur-sm'>
          <div className='flex h-full w-full items-center justify-center'>
            <div className='dark:bg-gray-custom flex max-w-6xl flex-col flex-wrap gap-4 bg-white p-6'>
              <div className='flex flex-wrap gap-4'>
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
                  placeholder='Regex (Optional)'
                  onChange={(event) => (regex.current = event.target.value)}
                />
                <InputButton
                  value={enabled ? 'Enabled' : 'Disabled'}
                  onClick={toggleEnabled}
                />
              </div>
              <div className='flex gap-4 self-end'>
                <InputButton
                  value={'Create'}
                  onClick={() => {
                    if (name.current && homeUrl.current && lunchUrl.current) {
                      void createRestaurantSetting({
                        name: name.current,
                        homeUrl: homeUrl.current,
                        lunchUrl: lunchUrl.current,
                        regex: regex.current,
                        enabled: enabled.valueOf(),
                      });
                    }
                  }}
                />
                <InputButton
                  value={'Cancel'}
                  className='dark:text-red-800 dark:hover:text-red-600'
                  onClick={toggleOpen}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='self-end'>
          <InputButton value={'Create new restaurant'} onClick={toggleOpen} />
        </div>
      )}
    </>
  );
};

export default CreateRestaurantSettingModal;
