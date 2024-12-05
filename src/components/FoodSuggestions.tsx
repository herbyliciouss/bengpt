import React from 'react';
import { motion } from 'framer-motion';
import { FoodSuggestion } from '../types';

interface FoodSuggestionsProps {
  suggestions: FoodSuggestion[];
  onSelect: (suggestion: FoodSuggestion) => void;
}

export const FoodSuggestions: React.FC<FoodSuggestionsProps> = ({
  suggestions,
  onSelect
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {suggestions.map((suggestion, index) => (
        <motion.div
          key={`${suggestion.name}-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => onSelect(suggestion)}
        >
          <h3 className="font-semibold text-lg mb-2">{suggestion.name}</h3>
          <div className="space-y-1 text-sm text-gray-600">
            <p>Calories: {suggestion.calories} kcal</p>
            <p>Protéines: {suggestion.nutrients.protein}g</p>
            <p>Glucides: {suggestion.nutrients.carbs}g</p>
            <p>Lipides: {suggestion.nutrients.fat}g</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};