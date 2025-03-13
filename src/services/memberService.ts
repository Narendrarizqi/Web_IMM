
// This file simulates API calls to a backend service
// In a real application, this would be connected to PHP backend APIs

export interface Member {
  id: string;
  name: string;
  nim: string; // Student ID Number
  faculty: string;
  position: string;
  joinYear: number;
  email: string;
  phone: string;
  address: string;
  imageUrl?: string;
}

// Mock data for initial display
const mockMembers: Member[] = [
  {
    id: '1',
    name: 'Ahmad Rizki',
    nim: '191010123',
    faculty: 'Fakultas Teknik',
    position: 'Ketua Umum',
    joinYear: 2019,
    email: 'ahmad.rizki@example.com',
    phone: '081234567890',
    address: 'Jl. Contoh No. 123, Jakarta',
    imageUrl: '/placeholder.svg'
  },
  {
    id: '2',
    name: 'Siti Aisyah',
    nim: '202010456',
    faculty: 'Fakultas Ekonomi',
    position: 'Sekretaris Umum',
    joinYear: 2020,
    email: 'siti.aisyah@example.com',
    phone: '087654321098',
    address: 'Jl. Sample No. 456, Bandung',
    imageUrl: '/placeholder.svg'
  },
  {
    id: '3',
    name: 'Muhammad Faisal',
    nim: '192010789',
    faculty: 'Fakultas Hukum',
    position: 'Bendahara Umum',
    joinYear: 2019,
    email: 'muhammad.faisal@example.com',
    phone: '089876543210',
    address: 'Jl. Test No. 789, Surabaya',
    imageUrl: '/placeholder.svg'
  },
  {
    id: '4',
    name: 'Fatimah Azzahra',
    nim: '201010321',
    faculty: 'Fakultas Kedokteran',
    position: 'Ketua Bidang Kaderisasi',
    joinYear: 2020,
    email: 'fatimah.azzahra@example.com',
    phone: '081122334455',
    address: 'Jl. Demo No. 321, Yogyakarta',
    imageUrl: '/placeholder.svg'
  },
];

// Store members in localStorage for persistence across page refreshes
const initializeMembers = () => {
  if (!localStorage.getItem('members')) {
    localStorage.setItem('members', JSON.stringify(mockMembers));
  }
};

// Initialize on service import
initializeMembers();

// Get all members
export const getAllMembers = async (): Promise<Member[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const members = localStorage.getItem('members');
  return members ? JSON.parse(members) : [];
};

// Get member by ID
export const getMemberById = async (id: string): Promise<Member | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const members = await getAllMembers();
  return members.find(member => member.id === id) || null;
};

// Create new member
export const createMember = async (member: Omit<Member, 'id'>): Promise<Member> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const members = await getAllMembers();
  const newMember = {
    ...member,
    id: Date.now().toString(), // Generate a unique ID
  };
  
  localStorage.setItem('members', JSON.stringify([...members, newMember]));
  return newMember;
};

// Update existing member
export const updateMember = async (id: string, updatedMember: Partial<Member>): Promise<Member> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const members = await getAllMembers();
  const memberIndex = members.findIndex(member => member.id === id);
  
  if (memberIndex === -1) {
    throw new Error('Member not found');
  }
  
  const updatedMembers = [...members];
  updatedMembers[memberIndex] = {
    ...updatedMembers[memberIndex],
    ...updatedMember,
  };
  
  localStorage.setItem('members', JSON.stringify(updatedMembers));
  return updatedMembers[memberIndex];
};

// Delete member
export const deleteMember = async (id: string): Promise<void> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 600));
  
  const members = await getAllMembers();
  const updatedMembers = members.filter(member => member.id !== id);
  
  localStorage.setItem('members', JSON.stringify(updatedMembers));
};
