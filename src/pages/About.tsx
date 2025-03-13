
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <div className="bg-imm-primary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">Tentang IMM</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Mengenal lebih dekat Ikatan Mahasiswa Muhammadiyah, visi, misi, dan sejarahnya
            </p>
          </div>
        </div>
        
        <AboutSection />
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-imm-primary mb-8 text-center">
                Struktur Organisasi
              </h2>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="space-y-8">
                  <div className="text-center p-4 border-b pb-8">
                    <h3 className="text-xl font-semibold mb-1">Ketua Umum</h3>
                    <p className="text-gray-600">Ahmad Rizki</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-center p-4 border rounded-lg">
                      <h3 className="text-lg font-semibold mb-1">Sekretaris Umum</h3>
                      <p className="text-gray-600">Siti Aisyah</p>
                    </div>
                    
                    <div className="text-center p-4 border rounded-lg">
                      <h3 className="text-lg font-semibold mb-1">Bendahara Umum</h3>
                      <p className="text-gray-600">Muhammad Faisal</p>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-center mt-4 mb-6">Bidang-Bidang</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <h3 className="text-base font-medium mb-1">Bidang Kaderisasi</h3>
                      <p className="text-gray-600">Fatimah Azzahra</p>
                    </div>
                    
                    <div className="text-center p-4 border rounded-lg">
                      <h3 className="text-base font-medium mb-1">Bidang Hikmah</h3>
                      <p className="text-gray-600">Umar Abdullah</p>
                    </div>
                    
                    <div className="text-center p-4 border rounded-lg">
                      <h3 className="text-base font-medium mb-1">Bidang Riset</h3>
                      <p className="text-gray-600">Zainab Putri</p>
                    </div>
                  </div>
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

export default About;
