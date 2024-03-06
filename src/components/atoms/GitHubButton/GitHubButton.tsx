import { useTheme } from '@hook/useTheme';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { cn } from '@util/cn';

const GitHubButton = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div className='flex rounded-md hover:ring-gray-300'>
      <a
        title='Länk till sidans GitHub repository'
        className='cursor-pointer self-center rounded-md bg-white p-2 transition duration-500 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
        href='https://github.com/Kjek/vad-ater-vi'
      >
        <GitHubLogoIcon
          className={cn('size-6', isDarkMode ? 'text-white' : '')}
        />
      </a>
    </div>
  );
};

export default GitHubButton;
