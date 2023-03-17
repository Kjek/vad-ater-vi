import GitHubIcon from '~/assets/icons/GitHub-Icon';
import Switcher from './Switcher';

const Header = () => {
  return (
    <header>
      <nav className='flex justify-between bg-neutral-100 py-2 px-4 shadow-md transition-all duration-500 dark:bg-gray-900 dark:shadow-gray-800'>
        <div className='m-auto flex w-full grow justify-center'>
          <h1 className='text-3xl font-bold text-gray-800 dark:text-gray-300 sm:ml-20'>
            Lunch i Sundsvall
          </h1>
        </div>
        <div className='flex items-center gap-2'>
          <div className='rounded-md'>
            <Switcher />
          </div>
          <div className='rounded-md'>
            <GitHubIcon />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
