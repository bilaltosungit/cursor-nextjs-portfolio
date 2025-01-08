'use client';

import { Box, Container, Typography, Button, Grid, IconButton } from '@mui/material';
import { useTheme } from '@/app/ThemeContext';
import { resumeData } from '@/data/resume';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

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
              color: isDarkMode ? '#4ECDC4' : '#ffffff',
              fontSize: { xs: '2rem', md: '2.8rem' },
              fontWeight: 600,
              transition: 'all 0.3s ease',
            }}>
              {personalInfo.name}
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ 
              opacity: 0.9,
              color: isDarkMode ? '#90CAF9' : '#ffffff',
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              marginBottom: '1rem',
              transition: 'color 0.3s ease',
            }}>
              {personalInfo.title}
            </Typography>

            {/* Social Media Icons */}
            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              marginBottom: '1.5rem',
              '& a': {
                color: 'white',
                transition: 'transform 0.3s ease, color 0.3s ease',
                '&:hover': {
                  color: isDarkMode ? '#4ECDC4' : '#FFD93D',
                  transform: 'translateY(-2px)',
                }
              }
            }}>
              <Link href="https://linkedin.com/in/bilaltosundev" target="_blank" rel="noopener noreferrer">
                <IconButton sx={{ color: 'inherit' }}>
                  <LinkedInIcon />
                </IconButton>
              </Link>
              <Link href="https://github.com/bilaltosungit" target="_blank" rel="noopener noreferrer">
                <IconButton sx={{ color: 'inherit' }}>
                  <GitHubIcon />
                </IconButton>
              </Link>
              <Link href="https://bilaltosundev.medium.com" target="_blank" rel="noopener noreferrer">
                <IconButton sx={{ color: 'inherit' }}>
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  </svg>
                </IconButton>
              </Link>
            </Box>

            <Typography 
              variant="body1" 
              sx={{ 
                opacity: 0.9,
                color: isDarkMode ? 'rgba(255, 255, 255, 0.87)' : '#ffffff',
                fontSize: '1rem',
                lineHeight: 1.6,
                maxWidth: '700px',
                marginBottom: '2rem',
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
                    : 'linear-gradient(135deg, #2563eb 0%, #db2777 100%)',
                  backgroundSize: '200% auto',
                  color: 'white',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: isDarkMode 
                      ? 'linear-gradient(to right, #45B7D1, #4ECDC4)'
                      : 'linear-gradient(135deg, #db2777 0%, #2563eb 100%)',
                    backgroundPosition: 'right center',
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
                  borderColor: isDarkMode ? '#4ECDC4' : '#ffffff',
                  color: isDarkMode ? '#4ECDC4' : '#ffffff',
                  borderWidth: '2px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: isDarkMode ? '#45B7D1' : '#ffffff',
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