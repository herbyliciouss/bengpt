import React from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon, FireIcon } from '@heroicons/react/24/outline';
import { useStore } from '../../store/useStore';

const NutritionDashboard: React.FC = () => {
  const { nutritionState } = useStore();
  const caloriesBurned = 2118;
  const caloriesBurnedGoal = 3120;
  
  const macros = [
    { label: 'Protein', current: nutritionState.protein, total: 29, color: '#818CF8' },
    { label: 'Fat', current: nutritionState.fat, total: 42, color: '#38BDF8' },
    { label: 'Carbs', current: nutritionState.carbs, total: 120, color: '#4ADE80' }
  ];

  const percentage = (caloriesBurned / caloriesBurnedGoal) * 100;
  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm transition-colors duration-300">
      <div className="flex gap-8 mb-8">
        {/* Large Circular Progress */}
        <div className="flex-1">
          <div className="relative w-[240px] h-[240px] mx-auto">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="120"
                cy="120"
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="24"
                className="text-gray-100 dark:text-gray-700 transition-colors duration-300"
              />
              <motion.circle
                cx="120"
                cy="120"
                r={radius}
                fill="none"
                stroke="#818CF8"
                strokeWidth="24"
                strokeLinecap="round"
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 1, ease: "easeInOut" }}
                style={{
                  strokeDasharray: circumference
                }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-[3.5rem] font-bold leading-none mb-2 dark:text-white transition-colors duration-300">
                {caloriesBurned}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm leading-tight max-w-[160px] transition-colors duration-300">
                Your calories burned today
              </span>
            </div>
          </div>
        </div>

        {/* Macros Progress Bars */}
        <div className="flex-1 flex flex-col justify-center space-y-10">
          {macros.map((macro) => (
            <div key={macro.label} className="space-y-1">
              <span className="text-lg font-semibold block dark:text-white transition-colors duration-300">
                {macro.label}
              </span>
              <div className="space-y-1">
                <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden transition-colors duration-300">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ 
                      backgroundColor: macro.color,
                      width: `${(macro.current / macro.total) * 100}%`
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${(macro.current / macro.total) * 100}%` }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                  {macro.current}/{macro.total} g
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calories Summary */}
      <div className="flex justify-between pt-6 border-t border-gray-100 dark:border-gray-700 transition-colors duration-300">
        <div className="flex items-center gap-2">
          <SparklesIcon className="w-5 h-5 text-green-500" />
          <div>
            <div className="text-xl font-bold leading-none dark:text-white transition-colors duration-300">
              {nutritionState.calories} Kcal
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 transition-colors duration-300">
              Eaten
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <FireIcon className="w-5 h-5 text-orange-500" />
          <div>
            <div className="text-xl font-bold leading-none dark:text-white transition-colors duration-300">
              {caloriesBurnedGoal} Kcal
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 transition-colors duration-300">
              Burned
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionDashboard;