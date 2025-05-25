import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary-600">PropertyNegotiator</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary-600 transition-colors">
            Home
          </Link>
          <Link to="/properties" className="text-sm font-medium hover:text-primary-600 transition-colors">
            Properties
          </Link>
          <Link to="/services" className="text-sm font-medium hover:text-primary-600 transition-colors">
            Services
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary-600 transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-primary-600 transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button size="sm">
            Get Started
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-b">
          <div className="container py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-sm font-medium p-2 hover:bg-accent rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/properties" 
              className="text-sm font-medium p-2 hover:bg-accent rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Properties
            </Link>
            <Link 
              to="/services" 
              className="text-sm font-medium p-2 hover:bg-accent rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium p-2 hover:bg-accent rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium p-2 hover:bg-accent rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-2 mt-2">
              <Button variant="outline" size="sm">
                Login
              </Button>
              <Button size="sm">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}