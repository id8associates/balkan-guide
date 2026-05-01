# Analytics Quick Start

## 🚀 Get Started in 5 Minutes

### 1. Google Analytics (2 minutes)

1. Go to: https://analytics.google.com/
2. Create account → Get Measurement ID (format: `G-XXXXXXXXXX`)
3. Edit `/root/sf/js/monetization-config.js`:
   ```javascript
   trackingId: 'G-XXXXXXXXXX' // Replace with your ID
   ```

### 2. Microsoft Clarity (2 minutes)

1. Go to: https://clarity.microsoft.com/
2. Create project → Get Project ID (format: `xxxxxxxxxx`)
3. Edit `/root/sf/js/monetization-config.js`:
   ```javascript
   projectId: 'xxxxxxxxxx' // Replace with your ID
   ```

### 3. Test (1 minute)

1. Open your website
2. Open browser console (F12)
3. Look for:
   - `[Analytics] Google Analytics initialized: G-XXXXXXXXXX`
   - `[Analytics] Microsoft Clarity initialized: xxxxxxxxxx`
4. Check both dashboards for your visit

## ✅ What's Already Done

- ✅ Analytics initialization script created
- ✅ Both HTML pages updated with scripts
- ✅ Configuration file ready for your IDs
- ✅ Automatic page view tracking
- ✅ Custom event tracking functions
- ✅ Performance tracking
- ✅ Error tracking

## 📊 What Gets Tracked

### Automatically
- Page views (all pages)
- User sessions
- Page load performance
- Navigation between pages

### Manually (when you call them)
- Affiliate clicks
- Email signups
- Form submissions
- Downloads
- Outbound links
- Custom events

## 🔧 Available Functions

```javascript
// Track custom events
BalkanAnalytics.trackCustomEvent('Category', 'Action', 'Label', Value);

// Track outbound links
BalkanAnalytics.trackOutboundLink('https://example.com', 'affiliate');

// Track downloads
BalkanAnalytics.trackDownload('/files/guide.pdf', 'Travel Guide');

// Track form submissions
BalkanAnalytics.trackFormSubmit('email-form', 'newsletter');

// Track errors
BalkanAnalytics.trackError(error, { context: 'info' });

// Send manual page view
BalkanAnalytics.sendPageView();

// Get current page type
BalkanAnalytics.getPageType(); // 'homepage', 'country', 'destination'

// Get current country
BalkanAnalytics.getCurrentCountry(); // 'bosnia-herzegovina', etc.
```

## 🎯 Quick Test

Open browser console and run:

```javascript
// Test event tracking
BalkanAnalytics.trackCustomEvent('Test', 'Click', 'Test Button');
```

Check Google Analytics → Realtime → Events
Check Microsoft Clarity → Live sessions

## 📁 Files Modified

- `/root/sf/js/analytics-init.js` (NEW)
- `/root/sf/js/monetization-config.js` (UPDATED)
- `/root/sf/index.html` (UPDATED)
- `/root/sf/countries/bosnia-herzegovina/index.html` (UPDATED)

## 🆘 Troubleshooting

**No data showing?**
1. Check browser console for errors
2. Verify IDs are correct in config
3. Check if `enabled: true` in config
4. Try incognito/private mode
5. Check if ad blocker is blocking analytics

**Events not tracking?**
1. Check console for tracking messages
2. Verify function name is correct
3. Look for JavaScript errors

## 📖 Full Documentation

See `/root/sf/ANALYTICS_SETUP_GUIDE.md` for complete setup instructions.

---

**Done! Your analytics are ready to track.** 🎉

Just add your IDs and you're good to go!