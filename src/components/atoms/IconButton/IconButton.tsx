import { CopyIcon, Cross1Icon } from '@radix-ui/react-icons';
import { cn } from '@util/cn';
import type { ButtonHTMLAttributes } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'cancel' | 'copy';
}

const IconButton = (props: IconButtonProps) => {
  const { variant, className } = props;
  const icon = () => {
    switch (variant) {
      case 'cancel':
        return <Cross1Icon className='text-red-500 dark:text-red-700' />;
      case 'copy':
        return <CopyIcon className='text-gray-500 dark:text-gray-300' />;
      default:
        break;
    }
  };

  return (
    <button
      {...props}
      type='button'
      className={cn(
        'rounded-full p-2 hover:bg-gray-700 dark:hover:bg-gray-700',
        className
      )}
    >
      {icon()}
    </button>
  );
};

export default IconButton;
