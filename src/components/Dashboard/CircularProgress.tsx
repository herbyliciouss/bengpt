import React from 'react';
import { motion } from 'framer-motion';

interface CircularProgressProps {
  value: number;
  total: number;
  color: string;
  label: string;
  unit: string;
  size?: number;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  total,
  color,
  label,
  unit,
  size = 120
}) => {
  const percentage = (value / total) * 100;
  const strokeWidth = size * 0.1; // 10% of size for stroke width
  const radius = (size - strokeWidth) * 0.5;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const center = size / 2;

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <motion.svg
          width={size}
          height={size}
          className="transform -rotate-90"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Background circle */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="#F3F4F6"
            strokeWidth={strokeWidth}
          />
          
          {/* Progress circle */}
          <motion.circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{
              strokeDasharray: circumference,
              transformOrigin: 'center'
            }}
          />
        </motion.svg>
        
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <motion.span
            className="text-2xl font-semibold"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ color }}
          >
            {value}
          </motion.span>
          <motion.span
            className="text-xs text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {unit}
          </motion.span>
        </div>
      </div>
      
      {/* Label below */}
      <motion.span
        className="mt-2 text-sm text-gray-600"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {label}
      </motion.span>
    </div>
  );
};