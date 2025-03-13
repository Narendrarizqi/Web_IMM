
import { Calendar, UserPlus, BookOpen, Globe } from 'lucide-react';

const activities = [
  {
    id: 1,
    title: 'Darul Arqam Dasar (DAD)',
    description: 'Pelatihan dasar untuk kader baru IMM yang memperkenalkan nilai-nilai dasar organisasi dan kemuhammadiyahan.',
    icon: UserPlus,
    date: 'Oktober 2023',
  },
  {
    id: 2,
    title: 'Kajian Rutin Mingguan',
    description: 'Forum diskusi ilmiah yang membahas isu-isu kontemporer dari perspektif Islam.',
    icon: BookOpen,
    date: 'Setiap Jumat',
  },
  {
    id: 3,
    title: 'Milad IMM',
    description: 'Peringatan hari lahir IMM dengan rangkaian kegiatan ilmiah, sosial, dan seni.',
    icon: Calendar,
    date: '14 Maret 2024',
  },
  {
    id: 4,
    title: 'Bakti Sosial',
    description: 'Kegiatan pengabdian masyarakat di daerah yang membutuhkan bantuan.',
    icon: Globe,
    date: 'Desember 2023',
  },
];

const ActivitiesSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="activities">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-imm-primary mb-4">Kegiatan IMM</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Berbagai kegiatan yang diselenggarakan oleh Ikatan Mahasiswa Muhammadiyah untuk pengembangan kader dan kontribusi sosial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity) => (
            <div 
              key={activity.id} 
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition flex items-start gap-4"
            >
              <div className="bg-imm-light/10 rounded-full p-3">
                <activity.icon className="h-8 w-8 text-imm-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                <p className="text-gray-600 mb-3">{activity.description}</p>
                <div className="flex items-center text-imm-secondary">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{activity.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a 
            href="#" 
            className="inline-block px-6 py-3 bg-imm-primary text-white rounded-lg hover:bg-imm-secondary transition"
          >
            Lihat Semua Kegiatan
          </a>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
