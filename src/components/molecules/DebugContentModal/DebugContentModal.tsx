import IconButton from '@component/atoms/IconButton/IconButton';
import Spinner from '@component/atoms/Spinner/Spinner';
import Modal from '@component/molecules/Modal/Modal';
import type { Dispatch, SetStateAction } from 'react';
import { useCopyToClipboard } from 'usehooks-ts';

interface DebugContentModalProps {
  debugData: string | undefined;
  restaurantName: string;
  setDebugName: Dispatch<SetStateAction<string>>;
}

const DebugContentModal = ({
  debugData,
  restaurantName,
  setDebugName,
}: DebugContentModalProps) => {
  const [_, copy] = useCopyToClipboard();
  return (
    <Modal title='Debug content' onClick={() => setDebugName(restaurantName)}>
      <IconButton
        variant={'copy'}
        className='self-end'
        onClick={() => debugData && void copy(JSON.parse(debugData) as string)}
      />
      {debugData ? (
        <textarea
          id={`${restaurantName}.textarea`}
          rows={100}
          className='min-h-full rounded-md'
          value={JSON.parse(debugData) as string}
          disabled
        ></textarea>
      ) : (
        <Spinner />
      )}
    </Modal>
  );
};

export default DebugContentModal;
