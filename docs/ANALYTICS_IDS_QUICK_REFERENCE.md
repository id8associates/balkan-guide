# Quick Reference: Creating Analytics IDs

## 🎯 5-Minute Summary

### Google Analytics (3 minutes)

1. **Go to**: https://analytics.google.com/
2. **Click**: "Start measuring"
3. **Fill in**:
   - Account name: `Balkan Tourism`
   - Property name: `Balkan Tourism Website`
   - Website URL: `https://yourdomain.com` (or `http://localhost`)
   - Stream name: `Main Website`
4. **Copy**: Your Measurement ID (format: `G-XXXXXXXXXX`)

### Microsoft Clarity (2 minutes)

1. **Go to**: https://clarity.microsoft.com/
2. **Click**: "Get started"
3. **Fill in**:
   - Project name: `Balkan Tourism`
   - Website URL: `https://yourdomain.com` (or `http://localhost`)
4. **Copy**: Your Project ID (format: `xxxxxxxxxx`)

### Update Configuration (30 seconds)

Edit `/root/sf/js/monetization-config.js`:

```javascript
analytics: {
  googleAnalytics: {
    enabled: true,
    trackingId: 'G-XXXXXXXXXX' // ← Replace with your GA ID
  },
  microsoftClarity: {
    enabled: true,
    projectId: 'xxxxxxxxxx' // ← Replace with your Clarity ID
  },
```

### Test (30 seconds)

1. Open your website
2. Press `F12` (open console)
3. Look for:
   - `[Analytics] Google Analytics initialized: G-XXXXXXXXXX` ✅
   - `[Analytics] Microsoft Clarity initialized: xxxxxxxxxx` ✅

---

## 📍 Where to Find Your IDs

### Google Analytics ID
1. Go to: https://analytics.google.com/
2. Click: Admin (gear icon, bottom left)
3. Click: Data Streams (under Property)
4. Click: Your stream name
5. **ID is at the top**

### Microsoft Clarity ID
1. Go to: https://clarity.microsoft.com/
2. Click: Your project name
3. Click: Settings (gear icon, top right)
4. **ID is at the top**

---

## ✅ Testing Checklist

- [ ] Created Google Analytics account
- [ ] Got Google Analytics ID: `G-_____________`
- [ ] Created Microsoft Clarity account
- [ ] Got Microsoft Clarity ID: `______________`
- [ ] Updated `/root/sf/js/monetization-config.js`
- [ ] Refreshed website (Ctrl + Shift + R)
- [ ] Checked console for success messages
- [ ] Verified data in Google Analytics
- [ ] Verified sessions in Microsoft Clarity

---

## 🆘 Quick Troubleshooting

**Problem**: "tracking ID not configured"
- **Solution**: Check if you saved the file, refresh page

**Problem**: No data showing
- **Solution**: Wait 5-10 minutes, try incognito mode

**Problem**: Can't find ID
- **Solution**: See "Where to Find Your IDs" above

---

## 📖 Full Documentation

For detailed step-by-step instructions, see:
`/root/sf/CREATE_ANALYTICS_IDS_GUIDE.md`

---

**That's it!** 🎉

Just follow these steps and you'll have both analytics platforms tracking your website in under 5 minutes.