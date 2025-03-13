
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-imm-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">IMM</h3>
            <p className="mb-6">
              Ikatan Mahasiswa Muhammadiyah, organisasi yang bergerak dalam pengkaderan intelektual mahasiswa berbasis nilai-nilai Islam.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-imm-light transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-imm-light transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-imm-light transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tautan</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-imm-light transition">Beranda</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-imm-light transition">Tentang Kami</Link>
              </li>
              <li>
                <Link to="/activities" className="hover:text-imm-light transition">Kegiatan</Link>
              </li>
              <li>
                <Link to="/members" className="hover:text-imm-light transition">Anggota</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-imm-light transition">Kontak</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span>Jl. Contoh No. 123, Kota, Provinsi, Indonesia</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0" />
                <span>+62 123 4567 890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0" />
                <span>info@imm.or.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p>&copy; {currentYear} Ikatan Mahasiswa Muhammadiyah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
