'use client';

import { Paper, Typography } from '@mui/material';
import AnimatedSection from './AnimatedSection';

export default function SkillCard({ skill, index }) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <Paper 
        elevation={0}
        sx={{ 
          p: 4, 
          textAlign: 'center',
          height: '100%',
          border: '1px solid',
          borderColor: 'grey.200',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-10px)',
            borderColor: 'primary.main',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          },
        }}
      >
        <Typography variant="h1" gutterBottom sx={{ mb: 2 }}>
          {skill.icon}
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          {skill.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {skill.level}
        </Typography>
      </Paper>
    </AnimatedSection>
  );
} 