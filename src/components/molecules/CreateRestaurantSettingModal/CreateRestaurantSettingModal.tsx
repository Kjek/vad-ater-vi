import InputButton from '@component/atoms/Button/Button';
import TextBox from '@component/atoms/TextBox/TextBox';
import { api } from '@util/api';
import { toastError, toastSuccessful } from '@util/toast-utils';
import { useEffect, useRef } from 'react';
import type { Id } from 'react-toastify';
import { toast } from 'react-toastify';
import { useToggle } from 'usehooks-ts';

const CreateRestaurantSettingModal = () => {
  const [open, toggleOpen] = useToggle();
  const [enabled, toggleEnabled] = useToggle();
  const name = useRef<string>();
  const homeUrl = useRef<string>();
  const lunchUrl = useRef<string>();
  const lunchRegex = useRef<string>();
  const weeklyRegex = useRef<string>();
  const toastId = useRef<Id>(0);

  const { mutate: createRestaurantSetting, isSuccess } =
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

  useEffect(() => {
    if (isSuccess) {
      toggleOpen();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

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
                  onChange={(event) =>
                    (lunchRegex.current = event.target.value)
                  }
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
                        lunchRegex: lunchRegex.current,
                        weeklyRegex: weeklyRegex.current,
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
          <InputButton value={'Add restaurant'} onClick={toggleOpen} />
        </div>
      )}
    </>
  );
};

export default CreateRestaurantSettingModal;
