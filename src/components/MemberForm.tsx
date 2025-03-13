
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
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
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { type Member } from '@/services/memberService';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(3, { message: 'Nama harus minimal 3 karakter' }),
  nim: z.string().min(5, { message: 'NIM harus valid' }),
  faculty: z.string().min(1, { message: 'Fakultas harus dipilih' }),
  position: z.string().min(1, { message: 'Jabatan harus diisi' }),
  joinYear: z.coerce.number().min(2000, { message: 'Tahun bergabung harus valid' })
    .max(new Date().getFullYear(), { message: 'Tahun tidak boleh melebihi tahun sekarang' }),
  email: z.string().email({ message: 'Email harus valid' }),
  phone: z.string().min(10, { message: 'Nomor telepon harus valid' }),
  address: z.string().min(5, { message: 'Alamat harus diisi' }),
});

type FormValues = z.infer<typeof formSchema>;

interface MemberFormProps {
  initialData?: Member;
  onSubmit: (data: FormValues) => Promise<void>;
  isEdit?: boolean;
}

const MemberForm = ({ initialData, onSubmit, isEdit = false }: MemberFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Initialize form with default values or existing member data
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: '',
      nim: '',
      faculty: '',
      position: '',
      joinYear: new Date().getFullYear(),
      email: '',
      phone: '',
      address: '',
    },
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      setIsSubmitting(true);
      await onSubmit(values);
      toast({
        title: 'Berhasil',
        description: `Anggota berhasil ${isEdit ? 'diperbarui' : 'ditambahkan'}`,
      });
      navigate('/members');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Error',
        description: `Gagal ${isEdit ? 'memperbarui' : 'menambahkan'} anggota. Silakan coba lagi.`,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Preset faculty options
  const faculties = [
    'Fakultas Teknik',
    'Fakultas Ekonomi dan Bisnis',
    'Fakultas Hukum',
    'Fakultas Kedokteran',
    'Fakultas Ilmu Sosial dan Politik',
    'Fakultas Agama Islam',
    'Fakultas Keguruan dan Ilmu Pendidikan',
    'Fakultas Psikologi',
    'Fakultas Farmasi',
  ];

  // Preset position options
  const positions = [
    'Ketua Umum',
    'Wakil Ketua',
    'Sekretaris Umum',
    'Wakil Sekretaris',
    'Bendahara Umum',
    'Wakil Bendahara',
    'Ketua Bidang Kaderisasi',
    'Ketua Bidang Hikmah',
    'Ketua Bidang Riset dan Pengembangan',
    'Anggota',
  ];

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-imm-primary">
          {isEdit ? 'Edit Anggota' : 'Tambah Anggota Baru'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Lengkap</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan nama lengkap" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nim"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>NIM</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan NIM" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="faculty"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fakultas</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih fakultas" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {faculties.map((faculty) => (
                          <SelectItem key={faculty} value={faculty}>
                            {faculty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Jabatan</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih jabatan" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {positions.map((position) => (
                          <SelectItem key={position} value={position}>
                            {position}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="joinYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tahun Bergabung</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="contoh@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nomor Telepon</FormLabel>
                    <FormControl>
                      <Input placeholder="08xxxxxxxxxx" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alamat</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Masukkan alamat lengkap" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <CardFooter className="flex justify-end gap-4 px-0">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/members')}
              >
                Batal
              </Button>
              <Button 
                type="submit" 
                className="bg-imm-primary hover:bg-imm-secondary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Menyimpan...' : isEdit ? 'Perbarui' : 'Simpan'}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default MemberForm;
