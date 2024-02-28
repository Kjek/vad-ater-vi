import InputButton from '@component/atoms/Button/Button';
import TextBox from '@component/atoms/TextBox/TextBox';
import CreateAdminAccountModal from '@component/molecules/CreateAdminAccountModal/CreateAdminAccountModal';
import { signIn } from 'next-auth/react';
import { useRef } from 'react';
import { useToggle } from 'usehooks-ts';

const LoginSection = () => {
  const [isGenAdminAccOpen, toggleGenAdminAccOpen] = useToggle();
  const userName = useRef('');
  const pass = useRef('');
  const onSubmit = async () => {
    await signIn('credentials', {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: '/admin',
    });
  };
  const keyDownEvent = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'Enter') {
      void onSubmit();
    }
  };
  return (
    <div
      className={
        'flex h-screen flex-col items-center justify-center gap-1 bg-neutral-100 dark:bg-gray-900'
      }
    >
      <div
        className='dark:bg-gray-custom flex flex-col gap-2 rounded-md bg-white px-7 py-4 shadow'
        onKeyDown={keyDownEvent}
      >
        <TextBox
          title='Username'
          placeholder='Username'
          onChange={(e) => (userName.current = e.target.value)}
        />
        <TextBox
          title='Password'
          placeholder='Password'
          variant='password'
          onChange={(e) => (pass.current = e.target.value)}
        />
        <InputButton value='Login' onClick={() => void onSubmit()} />
      </div>
      <div className='dark:bg-gray-custom absolute bottom-0 right-0 mb-4 mr-4 bg-white'>
        <InputButton
          value='Generate admin account'
          onClick={toggleGenAdminAccOpen}
        />
      </div>
      {isGenAdminAccOpen ? (
        <CreateAdminAccountModal toggleModal={toggleGenAdminAccOpen} />
      ) : null}
    </div>
  );
};

export default LoginSection;
