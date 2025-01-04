import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/app/ThemeContext';
import Navbar from '@/components/Navbar';
import { CursorBadgeContainer, CursorBadgeText } from '@/app/styles';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Bilal Tosun | Software Developer',
  description: 'Software Developer with expertise in React, Next.js, Angular, and modern web technologies. Experienced in front-end development, UI/UX, and building responsive web applications.',
  keywords: 'Software Developer, React Developer, Next.js, Angular, Frontend Developer, Web Development, JavaScript, TypeScript',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Bilal Tosun Portfolio',
    title: 'Bilal Tosun | Software Developer',
    description: 'Software Developer with expertise in React, Next.js, Angular, and modern web technologies.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bilal Tosun Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bilal Tosun | Software Developer',
    description: 'Software Developer with expertise in React, Next.js, Angular, and modern web technologies.',
    images: ['/images/og-image.jpg'],
    creator: '@bilaltosun',
  },
  manifest: '/site.webmanifest',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Link href="https://cursor.sh" target="_blank" style={{ textDecoration: 'none' }}>
            <CursorBadgeContainer>
              <CursorBadgeText>⚡ Built with Cursor</CursorBadgeText>
            </CursorBadgeContainer>
          </Link>
        </ThemeProvider>
      </body>
    </html>
  );
} 