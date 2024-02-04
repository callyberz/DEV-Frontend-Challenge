import React from 'react';

interface BadgeProps {
  // TODO/CLee: extend more variants
  children: React.ReactNode;
}

export const Badge = (props: BadgeProps) => {
  const { children } = props;
  return (
    <span
      className={`px-4 py-1 bg-Green100 text-Green800 rounded-full capitalize`}
    >
      {children}
    </span>
  );
};
