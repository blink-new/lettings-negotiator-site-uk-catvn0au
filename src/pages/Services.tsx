import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { services } from '../lib/data';

export function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Lettings Negotiation Services
            </h1>
            <p className="text-xl leading-relaxed">
              Professional negotiation services for landlords and tenants across the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How We Can Help You</h2>
            <p className="text-gray-600">
              We offer a comprehensive range of services designed to make property 
              lettings smoother, fairer, and more profitable for all parties.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <div className="text-primary-600 text-xl font-bold">{parseInt(service.id)}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Benefits:</h4>
                <ul className="space-y-2 mb-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={16} className="text-green-500 mr-2 mt-1 shrink-0" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold mb-2">Not sure which service you need?</h3>
                <p className="text-gray-600">
                  Our team of experts can help you determine the best approach for your specific situation.
                  Contact us for a free consultation to discuss your property needs.
                </p>
              </div>
              <Button asChild size="lg" className="md:w-auto">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600">
              Our streamlined process makes property negotiation simple and effective.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:-translate-x-1/2"></div>
              
              {/* Steps */}
              <div className="space-y-12">
                <TimelineItem 
                  step="1" 
                  title="Initial Consultation" 
                  description="We'll discuss your specific needs and goals, whether you're a landlord looking to maximize returns or a tenant seeking the best terms."
                  isLeft={true}
                />
                
                <TimelineItem 
                  step="2" 
                  title="Market Analysis" 
                  description="Our team conducts comprehensive research on comparable properties and current market conditions to establish a strong negotiation position."
                  isLeft={false}
                />
                
                <TimelineItem 
                  step="3" 
                  title="Strategy Development" 
                  description="We create a customized negotiation strategy based on your goals and our market insights, identifying key leverage points."
                  isLeft={true}
                />
                
                <TimelineItem 
                  step="4" 
                  title="Negotiation" 
                  description="Our expert negotiators represent your interests, working to secure the best possible terms while maintaining positive relationships."
                  isLeft={false}
                />
                
                <TimelineItem 
                  step="5" 
                  title="Agreement Finalization" 
                  description="Once terms are agreed, we ensure all details are properly documented in a comprehensive agreement that protects your interests."
                  isLeft={true}
                />
                
                <TimelineItem 
                  step="6" 
                  title="Ongoing Support" 
                  description="Our relationship doesn't end with the agreement. We provide continued support throughout the tenancy when needed."
                  isLeft={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Pricing</h2>
            <p className="text-gray-600">
              Transparent, value-based pricing with options to suit different needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col">
              <div className="p-6 bg-gray-50 border-b text-center">
                <h3 className="text-xl font-bold">Basic</h3>
                <div className="text-3xl font-bold mt-4">£299</div>
                <p className="text-gray-500 mt-1">One-time fee</p>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  {[
                    'Initial property assessment',
                    'Market analysis report',
                    'Basic negotiation strategy',
                    'Single round of negotiations',
                    'Standard agreement review'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={16} className="text-green-500 mr-2 mt-1 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border-t">
                <Button asChild className="w-full">
                  <Link to="/contact?plan=basic">Get Started</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-primary-500 flex flex-col relative">
              <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-bl">
                POPULAR
              </div>
              <div className="p-6 bg-primary-50 border-b text-center">
                <h3 className="text-xl font-bold">Professional</h3>
                <div className="text-3xl font-bold mt-4">£499</div>
                <p className="text-gray-500 mt-1">One-time fee</p>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  {[
                    'Comprehensive property assessment',
                    'Detailed market analysis report',
                    'Advanced negotiation strategy',
                    'Multiple rounds of negotiations',
                    'Thorough agreement review',
                    'Lease term optimization',
                    '30-day support after signing'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={16} className="text-green-500 mr-2 mt-1 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border-t">
                <Button asChild className="w-full">
                  <Link to="/contact?plan=professional">Get Started</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col">
              <div className="p-6 bg-gray-50 border-b text-center">
                <h3 className="text-xl font-bold">Premium</h3>
                <div className="text-3xl font-bold mt-4">£899</div>
                <p className="text-gray-500 mt-1">One-time fee</p>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  {[
                    'All Professional features',
                    'Priority service',
                    'Senior negotiator assignment',
                    'Unlimited negotiation rounds',
                    'Custom contract drafting',
                    'Legal compliance review',
                    'Property inspection service',
                    '90-day support after signing'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={16} className="text-green-500 mr-2 mt-1 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border-t">
                <Button asChild className="w-full">
                  <Link to="/contact?plan=premium">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">Need a customized solution for your portfolio?</p>
            <Button asChild variant="outline">
              <Link to="/contact?custom=true">Contact for Custom Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our expert negotiators help you secure the best possible rental agreement.
          </p>
          <Button asChild size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

interface TimelineItemProps {
  step: string;
  title: string;
  description: string;
  isLeft: boolean;
}

function TimelineItem({ step, title, description, isLeft }: TimelineItemProps) {
  return (
    <div className="relative flex flex-col md:flex-row items-center">
      <div className={`md:w-1/2 ${isLeft ? 'md:text-right md:pr-8' : 'md:order-last md:pl-8'}`}>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="flex items-center justify-center z-10 my-4 md:my-0">
        <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
          {step}
        </div>
      </div>
      
      <div className={`md:w-1/2 ${isLeft ? 'md:order-last md:pl-8' : 'md:pr-8'}`}>
        {/* Empty div for layout */}
      </div>
    </div>
  );
}