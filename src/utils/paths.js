export const getImagePath = (path) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/cursor-nextjs-portfolio' : '';
  return `${basePath}${path}`;
}; 