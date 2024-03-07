import { useTheme } from '@hook/useTheme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  const { theme } = useTheme();
  return (
    <>
      {children}
      <ToastContainer position='top-right' theme={theme} />
    </>
  );
}
