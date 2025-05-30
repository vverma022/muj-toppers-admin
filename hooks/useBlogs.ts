import { useQuery } from '@tanstack/react-query';

interface Blog {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  createdAt: string;
}

async function fetchBlogs(): Promise<Blog[]> {
  const response = await fetch('/api/blogs')
  
  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Failed to fetch blogs')
  }

  return response.json()
}

export function useBlogs() {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
    staleTime: 1000 * 60 * 5, // Consider data fresh for 5 minutes
    cacheTime: 1000 * 60 * 30, // Keep data in cache for 30 minutes
  });
} 