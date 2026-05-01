/**
 * Balkan Tourism — Ads Loader
 * 
 * Handles loading and initialization of display advertising
 * Supports Google AdSense and other ad networks
 */

class AdsLoader {
  constructor(config) {
    this.config = config || window.MONETIZATION_CONFIG;
    this.loaded = false;
    this.initialized = false;
  }
  
  /**
   * Load Google AdSense script
   */
  loadAdSense() {
    if (!this.config.ads.googleAdSense.enabled) {
      console.log('[Ads] Google AdSense is disabled');
      return;
    }
    
    if (this.loaded) {
      console.log('[Ads] AdSense already loaded');
      return;
    }
    
    try {
      // Create script element
      const script = document.createElement('script');
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${this.config.ads.googleAdSense.publisherId}`;
      script.async = true;
      script.crossOrigin = 'anonymous';
      
      script.onload = () => {
        console.log('[Ads] AdSense loaded successfully');
        this.loaded = true;
        this.initializeAdSlots();
      };
      
      script.onerror = () => {
        console.error('[Ads] Failed to load AdSense');
      };
      
      document.head.appendChild(script);
      
    } catch (error) {
      console.error('[Ads] Error loading AdSense:', error);
    }
  }
  
  /**
   * Initialize all ad slots on the page
   */
  initializeAdSlots() {
    if (!this.loaded) {
      console.log('[Ads] Cannot initialize slots - AdSense not loaded');
      return;
    }
    
    if (this.initialized) {
      console.log('[Ads] Ad slots already initialized');
      return;
    }
    
    const slots = this.config.ads.googleAdSense.adSlots;
    let initializedCount = 0;
    
    Object.entries(slots).forEach(([slotName, slotId]) => {
      const element = document.getElementById(slotId);
      
      if (element) {
        try {
          // Push to adsbygoogle array to initialize the ad
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          initializedCount++;
          console.log(`[Ads] Initialized slot: ${slotName} (${slotId})`);
        } catch (error) {
          console.error(`[Ads] Error initializing slot ${slotName}:`, error);
        }
      } else {
        console.log(`[Ads] Slot element not found: ${slotName} (${slotId})`);
      }
    });
    
    this.initialized = initializedCount > 0;
    console.log(`[Ads] Initialized ${initializedCount} ad slots`);
  }
  
  /**
   * Load ads for a specific page type
   * @param {string} pageType - Type of page ('homepage', 'country', 'destination')
   */
  loadAdsForPage(pageType) {
    const countryMonetization = window.COUNTRY_MONETIZATION;
    
    // Check if ads are enabled for this page type
    let shouldLoadAds = false;
    
    if (pageType === 'homepage') {
      shouldLoadAds = true;
    } else if (pageType === 'country' && countryMonetization) {
      shouldLoadAds = countryMonetization.adPlacements.countryPage;
    } else if (pageType === 'destination' && countryMonetization) {
      shouldLoadAds = countryMonetization.adPlacements.destinationPage;
    }
    
    if (shouldLoadAds) {
      console.log(`[Ads] Loading ads for ${pageType} page`);
      this.loadAdSense();
    } else {
      console.log(`[Ads] Ads disabled for ${pageType} page`);
    }
  }
  
  /**
   * Refresh specific ad slots
   * @param {Array<string>} slotIds - Array of slot IDs to refresh
   */
  refreshSlots(slotIds) {
    if (!this.loaded || typeof googletag === 'undefined') {
      console.log('[Ads] Cannot refresh - AdSense not loaded');
      return;
    }
    
    try {
      slotIds.forEach(slotId => {
        const element = document.getElementById(slotId);
        if (element) {
          googletag.cmd.push(() => {
            googletag.pubads().refresh([slotId]);
          });
          console.log(`[Ads] Refreshed slot: ${slotId}`);
        }
      });
    } catch (error) {
      console.error('[Ads] Error refreshing slots:', error);
    }
  }
  
  /**
   * Get current page type from URL
   * @returns {string} Page type
   */
  getPageType() {
    if (typeof window === 'undefined') return 'unknown';
    
    const path = window.location.pathname;
    
    if (path === '/' || path === '/index.html') {
      return 'homepage';
    } else if (path.match(/^\/countries\/[^\/]+\/$/)) {
      return 'country';
    } else if (path.match(/^\/countries\/[^\/]+\/[^\/]+/)) {
      return 'destination';
    }
    
    return 'other';
  }
  
  /**
   * Auto-load ads based on current page
   */
  autoLoad() {
    const pageType = this.getPageType();
    this.loadAdsForPage(pageType);
  }
  
  /**
   * Disable ads (useful for testing or premium users)
   */
  disable() {
    console.log('[Ads] Ads disabled');
    this.loaded = false;
    this.initialized = false;
  }
}

// Initialize global instance
if (typeof window !== 'undefined') {
  window.AdsLoader = AdsLoader;
  
  // Auto-load ads when DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    if (window.MONETIZATION_CONFIG) {
      window.adsLoader = new AdsLoader();
      window.adsLoader.autoLoad();
    }
  });
}