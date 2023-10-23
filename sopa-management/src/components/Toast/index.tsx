import { FC, useEffect, useState } from 'react';
import './toast.css';

type ToastProps = {
  title?: string;
  message?: string;
  type?: 'success' | 'error';
  duration?: number;
};

const Toast: FC<ToastProps> = ({ title, message, type, duration }) => {
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
        <div className="toast-icon">{type === 'success' ? '✔' : '❌'}</div>
        <div>
          <h3 className="toast-title">{title}</h3>
          <p className="toast-msg">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Toast;