import IconButton from '@component/atoms/IconButton/IconButton';
import { cn } from '@util/cn';
import { useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  toggleOpen: VoidFunction;
}

const Modal = ({ children, className, toggleOpen }: ModalProps) => {
  const ref = useRef(null);
  useOnClickOutside(ref, toggleOpen);

  const keyDownEvent = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'Escape') {
      toggleOpen();
    }
  };

  return (
    <>
      <div className='fixed left-0 top-0 m-0 h-full w-full bg-black opacity-30' />
      <div
        ref={ref}
        className={cn(
          'dark:bg-gray-custom fixed left-[50%] top-[50%] flex max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] flex-col gap-4 rounded-[6px] bg-white p-6 pt-10',
          className
        )}
        onKeyDown={keyDownEvent}
      >
        {children}
        <IconButton
          variant='cancel'
          className='absolute right-2 top-2 p-2'
          onClick={toggleOpen}
        />
      </div>
    </>
  );
};

export default Modal;
