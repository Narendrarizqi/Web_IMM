
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Eye, Pencil, Trash2, Search, Plus, UserPlus } from 'lucide-react';
import { 
  getAllMembers, 
  deleteMember,
  type Member
} from '@/services/memberService';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Members = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const fetchMembers = async () => {
    try {
      setLoading(true);
      const data = await getAllMembers();
      setMembers(data);
    } catch (error) {
      console.error('Error fetching members:', error);
      toast({
        title: 'Error',
        description: 'Gagal memuat data anggota. Silakan coba lagi.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleDeleteMember = async (id: string) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus anggota ini?')) {
      try {
        await deleteMember(id);
        toast({
          title: 'Berhasil',
          description: 'Anggota berhasil dihapus',
        });
        fetchMembers();
      } catch (error) {
        console.error('Error deleting member:', error);
        toast({
          title: 'Error',
          description: 'Gagal menghapus anggota. Silakan coba lagi.',
          variant: 'destructive',
        });
      }
    }
  };

  const filteredMembers = members.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.nim.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.faculty.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Card>
            <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-2xl text-imm-primary">
                  Daftar Anggota IMM
                </CardTitle>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    className="pl-10"
                    placeholder="Cari anggota..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button className="bg-imm-primary hover:bg-imm-secondary">
                  <Link to="/members/create" className="flex items-center">
                    <UserPlus className="mr-2" size={18} />
                    Tambah Anggota
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="text-center py-8">
                  <p>Loading...</p>
                </div>
              ) : filteredMembers.length > 0 ? (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>No.</TableHead>
                        <TableHead>Nama</TableHead>
                        <TableHead>NIM</TableHead>
                        <TableHead>Fakultas</TableHead>
                        <TableHead>Jabatan</TableHead>
                        <TableHead>Aksi</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredMembers.map((member, index) => (
                        <TableRow key={member.id}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell className="font-medium">{member.name}</TableCell>
                          <TableCell>{member.nim}</TableCell>
                          <TableCell>{member.faculty}</TableCell>
                          <TableCell>{member.position}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline" asChild>
                                <Link to={`/members/${member.id}`}>
                                  <Eye size={16} />
                                </Link>
                              </Button>
                              <Button size="sm" variant="outline" asChild>
                                <Link to={`/members/edit/${member.id}`}>
                                  <Pencil size={16} />
                                </Link>
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="text-red-500 hover:text-red-700"
                                onClick={() => handleDeleteMember(member.id)}
                              >
                                <Trash2 size={16} />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p>Tidak ada anggota yang ditemukan</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Members;
