import type { InputHTMLAttributes } from 'react';

interface InputButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const InputButton = (props: InputButtonProps) => {
  const { className, onClick } = props;

  return (
    <>
      <input
        title={props.title}
        className={`cursor-pointer rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-200 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white ${
          className ?? ''
        }`}
        type='button'
        value={props.value}
        onClick={onClick}
      />
    </>
  );
};

export default InputButton;
