import { cn } from '@/utils/helper';
import React from 'react';

interface ButtonProps {
  // TODO/CLee: fix variant type
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = (props: ButtonProps) => {
  const { children, variant = 'secondary', className, ...rest } = props;
  return (
    <button
      className={cn(
        `px-4 py-2 border border-gray-300 rounded-md  text-Grey800 w-full hover:bg-Grey100 focus:outline-none focus:bg-Grey100`,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
