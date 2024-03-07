import { GitHubLogoIcon } from '@radix-ui/react-icons';

const GitHubButton = () => {
  return (
    <div className='flex rounded-md hover:ring-gray-300'>
      <a
        title='Länk till sidans GitHub repository'
        className='cursor-pointer self-center rounded-md bg-white p-2 transition duration-500 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
        href='https://github.com/Kjek/vad-ater-vi'
      >
        <GitHubLogoIcon className={'size-6 text-black dark:text-white'} />
      </a>
    </div>
  );
};

export default GitHubButton;
