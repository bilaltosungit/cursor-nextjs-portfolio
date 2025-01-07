'use client';

import { Box, Paper, Typography, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import AnimatedSection from './AnimatedSection';

const StyledPaper = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  background: isDarkMode ? 'rgba(30, 30, 30, 0.9)' : 'rgba(255, 255, 255, 0.9)',
  borderLeft: '4px solid #4ECDC4',
  '&:hover': {
    transform: 'translateY(-8px)',
    borderLeft: '4px solid #FF3366',
    boxShadow: isDarkMode ? '0 8px 30px rgba(255,255,255,0.12)' : '0 8px 30px rgba(0,0,0,0.12)',
  },
}));

const ImageContainer = styled(Box)({
  position: 'relative',
  paddingTop: '56.25%', // 16:9 aspect ratio
  overflow: 'hidden',
  '& img': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out',
  },
  '&:hover img': {
    transform: 'scale(1.1)',
  },
});

const ContentContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  padding: '24px',
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  color: isDarkMode ? '#fff' : 'inherit',
}));

const StyledTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  color: isDarkMode ? '#fff' : '#1a237e',
}));

const ProjectTitle = styled(StyledTypography)({
  fontSize: '1.5rem',
  fontWeight: 600,
  marginBottom: '8px',
});

const CompanyInfo = styled(StyledTypography, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  color: isDarkMode ? '#4ECDC4' : '#FF3366',
  fontSize: '0.95rem',
  fontWeight: 500,
  marginBottom: '16px',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
}));

const ProjectDescription = styled(StyledTypography, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  color: isDarkMode ? 'rgba(255, 255, 255, 0.87)' : 'inherit',
  marginBottom: '24px',
  fontSize: '0.95rem',
  lineHeight: 1.6,
  flex: 1,
}));

const TechStack = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginTop: 'auto',
});

const StyledChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  backgroundColor: isDarkMode ? '#1E88E5' : '#e3f2fd',
  color: isDarkMode ? '#fff' : '#1a237e',
  '&:hover': {
    backgroundColor: isDarkMode ? '#1565C0' : '#1a237e',
    color: '#fff',
    transform: 'translateY(-2px)',
  },
  transition: 'all 0.3s ease',
}));

const ProjectCard = ({ project, isDarkMode }) => {
  return (
    <AnimatedSection>
      <StyledPaper elevation={3} isDarkMode={isDarkMode}>
        <ImageContainer>
          <img 
            src={project.image} 
            alt={project.title}
            loading="lazy"
          />
        </ImageContainer>
        <ContentContainer isDarkMode={isDarkMode}>
          <ProjectTitle variant="h5" component="div" isDarkMode={isDarkMode}>
            {project.title}
          </ProjectTitle>
          <CompanyInfo component="div" isDarkMode={isDarkMode}>
            {project.companyRef}
            {project.period && (
              <>
                <span style={{ 
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
                  margin: '0 4px'
                }}>•</span>
                <span style={{ 
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                  fontSize: '0.9rem'
                }}>
                  {project.period}
                </span>
              </>
            )}
          </CompanyInfo>
          <ProjectDescription component="div" isDarkMode={isDarkMode}>
            {project.description}
          </ProjectDescription>
          <TechStack>
            {project.technologies.map((tech, index) => (
              <StyledChip
                key={index}
                label={tech}
                isDarkMode={isDarkMode}
                size="small"
              />
            ))}
          </TechStack>
        </ContentContainer>
      </StyledPaper>
    </AnimatedSection>
  );
};

export default ProjectCard; 