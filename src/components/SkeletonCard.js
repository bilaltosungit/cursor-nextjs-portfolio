'use client';

import { Box, Skeleton } from '@mui/material';
import { useTheme } from '@/app/ThemeContext';

export default function SkeletonCard() {
  const { isDarkMode } = useTheme();

  return (
    <Box
      sx={{
        p: 3,
        background: isDarkMode ? 'rgba(30, 30, 30, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        borderRadius: 2,
        height: '100%',
      }}
    >
      <Skeleton 
        variant="text" 
        width="60%" 
        height={32}
        sx={{ 
          bgcolor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          mb: 1 
        }}
      />
      <Skeleton 
        variant="text" 
        width="40%" 
        height={24}
        sx={{ 
          bgcolor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          mb: 2 
        }}
      />
      <Skeleton 
        variant="rectangular" 
        height={200}
        sx={{ 
          bgcolor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          mb: 2 
        }}
      />
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {[1, 2, 3].map((i) => (
          <Skeleton 
            key={i}
            variant="rounded" 
            width={80} 
            height={32}
            sx={{ 
              bgcolor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
            }}
          />
        ))}
      </Box>
    </Box>
  );
} 