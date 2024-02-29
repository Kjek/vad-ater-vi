import InputButton from '@component/atoms/Button/Button';
import IconButton from '@component/atoms/IconButton/IconButton';
import Text from '@component/atoms/Text/Text';
import { useToggle } from 'usehooks-ts';

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  title: string;
  variant?: 'text' | 'button';
}

const Modal = (props: ModalProps) => {
  const { children, className, title, variant, onClick } = props;
  const [open, toggleOpen] = useToggle();

  const handleOnClick = () => {
    toggleOpen();
    if (onClick) {
      onClick();
    }
  };

  const toggleComponent = () => {
    switch (variant) {
      case 'text':
        return (
          <Text
            className='flex-1 cursor-pointer self-center'
            onClick={handleOnClick}
          >
            {title}
          </Text>
        );
      default:
        return (
          <InputButton
            value={title}
            className='flex-1 cursor-pointer self-center'
            onClick={handleOnClick}
          />
        );
    }
  };

  const keyDownEvent = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'Escape') {
      toggleOpen();
    }
  };

  return (
    <>
      <div className={className} onKeyDown={keyDownEvent}>
        {toggleComponent()}
        {open ? (
          <>
            <div
              className='fixed left-0 top-0 m-0 h-full w-full bg-black opacity-30'
              onClick={toggleOpen}
              onKeyDown={keyDownEvent}
            />
            <div className='dark:bg-gray-custom fixed left-[50%] top-[50%] flex max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] flex-col gap-4 rounded-[6px] bg-white p-6 pt-10'>
              {children}
              <IconButton
                variant='cancel'
                className='absolute right-2 top-2 p-2'
                onClick={toggleOpen}
              />
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Modal;
