# Airfare Affiliate Programs Setup Guide

This guide explains how to set up affiliate programs for the airfare booking links on your Balkan Tourism website.

## 📋 Overview

Your site now includes a "Getting There" section with links to popular airfare booking sites:
- **Skyscanner** - Flight comparison engine
- **Kiwi** - Budget flight aggregator
- **Google Flights** - Flight search (no affiliate program)
- **Expedia** - Flight + hotel packages

## 🎯 Available Affiliate Programs

### 1. Skyscanner Affiliate Program

**Commission**: 5% per booking
**Approval Time**: 1-2 weeks
**Requirements**:
- Active website with travel content
- Minimum 1,000 monthly visitors (recommended)
- Professional design

**How to Apply**:
1. Visit: https://www.skyscanner.net/affiliate
2. Click "Apply Now"
3. Fill in your website details
4. Wait for approval email
5. Get your affiliate ID

**Tracking Parameter**: `aid`

### 2. Kiwi Affiliate Program

**Commission**: 3% per booking
**Approval Time**: 1-2 weeks
**Requirements**:
- Active website with travel content
- Professional design
- Traffic from relevant countries

**How to Apply**:
1. Visit: https://www.kiwi.com/affiliate
2. Click "Become an Affiliate"
3. Create an account
4. Fill in your website details
5. Wait for approval
6. Get your affiliate ID

**Tracking Parameter**: `affil`

### 3. Expedia Affiliate Program

**Commission**: 2-6% per booking (varies by product)
**Approval Time**: 2-4 weeks
**Requirements**:
- Established website (6+ months)
- Professional design
- Quality content
- Minimum traffic requirements

**How to Apply**:
1. Visit: https://www.expedia.com/affiliate
2. Choose "Expedia Affiliate Program"
3. Create an account
4. Submit your website for review
5. Wait for approval
6. Get your affiliate ID

**Tracking Parameter**: `affilid`

### 4. Google Flights

**Note**: Google Flights does NOT have an affiliate program. We include it because:
- It's a popular search engine
- Users trust it
- It provides comprehensive results
- Good for user experience (even without commission)

## 🔧 How to Add Affiliate IDs

Once approved, update your configuration file:

### Step 1: Open the Configuration File
```bash
nano /root/sf/js/monetization-config.js
```

### Step 2: Update Affiliate IDs

Find the affiliate programs section and add your IDs:

```javascript
affiliates: {
  // ... existing programs ...
  
  skyscanner: {
    enabled: true, // Change to true when approved
    affiliateId: 'YOUR_SKYSCANNER_ID', // Replace with your actual ID
    commissionRate: 0.05,
    trackingParam: 'aid',
    baseUrl: 'https://www.skyscanner.net/'
  },
  kiwi: {
    enabled: true, // Change to true when approved
    affiliateId: 'YOUR_KIWI_ID', // Replace with your actual ID
    commissionRate: 0.03,
    trackingParam: 'affil',
    baseUrl: 'https://www.kiwi.com/'
  },
  expedia: {
    enabled: true, // Change to true when approved
    affiliateId: 'YOUR_EXPEDIA_ID', // Replace with your actual ID
    commissionRate: 0.20,
    trackingParam: 'affilid',
    baseUrl: 'https://www.expedia.com/Hotel-Search'
  }
}
```

### Step 3: Update Links in HTML

Update the links in `/root/sf/countries/bosnia-herzegovina/index.html`:

**Before**:
```html
<a href="https://www.skyscanner.net/" target="_blank" rel="noopener noreferrer" class="airfare-button">
```

**After** (with affiliate tracking):
```html
<a href="https://www.skyscanner.net/?aid=YOUR_SKYSCANNER_ID" target="_blank" rel="noopener noreferrer" class="airfare-button">
```

## 📊 Expected Earnings

Based on typical travel affiliate performance:

| Program | Commission | Avg. Booking | Your Earning |
|---------|-----------|--------------|--------------|
| Skyscanner | 5% | $300 | $15 |
| Kiwi | 3% | $250 | $7.50 |
| Expedia | 4% | $400 | $16 |

**Monthly Potential** (with 100 bookings/month):
- Skyscanner: $1,500
- Kiwi: $750
- Expedia: $1,600
- **Total**: ~$3,850/month

## 💡 Tips for Success

### 1. Quality Content
- Write detailed destination guides
- Include flight information
- Add travel tips
- Update regularly

### 2. Traffic Building
- SEO optimization
- Social media promotion
- Email marketing
- Guest posting

### 3. User Experience
- Make links prominent
- Provide helpful information
- Fast page load times
- Mobile-friendly design

### 4. Compliance
- Disclose affiliate relationships
- Follow program terms
- Don't incentivize clicks
- Be transparent

## 🎯 Next Steps

### Phase 1: Apply for Programs
1. Apply to Skyscanner (easiest approval)
2. Apply to Kiwi (good for budget travelers)
3. Apply to Expedia (higher commission)

### Phase 2: Add Tracking
1. Get approved
2. Add affiliate IDs to config
3. Update links with tracking parameters
4. Test tracking works

### Phase 3: Monitor Performance
1. Check affiliate dashboards
2. Track clicks and conversions
3. Optimize placement
4. A/B test different approaches

## 📞 Support

If you need help:
- **Skyscanner**: affiliates@skyscanner.net
- **Kiwi**: affiliate@kiwi.com
- **Expedia**: affiliate-support@expedia.com

## 🔗 Useful Resources

- [Skyscanner Affiliate FAQ](https://www.skyscanner.net/affiliate/faq)
- [Kiwi Affiliate Documentation](https://partners.kiwi.com/)
- [Expedia Affiliate Program](https://www.expedia.com/affiliate)

## ⚠️ Important Notes

1. **Approval Not Guaranteed**: Programs may reject your site
2. **Traffic Requirements**: Some programs require minimum traffic
3. **Payment Thresholds**: Most programs have minimum payout amounts
4. **Cookie Duration**: Check how long tracking cookies last
5. **Geographic Restrictions**: Some programs limit by country

## 🎉 Summary

Your "Getting There" section is now live with:
- ✅ Airport information
- ✅ Airfare booking links
- ✅ Professional styling
- ✅ Mobile responsive
- ✅ Ready for affiliate tracking

Apply for affiliate programs, add your IDs, and start earning! 🚀
