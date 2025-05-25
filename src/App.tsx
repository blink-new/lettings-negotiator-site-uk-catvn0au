import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import FeaturedProperties from './components/sections/FeaturedProperties';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import ContactSection from './components/sections/ContactSection';

function App() {
  // Update document title
  useEffect(() => {
    document.title = 'PremierLets | UK Property Lettings & Management';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <Hero />
        <FeaturedProperties />
        <Services />
        <Testimonials />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;