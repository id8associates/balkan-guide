# Analytics Setup Guide

## Overview

This guide will help you set up Google Analytics and Microsoft Clarity for your Balkan Tourism website. Both analytics tools are now integrated into your site and ready to use.

## Why Add Analytics NOW?

✅ **Testing Phase**: Verify tracking works before going live  
✅ **Baseline Data**: See how the site performs during development  
✅ **No Downside**: Analytics just collect data - no harm in having them active  
✅ **Easier Debug**: Fix any tracking issues before real users visit  
✅ **Template Consistency**: Get it right once, use for all countries  

## Files Modified

### Core Files
- `/root/sf/js/analytics-init.js` - Analytics initialization (NEW)
- `/root/sf/js/monetization-config.js` - Updated with Clarity configuration

### HTML Files
- `/root/sf/index.html` - Added analytics scripts
- `/root/sf/countries/bosnia-herzegovina/index.html` - Added analytics scripts

## Setup Instructions

### Step 1: Set Up Google Analytics

#### 1.1 Create Google Analytics Account

1. Go to: https://analytics.google.com/
2. Click "Start measuring"
3. Sign in with your Google account
4. Create an account:
   - Account name: `Balkan Tourism`
   - Property name: `Balkan Tourism Website`
   - Reporting time zone: Select your timezone
   - Currency: EUR (or your preferred currency)

#### 1.2 Get Your Tracking ID

1. After creating the property, you'll see a "Data Stream" section
2. Click "Web" to create a data stream
3. Enter your website URL (e.g., `https://balkantourism.com`)
4. Stream name: `Main Website`
5. Click "Create stream"
6. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

#### 1.3 Update Configuration

Edit `/root/sf/js/monetization-config.js`:

```javascript
analytics: {
  googleAnalytics: {
    enabled: true,
    trackingId: 'G-XXXXXXXXXX' // Replace with your actual tracking ID
  },
  // ...
}
```

#### 1.4 Verify Google Analytics

1. Open your website in a browser
2. Open browser console (F12)
3. You should see: `[Analytics] Google Analytics initialized: G-XXXXXXXXXX`
4. Go to Google Analytics → Realtime → Overview
5. You should see your visit in the realtime report

### Step 2: Set Up Microsoft Clarity

#### 2.1 Create Microsoft Clarity Account

1. Go to: https://clarity.microsoft.com/
2. Click "Get started"
3. Sign in with your Microsoft account (or create one)
4. Click "Create new project"

#### 2.2 Create a Project

1. Project name: `Balkan Tourism`
2. Website URL: `https://balkantourism.com` (or your actual URL)
3. Industry: `Travel & Tourism`
4. Time zone: Select your timezone
5. Click "Create"

#### 2.3 Get Your Project ID

1. After creating the project, you'll see your **Project ID**
2. Copy the project ID (format: `xxxxxxxxxx`)

#### 2.4 Update Configuration

Edit `/root/sf/js/monetization-config.js`:

```javascript
analytics: {
  googleAnalytics: {
    enabled: true,
    trackingId: 'G-XXXXXXXXXX'
  },
  microsoftClarity: {
    enabled: true,
    projectId: 'xxxxxxxxxx' // Replace with your actual project ID
  },
  // ...
}
```

#### 2.5 Verify Microsoft Clarity

1. Open your website in a browser
2. Open browser console (F12)
3. You should see: `[Analytics] Microsoft Clarity initialized: xxxxxxxxxx`
4. Go to Microsoft Clarity → Dashboard
5. You should see your session recorded

### Step 3: Test Tracking

#### 3.1 Test Page Views

1. Open your homepage
2. Check browser console for: `[Analytics] Page view tracked: homepage (homepage)`
3. Go to Google Analytics → Realtime → Overview
4. Go to Microsoft Clarity → Live sessions

#### 3.2 Test Event Tracking

Open browser console and run:

```javascript
// Test custom event
BalkanAnalytics.trackCustomEvent('Test', 'Button Click', 'Test Button');

// Test outbound link tracking
BalkanAnalytics.trackOutboundLink('https://example.com', 'test');

// Test download tracking
BalkanAnalytics.trackDownload('/files/test.pdf', 'Test PDF');

// Test form tracking
BalkanAnalytics.trackFormSubmit('test-form', 'contact');
```

Check both Google Analytics and Microsoft Clarity for these events.

#### 3.3 Test on Different Pages

1. Visit homepage
2. Visit Bosnia & Herzegovina country page
3. Click on different destinations
4. Check that page views are tracked for each

## What Gets Tracked Automatically

### Google Analytics

✅ **Page Views**
- Homepage
- Country pages
- Destination pages
- All page navigation

✅ **Performance**
- Page load time
- Navigation timing

✅ **Custom Events** (when you call them)
- Affiliate clicks
- Email signups
- Form submissions
- Downloads
- Outbound links

### Microsoft Clarity

✅ **User Sessions**
- All user interactions
- Heatmaps
- Session recordings
- Click maps
- Scroll maps

✅ **User Behavior**
- Mouse movements
- Click patterns
- Scroll depth
- Rage clicks
- Dead clicks

## Manual Event Tracking

The analytics system provides these functions for manual tracking:

### Track Custom Events

```javascript
BalkanAnalytics.trackCustomEvent(category, action, label, value);

// Examples:
BalkanAnalytics.trackCustomEvent('Navigation', 'Menu Click', 'Destinations');
BalkanAnalytics.trackCustomEvent('Engagement', 'Map Click', 'Sarajevo');
BalkanAnalytics.trackCustomEvent('Conversion', 'Newsletter Signup', null, 1);
```

### Track Outbound Links

```javascript
BalkanAnalytics.trackOutboundLink(url, linkType);

// Examples:
BalkanAnalytics.trackOutboundLink('https://booking.com', 'affiliate');
BalkanAnalytics.trackOutboundLink('https://facebook.com', 'social');
```

### Track Downloads

```javascript
BalkanAnalytics.trackDownload(url, fileName);

// Examples:
BalkanAnalytics.trackDownload('/guides/bosnia.pdf', 'Bosnia Travel Guide');
BalkanAnalytics.trackDownload('/images/map.png', 'Destination Map');
```

### Track Form Submissions

```javascript
BalkanAnalytics.trackFormSubmit(formId, formType);

// Examples:
BalkanAnalytics.trackFormSubmit('email-signup-form', 'newsletter');
BalkanAnalytics.trackFormSubmit('contact-form', 'contact');
```

### Track Errors

```javascript
BalkanAnalytics.trackError(error, context);

// Example:
try {
  // Some code that might fail
} catch (error) {
  BalkanAnalytics.trackError(error, { action: 'loadMap' });
}
```

## Adding Analytics to New Countries

For each new country, simply add these scripts to the HTML:

```html
<script src="/js/monetization-config.js"></script>
<script src="/js/analytics-init.js"></script>
```

That's it! No additional configuration needed.

## Privacy & Compliance

### GDPR Compliance

Both Google Analytics and Microsoft Clarity are GDPR-compliant when configured correctly:

1. **Anonymize IP addresses** - Already enabled in our setup
2. **Cookie consent** - You may need to add a cookie consent banner
3. **Data retention** - Configure data retention periods in both platforms

### Cookie Consent Banner (Optional)

If you want to add a cookie consent banner, you can use a service like:

- Cookiebot: https://www.cookiebot.com/
- OneTrust: https://www.onetrust.com/
- Cookie Information: https://cookieinformation.com/

## Monitoring & Reports

### Google Analytics Key Reports

1. **Realtime** - See current visitors
2. **Audience** - Demographics, interests, devices
3. **Acquisition** - How users find your site
4. **Behavior** - What users do on your site
5. **Conversions** - Goal completions

### Microsoft Clarity Key Reports

1. **Dashboard** - Overview of user activity
2. **Heatmaps** - Where users click
3. **Session Recordings** - Watch user sessions
4. **Funnel Analysis** - User journey through your site
5. **Insights** - AI-powered recommendations

## Troubleshooting

### Google Analytics Not Working

**Problem**: No data showing in Google Analytics

**Solutions**:
1. Check browser console for errors
2. Verify tracking ID is correct in config
3. Check if `enabled: true` in config
4. Clear browser cache and cookies
5. Try in incognito/private mode
6. Check if ad blocker is blocking analytics

### Microsoft Clarity Not Working

**Problem**: No sessions showing in Clarity

**Solutions**:
1. Check browser console for errors
2. Verify project ID is correct in config
3. Check if `enabled: true` in config
4. Clear browser cache and cookies
5. Try in incognito/private mode
6. Check if ad blocker is blocking Clarity

### Events Not Tracking

**Problem**: Custom events not appearing

**Solutions**:
1. Check browser console for tracking messages
2. Verify you're calling the correct function
3. Check if event parameters are valid
4. Look for JavaScript errors in console
5. Test with the examples above

## Best Practices

### 1. Test Before Launch

- Test all tracking on staging environment
- Verify page views are tracked
- Test custom events
- Check both Google Analytics and Clarity

### 2. Monitor Regularly

- Check analytics daily for first week
- Look for unusual patterns
- Monitor for tracking errors
- Review user sessions in Clarity

### 3. Set Up Goals (Google Analytics)

1. Go to Admin → Goals → New Goal
2. Create goals for:
   - Email signups
   - Guide downloads
   - Affiliate link clicks
   - Time on site (> 2 minutes)
   - Pages per session (> 3 pages)

### 4. Set Up Funnels (Microsoft Clarity)

1. Create funnels for:
   - Homepage → Country page → Destination
   - Email signup flow
   - Guide download flow

### 5. Regular Review

- Weekly: Check traffic trends
- Monthly: Review user behavior
- Quarterly: Analyze conversion rates
- Annually: Update tracking strategy

## Next Steps

### Immediate (Today)
1. Set up Google Analytics account
2. Set up Microsoft Clarity account
3. Update configuration with your IDs
4. Test tracking on your site

### This Week
1. Monitor initial traffic
2. Set up goals in Google Analytics
3. Review first user sessions in Clarity
4. Test custom event tracking

### This Month
1. Analyze traffic patterns
2. Identify popular content
3. Set up conversion funnels
4. Optimize based on insights

## Support

### Google Analytics Support
- Help Center: https://support.google.com/analytics/
- Community: https://support.google.com/analytics/community

### Microsoft Clarity Support
- Help Center: https://learn.microsoft.com/en-us/clarity/
- Community: https://clarity.microsoft.com/community

---

**Your analytics are now ready to track!** 📊

Remember: Add analytics NOW, not after publishing. This gives you time to test and verify everything works before real users visit your site.