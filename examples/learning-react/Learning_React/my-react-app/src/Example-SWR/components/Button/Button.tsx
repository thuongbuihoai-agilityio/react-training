import { ButtonProps } from "../../types/button";


const Button: React.FC<ButtonProps> = ({value, className, onClick}) => {
  return (
    <button onClick={onClick} className={className}>{value}</button>
  );
}

export default Button;