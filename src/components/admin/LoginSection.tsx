import { signIn } from 'next-auth/react';
import { useRef } from 'react';
import InputButton from './Button';
import TextBox from './TextBox';

const LoginSection = () => {
  const userName = useRef('');
  const pass = useRef('');
  const onSubmit = async () => {
    const result = await signIn('credentials', {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: '/admin',
    });
    console.log(result);
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
    </div>
  );
};

export default LoginSection;
