import { Bed, Bath, Home, Calendar, Check, X } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import type { Property } from '../lib/data';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative">
        <img 
          src={property.imageUrl} 
          alt={property.title}
          className="h-48 w-full object-cover"
        />
        <Badge className="absolute top-2 right-2 bg-primary-600">
          {formatPrice(property.price)}/month
        </Badge>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold line-clamp-1">{property.title}</h3>
        </div>
        <p className="text-sm text-muted-foreground">{property.city}, {property.postcode}</p>
      </CardHeader>
      
      <CardContent className="pb-2">
        <div className="grid grid-cols-4 gap-2 mb-4">
          <div className="flex flex-col items-center text-center">
            <Bed size={18} className="mb-1" />
            <span className="text-xs">{property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Bath size={18} className="mb-1" />
            <span className="text-xs">{property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Home size={18} className="mb-1" />
            <span className="text-xs">{property.type}</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Calendar size={18} className="mb-1" />
            <span className="text-xs">Available</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-2">
          {property.features.slice(0, 3).map((feature, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {feature}
            </Badge>
          ))}
          {property.features.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{property.features.length - 3} more
            </Badge>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-2 text-xs mt-2">
          <div className="flex items-center gap-1">
            {property.furnished ? (
              <Check size={14} className="text-green-500" />
            ) : (
              <X size={14} className="text-red-500" />
            )}
            <span>{property.furnished ? 'Furnished' : 'Unfurnished'}</span>
          </div>
          <div className="flex items-center gap-1">
            {property.petFriendly ? (
              <Check size={14} className="text-green-500" />
            ) : (
              <X size={14} className="text-red-500" />
            )}
            <span>{property.petFriendly ? 'Pet Friendly' : 'No Pets'}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <div className="flex w-full gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            Enquire
          </Button>
          <Button size="sm" className="flex-1">
            View Details
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}