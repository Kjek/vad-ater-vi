import { cn } from '@util/cn';
import Image from 'next/image';
import { type ComponentPropsWithoutRef } from 'react';

const SiteLogo = ({ className, ...props }: ComponentPropsWithoutRef<'img'>) => {
  return (
    <>
      <Image
        {...props}
        src='/site-image.png'
        alt='Lunch Image'
        width={40}
        height={40}
        className={cn('h-fit', className)}
      />
    </>
  );
};

export default SiteLogo;
