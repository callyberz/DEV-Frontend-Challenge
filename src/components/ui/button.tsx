import { cn } from '@/utils/helper';
import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = (props: ButtonProps) => {
  const { children, variant = 'secondary', className, ...rest } = props;
  return (
    <button
      className={cn(
        `px-4 py-2 border border-gray-300 rounded-md bg-${variant}-500 text-Grey800 w`,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
