import React from 'react';

export interface MasterLayoutProps {
  children: React.ReactNode;
}

export interface InputFieldProps {
  controlId: string;
  type: string;
  name?: string;
  label: string;
  placeholder?: string;
  value?: string;
  suffix?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPasswordToggle?: boolean;
  onTogglePassword?: () => void;
}
export interface CustomButtonProps {
  variant: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  size?: 'sm' | 'lg';
}
export interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  badge?: string;
}
