import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { Link } from './Link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">CulinaryDelight</h3>
            <p className="text-gray-400 mb-4">
              Bringing delicious recipes and culinary inspiration to your kitchen every day.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="text-gray-400 hover:text-white transition-colors">
                  Recipes
                </Link>
              </li>
              <li>
                <Link to="/chefs" className="text-gray-400 hover:text-white transition-colors">
                  Meet Our Chefs
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recipe Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/recipes?category=breakfast" className="text-gray-400 hover:text-white transition-colors">
                  Breakfast
                </Link>
              </li>
              <li>
                <Link to="/recipes?category=lunch" className="text-gray-400 hover:text-white transition-colors">
                  Lunch
                </Link>
              </li>
              <li>
                <Link to="/recipes?category=dinner" className="text-gray-400 hover:text-white transition-colors">
                  Dinner
                </Link>
              </li>
              <li>
                <Link to="/recipes?category=dessert" className="text-gray-400 hover:text-white transition-colors">
                  Desserts
                </Link>
              </li>
              <li>
                <Link to="/recipes?diet=vegetarian" className="text-gray-400 hover:text-white transition-colors">
                  Vegetarian
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="text-gray-400 not-italic">
              <p className="mb-2">1234 Cuisine Street</p>
              <p className="mb-2">Foodville, FC 98765</p>
              <p className="mb-2">Email: hello@culinarydelight.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} CulinaryDelight. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-500 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;