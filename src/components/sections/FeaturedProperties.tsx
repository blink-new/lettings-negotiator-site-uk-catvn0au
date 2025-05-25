import { useState } from 'react';
import { Button } from '../ui/button';
import PropertyCard from '../ui/PropertyCard';
import { ChevronRight } from 'lucide-react';

// Sample data for properties
const FEATURED_PROPERTIES = [
  {
    id: '1',
    title: 'Luxury 2 Bedroom Apartment',
    address: 'Kensington, London SW7',
    price: 2850,
    bedrooms: 2,
    bathrooms: 2,
    propertyType: 'Apartment',
    squareFeet: 950,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=80',
    isAvailable: true,
    featured: true,
  },
  {
    id: '2',
    title: 'Modern 3 Bedroom Townhouse',
    address: 'Manchester City Centre, M1',
    price: 1750,
    bedrooms: 3,
    bathrooms: 2,
    propertyType: 'Townhouse',
    squareFeet: 1200,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=80',
    isAvailable: true,
    featured: true,
  },
  {
    id: '3',
    title: 'Spacious 4 Bedroom Family Home',
    address: 'Edinburgh, EH4',
    price: 2200,
    bedrooms: 4,
    bathrooms: 3,
    propertyType: 'House',
    squareFeet: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=80',
    isAvailable: true,
    featured: true,
  },
  {
    id: '4',
    title: 'Stylish Studio Apartment',
    address: 'Birmingham, B1',
    price: 950,
    bedrooms: 0,
    bathrooms: 1,
    propertyType: 'Studio',
    squareFeet: 450,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=80',
    isAvailable: true,
    featured: false,
  },
  {
    id: '5',
    title: 'Charming 2 Bedroom Cottage',
    address: 'York, YO1',
    price: 1250,
    bedrooms: 2,
    bathrooms: 1,
    propertyType: 'Cottage',
    squareFeet: 850,
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=80',
    isAvailable: false,
    featured: false,
  },
  {
    id: '6',
    title: 'Modern 1 Bedroom Flat',
    address: 'Bristol, BS1',
    price: 1100,
    bedrooms: 1,
    bathrooms: 1,
    propertyType: 'Flat',
    squareFeet: 550,
    imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1800&q=80',
    isAvailable: true,
    featured: false,
  },
];

const FeaturedProperties = () => {
  const [visibleProperties, setVisibleProperties] = useState(3);
  
  const handleShowMore = () => {
    setVisibleProperties(prev => Math.min(prev + 3, FEATURED_PROPERTIES.length));
  };
  
  return (
    <section id="properties" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Featured Properties</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our hand-picked selection of properties available for rent across the UK
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROPERTIES.slice(0, visibleProperties).map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
        
        {visibleProperties < FEATURED_PROPERTIES.length && (
          <div className="text-center mt-10">
            <Button 
              onClick={handleShowMore}
              variant="outline" 
              className="px-6 py-2 border-primary-600 text-primary-700 hover:bg-primary-50"
            >
              Show More Properties
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProperties;