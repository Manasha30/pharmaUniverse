import React from 'react';
import { Clock, Star, Users } from 'lucide-react';
import DoctorList from '../components/doctors/DoctorList';

const Consultations = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Online Doctor Consultations
            </h1>
            <p className="text-xl text-teal-100 mb-8">
              Connect with certified healthcare professionals from the comfort of your home
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">24/7 Available</h3>
                <p className="text-teal-100">Book consultations anytime, anywhere</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Doctors</h3>
                <p className="text-teal-100">Highly qualified and experienced professionals</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">50k+ Consultations</h3>
                <p className="text-teal-100">Trusted by thousands of patients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DoctorList />
        </div>
      </section>
    </div>
  );
};

export default Consultations;