import CancelIcon from '@asset/CancelIcon';
import { cn } from '@util/cn';
import type { ButtonHTMLAttributes } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'cancel';
}

const IconButton = (props: IconButtonProps) => {
  const { variant, className } = props;
  const icon = () => {
    switch (variant) {
      case 'cancel':
        return <CancelIcon />;
      default:
        break;
    }
  };

  return (
    <button
      {...props}
      type='button'
      className={cn(
        className,
        'rounded-full hover:bg-gray-700 dark:hover:bg-gray-700'
      )}
    >
      {icon()}
    </button>
  );
};

export default IconButton;
