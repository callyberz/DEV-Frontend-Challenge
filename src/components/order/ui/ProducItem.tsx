import React from 'react';
import { Avatar } from '../../ui/avatar';
import Link from 'next/link';

export const ProductItem = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Avatar>
          TEST
        </Avatar>
        <div>
          <p className="font-medium">Sweet Onion x6</p>
          <p className="text-sm text-gray-500">$0.80 / each</p>
        </div>
      </div>
      <div>
        <Link className="text-indigo-600" href="#">
          view
        </Link>
        <p className="text-right">$4.80</p>
      </div>
    </div>
  );
};
