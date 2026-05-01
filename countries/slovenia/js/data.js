const touristPlaces = {
  ljubljana: {
    name: "Ljubljana",
    coords: [46.0511, 14.5051],
    image: "images/ljubljana.jpg",
    location: "Central Slovenia",
    description: "The charming capital of Slovenia, Ljubljana is a vibrant city of baroque architecture, leafy promenades along the Ljubljanica River, and a hilltop castle. Its pedestrian-friendly centre buzzes with outdoor cafes, open-air markets, and cultural festivals year-round.",
    type: "Capital City",
    rating: 4.8,
    reviews: 31200,
    bestTime: "April to October",
    tips: "Climb to Ljubljana Castle for panoramic views of the city. Visit the Central Market for local produce and crafts. Explore the riverside cafés along the Ljubljanica."
  },
  bled: {
    name: "Lake Bled",
    coords: [46.3667, 14.1167],
    image: "images/bled.jpg",
    location: "Upper Carniola",
    description: "Slovenia's most iconic destination, Lake Bled features a stunning island church set against a backdrop of the Julian Alps. Row a pletna boat to the island, ring the wishing bell, and hike up to Bled Castle for breathtaking views over the turquoise lake.",
    type: "Natural Wonder",
    rating: 4.9,
    reviews: 35600,
    bestTime: "May to September",
    tips: "Try the famous Bled cream cake (kremšnita) at Park Hotel. Rent a rowboat early in the morning to avoid crowds. The 6 km lakeside walk is beautiful at sunset."
  },
  bohinj: {
    name: "Lake Bohinj",
    coords: [46.2833, 13.9500],
    image: "images/bohinj.jpg",
    location: "Upper Carniola",
    description: "The largest permanent lake in Slovenia, Bohinj is a pristine alpine gem nestled within Triglav National Park. Less crowded than Bled, it offers crystal-clear waters perfect for swimming, kayaking, and paddleboarding with the Julian Alps as a backdrop.",
    type: "Alpine Lake",
    rating: 4.7,
    reviews: 18400,
    bestTime: "June to September",
    tips: "Take the cable car up to Mount Vogel for spectacular skiing or hiking. Swim at the eastern end where the water is warmest. Visit the Savica Waterfall nearby."
  },
  postojna: {
    name: "Postojna Cave",
    coords: [45.7667, 14.2000],
    image: "images/postojna.jpg",
    location: "Inner Carniola",
    description: "One of the world's largest karst cave systems, Postojna Cave features 24 km of subterranean passages filled with spectacular stalactites, stalagmites, and the unique olm (human fish). An electric train takes visitors deep into this underground wonderland.",
    type: "Cave System",
    rating: 4.8,
    reviews: 27900,
    bestTime: "All year round",
    tips: "Book tickets online in advance to skip queues. Wear comfortable shoes and bring a light jacket as cave temperature is constant 8-10°C. Combine with a visit to Predjama Castle."
  },
  predjama: {
    name: "Predjama Castle",
    coords: [45.8167, 14.1333],
    image: "images/predjama.jpg",
    location: "Inner Carniola",
    description: "A breathtaking castle built into the mouth of a cave halfway up a 123-metre cliff, Predjama Castle is the largest cave castle in the world. The fortress was the hideout of the legendary knight Erasmus of Lueg and is a masterpiece of medieval defensive architecture.",
    type: "Castle",
    rating: 4.7,
    reviews: 21500,
    bestTime: "April to October",
    tips: "Explore the hidden tunnels and passageways inside the castle. The climbing route behind the castle offers excellent photo opportunities. Combine with Postojna Cave for a full-day trip."
  },
  piran: {
    name: "Piran",
    coords: [45.5278, 13.5683],
    image: "images/piran.jpg",
    location: "Slovenian Coast",
    description: "Slovenia's most beautiful coastal town, Piran is a perfectly preserved medieval jewel on the Adriatic Sea. Its narrow streets open onto the grand Tartini Square, and the Church of St. George offers sweeping views of the Venetian rooftops and the sea.",
    type: "Coastal Town",
    rating: 4.8,
    reviews: 24800,
    bestTime: "May to September",
    tips: "Walk the city walls for the best panoramic view. Try local seafood at a restaurant on the harbour. Visit in the evening when the town is beautifully lit and less crowded."
  },
  koper: {
    name: "Koper",
    coords: [45.5469, 13.7294],
    image: "images/koper.jpg",
    location: "Slovenian Coast",
    description: "Slovenia's largest coastal city, Koper blends Venetian Gothic architecture with a lively modern port. The Praetorian Palace dominates Titov Square, while narrow cobblestone streets lead to hidden courtyards, churches, and waterfront promenades.",
    type: "Coastal City",
    rating: 4.5,
    reviews: 14600,
    bestTime: "April to October",
    tips: "Visit the Koper Regional Museum housed in the Belgramoni Tacco Palace. The Saturday farmers market in the square is excellent for local produce. Take a ferry to nearby Italian towns."
  },
  izola: {
    name: "Izola",
    coords: [45.5333, 13.6667],
    image: "images/izola.jpg",
    location: "Slovenian Coast",
    description: "A charming fishing town with a relaxed Mediterranean atmosphere, Izola offers colourful Venetian houses, a working harbour, and lovely beaches. Less touristy than Piran, it is perfect for experiencing authentic coastal Slovenian life.",
    type: "Fishing Town",
    rating: 4.4,
    reviews: 10200,
    bestTime: "May to September",
    tips: "Visit the Manzioli Palace and the church of St. Maurus. Swim at the Moon Bay (Mesečev Zaliv) beach. Enjoy fresh seafood at a konoba by the marina."
  },
  maribor: {
    name: "Maribor",
    coords: [46.5500, 15.6500],
    image: "images/maribor.jpg",
    location: "Styria",
    description: "Slovenia's second-largest city, Maribor is known for its wine culture, medieval old town, and the world's oldest grapevine, the Stara Trta which has been producing grapes for over 400 years. The Drava River adds to the city's charm.",
    type: "City",
    rating: 4.5,
    reviews: 16800,
    bestTime: "April to October",
    tips: "Taste local wines at the Old Vine House. Walk up to the Maribor Castle and Piramida Hill for city views. Visit Pohorje Mountain for hiking and skiing."
  },
  ptuj: {
    name: "Ptuj",
    coords: [46.4167, 15.8667],
    image: "images/ptuj.jpg",
    location: "Styria",
    description: "Slovenia's oldest recorded city, Ptuj boasts a beautifully preserved medieval centre dominated by Ptuj Castle. The Drava River waterfront, Dominican monastery, and the famous Kurentovanje carnival make it a year-round cultural destination.",
    type: "Historic Town",
    rating: 4.6,
    reviews: 12300,
    bestTime: "April to October (February for Kurentovanje)",
    tips: "Explore Ptuj Castle and its museum collections. Visit the Ptujska Gora basilica nearby. The Kurentovanje carnival in February is spectacular."
  },
  celje: {
    name: "Celje",
    coords: [46.2333, 15.2667],
    image: "images/celje.jpg",
    location: "Styria",
    description: "One of Slovenia's oldest towns, Celje is dominated by the mighty Celje Castle, once the seat of the powerful Counts of Celje. The old town features a mix of Gothic, Renaissance, and Art Nouveau architecture around the main square.",
    type: "Historic Town",
    rating: 4.4,
    reviews: 10700,
    bestTime: "April to October",
    tips: "Climb up to Celje Castle for panoramic views of the Savinja Valley. Visit the Celje Regional Museum in the former Counts' Palace. Walk through the old town's pedestrian zone."
  },
  "skofja-loka": {
    name: "Škofja Loka",
    coords: [46.1667, 14.3000],
    image: "images/skofja-loka.jpg",
    location: "Upper Carniola",
    description: "One of Slovenia's most picturesque old towns, Škofja Loka is a medieval gem with a well-preserved town square, a hilltop castle, and the Sora River running through it. Its 14th-century monastery and Passion Play tradition are UNESCO-recognized.",
    type: "Medieval Town",
    rating: 4.6,
    reviews: 11500,
    bestTime: "April to October",
    tips: "Visit the Loka Castle for the museum and tower views. Walk along the Sora River paths. The Škofja Loka Passion Play is performed every six years."
  },
  triglav: {
    name: "Triglav National Park",
    coords: [46.3500, 13.8333],
    image: "images/triglav.jpg",
    location: "Upper Carniola",
    description: "Slovenia's only national park, named after the country's highest peak Mount Triglav (2,864 m). Spanning the Julian Alps, it encompasses pristine alpine meadows, glacial lakes, dramatic valleys, and is a paradise for hikers, climbers, and nature lovers.",
    type: "National Park",
    rating: 4.9,
    reviews: 22600,
    bestTime: "June to September (hiking), December to March (skiing)",
    tips: "Hike the Seven Lakes Valley for an unforgettable alpine experience. The ascent of Triglav requires mountaineering equipment and a guide. Stay in mountain huts for multi-day treks."
  },
  soca: {
    name: "Soča Valley",
    coords: [46.3333, 13.6667],
    image: "images/soca.jpg",
    location: "Upper Carniola",
    description: "The emerald-green Soča River cuts through one of Europe's most beautiful alpine valleys, offering world-class white-water rafting, kayaking, and fly-fishing. The valley is also dotted with historic sites from World War I, including trenches and the Kobarid Museum.",
    type: "Valley",
    rating: 4.8,
    reviews: 19300,
    bestTime: "May to September",
    tips: "Drive the scenic road from Bovec to Kobarid for stunning river views. Try rafting on the Soča River. Visit the Kobarid Museum for WWI history."
  },
  "logar-valley": {
    name: "Logar Valley",
    coords: [46.4000, 14.6167],
    image: "images/logar-valley.jpg",
    location: "Upper Carniola",
    description: "One of the most beautiful alpine glacial valleys in Europe, the Logar Valley is a tranquil green paradise flanked by towering peaks. The 7 km long valley offers easy hiking trails, traditional farmhouses, and the magnificent Rinka Waterfall at its head.",
    type: "Glacial Valley",
    rating: 4.7,
    reviews: 8900,
    bestTime: "May to October",
    tips: "Hike the easy trail to Rinka Waterfall. Stay at a traditional tourist farm for authentic local food. Visit in autumn when the foliage is spectacular."
  },
  "velika-planina": {
    name: "Velika Planina",
    coords: [46.3000, 14.6500],
    image: "images/velika-planina.jpg",
    location: "Upper Carniola",
    description: "Europe's largest alpine pasture settlement, Velika Planina is a preserved traditional shepherd village with characteristic wooden huts. Herdsmen still bring their cattle here in summer, and the rolling meadows offer incredible hiking with views of the Kamnik-Savinja Alps.",
    type: "Alpine Pasture",
    rating: 4.6,
    reviews: 7800,
    bestTime: "June to September",
    tips: "Take the cable car from Kamniška Bistrica valley. Try the local dairy products like curd cheese (skuta). Stay overnight in a traditional shepherd's hut for a unique experience."
  },
  lipica: {
    name: "Lipica Stud Farm",
    coords: [45.6667, 13.8833],
    image: "images/lipica.jpg",
    location: "Slovenian Coast",
    description: "The birthplace of the world-famous Lipizzaner horses, Lipica Stud Farm has been breeding these elegant white horses since 1580. Visitors can tour the historic stables, watch dressage performances, and explore the beautiful karst landscape on horseback.",
    type: "Stud Farm",
    rating: 4.6,
    reviews: 13500,
    bestTime: "April to October",
    tips: "Book a guided tour to see the stables and carriage museum. Attend the classical dressage shows. Take a horseback ride through the surrounding karst countryside."
  },
  cerknica: {
    name: "Cerknica Lake",
    coords: [45.8000, 14.3667],
    image: "images/cerknica.jpg",
    location: "Inner Carniola",
    description: "An intermittent lake and one of Europe's largest disappearing lakes, Cerknica Lake appears and disappears through the karst underground. Its unique hydrology creates a constantly changing landscape that attracts birdwatchers, fishermen, and nature enthusiasts.",
    type: "Natural Phenomenon",
    rating: 4.4,
    reviews: 6200,
    bestTime: "Spring and autumn for water levels",
    tips: "Visit in spring when the lake is fullest for boat trips. During dry periods, explore the lakebed on foot. Birdwatching is excellent during migration seasons."
  },
  idrija: {
    name: "Idrija",
    coords: [46.0000, 14.0000],
    image: "images/idrija.jpg",
    location: "Inner Carniola",
    description: "A historic mining town known for the world's second-largest mercury mine, Idrija is a UNESCO World Heritage site. The town preserves its mining heritage with the Anthony's Shaft, a well-preserved technical monument, and is also famous for its handmade bobbin lace.",
    type: "Historic Mining Town",
    rating: 4.5,
    reviews: 8400,
    bestTime: "April to October",
    tips: "Descend into Anthony's Shaft for an underground mining experience. Visit the Idrija Lace School to see the traditional craft. Try the local Idrija žlikrofi (dumplings)."
  }
};

const restaurantsData = {
  ljubljana: [
    { name: "JB Restaurant", type: "Fine Dining", specialty: "Contemporary Slovenian gastronomy", url: "https://www.google.com/maps/search/JB+Restaurant+Ljubljana+Slovenia", rating: 4.8 },
    { name: "Gostilna As", type: "Traditional", specialty: "Modern Slovenian cuisine with local wine", url: "https://www.google.com/maps/search/Gostilna+As+Ljubljana+Slovenia", rating: 4.7 },
    { name: "Union Pub", type: "Café", specialty: "Craft beer and Balkan snacks", url: "https://www.google.com/maps/search/Union+Pub+Ljubljana+Slovenia", rating: 4.4 },
    { name: "Gostilna Sokol", type: "Traditional", specialty: "Slovenian home-style cooking", url: "https://www.google.com/maps/search/Gostilna+Sokol+Ljubljana+Slovenia", rating: 4.5 },
    { name: "Druga Violina", type: "Traditional", specialty: "Homemade pasta and štruklji", url: "https://www.google.com/maps/search/Druga+Violina+Ljubljana+Slovenia", rating: 4.6 },
    { name: "Luda", type: "Seafood", specialty: "Fresh Adriatic seafood", url: "https://www.google.com/maps/search/Luda+Ljubljana+Slovenia", rating: 4.5 }
  ],
  bled: [
    { name: "Restaurant 270", type: "Fine Dining", specialty: "Gourmet Slovenian tasting menu", url: "https://www.google.com/maps/search/Restaurant+270+Lake+Bled+Slovenia", rating: 4.8 },
    { name: "Gostilna Bled", type: "Traditional", specialty: "Bled cream cake and trout", url: "https://www.google.com/maps/search/Gostilna+Bled+Slovenia", rating: 4.6 },
    { name: "Pension Mlino", type: "Traditional", specialty: "Grilled lake fish and local wine", url: "https://www.google.com/maps/search/Pension+Mlino+Bled+Slovenia", rating: 4.5 },
    { name: "Café Belvedere", type: "Café", specialty: "Coffee with a view of the lake", url: "https://www.google.com/maps/search/Cafe+Belvedere+Bled+Slovenia", rating: 4.4 },
    { name: "Okarina", type: "Traditional", specialty: "Balkan and Slovenian grill", url: "https://www.google.com/maps/search/Okarina+Bled+Slovenia", rating: 4.4 }
  ],
  bohinj: [
    { name: "Gostilna Rupa", type: "Traditional", specialty: "Alpine cheese and trout dishes", url: "https://www.google.com/maps/search/Gostilna+Rupa+Bohinj+Slovenia", rating: 4.6 },
    { name: "Restaurant Triglav", type: "Traditional", specialty: "Mountain lamb and local beer", url: "https://www.google.com/maps/search/Restaurant+Triglav+Bohinj+Slovenia", rating: 4.5 },
    { name: "Pod Skalco", type: "Traditional", specialty: "Homemade Slovenian stews", url: "https://www.google.com/maps/search/Pod+Skalco+Bohinj+Slovenia", rating: 4.4 },
    { name: "Cafe Bohinj", type: "Café", specialty: "Hot chocolate and pastries by the lake", url: "https://www.google.com/maps/search/Cafe+Bohinj+Slovenia", rating: 4.3 }
  ],
  postojna: [
    { name: "Gostilna Učakar", type: "Traditional", specialty: "Karst prosciutto and local cheese", url: "https://www.google.com/maps/search/Gostilna+U%C4%8Dakar+Postojna+Slovenia", rating: 4.6 },
    { name: "Restaurant Jama", type: "Traditional", specialty: "Wild game and cave mushrooms", url: "https://www.google.com/maps/search/Restaurant+Jama+Postojna+Slovenia", rating: 4.5 },
    { name: "Pizzeria Pod Jamo", type: "Café", specialty: "Wood-fired pizza and coffee", url: "https://www.google.com/maps/search/Pizzeria+Pod+Jamo+Postojna+Slovenia", rating: 4.3 },
    { name: "Gostilna Stara Pošta", type: "Traditional", specialty: "Karst region traditional platter", url: "https://www.google.com/maps/search/Gostilna+Stara+Po%C5%A1ta+Postojna+Slovenia", rating: 4.4 }
  ],
  predjama: [
    { name: "Gostilna Erasmus", type: "Traditional", specialty: "Medieval-inspired dishes", url: "https://www.google.com/maps/search/Gostilna+Erasmus+Predjama+Slovenia", rating: 4.5 },
    { name: "Grajska Gostilna", type: "Traditional", specialty: "Karst lamb and local wine", url: "https://www.google.com/maps/search/Grajska+Gostilna+Predjama+Slovenia", rating: 4.4 },
    { name: "Kavarna Predjama", type: "Café", specialty: "Coffee and castle views", url: "https://www.google.com/maps/search/Kavarna+Predjama+Slovenia", rating: 4.2 }
  ],
  piran: [
    { name: "Restaurant Neptun", type: "Seafood", specialty: "Fresh Adriatic fish platter", url: "https://www.google.com/maps/search/Restaurant+Neptun+Piran+Slovenia", rating: 4.7 },
    { name: "Pavel & Irena", type: "Fine Dining", specialty: "Mediterranean seafood tasting menu", url: "https://www.google.com/maps/search/Pavel+%26+Irena+Piran+Slovenia", rating: 4.8 },
    { name: "Gostilna Burin", type: "Traditional", specialty: "Seafood risotto and local Istrian wine", url: "https://www.google.com/maps/search/Gostilna+Burin+Piran+Slovenia", rating: 4.5 },
    { name: "Café Teater", type: "Café", specialty: "Coffee and gelato on Tartini Square", url: "https://www.google.com/maps/search/Cafe+Teater+Piran+Slovenia", rating: 4.4 },
    { name: "Tri Ton", type: "Seafood", specialty: "Black risotto and grilled calamari", url: "https://www.google.com/maps/search/Tri+Ton+Piran+Slovenia", rating: 4.5 }
  ],
  koper: [
    { name: "Istrska Hiša", type: "Traditional", specialty: "Istrian tapas and local olive oil", url: "https://www.google.com/maps/search/Istrska+Hi%C5%A1a+Koper+Slovenia", rating: 4.6 },
    { name: "Restaurant Capodistria", type: "Seafood", specialty: "Adriatic seafood pasta", url: "https://www.google.com/maps/search/Restaurant+Capodistria+Koper+Slovenia", rating: 4.5 },
    { name: "Pizzeria Atrium", type: "Café", specialty: "Pizza and local beer", url: "https://www.google.com/maps/search/Pizzeria+Atrium+Koper+Slovenia", rating: 4.3 },
    { name: "Gostilna Pri Tinetu", type: "Traditional", specialty: "Homemade štruklji and Istrian wines", url: "https://www.google.com/maps/search/Gostilna+Pri+Tinetu+Koper+Slovenia", rating: 4.4 }
  ],
  izola: [
    { name: "Hiša Polič", type: "Fine Dining", specialty: "Modern Istrian cuisine", url: "https://www.google.com/maps/search/Hi%C5%A1a+Poli%C4%8D+Izola+Slovenia", rating: 4.7 },
    { name: "Gostilna Miha", type: "Seafood", specialty: "Grilled fish and local wine", url: "https://www.google.com/maps/search/Gostilna+Miha+Izola+Slovenia", rating: 4.5 },
    { name: "Sidro", type: "Traditional", specialty: "Seafood buzara and homemade pasta", url: "https://www.google.com/maps/search/Sidro+Izola+Slovenia", rating: 4.4 },
    { name: "Café Stara Oljka", type: "Café", specialty: "Coffee and Istrian pastries", url: "https://www.google.com/maps/search/Cafe+Stara+Oljka+Izola+Slovenia", rating: 4.3 }
  ],
  maribor: [
    { name: "Kavarna Rostand", type: "Café", specialty: "Coffee and cakes by the Drava", url: "https://www.google.com/maps/search/Kavarna+Rostand+Maribor+Slovenia", rating: 4.5 },
    { name: "Gostilna Pri Treh Ribnikih", type: "Traditional", specialty: "Slovenian game and fish dishes", url: "https://www.google.com/maps/search/Gostilna+Pri+Treh+Ribnikih+Maribor+Slovenia", rating: 4.6 },
    { name: "Restaurant Mak", type: "Fine Dining", specialty: "Gourmet Slovenian tasting menu", url: "https://www.google.com/maps/search/Restaurant+Mak+Maribor+Slovenia", rating: 4.7 },
    { name: "Pizzeria La Pizzeria", type: "Café", specialty: "Traditional pizza and local wine", url: "https://www.google.com/maps/search/Pizzeria+Maribor+Slovenia", rating: 4.3 },
    { name: "Gostilna Stara Trta", type: "Traditional", specialty: "Wine pairing menu with local vintages", url: "https://www.google.com/maps/search/Gostilna+Stara+Trta+Maribor+Slovenia", rating: 4.5 }
  ],
  ptuj: [
    { name: "Gostilna Pri Marofu", type: "Traditional", specialty: "Ptuj-style sausage and sauerkraut", url: "https://www.google.com/maps/search/Gostilna+Pri+Marofu+Ptuj+Slovenia", rating: 4.5 },
    { name: "Restaurant Mitra", type: "Fine Dining", specialty: "Modern Slovenian cuisine with wine pairing", url: "https://www.google.com/maps/search/Restaurant+Mitra+Ptuj+Slovenia", rating: 4.6 },
    { name: "Gostilna Amon", type: "Traditional", specialty: "Traditional Styrian dishes", url: "https://www.google.com/maps/search/Gostilna+Amon+Ptuj+Slovenia", rating: 4.4 },
    { name: "Café Bodi", type: "Café", specialty: "Coffee and homemade desserts", url: "https://www.google.com/maps/search/Cafe+Bodi+Ptuj+Slovenia", rating: 4.3 }
  ],
  celje: [
    { name: "Gostilna Vovk", type: "Traditional", specialty: "Celje-style roast pork and dumplings", url: "https://www.google.com/maps/search/Gostilna+Vovk+Celje+Slovenia", rating: 4.5 },
    { name: "Restaurant Zlati Grič", type: "Fine Dining", specialty: "Wine tasting menu with local views", url: "https://www.google.com/maps/search/Restaurant+Zlati+Gri%C4%8D+Celje+Slovenia", rating: 4.6 },
    { name: "Gostilna Tri Zvezde", type: "Traditional", specialty: "Balkan grill and salad", url: "https://www.google.com/maps/search/Gostilna+Tri+Zvezde+Celje+Slovenia", rating: 4.3 },
    { name: "Café Celjska", type: "Café", specialty: "Coffee and pastries near the castle", url: "https://www.google.com/maps/search/Cafe+Celjska+Celje+Slovenia", rating: 4.2 }
  ],
  "skofja-loka": [
    { name: "Gostilna Kašča", type: "Traditional", specialty: "Škofja Loka-style štruklji and game", url: "https://www.google.com/maps/search/Gostilna+Ka%C5%A1%C4%8Da+%C5%A0kofja+Loka+Slovenia", rating: 4.6 },
    { name: "Restaurant Pri Vigantu", type: "Traditional", specialty: "Medieval recipes and local wine", url: "https://www.google.com/maps/search/Pri+Vigantu+%C5%A0kofja+Loka+Slovenia", rating: 4.5 },
    { name: "Gostilna Starman", type: "Traditional", specialty: "River trout and seasonal dishes", url: "https://www.google.com/maps/search/Gostilna+Starman+%C5%A0kofja+Loka+Slovenia", rating: 4.4 },
    { name: "Café Pr' Lokat", type: "Café", specialty: "Coffee and local patisserie", url: "https://www.google.com/maps/search/Cafe+Pr+Lokat+%C5%A0kofja+Loka+Slovenia", rating: 4.3 }
  ],
  triglav: [
    { name: "Dom Planika", type: "Traditional", specialty: "Mountain stew and buckwheat dishes", url: "https://www.google.com/maps/search/Dom+Planika+Triglav+Slovenia", rating: 4.4 },
    { name: "Koča na Doliču", type: "Traditional", specialty: "Alpine cheese and bean soup", url: "https://www.google.com/maps/search/Ko%C4%8Da+na+Doli%C4%8Du+Triglav+Slovenia", rating: 4.3 },
    { name: "Hotel Triglav Restaurant", type: "Traditional", specialty: "Hearty mountain meals and local beer", url: "https://www.google.com/maps/search/Hotel+Triglav+Restaurant+Slovenia", rating: 4.2 }
  ],
  soca: [
    { name: "Gostilna Soča", type: "Traditional", specialty: "Soča trout and local wine", url: "https://www.google.com/maps/search/Gostilna+So%C4%8Da+Slovenia", rating: 4.6 },
    { name: "Restaurant Dobra Vila", type: "Fine Dining", specialty: "Gourmet dishes with Soča valley flavours", url: "https://www.google.com/maps/search/Dobra+Vila+Bovec+Slovenia", rating: 4.7 },
    { name: "Gostilna Martinov Hram", type: "Traditional", specialty: "Lamb under the bell and local produce", url: "https://www.google.com/maps/search/Gostilna+Martinov+Hram+Slovenia", rating: 4.5 },
    { name: "Café Soča", type: "Café", specialty: "Coffee and rafters' snacks", url: "https://www.google.com/maps/search/Cafe+So%C4%8Da+Slovenia", rating: 4.3 },
    { name: "Hiša Polonka", type: "Traditional", specialty: "Homemade pasta and forest mushrooms", url: "https://www.google.com/maps/search/Hi%C5%A1a+Polonka+Bovec+Slovenia", rating: 4.4 }
  ],
  "logar-valley": [
    { name: "Gostilna Logar", type: "Traditional", specialty: "Alpine cheese and homemade bread", url: "https://www.google.com/maps/search/Gostilna+Logar+Logar+Valley+Slovenia", rating: 4.5 },
    { name: "Rinka Restaurant", type: "Traditional", specialty: "Trout from the valley stream", url: "https://www.google.com/maps/search/Rinka+Logar+Valley+Slovenia", rating: 4.6 },
    { name: "Orožnova Koča", type: "Traditional", specialty: "Mountain hut stews and tea", url: "https://www.google.com/maps/search/Oro%C5%BEnova+Ko%C4%8Da+Logar+Valley+Slovenia", rating: 4.4 },
    { name: "Café Rinka", type: "Café", specialty: "Hot drinks and strudel by the waterfall", url: "https://www.google.com/maps/search/Cafe+Rinka+Logar+Valley+Slovenia", rating: 4.3 }
  ],
  "velika-planina": [
    { name: "Koča na Veliki Planini", type: "Traditional", specialty: "Shepherd's curd cheese and sour milk", url: "https://www.google.com/maps/search/Ko%C4%8Da+na+Veliki+Planini+Slovenia", rating: 4.5 },
    { name: "Zeleni Rob", type: "Traditional", specialty: "Mountain stew and homemade bread", url: "https://www.google.com/maps/search/Zeleni+Rob+Velika+Planina+Slovenia", rating: 4.4 },
    { name: "Jarški Dom", type: "Traditional", specialty: "Buckwheat dishes and local cheese", url: "https://www.google.com/maps/search/Jar%C5%A1ki+Dom+Velika+Planina+Slovenia", rating: 4.3 }
  ],
  lipica: [
    { name: "Restaurant Lipica", type: "Traditional", specialty: "Karst prosciutto and Teran wine", url: "https://www.google.com/maps/search/Restaurant+Lipica+Slovenia", rating: 4.5 },
    { name: "Gostilna pri Lipici", type: "Traditional", specialty: "Horse meat specialties and grilled meats", url: "https://www.google.com/maps/search/Gostilna+pri+Lipici+Slovenia", rating: 4.4 },
    { name: "Klub Lipica", type: "Café", specialty: "Coffee and light bites near the stables", url: "https://www.google.com/maps/search/Klub+Lipica+Slovenia", rating: 4.2 }
  ],
  cerknica: [
    { name: "Gostilna Jezero", type: "Traditional", specialty: "Lake fish and game stew", url: "https://www.google.com/maps/search/Gostilna+Jezero+Cerknica+Slovenia", rating: 4.4 },
    { name: "Restaurant Cerknica", type: "Traditional", specialty: "Crayfish and freshwater fish", url: "https://www.google.com/maps/search/Restaurant+Cerknica+Slovenia", rating: 4.3 },
    { name: "Gostilna Pri Mostu", type: "Traditional", specialty: "Homemade pasta and local wine", url: "https://www.google.com/maps/search/Gostilna+Pri+Mostu+Cerknica+Slovenia", rating: 4.2 },
    { name: "Café Ob Jezoru", type: "Café", specialty: "Coffee by the lake shore", url: "https://www.google.com/maps/search/Cafe+Ob+Jezoru+Cerknica+Slovenia", rating: 4.1 }
  ],
  idrija: [
    { name: "Gostilna Pri Štrucu", type: "Traditional", specialty: "Idrija žlikrofi and game dishes", url: "https://www.google.com/maps/search/Gostilna+Pri+%C5%A0trucu+Idrija+Slovenia", rating: 4.5 },
    { name: "Restaurant Anthony's Shaft", type: "Traditional", specialty: "Miner's lunch and local beer", url: "https://www.google.com/maps/search/Restaurant+Anthony+Shaft+Idrija+Slovenia", rating: 4.4 },
    { name: "Gostilna Kos", type: "Traditional", specialty: "Homemade štruklji and forest mushrooms", url: "https://www.google.com/maps/search/Gostilna+Kos+Idrija+Slovenia", rating: 4.4 },
    { name: "Café Lace", type: "Café", specialty: "Coffee and Idrija lace pastries", url: "https://www.google.com/maps/search/Cafe+Lace+Idrija+Slovenia", rating: 4.3 }
  ],
  default: [
    { name: "Gostilna Pri Lipi", type: "Traditional", specialty: "Slovenian national dishes", url: "https://www.google.com/maps/search/Slovenian+national+restaurant+Slovenia", rating: 4.4 },
    { name: "Konoba Karst", type: "Traditional", specialty: "Karst prosciutto and Teran", url: "https://www.google.com/maps/search/Konoba+Karst+Slovenia", rating: 4.5 },
    { name: "Restaurant Triglav", type: "Seafood", specialty: "Fresh Slovenian cuisine", url: "https://www.google.com/maps/search/Restaurant+Slovenia", rating: 4.4 },
    { name: "Café Ljubljana", type: "Café", specialty: "Coffee and local pastries", url: "https://www.google.com/maps/search/Cafe+Ljubljana+Slovenia", rating: 4.3 }
  ]
,
  "default": [
    { name: "Gostilna", type: "Traditional", specialty: "Slovenian Cuisine", url: "https://www.google.com/maps/search/?api=1&query=Gostilna+Slovenia", rating: 4.5 },
    { name: "Wine Bar", type: "Wine Bar", specialty: "Slovenian Wines", url: "https://www.google.com/maps/search/?api=1&query=Wine+Bar+Slovenia", rating: 4.4 },
    { name: "Mountain Hut", type: "Traditional", specialty: "Alpine Specialties", url: "https://www.google.com/maps/search/?api=1&query=Mountain+Hut+Slovenia", rating: 4.6 },
    { name: "Café", type: "Café", specialty: "Coffee & Cakes", url: "https://www.google.com/maps/search/?api=1&query=Cafe+Ljubljana", rating: 4.3 }
  ]
};;
const accommodationsData = {
  ljubljana: [
    { name: "InterContinental Ljubljana", type: "Luxury Hotel", price: "$$$", rating: 4.8, url: "https://www.booking.com/searchresults.html?ss=Ljubljana+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Union", type: "Boutique Hotel", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Ljubljana+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hostel Celica", type: "Hostel", price: "$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Ljubljana+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Bled Apartments", type: "Apartment", price: "$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Ljubljana+Slovenia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  bled: [
    { name: "Hotel Triglav Bled", type: "Boutique Hotel", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Lake+Bled+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Park", type: "Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Lake+Bled+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Bled Rose Hotel", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Lake+Bled+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Mila Bled", type: "Villa", price: "$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Lake+Bled+Slovenia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  bohinj: [
    { name: "Hotel Bohinj", type: "Hotel", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Lake+Bohinj+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Bohinj Eco Hotel", type: "Eco Hotel", price: "$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Lake+Bohinj+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Triglav", type: "Apartment", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Lake+Bohinj+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Tripič", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Lake+Bohinj+Slovenia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  postojna: [
    { name: "Hotel Jama", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Postojna+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Sport", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Postojna+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Miš", type: "Guest House", price: "$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Postojna+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Postojna", type: "Villa", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Postojna+Slovenia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  predjama: [
    { name: "Guest House Erasmus", type: "Guest House", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Predjama+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Gostilna Pod Gradom", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Predjama+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Jama", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Postojna+Slovenia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  piran: [
    { name: "Hotel Piran", type: "Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Piran+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Tartini", type: "Boutique Hotel", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Piran+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Piran", type: "Apartment", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Piran+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hostel Piran", type: "Hostel", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Piran+Slovenia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  koper: [
    { name: "Hotel Koper", type: "Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Koper+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Istra", type: "Boutique Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Koper+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Koper", type: "Apartment", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Koper+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Koper", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Koper+Slovenia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  izola: [
    { name: "Hotel Izola", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Izola+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila San Marino", type: "Boutique Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Izola+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Izola", type: "Apartment", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Izola+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Belvedere", type: "Guest House", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Izola+Slovenia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  maribor: [
    { name: "Hotel Habakuk", type: "Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Maribor+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Orel", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Maribor+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "B&B Maribor", type: "Bed & Breakfast", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Maribor+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Pohorje", type: "Apartment", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Maribor+Slovenia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  ptuj: [
    { name: "Grand Hotel Ptuj", type: "Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Ptuj+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Mitra", type: "Boutique Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Ptuj+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Pri Marofu", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Ptuj+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Ptuj", type: "Apartment", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Ptuj+Slovenia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  celje: [
    { name: "Hotel Celje", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Celje+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "B&B Celje", type: "Bed & Breakfast", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Celje+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Zlati Grič", type: "Boutique Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Celje+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Celje", type: "Apartment", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Celje+Slovenia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "skofja-loka": [
    { name: "Hotel Škofja Loka", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=%C5%A0kofja+Loka+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Kašča", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=%C5%A0kofja+Loka+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Loka", type: "Villa", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=%C5%A0kofja+Loka+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Sora", type: "Apartment", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=%C5%A0kofja+Loka+Slovenia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  triglav: [
    { name: "Hotel Triglav", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Triglav+National+Park+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Mountain Hut Planika", type: "Mountain Hut", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Triglav+National+Park+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Dom na Komni", type: "Mountain Hut", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Triglav+National+Park+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Julian Alps", type: "Apartment", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Triglav+National+Park+Slovenia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  soca: [
    { name: "Hotel Dobra Vila", type: "Boutique Hotel", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=So%C4%8Da+Valley+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Bovec", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Bovec+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Camp Soča", type: "Camping", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=So%C4%8Da+Valley+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Soča", type: "Apartment", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=So%C4%8Da+Valley+Slovenia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "logar-valley": [
    { name: "Hotel Logar Valley", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Logar+Valley+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Tourist Farm Logar", type: "Farm Stay", price: "$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Logar+Valley+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Pension Rinka", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Logar+Valley+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Logar", type: "Apartment", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Logar+Valley+Slovenia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "velika-planina": [
    { name: "Koča Preskar", type: "Mountain Hut", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Velika+Planina+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Zeleni Rob Hut", type: "Mountain Hut", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Velika+Planina+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Kamnik", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Kamnik+Slovenia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  lipica: [
    { name: "Hotel Lipica", type: "Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Lipica+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Mašun", type: "Guest House", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Lipica+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Kras", type: "Hotel", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Kras+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Lipica", type: "Villa", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Lipica+Slovenia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  cerknica: [
    { name: "Guest House Jezero", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Cerknica+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Cerknica", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Cerknica+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Cerknica", type: "Apartment", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Cerknica+Slovenia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  idrija: [
    { name: "Hotel Anthony", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Idrija+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Kos", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Idrija+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "B&B Idrija", type: "Bed & Breakfast", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Idrija+Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Idrija", type: "Villa", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Idrija+Slovenia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  default: [
    { name: "Hotel Slovenia", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Pri Lipi", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Slovenija", type: "Apartment", price: "$$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Slovenia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Julian Alps", type: "Villa", price: "$$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Slovenia&aid=2086573&no_rooms=1&group_adults=2" }
  ]
};

const thingsToDoData = {
  ljubljana: [
    "Climb to Ljubljana Castle for panoramic city views",
    "Stroll along the Ljubljanica River waterfront promenade",
    "Visit the Central Market for local produce and crafts",
    "Explore the Tivoli Park and its botanical garden",
    "Wander through the old town's baroque streets and squares",
    "Take a boat cruise on the Ljubljanica River",
    "Visit the National Gallery of Slovenia",
    "Enjoy evening drinks at a riverside café"
  ],
  bled: [
    "Row a pletna boat to the Bled Island church",
    "Ring the wishing bell at the island chapel",
    "Climb to Bled Castle for lake and mountain views",
    "Hike the 6 km lakeside walking trail",
    "Try the famous Bled cream cake (kremšnita)",
    "Swim in the turquoise lake waters in summer",
    "Visit Vintgar Gorge nearby for a scenic walk",
    "Photograph the island at sunrise or sunset"
  ],
  bohinj: [
    "Swim in the crystal-clear waters of Lake Bohinj",
    "Take the cable car to Mount Vogel for alpine views",
    "Hike to Savica Waterfall from the lake shore",
    "Kayak or paddleboard on the pristine lake",
    "Cycle around the lake on the scenic path",
    "Go paragliding over the Julian Alps",
    "Explore the Triglav National Park surrounding the lake",
    "Visit the Church of St. John the Baptist"
  ],
  postojna: [
    "Ride the electric train through the cave system",
    "Marvel at the spectacular stalactite formations",
    "Spot the unique olm (human fish) in the aquarium",
    "Walk through the Brilliant Passage and Concert Hall",
    "Explore the Predjama Castle nearby",
    "Visit the Lipica Stud Farm in the same region",
    "Photograph the cave's incredible limestone formations",
    "Learn about karst geology at the exhibition"
  ],
  predjama: [
    "Tour the cave castle built into the cliff face",
    "Explore the hidden tunnels and secret passages",
    "Learn the legend of knight Erasmus of Lueg",
    "Photograph the castle from the viewing platform",
    "Walk the climbing route behind the castle",
    "Visit Postojna Cave on the same day",
    "Enjoy medieval-themed dining nearby",
    "Explore the surrounding karst landscape"
  ],
  piran: [
    "Walk the Piran city walls for panoramic views",
    "Relax on Tartini Square with a coffee",
    "Visit the Church of St. George and climb the bell tower",
    "Swim at the rocky beaches below the town",
    "Explore the Maritime Museum of Slovenia",
    "Watch sunset over the Adriatic from the pier",
    "Try fresh seafood at a harbour restaurant",
    "Stroll through the narrow Venetian streets"
  ],
  koper: [
    "Visit the Praetorian Palace on Titov Square",
    "Explore the Koper Regional Museum",
    "Walk the waterfront promenade and marina",
    "Climb the bell tower of the Cathedral of the Assumption",
    "Shop at the Saturday farmers market",
    "Visit the Da Ponte Fountain in the old town",
    "Take a ferry to nearby coastal towns",
    "Explore the Venetian Gothic architecture"
  ],
  izola: [
    "Swim at Moon Bay (Mesečev Zaliv) beach",
    "Stroll the marina and working harbour",
    "Visit the Manzioli Palace and local galleries",
    "Enjoy fresh seafood at a konoba by the sea",
    "Walk through the old town's narrow streets",
    "Climb the bell tower for coastal views",
    "Cycle along the coastal path to Piran",
    "Relax at the Delamaris beach resort area"
  ],
  maribor: [
    "Visit the Old Vine House (Stara Trta)", 
    "Walk up Piramida Hill for views over the city",
    "Explore Maribor Castle and its museum",
    "Taste local wines at a Styrian wine cellar",
    "Walk through the old town's pedestrian zones",
    "Visit Lent, the historic waterfront quarter",
    "Take the cable car up to Pohorje Mountain",
    "Attend the Festival Lent in summer"
  ],
  ptuj: [
    "Tour Ptuj Castle and its museum collection",
    "Walk through the medieval old town",
    "Visit the Dominican Monastery complex",
    "Explore the Drava River waterfront",
    "Attend the Kurentovanje carnival (February)",
    "Visit the Ptujska Gora basilica nearby",
    "Taste local Ptuj wines at a wine cellar",
    "Cross the historic bridge over the Drava"
  ],
  celje: [
    "Climb up to Celje Castle for valley views",
    "Visit the Celje Regional Museum",
    "Walk through the old town's main square",
    "Explore the Counts of Celje exhibition",
    "Visit the Art Nouveau buildings in the centre",
    "Relax in the city park by the Savinja River",
    "Try local cuisine at traditional gostilnas",
    "Visit the Celje Central Library's historic reading room"
  ],
  "skofja-loka": [
    "Visit Loka Castle and its museum with tower views",
    "Walk along the Sora River paths and bridges",
    "Explore the medieval town square (Plac)",
    "Tour the 14th-century Capuchin Monastery",
    "Photograph the colourful houses along the river",
    "Visit the Škofja Loka Passion Play museum",
    "Hike on nearby Crngrob Hill for views",
    "Try local dishes at a traditional gostilna"
  ],
  triglav: [
    "Hike the Seven Lakes Valley alpine trail",
    "Attempt the ascent of Mount Triglav with a guide",
    "Visit the Savica Waterfall at the entrance",
    "Explore the Soča River source area",
    "Hike through the Vrata Valley to Bistrica Waterfall",
    "Stay overnight at a mountain hut for sunrise",
    "Photograph the Julian Alps from Pokljuka Plateau",
    "Ski or snowboard at Krvavec or Vogel in winter"
  ],
  soca: [
    "Raft through the turquoise rapids of the Soča River",
    "Kayak along the emerald green Soča River",
    "Visit the Kobarid Museum for WWI history",
    "Photograph the Soča River from the Napoleon Bridge",
    "Hike along the Soča Trail to see the source",
    "Walk through the WWI outdoor museum at Čezsoča",
    "Try fly-fishing for the native Soča trout",
    "Explore the Kluže Fortress military museum"
  ],
  "logar-valley": [
    "Hike the easy trail to Rinka Waterfall",
    "Walk through the pristine alpine valley floor",
    "Photograph the dramatic peaks at the valley head",
    "Visit a traditional tourist farm for local food",
    "Cycle the 7 km valley road in summer",
    "Watch for chamois and other alpine wildlife",
    "Climb the peaks of Ojstrica or Planjava",
    "Visit in autumn for spectacular fall colours"
  ],
  "velika-planina": [
    "Take the cable car up from Kamniška Bistrica",
    "Walk through the traditional shepherd village",
    "Try the local curd cheese (skuta) and sour milk",
    "Photograph the characteristic wooden huts",
    "Hike the alpine meadows with views of the Alps",
    "Stay overnight in a traditional shepherd's hut",
    "Watch the herdsmen bring cattle to pasture",
    "Visit the Preskar Museum hut for local history"
  ],
  lipica: [
    "Tour the historic Lipica Stud Farm stables",
    "Watch the Lipizzaner dressage performances",
    "Visit the carriage museum",
    "Take a horseback ride through the karst landscape",
    "Explore the beautiful karst environment on foot",
    "Visit the Lipizzaner foals in the pastures",
    "Learn about the 400-year breeding tradition",
    "Taste local Karst wines and prosciutto"
  ],
  cerknica: [
    "Visit the intermittent Cerknica Lake at various water levels",
    "Go birdwatching during spring migration",
    "Take a boat trip when the lake is full",
    "Walk the exposed lakebed in dry periods",
    "Explore the Križna Jama cave nearby",
    "Visit the Rakov Škocjan natural bridge",
    "Cycle the trails around the lake area",
    "Photograph the dramatic landscape changes"
  ],
  idrija: [
    "Descend into Anthony's Shaft mining museum",
    "Visit the Idrija Lace School and workshops",
    "Try Idrija žlikrofi (traditional dumplings)",
    "Explore the Idrija Municipal Museum",
    "Walk through the historic mining town centre",
    "Visit the Gewerkenegg Castle mining exhibition",
    "See the Idrija Kamšt water wheel pump system",
    "Learn about mercury mining history"
  ],
  default: [
    "Explore a Slovenian old town and its architecture",
    "Try traditional Slovenian cuisine at a local gostilna",
    "Visit a national park for hiking and nature",
    "Taste Slovenian wines at a local wine cellar",
    "Relax by a lake or in the mountains"
  
]
};
