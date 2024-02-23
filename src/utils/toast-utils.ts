import type { TRPCClientErrorLike } from '@trpc/client';
import { toast, type Id } from 'react-toastify';

export const toastSuccessful = (id: Id) => {
  toast.update(id, {
    render: 'Success!',
    type: 'success',
    isLoading: false,
    autoClose: 5000,
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toastError = (id: Id, error: TRPCClientErrorLike<any>) => {
  toast.update(id, {
    render: `Error: ${error.message}`,
    type: 'error',
    isLoading: false,
    autoClose: 5000,
  });
};
