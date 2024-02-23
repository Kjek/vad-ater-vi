import { cn } from '@util/cn';
import { useCallback, type HTMLAttributes } from 'react';

interface TextProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  type?: 'normal' | 'info' | 'error';
  placeholder?: string;
}

const Text = (props: TextProps) => {
  const { className, variant, children, type } = props;
  const Tag = variant ?? 'span';
  const tagClasses = useCallback(() => {
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

  const typeClasses = useCallback(() => {
    switch (type) {
      case 'error':
        return 'text-red-700 dark:text-red-500';
      case 'info':
      case 'normal':
        return 'text-gray-500 dark:text-gray-300';
      default:
        return '';
    }
  }, [type])();

  return (
    <>
      <Tag
        {...props}
        title={props.title}
        className={cn(tagClasses, typeClasses, className)}
      >
        {children}
      </Tag>
    </>
  );
};

export default Text;
