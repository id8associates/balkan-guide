/**
 * Balkan Guide — Global Monetization Configuration
 * 
 * This file contains all monetization settings that apply across all countries.
 * Each country can override these settings in their country-specific monetization.js
 */

const MONETIZATION_CONFIG = {
  // ─── Affiliate Programs ───
  affiliates: {
    booking: {
      enabled: true,
      affiliateId: 'YOUR_BOOKING_AFFILIATE_ID', // Replace with your actual ID
      commissionRate: 0.25, // 25% commission
      trackingParam: 'aid',
      baseUrl: 'https://www.booking.com/searchresults.html'
    },
    expedia: {
      enabled: false, // Enable when approved
      affiliateId: '',
      commissionRate: 0.20,
      trackingParam: 'affilid',
      baseUrl: 'https://www.expedia.com/Hotel-Search'
    },
    viator: {
      enabled: false, // Enable when approved
      affiliateId: '',
      commissionRate: 0.15,
      trackingParam: 'aid',
      baseUrl: 'https://www.viator.com/activities'
    },
    getYourGuide: {
      enabled: false, // Enable when approved
      affiliateId: '',
      commissionRate: 0.12,
      trackingParam: 'partner_id',
      baseUrl: 'https://www.getyourguide.com'
    },
    // Airfare Affiliate Programs
    skyscanner: {
      enabled: false, // Enable when approved
      affiliateId: '',
      commissionRate: 0.05, // 5% commission
      trackingParam: 'aid',
      baseUrl: 'https://www.skyscanner.net/'
    },
    kiwi: {
      enabled: false, // Enable when approved
      affiliateId: '',
      commissionRate: 0.03, // 3% commission
      trackingParam: 'affil',
      baseUrl: 'https://www.kiwi.com/'
    },
    googleFlights: {
      enabled: false, // Google Flights doesn't have affiliate program
      affiliateId: '',
      commissionRate: 0,
      trackingParam: '',
      baseUrl: 'https://www.google.com/travel/flights'
    }
  },
  
  // ─── Ad Networks ───
  ads: {
    googleAdSense: {
      enabled: false, // Enable when approved
      publisherId: 'ca-pub-XXXXXXXXXXXXXXXX', // Replace with your actual ID
      adSlots: {
        leaderboard: 'div-gpt-ad-1234567890-0',
        sidebar: 'div-gpt-ad-1234567890-1',
        inContent: 'div-gpt-ad-1234567890-2',
        footer: 'div-gpt-ad-1234567890-3'
      }
    },
    mediaNet: {
      enabled: false,
      publisherId: ''
    }
  },
  
  // ─── Email Marketing ───
  email: {
    enabled: true,
    provider: 'mailchimp', // Options: 'mailchimp', 'convertkit', 'sendinblue'
    listId: 'YOUR_LIST_ID', // Replace with your actual list ID
    apiKey: 'YOUR_API_KEY', // Replace with your actual API key
    apiEndpoint: '/api/subscribe' // Your backend endpoint
  },
  
  // ─── Analytics ───
  analytics: {
    googleAnalytics: {
      enabled: true,
      trackingId: 'G-PPZJEL0K68' // Replace with your actual tracking ID
    },
    microsoftClarity: {
      enabled: true,
      projectId: 'wk1ffzot4n' // Replace with your actual project ID
    },
    affiliateTracking: {
      enabled: true
    }
  },
  
  // ─── Digital Products ───
  products: {
    freeGuides: {
      enabled: true,
      basePath: '/products/free-guides/'
    },
    premiumGuides: {
      enabled: false, // Enable when ready
      basePath: '/products/premium-guides/',
      currency: 'USD'
    }
  },
  
  // ─── Featured/Sponsored Content ───
  featured: {
    maxFeaturedPerSection: 3,
    sponsoredBadgeRequired: true,
    disclosureRequired: true
  },
  
  // ─── Performance Settings ───
  performance: {
    lazyLoadAds: true,
    lazyLoadImages: true,
    minifyAssets: true,
    cacheBusting: true
  }
};

// Make available globally
if (typeof window !== 'undefined') {
  window.MONETIZATION_CONFIG = MONETIZATION_CONFIG;
}