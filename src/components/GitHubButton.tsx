import GitHubIcon from '@asset/GitHubIcon';
import { useTheme } from '@hook/useTheme';

const GitHubButton = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <>
      <a
        title='Länk till sidans GitHub repository'
        className='block w-10 cursor-pointer self-center rounded-md bg-white p-2 transition-all duration-500 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
        href='https://github.com/Kjek/vad-ater-vi'
      >
        <GitHubIcon isDarkMode={isDarkMode} />
      </a>
    </>
  );
};

export default GitHubButton;
