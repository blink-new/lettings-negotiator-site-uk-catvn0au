import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from 'react-hot-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: 'landlord',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Show success message
    toast.success('Thank you for your enquiry. We will contact you shortly!');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      enquiryType: 'landlord',
      message: '',
    });
    
    setIsSubmitting(false);
  };
  
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team of property experts today
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h3 className="text-xl font-medium text-gray-900 mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="enquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                  Enquiry Type *
                </label>
                <select
                  id="enquiryType"
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                >
                  <option value="landlord">I am a landlord</option>
                  <option value="tenant">I am looking to rent</option>
                  <option value="other">Other enquiry</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full"
                />
              </div>
              
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 bg-primary-700 hover:bg-primary-800 text-white"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 mb-8">
              <h3 className="text-xl font-medium text-gray-900 mb-6">Our Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-primary-600 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-900">Main Office</h4>
                    <p className="text-gray-600">123 Property Lane, London, EC1A 1AA</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-primary-600 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600">020 1234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-primary-600 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">info@premierlets.co.uk</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-primary-600 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-900">Opening Hours</h4>
                    <p className="text-gray-600">Monday to Friday: 9am - 6pm</p>
                    <p className="text-gray-600">Saturday: 10am - 4pm</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="rounded-lg overflow-hidden h-64 bg-gray-200 border border-gray-300">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9050207912896!2d-0.09858668445186047!3d51.51424751771709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b52c7eaaaab%3A0x81740dd29486ae53!2sLondon%20EC1A%201AA%2C%20UK!5e0!3m2!1sen!2sus!4v1620305015098!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;