import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, ArrowRight, Shield, Clock, Award } from 'lucide-react';
import MedicineList from '../components/medicines/MedicineList';

const Home = () => {
  const scrollToMedicines = () => {
    const medicinesSection = document.getElementById('medicines-section');
    if (medicinesSection) {
      medicinesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Health, Our Priority
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Find medicines and consult with doctors online
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultations"
                className="inline-flex items-center space-x-2 bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors"
              >
                <Stethoscope className="h-5 w-5" />
                <span>Consult Doctor</span>
              </Link>
              <button 
                onClick={scrollToMedicines}
                className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
              >
                <span>Browse Medicines</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted & Safe</h3>
              <p className="text-gray-600">All medicines are sourced from verified suppliers</p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Get your medicines delivered within 24 hours</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Doctors</h3>
              <p className="text-gray-600">Consult with certified healthcare professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Medicines Section */}
      <section id="medicines-section" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicineList />
        </div>
      </section>
    </div>
  );
};

export default Home;