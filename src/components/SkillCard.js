'use client';

import { Paper, Typography } from '@mui/material';
import AnimatedSection from './AnimatedSection';

export default function SkillCard({ skill, index }) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <Paper 
        elevation={0}
        sx={{ 
          p: 2.5, 
          textAlign: 'center',
          height: '100%',
          border: '1px solid',
          borderColor: 'grey.200',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            borderColor: 'primary.main',
            boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
          },
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ 
          mb: 1.5,
          fontSize: '2rem'
        }}>
          {skill.icon}
        </Typography>
        <Typography variant="subtitle1" gutterBottom sx={{ 
          fontWeight: 600,
          fontSize: '1rem'
        }}>
          {skill.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
          fontSize: '0.875rem'
        }}>
          {skill.level}
        </Typography>
      </Paper>
    </AnimatedSection>
  );
} 