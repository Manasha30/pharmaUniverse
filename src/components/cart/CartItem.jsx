import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity) => {
    updateQuantity(item.id, newQuantity);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm border">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-lg"
      />
      
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.category}</p>
        <p className="text-lg font-semibold text-purple-600">₹{item.price}</p>
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <Minus className="h-4 w-4 text-gray-600" />
        </button>
        
        <span className="w-8 text-center font-medium">{item.quantity}</span>
        
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <Plus className="h-4 w-4 text-gray-600" />
        </button>
      </div>
      
      <div className="text-right">
        <p className="font-semibold text-gray-900">
          ₹{(item.price * item.quantity).toFixed(2)}
        </p>
        <button
          onClick={handleRemove}
          className="mt-1 text-red-600 hover:text-red-800 transition-colors"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;