import GitHubIcon from '~/assets/icons/GitHub-Icon';
import Switcher from './Switcher';

const Header = () => {
  return (
    <header>
      <nav className='flex justify-between gap-2 bg-white py-2 px-4 shadow-md transition-all duration-500 dark:bg-gray-900 dark:shadow-gray-800'>
        <div className='m-auto flex justify-center'>
          <h1 className='text-3xl font-bold text-gray-800 dark:text-gray-300 sm:ml-32'>
            Lunch i Sundsvall
          </h1>
        </div>
        <div className='flex w-10 flex-col justify-end'>
          <Switcher />
        </div>
        <div className='flex w-10 flex-col justify-end'>
          <GitHubIcon />
        </div>
      </nav>
    </header>
  );
};

export default Header;
