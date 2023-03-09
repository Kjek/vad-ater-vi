import GitHubIcon from '~/assets/icons/GitHub-Icon';
import Switcher from './Switcher';

const Header = () => {
  return (
    <header>
      <nav className='bg-gradient-to-r pb-1 dark:from-[#ef473a] dark:to-[#cb2d3e]'>
        <div className='flex h-12 justify-between dark:bg-neutral-800'>
          <div className='m-auto justify-center'>
            <h1 className='text-3xl font-bold text-black dark:text-white'>
              Lunch i Sundsvall
            </h1>
          </div>
          <div className='flex w-16 justify-end'>
            <Switcher />
          </div>
          <div className='flex w-16 justify-end'>
            <GitHubIcon className='w-16 p-1' />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
