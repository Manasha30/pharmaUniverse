import React, { useState, useEffect } from 'react';
import { getMedicines, searchMedicines } from '../../services/api';
import MedicineCard from './MedicineCard';
import SearchBar from '../common/SearchBar';
import Loader from '../common/Loader';

const MedicineList = () => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadMedicines();
  }, []);

  const loadMedicines = async () => {
    setLoading(true);
    try {
      const data = await getMedicines();
      setMedicines(data);
    } catch (error) {
      console.error('Error loading medicines:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      loadMedicines();
    } else {
      setLoading(true);
      try {
        const results = await searchMedicines(query);
        setMedicines(results);
      } catch (error) {
        console.error('Error searching medicines:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const categories = [...new Set(medicines.map(medicine => medicine.category))];

  if (loading) {
    return <Loader message="Loading medicines..." />;
  }

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Browse Medicines</h2>
        <SearchBar 
          onSearch={handleSearch}
          placeholder="Search medicines by name or category..."
          className="mb-4"
        />
        
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleSearch(category)}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {medicines.length > 0 ? (
          medicines.map(medicine => (
            <MedicineCard key={medicine.id} medicine={medicine} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No medicines found</p>
            {searchQuery && (
              <button
                onClick={() => handleSearch('')}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
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

export default MedicineList;