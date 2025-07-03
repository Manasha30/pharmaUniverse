// Mock data for development
const mockMedicines = [
  {
    id: '1',
    name: 'Paracetamol 500mg',
    price: 25.99,
    category: 'Pain Relief',
    description: 'Effective pain relief and fever reducer for headaches, muscle pain, and cold symptoms',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=300',
    inStock: true,
    prescription: false
  },
  {
    id: '2',
    name: 'Amoxicillin 250mg',
    price: 45.50,
    category: 'Antibiotics',
    description: 'Broad-spectrum antibiotic for bacterial infections including respiratory tract infections',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=300',
    inStock: true,
    prescription: true
  },
  {
    id: '3',
    name: 'Vitamin D3 1000IU',
    price: 32.75,
    category: 'Vitamins',
    description: 'Essential vitamin for bone health, immune system support, and calcium absorption',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=300',
    inStock: true,
    prescription: false
  },
  {
    id: '4',
    name: 'Ibuprofen 200mg',
    price: 18.99,
    category: 'Pain Relief',
    description: 'Anti-inflammatory pain reliever for arthritis, muscle pain, and inflammation',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=300',
    inStock: true,
    prescription: false
  },
  {
    id: '5',
    name: 'Omeprazole 20mg',
    price: 28.50,
    category: 'Digestive Health',
    description: 'Proton pump inhibitor for acid reflux, heartburn, and stomach ulcer treatment',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=300',
    inStock: true,
    prescription: true
  },
  {
    id: '6',
    name: 'Cetirizine 10mg',
    price: 22.25,
    category: 'Allergy',
    description: 'Antihistamine for allergy relief including hay fever, hives, and skin allergies',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=300',
    inStock: true,
    prescription: false
  },
  {
    id: '7',
    name: 'Metformin 500mg',
    price: 35.80,
    category: 'Diabetes',
    description: 'Type 2 diabetes medication to control blood sugar levels',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=300',
    inStock: true,
    prescription: true
  },
  {
    id: '8',
    name: 'Aspirin 75mg',
    price: 15.99,
    category: 'Cardiovascular',
    description: 'Low-dose aspirin for heart attack and stroke prevention',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=300',
    inStock: true,
    prescription: false
  },
  {
    id: '9',
    name: 'Loratadine 10mg',
    price: 19.75,
    category: 'Allergy',
    description: 'Non-drowsy antihistamine for seasonal allergies and allergic rhinitis',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=300',
    inStock: false,
    prescription: false
  },
  {
    id: '10',
    name: 'Simvastatin 20mg',
    price: 42.30,
    category: 'Cardiovascular',
    description: 'Cholesterol-lowering medication to reduce risk of heart disease',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=300',
    inStock: true,
    prescription: true
  },
  {
    id: '11',
    name: 'Multivitamin Complex',
    price: 29.99,
    category: 'Vitamins',
    description: 'Complete daily multivitamin with essential vitamins and minerals',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=300',
    inStock: true,
    prescription: false
  },
  {
    id: '12',
    name: 'Dextromethorphan Syrup',
    price: 16.50,
    category: 'Cough & Cold',
    description: 'Cough suppressant syrup for dry, persistent cough relief',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=300',
    inStock: true,
    prescription: false
  }
];

const mockDoctors = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'General Medicine',
    rating: 4.9,
    experience: '12 years',
    fee: 150,
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300',
    available: true,
    nextSlot: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Cardiology',
    rating: 4.8,
    experience: '15 years',
    fee: 200,
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300',
    available: true,
    nextSlot: '2024-01-15T14:00:00Z'
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Dermatology',
    rating: 4.9,
    experience: '10 years',
    fee: 180,
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300',
    available: true,
    nextSlot: '2024-01-15T11:30:00Z'
  },
  {
    id: '4',
    name: 'Dr. Robert Thompson',
    specialty: 'Orthopedics',
    rating: 4.7,
    experience: '18 years',
    fee: 220,
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300',
    available: true,
    nextSlot: '2024-01-15T16:00:00Z'
  },
  {
    id: '5',
    name: 'Dr. Lisa Wang',
    specialty: 'Pediatrics',
    rating: 4.9,
    experience: '8 years',
    fee: 170,
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300',
    available: true,
    nextSlot: '2024-01-15T09:00:00Z'
  },
  {
    id: '6',
    name: 'Dr. James Wilson',
    specialty: 'Psychiatry',
    rating: 4.6,
    experience: '20 years',
    fee: 250,
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300',
    available: false,
    nextSlot: '2024-01-16T13:00:00Z'
  },
  {
    id: '7',
    name: 'Dr. Maria Garcia',
    specialty: 'Gynecology',
    rating: 4.8,
    experience: '14 years',
    fee: 190,
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300',
    available: true,
    nextSlot: '2024-01-15T15:30:00Z'
  },
  {
    id: '8',
    name: 'Dr. David Kumar',
    specialty: 'Neurology',
    rating: 4.9,
    experience: '16 years',
    fee: 230,
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300',
    available: true,
    nextSlot: '2024-01-15T12:00:00Z'
  }
];

// Simulate API delay for realistic loading experience
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// API functions
export const getMedicines = async () => {
  await delay(800); // Simulate network delay
  return mockMedicines;
};

export const getDoctors = async () => {
  await delay(600); // Simulate network delay
  return mockDoctors;
};

export const searchMedicines = async (query) => {
  await delay(400);
  return mockMedicines.filter(medicine => 
    medicine.name.toLowerCase().includes(query.toLowerCase()) ||
    medicine.category.toLowerCase().includes(query.toLowerCase()) ||
    medicine.description.toLowerCase().includes(query.toLowerCase())
  );
};

export const searchDoctors = async (query) => {
  await delay(400);
  return mockDoctors.filter(doctor => 
    doctor.name.toLowerCase().includes(query.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(query.toLowerCase())
  );
};

// Admin functions (for Week 2 - will be implemented later)
export const addMedicine = async (medicine) => {
  await delay(500);
  return { success: true, message: 'Medicine added successfully' };
};

export const updateMedicine = async (id, medicine) => {
  await delay(500);
  return { success: true, message: 'Medicine updated successfully' };
};

export const deleteMedicine = async (id) => {
  await delay(500);
  return { success: true, message: 'Medicine deleted successfully' };
};

export const addDoctor = async (doctor) => {
  await delay(500);
  return { success: true, message: 'Doctor added successfully' };
};

export const updateDoctor = async (id, doctor) => {
  await delay(500);
  return { success: true, message: 'Doctor updated successfully' };
};

export const deleteDoctor = async (id) => {
  await delay(500);
  return { success: true, message: 'Doctor deleted successfully' };
};