import { CopyIcon, Cross1Icon } from '@radix-ui/react-icons';
import { cn } from '@util/cn';
import type { ComponentPropsWithoutRef } from 'react';

interface IconButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant: 'cancel' | 'copy';
}

const IconButton = ({ variant, className, ...props }: IconButtonProps) => {
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
        'rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700',
        className
      )}
    >
      {icon()}
    </button>
  );
};

export default IconButton;
