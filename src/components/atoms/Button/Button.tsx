import type { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const InputButton = ({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <>
      <input
        {...props}
        title={props.title}
        className={twMerge(
          `cursor-pointer rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-200 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white ${
            className ?? ''
          }`
        )}
        type='button'
        value={props.value}
      />
    </>
  );
};

export default InputButton;
