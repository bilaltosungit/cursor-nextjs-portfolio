'use client';

import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { useTheme } from '@/app/ThemeContext';
import { resumeData } from '@/data/resume';

export default function HeroSection() {
  const { isDarkMode } = useTheme();
  const { personalInfo } = resumeData;

  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: isDarkMode 
        ? 'linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%)'
        : 'linear-gradient(135deg, #2563eb 0%, #db2777 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      transition: 'background 0.3s ease',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: isDarkMode
          ? 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)'
          : 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        transition: 'background 0.3s ease',
      },
    }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography variant="h1" component="h1" gutterBottom sx={{
              color: '#ffffff',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 600,
              background: isDarkMode
                ? 'linear-gradient(to right, #4ECDC4, #45B7D1)'
                : 'none',
              WebkitBackgroundClip: isDarkMode ? 'text' : 'none',
              WebkitTextFillColor: isDarkMode ? 'transparent' : '#ffffff',
              transition: 'all 0.3s ease',
            }}>
              {personalInfo.name}
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ 
              opacity: 0.9,
              color: isDarkMode ? '#90CAF9' : '#ffffff',
              marginBottom: '1.5rem',
              transition: 'color 0.3s ease',
            }}>
              {personalInfo.title}
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                opacity: 0.9,
                color: isDarkMode ? 'rgba(255, 255, 255, 0.87)' : '#ffffff',
                fontSize: '1.1rem',
                lineHeight: 1.8,
                maxWidth: '800px',
                marginBottom: '2.5rem',
                textAlign: 'justify',
                transition: 'color 0.3s ease',
              }}
            >
              {personalInfo.summary}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                size="large"
                href="#projects"
                sx={{
                  background: isDarkMode 
                    ? 'linear-gradient(to right, #4ECDC4, #45B7D1)'
                    : '#9333ea',
                  color: 'white',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: isDarkMode 
                      ? 'linear-gradient(to right, #45B7D1, #4ECDC4)'
                      : '#7e22ce',
                    transform: 'translateY(-2px)',
                  }
                }}
              >
                View My Work
              </Button>
              <Button
                variant="outlined"
                href="#contact"
                size="large"
                sx={{ 
                  borderColor: isDarkMode ? '#4ECDC4' : 'white',
                  color: isDarkMode ? '#4ECDC4' : 'white',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: isDarkMode ? '#45B7D1' : 'white',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-2px)',
                  }
                }}
              >
                Contact Me
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 