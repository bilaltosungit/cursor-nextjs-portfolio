'use client';

import { Box, Container, Typography, Button, Grid } from '@mui/material';
import AnimatedSection from './AnimatedSection';

export default function HeroSection() {
  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #2563eb 0%, #db2777 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
      },
    }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <AnimatedSection delay={0.2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h1" component="h1" gutterBottom sx={{
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
              }}>
                Hi, I&apos;m [Your Name]
              </Typography>
              <Typography variant="h4" gutterBottom sx={{ opacity: 0.9 }}>
                Frontend Developer
              </Typography>
              <Typography variant="h6" paragraph sx={{ opacity: 0.8, mb: 4 }}>
                I create beautiful and performant web applications using modern technologies.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  href="#projects"
                >
                  View My Work
                </Button>
                <Button
                  variant="outlined"
                  href="#contact"
                  size="large"
                  sx={{ 
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255,255,255,0.1)',
                    }
                  }}
                >
                  Contact Me
                </Button>
              </Box>
            </Grid>
          </AnimatedSection>
        </Grid>
      </Container>
    </Box>
  );
} 