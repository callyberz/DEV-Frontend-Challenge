import React from 'react';

export const Avatar = (props: { children: React.ReactNode }) => {
  return <div className="flex items-center space-x-2">{props.children}</div>;
};
