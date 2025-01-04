'use client';

import { Container, List, ListItemText, IconButton, Drawer } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '@/app/ThemeContext';
import {
  StyledNavbar,
  NavContainer,
  DesktopNav,
  NavButton,
  StyledDrawer,
  DrawerHeader,
  StyledMobileMenu,
  StyledDrawerListItem,
} from '@/app/styles';

export default function Navbar() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  const handleNavigation = (item) => {
    if (item === 'blog') {
      router.push('/blog');
      setMobileOpen(false);
    } else {
      router.push('/');
      // Wait for next tick to ensure we're on the home page
      setTimeout(() => {
        const element = document.getElementById(item);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setMobileOpen(false);
        }
      }, 100);
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
              {['About', 'Skills', 'Experience', 'Projects', 'Blog', 'Contact'].map((item) => (
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

            {/* Mobile Menu Button */}
            <StyledMobileMenu onClick={handleDrawerToggle} isDarkMode={isDarkMode}>
              <MenuIcon />
            </StyledMobileMenu>
          </NavContainer>
        </Container>
      </StyledNavbar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          ...StyledDrawer,
          '& .MuiDrawer-paper': {
            ...StyledDrawer['& .MuiDrawer-paper'],
            background: isDarkMode ? 'rgba(30, 30, 30, 0.95)' : 'rgba(255, 255, 255, 0.95)',
          }
        }}
      >
        <DrawerHeader isDarkMode={isDarkMode}>
          <StyledMobileMenu onClick={handleDrawerToggle} isDarkMode={isDarkMode}>
            <CloseIcon />
          </StyledMobileMenu>
        </DrawerHeader>
        <List>
          {['About', 'Skills', 'Experience', 'Projects', 'Blog', 'Contact'].map((item) => (
            <StyledDrawerListItem key={item} onClick={() => handleNavigation(item.toLowerCase())}>
              <ListItemText 
                primary={item} 
                sx={{
                  textAlign: 'right',
                  '& .MuiTypography-root': {
                    fontWeight: 500,
                    background: isDarkMode 
                      ? 'linear-gradient(45deg, #4ECDC4, #1E88E5)'
                      : 'linear-gradient(45deg, #FF3366, #4ECDC4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  },
                }}
              />
            </StyledDrawerListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}