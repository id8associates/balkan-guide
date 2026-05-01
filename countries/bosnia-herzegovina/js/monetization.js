/**
 * Bosnia & Herzegovina — Country-Specific Monetization Configuration
 * 
 * This file contains monetization settings specific to Bosnia & Herzegovina.
 * Override global settings here as needed.
 */

const COUNTRY_MONETIZATION = {
  country: 'bosnia-herzegovina',
  currency: 'EUR',
  
  // ─── Featured/Sponsored Placements ───
  featured: {
    hotels: [
      'hotel-europe',
      'hotel-kriva-cuprija',
      'hotel-bevanda'
    ],
    restaurants: [
      'cevabdzinica-zeljo',
      'restoran-hindin-han',
      'sadrvan-restaurant'
    ],
    tours: []
  },
  
  // ─── Local Affiliate Partners ───
  localAffiliates: {
    enabled: true,
    partners: [
      {
        name: 'Sarajevo Tours',
        type: 'tours',
        commissionRate: 0.15,
        trackingCode: 'SARAJEVO-TOURS',
        website: 'https://sarajevotours.com'
      },
      {
        name: 'Mostar Adventures',
        type: 'activities',
        commissionRate: 0.12,
        trackingCode: 'MOSTAR-ADVENTURES',
        website: 'https://mostaradventures.com'
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
        id: 'bosnia-herzegovina-free-guide',
        title: 'Free Bosnia & Herzegovina Travel Guide',
        description: '50+ pages of insider tips, hidden gems, and detailed itineraries',
        file: '/products/free-guides/bosnia-herzegovina-guide.pdf',
        coverImage: '/images/products/bosnia-guide-cover.jpg',
        downloadCount: 1250
      }
    ],
    premiumGuides: [
      {
        id: 'bosnia-herzegovina-complete-guide',
        title: 'Complete Bosnia & Herzegovina Guide',
        description: '200+ pages covering all destinations with detailed itineraries',
        price: 19.99,
        file: '/products/premium-guides/bosnia-herzegovina-complete.pdf',
        coverImage: '/images/products/bosnia-complete-cover.jpg',
        features: [
          '7-Day Itinerary',
          '14-Day Extended Itinerary',
          'Budget Travel Tips',
          'Hidden Gems Map',
          'Local Phrase Guide',
          'Restaurant Recommendations',
          'Accommodation Guide',
          'Transportation Guide'
        ]
      },
      {
        id: 'bosnia-herzegovina-food-guide',
        title: 'Bosnian Food & Wine Guide',
        description: '100+ local recipes, restaurant recommendations, and wine regions',
        price: 14.99,
        file: '/products/premium-guides/bosnia-food-wine.pdf',
        coverImage: '/images/products/bosnia-food-cover.jpg',
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
        id: 'bosnia-herzegovina-budget-guide',
        title: 'Budget Travel Guide',
        description: 'How to travel Bosnia on $50/day or less',
        price: 9.99,
        file: '/products/premium-guides/bosnia-budget.pdf',
        coverImage: '/images/products/bosnia-budget-cover.jpg',
        features: [
          'Budget Accommodations',
          'Cheap Eats Guide',
          'Free Attractions',
          'Transportation Hacks',
          'Money-Saving Tips',
          'Sample Budgets'
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
          subject: 'Your Free Bosnia Travel Guide is Here!',
          template: 'welcome-free-guide'
        },
        {
          day: 1,
          subject: 'Top 10 Hidden Gems in Bosnia',
          template: 'day-1-hidden-gems'
        },
        {
          day: 3,
          subject: 'Bosnian Food You Must Try',
          template: 'day-3-food-guide'
        },
        {
          day: 7,
          subject: 'Planning Your Bosnia Trip? Read This',
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
        price: 500,
        duration: '30 days',
        placement: 'top of accommodations list',
        includes: ['featured badge', 'priority placement', 'social media mention']
      },
      {
        name: 'Featured Restaurant',
        price: 300,
        duration: '30 days',
        placement: 'top of restaurants list',
        includes: ['featured badge', 'priority placement']
      },
      {
        name: 'Destination Spotlight',
        price: 1000,
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
        name: 'Hotel Europe',
        contact: 'info@hoteleurope.ba',
        commissionRate: 0.15,
        status: 'active'
      },
      {
        name: 'Hotel Kriva Cuprija',
        contact: 'info@krivacuprija.com',
        commissionRate: 0.15,
        status: 'active'
      }
    ],
    restaurants: [
      {
        name: 'Ćevabdžinica Željo',
        contact: 'info@zeljo.ba',
        commissionRate: 0.10,
        status: 'active'
      }
    ],
    tourOperators: [
      {
        name: 'Sarajevo Tours',
        contact: 'info@sarajevotours.com',
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