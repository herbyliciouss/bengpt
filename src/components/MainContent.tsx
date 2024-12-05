import React from 'react';
import NutritionDashboard from './Dashboard/NutritionDashboard';
import { User } from '../types';

interface MainContentProps {
  user: User;
}

export const MainContent: React.FC<MainContentProps> = ({ user }) => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white transition-colors duration-300">
        Nutrition Tracker
      </h1>
      <NutritionDashboard />
    </div>
  );
};