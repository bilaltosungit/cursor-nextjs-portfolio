'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'inherit',
  },
  palette: {
    primary: {
      main: '#FF3366',
    },
    secondary: {
      main: '#4ECDC4',
    },
  },
});

export default theme; 