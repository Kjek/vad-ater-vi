import InputButton from '@component/atoms/Button/Button';
import Text from '@component/atoms/Text/Text';
import type { MouseEventHandler } from 'react';

interface AdminOptionProps {
  text?: string;
  buttonValue: string;
  onClick: MouseEventHandler<HTMLInputElement>;
}

const AdminOption = ({ text, buttonValue, onClick }: AdminOptionProps) => {
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
