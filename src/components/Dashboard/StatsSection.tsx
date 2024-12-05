import React from 'react';
import { ArrowTrendingUpIcon, ChartBarIcon } from '@heroicons/react/24/outline';

interface StatsSectionProps {
  currentWeight: number;
  weightChange: number;
  todayCalories: number;
  calorieChange: number;
}

export const StatsSection: React.FC<StatsSectionProps> = ({
  currentWeight = 0,
  weightChange = 0,
  todayCalories = 0,
  calorieChange = 0
}) => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm text-gray-600">Current Weight</h3>
          <ArrowTrendingUpIcon className="w-5 h-5" />
        </div>
        <div className="text-xl font-bold">0 Kg</div>
        <div className="text-sm text-gray-500 mt-1">
          0 Kg
        </div>
      </div>
      
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm text-gray-600">Today's Calories</h3>
          <ChartBarIcon className="w-5 h-5" />
        </div>
        <div className="text-xl font-bold">0</div>
        <div className="text-sm text-gray-500 mt-1">
          0%
        </div>
      </div>
    </div>
  );
};