/**
 * Croatia — Country-Specific Monetization Configuration
 * 
 * This file contains monetization settings specific to Croatia.
 * Override global settings here as needed.
 */

const COUNTRY_MONETIZATION = {
  country: 'croatia',
  currency: 'EUR',
  
  // ─── Featured/Sponsored Placements ───
  featured: {
    hotels: [
      'hotel-excelsior',
      'hotel-park-split',
      'hotel-lone'
    ],
    restaurants: [
      'konavoski-dvori',
      'gariful',
      'monte'
    ],
    tours: []
  },
  
  // ─── Local Affiliate Partners ───
  localAffiliates: {
    enabled: true,
    partners: [
      {
        name: 'Croatia Tours',
        type: 'tours',
        commissionRate: 0.15,
        trackingCode: 'CROATIA-TOURS',
        website: 'https://croatia-tours.com'
      },
      {
        name: 'Dalmatia Adventures',
        type: 'activities',
        commissionRate: 0.12,
        trackingCode: 'DALMATIA-ADVENTURES',
        website: 'https://dalmatia-adventures.com'
      }
    ]
  },
  
  // ─── Ad Placement Preferences ───
  adPlacements: {
    homepage: true,
    countryPage: true,
    sidePanel: false, // Keep side panel clean for better UX
    betweenSections: true,
    aboveMap: true,
    belowMap: true
  },
  
  // ─── Country-Specific Products ───
  products: {
    freeGuides: [
      {
        id: 'croatia-free-guide',
        title: 'Free Croatia Travel Guide',
        description: '50+ pages of insider tips, hidden gems, and detailed itineraries',
        file: '/products/free-guides/croatia-guide.pdf',
        coverImage: '/images/products/croatia-guide-cover.jpg',
        downloadCount: 2100
      }
    ],
    premiumGuides: [
      {
        id: 'croatia-complete-guide',
        title: 'Complete Croatia Guide',
        description: '200+ pages covering all destinations with detailed itineraries',
        price: 19.99,
        file: '/products/premium-guides/croatia-complete.pdf',
        coverImage: '/images/products/croatia-complete-cover.jpg',
        features: [
          '7-Day Itinerary',
          '14-Day Extended Itinerary',
          'Island Hopping Guide',
          'Hidden Gems Map',
          'Local Phrase Guide',
          'Restaurant Recommendations',
          'Accommodation Guide',
          'Transportation Guide'
        ]
      },
      {
        id: 'croatia-food-guide',
        title: 'Croatian Food & Wine Guide',
        description: '100+ local recipes, restaurant recommendations, and wine regions',
        price: 14.99,
        file: '/products/premium-guides/croatia-food-wine.pdf',
        coverImage: '/images/products/croatia-food-cover.jpg',
        features: [
          '50+ Traditional Recipes',
          'Restaurant Guide',
          'Wine Regions Map',
          'Local Ingredients Guide',
          'Cooking Tips',
          'Food History'
        ]
      },
      {
        id: 'croatia-islands-guide',
        title: 'Croatian Islands Guide',
        description: 'Complete guide to the best islands, beaches, and hidden coves',
        price: 16.99,
        file: '/products/premium-guides/croatia-islands.pdf',
        coverImage: '/images/products/croatia-islands-cover.jpg',
        features: [
          'Top 20 Islands',
          'Beach Guide',
          'Ferry Schedules',
          'Hidden Coves',
          'Local Tips',
          'Accommodation Guide',
          'Restaurant Recommendations'
        ]
      }
    ]
  },
  
  // ─── Email Marketing ───
  email: {
    welcomeSequence: {
      enabled: true,
      emails: [
        {
          day: 0,
          subject: 'Your Free Croatia Travel Guide is Here!',
          template: 'welcome-free-guide'
        },
        {
          day: 1,
          subject: 'Top 10 Hidden Gems in Croatia',
          template: 'day-1-hidden-gems'
        },
        {
          day: 3,
          subject: 'Croatian Food You Must Try',
          template: 'day-3-food-guide'
        },
        {
          day: 7,
          subject: 'Planning Your Croatia Trip? Read This',
          template: 'day-7-planning-tips'
        }
      ]
    }
  },
  
  // ─── Sponsored Content Opportunities ───
  sponsoredContent: {
    available: true,
    packages: [
      {
        name: 'Featured Hotel',
        price: 600,
        duration: '30 days',
        placement: 'top of accommodations list',
        includes: ['featured badge', 'priority placement', 'social media mention']
      },
      {
        name: 'Featured Restaurant',
        price: 400,
        duration: '30 days',
        placement: 'top of restaurants list',
        includes: ['featured badge', 'priority placement']
      },
      {
        name: 'Destination Spotlight',
        price: 1200,
        duration: '60 days',
        placement: 'homepage and country page',
        includes: ['dedicated section', 'featured badge', 'newsletter mention', 'social media post']
      }
    ]
  },
  
  // ─── Local Business Partnerships ───
  partnerships: {
    hotels: [
      {
        name: 'Hotel Excelsior Dubrovnik',
        contact: 'info@hotelexcelsior.hr',
        commissionRate: 0.15,
        status: 'active'
      },
      {
        name: 'Hotel Park Split',
        contact: 'info@hotelpark.hr',
        commissionRate: 0.15,
        status: 'active'
      }
    ],
    restaurants: [
      {
        name: 'Konavoski Dvori',
        contact: 'info@konavoski-dvori.hr',
        commissionRate: 0.10,
        status: 'active'
      },
      {
        name: 'Gariful Hvar',
        contact: 'info@gariful.hr',
        commissionRate: 0.10,
        status: 'active'
      }
    ],
    tourOperators: [
      {
        name: 'Croatia Tours',
        contact: 'info@croatia-tours.com',
        commissionRate: 0.15,
        status: 'pending'
      }
    ]
  }
};

// Make available globally
if (typeof window !== 'undefined') {
  window.COUNTRY_MONETIZATION = COUNTRY_MONETIZATION;
}
