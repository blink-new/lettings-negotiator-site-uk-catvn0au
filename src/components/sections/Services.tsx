import { 
  Home, 
  Search, 
  ClipboardCheck, 
  Wrench, 
  Shield, 
  PiggyBank
} from 'lucide-react';

const services = [
  {
    title: 'Property Management',
    description: 'Complete management of your rental property, including rent collection, maintenance, and tenant queries.',
    icon: <Home className="h-8 w-8 text-primary-600" />,
  },
  {
    title: 'Tenant Finding',
    description: 'Marketing your property, conducting viewings, and vetting potential tenants to find the perfect match.',
    icon: <Search className="h-8 w-8 text-primary-600" />,
  },
  {
    title: 'Legal Compliance',
    description: 'Ensuring your property meets all legal requirements, from safety certificates to deposit protection.',
    icon: <ClipboardCheck className="h-8 w-8 text-primary-600" />,
  },
  {
    title: 'Property Maintenance',
    description: 'Swift response to maintenance issues with our network of trusted contractors and 24/7 emergency services.',
    icon: <Wrench className="h-8 w-8 text-primary-600" />,
  },
  {
    title: 'Guaranteed Rent',
    description: 'Option for guaranteed rental income, regardless of tenant payment or void periods.',
    icon: <PiggyBank className="h-8 w-8 text-primary-600" />,
  },
  {
    title: 'Deposit Protection',
    description: 'Secure handling of tenant deposits in accordance with government-approved schemes.',
    icon: <Shield className="h-8 w-8 text-primary-600" />,
  },
];

const Services = () => {
  return (
    <section id="landlords" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive property management and letting services for landlords across the UK
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary-200"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 p-8 rounded-lg border border-gray-200">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">Are you a landlord?</h3>
                <p className="text-gray-600">
                  Learn how we can help maximize your rental income with minimal stress. Our professional property management services are designed to make being a landlord simpler and more profitable.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a 
                  href="#contact" 
                  className="inline-block px-6 py-3 bg-primary-700 text-white font-medium rounded-md hover:bg-primary-800 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;