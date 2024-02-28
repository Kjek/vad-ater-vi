import MoonIcon from '@asset/MoonIcon';
import SunIcon from '@asset/SunIcon';
import useDarkMode from '@hook/useDarkMode';
import { useTernaryDarkMode } from 'usehooks-ts';

const ThemeButton = () => {
  const { toggle } = useDarkMode();
  const { ternaryDarkMode } = useTernaryDarkMode();

  const renderIcon = () => {
    switch (ternaryDarkMode) {
      case 'dark':
        return <MoonIcon />;

      case 'light':
        return <SunIcon />;

      case 'system':
        return <h2 className='h-6 w-6 text-gray-800 dark:text-gray-300'>OS</h2>;

      default:
        break;
    }
  };

  return (
    <div className='flex rounded-md hover:ring-gray-300'>
      <span
        title='Byt mellan mörk-, ljus- och operativsystemläge för tema på sidan'
        className='cursor-pointer self-center rounded-md bg-white p-2 transition-all duration-500 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
        onClick={toggle}
      >
        {renderIcon()}
      </span>
    </div>
  );
};

export default ThemeButton;
