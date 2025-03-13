
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMemberById, updateMember, type Member } from '@/services/memberService';
import MemberForm from '@/components/MemberForm';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const EditMember = () => {
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

  const handleUpdateMember = async (data: any) => {
    if (!id) return;
    await updateMember(id, data);
  };

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

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6 text-imm-primary text-center">
            Edit Anggota
          </h1>
          
          {member && (
            <MemberForm 
              initialData={member} 
              onSubmit={handleUpdateMember} 
              isEdit={true} 
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditMember;
