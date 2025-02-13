import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

export function ProductsPage() {
  const { category } = useParams<{ category: string }>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">{category}</h1>
      
      {/* Filters and Sort */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="w-full md:w-64 bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold mb-4">Filters</h2>
          {/* Add filter components here */}
        </div>
        
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Product Grid */}
            {[1, 2, 3, 4, 5, 6, 8].map((id) => (
              <motion.div
                key={id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&q=80"
                  alt="Product"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Sample Product</h3>
                  <p className="text-gray-600 mb-2">500g</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">₹599</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}