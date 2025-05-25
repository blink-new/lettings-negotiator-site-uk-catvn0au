import { BedDouble, Bath, Home, MapPin, Expand } from 'lucide-react';
import { Card, CardContent } from './card';
import { Badge } from './badge';
import { cn } from '../../lib/utils';

export interface PropertyCardProps {
  id: string;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  propertyType: string;
  squareFeet?: number;
  imageUrl: string;
  isAvailable?: boolean;
  featured?: boolean;
  className?: string;
}

const PropertyCard = ({
  title,
  address,
  price,
  bedrooms,
  bathrooms,
  propertyType,
  squareFeet,
  imageUrl,
  isAvailable = true,
  featured = false,
  className,
}: PropertyCardProps) => {
  const formattedPrice = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <Card className={cn(
      "overflow-hidden h-full transition-all duration-300 hover:shadow-lg group", 
      className,
      featured && "border-primary-400 ring-1 ring-primary-400"
    )}>
      <div className="relative overflow-hidden w-full h-48">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {featured && (
          <Badge className="absolute top-2 right-2 bg-primary-600">
            Featured
          </Badge>
        )}
        {!isAvailable && (
          <div className="absolute inset-0 bg-gray-900/70 flex items-center justify-center">
            <span className="text-white font-medium text-lg">Let Agreed</span>
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium line-clamp-1">{title}</h3>
          <span className="font-semibold text-primary-700">{formattedPrice} pcm</span>
        </div>
        
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin size={14} className="mr-1" />
          <span className="truncate">{address}</span>
        </div>
        
        <div className="flex flex-wrap gap-4 pt-2 border-t border-gray-100">
          <div className="flex items-center text-gray-700">
            <BedDouble size={16} className="mr-1" />
            <span>{bedrooms} {bedrooms === 1 ? 'Bed' : 'Beds'}</span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <Bath size={16} className="mr-1" />
            <span>{bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}</span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <Home size={16} className="mr-1" />
            <span>{propertyType}</span>
          </div>
          
          {squareFeet && (
            <div className="flex items-center text-gray-700">
              <Expand size={16} className="mr-1" />
              <span>{squareFeet} sq ft</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;