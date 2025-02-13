import React from 'react';
import { Fish, Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-ocean-900 text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Fish className="h-6 w-6 md:h-8 md:w-8 text-ocean-400" />
              <span className="text-lg md:text-xl font-bold">FishiGo</span>
            </div>
            <p className="text-ocean-100 text-sm md:text-base">
              Fresh fish and seafood delivered to your doorstep. Quality you can trust.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2 text-ocean-100 text-sm">
                <Phone className="h-4 w-4" />
                <span>+91 1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-ocean-100 text-sm">
                <Mail className="h-4 w-4" />
                <span>support@fishigo.com</span>
              </div>
              <div className="flex items-center space-x-2 text-ocean-100 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products/fresh-fish" className="text-ocean-100 hover:text-white">
                  Fresh Fish
                </Link>
              </li>
              <li>
                <Link to="/products/shellfish" className="text-ocean-100 hover:text-white">
                  Shellfish
                </Link>
              </li>
              <li>
                <Link to="/products/premium-meat" className="text-ocean-100 hover:text-white">
                  Premium Meat
                </Link>
              </li>
              <li>
                <Link to="/products/poultry" className="text-ocean-100 hover:text-white">
                  Poultry
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-ocean-100 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-ocean-100 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-ocean-100 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-ocean-100 hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-ocean-100 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="bg-ocean-800 p-2 rounded-full text-ocean-100 hover:text-white hover:bg-ocean-700"
              >
                <Facebook className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                href="#"
                className="bg-ocean-800 p-2 rounded-full text-ocean-100 hover:text-white hover:bg-ocean-700"
              >
                <Twitter className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                href="#"
                className="bg-ocean-800 p-2 rounded-full text-ocean-100 hover:text-white hover:bg-ocean-700"
              >
                <Instagram className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-sm md:text-base">Download Our App</h4>
              <div className="space-y-2">
                <button className="w-full bg-ocean-800 text-ocean-100 px-4 py-2 rounded-lg hover:bg-ocean-700 text-sm">
                  App Store
                </button>
                <button className="w-full bg-ocean-800 text-ocean-100 px-4 py-2 rounded-lg hover:bg-ocean-700 text-sm">
                  Play Store
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-ocean-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-ocean-100 text-sm">
          <p>&copy; {new Date().getFullYear()} FishiGo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}