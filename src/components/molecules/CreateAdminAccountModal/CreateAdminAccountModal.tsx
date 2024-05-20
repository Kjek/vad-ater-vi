import InputButton from '@component/atoms/Button/Button';
import CustomForm from '@component/atoms/CustomForm/CustomForm';
import TextBox from '@component/atoms/TextBox/TextBox';
import { api } from '@util/api';
import { toastError, toastSuccessful } from '@util/toast-utils';
import { useRef } from 'react';
import type { Id } from 'react-toastify';
import { toast } from 'react-toastify';

export interface CreateAdminAccountModalProps {
  toggleModal: () => void;
}

const CreateAdminAccountModal = ({
  toggleModal,
}: CreateAdminAccountModalProps) => {
  const toastId = useRef<Id>(0);
  const username = useRef<string>();
  const password = useRef<string>();
  const secret = useRef<string>();
  const { mutate: createAdminAccount } =
    api.admin.createAdminAccount.useMutation({
      onSuccess() {
        toastSuccessful(toastId.current);
        setTimeout(toggleModal, 2000);
      },
      onError(error) {
        toastError(toastId.current, error);
      },
      onMutate() {
        toastId.current = toast.loading('Updating in progress...');
      },
    });

  const generateAdminAccount = () => {
    if (username.current && password.current && secret.current) {
      createAdminAccount({
        username: username.current,
        password: password.current,
        secret: secret.current,
      });
    }
  };

  return (
    <div className='absolute right-0 top-0 h-full w-full backdrop-blur-sm'>
      <div className='flex h-full w-full items-center justify-center'>
        <CustomForm
          className='dark:bg-gray-custom flex max-w-6xl flex-col flex-wrap gap-4 bg-white p-6'
          onSubmit={generateAdminAccount}
        >
          <TextBox
            placeholder='Username'
            onChange={(event) => (username.current = event.target.value)}
            required
          />
          <TextBox
            placeholder='Password'
            variant='password'
            onChange={(event) => (password.current = event.target.value)}
            required
          />
          <TextBox
            placeholder='Secret'
            variant='password'
            onChange={(event) => (secret.current = event.target.value)}
            required
          />
          <InputButton type='submit' value='Generate' aria-label='Generate' />
        </CustomForm>
      </div>
    </div>
  );
};

export default CreateAdminAccountModal;
