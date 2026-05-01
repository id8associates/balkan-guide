/**
 * Kosovo — Country Page Logic
 * Uses shared global.js helpers: initMap, addMarkers, buildPlaceHTML, openSidePanel, closeSidePanel
 */

// ── Map Setup ──
const map = initMap([42.6, 20.9], 8, 7, 11);

// ── Render Side Panel for a Place ──
function renderSidePanel(placeId) {
  const place = touristPlaces[placeId];
  if (!place) return;
  const restaurants = restaurantsData[placeId] || restaurantsData['default'];
  const accommodations = accommodationsData[placeId] || accommodationsData['default'];
  const thingsToDo = thingsToDoData[placeId] || thingsToDoData['default'];
  const html = buildPlaceHTML(place, restaurants, accommodations, thingsToDo);
  openSidePanel(html);
}

// ── Add Markers ──
addMarkers(map, touristPlaces, renderSidePanel);

// ── Nav Items — fly to place on map + open side panel ──
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function () {
      const placeId = this.getAttribute('data-place');
      const place = touristPlaces[placeId];
      closeNavMenu();

      if (place) {
        map.flyTo(place.coords, 12, { duration: 1.5 });
        setTimeout(() => renderSidePanel(placeId), 1600);
      }
    });
  });
});
