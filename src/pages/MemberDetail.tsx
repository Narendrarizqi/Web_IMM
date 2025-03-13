
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getMemberById, type Member } from '@/services/memberService';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Pencil, ChevronLeft, Mail, Phone, MapPin, Calendar, GraduationCap, Briefcase } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const MemberDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [member, setMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const fetchMember = async () => {
      if (!id) {
        navigate('/members');
        return;
      }

      try {
        setLoading(true);
        const data = await getMemberById(id);
        
        if (!data) {
          toast({
            title: 'Error',
            description: 'Anggota tidak ditemukan',
            variant: 'destructive',
          });
          navigate('/members');
          return;
        }
        
        setMember(data);
      } catch (error) {
        console.error('Error fetching member:', error);
        toast({
          title: 'Error',
          description: 'Gagal memuat data anggota',
          variant: 'destructive',
        });
        navigate('/members');
      } finally {
        setLoading(false);
      }
    };

    fetchMember();
  }, [id, navigate, toast]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen pt-20 flex items-center justify-center">
          <p>Loading...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!member) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen pt-20 flex items-center justify-center">
          <p>Anggota tidak ditemukan</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Button variant="outline" onClick={() => navigate('/members')} className="flex items-center">
              <ChevronLeft className="mr-2" size={18} />
              Kembali ke Daftar Anggota
            </Button>
          </div>
          
          <Card className="max-w-3xl mx-auto overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-imm-dark to-imm-primary"></div>
            <CardHeader className="relative pb-0">
              <div className="absolute -top-16 left-6 border-4 border-white rounded-full bg-white">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={member.imageUrl || "/placeholder.svg"} alt={member.name} />
                  <AvatarFallback className="text-2xl bg-imm-light text-white">
                    {member.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="flex justify-end">
                <Button asChild variant="outline" className="flex items-center">
                  <Link to={`/members/edit/${id}`}>
                    <Pencil className="mr-2" size={16} />
                    Edit
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-10">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">{member.name}</h2>
                  <p className="text-gray-500 mt-1">{member.position}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="bg-imm-light/10 p-2 rounded-full">
                      <GraduationCap className="h-5 w-5 text-imm-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">NIM</p>
                      <p>{member.nim}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-imm-light/10 p-2 rounded-full">
                      <Briefcase className="h-5 w-5 text-imm-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Fakultas</p>
                      <p>{member.faculty}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-imm-light/10 p-2 rounded-full">
                      <Calendar className="h-5 w-5 text-imm-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Tahun Bergabung</p>
                      <p>{member.joinYear}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-imm-light/10 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-imm-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p>{member.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-imm-light/10 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-imm-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Telepon</p>
                      <p>{member.phone}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 pt-2">
                  <div className="bg-imm-light/10 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-imm-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Alamat</p>
                    <p>{member.address}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MemberDetail;
