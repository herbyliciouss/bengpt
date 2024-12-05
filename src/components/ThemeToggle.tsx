import React from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="flex flex-col items-center justify-center"
    >
      {theme === 'light' ? (
        <SunIcon className="w-6 h-6 text-gray-400" />
      ) : (
        <MoonIcon className="w-6 h-6 text-gray-400" />
      )}
    </motion.button>
  );
};