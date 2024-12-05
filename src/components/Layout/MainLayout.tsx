import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCircleIcon, CalendarIcon, Cog6ToothIcon, MicrophoneIcon, StopIcon } from '@heroicons/react/24/outline';
import { useVoiceRecognition } from '../../hooks/useVoiceRecognition';
import { useFoodTracking } from '../../hooks/useFoodTracking';
import { ThemeToggle } from '../ThemeToggle';
import toast from 'react-hot-toast';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const {
    isListening,
    transcript,
    startListening,
    stopListening,
    browserSupportsSpeechRecognition
  } = useVoiceRecognition();

  const { isProcessing, processVoiceInput } = useFoodTracking();

  const handleVoiceToggle = async () => {
    if (!browserSupportsSpeechRecognition) {
      toast.error('Your browser does not support voice recognition');
      return;
    }

    if (isListening) {
      stopListening();
      if (transcript) {
        await processVoiceInput(transcript);
      }
    } else {
      startListening();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 min-h-screen relative pb-24 transition-colors duration-300">
        <div className="px-4 py-6">
          {children}
        </div>

        <AnimatePresence>
          {isListening && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="fixed bottom-28 left-0 right-0 px-4 z-20 max-w-md mx-auto"
            >
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4 text-center dark:text-white transition-colors duration-300">
                {transcript || "I'm listening..."}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto">
          <div className="flex justify-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleVoiceToggle}
              disabled={isProcessing}
              className={`z-20 -mb-4 w-16 h-16 rounded-full flex items-center justify-center ${
                isListening ? 'bg-red-500' : 'bg-blue-500'
              } shadow-lg hover:opacity-90 transition-colors ${
                isProcessing ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isListening ? (
                <StopIcon className="w-8 h-8 text-white" />
              ) : (
                <MicrophoneIcon className="w-8 h-8 text-white" />
              )}
            </motion.button>
          </div>

          <div className="w-full bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <div className="h-20 px-6 grid grid-cols-4 items-center">
              <button className="flex flex-col items-center justify-center">
                <UserCircleIcon className="w-6 h-6 text-gray-400 dark:text-gray-500" />
              </button>
              <button className="flex flex-col items-center justify-center">
                <CalendarIcon className="w-6 h-6 text-gray-400 dark:text-gray-500" />
              </button>
              <ThemeToggle />
              <button className="flex flex-col items-center justify-center">
                <Cog6ToothIcon className="w-6 h-6 text-gray-400 dark:text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};