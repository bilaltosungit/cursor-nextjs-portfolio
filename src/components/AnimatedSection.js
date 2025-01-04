'use client';

import { Box } from '@mui/material';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function AnimatedSection({ children, delay = 0, ...props }) {
  return (
    <Box
      sx={{
        animation: `${fadeIn} 0.5s ease-out ${delay}s`,
        ...props.sx
      }}
      {...props}
    >
      {children}
    </Box>
  );
} 