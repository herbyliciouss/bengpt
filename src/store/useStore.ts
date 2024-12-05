import { create } from 'zustand';
import { User } from '../types';

interface NutritionState {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

interface Store {
  user: User | null;
  setUser: (user: User | null) => void;
  nutritionState: NutritionState;
  updateNutrition: (newState: Partial<NutritionState>) => void;
  resetNutrition: () => void;
}

const DEFAULT_NUTRITION = {
  calories: 0,
  protein: 0,
  carbs: 0,
  fat: 0
};

export const useStore = create<Store>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  nutritionState: DEFAULT_NUTRITION,
  updateNutrition: (newState) => 
    set((state) => ({
      nutritionState: {
        ...state.nutritionState,
        ...newState
      }
    })),
  resetNutrition: () => set({ nutritionState: DEFAULT_NUTRITION })
}));