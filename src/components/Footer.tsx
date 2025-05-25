import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary-600 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">PropertyNegotiator</h3>
            <p className="text-sm text-gray-200 mb-4">
              Your trusted partner in property lettings across the UK. We negotiate the best deals for landlords and tenants.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-gray-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-gray-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-gray-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-gray-300" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-gray-300">Home</Link>
              </li>
              <li>
                <Link to="/properties" className="hover:text-gray-300">Properties</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-300">Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-300">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="hover:text-gray-300">Lettings Management</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-300">Rent Negotiation</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-300">Property Marketing</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-300">Tenant Screening</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-300">Legal Compliance</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="text-sm not-italic space-y-2 text-gray-200">
              <p>123 Property Street</p>
              <p>London, SW1 1AA</p>
              <p>United Kingdom</p>
              <p className="pt-2">
                <a href="tel:+441234567890" className="hover:text-gray-300">+44 (0) 123 456 7890</a>
              </p>
              <p>
                <a href="mailto:info@propertynegotiator.co.uk" className="hover:text-gray-300">
                  info@propertynegotiator.co.uk
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} PropertyNegotiator. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-gray-100">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-gray-100">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-gray-100">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}