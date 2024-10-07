import React, { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { AiOutlineInfoCircle, AiOutlineWarning } from 'react-icons/ai';

interface AlertProps {
  message: string;
  error?: boolean;
  visible: boolean;
  onClose: () => void; // to handle closing after timeout
}

const Alert: React.FC<AlertProps> = ({ message, error = false, visible, onClose }) => {
  const [show, setShow] = useState(visible);

  useEffect(() => {
    if (visible) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        onClose();
      }, 3000); // Alert disappears after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  if (!show) return null;

  const bgColor = error ? 'bg-red-100 border-red-500 text-red-900' : 'bg-teal-100 border-teal-500 text-teal-900';
  const Icon: IconType = error ? AiOutlineWarning : AiOutlineInfoCircle;

  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-1/2 max-w-lg ${bgColor} border-t-4 rounded-b px-4 py-3 shadow-md`} role="alert">
      <div className="flex">
        <div className="py-1">
          <Icon className={`h-6 w-6 ${error ? 'text-red-500' : 'text-teal-500'} mr-4`} />
        </div>
        <div>
          <p className="font-bold">{error ? 'Error' : 'Notice'}</p>
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
