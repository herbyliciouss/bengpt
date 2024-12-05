import axios from 'axios';
import { FoodSuggestion } from '../types';

const FOOD_API_BASE_URL = 'https://world.openfoodfacts.org/cgi/search.pl';

export const searchFood = async (query: string): Promise<FoodSuggestion[]> => {
  try {
    const response = await axios.get(FOOD_API_BASE_URL, {
      params: {
        search_terms: query,
        json: 1,
        page_size: 5,
        fields: 'product_name,nutriments'
      }
    });

    if (!response.data?.products?.length) {
      return [];
    }

    return response.data.products
      .filter((product: any) => 
        product.product_name && 
        product.nutriments && 
        product.nutriments['energy-kcal_100g']
      )
      .map((product: any) => ({
        name: product.product_name,
        calories: Math.round(product.nutriments['energy-kcal_100g'] || 0),
        nutrients: {
          protein: Math.round((product.nutriments.proteins_100g || 0) * 10) / 10,
          carbs: Math.round((product.nutriments.carbohydrates_100g || 0) * 10) / 10,
          fat: Math.round((product.nutriments.fat_100g || 0) * 10) / 10
        }
      }));
  } catch (error) {
    console.error('Error fetching food data:', error);
    return [];
  }
};