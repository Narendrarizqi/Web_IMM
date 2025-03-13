
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

// In a real app, this would connect to the backend PHP authentication
const formSchema = z.object({
  username: z.string().min(3, { message: 'Username harus minimal 3 karakter' }),
  password: z.string().min(6, { message: 'Password harus minimal 6 karakter' }),
});

type FormValues = z.infer<typeof formSchema>;

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock login success - in a real app, this would validate with PHP backend
      if (values.username === 'admin' && values.password === 'password') {
        // Store some token or session indicator
        localStorage.setItem('isLoggedIn', 'true');
        
        toast({
          title: 'Login Berhasil',
          description: 'Selamat datang di portal IMM',
        });
        
        navigate('/members');
      } else {
        toast({
          title: 'Login Gagal',
          description: 'Username atau password salah',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: 'Error',
        description: 'Terjadi kesalahan saat login. Silakan coba lagi.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-imm-primary">IMM Portal Login</CardTitle>
          <CardDescription>
            Masuk ke portal anggota Ikatan Mahasiswa Muhammadiyah
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Masukkan password" {...field} />
                    </FormControl>
                    <FormMessage />
                    <p className="text-sm text-gray-500 mt-1">
                      Hint: username: admin, password: password
                    </p>
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-imm-primary hover:bg-imm-secondary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Memproses...' : 'Login'}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Ikatan Mahasiswa Muhammadiyah
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
