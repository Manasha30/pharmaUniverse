import React from 'react';
import { Pill } from 'lucide-react';

const Loader = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-64 space-y-4">
      <div className="relative">
        <Pill className="h-8 w-8 text-purple-600 animate-pulse" />
        <div className="absolute inset-0 h-8 w-8 rounded-full border-2 border-purple-200 border-t-purple-600 animate-spin"></div>
      </div>
      <p className="text-gray-600 text-sm">{message}</p>
    </div>
  );
};

export default Loader;