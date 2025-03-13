
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ActivitiesSection from '@/components/ActivitiesSection';

const Activities = () => {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <div className="bg-imm-primary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">Kegiatan IMM</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Berbagai kegiatan yang diselenggarakan oleh Ikatan Mahasiswa Muhammadiyah
            </p>
          </div>
        </div>
        
        <ActivitiesSection />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-imm-primary mb-8 text-center">
              Galeri Kegiatan
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* In a real app, these would be actual images */}
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-200 hover:opacity-90 transition group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-400">Foto Kegiatan 1</p>
                </div>
                <div className="absolute inset-0 bg-imm-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-medium">Darul Arqam Dasar 2023</p>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-200 hover:opacity-90 transition group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-400">Foto Kegiatan 2</p>
                </div>
                <div className="absolute inset-0 bg-imm-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-medium">Kajian Rutin Mingguan</p>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-200 hover:opacity-90 transition group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-400">Foto Kegiatan 3</p>
                </div>
                <div className="absolute inset-0 bg-imm-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-medium">Milad IMM ke-59</p>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-200 hover:opacity-90 transition group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-400">Foto Kegiatan 4</p>
                </div>
                <div className="absolute inset-0 bg-imm-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-medium">Bakti Sosial 2023</p>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-200 hover:opacity-90 transition group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-400">Foto Kegiatan 5</p>
                </div>
                <div className="absolute inset-0 bg-imm-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-medium">Seminar Kepemimpinan</p>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-200 hover:opacity-90 transition group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-400">Foto Kegiatan 6</p>
                </div>
                <div className="absolute inset-0 bg-imm-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-medium">Workshop Kaderisasi</p>
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

export default Activities;
