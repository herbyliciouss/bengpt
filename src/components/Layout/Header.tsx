import React from 'react';
import { motion } from 'framer-motion';

export const Header: React.FC = () => {
  return (
    <header className="text-center">
      <motion.h1 
        className="text-3xl font-bold text-gray-900 mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Suivi des Calories
      </motion.h1>
      <motion.p 
        className="text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Parlez pour enregistrer vos repas
      </motion.p>
    </header>
  );
};