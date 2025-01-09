'use client';

import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@/app/ThemeContext';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        zIndex: 2000,
        background: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: `${progress}%`,
          background: isDarkMode 
            ? 'linear-gradient(to right, #4ECDC4, #45B7D1)'
            : 'linear-gradient(to right, #2563eb, #db2777)',
          transition: 'width 0.1s ease-out',
        }}
      />
    </Box>
  );
} 