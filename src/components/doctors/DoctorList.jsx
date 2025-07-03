import React, { useState, useEffect } from 'react';
import { getDoctors, searchDoctors } from '../../services/api';
import DoctorCard from './DoctorCard';
import SearchBar from '../common/SearchBar';
import Loader from '../common/Loader';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadDoctors();
  }, []);

  const loadDoctors = async () => {
    setLoading(true);
    try {
      const data = await getDoctors();
      setDoctors(data);
    } catch (error) {
      console.error('Error loading doctors:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      loadDoctors();
    } else {
      setLoading(true);
      try {
        const results = await searchDoctors(query);
        setDoctors(results);
      } catch (error) {
        console.error('Error searching doctors:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const specialties = [...new Set(doctors.map(doctor => doctor.specialty))];

  if (loading) {
    return <Loader message="Loading doctors..." />;
  }

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Find a Doctor</h2>
        <SearchBar 
          onSearch={handleSearch}
          placeholder="Search doctors by name or specialty..."
          className="mb-4"
        />
        
        {/* Specialties */}
        <div className="flex flex-wrap gap-2">
          {specialties.map(specialty => (
            <button
              key={specialty}
              onClick={() => handleSearch(specialty)}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-teal-100 hover:text-teal-700 transition-colors"
            >
              {specialty}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {doctors.length > 0 ? (
          doctors.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No doctors found</p>
            {searchQuery && (
              <button
                onClick={() => handleSearch('')}
                className="mt-4 text-teal-600 hover:text-teal-800 font-medium"
              >
                Clear search
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorList;