'use client';

import { Typography } from '@mui/material';

export default function ThemeText({ gradient, children, ...props }) {
  return (
    <Typography
      {...props}
      sx={{
        ...(gradient === 1 && {
          background: 'linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }),
        ...(gradient === 2 && {
          background: 'linear-gradient(135deg, #db2777 0%, #f472b6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }),
        ...props.sx
      }}
    >
      {children}
    </Typography>
  );
} 