import React from 'react';
import { Button } from 'react-bootstrap';
import { CustomButtonProps } from '../../../Utils/props.utils';

const CustomButton: React.FC<CustomButtonProps> = ({
  variant,
  type = 'button',
  children,
  disabled,
  className,
  onClick,
  size,
}) => (
  <Button
    variant={variant}
    type={type}
    disabled={disabled}
    className={className}
    onClick={onClick}
    size={size}
  >
    {children}
  </Button>
);

export default CustomButton;