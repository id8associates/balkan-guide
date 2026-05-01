/**
 * Balkan Tourism — Email Signup Handler
 * 
 * Handles email subscription forms and integration with email service providers
 * Supports Mailchimp, ConvertKit, and Sendinblue
 */

class EmailSignupHandler {
  constructor(config) {
    this.config = config || window.MONETIZATION_CONFIG;
    this.form = document.getElementById('email-signup-form');
    this.currentCountry = this.getCurrentCountry();
    this.init();
  }
  
  /**
   * Initialize the email signup handler
   */
  init() {
    if (!this.config.email.enabled) {
      console.log('[Email Signup] Email signup is disabled');
      return;
    }
    
    if (this.form) {
      this.form.addEventListener('submit', (e) => this.handleSubmit(e));
      console.log('[Email Signup] Email signup form initialized');
    } else {
      console.log('[Email Signup] Email signup form not found');
    }
  }
  
  /**
   * Handle form submission
   * @param {Event} e - Submit event
   */
  async handleSubmit(e) {
    e.preventDefault();
    
    const email = this.form.querySelector('input[name="email"]').value;
    const submitBtn = this.form.querySelector('button[type="submit"]');
    
    // Validate email
    if (!this.validateEmail(email)) {
      this.showError('Please enter a valid email address');
      return;
    }
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Subscribing...';
    
    try {
      // Send to email service
      const result = await this.subscribeEmail(email);
      
      // Show success message
      this.showSuccess(result);
      
      // Track signup
      this.trackSignup(email);
      
    } catch (error) {
      console.error('[Email Signup] Subscription failed:', error);
      this.showError(error.message || 'Something went wrong. Please try again.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Get Free Guide';
    }
  }
  
  /**
   * Subscribe email to the email service
   * @param {string} email - Email address
   * @returns {Promise<Object>} Subscription result
   */
  async subscribeEmail(email) {
    const provider = this.config.email.provider;
    
    switch (provider) {
      case 'mailchimp':
        return this.subscribeMailchimp(email);
      case 'convertkit':
        return this.subscribeConvertKit(email);
      case 'sendinblue':
        return this.subscribeSendinblue(email);
      default:
        return this.subscribeCustom(email);
    }
  }
  
  /**
   * Subscribe to Mailchimp
   * @param {string} email - Email address
   * @returns {Promise<Object>} Subscription result
   */
  async subscribeMailchimp(email) {
    // In production, this would call your backend API
    // which then calls Mailchimp API with proper authentication
    
    const response = await fetch(this.config.email.apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        listId: this.config.email.listId,
        provider: 'mailchimp',
        source: 'balkan-tourism',
        country: this.currentCountry,
        timestamp: new Date().toISOString()
      })
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Subscription failed');
    }
    
    return response.json();
  }
  
  /**
   * Subscribe to ConvertKit
   * @param {string} email - Email address
   * @returns {Promise<Object>} Subscription result
   */
  async subscribeConvertKit(email) {
    const response = await fetch(this.config.email.apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        formId: this.config.email.listId,
        provider: 'convertkit',
        source: 'balkan-tourism',
        country: this.currentCountry,
        timestamp: new Date().toISOString()
      })
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Subscription failed');
    }
    
    return response.json();
  }
  
  /**
   * Subscribe to Sendinblue
   * @param {string} email - Email address
   * @returns {Promise<Object>} Subscription result
   */
  async subscribeSendinblue(email) {
    const response = await fetch(this.config.email.apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        listId: this.config.email.listId,
        provider: 'sendinblue',
        source: 'balkan-tourism',
        country: this.currentCountry,
        timestamp: new Date().toISOString()
      })
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Subscription failed');
    }
    
    return response.json();
  }
  
  /**
   * Subscribe using custom endpoint
   * @param {string} email - Email address
   * @returns {Promise<Object>} Subscription result
   */
  async subscribeCustom(email) {
    const response = await fetch(this.config.email.apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        listId: this.config.email.listId,
        source: 'balkan-tourism',
        country: this.currentCountry,
        timestamp: new Date().toISOString()
      })
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Subscription failed');
    }
    
    return response.json();
  }
  
  /**
   * Validate email address
   * @param {string} email - Email address
   * @returns {boolean} Valid or not
   */
  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  /**
   * Show success message
   * @param {Object} result - Subscription result
   */
  showSuccess(result) {
    const form = this.form;
    const parent = form.parentElement;
    
    // Replace form with success message
    form.innerHTML = `
      <div class="email-success-message">
        <div class="success-icon">✓</div>
        <h4>You're in!</h4>
        <p>Check your inbox for your free Balkan travel guide.</p>
        ${result.downloadUrl ? `<a href="${result.downloadUrl}" class="download-link" target="_blank">Download Guide Now</a>` : ''}
      </div>
    `;
    
    // Add success animation
    form.classList.add('success');
  }
  
  /**
   * Show error message
   * @param {string} message - Error message
   */
  showError(message) {
    // Remove existing error message
    const existingError = this.form.querySelector('.email-error-message');
    if (existingError) {
      existingError.remove();
    }
    
    // Create and add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'email-error-message';
    errorDiv.textContent = message;
    this.form.insertBefore(errorDiv, this.form.firstChild);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      errorDiv.remove();
    }, 5000);
  }
  
  /**
   * Track email signup event
   * @param {string} email - Email address
   */
  trackSignup(email) {
    // Track with analytics
    if (typeof window.analyticsTracker !== 'undefined') {
      window.analyticsTracker.trackEmailSignup(email, this.currentCountry);
    }
    
    // Track with Google Analytics directly
    if (typeof gtag !== 'undefined') {
      gtag('event', 'email_signup', {
        event_category: 'Email Marketing',
        event_label: this.currentCountry,
        country: this.currentCountry
      });
    }
    
    console.log(`[Email Signup] Tracked signup: ${email} (${this.currentCountry})`);
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
   * Get page type
   * @returns {string} Page type
   */
  getPageType() {
    if (typeof window === 'undefined') return 'unknown';
    
    const path = window.location.pathname;
    
    if (path === '/' || path === '/index.html') {
      return 'homepage';
    } else if (path.match(/^\/countries\/[^\/]+\/$/)) {
      return 'country';
    }
    
    return 'other';
  }
}

// Initialize global instance
if (typeof window !== 'undefined') {
  window.EmailSignupHandler = EmailSignupHandler;
  
  // Auto-initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    if (window.MONETIZATION_CONFIG && window.MONETIZATION_CONFIG.email.enabled) {
      window.emailSignup = new EmailSignupHandler();
    }
  });
}