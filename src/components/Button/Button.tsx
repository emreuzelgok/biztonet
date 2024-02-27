import { FC } from 'react';

type ButtonProps = {
  onClick: () => void;
  value: string;
};

const Button: FC<ButtonProps> = ({onClick, value}) => {
  return (
    <button onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
