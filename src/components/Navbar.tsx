
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-imm-primary shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-white font-bold text-xl md:text-2xl">
            IMM
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/">Beranda</NavLink>
          <NavLink to="/about">Tentang</NavLink>
          <NavLink to="/activities">Kegiatan</NavLink>
          <NavLink to="/members">Anggota</NavLink>
          <NavLink to="/contact">Kontak</NavLink>
        </div>

        {/* Login Button (Desktop) */}
        <div className="hidden md:block">
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-imm-primary">
            <Link to="/login">Login</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-imm-primary">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Beranda</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>Tentang</MobileNavLink>
            <MobileNavLink to="/activities" onClick={() => setIsMobileMenuOpen(false)}>Kegiatan</MobileNavLink>
            <MobileNavLink to="/members" onClick={() => setIsMobileMenuOpen(false)}>Anggota</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Kontak</MobileNavLink>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-imm-primary w-full">
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ children, to }: { children: React.ReactNode; to: string }) => (
  <Link to={to} className="text-white font-medium hover:text-white/80 transition">
    {children}
  </Link>
);

const MobileNavLink = ({ 
  children, 
  to, 
  onClick 
}: { 
  children: React.ReactNode; 
  to: string;
  onClick: () => void;
}) => (
  <Link 
    to={to} 
    className="text-white font-medium py-2 block hover:text-white/80 transition"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
