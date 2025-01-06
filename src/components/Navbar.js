'use client';

import { Container, IconButton, Tabs, Tab, Box } from '@mui/material';
import { useState } from 'react';
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
  const { isDarkMode, toggleTheme } = useTheme();

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    const items = ['about', 'skills', 'experience', 'projects', 'contact'];
    handleNavigation(items[newValue]);
  };

  const handleNavigation = (item) => {
    router.push('/');
    // Wait for next tick to ensure we're on the home page
    setTimeout(() => {
      const element = document.getElementById(item);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
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
                >
                  {item}
                </NavButton>
              ))}
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
            </DesktopNav>

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
              <IconButton
                onClick={toggleTheme}
                sx={{
                  color: isDarkMode ? '#FFD93D' : '#333',
                  padding: '8px',
                }}
              >
                {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Box>
          </NavContainer>
        </Container>
      </StyledNavbar>
    </>
  );
}