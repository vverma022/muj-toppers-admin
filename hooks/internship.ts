import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'sonner';
import { z } from 'zod';


const formSchema = z.object({
  companyName: z.string(),
  mode: z.enum(['remote', 'hybrid', 'on-site']),
  stipendMin: z.number().min(0, 'Minimum stipend must be a positive number'),
  stipendMax: z.number().min(0, 'Maximum stipend must be a positive number'),
  url: z.string().url('Invalid URL format'),
});

type FormData = z.infer<typeof formSchema>;

export function useAddInternship() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: FormData) => {
      const response = await axios.post('/api/add-intern', data); 
      return response.data;
    },
    onSuccess: () => {
        toast.success('Internship added successfully!');
      queryClient.invalidateQueries(['internships']); 
    },
    onError: (error: any) => {
        toast.error('Error adding internship. Please try again.');
      console.error('Error adding internship:', error.response?.data || error.message);
    },
  });
}