/**
 * {COUNTRY_NAME} — Tourist Place Data
 * Keyed by placeId, used by country.js
 *
 * HOW TO ADD A NEW COUNTRY:
 * 1. Copy TEMPLATE-country.html → countries/{slug}/index.html
 * 2. Copy TEMPLATE-country.css  → countries/{slug}/css/country.css
 * 3. Copy this file              → countries/{slug}/js/data.js
 * 4. Copy TEMPLATE-country.js    → countries/{slug}/js/country.js
 * 5. Fill in all the {PLACEHOLDER} values below
 * 6. Add flag SVG to countries/{slug}/images/flag.svg
 * 7. Add place images to countries/{slug}/images/
 * 8. Add country card to /index.html homepage
 * 9. Add nginx location block in security/nginx.conf
 */

const touristPlaces = {
  // ── FORMAT ──
  // "place-id": {
  //   name: "Full Place Name",
  //   coords: [latitude, longitude],
  //   image: "images/filename.jpg",
  //   location: "City or Region",
  //   description: "Detailed description of the place...",
  //   type: "Cultural | Historical | Nature | Adventure | Urban",
  //   rating: 4.5,
  //   reviews: 1234,
  //   bestTime: "When to visit",
  //   tips: "Insider tip for visitors"
  // },

  // ── EXAMPLE ──
  // "dubrovnik": {
  //   name: "Dubrovnik Old Town",
  //   coords: [42.6507, 18.0944],
  //   image: "images/dubrovnik.jpg",
  //   location: "Dubrovnik",
  //   description: "The Pearl of the Adriatic — a stunning walled city on Croatia's southern coast.",
  //   type: "Historical",
  //   rating: 4.9,
  //   reviews: 5200,
  //   bestTime: "Spring or autumn to avoid crowds",
  //   tips: "Walk the city walls at sunrise"
  // }
};

/**
 * Restaurant Data — keyed by placeId, Google Maps links
 */
const restaurantsData = {
  // ── FORMAT ──
  // "place-id": [
  //   { name: "Restaurant Name", type: "Traditional", specialty: "Dish", url: "https://www.google.com/maps/search/?api=1&query=...", rating: 4.5 }
  // ],

  // ── DEFAULT (fallback) ──
  "default": [
    { name: "Local Restaurant", type: "Traditional", specialty: "Local Cuisine", url: "https://www.google.com/maps/search/?api=1&query=Restaurant+{COUNTRY_NAME}", rating: 4.5 }
  ]
};
