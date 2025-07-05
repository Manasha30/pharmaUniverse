// Mock data for development
const mockMedicines = [
  {
    id: "1",
    name: "Paracetamol 500mg",
    price: 13.50,
    count : 15,
    category: "Pain Relief",
    description:
      "Effective pain relief and fever reducer for headaches, muscle pain, and cold symptoms",
    image:
      "https://static.meds.cvpharmacy.in/wp-content/uploads/2024/07/8014_5084ba5b-f240-4b03-970a-7363a0638016_5084ba5b-f240-4b03-970a-7363a0638016-1.jpg",
    inStock: true,
    prescription: false,
  },
  {
    id: "2",
    name: "Amoxicillin 250mg",
    price: 19.20,
    count : 10,
    category: "Antibiotics",
    description:
      "Broad-spectrum antibiotic for bacterial infections including respiratory tract infections",
    image:
      "https://www.hlhealthcare.co.in/wp-content/uploads/2024/07/HELMOX-625-scaled.jpg",
    inStock: true,
    prescription: true,
  },
  {
    id: "3",
    name: "Vitamin D3 60,000 IU",
    price: 90,
    count: 4,
    category: "Vitamins",
    description:
      "Essential vitamin for bone health, immune system support, and calcium absorption",
    image:
      "https://m.media-amazon.com/images/I/41TmQxq6kTL._SX300_SY300_QL70_FMwebp_.jpg",
    inStock: true,
    prescription: true,
  },
  {
    id: "4",
    name: "Ibuprofen 200mg",
    price: 10.80,
    count: 10,
    category: "Pain Relief",
    description:
      "Anti-inflammatory pain reliever for arthritis, muscle pain, and inflammation",
    image:
      "https://www.ashcroftpharmacy.co.uk/uploads/images/products/large/ashcroft-pharmacy-ibuprofen-400mg-tablets-1740783905Ibuprofen-400mg-Tablets.png",
    inStock: true,
    prescription: false,
  },
  {
    id: "5",
    name: "Omeprazole 20mg",
    price: 64,
    count : 20,
    category: "Digestive Health",
    description:
      "Proton pump inhibitor for acid reflux, heartburn, and stomach ulcer treatment",
    image:
      "https://www.adegenpharma.com/wp-content/uploads/2023/02/OMILESS-20-CAPSULE.jpg",
    inStock: true,
    prescription: true,
  },
  {
    id: "6",
    name: "Cetirizine 10mg",
    price: 28.35,
    count:15,
    category: "Allergy",
    description:
      "Antihistamine for allergy relief including hay fever, hives, and skin allergies",
    image: "https://www.xalmeds.com/cdn/shop/files/IMG_0344.jpg",
    inStock: true,
    prescription: false,
  },
  {
    id: "7",
    name: "Metformin 500mg",
    price: 19.30,
    count: 20,
    category: "Diabetes",
    description: "Type 2 diabetes medication to control blood sugar levels",
    image:
      "https://images.apollo247.in/pub/media/catalog/product/o/k/oka0007_3.jpg",
    inStock: true,
    prescription: true,
  },
  {
    id: "8",
    name: "Aspirin 75mg",
    price: 3.33,
    count:14,
    category: "Cardiovascular",
    description: "Low-dose aspirin for heart attack and stroke prevention",
    image:
      "https://images.apollo247.in/pub/media/catalog/product/E/C/ECO0005_1_1.jpg",
    inStock: true,
    prescription: false,
  },
  {
    id: "9",
    name: "Loratadine 10mg",
    price: 103.50,
    count:10,
    category: "Allergy",
    description:
      "Non-drowsy antihistamine for seasonal allergies and allergic rhinitis",
    image:
      "https://images.apollo247.in/pub/media/catalog/product/l/o/lor0635_3.jpg",
    inStock: false,
    prescription: false,
  },
  {
    id: "10",
    name: "Simvastatin 20mg",
    price: 279.90,
    count:10,
    category: "Cardiovascular",
    description:
      "Cholesterol-lowering medication to reduce risk of heart disease",
    image:
      "https://images.apollo247.in/pub/media/catalog/product/S/I/SIM0015_1_1.jpg",
    inStock: true,
    prescription: true,
  },
  {
    id: "11",
    name: "Multivitamin Complex",
    price: 135,
    count:10,
    category: "Vitamins",
    description:
      "Complete daily multivitamin with essential vitamins and minerals",
    image:
      "https://images.apollo247.in/pub/media/catalog/product/W/B/WBN0008_1-AUG23_1.jpg",
    inStock: true,
    prescription: false,
  },
  {
    id: "12",
    name: "Dextromethorphan Syrup",
    price: 130.50,
    category: "Cough & Cold",
    description: "Cough suppressant syrup for dry, persistent cough relief",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/9/348409940/DJ/VG/SC/557330/dextromethorphan-cough-syrup-1000x1000.jpg",
    inStock: true,
    prescription: false,
  },
  {
    id: "13",
    name: "Thyroxine 100mcg",
    price: 144,
    count: 100,
    category: "Thyroid",
    description: "Thyroid hormone replacement therapy",
    image:
      "https://images.apollo247.in/pub/media/catalog/product/T/H/THY0007_1_1.jpg",
    prescription: true
  },
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