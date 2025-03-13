
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, Award, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-imm-primary mb-4">Tentang IMM</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ikatan Mahasiswa Muhammadiyah (IMM) adalah organisasi otonom Muhammadiyah yang bergerak di kalangan mahasiswa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-t-4 border-t-imm-primary hover:shadow-lg transition">
            <CardHeader className="flex flex-col items-center">
              <Book className="h-12 w-12 text-imm-primary mb-4" />
              <CardTitle>Visi</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600">
                Menjadi gerakan mahasiswa Islam yang unggul dalam pengkaderan intelektual untuk mewujudkan masyarakat Islam yang sebenar-benarnya.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-imm-primary hover:shadow-lg transition">
            <CardHeader className="flex flex-col items-center">
              <Award className="h-12 w-12 text-imm-primary mb-4" />
              <CardTitle>Misi</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600">
                <ul className="list-disc text-left pl-5">
                  <li className="mb-2">Mengembangkan potensi keilmuan dan kepemimpinan mahasiswa</li>
                  <li className="mb-2">Menerapkan nilai-nilai Islam dalam kehidupan bermasyarakat</li>
                  <li>Berkontribusi aktif dalam perubahan sosial berbasis Islam</li>
                </ul>
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-imm-primary hover:shadow-lg transition">
            <CardHeader className="flex flex-col items-center">
              <Users className="h-12 w-12 text-imm-primary mb-4" />
              <CardTitle>Nilai-Nilai</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600">
                IMM menjunjung tinggi nilai-nilai keislaman, keilmuan, kemanusiaan, dan kemasyarakatan dalam setiap aktivitas organisasi dan kader.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-imm-primary mb-4">Sejarah Singkat</h3>
          <p className="text-gray-600 mb-4">
            Ikatan Mahasiswa Muhammadiyah didirikan pada tanggal 14 Maret 1964 di Yogyakarta. Organisasi ini lahir sebagai respon terhadap tantangan zaman dan kebutuhan akan gerakan mahasiswa Islam yang progresif.
          </p>
          <p className="text-gray-600">
            Selama lebih dari setengah abad, IMM telah menjadi wadah bagi mahasiswa Muslim untuk mengembangkan potensi intelektual, kepemimpinan, dan kontribusi sosial berbasis nilai-nilai Islam dan Kemuhammadiyahan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
