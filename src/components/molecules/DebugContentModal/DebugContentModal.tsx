import InputButton from '@component/atoms/Button/Button';
import IconButton from '@component/atoms/IconButton/IconButton';
import Spinner from '@component/atoms/Spinner/Spinner';
import Modal from '@component/molecules/Modal/Modal';
import { ReaderIcon } from '@radix-ui/react-icons';
import type { Dispatch, SetStateAction } from 'react';
import { useCopyToClipboard, useToggle } from 'usehooks-ts';

interface DebugContentModalProps {
  debugData: string | undefined;
  restaurantId: string;
  setDebugId: Dispatch<SetStateAction<string>>;
}

const DebugContentModal = ({
  debugData,
  restaurantId,
  setDebugId,
}: DebugContentModalProps) => {
  const [isOpen, toggleOpen] = useToggle();
  const [_, copy] = useCopyToClipboard();

  const toggleModal = () => {
    setDebugId(restaurantId);
    toggleOpen();
  };
  return (
    <>
      <InputButton
        value={'Debug'}
        className='cursor-pointer max-md:hidden'
        onClick={toggleModal}
      />
      <IconButton
        variant='reader'
        className='rounded-md border border-gray-300 p-3 dark:border-gray-600 md:hidden'
        onClick={toggleModal}
        aria-label='Debug'
      />
      {isOpen ? (
        <Modal toggleOpen={toggleOpen}>
          <IconButton
            variant={'copy'}
            className='self-end'
            onClick={() =>
              debugData && void copy(JSON.parse(debugData) as string)
            }
          />
          {debugData ? (
            <textarea
              id={`${restaurantId}.textarea`}
              rows={100}
              className='min-h-full rounded-md'
              value={JSON.parse(debugData) as string}
              disabled
            ></textarea>
          ) : (
            <Spinner />
          )}
        </Modal>
      ) : null}
    </>
  );
};

export default DebugContentModal;
