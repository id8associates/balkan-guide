/**
 * Balkan Guide — Affiliate Link Builder
 * 
 * Generates affiliate tracking links for various programs
 * Handles click tracking and analytics
 */

class AffiliateLinkBuilder {
  constructor(config) {
    this.config = config || window.MONETIZATION_CONFIG;
    this.currentCountry = this.getCurrentCountry();
  }
  
  /**
   * Build a Booking.com affiliate link
   * @param {string} hotelName - Name of the hotel
   * @param {string} location - Location/city name
   * @param {string} hotelId - Optional specific hotel ID
   * @returns {string} Affiliate tracking URL
   */
  buildBookingLink(hotelName, location, hotelId = null) {
    if (!this.config.affiliates.booking.enabled) {
      return this.buildDirectLink(hotelName, location);
    }
    
    const baseUrl = this.config.affiliates.booking.baseUrl;
    const params = new URLSearchParams({
      aid: this.config.affiliates.booking.affiliateId,
      label: this.generateTrackingLabel('hotel', hotelName),
      utm_source: 'balkan-tourism',
      utm_medium: 'affiliate',
      utm_campaign: this.currentCountry
    });
    
    if (hotelId) {
      params.set('hotel', hotelId);
    } else {
      params.set('ss', location);
    }
    
    return `${baseUrl}?${params.toString()}`;
  }
  
  /**
   * Build a generic search link for Booking.com
   * @param {string} location - Location to search
   * @returns {string} Affiliate tracking URL
   */
  buildBookingSearchLink(location) {
    if (!this.config.affiliates.booking.enabled) {
      return `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(location)}`;
    }
    
    const baseUrl = this.config.affiliates.booking.baseUrl;
    const params = new URLSearchParams({
      aid: this.config.affiliates.booking.affiliateId,
      ss: location,
      label: this.generateTrackingLabel('search', location),
      utm_source: 'balkan-tourism',
      utm_medium: 'affiliate',
      utm_campaign: this.currentCountry
    });
    
    return `${baseUrl}?${params.toString()}`;
  }
  
  /**
   * Build a tour/activity affiliate link
   * @param {string} tourName - Name of the tour
   * @param {string} location - Location
   * @param {string} program - Affiliate program ('viator' or 'getyourguide')
   * @returns {string} Affiliate tracking URL
   */
  buildTourLink(tourName, location, program = 'viator') {
    const programConfig = this.config.affiliates[program];
    
    if (!programConfig || !programConfig.enabled) {
      return this.buildDirectLink(tourName, location);
    }
    
    const baseUrl = programConfig.baseUrl;
    const params = new URLSearchParams({
      [programConfig.trackingParam]: programConfig.affiliateId,
      label: this.generateTrackingLabel('tour', tourName),
      utm_source: 'balkan-tourism',
      utm_medium: 'affiliate',
      utm_campaign: this.currentCountry
    });
    
    if (program === 'viator') {
      params.set('destination', location);
    } else if (program === 'getYourGuide') {
      params.set('location', location);
    }
    
    return `${baseUrl}?${params.toString()}`;
  }
  
  /**
   * Build a direct (non-affiliate) link as fallback
   * @param {string} name - Name of the place
   * @param {string} location - Location
   * @returns {string} Direct URL
   */
  buildDirectLink(name, location) {
    return `https://www.google.com/search?q=${encodeURIComponent(name + ' ' + location)}`;
  }
  
  /**
   * Generate a tracking label for analytics
   * @param {string} type - Type of link ('hotel', 'tour', 'search', etc.)
   * @param {string} name - Name of the item
   * @returns {string} Tracking label
   */
  generateTrackingLabel(type, name) {
    const timestamp = Date.now();
    const sanitizedName = name.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    return `${this.currentCountry}_${type}_${sanitizedName}_${timestamp}`;
  }
  
  /**
   * Track an affiliate click event
   * @param {string} type - Type of click ('hotel', 'tour', etc.)
   * @param {string} name - Name of the item
   * @param {string} url - The URL being clicked
   * @param {string} program - Affiliate program name
   */
  trackClick(type, name, url, program = 'booking') {
    // Send to Google Analytics
    if (typeof gtag !== 'undefined' && this.config.analytics.googleAnalytics.enabled) {
      gtag('event', 'affiliate_click', {
        event_category: 'Affiliate',
        event_label: `${type}_${name}`,
        program: program,
        country: this.currentCountry,
        value: url
      });
    }
    
    // Log for debugging
    if (this.config.analytics.affiliateTracking.enabled) {
      console.log(`[Affiliate Click] ${type}: ${name} (${program}) - ${url}`);
    }
  }
  
  /**
   * Get the current country from URL path
   * @returns {string} Country identifier or 'homepage'
   */
  getCurrentCountry() {
    if (typeof window === 'undefined') return 'unknown';
    
    const path = window.location.pathname;
    const match = path.match(/\/countries\/([^\/]+)/);
    return match ? match[1] : 'homepage';
  }
  
  /**
   * Create a click handler that includes tracking
   * @param {string} type - Type of link
   * @param {string} name - Name of the item
   * @param {string} url - The URL
   * @param {string} program - Affiliate program
   * @returns {Function} Click handler function
   */
  createClickHandler(type, name, url, program = 'booking') {
    return (event) => {
      // Track the click
      this.trackClick(type, name, url, program);
      
      // Allow default behavior (link will open in new tab due to target="_blank")
      // If you want to prevent default and handle navigation manually:
      // event.preventDefault();
      // window.open(url, '_blank');
    };
  }
}

// Initialize global instance
if (typeof window !== 'undefined') {
  window.AffiliateLinkBuilder = AffiliateLinkBuilder;
  window.affiliateBuilder = new AffiliateLinkBuilder();
}