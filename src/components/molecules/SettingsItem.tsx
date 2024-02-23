import TextBox from '@component/admin/TextBox';
import Text from '@component/atoms/Text';
import type { ChangeEventHandler } from 'react';

interface SettingsItemProps {
  title: string;
  inputDefaultValue: string;
  inputPlaceholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const SettingsItem = ({
  title,
  inputDefaultValue,
  inputPlaceholder,
  onChange,
}: SettingsItemProps) => {
  return (
    <div className='mb-4 flex items-center gap-4'>
      <Text variant='h4' className='w-2/5 text-sm'>
        {title}
      </Text>
      <TextBox
        id={title.toDotNotation()}
        defaultValue={inputDefaultValue}
        placeholder={inputPlaceholder}
        onChange={onChange}
      />
    </div>
  );
};

export default SettingsItem;
