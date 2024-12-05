import React from 'react';
import { motion } from 'framer-motion';
import { useVoiceRecognition } from '../hooks/useVoiceRecognition';
import { MicrophoneIcon, StopIcon } from '@heroicons/react/24/solid';

interface VoiceInputProps {
  onTranscriptComplete: (transcript: string) => void;
}

export const VoiceInput: React.FC<VoiceInputProps> = ({ onTranscriptComplete }) => {
  const {
    isListening,
    transcript,
    startListening,
    stopListening,
    browserSupportsSpeechRecognition
  } = useVoiceRecognition();

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="text-red-500 text-center p-4">
        Votre navigateur ne supporte pas la reconnaissance vocale.
      </div>
    );
  }

  const handleToggleListening = () => {
    if (isListening) {
      stopListening();
      if (transcript) {
        onTranscriptComplete(transcript);
      }
    } else {
      startListening();
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={handleToggleListening}
        className={`p-4 rounded-full ${
          isListening ? 'bg-red-500' : 'bg-blue-500'
        } text-white shadow-lg hover:opacity-90 transition-opacity`}
      >
        {isListening ? (
          <StopIcon className="h-8 w-8" />
        ) : (
          <MicrophoneIcon className="h-8 w-8" />
        )}
      </motion.button>
      
      {isListening && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-600 mt-2 text-center"
        >
          {transcript || "Je vous écoute..."}
        </motion.div>
      )}
    </div>
  );
};