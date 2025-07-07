import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = ({ className = '' }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative flex items-center justify-center w-12 h-6 rounded-full border-2 transition-all duration-300 ${
        isDarkMode 
          ? 'bg-gray-700 border-yellow-400' 
          : 'bg-yellow-100 border-yellow-400'
      } ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className={`absolute w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
          isDarkMode 
            ? 'bg-yellow-400 translate-x-3' 
            : 'bg-yellow-500 -translate-x-3'
        }`}
        layout
      >
        {isDarkMode ? (
          <FaMoon className="text-gray-800 text-xs" />
        ) : (
          <FaSun className="text-white text-xs" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;