import { useEffect, useState } from 'react';
import './toast.css';

export enum ToastType {
  default = '',
  success = 'success',
  error = 'error',
}

type ToastProps = {
  title: string;
  message: string;
  type: ToastType;
  duration?: number;
};

const Toast: React.FC<ToastProps> = ({
  title,
  message,
  type,
  duration = 2000
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) {
    return null;
  }

  return (
    <div className={`toast toast-${type}`}>
      <div className="toast-body">
        <div>
          <h3 className="toast-title">{title}</h3>
          <p className="toast-msg">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Toast;