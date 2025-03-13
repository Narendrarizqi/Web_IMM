
import { createMember } from '@/services/memberService';
import MemberForm from '@/components/MemberForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CreateMember = () => {
  const handleCreateMember = async (data: any) => {
    await createMember(data);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6 text-imm-primary text-center">
            Tambah Anggota Baru
          </h1>
          
          <MemberForm onSubmit={handleCreateMember} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateMember;
