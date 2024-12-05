import React from 'react';
import { motion } from 'framer-motion';
import { PlusIcon } from '@heroicons/react/24/outline';

interface MealSectionProps {
  onAddMeal: () => void;
}

export const MealSection: React.FC<MealSectionProps> = ({ onAddMeal }) => {
  return (
    <div className="bg-green-50 rounded-xl p-4 mx-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold">Breakfast</h2>
        <div className="text-sm text-gray-600">0 calories</div>
      </div>
      
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div>
          <div className="font-medium">Proteins</div>
          <div className="text-lg font-bold">0</div>
        </div>
        <div>
          <div className="font-medium">Fats</div>
          <div className="text-lg font-bold">0</div>
        </div>
        <div>
          <div className="font-medium">Carbs</div>
          <div className="text-lg font-bold">0</div>
        </div>
        <div>
          <div className="font-medium">RDC</div>
          <div className="text-lg font-bold">0%</div>
        </div>
      </div>
      
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={onAddMeal}
        className="w-full bg-white rounded-lg p-3 flex items-center justify-center gap-2 shadow-sm"
      >
        <PlusIcon className="w-5 h-5" />
        <span>Add Food</span>
      </motion.button>
    </div>
  );
};