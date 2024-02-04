import React from 'react';

interface BadgeProps {
  variant: 'default' | 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Badge = (props: BadgeProps) => {
  const { variant, children } = props;
  return (
    <span
      className={`px-2 py-1 rounded-md bg-${variant}-100 text-${variant}-800`}
    >
      {children}
    </span>
  );
};
