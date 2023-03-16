import GitHubIcon from '~/assets/icons/GitHub-Icon';
import Switcher from './Switcher';

const Header = () => {
  return (
    <header>
      <nav className='flex h-10 justify-between bg-white shadow-md transition-all duration-500 dark:bg-gray-900 dark:shadow-gray-800'>
        <div className='m-auto justify-center'>
          <h1 className='text-3xl font-bold text-gray-800 dark:text-gray-300 sm:ml-32'>
            Lunch i Sundsvall
          </h1>
        </div>
        <div className='flex w-16 justify-end'>
          <Switcher />
        </div>
        <div className='flex w-16 justify-end'>
          <GitHubIcon className='w-16 p-2' />
        </div>
      </nav>
    </header>
  );
};

export default Header;
