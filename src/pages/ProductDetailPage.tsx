import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="aspect-square rounded-lg overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&q=80"
            alt="Product"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h1 className="text-3xl font-bold">King Fish Steaks</h1>
          
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                />
              ))}
            </div>
            <span className="text-gray-600">(128 reviews)</span>
          </div>

          <div className="text-3xl font-bold">₹599</div>
          
          <div>
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-gray-600">
              Fresh King Fish steaks cut to perfection. Sourced directly from the Arabian Sea.
              Rich in protein and omega-3 fatty acids.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Weight</h3>
            <div className="flex space-x-4">
              <button className="px-4 py-2 border-2 border-blue-600 rounded-full text-blue-600 font-semibold">
                500g
              </button>
              <button className="px-4 py-2 border-2 border-gray-200 rounded-full">
                1kg
              </button>
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="flex-1 bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700">
              Add to Cart
            </button>
            <button className="flex-1 border-2 border-blue-600 text-blue-600 py-3 rounded-full font-semibold hover:bg-blue-50">
              Buy Now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}