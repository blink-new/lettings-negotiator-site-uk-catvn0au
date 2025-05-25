export interface Property {
  id: string;
  title: string;
  address: string;
  city: string;
  postcode: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  type: 'Flat' | 'House' | 'Studio' | 'Bungalow';
  features: string[];
  description: string;
  imageUrl: string;
  available: boolean;
  furnished: boolean;
  petFriendly: boolean;
  dateAvailable: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  text: string;
  imageUrl: string;
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Luxury 2 Bedroom Apartment',
    address: '123 Oxford Street',
    city: 'London',
    postcode: 'W1D 2LG',
    price: 2500,
    bedrooms: 2,
    bathrooms: 2,
    type: 'Flat',
    features: ['Balcony', 'Parking', 'Gym', 'Concierge', 'Pet Friendly'],
    description: 'A stunning two-bedroom apartment in the heart of London. This property features a spacious living area, modern kitchen, and two en-suite bathrooms. The apartment comes with a private balcony overlooking the city and access to a resident-only gym and concierge service.',
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    available: true,
    furnished: true,
    petFriendly: true,
    dateAvailable: '2023-11-01'
  },
  {
    id: '2',
    title: 'Charming 3 Bedroom Cottage',
    address: '45 Meadow Lane',
    city: 'Bath',
    postcode: 'BA1 2YT',
    price: 1800,
    bedrooms: 3,
    bathrooms: 2,
    type: 'House',
    features: ['Garden', 'Parking', 'Fireplace', 'Period Features'],
    description: 'A beautiful period cottage with three bedrooms in a peaceful location just outside Bath. The property features original details like exposed beams and a working fireplace, alongside modern amenities. There\'s a large garden with a patio area, perfect for entertaining.',
    imageUrl: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    available: true,
    furnished: false,
    petFriendly: true,
    dateAvailable: '2023-10-15'
  },
  {
    id: '3',
    title: 'Modern Studio Apartment',
    address: '78 Trinity Square',
    city: 'Manchester',
    postcode: 'M3 3WQ',
    price: 950,
    bedrooms: 0,
    bathrooms: 1,
    type: 'Studio',
    features: ['Newly Renovated', 'Central Location', 'Concierge', 'Bike Storage'],
    description: 'A newly renovated studio apartment in central Manchester. This compact but well-designed space features high-quality finishes, a fully equipped kitchen, and a modern bathroom. Perfect for professionals or students looking for a central location.',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    available: true,
    furnished: true,
    petFriendly: false,
    dateAvailable: '2023-09-01'
  },
  {
    id: '4',
    title: 'Spacious 4 Bedroom Family Home',
    address: '12 Willow Drive',
    city: 'Edinburgh',
    postcode: 'EH4 2SR',
    price: 2200,
    bedrooms: 4,
    bathrooms: 3,
    type: 'House',
    features: ['Garden', 'Garage', 'Conservatory', 'Utility Room', 'Study'],
    description: 'A spacious family home in a sought-after Edinburgh suburb. The property offers four bedrooms, three bathrooms, a large kitchen-diner, separate utility room, and a comfortable living room. There\'s a well-maintained garden and garage for off-street parking.',
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    available: true,
    furnished: false,
    petFriendly: true,
    dateAvailable: '2023-11-15'
  },
  {
    id: '5',
    title: 'Luxury Penthouse Apartment',
    address: '55 Dockside View',
    city: 'Liverpool',
    postcode: 'L3 4FD',
    price: 3000,
    bedrooms: 3,
    bathrooms: 2,
    type: 'Flat',
    features: ['Roof Terrace', 'Panoramic Views', 'Parking', 'Concierge', 'Gym'],
    description: 'A stunning penthouse apartment with panoramic views over Liverpool\'s waterfront. This luxury property features three bedrooms, two bathrooms, an open-plan living area, and a private roof terrace. The development offers a concierge service, resident gym, and secure parking.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    available: true,
    furnished: true,
    petFriendly: false,
    dateAvailable: '2023-10-01'
  },
  {
    id: '6',
    title: 'Cosy 1 Bedroom Flat',
    address: '34 Queen Street',
    city: 'Bristol',
    postcode: 'BS1 4NT',
    price: 1100,
    bedrooms: 1,
    bathrooms: 1,
    type: 'Flat',
    features: ['Central Location', 'Recently Renovated', 'High Ceilings', 'Period Building'],
    description: 'A charming one-bedroom flat in a period building in central Bristol. The property has been recently renovated throughout while retaining original features like high ceilings and large windows. The location is perfect for enjoying Bristol\'s vibrant city centre.',
    imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    available: true,
    furnished: true,
    petFriendly: false,
    dateAvailable: '2023-09-15'
  }
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Rent Negotiation',
    description: 'Our expert negotiators work on your behalf to secure the best rental rates and terms. We leverage our market knowledge and negotiation skills to find the optimal agreement for both landlords and tenants.',
    icon: 'handshake',
    benefits: [
      'Market-based price analysis',
      'Professional negotiation strategy',
      'Term optimization',
      'Transparent fee structure',
      'Money-back guarantee if we can\'t save you at least our fee'
    ]
  },
  {
    id: '2',
    title: 'Property Management',
    description: 'Comprehensive property management services for landlords, taking care of everything from finding tenants to maintenance and rent collection. Let us handle the day-to-day while you enjoy passive income.',
    icon: 'home',
    benefits: [
      'Tenant finding and vetting',
      'Regular property inspections',
      'Maintenance coordination',
      'Rent collection and financial reporting',
      '24/7 emergency support'
    ]
  },
  {
    id: '3',
    title: 'Tenant Representation',
    description: 'We represent tenants in finding their ideal property and negotiating favorable lease terms. Our service ensures you find the right home at the right price, with terms that protect your interests.',
    icon: 'users',
    benefits: [
      'Personalized property search',
      'Viewing scheduling and accompaniment',
      'Lease negotiation',
      'Deposit protection advice',
      'Moving-in coordination'
    ]
  },
  {
    id: '4',
    title: 'Legal Compliance',
    description: 'Navigate the complex landscape of UK rental regulations with confidence. We ensure all agreements and property conditions meet current legal requirements, protecting both landlords and tenants.',
    icon: 'scroll',
    benefits: [
      'Up-to-date legal documentation',
      'Safety certificate management',
      'Deposit protection compliance',
      'Right to Rent checks',
      'Regular legal updates'
    ]
  },
  {
    id: '5',
    title: 'Property Marketing',
    description: 'Showcase your property to its full potential with our professional marketing services. We use high-quality photography, compelling descriptions, and targeted advertising to attract the right tenants quickly.',
    icon: 'presentation',
    benefits: [
      'Professional photography',
      'Virtual tours',
      'Targeted online advertising',
      'Featured listings on major portals',
      'Open house organization'
    ]
  },
  {
    id: '6',
    title: 'Rental Valuation',
    description: 'Accurate rental valuations based on comprehensive market analysis. Our detailed reports help landlords set the optimal rental price to maximize income while ensuring competitive positioning in the market.',
    icon: 'calculator',
    benefits: [
      'Comparative market analysis',
      'Local area rental trends',
      'Property condition assessment',
      'Feature-based valuation',
      'Seasonal adjustment recommendations'
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    position: 'Landlord',
    company: 'Multiple Properties',
    text: 'PropertyNegotiator has transformed how I manage my rental portfolio. Their negotiation skills secured 15% higher rent than I was previously getting, and their property management service is impeccable. Highly recommended!',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: '2',
    name: 'James Wilson',
    position: 'Tenant',
    company: 'Marketing Professional',
    text: 'As someone relocating to London for work, finding a property was incredibly stressful until I found PropertyNegotiator. They found me the perfect flat, negotiated the rent down by £200 per month, and made the whole process seamless.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: '3',
    name: 'Emma Thompson',
    position: 'Property Director',
    company: 'Urban Living Ltd',
    text: 'We\'ve partnered with PropertyNegotiator for our entire portfolio of 50+ properties. Their market knowledge, professional approach, and excellent tenant selection have resulted in minimal vacancies and maximum returns.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: '4',
    name: 'Michael Chen',
    position: 'Tenant',
    company: 'Finance Analyst',
    text: 'After struggling with difficult landlords in the past, working with PropertyNegotiator was a breath of fresh air. They found me a beautiful apartment and negotiated fair terms that protected my interests. The whole experience was professional and transparent.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
  }
];

export const stats = [
  { id: '1', label: 'Properties Managed', value: '1,500+' },
  { id: '2', label: 'Happy Clients', value: '3,200+' },
  { id: '3', label: 'Average Savings', value: '12%' },
  { id: '4', label: 'Years Experience', value: '15+' }
];