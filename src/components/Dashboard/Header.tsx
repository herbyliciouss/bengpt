import React from 'react';
import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/outline';
import { User } from '../../types';

interface HeaderProps {
  user: User;
}

export const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-200" />
        <span className="font-medium">Hello, {user.name}!</span>
      </div>
      
      <div className="flex items-center gap-4">
        <button>
          <MagnifyingGlassIcon className="w-6 h-6 text-gray-700" />
        </button>
        <button className="relative">
          <BellIcon className="w-6 h-6 text-gray-700" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full" />
        </button>
      </div>
    </div>
  );
};