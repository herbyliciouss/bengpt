import React from 'react';
import { HomeIcon } from '@heroicons/react/24/outline';

export const BottomNavigation: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100">
      <div className="max-w-md mx-auto px-6 h-20">
        <div className="grid grid-cols-4 h-full">
          <button className="flex flex-col items-center justify-center">
            <HomeIcon className="w-6 h-6 text-gray-400" />
            <span className="text-xs mt-1 text-gray-400">Home</span>
          </button>
          <button className="flex flex-col items-center justify-center">
            <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.5 6h6.5l-5 4.5 2 6.5-6-4.5-6 4.5 2-6.5-5-4.5h6.5z" />
            </svg>
            <span className="text-xs mt-1 text-indigo-600">Diet</span>
          </button>
          <button className="flex flex-col items-center justify-center">
            <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-xs mt-1 text-gray-400">Report</span>
          </button>
          <button className="flex flex-col items-center justify-center">
            <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs mt-1 text-gray-400">Profile</span>
          </button>
        </div>
      </div>
    </nav>
  );
};