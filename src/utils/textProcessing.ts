import { foodSynonyms } from '../data/foodSynonyms';
import { commonMeasurements } from '../data/measurements';

export const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ');
};

export const extractQuantityAndUnit = (text: string) => {
  const words = text.split(' ');
  const quantity = words.find(word => !isNaN(Number(word)));
  const unit = words.find(word => 
    commonMeasurements.some(measurement => 
      measurement.aliases.includes(word.toLowerCase())
    )
  );

  return {
    quantity: quantity ? Number(quantity) : 1,
    unit: unit || 'serving'
  };
};

export const findFoodItem = (text: string): string => {
  const normalizedText = normalizeText(text);
  
  // Remove quantity and unit from text
  const { quantity, unit } = extractQuantityAndUnit(normalizedText);
  const cleanedText = normalizedText
    .replace(quantity.toString(), '')
    .replace(unit, '')
    .trim();

  // Check for exact matches first
  const exactMatch = foodSynonyms.find(food => 
    food.aliases.includes(cleanedText)
  );
  
  if (exactMatch) {
    return exactMatch.standardName;
  }

  // Check for partial matches
  const partialMatch = foodSynonyms.find(food =>
    food.aliases.some(alias => cleanedText.includes(alias))
  );

  if (partialMatch) {
    return partialMatch.standardName;
  }

  return cleanedText;
};