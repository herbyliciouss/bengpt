export interface Meal {
  id: string;
  name: string;
  calories: number;
  date: Date;
  userId: string;
  nutrients?: {
    protein: number;
    carbs: number;
    fat: number;
  };
}

export interface User {
  id: string;
  name: string;
  goal: 'lose' | 'maintain' | 'gain';
  dailyCalorieTarget: number;
}

export interface FoodSuggestion {
  name: string;
  calories: number;
  nutrients: {
    protein: number;
    carbs: number;
    fat: number;
  };
}