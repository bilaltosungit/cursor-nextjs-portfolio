import { Paper, Typography, Box, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  background: isDarkMode ? 'rgba(30, 30, 30, 0.8)' : 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  borderRadius: '12px',
  border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: isDarkMode ? '0 8px 30px rgba(255,255,255,0.12)' : '0 8px 30px rgba(0,0,0,0.12)',
  },
}));

const BlogImage = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '200px',
  overflow: 'hidden',
});

const BlogContent = styled(Box)({
  padding: '20px',
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
});

const BlogTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  fontSize: '1.5rem',
  fontWeight: 600,
  marginBottom: '12px',
  color: isDarkMode ? '#fff' : '#1a237e',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
}));

const BlogExcerpt = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
  marginBottom: '16px',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  flexGrow: 1,
}));

const BlogMeta = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 'auto',
});

const BlogDate = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  color: isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
  fontSize: '0.875rem',
}));

const BlogTag = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'isDarkMode',
})(({ isDarkMode }) => ({
  background: isDarkMode ? '#1E88E5' : '#e3f2fd',
  color: isDarkMode ? '#fff' : '#1a237e',
  '&:hover': {
    background: isDarkMode ? '#1565C0' : '#bbdefb',
  },
}));

export default function BlogPost({ post, isDarkMode }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
      <BlogCard isDarkMode={isDarkMode}>
        <BlogImage>
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </BlogImage>
        <BlogContent>
          <BlogTitle isDarkMode={isDarkMode}>{post.title}</BlogTitle>
          <BlogExcerpt isDarkMode={isDarkMode}>{post.excerpt}</BlogExcerpt>
          <BlogMeta>
            <BlogDate isDarkMode={isDarkMode}>{post.date}</BlogDate>
            <BlogTag 
              label={post.category} 
              isDarkMode={isDarkMode}
              size="small"
            />
          </BlogMeta>
        </BlogContent>
      </BlogCard>
    </Link>
  );
} 