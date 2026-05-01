const touristPlaces = {
  skopje: {
    name: "Skopje",
    coords: [41.9973, 21.4280],
    image: "images/skopje.jpg",
    location: "Skopje Region",
    description: "The vibrant capital of North Macedonia, Skopje is a city of contrasts where ancient Ottoman heritage meets bold neoclassical architecture. The iconic Stone Bridge connects the old bazaar with Macedonia Square, home to towering statues and the grand Archaeological Museum. Explore the cobblestone streets of the Old Bazaar for traditional crafts and cuisine.",
    type: "Capital City",
    rating: 4.5,
    reviews: 32150,
    bestTime: "April to October",
    tips: "Visit the Old Bazaar in the evening when it comes alive. Climb the Kale Fortress for panoramic city views at sunset."
  },
  ohrid: {
    name: "Ohrid – UNESCO",
    coords: [41.1171, 20.8017],
    image: "images/ohrid.jpg",
    location: "Ohrid Region",
    description: "A jewel of the Balkans, Ohrid is a UNESCO World Heritage site nestled on the shores of ancient Lake Ohrid. With 365 churches, one for each day of the year, the town is a living museum of Byzantine and Slavic architecture. Samuel's Fortress towers above the old town, while the lake's crystal-clear waters invite swimming and boat trips.",
    type: "UNESCO World Heritage",
    rating: 4.9,
    reviews: 29870,
    bestTime: "May to September",
    tips: "Take an early morning walk along the lakeside promenade. Visit the Church of St. John at Kaneo for the most photographed view in North Macedonia."
  },
  bitola: {
    name: "Bitola",
    coords: [41.0330, 21.3350],
    image: "images/bitola.jpg",
    location: "Pelagonia Region",
    description: "Known as the 'City of Consuls,' Bitola boasts one of the most beautiful pedestrian streets in the Balkans — the Shirok Sokak. Lined with neoclassical buildings, cafes, and consulates, it leads to the ancient ruins of Heraclea Lyncestis. The city is a cultural hub with a sophisticated atmosphere.",
    type: "Cultural City",
    rating: 4.6,
    reviews: 15340,
    bestTime: "April to October",
    tips: "Stroll the entire length of Shirok Sokak and stop for coffee at one of the many outdoor cafes. Visit Heraclea Lyncestis at sunset for stunning mosaics."
  },
  prilep: {
    name: "Prilep",
    coords: [41.3333, 21.5500],
    image: "images/prilep.jpg",
    location: "Pelagonia Region",
    description: "The 'City of Tobacco' sits beneath the dramatic rocky hills of the Markovi Kuli fortress. Prilep is famous for its tobacco production, beer, and the nearby Treskavec Monastery perched high on a mountain. The old bazaar and traditional architecture make it a charming stop off the beaten path.",
    type: "Historic Town",
    rating: 4.3,
    reviews: 8970,
    bestTime: "April to October",
    tips: "Hike up to Markovi Kuli fortress for incredible views of the valley. Try the local beer and tobacco products unique to the region."
  },
  tetovo: {
    name: "Tetovo",
    coords: [42.0083, 20.9714],
    image: "images/tetovo.jpg",
    location: "Polog Region",
    description: "Nestled at the foot of the Šar Mountains, Tetovo is home to the stunning Painted Mosque (Šarena Džamija), an Ottoman masterpiece covered in elaborate floral frescoes. The city blends rich Albanian and Macedonian cultures, with lively markets and nearby mountain hiking opportunities.",
    type: "Cultural Town",
    rating: 4.2,
    reviews: 7650,
    bestTime: "May to September",
    tips: "Visit the Painted Mosque early in the morning for the best light and fewer crowds. Try traditional Albanian cuisine at a local restaurant."
  },
  kratovo: {
    name: "Kratovo",
    coords: [42.0667, 22.1833],
    image: "images/kratovo.jpg",
    location: "Eastern Region",
    description: "A medieval town built in an extinct volcanic crater, Kratovo is famous for its stone towers, arched bridges, and traditional crafts. The unique landscape creates a dramatic setting for exploring cobblestone streets, old monasteries, and artisan workshops producing pottery and filigree jewelry.",
    type: "Medieval Town",
    rating: 4.5,
    reviews: 6720,
    bestTime: "April to October",
    tips: "Walk across all six of Kratovo's historic stone bridges. Buy handmade pottery as a souvenir directly from local artisans."
  },
  krusevo: {
    name: "Krusevo",
    coords: [41.3667, 21.2500],
    image: "images/krusevo.jpg",
    location: "Pelagonia Region",
    description: "The highest town in North Macedonia, Krusevo is a historic mountain village that was the epicenter of the Ilinden Uprising. The Meckin Kamen monument and the Tomb of the Unknown Soldier commemorate this heritage. Known for its distinctive architecture and traditional woodcarving, it's also a popular winter destination.",
    type: "Mountain Town",
    rating: 4.4,
    reviews: 8140,
    bestTime: "Year-round (skiing in winter, hiking in summer)",
    tips: "Try the local specialty 'krusevski pastrmajlija' — a traditional meat pie. Visit the Makedonium monument for panoramic views."
  },
  strumica: {
    name: "Strumica",
    coords: [41.4333, 22.6333],
    image: "images/strumica.jpg",
    location: "Southeastern Region",
    description: "A lively city in the fertile Strumica Valley, known for its agricultural abundance, thermal springs, and nearby waterfalls. The city hosts vibrant festivals celebrating local produce, while the surrounding mountains offer hiking trails and the impressive Koleshino Waterfall is a short drive away.",
    type: "City",
    rating: 4.1,
    reviews: 5430,
    bestTime: "March to October",
    tips: "Visit during the Strumica Cultural Summer festival for concerts and events. Drive to Koleshino Waterfall, one of the tallest in the Balkans."
  },
  mavrovo: {
    name: "Mavrovo National Park",
    coords: [41.7000, 20.7500],
    image: "images/mavrovo.jpg",
    location: "Mavrovo Region",
    description: "The largest national park in North Macedonia, Mavrovo is a pristine wilderness of deep forests, crystal-clear lakes, and dramatic peaks. The partially submerged Church of St. Nicholas in Lake Mavrovo is an iconic sight. Skiing in winter and hiking in summer make it a year-round destination.",
    type: "National Park",
    rating: 4.7,
    reviews: 12450,
    bestTime: "June to September (hiking), December to March (skiing)",
    tips: "Hike to the church submerged in Lake Mavrovo for a unique photo. Rent a kayak to explore the lake's hidden coves."
  },
  pelister: {
    name: "Pelister National Park",
    coords: [41.0000, 21.2333],
    image: "images/pelister.jpg",
    location: "Baba Mountain",
    description: "Home to the ancient five-needle pine forests (Macedonian pine), Pelister National Park is dominated by the twin peaks of Baba Mountain. The glacial lakes known as 'Pelister's Eyes' sit at 2,200 meters, offering spectacular hiking. The park is a paradise for botanists and nature enthusiasts.",
    type: "National Park",
    rating: 4.6,
    reviews: 9360,
    bestTime: "June to September",
    tips: "Hike to the Great Lake (Golemo Ezero) for stunning alpine scenery. Bring warm clothing as temperatures drop at high altitude even in summer."
  },
  galicica: {
    name: "Galicica National Park",
    coords: [40.9833, 20.8167],
    image: "images/galicica.jpg",
    location: "Between Ohrid and Prespa Lakes",
    description: "Straddling the mountain ridge between Lake Ohrid and Lake Prespa, Galicica National Park offers some of the most spectacular views in the Balkans. The park's biodiversity is extraordinary, with over 1,000 plant species. A scenic road crosses the park connecting two of North Macedonia's most beautiful lakes.",
    type: "National Park",
    rating: 4.8,
    reviews: 10830,
    bestTime: "May to October",
    tips: "Drive the scenic road from Ohrid to Prespa Lake at sunrise for incredible views. Pack a picnic and enjoy the alpine meadows in full bloom."
  },
  matka: {
    name: "Matka Canyon",
    coords: [41.9500, 21.3000],
    image: "images/matka.jpg",
    location: "Skopje Region",
    description: "Just a short drive from Skopje, Matka Canyon is a stunning natural gorge carved by the Treska River. With towering cliffs, medieval monasteries, and the Vrelo Cave — one of the deepest underwater caves in the world — it's a paradise for kayakers, climbers, and hikers.",
    type: "Natural Wonder",
    rating: 4.7,
    reviews: 18650,
    bestTime: "April to October",
    tips: "Take a boat ride to Vrelo Cave for an unforgettable experience. Rent a kayak to explore the canyon at your own pace. Visit St. Andrew's Monastery perched on the cliffs."
  },
  kokino: {
    name: "Kokino Observatory",
    coords: [42.2667, 21.9500],
    image: "images/kokino.jpg",
    location: "Kumanovo Region",
    description: "An ancient megalithic observatory dating back over 3,800 years, Kokino is one of the oldest astronomical observatories in the world. Carved into a volcanic hill, the stone markers were used to track the movements of the sun and moon. The site offers panoramic views of the surrounding countryside.",
    type: "Archaeological Site",
    rating: 4.4,
    reviews: 4580,
    bestTime: "April to October",
    tips: "Visit during the summer solstice when the sun aligns perfectly with the stone markers. Combine with a trip to Kuklica nearby."
  },
  heraclea: {
    name: "Heraclea Lyncestis",
    coords: [41.0167, 21.3500],
    image: "images/heraclea.jpg",
    location: "Bitola Region",
    description: "An ancient Greek and Roman city founded in the 4th century BC, Heraclea Lyncestis boasts remarkably well-preserved mosaics, a Roman theater, bathhouses, and early Christian basilicas. The intricate floor mosaics are considered among the finest in the Balkans.",
    type: "Archaeological Site",
    rating: 4.6,
    reviews: 7230,
    bestTime: "March to October",
    tips: "Visit in the late afternoon when the low sun illuminates the mosaics perfectly. Combine with a walking tour of Bitola's Shirok Sokak."
  },
  stobi: {
    name: "Stobi",
    coords: [41.5500, 21.9833],
    image: "images/stobi.jpg",
    location: "Tikvesh Region",
    description: "One of the most important archaeological sites in North Macedonia, Stobi was a thriving Roman and late antique city. Explore the grand theaters, basilicas, residential palaces, and intricate thermal baths. The site is set in the rolling wine country near Kavadarci, famous for its vineyards.",
    type: "Archaeological Site",
    rating: 4.5,
    reviews: 6150,
    bestTime: "March to October",
    tips: "Combine your visit with wine tasting at a nearby Tikvesh winery. Wear a hat and bring water as there is limited shade at the site."
  },
  treskavec: {
    name: "Treskavec Monastery",
    coords: [41.6333, 21.4500],
    image: "images/treskavec.jpg",
    location: "Prilep Region",
    description: "Perched dramatically on a cliff high above the Prilep Valley, Treskavec Monastery is a 14th-century Orthodox monastery dedicated to the Dormition of the Mother of God. The remote setting requires a steep hike or 4x4 ascent, but rewards visitors with breathtaking views and a profound sense of peace.",
    type: "Monastery",
    rating: 4.7,
    reviews: 3890,
    bestTime: "May to October",
    tips: "The gravel road is rough — a 4x4 vehicle is recommended. Alternatively, hike up from Prilep for a rewarding 2-hour trek. Bring water and snacks."
  },
  "marko-monastery": {
    name: "Marko's Monastery",
    coords: [41.9333, 21.4167],
    image: "images/marko-monastery.jpg",
    location: "Skopje Region",
    description: "Also known as the Monastery of St. Demetrius, Marko's Monastery is a medieval Serbian Orthodox monastery located in the village of Markova Sušica near Skopje. Built in the 14th century, it features remarkable frescoes and is still an active monastery surrounded by beautiful nature.",
    type: "Monastery",
    rating: 4.5,
    reviews: 3240,
    bestTime: "April to October",
    tips: "Combine your visit with a trip to Matka Canyon as they are close together. Dress modestly as it is an active religious site."
  },
  kuklica: {
    name: "Kuklica Stone Dolls",
    coords: [42.1333, 21.9667],
    image: "images/kuklica.jpg",
    location: "Kumanovo Region",
    description: "A fascinating natural phenomenon near Kumanovo, Kuklica consists of over 120 naturally formed stone pillars that resemble human figures or 'dolls.' According to local legend, they are petrified wedding guests turned to stone. The unusual geological formations create an otherworldly landscape.",
    type: "Natural Wonder",
    rating: 4.3,
    reviews: 2870,
    bestTime: "March to November",
    tips: "Visit early morning or late afternoon for the best lighting on the stone formations. Combine with a visit to Kokino Observatory nearby."
  },
  dopcin: {
    name: "Dupcin",
    coords: [42.2333, 22.3167],
    image: "images/dopcin.jpg",
    location: "Eastern Region",
    description: "A historic village known for its remarkable Stone Bridge, an Ottoman-era arched bridge spanning the Kriva River. The bridge is one of the finest examples of Ottoman bridge architecture in the Balkans. The surrounding village offers a glimpse into traditional rural life in eastern North Macedonia.",
    type: "Historic Village",
    rating: 4.2,
    reviews: 2150,
    bestTime: "April to October",
    tips: "Photograph the Stone Bridge from the riverbank for the best angles. Combine with a visit to nearby Kratovo for a full day trip."
  }
};

const restaurantsData = {
  skopje: [
    { name: "Destan", type: "Traditional", specialty: "Grilled meats and kebabs", url: "https://www.google.com/maps/search/Destan+Skopje+North+Macedonia", rating: 4.6 },
    { name: "Pelister", type: "Traditional", specialty: "Macedonian national dishes", url: "https://www.google.com/maps/search/Pelister+Skopje+North+Macedonia", rating: 4.5 },
    { name: "Vodenica Mulino", type: "Fine Dining", specialty: "Modern Macedonian cuisine", url: "https://www.google.com/maps/search/Vodenica+Mulino+Skopje+North+Macedonia", rating: 4.7 },
    { name: "Old House Restaurant", type: "Traditional", specialty: "Tavce gravce and local wine", url: "https://www.google.com/maps/search/Old+House+Skopje+North+Macedonia", rating: 4.6 },
    { name: "La Terrazza", type: "Italian", specialty: "Pasta and seafood with city views", url: "https://www.google.com/maps/search/La+Terrazza+Skopje+North+Macedonia", rating: 4.4 },
    { name: "Bela Voda", type: "Traditional", specialty: "Lamb and roasted vegetables", url: "https://www.google.com/maps/search/Bela+Voda+Skopje+North+Macedonia", rating: 4.5 }
  ],
  ohrid: [
    { name: "Kaneo Restaurant", type: "Fine Dining", specialty: "Lake trout and seafood", url: "https://www.google.com/maps/search/Kaneo+Ohrid+North+Macedonia", rating: 4.8 },
    { name: "Letnica", type: "Traditional", specialty: "Ohrid trout and local specialties", url: "https://www.google.com/maps/search/Letnica+Ohrid+North+Macedonia", rating: 4.6 },
    { name: "St. Sofija Restaurant", type: "Traditional", specialty: "Balkan grill and lake fish", url: "https://www.google.com/maps/search/St+Sofija+Ohrid+North+Macedonia", rating: 4.7 },
    { name: "Kaj Kanevche", type: "Seafood", specialty: "Grilled fish with lake views", url: "https://www.google.com/maps/search/Kaj+Kanevche+Ohrid+North+Macedonia", rating: 4.5 },
    { name: "Cuba Libre", type: "Cafe", specialty: "Coffee and pastries by the lake", url: "https://www.google.com/maps/search/Cuba+Libre+Ohrid+North+Macedonia", rating: 4.3 },
    { name: "Antico", type: "Italian", specialty: "Pizza and pasta with lake view", url: "https://www.google.com/maps/search/Antico+Ohrid+North+Macedonia", rating: 4.4 }
  ],
  bitola: [
    { name: "Sokace", type: "Traditional", specialty: "Macedonian grill platter", url: "https://www.google.com/maps/search/Sokace+Bitola+North+Macedonia", rating: 4.6 },
    { name: "Grne", type: "Traditional", specialty: "Slow-cooked stews and meats", url: "https://www.google.com/maps/search/Grne+Bitola+North+Macedonia", rating: 4.5 },
    { name: "Marly", type: "Cafe", specialty: "Specialty coffee and brunch", url: "https://www.google.com/maps/search/Marly+Bitola+North+Macedonia", rating: 4.4 },
    { name: "Pelister Restaurant", type: "Traditional", specialty: "Mountain trout and lamb", url: "https://www.google.com/maps/search/Pelister+Bitola+North+Macedonia", rating: 4.7 }
  ],
  prilep: [
    { name: "Restaurant Dukat", type: "Traditional", specialty: "Grilled meats and local wine", url: "https://www.google.com/maps/search/Dukat+Prilep+North+Macedonia", rating: 4.5 },
    { name: "Kaj Serdarot", type: "Traditional", specialty: "Macedonian home cooking", url: "https://www.google.com/maps/search/Kaj+Serdarot+Prilep+North+Macedonia", rating: 4.4 },
    { name: "Pivnica Prilep", type: "Traditional", specialty: "Beer and local cuisine", url: "https://www.google.com/maps/search/Pivnica+Prilep+North+Macedonia", rating: 4.3 },
    { name: "Evropa", type: "Cafe", specialty: "Coffee and cakes", url: "https://www.google.com/maps/search/Evropa+Prilep+North+Macedonia", rating: 4.2 }
  ],
  tetovo: [
    { name: "Restaurant Sar", type: "Traditional", specialty: "Albanian and Macedonian grill", url: "https://www.google.com/maps/search/Sar+Tetovo+North+Macedonia", rating: 4.4 },
    { name: "Vila Teuta", type: "Traditional", specialty: "Balkan specialties and grilled meat", url: "https://www.google.com/maps/search/Vila+Teuta+Tetovo+North+Macedonia", rating: 4.5 },
    { name: "Lisi Cafi", type: "Cafe", specialty: "Turkish coffee and baklava", url: "https://www.google.com/maps/search/Lisi+Cafi+Tetovo+North+Macedonia", rating: 4.3 }
  ],
  kratovo: [
    { name: "Restaurant Kratovo", type: "Traditional", specialty: "Grilled meats and local cheese", url: "https://www.google.com/maps/search/Restaurant+Kratovo+North+Macedonia", rating: 4.4 },
    { name: "Konoba Kratovo", type: "Traditional", specialty: "Traditional stews and pies", url: "https://www.google.com/maps/search/Konoba+Kratovo+North+Macedonia", rating: 4.3 },
    { name: "Kuklica Restaurant", type: "Traditional", specialty: "Home-style Macedonian dishes", url: "https://www.google.com/maps/search/Kuklica+Kratovo+North+Macedonia", rating: 4.2 }
  ],
  krusevo: [
    { name: "Restaurant Meckin Kamen", type: "Traditional", specialty: "Roasted lamb and mountain herbs", url: "https://www.google.com/maps/search/Meckin+Kamen+Krusevo+North+Macedonia", rating: 4.5 },
    { name: "Vila Krusevo", type: "Traditional", specialty: "Krusevski pastrmajlija", url: "https://www.google.com/maps/search/Vila+Krusevo+North+Macedonia", rating: 4.4 },
    { name: "Etno Restaurant", type: "Traditional", specialty: "Homemade cheese and grilled vegetables", url: "https://www.google.com/maps/search/Etno+Krusevo+North+Macedonia", rating: 4.3 }
  ],
  strumica: [
    { name: "Restaurant Bori", type: "Traditional", specialty: "Grilled fish and local produce", url: "https://www.google.com/maps/search/Bori+Strumica+North+Macedonia", rating: 4.3 },
    { name: "Hotel Sago", type: "Traditional", specialty: "Macedonian international cuisine", url: "https://www.google.com/maps/search/Hotel+Sago+Strumica+North+Macedonia", rating: 4.2 },
    { name: "Caffe Bar Luna", type: "Cafe", specialty: "Coffee and light snacks", url: "https://www.google.com/maps/search/Luna+Strumica+North+Macedonia", rating: 4.1 }
  ],
  mavrovo: [
    { name: "Restaurant Mavrovo", type: "Traditional", specialty: "Lake trout and mountain lamb", url: "https://www.google.com/maps/search/Restaurant+Mavrovo+North+Macedonia", rating: 4.4 },
    { name: "Hotel Radika", type: "Traditional", specialty: "Traditional Macedonian cuisine", url: "https://www.google.com/maps/search/Hotel+Radika+Mavrovo+North+Macedonia", rating: 4.5 },
    { name: "Ski Center Restaurant", type: "Cafe", specialty: "Warm drinks and mountain snacks", url: "https://www.google.com/maps/search/Ski+Mavrovo+Restaurant+North+Macedonia", rating: 4.2 }
  ],
  pelister: [
    { name: "Pelister Mountain Hut", type: "Traditional", specialty: "Mountain stews and hot tea", url: "https://www.google.com/maps/search/Pelister+Mountain+Hut+North+Macedonia", rating: 4.3 },
    { name: "Mountain House Pelister", type: "Traditional", specialty: "Grilled meat and local cheese", url: "https://www.google.com/maps/search/Pelister+Restaurant+Bitola+North+Macedonia", rating: 4.4 },
    { name: "Molika Hotel", type: "Traditional", specialty: "International and local dishes", url: "https://www.google.com/maps/search/Molika+Pelister+North+Macedonia", rating: 4.3 }
  ],
  galicica: [
    { name: "Restaurant Galicica", type: "Traditional", specialty: "Grilled trout and lake specialties", url: "https://www.google.com/maps/search/Galicica+Restaurant+Ohrid+North+Macedonia", rating: 4.5 },
    { name: "Kod Veli", type: "Traditional", specialty: "Macedonian grill with lake view", url: "https://www.google.com/maps/search/Kod+Veli+Galicica+North+Macedonia", rating: 4.4 },
    { name: "Prespa View", type: "Cafe", specialty: "Coffee and light meals with panorama", url: "https://www.google.com/maps/search/Prespa+View+Galicica+North+Macedonia", rating: 4.3 }
  ],
  matka: [
    { name: "Restaurant Matka", type: "Traditional", specialty: "Grilled fish and river trout", url: "https://www.google.com/maps/search/Restaurant+Matka+Canyon+North+Macedonia", rating: 4.5 },
    { name: "Vrelo Cave Restaurant", type: "Traditional", specialty: "Freshwater fish and salads", url: "https://www.google.com/maps/search/Vrelo+Cave+Restaurant+Matka+North+Macedonia", rating: 4.3 },
    { name: "Canyon View Cafe", type: "Cafe", specialty: "Coffee and snacks with canyon views", url: "https://www.google.com/maps/search/Matka+Canyon+Cafe+North+Macedonia", rating: 4.2 }
  ],
  kokino: [
    { name: "Restaurant Kokino", type: "Traditional", specialty: "Grilled meats and local produce", url: "https://www.google.com/maps/search/Kokino+Restaurant+Kumanovo+North+Macedonia", rating: 4.2 },
    { name: "Kumanovo Restaurant", type: "Traditional", specialty: "Balkan grill and salads", url: "https://www.google.com/maps/search/Kumanovo+Restaurant+North+Macedonia", rating: 4.3 }
  ],
  heraclea: [
    { name: "Restaurant Heraclea", type: "Traditional", specialty: "Macedonian specialties near ruins", url: "https://www.google.com/maps/search/Heraclea+Bitola+Restaurant+North+Macedonia", rating: 4.3 },
    { name: "Shirok Sokak Cafe", type: "Cafe", specialty: "Coffee and pastries on main street", url: "https://www.google.com/maps/search/Shirok+Sokak+Bitola+North+Macedonia", rating: 4.4 }
  ],
  stobi: [
    { name: "Restaurant Stobi", type: "Traditional", specialty: "Wine and local cheese platters", url: "https://www.google.com/maps/search/Stobi+Restaurant+North+Macedonia", rating: 4.3 },
    { name: "Tikvesh Winery Restaurant", type: "Fine Dining", specialty: "Wine tasting and gourmet pairing", url: "https://www.google.com/maps/search/Tikvesh+Winery+North+Macedonia", rating: 4.7 },
    { name: "Kavadarci Wine House", type: "Traditional", specialty: "Grilled meats and local wines", url: "https://www.google.com/maps/search/Kavadarci+Wine+House+North+Macedonia", rating: 4.5 }
  ],
  treskavec: [
    { name: "Monastery Kitchen", type: "Traditional", specialty: "Monastic bread and bean soup", url: "https://www.google.com/maps/search/Treskavec+Monastery+Kitchen+North+Macedonia", rating: 4.2 },
    { name: "Prilep Restaurant", type: "Traditional", specialty: "Tobacco region specialties", url: "https://www.google.com/maps/search/Prilep+Restaurant+North+Macedonia", rating: 4.3 }
  ],
  "marko-monastery": [
    { name: "Markova Susica Tavern", type: "Traditional", specialty: "Home-cooked Macedonian meals", url: "https://www.google.com/maps/search/Markova+Susica+Skopje+North+Macedonia", rating: 4.3 },
    { name: "Matka Canyon Restaurant", type: "Traditional", specialty: "River trout and grilled fish", url: "https://www.google.com/maps/search/Matka+Canyon+Restaurant+North+Macedonia", rating: 4.4 }
  ],
  kuklica: [
    { name: "Kumanovo Traditional", type: "Traditional", specialty: "Balkan grill and local dishes", url: "https://www.google.com/maps/search/Kumanovo+Traditional+Restaurant+North+Macedonia", rating: 4.2 },
    { name: "Stone Dolls Cafe", type: "Cafe", specialty: "Coffee and light bites near site", url: "https://www.google.com/maps/search/Kuklica+Cafe+North+Macedonia", rating: 4.1 }
  ],
  dopcin: [
    { name: "Kratovo Restaurant", type: "Traditional", specialty: "Eastern Macedonian specialties", url: "https://www.google.com/maps/search/Kratovo+Restaurant+North+Macedonia", rating: 4.3 },
    { name: "Kriva River Tavern", type: "Traditional", specialty: "Home-style Balkan cooking", url: "https://www.google.com/maps/search/Kriva+Palanka+Restaurant+North+Macedonia", rating: 4.2 }
  ],
  default: [
    { name: "Traditional Macedonian Tavern", type: "Traditional", specialty: "Tavce gravce and ajvar", url: "https://www.google.com/maps/search/Macedonian+traditional+restaurant+North+Macedonia", rating: 4.4 },
    { name: "Balkan Grill House", type: "Traditional", specialty: "Grilled meats and fresh salads", url: "https://www.google.com/maps/search/Balkan+grill+North+Macedonia", rating: 4.3 },
    { name: "Cafe Bar Centar", type: "Cafe", specialty: "Coffee and local pastries", url: "https://www.google.com/maps/search/Cafe+North+Macedonia", rating: 4.2 },
    { name: "Wine & Dine", type: "Fine Dining", specialty: "Macedonian wines and gourmet food", url: "https://www.google.com/maps/search/Fine+dining+North+Macedonia", rating: 4.5 }
  ]
,
  "default": [
    { name: "Traditional Restaurant", type: "Traditional", specialty: "Macedonian Cuisine", url: "https://www.google.com/maps/search/?api=1&query=Traditional+Restaurant+Macedonia", rating: 4.5 },
    { name: "Fish Restaurant", type: "Seafood", specialty: "Ohrid Trout", url: "https://www.google.com/maps/search/?api=1&query=Fish+Restaurant+Ohrid", rating: 4.4 },
    { name: "Grill House", type: "Grill", specialty: "Kebapi & Skara", url: "https://www.google.com/maps/search/?api=1&query=Grill+House+Skopje", rating: 4.6 },
    { name: "Café Bar", type: "Café", specialty: "Coffee & Pastries", url: "https://www.google.com/maps/search/?api=1&query=Cafe+Bar+Skopje", rating: 4.3 }
  ]
};;
const accommodationsData = {
  skopje: [
    { name: "Hotel Marriott Skopje", type: "Luxury Hotel", price: "$$$", rating: 4.8, url: "https://www.booking.com/searchresults.html?ss=Skopje+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Solun", type: "Boutique Hotel", price: "$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Skopje+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Bushi Resort & Spa", type: "Resort", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Skopje+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hostel Skopje Downtown", type: "Hostel", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Skopje+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  ohrid: [
    { name: "Hotel Inex Olgica", type: "Resort", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Ohrid+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Villa Euro-San", type: "Guest House", price: "$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Ohrid+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Granit", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Ohrid+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Tino", type: "Apartment", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Ohrid+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  bitola: [
    { name: "Hotel Epinal", type: "Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Bitola+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Teatar", type: "Boutique Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Bitola+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Villa Dora", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Bitola+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Biljanini", type: "Apartment", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Bitola+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  prilep: [
    { name: "Hotel Royal", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Prilep+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Zoran", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Prilep+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Prista", type: "Hotel", price: "$$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Prilep+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  tetovo: [
    { name: "Hotel Tetovo", type: "Hotel", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Tetovo+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Sar Planina", type: "Guest House", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Tetovo+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Lura", type: "Guest House", price: "$", rating: 4.1, url: "https://www.booking.com/searchresults.html?ss=Tetovo+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  kratovo: [
    { name: "Hotel Kratovo", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Kratovo+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Kuklica", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Kratovo+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Kratovo", type: "Villa", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Kratovo+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  krusevo: [
    { name: "Hotel Montana", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Krusevo+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Krusevo", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Krusevo+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Ethno House", type: "Traditional House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Krusevo+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  strumica: [
    { name: "Hotel Sago", type: "Hotel", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Strumica+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Strumica", type: "Guest House", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Strumica+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Bori", type: "Hotel", price: "$$", rating: 4.1, url: "https://www.booking.com/searchresults.html?ss=Strumica+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  mavrovo: [
    { name: "Hotel Mavrovo", type: "Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Mavrovo+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Radika", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Mavrovo+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Mavrovo", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Mavrovo+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Ski Apartments", type: "Apartment", price: "$$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Mavrovo+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  pelister: [
    { name: "Hotel Molika", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Pelister+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Mountain Lodge Pelister", type: "Lodge", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Pelister+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Baba", type: "Guest House", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Pelister+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  galicica: [
    { name: "Hotel Granit", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Galicica+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Galicica", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Galicica+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Prespa", type: "Villa", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Galicica+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  matka: [
    { name: "Hotel Matka", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Matka+Canyon+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Canyon Guest House", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Matka+Canyon+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Nature Lodge Matka", type: "Lodge", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Matka+Canyon+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  kokino: [
    { name: "Hotel Kumanovo", type: "Hotel", price: "$$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Kumanovo+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Kokino", type: "Guest House", price: "$", rating: 4.1, url: "https://www.booking.com/searchresults.html?ss=Kumanovo+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Kumanovo", type: "Villa", price: "$", rating: 4.0, url: "https://www.booking.com/searchresults.html?ss=Kumanovo+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  heraclea: [
    { name: "Hotel Epinal", type: "Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Bitola+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Heraclea", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Bitola+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Teatar", type: "Boutique Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Bitola+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  stobi: [
    { name: "Hotel Wine Cellar", type: "Boutique Hotel", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Kavadarci+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Tikvesh", type: "Guest House", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Kavadarci+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Kavadarci Hotel", type: "Hotel", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Kavadarci+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  treskavec: [
    { name: "Hotel Royal Prilep", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Prilep+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Prilep", type: "Guest House", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Prilep+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Zoran", type: "Villa", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Prilep+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "marko-monastery": [
    { name: "Hotel Marriott Skopje", type: "Luxury Hotel", price: "$$$", rating: 4.8, url: "https://www.booking.com/searchresults.html?ss=Skopje+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Markova", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Skopje+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Matka Lodge", type: "Lodge", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Matka+Canyon+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  kuklica: [
    { name: "Hotel Kumanovo", type: "Hotel", price: "$$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Kumanovo+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Stone", type: "Guest House", price: "$", rating: 4.1, url: "https://www.booking.com/searchresults.html?ss=Kumanovo+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Kumanovo", type: "Villa", price: "$", rating: 4.0, url: "https://www.booking.com/searchresults.html?ss=Kumanovo+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  dopcin: [
    { name: "Hotel Kratovo", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Kratovo+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Kriva", type: "Guest House", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Kriva+Palanka+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Kratovo", type: "Villa", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Kratovo+North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  default: [
    { name: "Hotel City Center", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Balkan", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Villa Macedonia", type: "Villa", price: "$$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Budget Hostel", type: "Hostel", price: "$", rating: 4.1, url: "https://www.booking.com/searchresults.html?ss=North+Macedonia&aid=2086573&no_rooms=1&group_adults=2" }
  ]
};

const thingsToDoData = {
  skopje: [
    "Walk across the iconic Stone Bridge connecting Old and New Skopje",
    "Explore the maze-like alleys of the Old Bazaar",
    "Visit the Museum of the Macedonian Struggle",
    "Climb the Kale Fortress walls for panoramic city views",
    "See Mother Teresa's memorial house, her birthplace",
    "Shop at the contemporary art galleries in Debar Maalo"
  ],
  ohrid: [
    "Visit the Church of St. John at Kaneo for the iconic view",
    "Swim in the crystal-clear waters of Lake Ohrid",
    "Explore the Ancient Theatre and Samuel's Fortress",
    "Take a boat tour around the lake to the Monastery of St. Naum",
    "Walk the cobblestone streets of Ohrid's Old Town",
    "Visit the Ohrid pearl workshops for traditional jewelry"
  ],
  bitola: [
    "Stroll the entire length of Shirok Sokak pedestrian street",
    "Explore the ruins of Heraclea Lyncestis and its mosaics",
    "Visit the Bitola Museum and Clock Tower",
    "Enjoy coffee at the many cafes along the main street",
    "Visit the old Turkish bathhouses",
    "Take a day trip to Pelister National Park"
  ],
  prilep: [
    "Hike up to Markovi Kuli fortress ruins",
    "Visit the tobacco museum and learn about local production",
    "Explore the old bazaar with its traditional shops",
    "Taste local beer at the Prilep Brewery",
    "Drive to Treskavec Monastery for stunning views",
    "Walk through the city's historic Ottoman quarter"
  ],
  tetovo: [
    "Admire the intricate frescoes of the Painted Mosque",
    "Visit the Arabati Baba Tekke dervish monastery",
    "Hike in the nearby Šar Mountains",
    "Explore the Tetovo Fortress ruins",
    "Shop at the colorful local market",
    "Try traditional Albanian and Macedonian dishes"
  ],
  kratovo: [
    "Walk across all six of Kratovo's stone bridges",
    "Visit the Clock Tower and medieval towers",
    "Explore the volcanic crater landscape",
    "Shop for handmade pottery and filigree jewelry",
    "Visit the nearby Kuklica Stone Dolls",
    "Photograph the town's unique architecture"
  ],
  krusevo: [
    "Visit the Makedonium monument at Meckin Kamen",
    "Explore the Museum of the Ilinden Uprising",
    "Walk through the traditional stone-built old town",
    "Try the famous krusevski pastrmajlija",
    "Visit the woodcarving workshops",
    "Enjoy winter sports at the ski center"
  ],
  strumica: [
    "Visit the Koleshino Waterfall, one of the tallest in the Balkans",
    "Explore the Strumica Bazaar and old town",
    "Relax at the thermal springs near the city",
    "Hike in the Belasica Mountains",
    "Attend the Strumica Cultural Summer festival",
    "Taste local fruits and wines from the fertile valley"
  ],
  mavrovo: [
    "Photograph the submerged Church of St. Nicholas in the lake",
    "Hike through pristine forests in Mavrovo National Park",
    "Ski or snowboard in winter at Zare Lazareski ski center",
    "Kayak or paddleboard on Lake Mavrovo",
    "Visit the Leunovo Village for traditional architecture",
    "Spot wildlife including bears, wolves, and eagles"
  ],
  pelister: [
    "Hike to the Great Lake (Golemo Ezero) glacial lake",
    "Walk through ancient five-needle pine forests",
    "Climb the peaks of Baba Mountain for panoramic views",
    "Picnic in the alpine meadows in summer",
    "Photograph the unique flora and fauna of the park",
    "Visit the Molika Hotel for traditional mountain cuisine"
  ],
  galicica: [
    "Drive the scenic mountain road between Ohrid and Prespa Lakes",
    "Hike to the summit of Magaro Peak for stunning views",
    "Photograph the panoramic vista of both lakes from above",
    "Bird watch in the rich alpine ecosystem",
    "Picnic in the flower-filled meadows in spring",
    "Visit the traditional villages within the park"
  ],
  matka: [
    "Take a boat ride through the stunning Matka Canyon",
    "Explore Vrelo Cave, one of the deepest underwater caves",
    "Visit St. Andrew's Monastery perched on the cliffs",
    "Rent a kayak and paddle through the gorge",
    "Hike the trails along the Treska River",
    "Go rock climbing on the canyon's limestone cliffs"
  ],
  kokino: [
    "Stand at the ancient megalithic observatory stones",
    "Learn about Bronze Age astronomy from the information boards",
    "Photograph the panoramic views of the countryside",
    "Visit during the summer solstice for the full experience",
    "Combine with a trip to nearby Kuklica Stone Dolls",
    "Explore the Kumanovo region's archaeological heritage"
  ],
  heraclea: [
    "Admire the remarkably preserved Roman floor mosaics",
    "Walk through the ancient Roman theater",
    "Explore the early Christian basilica ruins",
    "Visit the bathhouse and episcopal palace remains",
    "Photograph the artifacts at the on-site museum",
    "Combine with a walking tour of Bitola's main street"
  ],
  stobi: [
    "Explore the grand Roman theater and its seating areas",
    "Walk through the remains of the residential palaces",
    "See the intricate mosaic floors of the early Christian basilicas",
    "Visit the thermal bath complex",
    "Learn about Roman urban planning at the site museum",
    "Combine with wine tasting at nearby Tikvesh wineries"
  ],
  treskavec: [
    "Visit the 14th-century monastery perched on the cliff",
    "Admire the medieval frescoes inside the church",
    "Enjoy spectacular views over the Prilep Valley",
    "Hike the trail from Prilep for a rewarding trek",
    "Experience the peaceful monastic atmosphere",
    "Photograph the dramatic cliffside setting at sunset"
  ],
  "marko-monastery": [
    "Visit the active Orthodox monastery of St. Demetrius",
    "Admire the 14th-century frescoes and architecture",
    "Walk through the peaceful monastery courtyard",
    "Photograph the monastery's scenic rural setting",
    "Combine with a visit to nearby Matka Canyon",
    "Sample local food at the nearby village taverns"
  ],
  kuklica: [
    "Walk among the 120 natural stone pillars",
    "Learn the legend of the petrified wedding guests",
    "Photograph the otherworldly rock formations",
    "Visit the small on-site museum",
    "Combine with a trip to Kokino Observatory",
    "Picnic in the surrounding peaceful countryside"
  ],
  dopcin: [
    "Photograph the impressive Ottoman stone bridge",
    "Explore the historic village of Dupcin",
    "Walk along the Kriva River banks",
    "Visit the nearby Kratovo town",
    "Experience traditional rural Macedonian life",
    "Enjoy the peaceful natural surroundings"
  ],
  default: [
    "Explore the local Old Town and historic sites",
    "Try traditional Macedonian cuisine at a local restaurant",
    "Visit a monastery or church for Byzantine frescoes",
    "Hike in the surrounding mountains or national parks",
    "Sample local wines from Macedonian vineyards",
    "Shop for traditional crafts at a local bazaar"
  
]
};
