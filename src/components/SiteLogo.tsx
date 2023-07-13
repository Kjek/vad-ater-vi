import { api } from '@util/api';
import Image from 'next/image';

const SiteLogo = () => {
  return (
    <>
      <Image
        src='/site-image.png'
        alt='Lunch Image'
        width={40}
        height={40}
        className='h-fit'
      />
    </>
  );
};

export default SiteLogo;
