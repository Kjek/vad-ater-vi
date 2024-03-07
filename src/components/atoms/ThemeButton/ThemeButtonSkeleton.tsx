const ThemeButtonSkeleton = () => {
  return (
    <div className='flex animate-pulse rounded-md hover:ring-gray-300'>
      <span className='cursor-pointer self-center rounded-md bg-gray-200 p-2 transition duration-500 dark:bg-gray-700'>
        <div className='size-6'></div>
      </span>
    </div>
  );
};

export default ThemeButtonSkeleton;
