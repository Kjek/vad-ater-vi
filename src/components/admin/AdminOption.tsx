import type { HTMLAttributes, MouseEventHandler } from 'react';
import InputButton from './Button';
import Text from '../atoms/Text';

interface AdminOptionProps extends HTMLAttributes<HTMLElement> {
  text?: string;
  buttonValue: string;
  onClick: MouseEventHandler<HTMLInputElement>;
}

const AdminOption = (props: AdminOptionProps) => {
  const { text, buttonValue, onClick } = props;
  return (
    <>
      <div className='flex w-full'>
        <Text className='flex-1 self-center' variant='h4'>
          {text}
        </Text>
        <InputButton value={buttonValue} onClick={onClick} />
      </div>
    </>
  );
};

export default AdminOption;
