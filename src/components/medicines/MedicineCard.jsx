import React from 'react';
import { ShoppingCart, AlertCircle, Lock } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

const MedicineCard = ({ medicine }) => {
  const { addToCart } = useCart();
  const { user } = useAuth();

  const handleAddToCart = () => {
    addToCart(medicine);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={medicine.image}
          alt={medicine.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          {medicine.prescription && (
            <div className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
              <AlertCircle className="h-3 w-3" />
              <span>Prescription</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
            {medicine.name}
          </h3>
          <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
            {medicine.category}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {medicine.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-purple-600">
              ₹{medicine.price}
            </span>
            <span className={`text-xs px-2 py-1 rounded-full ${
              medicine.inStock
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}>
              {medicine.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={!medicine.inStock}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              medicine.inStock
                ? user 
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-gray-400 text-white cursor-not-allowed'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {!user ? (
              <>
                <Lock className="h-4 w-4" />
                <span>Login Required</span>
              </>
            ) : (
              <>
                <ShoppingCart className="h-4 w-4" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicineCard;