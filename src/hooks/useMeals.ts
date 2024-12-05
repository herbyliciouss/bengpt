import { useState, useEffect } from 'react';
import { Meal } from '../types';

export const useMeals = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addMeal = (meal: Omit<Meal, 'id'>) => {
    const newMeal = {
      ...meal,
      id: Date.now().toString()
    };
    setMeals(prevMeals => [...prevMeals, newMeal]);
  };

  return {
    meals,
    loading,
    error,
    addMeal
  };
};