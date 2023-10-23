import Toast from "../components/Toast";

export const showToast = (
  title: string,
  message: string,
  type: 'success' | 'error',
  duration: number
) => {
  return (
    <Toast
      title={title}
      message={message}
      type={type}
      duration={duration}
    />
  )
};
