export interface ButtonProps {
  text: string | JSX.Element;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}