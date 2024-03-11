import { cn } from '@util/cn';
import type { ComponentPropsWithoutRef } from 'react';

interface TextBoxProps extends ComponentPropsWithoutRef<'input'> {
  variant?: 'text' | 'password';
}

const TextBox = ({ className, variant, ...props }: TextBoxProps) => {
  return (
    <>
      <input
        {...props}
        type={variant ?? 'text'}
        className={cn(
          'w-full self-center rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-800 outline-none focus:border-gray-300 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-gray-600 dark:focus:ring-gray-600',
          className
        )}
      />
    </>
  );
};

export default TextBox;
