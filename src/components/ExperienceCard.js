'use client';

import { Box, Paper, Typography, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import AnimatedSection from './AnimatedSection';

const StyledPaper = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  padding: '32px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  background: isDarkMode ? 'rgba(30, 30, 30, 0.9)' : 'rgba(255, 255, 255, 0.9)',
  borderLeft: '4px solid #4ECDC4',
  '&:hover': {
    transform: 'translateY(-8px)',
    borderLeft: '4px solid #FF3366',
    boxShadow: isDarkMode ? '0 8px 30px rgba(255,255,255,0.12)' : '0 8px 30px rgba(0,0,0,0.12)',
  },
}));

const JobTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  fontWeight: 600,
  marginBottom: '8px',
  color: isDarkMode ? '#fff' : '#1a237e',
}));

const CompanyName = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  color: isDarkMode ? '#90caf9' : '#0d47a1',
  marginBottom: '8px',
}));

const Period = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  color: isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
  marginBottom: '16px',
}));

const Description = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  color: isDarkMode ? 'rgba(255, 255, 255, 0.87)' : 'inherit',
  marginBottom: '16px',
}));

const TechChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  margin: '4px',
  backgroundColor: isDarkMode ? '#1E88E5' : '#e3f2fd',
  color: isDarkMode ? '#fff' : '#1a237e',
  '&:hover': {
    backgroundColor: isDarkMode ? '#1565C0' : '#1a237e',
    color: '#fff',
    transform: 'translateY(-2px)',
  },
  transition: 'all 0.3s ease',
}));

const ExperienceCard = ({ job, isDarkMode }) => {
  return (
    <AnimatedSection>
      <StyledPaper elevation={3} isDarkMode={isDarkMode}>
        <JobTitle variant="h6" isDarkMode={isDarkMode}>
          {job.title}
        </JobTitle>
        <CompanyName variant="subtitle1" isDarkMode={isDarkMode}>
          {job.company}
        </CompanyName>
        <Period variant="body2" isDarkMode={isDarkMode}>
          {job.period}
        </Period>
        <Description isDarkMode={isDarkMode}>
          {job.description}
        </Description>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {job.technologies.map((tech, index) => (
            <TechChip
              key={index}
              label={tech}
              isDarkMode={isDarkMode}
            />
          ))}
        </Box>
      </StyledPaper>
    </AnimatedSection>
  );
};

export default ExperienceCard; 