import React from 'react';
import { CircularProgress } from './CircularProgress';

export const NutritionIntake: React.FC = () => {
  const totalCalories = 2500;
  const consumedCalories = 530;
  const percentage = (consumedCalories / totalCalories) * 100;

  return (
    <section className="bg-white rounded-2xl p-6 space-y-6">
      <h2 className="text-xl font-semibold">Nutrition Intake</h2>
      
      <div className="space-y-2">
        <div className="text-gray-600">Consumed today</div>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-green-500">{consumedCalories}</span>
          <span className="text-gray-400">/{totalCalories} Cal</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-green-500 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-xl p-4">
          <CircularProgress 
            value={856}
            total={2500}
            color="#3B82F6"
            label="Calories"
            unit="Cal"
          />
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <CircularProgress 
            value={128}
            total={200}
            color="#F97316"
            label="Protein"
            unit="Cal"
          />
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <CircularProgress 
            value={173}
            total={300}
            color="#EAB308"
            label="Carbs"
            unit="Cal"
          />
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <CircularProgress 
            value={199}
            total={400}
            color="#8B5CF6"
            label="Calories"
            unit="Cal"
          />
        </div>
      </div>

      <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-medium hover:bg-indigo-700 transition-colors">
        + Add Meals
      </button>
    </section>
  );
};