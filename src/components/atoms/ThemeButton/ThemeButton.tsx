import { useTheme } from '@hook/useTheme';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

const ThemeButton = () => {
  const { theme, toggle } = useTheme();

  const renderIcon = () => {
    switch (theme) {
      case 'light':
        return <SunIcon className='size-6' />;

      default:
        return <MoonIcon className='size-6 text-white' />;
    }
  };

  return (
    <div className='flex rounded-md hover:ring-gray-300'>
      <span
        title='Byt mellan mörk-, ljustläge för tema på sidan'
        className='cursor-pointer self-center rounded-md bg-white p-2 transition duration-500 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'
        onClick={toggle}
      >
        {renderIcon()}
      </span>
    </div>
  );
};

export default ThemeButton;
