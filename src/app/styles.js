'use client';
/* eslint-disable no-unused-vars */

import { styled } from '@mui/material/styles';
import { Box, Paper, Button, IconButton, Typography, Container, Chip, ListItem, Grid } from '@mui/material';

// Navigation Components
export const NavContainer = styled('nav', {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
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
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
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
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
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
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
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
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
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
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  fontSize: '2.5rem',
  marginBottom: '24px',
  color: isDarkMode ? '#90CAF9' : '#1565C0',
  fontWeight: 500,
}));

export const HeroDescription = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
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
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
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
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
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
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode, theme }) => ({
  fontWeight: 700,
  background: isDarkMode
    ? 'linear-gradient(-45deg, #4ECDC4, #45B7D1, #FF3366, #FF6B6B)'
    : 'linear-gradient(-45deg, #FF3366, #FF6B6B, #4ECDC4, #45B7D1)',
  backgroundSize: '300% 300%',
  animation: 'gradient 5s ease infinite',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: isDarkMode ? '0 0 30px rgba(78, 205, 196, 0.3)' : 'none',
}));

export const SocialIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
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
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  padding: '80px 0',
  background: isDarkMode 
    ? 'linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 50%, #1a1a1a 100%)'
    : 'linear-gradient(135deg, #F8F9FA 0%, #E3F2FD 50%, #F5F5F5 100%)',
  position: 'relative',
  overflow: 'hidden',
}));

export const SkillsPaper = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  padding: '24px',
  height: '100%',
  background: isDarkMode ? 'rgba(30, 30, 30, 0.8)' : 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  borderRadius: '8px',
  border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: isDarkMode ? '0 8px 30px rgba(255,255,255,0.12)' : '0 8px 30px rgba(0,0,0,0.12)',
    background: isDarkMode ? 'rgba(40, 40, 40, 0.9)' : 'rgba(255, 255, 255, 0.9)',
  },
}));

export const SkillsTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  marginBottom: '24px',
  color: isDarkMode ? '#fff' : '#1a237e',
  fontSize: '1.5rem',
  fontWeight: 600,
}));

export const SkillsContainer = styled('div', {
  shouldForwardProp: (prop) => !['isDarkMode', 'theme'].includes(prop)
})({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px',
  marginTop: '16px',
});

export const StyledSkillChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  margin: '4px',
  background: isDarkMode 
    ? 'linear-gradient(45deg, #1E88E5, #64B5F6)'
    : 'linear-gradient(45deg, #FF3366, #FF6B6B)',
  color: 'white',
  '&:hover': {
    background: isDarkMode
      ? 'linear-gradient(45deg, #64B5F6, #1E88E5)'
      : 'linear-gradient(45deg, #FF6B6B, #FF3366)',
    transform: 'translateY(-2px)',
  },
  transition: 'all 0.3s ease',
  cursor: 'default',
}));

export const ToolChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
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
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  padding: '120px 0',
  background: isDarkMode
    ? 'linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 50%, #1a1a1a 100%)'
    : 'linear-gradient(135deg, #ffffff 0%, #F8F9FA 100%)',
}));

export const ExperienceCard = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
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
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  color: isDarkMode ? '#fff' : '#1a237e',
  marginBottom: '8px',
  fontWeight: 600,
}));

export const CompanyName = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  color: isDarkMode ? '#90caf9' : '#0d47a1',
  marginBottom: '8px',
}));

export const JobPeriod = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  color: isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
  marginBottom: '16px',
}));

export const JobDescription = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
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

// Projects Section
export const ProjectsSection = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  padding: '120px 0',
  background: isDarkMode
    ? 'linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 50%, #1a1a1a 100%)'
    : 'linear-gradient(135deg, #E3F2FD 0%, #F5F5F5 50%, #E3F2FD 100%)',
  position: 'relative',
  overflow: 'hidden',
}));

export const ProjectCard = styled(Paper)(({ isDarkMode }) => ({
  padding: '40px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '16px',
  background: isDarkMode ? 'rgba(30, 30, 30, 0.9)' : 'rgba(255, 255, 255, 0.9)',
  borderLeft: '4px solid #4ECDC4',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    borderLeft: '4px solid #FF3366',
    boxShadow: isDarkMode 
      ? '0 8px 30px rgba(78, 205, 196, 0.1)'
      : '0 8px 30px rgba(0,0,0,0.12)',
  },
}));

export const ProjectTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  color: isDarkMode ? '#fff' : '#1a237e',
  marginBottom: '8px',
  fontSize: '1.5rem',
  fontWeight: 600,
}));

export const ProjectPeriod = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  color: isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
  marginBottom: '16px',
}));

export const ProjectDescription = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  color: isDarkMode ? 'rgba(255, 255, 255, 0.87)' : 'inherit',
  marginBottom: '16px',
  lineHeight: 1.6,
}));

export const ProjectTechChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
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
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  padding: '80px 0',
  background: isDarkMode 
    ? 'linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 50%, #1a1a1a 100%)'
    : 'linear-gradient(135deg, #F8F9FA 0%, #E3F2FD 50%, #F5F5F5 100%)',
}));

export const EducationCard = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
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
  },
}));

export const EducationTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  color: isDarkMode ? '#fff' : '#1a237e',
  marginBottom: '8px',
  fontWeight: 600,
}));

export const SchoolName = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  color: isDarkMode ? '#90CAF9' : '#1565c0',
  marginBottom: '8px',
  fontWeight: 500,
}));

export const EducationPeriod = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary',
  fontSize: '0.9rem',
}));

export const AdditionalSkillsCard = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  padding: '24px',
  marginBottom: '24px',
  background: isDarkMode ? 'rgba(30, 30, 30, 0.8)' : 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  borderRadius: '8px',
  border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
}));

export const SkillsHeading = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  color: isDarkMode ? '#fff' : '#1a237e',
  marginBottom: '16px',
  fontWeight: 600,
}));

export const SoftSkillChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
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
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  color: isDarkMode ? 'rgba(255, 255, 255, 0.87)' : 'text.secondary',
  marginBottom: '8px',
}));

// Contact Section
export const ContactSection = styled('section', {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  padding: '80px 0',
  background: isDarkMode 
    ? 'linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 50%, #1a1a1a 100%)'
    : 'linear-gradient(135deg, #F8F9FA 0%, #E3F2FD 50%, #F5F5F5 100%)',
  position: 'relative',
}));

export const ContactTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  fontSize: '2.5rem',
  fontWeight: 700,
  marginBottom: '40px',
  textAlign: 'center',
  background: isDarkMode
    ? 'linear-gradient(-45deg, #4ECDC4, #45B7D1, #FF3366, #FF6B6B)'
    : 'linear-gradient(-45deg, #FF3366, #FF6B6B, #4ECDC4, #45B7D1)',
  backgroundSize: '300% 300%',
  animation: 'gradient 5s ease infinite',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: isDarkMode ? '0 0 30px rgba(78, 205, 196, 0.3)' : 'none',
}));

export const ContactContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '32px',
  padding: '0 16px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '24px',
  },
}));

export const ContactItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  padding: '16px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

export const ContactLink = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  color: isDarkMode ? '#90CAF9' : '#1E88E5',
  fontSize: '1.1rem',
  fontWeight: 500,
  textDecoration: 'none',
  '&:hover': {
    color: isDarkMode ? '#64B5F6' : '#1565C0',
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

export const CursorBadgeContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  position: 'fixed',
  bottom: 20,
  right: 20,
  zIndex: 1000,
  padding: '8px 16px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  background: isDarkMode ? '#1a1a1a' : 'linear-gradient(-45deg, #FF3366, #FF6B6B, #4ECDC4, #45B7D1)',
  backgroundSize: '300% 300%',
  animation: isDarkMode ? 'none' : 'gradient 5s ease infinite',
  color: isDarkMode ? '#90CAF9' : 'white',
  borderRadius: '20px',
  cursor: 'pointer',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  backdropFilter: 'blur(10px)',
  boxShadow: isDarkMode ? '0 4px 15px rgba(255,255,255,0.05)' : '0 4px 15px rgba(0,0,0,0.1)',
  border: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.2)',
  textDecoration: 'none',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: isDarkMode ? '0 8px 30px rgba(255,255,255,0.1)' : '0 8px 30px rgba(0,0,0,0.2)',
    border: isDarkMode ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(255,255,255,0.3)',
  },
}));

export const CursorBadgeText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  fontWeight: 500,
  color: isDarkMode ? '#90CAF9' : 'white',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  fontSize: '0.875rem',
}));

export const BackToTopButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
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