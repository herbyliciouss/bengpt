import { useState, useCallback, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { findFoodItem, extractQuantityAndUnit } from '../utils/textProcessing';

export const useSpeechToText = () => {
  const [processedText, setProcessedText] = useState<{
    foodItem: string;
    quantity: number;
    unit: string;
  } | null>(null);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({
    clearTranscriptOnListen: true
  });

  const processTranscript = useCallback((text: string) => {
    const { quantity, unit } = extractQuantityAndUnit(text);
    const foodItem = findFoodItem(text);

    setProcessedText({
      foodItem,
      quantity,
      unit
    });

    return { foodItem, quantity, unit };
  }, []);

  const startListening = useCallback(() => {
    resetTranscript();
    SpeechRecognition.startListening({
      continuous: false,
      language: 'en-US'
    });
  }, [resetTranscript]);

  const stopListening = useCallback(() => {
    SpeechRecognition.stopListening();
    if (transcript) {
      return processTranscript(transcript);
    }
    return null;
  }, [transcript, processTranscript]);

  return {
    isListening: listening,
    transcript,
    processedText,
    startListening,
    stopListening,
    browserSupportsSpeechRecognition
  };
};