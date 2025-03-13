
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Temporary background - this would be replaced with an actual image */}
      <div className="absolute inset-0 bg-gradient-to-r from-imm-dark to-imm-primary"></div>
      
      {/* Image overlay - a real image would be loaded here */}
      <div className="absolute inset-0 bg-black/50">
        {/* You'll replace this with an actual image */}
        {/* <img src="/path-to-image.jpg" alt="IMM" className="w-full h-full object-cover" /> */}
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-4">
          Ikatan Mahasiswa Muhammadiyah
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-3xl mb-8">
          Mencetak kader-kader intelektual Islam yang unggul dan berdedikasi
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <Button asChild className="bg-imm-primary hover:bg-imm-secondary text-white px-6 py-2">
            <Link to="/about">Tentang Kami</Link>
          </Button>
          <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-imm-primary px-6 py-2">
            <Link to="/members">Daftar Anggota</Link>
          </Button>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-white"
        >
          <path d="M12 5v14"/>
          <path d="m19 12-7 7-7-7"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
