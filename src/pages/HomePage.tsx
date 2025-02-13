import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1498654200943-1088dd4438ae?auto=format&fit=crop&q=80"
            alt="Fresh seafood"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl font-bold mb-6">Fresh From The Ocean To Your Plate</h1>
            <p className="text-xl mb-8">
              Discover the finest selection of fresh fish, premium meat, and quality poultry delivered right to your doorstep.
            </p>
            <Link
              to="/products/fish"
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.name}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <Link
                  to={`/products/${category.path}`}
                  className="text-white text-2xl font-bold hover:underline"
                >
                  {category.name}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.weight}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">₹{product.price}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const categories = [
  {
    name: 'Fresh Fish',
    path: 'fish',
    image: 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?auto=format&fit=crop&q=80',
  },
  {
    name: 'Premium Meat',
    path: 'meat',
    image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&q=80',
  },
  {
    name: 'Quality Poultry',
    path: 'poultry',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&q=80',
  },
];

const featuredProducts = [
  {
    id: '1',
    name: 'Fresh Atlantic Salmon',
    weight: '500g',
    price: 799,
    image: 'https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    name: 'Premium Mutton',
    weight: '1kg',
    price: 899,
    image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    name: 'Farm Fresh Chicken',
    weight: '1kg',
    price: 299,
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&q=80',
  },
  {
    id: '4',
    name: 'King Fish Steaks',
    weight: '500g',
    price: 599,
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&q=80',
  },
];