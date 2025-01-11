'use client';

import { Container, IconButton, Tabs, Tab, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '@/app/ThemeContext';
import {
  StyledNavbar,
  NavContainer,
  DesktopNav,
  NavButton,
} from '@/app/styles';

export default function Navbar() {
  const router = useRouter();
  const [value, setValue] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const { isDarkMode, toggleTheme } = useTheme();
  const sections = ['about', 'skills', 'experience', 'projects', 'contact'];

  // Handle scroll position and update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if we're at the bottom of the page
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        setActiveSection('contact');
        setValue(sections.indexOf('contact'));
        return;
      }

      // Otherwise check each section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 100;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            setValue(sections.indexOf(section));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  // Handle mobile tab change
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    const targetSection = sections[newValue];
    const element = document.getElementById(targetSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetSection);
    }
  };

  // Handle desktop navigation
  const handleNavigation = (item) => {
    const sectionIndex = sections.indexOf(item);
    setValue(sectionIndex);
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(item);
    }
  };

  return (
    <>
      <StyledNavbar 
        component="nav" 
        sx={{
          background: isDarkMode ? 'rgba(18, 18, 18, 0.8)' : 'rgba(255, 255, 255, 0.8)',
          borderBottom: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
        }}
      >
        <Container maxWidth="xl">
          <NavContainer>
            {/* Desktop Navigation */}
            <DesktopNav>
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <NavButton
                  key={item}
                  onClick={() => handleNavigation(item.toLowerCase())}
                  isDarkMode={isDarkMode}
                  sx={{
                    color: activeSection === item.toLowerCase() ? 
                      (isDarkMode ? '#4ECDC4' : '#FF3366') : 
                      (isDarkMode ? '#ffffff' : '#333'),
                    borderBottom: activeSection === item.toLowerCase() ? 
                      `2px solid ${isDarkMode ? '#4ECDC4' : '#FF3366'}` : 
                      'none',
                  }}
                >
                  {item}
                </NavButton>
              ))}
            </DesktopNav>

            {/* Theme Toggle */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: 1
            }}>
              <IconButton
                onClick={toggleTheme}
                sx={{
                  color: isDarkMode ? '#FFD93D' : '#333',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(180deg)',
                  },
                }}
              >
                {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Box>

            {/* Mobile Tab Navigation */}
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                width: '100%',
                alignItems: 'center',
                gap: 1,
                overflow: 'hidden'
              }}
            >
              <Box sx={{ 
                flex: 1,
                width: '100%',
                overflowX: 'auto',
                '.MuiTabs-root': {
                  minHeight: '48px',
                },
                '.MuiTabs-scroller': {
                  overflowX: 'auto !important',
                  '::-webkit-scrollbar': {
                    display: 'none'
                  },
                  scrollbarWidth: 'none',
                  WebkitOverflowScrolling: 'touch',
                  touchAction: 'pan-x',
                }
              }}>
                <Tabs
                  value={value}
                  onChange={handleTabChange}
                  variant="scrollable"
                  scrollButtons={false}
                  aria-label="nav tabs"
                  sx={{
                    '& .MuiTab-root': {
                      color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                      textTransform: 'none',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      minWidth: 'auto',
                      padding: '12px 16px',
                      minHeight: '48px',
                      flexShrink: 0,
                    },
                    '& .Mui-selected': {
                      color: isDarkMode ? '#4ECDC4' : '#FF3366',
                    },
                    '& .MuiTabs-indicator': {
                      backgroundColor: isDarkMode ? '#4ECDC4' : '#FF3366',
                    },
                  }}
                >
                  {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                    <Tab key={item} label={item} />
                  ))}
                </Tabs>
              </Box>
            </Box>
          </NavContainer>
        </Container>
      </StyledNavbar>
    </>
  );
}