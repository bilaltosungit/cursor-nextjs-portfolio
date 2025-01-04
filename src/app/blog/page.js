'use client';

import { Box, Container, Grid } from '@mui/material';
import { useState } from 'react';
import { useTheme } from '../ThemeContext';
import { GradientText } from '../styles';
import BlogPost from '@/components/BlogPost';
import { blogPosts } from '@/data/blog';

export default function Blog() {
  const { isDarkMode } = useTheme();
  const [posts] = useState(blogPosts);

  return (
    <main style={{
      background: isDarkMode ? '#121212' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#000000',
      transition: 'all 0.3s ease',
      minHeight: '100vh',
      paddingTop: '80px',
    }}>
      <Container maxWidth="xl">
        <Box sx={{ py: 8 }}>
          <GradientText variant="h3" sx={{ mb: 4 }} isDarkMode={isDarkMode}>
            Blog
          </GradientText>
          <Grid container spacing={4}>
            {posts.map((post, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <BlogPost post={post} isDarkMode={isDarkMode} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </main>
  );
} 