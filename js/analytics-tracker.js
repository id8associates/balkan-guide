/**
 * Balkan Tourism — Analytics Tracker
 * 
 * Handles all analytics and event tracking
 * Integrates with Google Analytics and custom tracking
 */

class AnalyticsTracker {
  constructor(config) {
    this.config = config || window.MONETIZATION_CONFIG;
    this.currentCountry = this.getCurrentCountry();
    this.sessionId = this.generateSessionId();
  }
  
  /**
   * Track a page view
   * @param {string} pageName - Name of the page
   * @param {string} country - Current country
   */
  trackPageView(pageName, country = null) {
    if (!this.config.analytics.googleAnalytics.enabled) return;
    
    const countryToUse = country || this.currentCountry;
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        page_title: pageName,
        page_location: window.location.href,
        page_path: window.location.pathname,
        country: countryToUse,
        session_id: this.sessionId
      });
      
      console.log(`[Analytics] Page view: ${pageName} (${countryToUse})`);
    }
  }
  
  /**
   * Track an affiliate click
   * @param {string} type - Type of click ('hotel', 'tour', 'restaurant', etc.)
   * @param {string} name - Name of the item
   * @param {string} program - Affiliate program name
   * @param {string} url - The URL being clicked
   */
  trackAffiliateClick(type, name, program, url) {
    if (!this.config.analytics.googleAnalytics.enabled) return;
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'affiliate_click', {
        event_category: 'Affiliate',
        event_label: `${type}_${name}`,
        program: program,
        country: this.currentCountry,
        session_id: this.sessionId,
        value: url
      });
      
      console.log(`[Analytics] Affiliate click: ${type} - ${name} (${program})`);
    }
  }
  
  /**
   * Track an ad click
   * @param {string} adSlot - Ad slot identifier
   * @param {string} adNetwork - Ad network name
   */
  trackAdClick(adSlot, adNetwork) {
    if (!this.config.analytics.googleAnalytics.enabled) return;
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'ad_click', {
        event_category: 'Advertising',
        event_label: adSlot,
        network: adNetwork,
        country: this.currentCountry,
        session_id: this.sessionId
      });
      
      console.log(`[Analytics] Ad click: ${adSlot} (${adNetwork})`);
    }
  }
  
  /**
   * Track an ad impression
   * @param {string} adSlot - Ad slot identifier
   * @param {string} adNetwork - Ad network name
   */
  trackAdImpression(adSlot, adNetwork) {
    if (!this.config.analytics.googleAnalytics.enabled) return;
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'ad_impression', {
        event_category: 'Advertising',
        event_label: adSlot,
        network: adNetwork,
        country: this.currentCountry,
        session_id: this.sessionId,
        non_interaction: true
      });
    }
  }
  
  /**
   * Track a product view
   * @param {string} productId - Product ID
   * @param {string} productName - Product name
   * @param {string} productCategory - Product category
   * @param {number} price - Product price
   */
  trackProductView(productId, productName, productCategory, price = 0) {
    if (!this.config.analytics.googleAnalytics.enabled) return;
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'view_item', {
        event_category: 'Ecommerce',
        event_label: productName,
        item_id: productId,
        item_name: productName,
        item_category: productCategory,
        price: price,
        currency: 'USD',
        country: this.currentCountry,
        session_id: this.sessionId
      });
      
      console.log(`[Analytics] Product view: ${productName} (${productId})`);
    }
  }
  
  /**
   * Track a product purchase
   * @param {string} productId - Product ID
   * @param {string} productName - Product name
   * @param {string} productCategory - Product category
   * @param {number} price - Product price
   * @param {string} transactionId - Transaction ID
   */
  trackProductPurchase(productId, productName, productCategory, price, transactionId) {
    if (!this.config.analytics.googleAnalytics.enabled) return;
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'purchase', {
        event_category: 'Ecommerce',
        event_label: productName,
        transaction_id: transactionId,
        item_id: productId,
        item_name: productName,
        item_category: productCategory,
        price: price,
        currency: 'USD',
        country: this.currentCountry,
        session_id: this.sessionId,
        value: price
      });
      
      console.log(`[Analytics] Product purchase: ${productName} - $${price}`);
    }
  }
  
  /**
   * Track email signup
   * @param {string} email - Email address (hashed for privacy)
   * @param {string} source - Signup source
   */
  trackEmailSignup(email, source = 'unknown') {
    if (!this.config.analytics.googleAnalytics.enabled) return;
    
    // Hash email for privacy
    const hashedEmail = this.hashEmail(email);
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'email_signup', {
        event_category: 'Email Marketing',
        event_label: source,
        country: this.currentCountry,
        session_id: this.sessionId,
        email_hash: hashedEmail
      });
      
      console.log(`[Analytics] Email signup: ${source}`);
    }
  }
  
  /**
   * Track content engagement
   * @param {string} contentType - Type of content ('destination', 'restaurant', etc.)
   * @param {string} contentId - Content ID
   * @param {string} engagementType - Type of engagement ('view', 'click', 'share', etc.)
   */
  trackContentEngagement(contentType, contentId, engagementType) {
    if (!this.config.analytics.googleAnalytics.enabled) return;
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'engagement', {
        event_category: 'Content',
        event_label: `${contentType}_${contentId}`,
        engagement_type: engagementType,
        country: this.currentCountry,
        session_id: this.sessionId
      });
      
      console.log(`[Analytics] Content engagement: ${contentType} - ${contentId} (${engagementType})`);
    }
  }
  
  /**
   * Track search query
   * @param {string} query - Search query
   * @param {number} resultsCount - Number of results
   */
  trackSearch(query, resultsCount = 0) {
    if (!this.config.analytics.googleAnalytics.enabled) return;
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'search', {
        event_category: 'Search',
        event_label: query,
        search_term: query,
        results_count: resultsCount,
        country: this.currentCountry,
        session_id: this.sessionId
      });
      
      console.log(`[Analytics] Search: ${query} (${resultsCount} results)`);
    }
  }
  
  /**
   * Track custom event
   * @param {string} eventName - Event name
   * @param {Object} parameters - Event parameters
   */
  trackCustomEvent(eventName, parameters = {}) {
    if (!this.config.analytics.googleAnalytics.enabled) return;
    
    if (typeof gtag !== 'undefined') {
      const eventParams = {
        country: this.currentCountry,
        session_id: this.sessionId,
        ...parameters
      };
      
      gtag('event', eventName, eventParams);
      console.log(`[Analytics] Custom event: ${eventName}`, eventParams);
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
   * Generate a unique session ID
   * @returns {string} Session ID
   */
  generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }
  
  /**
   * Hash email for privacy (simple hash - use proper hashing in production)
   * @param {string} email - Email address
   * @returns {string} Hashed email
   */
  hashEmail(email) {
    // Simple hash for demonstration - use proper SHA-256 in production
    let hash = 0;
    for (let i = 0; i < email.length; i++) {
      const char = email.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return hash.toString(16);
  }
  
  /**
   * Set user properties
   * @param {Object} properties - User properties
   */
  setUserProperties(properties) {
    if (!this.config.analytics.googleAnalytics.enabled) return;
    
    if (typeof gtag !== 'undefined') {
      gtag('set', 'user_properties', {
        country: this.currentCountry,
        ...properties
      });
      
      console.log('[Analytics] User properties set:', properties);
    }
  }
}

// Initialize global instance
if (typeof window !== 'undefined') {
  window.AnalyticsTracker = AnalyticsTracker;
  
  // Auto-initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    if (window.MONETIZATION_CONFIG) {
      window.analyticsTracker = new AnalyticsTracker();
      
      // Track initial page view
      const pageType = window.analyticsTracker.getPageType();
      window.analyticsTracker.trackPageView(pageType);
    }
  });
}