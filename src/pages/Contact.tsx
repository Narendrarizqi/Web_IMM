
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
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const formSchema = z.object({
  name: z.string().min(3, { message: 'Nama harus minimal 3 karakter' }),
  email: z.string().email({ message: 'Email harus valid' }),
  subject: z.string().min(5, { message: 'Subjek harus minimal 5 karakter' }),
  message: z.string().min(10, { message: 'Pesan harus minimal 10 karakter' }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(values: FormValues) {
    // In a real app, this would send the form data to a PHP backend
    console.log(values);
    
    toast({
      title: 'Pesan Terkirim',
      description: 'Terima kasih telah menghubungi kami. Kami akan segera membalas pesan Anda.',
    });
    
    form.reset();
  }

  return (
    <>
      <Navbar />
      <div className="pt-16">
        <div className="bg-imm-primary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">Hubungi Kami</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau ingin bergabung dengan IMM
            </p>
          </div>
        </div>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-imm-primary mb-6">Kirim Pesan</h2>
                <Card>
                  <CardContent className="pt-6">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nama</FormLabel>
                              <FormControl>
                                <Input placeholder="Masukkan nama lengkap" {...field} />
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
                                <Input placeholder="contoh@email.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subjek</FormLabel>
                              <FormControl>
                                <Input placeholder="Subjek pesan" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Pesan</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Tulis pesan Anda disini..." 
                                  className="min-h-32" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <Button type="submit" className="bg-imm-primary hover:bg-imm-secondary">
                          Kirim Pesan
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-imm-primary mb-6">Informasi Kontak</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-imm-light/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-imm-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Alamat</h3>
                      <p className="text-gray-600 mt-1">
                        Jl. Contoh No. 123, Kota, Provinsi, Indonesia
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-imm-light/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-imm-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Telepon</h3>
                      <p className="text-gray-600 mt-1">+62 123 4567 890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-imm-light/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-imm-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Email</h3>
                      <p className="text-gray-600 mt-1">info@imm.or.id</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 mt-4 border-t">
                    <h3 className="text-lg font-semibold mb-4">Jam Operasional</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Senin - Jumat</span>
                        <span>09:00 - 17:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sabtu</span>
                        <span>09:00 - 15:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Minggu</span>
                        <span>Tutup</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Map Placeholder */}
                <div className="mt-8 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500">Peta Lokasi</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
