'use client';
/* eslint-disable no-unused-vars */

import { styled } from '@mui/material/styles';
import { Box, Paper, Button, IconButton, Typography, Container, Chip, ListItem, Grid } from '@mui/material';

// Helper function to filter out isDarkMode prop
const shouldForwardProp = (prop) => prop !== 'isDarkMode';

// Navigation Components
export const NavContainer = styled('nav', {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '8px 0',
}));

export const DesktopNav = styled('div')(({ theme }) => ({
  display: 'none',
  gap: '24px',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

export const NavButton = styled(Button, {
  shouldForwardProp,
})(({ theme, isDarkMode }) => ({
  color: isDarkMode ? '#ffffff' : '#333',
  fontWeight: 500,
  padding: '0 16px',
  '&:hover': {
    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
  },
}));

export const StyledDrawer = {
  display: { xs: 'block', md: 'none' },
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: 240,
    background: 'rgba(30, 30, 30, 0.95)',
    backdropFilter: 'blur(20px)',
    borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
  },
};

export const StyledDrawerListItem = styled(ListItem)({
  cursor: 'pointer',
  justifyContent: 'flex-end',
  textAlign: 'right',
  paddingRight: '24px',
  '&:hover': {
    background: 'linear-gradient(90deg, rgba(255, 51, 102, 0.1), rgba(78, 205, 196, 0.1))',
  },
});

export const DrawerHeader = styled('div', {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  padding: '16px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  borderBottom: isDarkMode 
    ? '1px solid rgba(255, 255, 255, 0.1)' 
    : '1px solid rgba(0, 0, 0, 0.1)',
  background: isDarkMode 
    ? 'rgba(30, 30, 30, 0.95)' 
    : 'rgba(255, 255, 255, 0.95)',
}));

// Hero Section Components
export const HeroSection = styled('section', {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  background: isDarkMode
    ? '#121212'
    : 'linear-gradient(-45deg, #FF3366, #FF6B6B, #4ECDC4, #45B7D1)',
  backgroundSize: isDarkMode ? 'auto' : '400% 400%',
  animation: isDarkMode ? 'none' : 'gradient 15s ease infinite',
  color: 'white',
  padding: '100px 0 80px',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: isDarkMode
      ? 'none'
      : 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.15) 0%, transparent 50%)',
  },
}));

export const HeroContainer = styled(Container)({
  maxWidth: 'xl',
});

export const HeroContent = styled(Grid)({
  alignItems: 'center',
  padding: '0 16px',
});

export const HeroTitle = styled(Typography, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  fontSize: '4rem',
  fontWeight: 700,
  marginBottom: '16px',
  background: isDarkMode
    ? 'linear-gradient(-45deg, #4ECDC4, #45B7D1, #90CAF9, #64B5F6)'
    : 'linear-gradient(-45deg, #FF3366, #FF6B6B, #4ECDC4, #45B7D1)',
  backgroundSize: '300% 300%',
  animation: 'gradient 5s ease infinite',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: isDarkMode ? '0 0 30px rgba(78, 205, 196, 0.3)' : 'none',
}));

export const HeroSubtitle = styled(Typography, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  fontSize: '2.5rem',
  marginBottom: '24px',
  color: isDarkMode ? '#90CAF9' : '#1565C0',
  fontWeight: 500,
}));

export const HeroDescription = styled(Typography, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  fontSize: '1.2rem',
  marginBottom: '32px',
  maxWidth: '800px',
  lineHeight: 1.6,
  color: isDarkMode ? 'rgba(255, 255, 255, 0.87)' : 'inherit',
}));

export const SocialButtons = styled('div')({
  display: 'flex',
  gap: '32px',
  flexWrap: 'wrap',
  marginTop: '32px',
});

export const StyledNavbar = styled('nav', {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  position: 'fixed',
  width: '100%',
  top: 0,
  left: 0,
  background: isDarkMode ? 'rgba(18, 18, 18, 0.8)' : 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(20px)',
  zIndex: 1100,
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  borderBottom: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
}));

export const StyledMobileMenu = styled(IconButton, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  display: 'flex',
  background: isDarkMode 
    ? 'linear-gradient(-45deg, #1E88E5, #1565C0)'
    : 'linear-gradient(-45deg, #FF3366, #FF6B6B)',
  color: 'white',
  '@media (min-width: 900px)': {
    display: 'none',
  },
  '&:hover': {
    background: isDarkMode 
      ? 'linear-gradient(-45deg, #1565C0, #1E88E5)'
      : 'linear-gradient(-45deg, #FF6B6B, #FF3366)',
  },
}));

export const GradientText = styled(Typography, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  color: isDarkMode ? '#4ECDC4' : '#1a237e',
  fontSize: '36px',
  fontWeight: 600,
  marginBottom: '1.5rem',
  transition: 'color 0.3s ease',
}));

export const SocialIconButton = styled(IconButton, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  color: isDarkMode ? '#90CAF9' : '#1E88E5',
  padding: '12px',
  '&:hover': {
    color: isDarkMode ? '#64B5F6' : '#1565C0',
  },
  transition: 'all 0.3s ease',
}));

// Skills Section
export const StyledSkillsSection = styled('section', {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  padding: '80px 0',
  background: isDarkMode 
    ? 'linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 50%, #1a1a1a 100%)'
    : 'linear-gradient(135deg, #F8F9FA 0%, #E3F2FD 50%, #F5F5F5 100%)',
  position: 'relative',
  overflow: 'hidden',
}));

// Common card animation mixin
const cardAnimation = (isDarkMode) => ({
  transform: 'translateY(0)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: isDarkMode 
      ? '0 8px 30px rgba(255,255,255,0.12)' 
      : '0 8px 30px rgba(0,0,0,0.12)',
  }
});

export const SkillsPaper = styled(Paper, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  padding: '1.5rem',
  background: isDarkMode ? 'rgba(30, 30, 30, 0.9)' : 'rgba(255, 255, 255, 0.9)',
  transition: 'all 0.3s ease',
  ...cardAnimation(isDarkMode),
  '@media (max-width: 900px)': {
    display: 'table-cell',
    width: '100%',
  }
}));

export const SkillsTitle = styled(Typography, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  marginBottom: '1rem',
  color: isDarkMode ? '#fff' : '#1a237e',
  fontSize: '24px',
  fontWeight: 600,
}));

export const SkillsContainer = styled('div', {
  shouldForwardProp: (prop) => !['isDarkMode', 'theme'].includes(prop)
})({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginTop: '12px',
});

export const StyledSkillChip = styled(Chip, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  margin: '4px',
  background: isDarkMode 
    ? 'linear-gradient(45deg, #1E88E5, #64B5F6)'
    : 'linear-gradient(45deg, #FF3366, #FF6B6B)',
  color: 'white',
  cursor: 'pointer',
  '&:hover': {
    background: isDarkMode
      ? 'linear-gradient(45deg, #64B5F6, #1E88E5)'
      : 'linear-gradient(45deg, #FF6B6B, #FF3366)',
    transform: 'translateY(-2px)',
  },
  transition: 'all 0.3s ease',
}));

export const ToolChip = styled(Chip, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  margin: '4px',
  backgroundColor: isDarkMode ? '#1E88E5' : '#0d47a1',
  color: 'white',
  '&:hover': {
    backgroundColor: isDarkMode ? '#1565C0' : '#1a237e',
    transform: 'translateY(-2px)',
  },
  transition: 'all 0.3s ease',
  cursor: 'default',
}));

// Experience Section
export const ExperienceSection = styled('div', {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  padding: '120px 0',
  background: isDarkMode
    ? 'linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 50%, #1a1a1a 100%)'
    : 'linear-gradient(135deg, #ffffff 0%, #F8F9FA 100%)',
}));

export const ExperienceCard = styled(Paper, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  padding: '40px',
  marginBottom: '32px',
  transition: 'all 0.3s ease',
  background: isDarkMode ? 'rgba(30, 30, 30, 0.9)' : 'rgba(255, 255, 255, 0.9)',
  borderLeft: '4px solid #4ECDC4',
  color: isDarkMode ? '#ffffff' : 'inherit',
  '&:hover': {
    transform: 'translateY(-4px)',
    borderLeft: '4px solid #FF3366',
    boxShadow: isDarkMode ? '0 8px 30px rgba(255,255,255,0.12)' : '0 8px 30px rgba(0,0,0,0.12)',
  },
}));

export const JobTitle = styled(Typography, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  color: isDarkMode ? '#fff' : '#1a237e',
  marginBottom: '8px',
  fontWeight: 600,
}));

export const CompanyName = styled(Typography, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  color: isDarkMode ? '#90caf9' : '#0d47a1',
  marginBottom: '8px',
}));

export const JobPeriod = styled(Typography, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  color: isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
  marginBottom: '16px',
}));

export const JobDescription = styled(Typography, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  marginBottom: '16px',
  color: isDarkMode ? 'rgba(255, 255, 255, 0.87)' : 'inherit',
}));

export const TechChipsContainer = styled(Box, {
  shouldForwardProp: (prop) => !['isDarkMode', 'theme'].includes(prop)
})({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginTop: '8px',
});

export const TechChip = styled(Chip, {
  shouldForwardProp,
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

// Projects Section
export const ProjectsSection = styled('div', {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  padding: '120px 0',
  background: isDarkMode
    ? 'linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 50%, #1a1a1a 100%)'
    : 'linear-gradient(135deg, #E3F2FD 0%, #F5F5F5 50%, #E3F2FD 100%)',
  position: 'relative',
  overflow: 'hidden',
}));

export const ProjectCard = styled(Paper, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  padding: '40px',
  height: '100%',
  minHeight: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '16px',
  background: isDarkMode ? 'rgba(30, 30, 30, 0.9)' : 'rgba(255, 255, 255, 0.9)',
  borderLeft: '4px solid #4ECDC4',
  ...cardAnimation(isDarkMode),
  '&:hover': {
    borderLeft: '4px solid #FF3366',
  }
}));

export const ProjectTitle = styled(Typography, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  color: isDarkMode ? '#fff' : '#1a237e',
  marginBottom: '8px',
  fontSize: '36px',
  fontWeight: 600,
}));

export const ProjectPeriod = styled(Typography, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  color: isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
  marginBottom: '16px',
}));

export const ProjectDescription = styled(Typography, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  color: isDarkMode ? 'rgba(255, 255, 255, 0.87)' : 'inherit',
  marginBottom: '16px',
  lineHeight: 1.6,
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 4,
  WebkitBoxOrient: 'vertical',
  textOverflow: 'ellipsis',
}));

export const ProjectTechChip = styled(Chip, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  backgroundColor: isDarkMode ? '#1E88E5' : '#e3f2fd',
  color: isDarkMode ? '#fff' : '#1a237e',
  margin: '4px',
  '&:hover': {
    backgroundColor: isDarkMode ? '#1565C0' : '#1a237e',
    color: '#fff',
    transform: 'translateY(-2px)',
  },
  transition: 'all 0.3s ease',
}));

// Education Section
export const EducationSection = styled('section', {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  padding: '80px 0',
  background: isDarkMode 
    ? 'linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 50%, #1a1a1a 100%)'
    : 'linear-gradient(135deg, #F8F9FA 0%, #E3F2FD 50%, #F5F5F5 100%)',
}));

export const EducationCard = styled(Paper, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  padding: '24px',
  marginBottom: '24px',
  background: isDarkMode ? 'rgba(30, 30, 30, 0.8)' : 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  borderRadius: '8px',
  border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
  ...cardAnimation(isDarkMode)
}));

export const EducationTitle = styled(Typography, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  color: isDarkMode ? '#fff' : '#1a237e',
  marginBottom: '8px',
  fontSize: '24px',
  fontWeight: 600,
}));

export const SchoolName = styled(Typography, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  color: isDarkMode ? '#90CAF9' : '#1565c0',
  marginBottom: '8px',
  fontSize: '24px',
  fontWeight: 500,
}));

export const EducationPeriod = styled(Typography, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary',
  fontSize: '0.9rem',
}));

export const AdditionalSkillsCard = styled(Paper, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  padding: '24px',
  marginBottom: '24px',
  background: isDarkMode ? 'rgba(30, 30, 30, 0.8)' : 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  borderRadius: '8px',
  border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: isDarkMode ? '0 8px 30px rgba(255,255,255,0.12)' : '0 8px 30px rgba(0,0,0,0.12)',
    background: isDarkMode ? 'rgba(40, 40, 40, 0.9)' : 'rgba(255, 255, 255, 0.9)',
  },
}));

export const SkillsHeading = styled(Typography, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  color: isDarkMode ? '#fff' : '#1a237e',
  marginBottom: '12px',
  fontSize: '1.1rem',
  fontWeight: 600,
}));

export const SoftSkillChip = styled(Chip, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  margin: '4px',
  background: isDarkMode 
    ? 'linear-gradient(45deg, #1E88E5, #1565C0)'
    : 'linear-gradient(45deg, #FF3366, #FF6B6B)',
  color: 'white',
  '&:hover': {
    background: isDarkMode
      ? 'linear-gradient(45deg, #1565C0, #1E88E5)'
      : 'linear-gradient(45deg, #FF6B6B, #FF3366)',
    transform: 'translateY(-2px)',
  },
  transition: 'all 0.3s ease',
}));

export const LanguageText = styled(Typography, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  color: isDarkMode ? 'rgba(255, 255, 255, 0.87)' : 'text.secondary',
  marginBottom: '8px',
}));

// Contact Section
export const ContactSection = styled('section', {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  padding: '80px 0',
  background: isDarkMode
    ? 'linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%)'
    : 'linear-gradient(135deg, #2563eb 0%, #db2777 100%)',
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
    background: isDarkMode
      ? 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)'
      : 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
  },
}));

export const ContactTitle = styled(Typography, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  fontSize: '36px',
  fontWeight: 600,
  marginBottom: '1.5rem',
  textAlign: 'center',
  color: isDarkMode ? '#4ECDC4' : '#ffffff',
}));

export const ContactContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3rem',
  position: 'relative',
  zIndex: 1
});

export const ContactItem = styled(Box, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
}));

export const ContactLink = styled('a', {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  color: isDarkMode ? '#90CAF9' : '#ffffff',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    color: isDarkMode ? '#64B5F6' : '#e0e0e0',
  },
}));

export const ContactButton = styled(Button)({
  color: 'white',
  minWidth: 'auto',
  padding: '8px',
  '&:hover': {
    color: '#FFD93D',
    transform: 'translateY(-2px)',
    backgroundColor: 'transparent',
  },
  transition: 'all 0.3s ease',
});

export const CursorBadgeContainer = styled(Box)(({ theme }) => ({
  '@keyframes gradient': {
    '0%': {
      backgroundPosition: '0% 50%'
    },
    '50%': {
      backgroundPosition: '100% 50%'
    },
    '100%': {
      backgroundPosition: '0% 50%'
    }
  },
  '@keyframes shine': {
    '0%': {
      backgroundPosition: '0% 50%',
      opacity: 0.9
    },
    '50%': {
      backgroundPosition: '100% 50%',
      opacity: 1
    },
    '100%': {
      backgroundPosition: '0% 50%',
      opacity: 0.9
    }
  },
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 1000,
  padding: '8px 16px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  background: 'linear-gradient(-45deg, #FF3366, #FF6B6B, #4ECDC4, #45B7D1)',
  backgroundSize: '300% 300%',
  animation: 'gradient 5s ease infinite, shine 3s ease-in-out infinite',
  color: 'white',
  borderRadius: '20px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 15px rgba(255, 51, 102, 0.3), 0 0 30px rgba(78, 205, 196, 0.2)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  textDecoration: 'none',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-2px',
    left: '-2px',
    right: '-2px',
    bottom: '-2px',
    background: 'linear-gradient(-45deg, #FF3366, #FF6B6B, #4ECDC4, #45B7D1)',
    backgroundSize: '300% 300%',
    animation: 'gradient 5s ease infinite',
    borderRadius: '22px',
    zIndex: -1,
    opacity: 0.5,
    filter: 'blur(8px)',
  },
  '&:hover': {
    transform: 'translateY(-2px) scale(1.02)',
    boxShadow: '0 8px 30px rgba(255, 51, 102, 0.4), 0 0 50px rgba(78, 205, 196, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    '&::before': {
      opacity: 0.7,
      filter: 'blur(12px)',
    }
  },
}));

export const CursorBadgeText = styled(Typography)({
  fontSize: '0.875rem',
  fontWeight: 600,
  letterSpacing: '0.5px',
  textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
  background: 'linear-gradient(to right, #ffffff, #e0e0e0)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

// Add keyframes for gradient animation
const keyframes = {
  gradient: {
    '0%': {
      backgroundPosition: '0% 50%'
    },
    '50%': {
      backgroundPosition: '100% 50%'
    },
    '100%': {
      backgroundPosition: '0% 50%'
    }
  }
};

export const BackToTopButton = styled(IconButton, {
  shouldForwardProp,
})(({ isDarkMode }) => ({
  position: 'fixed',
  bottom: 80,
  right: 20,
  zIndex: 1000,
  background: isDarkMode ? '#1a1a1a' : '#fff',
  color: isDarkMode ? '#90CAF9' : '#1E88E5',
  border: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
  '&:hover': {
    background: isDarkMode ? '#2c2c2c' : '#f5f5f5',
    transform: 'translateY(-2px)',
  },
  transition: 'all 0.3s ease',
}));