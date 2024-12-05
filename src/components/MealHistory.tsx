import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { useMeals } from '../hooks/useMeals';

export const MealHistory: React.FC = () => {
  const { meals, loading } = useMeals();

  if (loading) {
    return (
      <div className="text-center text-gray-500">
        Loading history...
      </div>
    );
  }

  if (!meals.length) {
    return (
      <div className="text-center text-gray-500">
        No meals recorded
      </div>
    );
  }

  const groupedMeals = meals.reduce((acc, meal) => {
    const date = format(meal.date, 'yyyy-MM-dd');
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(meal);
    return acc;
  }, {} as Record<string, typeof meals>);

  return (
    <div className="space-y-6">
      {Object.entries(groupedMeals).map(([date, dayMeals]) => (
        <motion.div
          key={date}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-lg shadow-md p-4"
        >
          <h3 className="text-lg font-semibold mb-2">
            {format(new Date(date), 'EEEE, MMMM d')}
          </h3>
          <div className="space-y-2">
            {dayMeals.map((meal) => (
              <div key={meal.id} className="flex justify-between items-center">
                <span>{meal.name}</span>
                <span className="text-gray-600">{meal.calories} kcal</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};