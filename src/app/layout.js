'use client';

import { ThemeProvider } from '@/app/ThemeContext';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/images/profile.jpg"
          as="image"
          type="image/jpeg"
        />
      </head>
      <body className={inter.className} style={{ margin: 0, padding: 0 }}>
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 