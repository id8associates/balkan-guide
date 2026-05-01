/**
 * Croatia — Country-Specific JavaScript
 * Handles map initialization and country-specific functionality
 */

// ─── Map Initialization ───
document.addEventListener('DOMContentLoaded', () => {
  // Initialize map centered on Croatia
  const map = initMap([44.5, 16.0], 7, 6, 12);

  // Add markers for all places
  addMarkers(map, touristPlaces, renderSidePanel);

  // ─── Navigation Menu Click Handlers ───
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const placeId = item.getAttribute('data-place');
      if (placeId && touristPlaces[placeId]) {
        renderSidePanel(placeId);
        closeNavMenu();
      }
    });
  });

  // ─── Side Panel Rendering ───
  function renderSidePanel(placeId) {
    const place = touristPlaces[placeId];
    if (!place) return;

    const restaurants = restaurantsData[placeId] || [];
    const accommodations = accommodationsData[placeId] || [];
    const thingsToDo = thingsToDoData[placeId] || [];

    const html = buildPlaceHTML(place, restaurants, accommodations, thingsToDo);
    openSidePanel(html);

    // Track analytics event
    if (typeof BalkanAnalytics !== 'undefined') {
      BalkanAnalytics.trackEvent('place_view', {
        place_id: placeId,
        place_name: place.name,
        country: 'croatia'
      });
    }
  }

  // ─── Initial Map View ───
  // Optionally, you can set an initial view or zoom to a specific area
  // map.setView([45.0, 15.5], 8);
});
