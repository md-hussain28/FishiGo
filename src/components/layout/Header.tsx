import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fish, ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '../../store/useCartStore';

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const items = useCartStore((state) => state.items);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Fish className="h-6 w-6 md:h-8 md:w-8 text-ocean-600" />
            <span className="text-lg md:text-xl font-bold text-gray-900">FishiGo</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link to="/products/fresh-fish" className="text-gray-600 hover:text-ocean-600">Fresh Fish</Link>
            <Link to="/products/shellfish" className="text-gray-600 hover:text-ocean-600">Shellfish</Link>
            <Link to="/products/premium-meat" className="text-gray-600 hover:text-ocean-600">Premium Meat</Link>
            <Link to="/products/poultry" className="text-gray-600 hover:text-ocean-600">Poultry</Link>
          </nav>

          <div className="flex items-center space-x-4 md:space-x-6">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-600 hover:text-ocean-600"
            >
              <Search className="h-5 w-5 md:h-6 md:w-6" />
            </button>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/cart" className="relative">
                <ShoppingCart className="h-5 w-5 md:h-6 md:w-6 text-gray-600" />
                {items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-ocean-600 text-white text-xs rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="hidden md:block">
              <Link to="/profile" className="text-gray-600">
                <User className="h-6 w-6" />
              </Link>
            </motion.div>

            <button
              className="md:hidden text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Search overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg p-4"
          >
            <div className="container mx-auto max-w-2xl">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search for fish, meat, or poultry..."
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-ocean-500 text-sm md:text-base"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <Link
                to="/products/fresh-fish"
                className="block text-gray-600 hover:text-ocean-600 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fresh Fish
              </Link>
              <Link
                to="/products/shellfish"
                className="block text-gray-600 hover:text-ocean-600 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shellfish
              </Link>
              <Link
                to="/products/premium-meat"
                className="block text-gray-600 hover:text-ocean-600 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Premium Meat
              </Link>
              <Link
                to="/products/poultry"
                className="block text-gray-600 hover:text-ocean-600 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Poultry
              </Link>
              <div className="pt-4 border-t flex justify-between">
                <Link
                  to="/profile"
                  className="text-gray-600 text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Profile
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}