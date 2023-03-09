import DarkLightTheme from '~/assets/icons/DarkLightTheme';

const Switcher = () => {
  return (
    <>
      <div className='md-16 flex flex-col items-center rounded-md p-2 hover:ring-gray-300'>
        <DarkLightTheme />
      </div>
    </>
  );
};

export default Switcher;
