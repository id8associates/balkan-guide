const touristPlaces = {
  kotor: {
    name: "Kotor \u2013 Old Town",
    coords: [42.4247, 18.7712],
    image: "images/kotor.jpg",
    location: "Bay of Kotor",
    description: "A UNESCO World Heritage site nestled at the foot of towering mountains, Kotor's Old Town is a maze of medieval squares, churches, and Venetian palaces. Climb the 1,350 steps to San Giovanni Fortress for breathtaking panoramic views of the bay.",
    type: "UNESCO Old Town",
    rating: 4.9,
    reviews: 28450,
    bestTime: "April to October",
    tips: "Visit early morning or late evening to avoid cruise ship crowds. Wear comfortable shoes for the fortress climb."
  },
  budva: {
    name: "Budva Riviera",
    coords: [42.2914, 18.8419],
    image: "images/budva.jpg",
    location: "Budva Riviera",
    description: "The most popular coastal destination in Montenegro, Budva boasts stunning beaches, a charming walled Old Town, and a vibrant nightlife scene. Its 15 km of coastline is dotted with sandy coves and lively beach bars.",
    type: "Coastal Town",
    rating: 4.6,
    reviews: 22130,
    bestTime: "May to September",
    tips: "Explore the Old Town after dark when it is beautifully lit. Book accommodation well in advance during July and August."
  },
  "sveti-stefan": {
    name: "Sveti Stefan",
    coords: [42.2572, 18.8917],
    image: "images/sveti-stefan.jpg",
    location: "Budva Riviera",
    description: "An iconic islet resort connected to the mainland by a narrow causeway, Sveti Stefan is one of the most photographed landmarks on the Adriatic. The entire island is a luxury Aman resort, but the adjacent beach is open to the public.",
    type: "Island Resort",
    rating: 4.8,
    reviews: 12100,
    bestTime: "May to October",
    tips: "Walk the public path along the coast for the best photo vantage point. The beach below the resort is free to access."
  },
  perast: {
    name: "Perast",
    coords: [42.4869, 18.6994],
    image: "images/perast.jpg",
    location: "Bay of Kotor",
    description: "A tranquil baroque town facing the Strait of Verige, Perast is home to the famous Our Lady of the Rocks island church. Its stone palaces and peaceful waterfront promenade offer a quieter alternative to nearby Kotor.",
    type: "Baroque Town",
    rating: 4.7,
    reviews: 9870,
    bestTime: "April to October",
    tips: "Take a short boat ride to Our Lady of the Rocks. Visit in the late afternoon when the light is golden and crowds thin out."
  },
  durmitor: {
    name: "Durmitor National Park",
    coords: [43.1333, 19.0333],
    image: "images/durmitor.jpg",
    location: "Northern Montenegro",
    description: "A dramatic glacial landscape of rugged peaks, deep river canyons, and pristine lakes, Durmitor is a paradise for hikers and nature lovers. The park's 18 glacial lakes, including the iconic Black Lake, are connected by scenic trails.",
    type: "National Park",
    rating: 4.9,
    reviews: 15780,
    bestTime: "June to September (hiking), December to March (skiing)",
    tips: "Hike the loop around Black Lake for stunning views. Bring warm layers even in summer as temperatures drop at altitude."
  },
  "tara-canyon": {
    name: "Tara River Canyon",
    coords: [43.2, 19.1],
    image: "images/tara-canyon.jpg",
    location: "Northern Montenegro",
    description: "The deepest canyon in Europe at 1,300 meters, the Tara River Canyon offers world-class white-water rafting through turquoise waters. The \u0110ur\u0111evi\u0107a Tara Bridge spans the canyon and provides vertiginous views.",
    type: "Natural Wonder",
    rating: 4.8,
    reviews: 11250,
    bestTime: "April to October",
    tips: "Book a half-day rafting trip with a reputable operator. Walk across the Tara Bridge and try the zipline for an adrenaline rush."
  },
  podgorica: {
    name: "Podgorica",
    coords: [42.4304, 19.2594],
    image: "images/podgorica.jpg",
    location: "Central Montenegro",
    description: "The capital city blends communist-era architecture with modern developments, centered around the pedestrian-friendly Bulevar Svetog Petra Cetinjskog. The Ribnica River quarter and Millennium Bridge showcase the city's evolving identity.",
    type: "Capital City",
    rating: 4.3,
    reviews: 14560,
    bestTime: "April to October",
    tips: "Visit the Podgorica City Museum for local history. Explore the burgeoning cafe culture along Bulevar Svetog Petra Cetinjskog."
  },
  bar: {
    name: "Bar \u2013 Old Town",
    coords: [42.0931, 19.1003],
    image: "images/bar.jpg",
    location: "Southern Coast",
    description: "The sprawling ruins of Stari Bar, destroyed in the 19th century, sit above the modern town amid olive groves and fig trees. The site includes a fortress, aqueduct, and dozens of medieval buildings open to exploration.",
    type: "Historic Old Town",
    rating: 4.5,
    reviews: 8320,
    bestTime: "April to October",
    tips: "Wear sturdy shoes for the uneven terrain. Combine with a visit to the Old Olive Tree nearby, claimed to be over 2,000 years old."
  },
  ulcinj: {
    name: "Ulcinj",
    coords: [41.9231, 19.2036],
    image: "images/ulcinj.jpg",
    location: "Southern Coast",
    description: "Montenegro's southernmost town is known for its long sandy beaches, most notably Velika Pla\u017ea, and its charming Old Town perched on a cliff. The nearby Ada Bojana island offers clothing-optional and kite-surfing beaches.",
    type: "Beach Town",
    rating: 4.4,
    reviews: 10740,
    bestTime: "May to September",
    tips: "Visit Velika Pla\u017ea for the longest stretch of sand in Montenegro. Try local seafood at a konoba in the Old Town."
  },
  "herceg-novi": {
    name: "Herceg Novi",
    coords: [42.4531, 18.5375],
    image: "images/herceg-novi.jpg",
    location: "Bay of Kotor",
    description: "Known as the 'City of a Thousand Steps,' Herceg Novi is a lush coastal town near the Croatian border with a lively waterfront promenade. Its Forte Mare fortress and numerous botanical gardens reward visitors who climb its steep streets.",
    type: "Coastal Town",
    rating: 4.5,
    reviews: 9340,
    bestTime: "April to October",
    tips: "Enter from the top of the town and walk downhill to save energy. Visit the海滨 promenade at sunset for stunning views across the bay."
  },
  cetinje: {
    name: "Cetinje",
    coords: [42.3908, 18.9231],
    image: "images/cetinje.jpg",
    location: "Central Montenegro",
    description: "The historical royal capital of Montenegro, Cetinje is a museum city filled with former embassies, monasteries, and the Cetinje Monastery. It sits at the foot of Mount Lov\u0107en in a valley that feels worlds away from the coast.",
    type: "Historical Capital",
    rating: 4.5,
    reviews: 7410,
    bestTime: "April to October",
    tips: "Visit the Cetinje Monastery and the Njego\u0161 Museum. Take a day trip up to Lov\u0107en National Park for spectacular views."
  },
  ostrog: {
    name: "Ostrog Monastery",
    coords: [42.6742, 19.0286],
    image: "images/ostrog.jpg",
    location: "Central Montenegro",
    description: "One of the most important pilgrimage sites in the Balkans, Ostrog Monastery is carved into a vertical cliff face nearly 900 meters above the Zeta Valley. The monastery is dedicated to Saint Basil of Ostrog and attracts visitors of all faiths.",
    type: "Religious Site",
    rating: 4.9,
    reviews: 18920,
    bestTime: "April to October",
    tips: "Dress modestly covering shoulders and knees. Visit early in the morning to experience the monastery without crowds."
  },
  "biogradska-gora": {
    name: "Biogradska Gora",
    coords: [42.9, 19.6],
    image: "images/biogradska-gora.jpg",
    location: "Northern Montenegro",
    description: "One of Europe's last remaining primeval forests, Biogradska Gora National Park centers around the stunning Lake Biograd. Ancient beech and fir trees tower over hiking trails that circle the lake and climb into the Bjelasica Mountains.",
    type: "National Park",
    rating: 4.7,
    reviews: 6230,
    bestTime: "May to October",
    tips: "Hike the 3.5 km loop around Lake Biograd for an easy introduction to the park. Bring insect repellent in summer months."
  },
  "skadar-lake": {
    name: "Lake Skadar",
    coords: [42.2, 19.2],
    image: "images/skadar-lake.jpg",
    location: "Southern Montenegro",
    description: "The largest lake in the Balkans straddles the Montenegro-Albania border and is a haven for birdwatchers, with over 280 bird species. Traditional fishing villages, floating monasteries, and lotus flower fields dot its serene waters.",
    type: "Natural Park",
    rating: 4.6,
    reviews: 11340,
    bestTime: "March to October",
    tips: "Take a boat tour from Virpazar to explore the lake's hidden corners. Visit in spring when the water lilies are in bloom."
  },
  lovcen: {
    name: "Lov\u0107en National Park",
    coords: [42.4, 18.8333],
    image: "images/lovcen.jpg",
    location: "Central Montenegro",
    description: "The black mountain that gives Montenegro its name, Lov\u0107en National Park is crowned by the Njego\u0161 Mausoleum. The 461-step climb to the mausoleum rewards visitors with a 360-degree panorama stretching from the Adriatic to the inland mountains.",
    type: "National Park",
    rating: 4.7,
    reviews: 8950,
    bestTime: "May to October",
    tips: "Drive the scenic road from Kotor which offers switchbacks with incredible views. The mausoleum visit involves a steep but short climb."
  },
  tivat: {
    name: "Tivat \u2013 Porto Montenegro",
    coords: [42.4317, 18.6961],
    image: "images/tivat.jpg",
    location: "Bay of Kotor",
    description: "Home to the glamorous Porto Montenegro super-yacht marina, Tivat has transformed from a naval base into a luxury destination. The revitalized waterfront features designer boutiques, world-class restaurants, and the Navel Heritage Museum.",
    type: "Luxury Marina",
    rating: 4.4,
    reviews: 8760,
    bestTime: "May to October",
    tips: "Stroll the marina promenade even if you are not staying at the luxury hotels. The Saturday farmers market offers local produce and crafts."
  },
  boka: {
    name: "Boka Kotorska Bay",
    coords: [42.45, 18.7],
    image: "images/boka.jpg",
    location: "Bay of Kotor",
    description: "Often called Europe's southernmost fjord, the Bay of Kotor is a stunning natural wonder of deep blue water surrounded by dramatic limestone mountains. The bay encompasses the towns of Kotor, Perast, and Herceg Novi connected by a scenic coastal road.",
    type: "Bay",
    rating: 4.9,
    reviews: 25680,
    bestTime: "April to October",
    tips: "Drive the coastal road from Herceg Novi to Kotor for the most scenic route. Take a boat tour to fully appreciate the scale of the bay."
  },
  "dobra-voda": {
    name: "Dobra Voda",
    coords: [42.05, 19.05],
    image: "images/dobra-voda.jpg",
    location: "Southern Coast",
    description: "A peaceful beach town between Bar and Ulcinj, Dobra Voda offers long pebble beaches and crystal-clear waters away from the main tourist crowds. The area is known for its olive groves and relaxed Mediterranean atmosphere.",
    type: "Beach Town",
    rating: 4.3,
    reviews: 4890,
    bestTime: "June to September",
    tips: "Stay at one of the family-run apartments for an authentic local experience. The beaches are less crowded than Budva even in peak season."
  },
  prokletije: {
    name: "Prokletije Mountains",
    coords: [42.5167, 19.85],
    image: "images/prokletije.jpg",
    location: "Eastern Montenegro",
    description: "Known as the Accursed Mountains, Prokletije is Montenegro's most rugged and remote mountain range, stretching along the Albanian border. It offers challenging hiking, glacial lakes, and some of the most dramatic alpine scenery in the Balkans.",
    type: "Mountain Range",
    rating: 4.7,
    reviews: 5120,
    bestTime: "June to September",
    tips: "Hire a local guide for multi-day treks as the terrain is demanding. Visit the Ropojana Valley for access to the best hiking trails."
  }
};

const restaurantsData = {
  kotor: [
    { name: "Konoba Scala Santa", type: "Traditional", specialty: "Black risotto and grilled fish", url: "https://www.google.com/maps/search/Konoba+Scala+Santa+Kotor+Montenegro", rating: 4.7 },
    { name: "Cesarica", type: "Seafood", specialty: "Fresh Adriatic fish platter", url: "https://www.google.com/maps/search/Cesarica+Kotor+Montenegro", rating: 4.6 },
    { name: "Galion", type: "Fine Dining", specialty: "Seafood tasting menu with bay views", url: "https://www.google.com/maps/search/Galion+Kotor+Montenegro", rating: 4.8 },
    { name: "Konoba Portun", type: "Traditional", specialty: "Njegu\u0161ki pr\u0161ut and cheese plate", url: "https://www.google.com/maps/search/Konoba+Portun+Kotor+Montenegro", rating: 4.5 },
    { name: "Bastion 3", type: "Caf\u00e9", specialty: "Coffee and homemade cakes", url: "https://www.google.com/maps/search/Bastion+3+Kotor+Montenegro", rating: 4.4 },
    { name: "Stari Mlini", type: "Traditional", specialty: "Lamb under the bell (sa\u010d)", url: "https://www.google.com/maps/search/Stari+Mlini+Kotor+Montenegro", rating: 4.7 }
  ],
  budva: [
    { name: "Jadran Kod Krsta", type: "Seafood", specialty: "Grilled octopus and squid", url: "https://www.google.com/maps/search/Jadran+Kod+Krsta+Budva+Montenegro", rating: 4.6 },
    { name: "Dvorac Baltazar", type: "Fine Dining", specialty: "Montenegrin gourmet tasting menu", url: "https://www.google.com/maps/search/Dvorac+Baltazar+Budva+Montenegro", rating: 4.7 },
    { name: "Konoba Mornar", type: "Traditional", specialty: "Seafood buzara and local wine", url: "https://www.google.com/maps/search/Konoba+Mornar+Budva+Montenegro", rating: 4.5 },
    { name: "Hemingway Bar & Restaurant", type: "Caf\u00e9", specialty: "Tapas and signature cocktails", url: "https://www.google.com/maps/search/Hemingway+Bar+Budva+Montenegro", rating: 4.4 },
    { name: "Casablanca", type: "Seafood", specialty: "Black risotto with cuttlefish", url: "https://www.google.com/maps/search/Casablanca+Budva+Montenegro", rating: 4.5 }
  ],
  "sveti-stefan": [
    { name: "Restaurant Piazza", type: "Fine Dining", specialty: "Contemporary Mediterranean cuisine", url: "https://www.google.com/maps/search/Piazza+Sveti+Stefan+Montenegro", rating: 4.8 },
    { name: "Conte Hotel Restaurant", type: "Traditional", specialty: "Grilled fish and seafood platter", url: "https://www.google.com/maps/search/Conte+Sveti+Stefan+Montenegro", rating: 4.6 },
    { name: "Dolce Vita", type: "Caf\u00e9", specialty: "Gelato and espresso by the beach", url: "https://www.google.com/maps/search/Dolce+Vita+Sveti+Stefan+Montenegro", rating: 4.3 },
    { name: "Adrovic Seafood", type: "Seafood", specialty: "Fresh Adriatic fish grill", url: "https://www.google.com/maps/search/Adrovic+Sveti+Stefan+Montenegro", rating: 4.5 }
  ],
  perast: [
    { name: "Konoba Skver", type: "Seafood", specialty: "Mussels buzhara", url: "https://www.google.com/maps/search/Konoba+Skver+Perast+Montenegro", rating: 4.6 },
    { name: "Hotel Conte Restaurant", type: "Fine Dining", specialty: "Dalmatian fish stew", url: "https://www.google.com/maps/search/Hotel+Conte+Perast+Montenegro", rating: 4.7 },
    { name: "Bella Vista", type: "Traditional", specialty: "Pasta with seafood and local wine", url: "https://www.google.com/maps/search/Bella+Vista+Perast+Montenegro", rating: 4.5 },
    { name: "Monte Cristo", type: "Caf\u00e9", specialty: "Coffee and pastries with bay view", url: "https://www.google.com/maps/search/Monte+Cristo+Perast+Montenegro", rating: 4.4 }
  ],
  durmitor: [
    { name: "Restaurant Black Lake", type: "Traditional", specialty: "Mountain lamb stew", url: "https://www.google.com/maps/search/Restaurant+Black+Lake+Durmitor+Montenegro", rating: 4.5 },
    { name: "Sobot", type: "Traditional", specialty: "Veal and potato casserole", url: "https://www.google.com/maps/search/Sobot+%C5%BDabljak+Montenegro", rating: 4.4 },
    { name: "Durmitor Apartmani", type: "Traditional", specialty: "Homemade cheese and prosciutto", url: "https://www.google.com/maps/search/Durmitor+Restaurant+%C5%BDabljak+Montenegro", rating: 4.3 },
    { name: "Caffe bar Stari", type: "Caf\u00e9", specialty: "Rakija and mountain coffee", url: "https://www.google.com/maps/search/Stari+%C5%BDabljak+Montenegro", rating: 4.2 }
  ],
  "tara-canyon": [
    { name: "Restaurant Tara", type: "Traditional", specialty: "Grilled meats and lake trout", url: "https://www.google.com/maps/search/Restaurant+Tara+Tara+Canyon+Montenegro", rating: 4.4 },
    { name: "Vuk Karad\u017ei\u0107", type: "Traditional", specialty: "Homemade Balkan grill platter", url: "https://www.google.com/maps/search/Vuk+Karad%C5%BEi%C4%87+Tara+Canyon+Montenegro", rating: 4.3 },
    { name: "Camp Zabojsko", type: "Caf\u00e9", specialty: "Rafters lunch and local beer", url: "https://www.google.com/maps/search/Camp+Zabojsko+Tara+Montenegro", rating: 4.2 }
  ],
  podgorica: [
    { name: "Stara Kuca", type: "Traditional", specialty: "Montenegrin national dishes", url: "https://www.google.com/maps/search/Stara+Kuca+Podgorica+Montenegro", rating: 4.6 },
    { name: "Hemingway", type: "Fine Dining", specialty: "Steak and wine pairing", url: "https://www.google.com/maps/search/Hemingway+Podgorica+Montenegro", rating: 4.7 },
    { name: "Mosaic", type: "Caf\u00e9", specialty: "Specialty coffee and brunch", url: "https://www.google.com/maps/search/Mosaic+Podgorica+Montenegro", rating: 4.4 },
    { name: "Lanterna", type: "Seafood", specialty: "Adriatic seafood pasta", url: "https://www.google.com/maps/search/Lanterna+Podgorica+Montenegro", rating: 4.5 },
    { name: "Pod Volat", type: "Traditional", specialty: "Lamb and veal under sak", url: "https://www.google.com/maps/search/Pod+Volat+Podgorica+Montenegro", rating: 4.5 }
  ],
  bar: [
    { name: "Restoran Starogradski", type: "Traditional", specialty: "Grilled fish and olive oil bread", url: "https://www.google.com/maps/search/Restoran+Starogradski+Bar+Montenegro", rating: 4.5 },
    { name: "Pristan", type: "Seafood", specialty: "Seafood risotto and grilled squid", url: "https://www.google.com/maps/search/Pristan+Bar+Montenegro", rating: 4.6 },
    { name: "Konoba Ribar", type: "Traditional", specialty: "Fish buzara with local wine", url: "https://www.google.com/maps/search/Konoba+Ribar+Bar+Montenegro", rating: 4.4 },
    { name: "Caffe San Marco", type: "Caf\u00e9", specialty: "Italian coffee and gelato", url: "https://www.google.com/maps/search/Caffe+San+Marco+Bar+Montenegro", rating: 4.3 }
  ],
  ulcinj: [
    { name: "Konoba Lanterna", type: "Seafood", specialty: "Grilled octopus and shrimp", url: "https://www.google.com/maps/search/Konoba+Lanterna+Ulcinj+Montenegro", rating: 4.5 },
    { name: "Antigona", type: "Traditional", specialty: "Balkan mixed grill and burek", url: "https://www.google.com/maps/search/Antigona+Ulcinj+Montenegro", rating: 4.4 },
    { name: "Restaurant Kula", type: "Fine Dining", specialty: "Mediterranean seafood with sea views", url: "https://www.google.com/maps/search/Restaurant+Kula+Ulcinj+Montenegro", rating: 4.7 },
    { name: "Mascenlada", type: "Caf\u00e9", specialty: "Turkish coffee and sweets", url: "https://www.google.com/maps/search/Mascenlada+Ulcinj+Montenegro", rating: 4.3 }
  ],
  "herceg-novi": [
    { name: "Konoba Feral", type: "Seafood", specialty: "Black risotto and grilled fish", url: "https://www.google.com/maps/search/Konoba+Feral+Herceg+Novi+Montenegro", rating: 4.6 },
    { name: "Stari Grad", type: "Traditional", specialty: "Traditional Montenegrin platter", url: "https://www.google.com/maps/search/Stari+Grad+Herceg+Novi+Montenegro", rating: 4.5 },
    { name: "Bastion", type: "Caf\u00e9", specialty: "Coffee and homemade limoncello", url: "https://www.google.com/maps/search/Bastion+Herceg+Novi+Montenegro", rating: 4.4 },
    { name: "Mausolej", type: "Fine Dining", specialty: "Fine seafood and local wines", url: "https://www.google.com/maps/search/Mausolej+Herceg+Novi+Montenegro", rating: 4.6 }
  ],
  cetinje: [
    { name: "Konoba Matica", type: "Traditional", specialty: "Njegu\u0161ki pr\u0161ut and local cheese", url: "https://www.google.com/maps/search/Konoba+Matica+Cetinje+Montenegro", rating: 4.6 },
    { name: "Caffe Bar Kraljevski", type: "Caf\u00e9", specialty: "Espresso and royal pastries", url: "https://www.google.com/maps/search/Kraljevski+Cetinje+Montenegro", rating: 4.3 },
    { name: "Adria", type: "Traditional", specialty: "Lamb and vegetable stew", url: "https://www.google.com/maps/search/Adria+Cetinje+Montenegro", rating: 4.4 },
    { name: "Restaurant Vardar", type: "Seafood", specialty: "Freshwater fish from Skadar Lake", url: "https://www.google.com/maps/search/Vardar+Cetinje+Montenegro", rating: 4.5 }
  ],
  ostrog: [
    { name: "Restoran Ostrog", type: "Traditional", specialty: "Monastic bread and bean soup", url: "https://www.google.com/maps/search/Restoran+Ostrog+Monastery+Montenegro", rating: 4.3 },
    { name: "Etno Selo Ostrog", type: "Traditional", specialty: "Traditional lamb and homemade rakija", url: "https://www.google.com/maps/search/Etno+Selo+Ostrog+Montenegro", rating: 4.5 },
    { name: "Podgoracko Vrelo", type: "Traditional", specialty: "Grilled trout and mountain potatoes", url: "https://www.google.com/maps/search/Podgoracko+Vrelo+Ostrog+Montenegro", rating: 4.4 }
  ],
  "biogradska-gora": [
    { name: "Restoran Biogradska Gora", type: "Traditional", specialty: "Grilled meats and forest mushrooms", url: "https://www.google.com/maps/search/Restoran+Biogradska+Gora+Montenegro", rating: 4.4 },
    { name: "Kola\u0161in Restaurant", type: "Traditional", specialty: "Mountain lamb and cheese pie", url: "https://www.google.com/maps/search/Kola%C5%A1in+Restaurant+Biogradska+Montenegro", rating: 4.3 },
    { name: "Caffe Forest", type: "Caf\u00e9", specialty: "Honey tea and mountain coffee", url: "https://www.google.com/maps/search/Caffe+Forest+Biogradska+Montenegro", rating: 4.2 }
  ],
  "skadar-lake": [
    { name: "Konoba \u010cakovina", type: "Traditional", specialty: "Skadar Lake eel and carp", url: "https://www.google.com/maps/search/Konoba+%C4%8Cakovina+Skadar+Lake+Montenegro", rating: 4.7 },
    { name: "Konoba Badanj", type: "Seafood", specialty: "Grilled freshwater fish", url: "https://www.google.com/maps/search/Konoba+Badanj+Skadar+Lake+Montenegro", rating: 4.5 },
    { name: "Virpazar Konoba", type: "Traditional", specialty: "Fish stew and local wine", url: "https://www.google.com/maps/search/Virpazar+Konoba+Skadar+Lake+Montenegro", rating: 4.4 },
    { name: "Pelikan", type: "Caf\u00e9", specialty: "Wine tasting and cheese platter", url: "https://www.google.com/maps/search/Pelikan+Virpazar+Montenegro", rating: 4.3 }
  ],
  lovcen: [
    { name: "Njego\u0161 Mausoleum Caf\u00e9", type: "Caf\u00e9", specialty: "Hot drinks and pastries with view", url: "https://www.google.com/maps/search/Njego%C5%A1+Mausoleum+Cafe+Lov%C4%87en+Montenegro", rating: 4.2 },
    { name: "Konabanje", type: "Traditional", specialty: "Njegu\u0161ki steak with mushrooms", url: "https://www.google.com/maps/search/Konabanje+Lov%C4%87en+Montenegro", rating: 4.5 },
    { name: "Etno Kuca", type: "Traditional", specialty: "Homemade cheese and prosciutto", url: "https://www.google.com/maps/search/Etno+Kuca+Lov%C4%87en+Montenegro", rating: 4.4 }
  ],
  tivat: [
    { name: "Kuzina", type: "Fine Dining", specialty: "Seafood tasting menu", url: "https://www.google.com/maps/search/Kuzina+Porto+Montenegro+Tivat", rating: 4.8 },
    { name: "Madera", type: "Seafood", specialty: "Grilled fish and champagne", url: "https://www.google.com/maps/search/Madera+Porto+Montenegro+Tivat", rating: 4.7 },
    { name: "Bocalegno", type: "Caf\u00e9", specialty: "Italian coffee and croissants", url: "https://www.google.com/maps/search/Bocalegno+Porto+Montenegro+Tivat", rating: 4.5 },
    { name: "Restaurant La Mare", type: "Fine Dining", specialty: "Mediterranean fine dining with marina view", url: "https://www.google.com/maps/search/La+Mare+Porto+Montenegro+Tivat", rating: 4.8 }
  ],
  boka: [
    { name: "Konoba Catovica Mlini", type: "Traditional", specialty: "Seafood buzara and local wine", url: "https://www.google.com/maps/search/Catovica+Mlini+Bay+of+Kotor+Montenegro", rating: 4.7 },
    { name: "Restaurant Ponta", type: "Seafood", specialty: "Adriatic fish platter", url: "https://www.google.com/maps/search/Ponta+Bay+of+Kotor+Montenegro", rating: 4.6 },
    { name: "Opatovo", type: "Traditional", specialty: "Stone oven baked lamb", url: "https://www.google.com/maps/search/Opatovo+Bay+of+Kotor+Montenegro", rating: 4.5 }
  ],
  "dobra-voda": [
    { name: "Konoba Dobre Vode", type: "Seafood", specialty: "Fresh fish and grilled vegetables", url: "https://www.google.com/maps/search/Konoba+Dobre+Vode+Montenegro", rating: 4.4 },
    { name: "Camping Restaurant", type: "Traditional", specialty: "Homemade pasta and seafood", url: "https://www.google.com/maps/search/Dobra+Voda+Restaurant+Montenegro", rating: 4.3 },
    { name: "Sunny Beach Bar", type: "Caf\u00e9", specialty: "Smoothies and light bites", url: "https://www.google.com/maps/search/Sunny+Beach+Dobra+Voda+Montenegro", rating: 4.2 }
  ],
  prokletije: [
    { name: "Konoba Prokletije", type: "Traditional", specialty: "Mountain lamb stew", url: "https://www.google.com/maps/search/Konoba+Prokletije+Montenegro", rating: 4.3 },
    { name: "Plav Restaurant", type: "Traditional", specialty: "Trout and potato from Plav lake", url: "https://www.google.com/maps/search/Plav+Restaurant+Prokletije+Montenegro", rating: 4.4 },
    { name: "Grebaje Valley", type: "Caf\u00e9", specialty: "Herbal tea and honey", url: "https://www.google.com/maps/search/Grebaje+Prokletije+Montenegro", rating: 4.2 }
  ],
  default: [
    { name: "Restaurant Bukovica", type: "Traditional", specialty: "Montenegrin national dishes", url: "https://www.google.com/maps/search/Montenegrin+national+restaurant+Montenegro", rating: 4.4 },
    { name: "Konoba Njegu\u0161i", type: "Traditional", specialty: "Njegu\u0161ki pr\u0161ut and cheese", url: "https://www.google.com/maps/search/Konoba+Njegu%C5%A1i+Montenegro", rating: 4.5 },
    { name: "Bakra", type: "Seafood", specialty: "Fresh Adriatic seafood", url: "https://www.google.com/maps/search/Seafood+restaurant+Montenegro", rating: 4.4 },
    { name: "Caffe Bar Lav", type: "Caf\u00e9", specialty: "Coffee and local pastries", url: "https://www.google.com/maps/search/Cafe+Montenegro", rating: 4.3 }
  ]
,
  "default": [
    { name: "Konoba", type: "Traditional", specialty: "Montenegrin Cuisine", url: "https://www.google.com/maps/search/?api=1&query=Konoba+Montenegro", rating: 4.5 },
    { name: "Seafood Restaurant", type: "Seafood", specialty: "Adriatic Fish", url: "https://www.google.com/maps/search/?api=1&query=Seafood+Restaurant+Montenegro", rating: 4.6 },
    { name: "Wine Cellar", type: "Wine Bar", specialty: "Vranac Wine", url: "https://www.google.com/maps/search/?api=1&query=Wine+Cellar+Montenegro", rating: 4.4 },
    { name: "Caffe Bar", type: "Café", specialty: "Coffee & Views", url: "https://www.google.com/maps/search/?api=1&query=Caffe+Montenegro", rating: 4.3 }
  ]
};;
const accommodationsData = {
  kotor: [
    { name: "Hotel Cattaro", type: "Boutique Hotel", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Kotor+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Blue Kotor Bay Premium", type: "Resort", price: "$$$", rating: 4.8, url: "https://www.booking.com/searchresults.html?ss=Kotor+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Bakra", type: "Guest House", price: "$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Kotor+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Peko", type: "Apartment", price: "$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Kotor+Montenegro&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  budva: [
    { name: "Hotel Avala Resort & Villas", type: "Resort", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Budva+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Tre Canne", type: "Boutique Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Budva+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments D&N", type: "Apartment", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Budva+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Mogren", type: "Hotel", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Budva+Montenegro&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "sveti-stefan": [
    { name: "Aman Sveti Stefan", type: "Luxury Resort", price: "$$$", rating: 4.9, url: "https://www.booking.com/searchresults.html?ss=Sveti+Stefan+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel California", type: "Boutique Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Sveti+Stefan+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Villa Mila", type: "Villa", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Sveti+Stefan+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Sveti Stefan", type: "Apartment", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Sveti+Stefan+Montenegro&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  perast: [
    { name: "Hotel Conte", type: "Hotel", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Perast+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Pansion Perast", type: "Guest House", price: "$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Perast+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Bajic", type: "Apartment", price: "$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Perast+Montenegro&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  durmitor: [
    { name: "Hotel Soa", type: "Hotel", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=%C5%BDabljak+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Polar Star", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=%C5%BDabljak+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartment N之本", type: "Apartment", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=%C5%BDabljak+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Gorica", type: "Guest House", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=%C5%BDabljak+Montenegro&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "tara-canyon": [
    { name: "Camp Zabojsko", type: "Camping", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Tara+Canyon+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Etno Selo Montenegro", type: "Guest House", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Tara+Canyon+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vikendica Tara", type: "Cottage", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Tara+Canyon+Montenegro&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  podgorica: [
    { name: "Hotel Hilton Podgorica", type: "Luxury Hotel", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Podgorica+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Podgorica", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Podgorica+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Boutique Hotel Galerija", type: "Boutique Hotel", price: "$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Podgorica+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hostel Kapital", type: "Hostel", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Podgorica+Montenegro&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  bar: [
    { name: "Hotel Princess", type: "Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Bar+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Stari Grad", type: "Apartment", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Bar+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Nautilus", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Bar+Montenegro&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  ulcinj: [
    { name: "Hotel Mediteran", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Ulcinj+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Palata Veneziana", type: "Boutique Hotel", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Ulcinj+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Adrovic", type: "Apartment", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Ulcinj+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Villa Rada", type: "Guest House", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Ulcinj+Montenegro&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "herceg-novi": [
    { name: "Hotel Plaza", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Herceg+Novi+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Villa Lucic", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Herceg+Novi+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Riviera", type: "Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Herceg+Novi+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Senti\u0107", type: "Apartment", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Herceg+Novi+Montenegro&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  cetinje: [
    { name: "Hotel Grand", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Cetinje+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "B&B Cetinje", type: "Bed & Breakfast", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Cetinje+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Kraljic", type: "Apartment", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Cetinje+Montenegro&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  ostrog: [
    { name: "Hotel Ostrog", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Ostrog+Monastery+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Miris Mediterana", type: "Guest House", price: "$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Ostrog+Monastery+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Etno Selo Montenegro", type: "Traditional House", price: "$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Ostrog+Monastery+Montenegro&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "biogradska-gora": [
    { name: "Hotel Biogradska Gora", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Biogradska+Gora+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Bjelasica", type: "Apartment", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Biogradska+Gora+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Kola\u0161in", type: "Guest House", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Biogradska+Gora+Montenegro&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "skadar-lake": [
    { name: "Guest House \u010cakovina", type: "Guest House", price: "$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Skadar+Lake+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Virpazar", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Skadar+Lake+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Mirovica", type: "Villa", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Skadar+Lake+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Bed & Breakfast SkadarLake", type: "Bed & Breakfast", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Skadar+Lake+Montenegro&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  lovcen: [
    { name: "Hotel Lov\u0107en", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Lov%C4%87en+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Montenegro", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Lov%C4%87en+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Etno Village Njegu\u0161i", type: "Traditional House", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Lov%C4%87en+Montenegro&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  tivat: [
    { name: "Regent Porto Montenegro", type: "Luxury Resort", price: "$$$", rating: 4.8, url: "https://www.booking.com/searchresults.html?ss=Tivat+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Palma", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Tivat+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Porto", type: "Apartment", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Tivat+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Delfin", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Tivat+Montenegro&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  boka: [
    { name: "Hotel Admiral", type: "Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Bay+of+Kotor+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Boka Bay", type: "Apartment", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Bay+of+Kotor+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Marija", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Bay+of+Kotor+Montenegro&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "dobra-voda": [
    { name: "Hotel DOBRA VODA", type: "Hotel", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Dobra+Voda+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Mala", type: "Apartment", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Dobra+Voda+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Villa Valdanos", type: "Villa", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Dobra+Voda+Montenegro&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  prokletije: [
    { name: "Hotel Plav", type: "Hotel", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Prokletije+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Ropojana", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Prokletije+Montenegro&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Bogi\u0107evi\u0107", type: "Guest House", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Prokletije+Montenegro&aid=2086573&no_rooms=1&group_adults=2" }
  ]
};

const thingsToDoData = {
  kotor: [
    "Climb the 1,350 steps to San Giovanni Fortress for panoramic bay views",
    "Wander the labyrinthine streets of the UNESCO Old Town",
    "Take a boat tour around the Bay of Kotor",
    "Visit the Maritime Museum in the old Grgurina Palace",
    "Explore the Cat Museum and other quirky small museums",
    "Enjoy sunset drinks at a waterfront cafe on the square"
  ],
  budva: [
    "Explore the walled Old Town of Budva with its medieval churches",
    "Relax on Mogren Beach with its dramatic cliff backdrop",
    "Party at Top Hill, one of the largest open-air clubs in the Balkans",
    "Visit the Citadel fortress for views over the Adriatic",
    "Take a day trip to the nearby island of Sveti Nikola",
    "Stroll the Budva Riviera promenade from Slovenska Plaza"
  ],
  "sveti-stefan": [
    "Photograph the iconic island resort from the public viewpoint",
    "Swim at the public beach below the Aman resort",
    "Walk the coastal path from Sveti Stefan to Przno village",
    "Dine at a waterfront restaurant with views of the islet",
    "Visit nearby King's Park for hiking trails",
    "Explore the luxury boutiques at the entrance area"
  ],
  perast: [
    "Take a boat to Our Lady of the Rocks island church",
    "Climb the bell tower of St. Nicholas Church for bay views",
    "Visit the Bujovic Palace maritime museum",
    "Walk the seaside promenade lined with stone palaces",
    "Photograph the iconic Perast panorama from the water"
  ],
  durmitor: [
    "Hike the 3.5 km loop around Crno Jezero (Black Lake)",
    "Go white-water rafting on the Tara River",
    "Summit Bobotov Kuk, the park's highest peak at 2,523 m",
    "Ski or snowboard at Savin Kuk during winter",
    "Explore the Ice Cave on the Durmitor plateau",
    "Mountain bike through Bjelasica trails"
  ],
  "tara-canyon": [
    "Go white-water rafting through the deepest canyon in Europe",
    "Walk or zipline across the \u0110ur\u0111evi\u0107a Tara Bridge",
    "Hike along the canyon rim for vertiginous views",
    "Photograph the turquoise river from canyon viewpoints",
    "Visit the nearby medieval town of Pljevlja"
  ],
  podgorica: [
    "Walk across the iconic Millennium Bridge",
    "Explore the Podgorica City Museum",
    "Visit the Cathedral of the Resurrection of Christ",
    "Stroll through the Ribnica River quarter",
    "Sample local wines at a Podgorica wine bar",
    "Shop at Delta City for local brands"
  ],
  bar: [
    "Explore the ruins of Stari Bar with its fortress and aqueduct",
    "Visit the 2,000-year-old Old Olive Tree",
    "Relax on \u0160u\u0161anj or Sutomore beaches",
    "Walk through the palm-lined streets of Bar's new town",
    "Take the scenic train ride from Bar to Belgrade (partially)"
  ],
  ulcinj: [
    "Sunbathe on Velika Pla\u017ea, Montenegro's longest beach",
    "Explore the Ulcinj Old Town and its castle",
    "Kite-surf or windsurf on Ada Bojana island",
    "Visit the nearby Salt Pans for bird watching",
    "Take a boat trip to the Bojana River delta",
    "Try local seafood at a konoba in the Old Town"
  ],
  "herceg-novi": [
    "Climb to Forte Mare fortress for views over the bay",
    "Walk the Se\u0161etali\u0161te Pet Danica waterfront promenade",
    "Visit the Savina Monastery and its botanical gardens",
    "Swim at the outdoor pools along the coast",
    "Take a boat to the Blue Cave on the Lustica Peninsula",
    "Explore the town's many staircases and hidden gardens"
  ],
  cetinje: [
    "Tour the Cetinje Monastery and its museum",
    "Visit the Njego\u0161 Museum in the former royal palace",
    "Explore the former embassies on Vojvode Putnika Street",
    "Walk through the King Nikola's Palace",
    "Visit the Cetinje Ethnographic Museum",
    "Take a day trip up to Lov\u0107en National Park"
  ],
  ostrog: [
    "Visit the cliffside Ostrog Monastery and its reliquary",
    "Light a candle at the Church of the Holy Cross",
    "Walk the pilgrimage trail up to the upper monastery",
    "Photograph the dramatic cliff face setting",
    "Visit the spring water source below the monastery"
  ],
  "biogradska-gora": [
    "Hike the Biogradsko Lake loop trail",
    "Walk through the primeval forest on marked trails",
    "Climb to the peak of Crna Glava for panoramic views",
    "Visit the Bjelasica Mountain viewpoints",
    "Bird watch in the protected forest ecosystem"
  ],
  "skadar-lake": [
    "Take a boat tour from Virpazar through the lake channels",
    "Visit the floating Besac Fortress",
    "Go bird watching at the lake's nature reserve",
    "Explore the Moraca Monastery on the northern shore",
    "Taste local wine and cheese at Virpazar konobas",
    "Photograph the lotus flower fields in summer"
  ],
  lovcen: [
    "Visit the Njego\u0161 Mausoleum at the peak of Lov\u0107en",
    "Hike the mountain trails through the national park",
    "Drive the scenic Kotor-Lov\u0107en road with switchbacks",
    "Photograph the 360-degree panorama from the mausoleum",
    "Visit the Ivanova Korita picnic area",
    "Explore the Njegu\u0161i village for local prosciutto"
  ],
  tivat: [
    "Stroll the Porto Montenegro luxury marina",
    "Visit the Naval Heritage Museum in the old Arsenal",
    "Shop at designer boutiques along the waterfront",
    "Dine at one of the marina's Michelin-style restaurants",
    "Take a ferry to Kotor or Herceg Novi",
    "Visit the nearby Lustica Peninsula beaches"
  ],
  boka: [
    "Take a scenic drive around the entire bay",
    "Book a private boat tour of the Bay of Kotor",
    "Photograph the bay from the Kotor fortress viewpoint",
    "Visit the submarine tunnels from the Yugoslav era",
    "Swim in the clear waters of the Verige Strait",
    "Sunset cruise with views of Perast and Our Lady of the Rocks"
  ],
  "dobra-voda": [
    "Relax on the pebble beaches of Dobra Voda",
    "Swim in the crystal-clear Adriatic waters",
    "Walk through the olive groves above the town",
    "Visit the nearby ruins of the old fortress",
    "Enjoy fresh seafood at a beachfront konoba"
  ],
  prokletije: [
    "Hike the Ropojana Valley to the glacial lakes",
    "Trek through the Grebaje Valley rock formations",
    "Visit Plav Lake for swimming and kayaking",
    "Climb the peak of Maja Jezerce for alpine views",
    "Explore the remote villages of the Accursed Mountains"
  ],
  default: [
    "Explore a local Old Town and its fortifications",
    "Try traditional Montenegrin cuisine at a konoba",
    "Visit a national park for hiking and nature",
    "Relax on one of Montenegro's beautiful beaches"
  
]
};
