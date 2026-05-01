/**
 * Balkan Tourism — Analytics Initialization
 * 
 * This file initializes Google Analytics and Microsoft Clarity
 * Load this on every page after the configuration files
 */

(function() {
  'use strict';
  
  // Get configuration
  const config = window.MONETIZATION_CONFIG || {};
  
  // ─── Google Analytics ───
  function initGoogleAnalytics() {
    if (!config.analytics || !config.analytics.googleAnalytics || !config.analytics.googleAnalytics.enabled) {
      console.log('[Analytics] Google Analytics is disabled');
      return;
    }
    
    const trackingId = config.analytics.googleAnalytics.trackingId;
    
    if (!trackingId || trackingId === 'G-XXXXXXXXXX') {
      console.log('[Analytics] Google Analytics tracking ID not configured');
      return;
    }
    
    // Load gtag.js
    (function() {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);
      
      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      
      script.onload = function() {
        gtag('js', new Date());
        gtag('config', trackingId, {
          anonymize_ip: true,
          send_page_view: false // We'll send page views manually
        });
        
        console.log(`[Analytics] Google Analytics initialized: ${trackingId}`);
        
        // Send initial page view
        sendPageView();
      };
      
      script.onerror = function() {
        console.error('[Analytics] Failed to load Google Analytics');
      };
    })();
  }
  
  // ─── Microsoft Clarity ───
  function initMicrosoftClarity() {
    if (!config.analytics || !config.analytics.microsoftClarity || !config.analytics.microsoftClarity.enabled) {
      console.log('[Analytics] Microsoft Clarity is disabled');
      return;
    }
    
    const projectId = config.analytics.microsoftClarity.projectId;
    
    if (!projectId || projectId === 'YOUR_CLARITY_PROJECT_ID') {
      console.log('[Analytics] Microsoft Clarity project ID not configured');
      return;
    }
    
    // Load Clarity using the official Microsoft Clarity snippet
    try {
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          t.onerror = function() {
            console.error('[Analytics] Failed to load Microsoft Clarity script');
          };
          t.onload = function() {
            console.log(`[Analytics] Microsoft Clarity script loaded successfully: ${projectId}`);
          };
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", projectId);
      
      console.log(`[Analytics] Microsoft Clarity initialized: ${projectId}`);
    } catch (error) {
      console.error('[Analytics] Error initializing Microsoft Clarity:', error);
    }
  }
  
  // ─── Page View Tracking ───
  function sendPageView() {
    if (typeof gtag !== 'undefined') {
      const pageType = getPageType();
      const country = getCurrentCountry();
      
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
        country: country,
        page_type: pageType
      });
      
      console.log(`[Analytics] Page view tracked: ${pageType} (${country})`);
    }
  }
  
  // ─── Helper Functions ───
  function getPageType() {
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
  
  function getCurrentCountry() {
    const path = window.location.pathname;
    const match = path.match(/\/countries\/([^\/]+)/);
    return match ? match[1] : 'homepage';
  }
  
  // ─── Event Tracking ───
  function trackEvent(eventName, parameters = {}) {
    if (typeof gtag !== 'undefined') {
      const eventParams = {
        country: getCurrentCountry(),
        page_type: getPageType(),
        ...parameters
      };
      
      gtag('event', eventName, eventParams);
      console.log(`[Analytics] Event tracked: ${eventName}`, eventParams);
    }
  }
  
  // ─── Custom Event Tracking ───
  function trackCustomEvent(category, action, label = null, value = null) {
    if (typeof gtag !== 'undefined') {
      const eventParams = {
        event_category: category,
        event_action: action,
        country: getCurrentCountry(),
        page_type: getPageType()
      };
      
      if (label) eventParams.event_label = label;
      if (value !== null) eventParams.value = value;
      
      gtag('event', action, eventParams);
      console.log(`[Analytics] Custom event tracked: ${category} - ${action}`, eventParams);
    }
  }
  
  // ─── Outbound Link Tracking ───
  function trackOutboundLink(url, linkType = 'external') {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        event_category: 'Outbound Link',
        event_label: url,
        link_type: linkType,
        country: getCurrentCountry(),
        transport_type: 'beacon'
      });
      
      console.log(`[Analytics] Outbound link tracked: ${url} (${linkType})`);
    }
  }
  
  // ─── Download Tracking ───
  function trackDownload(url, fileName = null) {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'download', {
        event_category: 'Download',
        event_label: fileName || url,
        file_url: url,
        country: getCurrentCountry()
      });
      
      console.log(`[Analytics] Download tracked: ${fileName || url}`);
    }
  }
  
  // ─── Form Tracking ───
  function trackFormSubmit(formId, formType = 'unknown') {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'form_submit', {
        event_category: 'Form',
        event_label: formId,
        form_type: formType,
        country: getCurrentCountry()
      });
      
      console.log(`[Analytics] Form submit tracked: ${formId} (${formType})`);
    }
  }
  
  // ─── Error Tracking ───
  function trackError(error, context = {}) {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'exception', {
        description: error.message || String(error),
        fatal: false,
        country: getCurrentCountry(),
        page_type: getPageType(),
        ...context
      });
      
      console.error('[Analytics] Error tracked:', error, context);
    }
  }
  
  // ─── Performance Tracking ───
  function trackPerformance() {
    if (typeof gtag !== 'undefined' && 'PerformanceObserver' in window) {
      // Track page load time
      window.addEventListener('load', function() {
        setTimeout(function() {
          const perfData = performance.timing;
          const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
          
          gtag('event', 'timing_complete', {
            name: 'load',
            value: pageLoadTime,
            event_category: 'Performance',
            country: getCurrentCountry()
          });
          
          console.log(`[Analytics] Performance tracked: ${pageLoadTime}ms`);
        }, 0);
      });
    }
  }
  
  // ─── Initialize on DOM Ready ───
  function init() {
    // Initialize analytics services
    initGoogleAnalytics();
    initMicrosoftClarity();
    
    // Track performance
    trackPerformance();
    
    // Track page view on SPA navigation
    let lastUrl = location.href;
    new MutationObserver(() => {
      const url = location.href;
      if (url !== lastUrl) {
        lastUrl = url;
        sendPageView();
      }
    }).observe(document, { subtree: true, childList: true });
    
    // Make tracking functions available globally
    window.BalkanAnalytics = {
      trackEvent: trackEvent,
      trackCustomEvent: trackCustomEvent,
      trackOutboundLink: trackOutboundLink,
      trackDownload: trackDownload,
      trackFormSubmit: trackFormSubmit,
      trackError: trackError,
      sendPageView: sendPageView,
      getPageType: getPageType,
      getCurrentCountry: getCurrentCountry
    };
    
    console.log('[Analytics] All tracking functions initialized');
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
})();