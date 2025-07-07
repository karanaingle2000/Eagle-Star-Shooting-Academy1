import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Update document class for global styling
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: {
      // Background colors
      primary: isDarkMode ? '#243c2e' : '#f8fafc',
      secondary: isDarkMode ? '#1a1f1c' : '#ffffff',
      tertiary: isDarkMode ? '#2c3e2f' : '#f1f5f9',
      
      // Text colors
      textPrimary: isDarkMode ? '#ffffff' : '#1e293b',
      textSecondary: isDarkMode ? '#e2e8f0' : '#475569',
      textMuted: isDarkMode ? '#94a3b8' : '#64748b',
      
      // Accent colors (consistent across themes)
      accent: '#d4af37', // Gold/Yellow
      accentHover: '#b8941f',
      
      // Border colors
      border: isDarkMode ? '#374151' : '#e2e8f0',
      borderAccent: isDarkMode ? '#d4af37' : '#d4af37',
      
      // Card backgrounds
      card: isDarkMode ? '#1e2d24' : '#ffffff',
      cardHover: isDarkMode ? '#243c2e' : '#f8fafc',
      
      // Button colors
      buttonPrimary: '#d4af37',
      buttonPrimaryText: '#000000',
      buttonSecondary: isDarkMode ? 'transparent' : 'transparent',
      buttonSecondaryText: '#d4af37',
      
      // Status colors
      success: '#10b981',
      error: '#ef4444',
      warning: '#f59e0b',
      info: '#3b82f6',
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};