'use client';

import { useTheme } from '@hook/useTheme';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { cn } from '@util/cn';
import { type ComponentPropsWithoutRef } from 'react';

const ThemeButton = ({
  className,
  ...props
}: ComponentPropsWithoutRef<'button'>) => {
  const { theme, toggleTheme } = useTheme();
  const renderIcon = () => {
    switch (theme) {
      case 'light':
        return <SunIcon className='size-6' />;

      default:
        return <MoonIcon className='size-6 text-white' />;
    }
  };

  return (
    <button
      {...props}
      type='button'
      title='Byt mellan mörk- och ljustläge för tema på sidan'
      className={cn(
        'cursor-pointer self-center rounded-md bg-white p-2 transition duration-500 hover:bg-gray-200 hover:ring-gray-300 hover:transition-none dark:bg-gray-800 dark:hover:bg-gray-700',
        className
      )}
      onClick={toggleTheme}
    >
      {renderIcon()}
    </button>
  );
};

export default ThemeButton;
