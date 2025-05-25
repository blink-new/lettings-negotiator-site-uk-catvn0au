import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { cn } from '../../lib/utils';

const testimonials = [
  {
    id: 1,
    quote: "PremierLets has managed my properties for over 3 years, and I couldn't be happier. Their professionalism and attention to detail are outstanding.",
    author: "Sarah Thompson",
    role: "Landlord with 4 properties",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 2,
    quote: "Finding a flat in London seemed impossible until I contacted PremierLets. They found me the perfect place within my budget in just a week!",
    author: "James Wilson",
    role: "Tenant in London",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 3,
    quote: "As an overseas landlord, I needed a letting agent I could trust completely. PremierLets handles everything seamlessly, giving me total peace of mind.",
    author: "Michael Chen",
    role: "International Investor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 4,
    quote: "The maintenance service is exceptional. Any issues in our rented home are addressed within 24 hours. Best letting agency we've ever used.",
    author: "Emma and David Roberts",
    role: "Tenants in Manchester",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="testimonials" className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Trusted by landlords and tenants across the UK
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4">
            <Quote className="h-16 w-16 text-primary-500 opacity-50" />
          </div>
          
          <div className="relative z-10">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={cn(
                  "transition-opacity duration-500 absolute inset-0",
                  index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                )}
              >
                <div className="flex flex-col items-center text-center">
                  <p className="text-xl md:text-2xl text-gray-100 italic mb-8 px-4">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex flex-col items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary-500 mb-4"
                    />
                    <div>
                      <h4 className="font-medium text-lg text-white">{testimonial.author}</h4>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Static content for layout purposes */}
            <div className="invisible">
              <div className="flex flex-col items-center text-center">
                <p className="text-xl md:text-2xl text-gray-100 italic mb-8 px-4">
                  "{testimonials[0].quote}"
                </p>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 mb-4"></div>
                  <div>
                    <h4 className="font-medium text-lg text-white">{testimonials[0].author}</h4>
                    <p className="text-gray-400">{testimonials[0].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "w-3 h-3 rounded-full mx-1 transition-all",
                index === activeIndex ? "bg-primary-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;