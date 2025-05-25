import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">PremierLets</h3>
            <p className="text-gray-300">Professional property management and lettings services across the UK.</p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Properties</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Landlords</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tenants</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Property Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tenant Finding</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Rent Collection</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Property Maintenance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Legal Compliance</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <div className="flex items-start space-x-3">
              <MapPin className="text-primary-400 mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-300">123 Property Lane, London, EC1A 1AA</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-primary-400 flex-shrink-0" size={18} />
              <span className="text-gray-300">020 1234 5678</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-primary-400 flex-shrink-0" size={18} />
              <span className="text-gray-300">info@premierlets.co.uk</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} PremierLets. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;