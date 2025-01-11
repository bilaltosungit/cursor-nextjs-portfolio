'use client';

import { Box, Paper, Typography, Chip, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AnimatedSection from './AnimatedSection';
import Image from 'next/image';

const StyledAccordion = styled(Accordion, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  background: isDarkMode ? 'rgba(30, 30, 30, 0.9)' : 'rgba(255, 255, 255, 0.9)',
  boxShadow: isDarkMode ? '0 4px 20px rgba(255,255,255,0.08)' : '0 4px 20px rgba(0,0,0,0.08)',
  marginBottom: '16px',
  borderRadius: '8px',
  borderLeft: '4px solid #4ECDC4',
  transition: 'all 0.3s ease',
  '&:before': {
    display: 'none',
  },
  '@media (min-width: 900px)': {
    display: 'none',
  },
  '&.Mui-expanded': {
    borderLeft: '4px solid #FF3366',
  },
  '& .MuiAccordionSummary-root': {
    padding: '16px',
    borderRadius: '8px',
  },
  '& .MuiAccordionDetails-root': {
    padding: '0 16px 16px 16px',
  },
}));

const StyledPaper = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  background: isDarkMode ? 'rgba(30, 30, 30, 0.9)' : 'rgba(255, 255, 255, 0.9)',
  borderLeft: '4px solid #4ECDC4',
  '@media (max-width: 900px)': {
    display: 'none',
  },
  '&:hover': {
    transform: 'translateY(-8px)',
    borderLeft: '4px solid #FF3366',
    boxShadow: isDarkMode ? '0 8px 30px rgba(255,255,255,0.12)' : '0 8px 30px rgba(0,0,0,0.12)',
  },
}));

const ProjectTitle = styled(Typography, {
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

const ImageContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '200px',
  marginBottom: '16px',
  overflow: 'hidden',
  borderRadius: '8px',
  '& img': {
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
});

export default function ProjectCard({ project, index, isDarkMode }) {
  const MobileView = () => (
    <StyledAccordion 
      isDarkMode={isDarkMode}
      aria-label={`Project: ${project.title}`}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: isDarkMode ? '#fff' : '#1a237e' }} />}
        aria-controls={`project-${index}-content`}
        id={`project-${index}-header`}
      >
        <Box>
          <ProjectTitle variant="h6" isDarkMode={isDarkMode}>{project.title}</ProjectTitle>
          <CompanyName variant="subtitle1" isDarkMode={isDarkMode}>{project.companyRef}</CompanyName>
          <Period variant="body2" isDarkMode={isDarkMode}>
            {project.period}
          </Period>
        </Box>
      </AccordionSummary>
      <AccordionDetails
        id={`project-${index}-content`}
        aria-labelledby={`project-${index}-header`}
      >
        <ImageContainer>
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title} project`}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            priority={index < 2}
          />
        </ImageContainer>
        <Typography 
          variant="body1" 
          sx={{ 
            mb: 2,
            color: isDarkMode ? 'rgba(255, 255, 255, 0.87)' : 'inherit',
          }}
        >
          {project.description}
        </Typography>
        <Box 
          sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}
          aria-label="Technologies used"
        >
          {project.technologies.map((tech) => (
            <TechChip
              key={tech}
              label={tech}
              isDarkMode={isDarkMode}
              aria-label={`Technology: ${tech}`}
            />
          ))}
        </Box>
      </AccordionDetails>
    </StyledAccordion>
  );

  const DesktopView = () => (
    <StyledPaper 
      isDarkMode={isDarkMode}
      aria-label={`Project: ${project.title}`}
      role="article"
    >
      <Box sx={{ p: 3 }}>
        <ProjectTitle variant="h6" isDarkMode={isDarkMode}>{project.title}</ProjectTitle>
        <CompanyName variant="subtitle1" isDarkMode={isDarkMode}>{project.companyRef}</CompanyName>
        <Period variant="body2" isDarkMode={isDarkMode} aria-label={`Project period: ${project.period}`}>
          {project.period}
        </Period>
        <ImageContainer>
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title} project`}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            priority={index < 2}
          />
        </ImageContainer>
        <Typography 
          variant="body1" 
          sx={{ 
            mb: 2,
            color: isDarkMode ? 'rgba(255, 255, 255, 0.87)' : 'inherit',
          }}
        >
          {project.description}
        </Typography>
        <Box 
          sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}
          aria-label="Technologies used"
        >
          {project.technologies.map((tech) => (
            <TechChip
              key={tech}
              label={tech}
              isDarkMode={isDarkMode}
              aria-label={`Technology: ${tech}`}
            />
          ))}
        </Box>
      </Box>
    </StyledPaper>
  );

  return (
    <AnimatedSection delay={index * 0.1}>
      <Box role="region" aria-label="Project details">
        <MobileView />
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <DesktopView />
        </Box>
      </Box>
    </AnimatedSection>
  );
} 