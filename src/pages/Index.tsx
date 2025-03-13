
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ActivitiesSection />
      
      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-imm-primary mb-12 text-center">
            IMM dalam Angka
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-imm-primary mb-2">1964</div>
              <p className="text-gray-600">Tahun Berdiri</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-imm-primary mb-2">500+</div>
              <p className="text-gray-600">Total Anggota</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-imm-primary mb-2">30+</div>
              <p className="text-gray-600">Kegiatan per Tahun</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-imm-primary mb-2">20+</div>
              <p className="text-gray-600">Perguruan Tinggi</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-imm-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bergabung dengan IMM</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Jadilah bagian dari gerakan mahasiswa Islam yang peduli terhadap dinamika akademik, sosial, dan keagamaan
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 bg-white text-imm-primary font-bold rounded-lg hover:bg-gray-100 transition"
          >
            Daftar Sekarang
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
