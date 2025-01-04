'use client';

import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import AnimatedSection from './AnimatedSection';

const StyledPaper = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  transition: 'transform 0.3s ease-in-out',
  background: isDarkMode ? 'rgba(30, 30, 30, 0.9)' : 'rgba(255, 255, 255, 0.9)',
  '&:hover': {
    transform: 'translateY(-8px)',
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

const ProjectTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  fontWeight: 600,
  marginBottom: '8px',
  color: isDarkMode ? '#fff' : '#1a237e',
}));

const ProjectDescription = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  color: isDarkMode ? 'rgba(255, 255, 255, 0.87)' : 'inherit',
  marginBottom: '16px',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}));

const getPlaceholderImage = (title) => {
  const images = {
    'Digital Tax Office': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2071&auto=format&fit=crop',
    'Videotron\'s Helix TV and Internet Service': 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=2070&auto=format&fit=crop',
    'Tanzania Railways Corporations Ticketing System': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
    'BURULAŞ Fleet Management System': 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop',
  };
  return images[title] || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop';
};

const ProjectCard = ({ project, isDarkMode }) => {
  return (
    <AnimatedSection>
      <StyledPaper elevation={3} isDarkMode={isDarkMode}>
        <ImageContainer>
          <img src={getPlaceholderImage(project.title)} alt={project.title} />
        </ImageContainer>
        <ContentContainer isDarkMode={isDarkMode}>
          <ProjectTitle variant="h6" isDarkMode={isDarkMode}>
            {project.title}
          </ProjectTitle>
          <ProjectDescription isDarkMode={isDarkMode}>
            {project.description}
          </ProjectDescription>
        </ContentContainer>
      </StyledPaper>
    </AnimatedSection>
  );
};

export default ProjectCard; 