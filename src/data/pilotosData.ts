export interface Branch {
  id: string;
  name: string;
  subtitle: string;
  address: string;
  landmark: string;
  operatingHours: {
    sunThu: string;
    friSat: string;
  };
  phone?: string;
  bestFor: string[];
  image: string;
  tag: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'pasta' | 'pastries' | 'tapas' | 'bowls';
  price: number;
  description: string;
  tags: string[];
  image: string;
  branchAvailability: string[];
  calories?: string;
}

export interface BarberService {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  category: 'hair' | 'perm' | 'grooming';
}

export const PILOTOS_BRANCHES: Branch[] = [
  {
    id: 'pilotos-grounds',
    name: 'Pilotos Grounds (Main Branch)',
    subtitle: 'Flagship Café & Daytime Hub',
    address: 'JMK Building, Petron Gas Station, Gov. Antonio Carpio Road, Gulod Itaas, Batangas City',
    landmark: 'Right across from Stonyhurst International School',
    operatingHours: {
      sunThu: '7:00 AM – 10:00 PM',
      friSat: '7:00 AM – 12:00 MN'
    },
    phone: '+63 927 322 2432',
    bestFor: ['Morning espresso runs', 'Casual work / study sessions', 'Lunchtime power bowls'],
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800',
    tag: 'Flagship Café'
  },
  {
    id: 'afterhours',
    name: 'Afterhours by Pilotos Grounds',
    subtitle: 'Secondary Late-Night Specialty Branch',
    address: 'Petron Gas Station, Sampaga Bypass Road, Batangas City',
    landmark: 'Searchable as "AFTERHOURS by Pilotos Grounds" on digital maps',
    operatingHours: {
      sunThu: '11:00 AM – 11:00 PM',
      friSat: '11:00 AM – 12:00 MN'
    },
    phone: '+63 917 555 0193',
    bestFor: ['Late-night coffee cravings', 'Artisan pastas & pastries', 'Savory tapas & picas'],
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800',
    tag: 'Late-Night Café'
  },
  {
    id: 'barbershop-2',
    name: 'Pilotos Barbershop 2.0',
    subtitle: 'Upgraded Grooming Lounge',
    address: 'Located right beside Afterhours at Petron Gas Station, Sampaga Bypass Road, Batangas City',
    landmark: 'Beside Afterhours Café branch',
    operatingHours: {
      sunThu: '9:00 AM – 8:00 PM Daily',
      friSat: '9:00 AM – 8:00 PM Daily'
    },
    phone: '0920-559-6600',
    bestFor: ['Precision Fades', 'Korean Down Perms', 'Post-haircut massages & pomades'],
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800',
    tag: 'Grooming Lounge'
  }
];

export const CAFE_MENU: MenuItem[] = [
  {
    id: 'm1',
    name: 'Sea Salt Signature Latte',
    category: 'coffee',
    price: 180,
    description: 'Double-shot espresso with velvety steamed milk and house-crafted Himalayan sea salt cream layer.',
    tags: ['Best Seller', 'Signature'],
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=800',
    branchAvailability: ['Pilotos Grounds', 'Afterhours']
  },
  {
    id: 'm2',
    name: 'Truffle Mushroom Cream Pasta',
    category: 'pasta',
    price: 260,
    description: 'Al dente fettuccine tossed in rich white truffle oil, wild mushrooms, and aged parmesan shavings.',
    tags: ['Chef Special', 'Savory'],
    image: 'https://i0.wp.com/www.sweetteaandthyme.com/wp-content/uploads/2024/02/truffle-mushroom-pasta-overhead-on-tray.jpg?w=1200&ssl=1',
    branchAvailability: ['Afterhours']
  },
  {
    id: 'm3',
    name: 'Crispy Pork Belly Power Bowl',
    category: 'bowls',
    price: 295,
    description: 'Twice-cooked pork belly over garlic rice, soft-boiled egg, house achar, and spiced vinegar.',
    tags: ['Lunch Favorite', 'Hearty'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
    branchAvailability: ['Pilotos Grounds']
  },
  {
    id: 'm4',
    name: 'Almond Frangipane Croissant',
    category: 'pastries',
    price: 150,
    description: '72-layer European butter pastry baked fresh daily with sweet almond cream and toasted flakes.',
    tags: ['Freshly Baked', 'Pastry'],
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800',
    branchAvailability: ['Pilotos Grounds', 'Afterhours']
  },
  {
    id: 'm5',
    name: 'Spanish Dark Mocha',
    category: 'coffee',
    price: 195,
    description: 'Valrhona dark cacao ganache fused with single-origin espresso and textured milk.',
    tags: ['Rich', 'Sweet'],
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=800',
    branchAvailability: ['Pilotos Grounds', 'Afterhours']
  },
  {
    id: 'm6',
    name: 'Spicy Honey Garlic Picas & Tapas',
    category: 'tapas',
    price: 240,
    description: 'Crispy chicken bites glazed in Korean chili honey with toasted sesame and kewpie dip.',
    tags: ['Late Night', 'Sharing'],
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800',
    branchAvailability: ['Afterhours']
  }
];

export const BARBER_SERVICES: BarberService[] = [
  {
    id: 'bs1',
    name: 'Precision Fade & Styling',
    price: 380,
    duration: '45 mins',
    description: 'Skin fade, taper or classic cut tailored to your head shape, styled with Pilotos Matte Pomade.',
    category: 'hair'
  },
  {
    id: 'bs2',
    name: 'Korean Down Perm + Cut',
    price: 850,
    duration: '90 mins',
    description: 'Eliminates puffy sides and straight hair direction for a sleek, natural low-maintenance Korean profile.',
    category: 'perm'
  },
  {
    id: 'bs3',
    name: 'Executive Grooming Ritual',
    price: 650,
    duration: '75 mins',
    description: 'Haircut, straight razor hot towel shave, ear cleaning, and post-haircut soothing massage.',
    category: 'grooming'
  },
  {
    id: 'bs4',
    name: 'Beard Sculpting & Hot Towel',
    price: 280,
    duration: '30 mins',
    description: 'Beard trim, cheekline detailing, organic beard oil conditioning, and soothing hot towel.',
    category: 'grooming'
  }
];

export const BARBERS = [
  {
    id: 'b1',
    name: 'Master Marco',
    specialty: 'Precision Fades & Down Perms',
    branchId: 'barbershop-2',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'b2',
    name: 'Senior Jax',
    specialty: 'Classic Scissor Cuts & Pompadours',
    branchId: 'barbershop-2',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  }
];

export const CRM_PLANS = [
  {
    name: 'Mailchimp',
    tier: 'Cheapest & Easiest Email & SMS Marketing',
    price: 'Free up to 500 contacts | Paid from $13/mo',
    bestFor: 'Café promotions, weekly newsletter drops, and automated birthday discount emails.',
    features: [
      'Visual email template builder with drag-and-drop',
      'Audience segmentation by branch (Pilotos Grounds vs Afterhours)',
      'Automated welcome emails and loyalty signup triggers',
      'Built-in QR code landing page builder'
    ]
  },
  {
    name: 'ActiveCampaign',
    tier: 'Best Mid-Tier Automation & Customer Journeys',
    price: 'Starts at $29/mo (Plus Plan)',
    bestFor: 'Cross-selling between Barbershop 2.0 and Café (e.g. "Got a haircut? Enjoy a free iced coffee on us!").',
    features: [
      'Advanced multi-channel automation (Email + SMS)',
      'Site tracking to monitor which cafe menu items customers browse',
      'Dynamic CRM deal pipelines for VIP members',
      'Deep integration with WordPress booking plugins'
    ]
  },
  {
    name: 'HubSpot CRM',
    tier: 'Enterprise Unified Lifestyle Hub Platform',
    price: 'Free CRM tools | Professional Marketing Hub from $800/mo',
    bestFor: 'Complete 360-degree customer view across all 3 branches with advanced analytics and loyalty tracking.',
    features: [
      'Unified contact timeline tracking every cafe order and barber visit',
      'Robust ticketing system for branch feedback and VIP bookings',
      'Attribution reporting showing ROI from Petron highway foot traffic',
      'Native Elementor form integration & custom dashboard reporting'
    ]
  }
];
