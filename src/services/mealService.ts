import { Meal } from '../types';

export const addMeal = async (meal: Omit<Meal, 'id'>): Promise<void> => {
  // TODO: Implement meal storage
  console.log('Meal added:', meal);
};