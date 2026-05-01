/**
 * Balkan Tourism — Shared Global JS
 * Loaded on EVERY page. Handles navigation, side panel, common UI.
 */

// ─── Side Panel Controller ───
function openSidePanel(html) {
  const panel = document.getElementById('sidePanel');
  const content = document.getElementById('sidePanelContent');
  if (!panel || !content) return;
  content.innerHTML = html;
  panel.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeSidePanel() {
  const panel = document.getElementById('sidePanel');
  if (!panel) return;
  panel.classList.remove('open');
  document.body.style.overflow = '';
}

// ─── Nav Menu Controller ───
function toggleNavMenu() {
  const menu = document.getElementById('navMenu');
  const btn = document.getElementById('hamburgerMenu');
  if (!menu || !btn) return;
  menu.classList.toggle('open');
  btn.classList.toggle('active');
}

function closeNavMenu() {
  const menu = document.getElementById('navMenu');
  const btn = document.getElementById('hamburgerMenu');
  if (menu) menu.classList.remove('open');
  if (btn) btn.classList.remove('active');
}

// ─── Place Detail HTML Builder ───
function buildPlaceHTML(place, restaurants, accommodations, thingsToDo) {
  const restaurantsHTML = (restaurants || []).map(r => `
    <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="restaurant-link">
      <div class="restaurant-name">${r.name}</div>
      <div class="restaurant-meta">
        <span style="color: var(--secondary);">★ ${r.rating}</span>
        <span>${r.type}</span>
        <span class="restaurant-tag">${r.specialty}</span>
        <span class="gmaps-icon">🗺 Maps</span>
      </div>
    </a>
  `).join('');

  const accommodationsHTML = (accommodations || []).map(a => `
    <a href="${a.url}" target="_blank" rel="noopener noreferrer" class="accommodation-link">
      <div class="accommodation-name">${a.name}</div>
      <div class="accommodation-meta">
        <span style="color: var(--secondary);">★ ${a.rating}</span>
        <span>${a.type}</span>
        <span class="accommodation-price">${a.price}</span>
        <span class="booking-icon">🏨 Booking</span>
      </div>
    </a>
  `).join('');

  const thingsToDoHTML = (thingsToDo || []).map(item => `
    <li class="thing-to-do-item">${item}</li>
  `).join('');

  return `
    <div class="place-header">
      <h2>${place.name}</h2>
      <div class="place-type">📍 ${place.location} · ${place.type}</div>
      <div class="place-stats">
        <span style="color: var(--secondary);">★</span>
        <span style="color: #fff; font-weight: bold; margin-left: 5px;">${place.rating}</span>
        <span style="color: rgba(255,255,255,0.5); margin-left: 5px;">(${place.reviews.toLocaleString()} reviews)</span>
      </div>
    </div>
    <img src="${place.image}" alt="${place.name}" class="place-image" onerror="this.style.display='none'">
    <div class="place-description">${place.description}</div>
    ${thingsToDo && thingsToDo.length > 0 ? `
      <div class="divider-ornament">
        <div class="line"></div>
        <span class="icon">❧</span>
        <div class="line"></div>
      </div>
      <h3 class="things-to-do-title">Things to Do</h3>
      <ul class="things-to-do-list">
        ${thingsToDoHTML}
      </ul>
    ` : ''}
    <div class="place-tips">
      <div class="tip-box"><strong>Best time to visit:</strong> ${place.bestTime}</div>
      <div class="tip-box"><strong>💡 Tips:</strong> ${place.tips}</div>
    </div>
    ${accommodations && accommodations.length > 0 ? `
      <div class="divider-ornament">
        <div class="line"></div>
        <span class="icon">❧</span>
        <div class="line"></div>
      </div>
      <h3 class="accommodations-title">Accommodations</h3>
      ${accommodationsHTML}
    ` : ''}
    <div class="divider-ornament">
      <div class="line"></div>
      <span class="icon">❧</span>
      <div class="line"></div>
    </div>
    <h3 class="restaurants-title">Restaurants & Cafés</h3>
    ${restaurantsHTML}
  `;
}

// ─── Map Initialization Helper ───
function initMap(center, zoom, minZoom, maxZoom) {
  const map = L.map('map', {
    center: center,
    zoom: zoom || 8,
    minZoom: minZoom || 7,
    maxZoom: maxZoom || 16
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map);

  return map;
}

// ─── Add Markers to Map ───
function addMarkers(map, placesData, sidePanelRenderer) {
  Object.entries(placesData).forEach(([placeId, place]) => {
    const customIcon = L.divIcon({
      className: 'custom-marker-container',
      html: '<div class="custom-marker"></div>',
      iconSize: [36, 36],
      iconAnchor: [18, 36]
    });

    const marker = L.marker(place.coords, { icon: customIcon }).addTo(map);
    marker.bindPopup(`<b>${place.name}</b>`);
    marker.on('click', () => {
      if (sidePanelRenderer) sidePanelRenderer(placeId);
    });
  });
}

// ─── Global Event Bindings (runs on DOMContentLoaded) ───
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const sidePanelClose = document.getElementById('sidePanelClose');

  if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleNavMenu();
    });
  }

  if (sidePanelClose) {
    sidePanelClose.addEventListener('click', closeSidePanel);
  }

  // ESC key closes everything
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSidePanel();
      closeNavMenu();
    }
  });

  // Click outside nav to close it
  document.addEventListener('click', (e) => {
    const navMenu = document.getElementById('navMenu');
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    if (navMenu && !navMenu.contains(e.target) && hamburgerMenu && !hamburgerMenu.contains(e.target)) {
      closeNavMenu();
    }
  });
});
