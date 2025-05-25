import { useState } from 'react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/button';
import { MenuIcon, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-serif font-bold text-primary-800">PremierLets</span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700">
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </Button>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-10">
            <a href="/" className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors">
              Home
            </a>
            <a href="#properties" className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors">
              Properties
            </a>
            <a href="#landlords" className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors">
              Landlords
            </a>
            <a href="#tenants" className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors">
              Tenants
            </a>
            <a href="#about" className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors">
              About Us
            </a>
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Button variant="outline" className="ml-8 whitespace-nowrap text-base font-medium border-primary-600 text-primary-700 hover:bg-primary-50">
              Landlord Login
            </Button>
            <Button className="ml-4 whitespace-nowrap px-6 py-2 text-base font-medium bg-primary-700 text-white hover:bg-primary-800">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className={cn(
        "md:hidden",
        isMenuOpen ? "block" : "hidden"
      )}>
        <div className="pt-2 pb-4 px-5 space-y-1 bg-white">
          <a href="/" className="block py-3 text-base font-medium text-gray-700 hover:text-primary-600 border-b border-gray-100">
            Home
          </a>
          <a href="#properties" className="block py-3 text-base font-medium text-gray-700 hover:text-primary-600 border-b border-gray-100">
            Properties
          </a>
          <a href="#landlords" className="block py-3 text-base font-medium text-gray-700 hover:text-primary-600 border-b border-gray-100">
            Landlords
          </a>
          <a href="#tenants" className="block py-3 text-base font-medium text-gray-700 hover:text-primary-600 border-b border-gray-100">
            Tenants
          </a>
          <a href="#about" className="block py-3 text-base font-medium text-gray-700 hover:text-primary-600 border-b border-gray-100">
            About Us
          </a>
          <div className="pt-4 flex flex-col space-y-3">
            <Button variant="outline" className="w-full justify-center border-primary-600 text-primary-700 hover:bg-primary-50">
              Landlord Login
            </Button>
            <Button className="w-full justify-center bg-primary-700 text-white hover:bg-primary-800">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;