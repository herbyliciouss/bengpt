import 'regenerator-runtime/runtime';
import { useState, useCallback, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export const useVoiceRecognition = () => {
  const [isListening, setIsListening] = useState(false);
  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({
    clearTranscriptOnListen: true
  });

  const startListening = useCallback(() => {
    setIsListening(true);
    resetTranscript();
    SpeechRecognition.startListening({ 
      continuous: true, 
      language: 'en-US',
      interimResults: false
    });
  }, [resetTranscript]);

  const stopListening = useCallback(() => {
    setIsListening(false);
    SpeechRecognition.stopListening();
  }, []);

  useEffect(() => {
    return () => {
      if (isListening) {
        stopListening();
      }
    };
  }, [isListening, stopListening]);

  return {
    isListening,
    transcript,
    startListening,
    stopListening,
    resetTranscript,
    browserSupportsSpeechRecognition
  };
};