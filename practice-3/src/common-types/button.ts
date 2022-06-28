export interface ButtonProps {
  className?: string;
  text: string | JSX.Element;
  disabled?: boolean;
  onClick?: () => void;
}