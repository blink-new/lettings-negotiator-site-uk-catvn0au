import { MapPin, Phone, Mail, Award, Users, Shield, Building } from 'lucide-react';
import { testimonials } from '../lib/data';

export function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About PropertyNegotiator
            </h1>
            <p className="text-xl leading-relaxed">
              We're a team of property experts dedicated to helping landlords and tenants 
              navigate the UK rental market with confidence and success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="PropertyNegotiator team" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                PropertyNegotiator was founded in 2008 by a group of property professionals who recognized 
                a gap in the market for dedicated negotiation services. We saw that both landlords and tenants 
                were often navigating complex negotiations without expert support, leading to suboptimal outcomes for all parties.
              </p>
              <p className="text-gray-600 mb-4">
                Starting with just three negotiators in a small London office, we've grown to become the UK's 
                leading property negotiation service, with a nationwide team of experts helping thousands 
                of clients secure better deals every year.
              </p>
              <p className="text-gray-600">
                Our mission remains the same today as when we started: to create fair, transparent, and 
                successful property agreements that benefit both landlords and tenants through professional negotiation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600">
              Our core values guide everything we do and define how we work with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every negotiation, aiming to exceed client expectations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We believe in collaborative negotiations that create win-win outcomes for all parties.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We conduct all business with honesty, transparency, and the highest ethical standards.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expertise</h3>
              <p className="text-gray-600">
                We maintain deep market knowledge and continuously develop our negotiation skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-gray-600">
              Our experienced leadership team brings decades of property expertise to every client relationship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-600 mb-4">{member.position}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">
              Don't just take our word for it - hear from some of the landlords and tenants we've helped.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <img 
                    src={testimonial.imageUrl} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600">
              We'd love to hear from you. Contact us to discuss how we can help with your property needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <address className="text-gray-600 not-italic">
                <p>123 Property Street</p>
                <p>London, SW1 1AA</p>
                <p>United Kingdom</p>
              </address>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">
                <a href="tel:+441234567890" className="hover:text-primary-600">
                  +44 (0) 123 456 7890
                </a>
              </p>
              <p className="text-gray-600 mt-2">
                Monday - Friday: 9am - 6pm<br />
                Saturday: 10am - 4pm<br />
                Sunday: Closed
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">
                <a href="mailto:info@propertynegotiator.co.uk" className="hover:text-primary-600">
                  info@propertynegotiator.co.uk
                </a>
              </p>
              <p className="text-gray-600 mt-4">
                We aim to respond to all inquiries within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const teamMembers = [
  {
    id: '1',
    name: 'Sarah Williams',
    position: 'CEO & Founder',
    bio: 'With over 20 years in property management and negotiation, Sarah founded PropertyNegotiator to transform how rental agreements are made in the UK market.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'James Thompson',
    position: 'Operations Director',
    bio: 'James oversees our nationwide operations, ensuring consistent quality and excellent service delivery across all regions and property types.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    name: 'Priya Patel',
    position: 'Head of Negotiations',
    bio: 'A certified mediator and property expert, Priya leads our negotiation team with a focus on creating fair agreements that stand the test of time.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];