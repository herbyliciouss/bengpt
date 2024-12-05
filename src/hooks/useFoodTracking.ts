import { useState, useCallback } from 'react';
import { searchFood } from '../services/foodApi';
import toast from 'react-hot-toast';
import { useStore } from '../store/useStore';

export const useFoodTracking = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { nutritionState, updateNutrition } = useStore();

  const processVoiceInput = useCallback(async (transcript: string): Promise<void> => {
    setIsProcessing(true);
    try {
      const cleanTranscript = transcript.toLowerCase().trim();
      const words = cleanTranscript.split(' ');
      const quantity = words.find(word => !isNaN(Number(word))) 
        ? Number(words.find(word => !isNaN(Number(word))))
        : 1;
      
      const searchQuery = words
        .filter(word => isNaN(Number(word)))
        .join(' ')
        .trim();

      const searchResults = await searchFood(searchQuery);
      
      if (searchResults.length === 0) {
        toast.error('Food not found. Please try again.');
        return;
      }

      const food = searchResults[0];
      const newCalories = Math.round(food.calories * quantity);
      const newProtein = Math.round((food.nutrients.protein * quantity) * 10) / 10;
      const newCarbs = Math.round((food.nutrients.carbs * quantity) * 10) / 10;
      const newFat = Math.round((food.nutrients.fat * quantity) * 10) / 10;
      
      updateNutrition({
        calories: nutritionState.calories + newCalories,
        protein: nutritionState.protein + newProtein,
        carbs: nutritionState.carbs + newCarbs,
        fat: nutritionState.fat + newFat
      });

      toast.success(`Added: ${food.name} (${newCalories} kcal)`);
    } catch (error) {
      console.error('Error processing voice input:', error);
      toast.error('Error processing food. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  }, [nutritionState, updateNutrition]);

  return {
    isProcessing,
    processVoiceInput
  };
};