import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 pt-24 pb-16 md:pb-32">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-center bg-cover" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')",
          backgroundPosition: "center 40%"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-4">
            Find Your Perfect Home in the UK
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Professional property management and letting services across the UK. We make renting simple and stress-free.
          </p>
          
          {/* Search form */}
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-2xl">
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
              <div className="flex-grow">
                <Input
                  type="text"
                  placeholder="City, postcode or area"
                  className="w-full h-12 text-base"
                />
              </div>
              <Button className="h-12 px-8 bg-primary-700 hover:bg-primary-800 text-white">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </div>
          
          {/* Features list */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
            <div className="flex items-center text-white">
              <div className="bg-primary-600 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <span>Verified Properties</span>
            </div>
            <div className="flex items-center text-white">
              <div className="bg-primary-600 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center text-white">
              <div className="bg-primary-600 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <span>No Hidden Fees</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;