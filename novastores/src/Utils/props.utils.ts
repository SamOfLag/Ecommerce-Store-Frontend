import React from 'react';

export interface MasterLayoutProps {
  children: React.ReactNode;
}

export interface InputFieldProps {
  controlId: string;
  type: string;
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPasswordToggle?: boolean;
  onTogglePassword?: () => void;
}
export interface CustomButtonProps {
  variant: string;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  size?: 'sm' | 'lg';
}
export interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  rating: number;
  reviews: number;
  badge?: string;
}
