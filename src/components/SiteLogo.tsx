import { api } from '@util/api';
import Image from 'next/image';
import { useEffect } from 'react';
import { useCounter, useDebounce } from 'usehooks-ts';

const SiteLogo = () => {
  const { count, increment, reset } = useCounter(0);
  const { refetch } = api.reset.all.useQuery(undefined, {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const debouncedValue = useDebounce<number>(count, 130);

  useEffect(() => {
    if (debouncedValue >= 10) {
      reset();
      void refetch();
    }
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <>
      <Image
        src='/site-image.png'
        alt='Lunch Image'
        width={40}
        height={40}
        className='h-fit'
        onClick={increment}
      />
    </>
  );
};

export default SiteLogo;
