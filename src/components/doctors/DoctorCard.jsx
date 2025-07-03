import React from 'react';
import { Calendar, Star, Clock, DollarSign } from 'lucide-react';
import { toast } from 'react-toastify';

const DoctorCard = ({ doctor }) => {
  const handleBookConsultation = () => {
    toast.success(`Consultation booked with ${doctor.name}!`);
  };

  const formatNextSlot = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
            <p className="text-teal-600 font-medium">{doctor.specialty}</p>
            <div className="flex items-center space-x-2 mt-1">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600">{doctor.rating}</span>
              </div>
              <span className="text-gray-300">•</span>
              <span className="text-sm text-gray-600">{doctor.experience}</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <DollarSign className="h-4 w-4" />
            <span>Consultation Fee: ${doctor.fee}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Clock className="h-4 w-4" />
            <span>Next Available: {formatNextSlot(doctor.nextSlot)}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            doctor.available
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {doctor.available ? 'Available' : 'Unavailable'}
          </span>
          
          <button
            onClick={handleBookConsultation}
            disabled={!doctor.available}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              doctor.available
                ? 'bg-teal-600 text-white hover:bg-teal-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <Calendar className="h-4 w-4" />
            <span>Book Consultation</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;