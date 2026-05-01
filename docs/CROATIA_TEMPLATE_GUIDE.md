# Croatia as Template — Quick Reference Guide

This guide shows how to use the Croatia page as a template for creating new country pages.

---

## 📁 File Structure

```
/root/sf/
├── index.html                          # Homepage (country cards)
├── css/
│   └── global.css                      # Global styles
├── js/
│   ├── global.js                       # Global JavaScript
│   ├── monetization-config.js          # Global monetization
│   └── analytics-init.js               # Analytics initialization
├── flags/
│   ├── croatia.svg                     # Country flags
│   └── bosnia-herzegovina.svg
└── countries/
    ├── croatia/                        # Croatia page
    │   ├── index.html
    │   ├── css/
    │   │   └── country.css
    │   └── js/
    │       ├── data.js                 # Destinations, restaurants, accommodations
    │       ├── country.js              # Map initialization
    │       └── monetization.js         # Country-specific monetization
    └── bosnia-herzegovina/             # Bosnia page
        ├── index.html
        ├── css/
        │   └── country.css
        └── js/
            ├── data.js
            ├── country.js
            └── monetization.js
```

---

## 🔄 Creating a New Country Page

### Step 1: Create Directory Structure
```bash
mkdir -p /root/sf/countries/{country}/css /root/sf/countries/{country}/js
```

Replace `{country}` with the country slug (e.g., `serbia`, `montenegro`).

### Step 2: Create Flag
Create `/root/sf/flags/{country}.svg` with the country's flag.

### Step 3: Copy and Modify Files

#### index.html
Copy `/root/sf/countries/croatia/index.html` and modify:
- Update title and meta description
- Update country name in header
- Update navigation menu items
- Update "Getting There" section with country-specific airports

#### css/country.css
Copy `/root/sf/countries/croatia/css/country.css` and modify:
- Update country-specific colors if needed
- Add any country-specific styles

#### js/data.js
Copy `/root/sf/countries/croatia/js/data.js` and modify:
- Update `touristPlaces` object with country destinations
- Update `restaurantsData` object with country restaurants
- Update `accommodationsData` object with country accommodations
- Update `thingsToDoData` object with country activities

#### js/country.js
Copy `/root/sf/countries/croatia/js/country.js` and modify:
- Update map center coordinates
- Update zoom levels
- Update country name in analytics tracking

#### js/monetization.js
Copy `/root/sf/countries/croatia/js/monetization.js` and modify:
- Update country code
- Update currency
- Update local affiliate partners
- Update featured placements
- Update country-specific products

### Step 4: Update Homepage
Add country card to `/root/sf/index.html`:
```html
<!-- ═══ {Country Name} ═══ -->
<a href="/countries/{country}/" class="country-card">
  <div class="arrow">→</div>
  <div class="country-card-flag">
    <img src="/flags/{country}.svg" alt="Flag of {Country}" loading="lazy">
  </div>
  <div class="country-card-body">
    <h4 class="country-card-name">{Country Name}</h4>
    <p class="country-card-tagline">{Tagline}</p>
    <div class="country-card-stats">
      <span>📍 {X} Destinations</span>
      <span>🍽 {Y}+ Restaurants</span>
    </div>
  </div>
</a>
```

---

## 📋 Data Structure Reference

### touristPlaces Object
```javascript
const touristPlaces = {
  placeId: {
    name: "Place Name",
    location: "City, Region",
    type: "Type (UNESCO, National Park, etc.)",
    rating: 4.5,
    reviews: 10000,
    coords: [latitude, longitude],
    image: "https://image-url.com",
    description: "2-3 paragraphs describing the place",
    bestTime: "Best time to visit",
    tips: "Practical tips for visitors"
  }
};
```

### restaurantsData Object
```javascript
const restaurantsData = {
  placeId: [
    {
      name: "Restaurant Name",
      type: "Cuisine Type",
      rating: 4.5,
      specialty: "Signature Dish",
      url: "https://google-maps-link"
    }
  ]
};
```

### accommodationsData Object
```javascript
const accommodationsData = {
  placeId: [
    {
      name: "Hotel Name",
      type: "Hotel Type",
      rating: 4.5,
      price: "$$$",
      url: "https://booking.com/affiliate-link"
    }
  ]
};
```

### thingsToDoData Object
```javascript
const thingsToDoData = {
  placeId: [
    "Activity 1",
    "Activity 2",
    "Activity 3"
  ]
};
```

---

## 🎯 Best Practices

### 1. Content Quality
- Write 2-3 paragraphs for each destination
- Include historical context and cultural significance
- Add practical visitor information
- Highlight unique selling points

### 2. Data Consistency
- Use consistent place IDs across all data objects
- Ensure coordinates are accurate
- Match restaurant and accommodation keys to place IDs
- Use consistent rating scales (1-5)

### 3. Images
- Use high-quality images (800px width recommended)
- Use Unsplash or your own photos
- Ensure images are relevant to the destination
- Use descriptive alt text

### 4. Monetization
- Add Booking.com affiliate links for accommodations
- Include airfare booking links in "Getting There" section
- Set up country-specific affiliate partners
- Track analytics for all interactions

### 5. SEO
- Use descriptive titles and meta descriptions
- Include relevant keywords
- Use semantic HTML
- Add canonical URLs

---

## 🧪 Testing Checklist

Before launching a new country page:

- [ ] Page loads successfully (HTTP 200)
- [ ] Map displays with all markers
- [ ] Navigation menu works
- [ ] Side panel opens with place details
- [ ] All sections display correctly
- [ ] Responsive design works on mobile
- [ ] Analytics tracking active
- [ ] Flag displays correctly
- [ ] All links work
- [ ] Images load properly
- [ ] No console errors

---

## 📊 Content Targets

### Minimum Requirements
- **Destinations**: 15-20 places
- **Restaurants**: 3-5 per destination
- **Accommodations**: 3-5 per destination
- **Things to Do**: 5-8 per destination

### Quality Standards
- **Descriptions**: 2-3 paragraphs each
- **Ratings**: 4.0+ for all recommendations
- **Images**: High-quality, relevant
- **Links**: All external links working

---

## 🚀 Quick Start Template

### Copy-Paste Commands

```bash
# 1. Create directory structure
mkdir -p /root/sf/countries/{country}/css /root/sf/countries/{country}/js

# 2. Copy Croatia files as template
cp /root/sf/countries/croatia/index.html /root/sf/countries/{country}/index.html
cp /root/sf/countries/croatia/css/country.css /root/sf/countries/{country}/css/country.css
cp /root/sf/countries/croatia/js/data.js /root/sf/countries/{country}/js/data.js
cp /root/sf/countries/croatia/js/country.js /root/sf/countries/{country}/js/country.js
cp /root/sf/countries/croatia/js/monetization.js /root/sf/countries/{country}/js/monetization.js

# 3. Test the page
curl -s -o /dev/null -w "%{http_code}" http://localhost/countries/{country}/
```

Replace `{country}` with your country slug.

---

## 💡 Tips for Success

1. **Start with Croatia as a template** - It has the complete structure
2. **Focus on quality over quantity** - Better to have 15 great places than 20 mediocre ones
3. **Use real data** - Accurate coordinates, real restaurants, actual hotels
4. **Test thoroughly** - Check all links, images, and functionality
5. **Monitor analytics** - Track what visitors are interested in
6. **Iterate and improve** - Update content based on feedback and data

---

## 📞 Support

If you encounter issues:
1. Check browser console for errors
2. Verify all file paths are correct
3. Ensure data keys match across all objects
4. Test with curl to verify page loads
5. Check nginx configuration

---

## 🎉 Summary

Croatia serves as a complete, production-ready template for all future country pages. Follow this guide to create consistent, high-quality pages for every Balkan country.

**Key Files to Copy**:
- `index.html` - Page structure
- `css/country.css` - Country-specific styles
- `js/data.js` - Content data
- `js/country.js` - Map initialization
- `js/monetization.js` - Monetization config

**Key Files to Update**:
- `/root/sf/index.html` - Add country card
- `/root/sf/flags/{country}.svg` - Create flag

Happy building! 🚀
