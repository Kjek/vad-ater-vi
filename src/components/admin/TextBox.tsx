import type { InputHTMLAttributes } from 'react';

interface TextBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'text' | 'password';
}

const TextBox = (props: TextBoxProps) => {
  const { className, variant } = props;

  return (
    <>
      <input
        {...props}
        type={variant || 'text'}
        className={`${
          className ?? ''
        } w-full self-center rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-800 outline-none focus:border-gray-300 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-gray-600 dark:focus:ring-gray-600 md:w-auto`}
      />
    </>
  );
};

export default TextBox;
