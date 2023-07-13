import { useCallback, type HTMLAttributes } from 'react';

interface TextProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  placeholder?: string;
}

const Text = (props: TextProps) => {
  const { className, variant, children } = props;
  const Tag = variant ?? 'span';
  const classes = useCallback(() => {
    switch (variant) {
      case 'h1':
        return 'text-3xl font-bold text-gray-800 dark:text-gray-300';
      case 'h2':
        return 'pb-4 text-center text-3xl font-bold text-gray-800 dark:text-gray-300 sm:w-1/3 sm:grow sm:pb-0';
      case 'h3':
        return 'text-2xl font-bold text-gray-800 dark:text-gray-300';
      case 'h4':
        return 'font-bold text-gray-800 dark:text-gray-300';
      case 'h5':
        return 'text-gray-500 dark:text-gray-300';
      case 'h6':
      case 'p':
      case 'span':
      default:
        return 'text-lg text-gray-500 dark:text-gray-300';
    }
  }, [variant])();

  return (
    <>
      <Tag
        {...props}
        title={props.title}
        className={`${className ?? ''} ${classes}`}
      >
        {children}
      </Tag>
    </>
  );
};

export default Text;
