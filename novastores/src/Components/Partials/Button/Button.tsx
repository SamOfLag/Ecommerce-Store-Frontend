import React from 'react';
import { Button } from 'react-bootstrap';
import { CustomButtonProps } from '../../../Utils/props.utils';

const CustomButton: React.FC<CustomButtonProps> = ({
  variant,
  type = 'button',
  children,
  className,
  onClick,
  size,
}) => (
  <Button
    variant={variant}
    type={type}
    className={className}
    onClick={onClick}
    size={size}
  >
    {children}
  </Button>
);

export default CustomButton;

// import React from 'react';

// interface ButtonProps {
//   text: string;
//   onClick: () => void;
//   variant?: 'primary' | 'secondary';
// }

// const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'primary' }) => {
//   const btnClass = variant === 'primary' ? 'btn btn-primary' : 'btn btn-secondary';
//   return (
//     <button className={`${btnClass} w-100`} onClick={onClick}>
//       {text}
//     </button>
//   );
// };

// export default Button;
