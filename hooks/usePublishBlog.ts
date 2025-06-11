import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

interface PublishBlogData {
  title: string;
  content: string;
  category: string;
  tags: string[];
}

interface PublishBlogResponse {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  createdAt: string;
}

export const usePublishBlog = () => {
  const queryClient = useQueryClient();

  return useMutation<PublishBlogResponse, Error, PublishBlogData>({
    mutationFn: async (data) => {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to create blog post');
      }

      return response.json();
    },
    onSuccess: () => {
      // Invalidate relevant queries after successful mutation
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      toast.success('Blog post created successfully!');
    },
    onError: (error) => {
      toast.error(`Failed to create blog post: ${error.message}`);
    },
  });
}; 