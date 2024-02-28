import InputButton from '@component/atoms/Button/Button';
import Text from '@component/atoms/Text/Text';
import type { HTMLAttributes, MouseEventHandler } from 'react';

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
