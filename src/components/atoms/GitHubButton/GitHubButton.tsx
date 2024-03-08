import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { cn } from '@util/cn';
import { type ButtonHTMLAttributes } from 'react';

const GitHubButton = ({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      type='button'
      className={cn('flex rounded-md hover:ring-gray-300', className)}
    >
      <a
        title='Länk till sidans GitHub repository'
        className='cursor-pointer self-center rounded-md bg-white p-2 transition duration-500 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
        href='https://github.com/Kjek/vad-ater-vi'
      >
        <GitHubLogoIcon className={'size-6 text-black dark:text-white'} />
      </a>
    </button>
  );
};

export default GitHubButton;
