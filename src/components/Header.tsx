import GitHubButton from '@component/GitHubButton';
import SiteLogo from './SiteLogo';
import ThemeButton from './ThemeButton';

const Header = () => {
  return (
    <header>
      <nav className='flex justify-between bg-neutral-100 py-2 px-4 shadow-md transition duration-500 dark:border-spacing-1 dark:border-b dark:border-gray-700 dark:bg-gray-900 dark:shadow-none'>
        <div className='m-auto flex w-full grow items-center justify-center gap-4 sm:ml-20 '>
          <SiteLogo />
          <h1 className='text-3xl font-bold text-gray-800 dark:text-gray-300'>
            Lunch i Sundsvall
          </h1>
        </div>
        <div className='flex items-center gap-2'>
          <div className='rounded-md'>
            <ThemeButton />
          </div>
          <div className='rounded-md'>
            <GitHubButton />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
