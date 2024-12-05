import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface ProgressCardProps {
  calories: number;
  totalCalories: number;
  date: Date;
}

export const ProgressCard: React.FC<ProgressCardProps> = ({ calories = 0, totalCalories = 2000, date = new Date() }) => {
  const percentage = 0;
  
  return (
    <div className="bg-blue-50 rounded-xl p-4 mx-4">
      <div className="flex items-center justify-between mb-4">
        <button className="flex items-center gap-2 text-sm">
          <span>Your Progress</span>
          <ChevronDownIcon className="w-4 h-4" />
        </button>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <div className="text-4xl font-bold">0%</div>
          <button className="flex items-center gap-1 text-sm text-gray-600 mt-2">
            {date.toLocaleDateString('en-US', { day: 'numeric', month: 'long' })}
            <ChevronDownIcon className="w-4 h-4" />
          </button>
        </div>
        
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="relative w-32 h-32"
        >
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <div className="text-2xl font-bold">0</div>
            <div className="text-sm text-gray-600">Calories</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};