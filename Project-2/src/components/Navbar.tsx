import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link } from './Link';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl md:text-2xl font-bold text-orange-500 flex items-center">
            CulinaryDelight
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`hover:text-orange-500 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Home
            </Link>
            <Link to="/recipes" className={`hover:text-orange-500 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Recipes
            </Link>
            <Link to="/chefs" className={`hover:text-orange-500 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Chefs
            </Link>
            <Link to="/about" className={`hover:text-orange-500 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              About
            </Link>
            <div className="relative">
              <input
                type="text"
                placeholder="Search recipes..."
                className="py-1 px-3 pl-8 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 text-sm"
              />
              <Search className="w-4 h-4 absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 focus:outline-none ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white mt-2 p-4 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-800 hover:text-orange-500">
                Home
              </Link>
              <Link to="/recipes" className="text-gray-800 hover:text-orange-500">
                Recipes
              </Link>
              <Link to="/chefs" className="text-gray-800 hover:text-orange-500">
                Chefs
              </Link>
              <Link to="/about" className="text-gray-800 hover:text-orange-500">
                About
              </Link>
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="Search recipes..."
                  className="w-full py-2 px-3 pl-9 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                />
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;