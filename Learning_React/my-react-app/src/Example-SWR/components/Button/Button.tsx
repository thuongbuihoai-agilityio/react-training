import { ButtonProps } from "../../types/button";


const Button: React.FC<ButtonProps> = ({value, onClick}) => {
  return (
    <button onClick={onClick}>{value}</button>
  );
}

export default Button;