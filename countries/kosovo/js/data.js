const touristPlaces = {
  pristina: {
    name: "Pristina",
    coords: [42.6629, 21.1655],
    image: "images/pristina.jpg",
    location: "Central Kosovo",
    description: "The vibrant capital of Kosovo blends Ottoman heritage with youthful energy. Visit the iconic Newborn monument, the imposing National Library, and the historic Sultan Mehmet Fatih Mosque. Skanderbeg Square is the beating heart of the city.",
    type: "Capital City",
    rating: 4.4,
    reviews: 18320,
    bestTime: "April to October",
    tips: "Visit the Ethnological Museum for local history. Try 'qebapa' at a traditional restaurant near the mosque."
  },
  prizren: {
    name: "Prizren",
    coords: [42.2139, 20.7397],
    image: "images/prizren.jpg",
    location: "Southern Kosovo",
    description: "Kosovo's cultural gem, Prizren charms with its Ottoman-era old town, the hilltop Kalaja Fortress, and the beautifully preserved Sinan Pasha Mosque. The Bistrica River winds through its cobblestone streets lined with cafes.",
    type: "Historic Town",
    rating: 4.7,
    reviews: 15940,
    bestTime: "April to October",
    tips: "Climb to Kalaja Fortress for sunset views. Visit during the Dokufest film festival in August."
  },
  peja: {
    name: "Peja",
    coords: [42.6600, 20.2883],
    image: "images/peja.jpg",
    location: "Western Kosovo",
    description: "Nestled at the foot of the Rugova Mountains, Peja is known for its Patriarchate monastery, lively bazaar quarter, and as a gateway to the stunning Rugova Canyon. The city's brewery culture is a local highlight.",
    type: "City & Gateway Town",
    rating: 4.5,
    reviews: 11380,
    bestTime: "May to October",
    tips: "Try Peja beer at the source. Start Rugova Canyon hikes from the city outskirts."
  },
  gjakova: {
    name: "Gjakova",
    coords: [42.3833, 20.4333],
    image: "images/gjakova.jpg",
    location: "Western Kosovo",
    description: "A historic city with Kosovo's longest old bazaar, the Hadum Aga Mosque, and the well-preserved Clock Tower. Gjakova was the heart of the Albanian cultural revival and offers a rich blend of Ottoman and Balkan heritage.",
    type: "Historic Town",
    rating: 4.4,
    reviews: 8760,
    bestTime: "April to October",
    tips: "Stroll the entire length of the old bazaar. Visit the Gjakova Museum for regional artifacts."
  },
  mitrovica: {
    name: "Mitrovica",
    coords: [42.8833, 20.8667],
    image: "images/mitrovica.jpg",
    location: "Northern Kosovo",
    description: "Divided by the Ibar River, Mitrovica is a city of contrasts with a vibrant student energy near the university in the south and the historic Trepca Mines complex in the north. The main bridge is an iconic landmark.",
    type: "City",
    rating: 4.0,
    reviews: 6540,
    bestTime: "May to September",
    tips: "Walk across the main bridge for the full Mitrovica experience. Visit the city museum for mining history."
  },
  ferizaj: {
    name: "Ferizaj",
    coords: [42.3667, 21.1500],
    image: "images/ferizaj.jpg",
    location: "Central Kosovo",
    description: "A bustling city known for its central location and railway heritage. Ferizaj offers a lively city center with modern cafes, the historic Mulla Veseli Mosque, and easy access to the Brezovica ski resort in the Sharr Mountains.",
    type: "City",
    rating: 3.9,
    reviews: 5210,
    bestTime: "May to September",
    tips: "Use Ferizaj as a base for Sharr Mountains day trips. Try local bakeries for fresh 'byrek'."
  },
  gjilan: {
    name: "Gjilan",
    coords: [42.4667, 21.4667],
    image: "images/gjilan.jpg",
    location: "Eastern Kosovo",
    description: "A charming city in eastern Kosovo with a relaxed atmosphere, Gjilan features the historic St. Nicholas Church, a lively market square, and beautiful surrounding hills dotted with vineyards and traditional farmhouses.",
    type: "City",
    rating: 4.1,
    reviews: 4890,
    bestTime: "April to October",
    tips: "Explore the nearby vineyards for local wine tasting. Visit the city park for a relaxing afternoon."
  },
  decani: {
    name: "Visoki Dečani Monastery",
    coords: [42.5472, 20.2928],
    image: "images/decani.jpg",
    location: "Western Kosovo",
    description: "A UNESCO World Heritage site, this 14th-century Serbian Orthodox monastery is renowned for its stunning Byzantine frescoes, considered among the finest in the world. The marble-clad church is a masterpiece of medieval architecture.",
    type: "UNESCO Monastery",
    rating: 4.9,
    reviews: 12450,
    bestTime: "April to October",
    tips: "Dress modestly covering shoulders and knees. Photography inside the church is not permitted."
  },
  patriarchate: {
    name: "Patriarchate of Peć",
    coords: [42.6600, 20.2667],
    image: "images/patriarchate.jpg",
    location: "Western Kosovo",
    description: "This 13th-century Serbian Orthodox monastery features three adjoining churches with remarkable medieval frescoes. It served as the seat of the Serbian Patriarchate in the 14th century and is set against a backdrop of the Rugova Mountains.",
    type: "Religious Site",
    rating: 4.8,
    reviews: 8930,
    bestTime: "April to October",
    tips: "Combine your visit with a trip to nearby Rugova Canyon. Allow at least one hour to see the frescoes."
  },
  gracanica: {
    name: "Gračanica Monastery",
    coords: [42.6000, 21.2000],
    image: "images/gracanica.jpg",
    location: "Central Kosovo",
    description: "Another UNESCO-listed Serbian Orthodox monastery, Gračanica was built in 1321 by King Stefan Milutin. Its exquisite frescoes and serene atmosphere make it one of the most important medieval monuments in the Balkans.",
    type: "UNESCO Monastery",
    rating: 4.8,
    reviews: 7620,
    bestTime: "April to October",
    tips: "Located just 10 km from Pristina, easy for a half-day visit. Attend a service for the full spiritual experience."
  },
  rugova: {
    name: "Rugova Canyon",
    coords: [42.7000, 20.1500],
    image: "images/rugova.jpg",
    location: "Western Kosovo",
    description: "One of the longest and deepest canyons in the Balkans, Rugova Canyon stretches for 25 km near Peja. It offers spectacular hiking, rock climbing, via ferrata routes, and the dramatic White Drin River cutting through limestone cliffs.",
    type: "Natural Wonder",
    rating: 4.7,
    reviews: 10430,
    bestTime: "May to October",
    tips: "Try the via ferrata routes for an adventurous experience. Visit the waterfall at the canyon entrance."
  },
  mirusha: {
    name: "Mirusha Waterfalls",
    coords: [42.5167, 20.5833],
    image: "images/mirusha.jpg",
    location: "Central Kosovo",
    description: "A chain of 16 spectacular waterfalls and turquoise pools along the Mirusha River, carved through limestone canyons. The largest waterfall drops 22 meters into a magical swimming hole surrounded by lush forest.",
    type: "Natural Park",
    rating: 4.6,
    reviews: 9210,
    bestTime: "May to September",
    tips: "Bring swimwear for a dip in the pools. Wear sturdy shoes for the trail along the canyon."
  },
  prevalla: {
    name: "Prevalla",
    coords: [42.1667, 20.9500],
    image: "images/prevalla.jpg",
    location: "Southern Kosovo",
    description: "A picturesque mountain resort and ski destination in the Sharr Mountains, Prevalla offers stunning alpine scenery, excellent hiking trails in summer, and skiing in winter. Its meadows are covered in wildflowers during spring.",
    type: "Mountain Resort",
    rating: 4.5,
    reviews: 7340,
    bestTime: "June to September (hiking), December to March (skiing)",
    tips: "The drive from Prizren offers incredible mountain views. Book accommodation in advance during ski season."
  },
  brezovica: {
    name: "Brezovica Ski Resort",
    coords: [42.2167, 21.0000],
    image: "images/brezovica.jpg",
    location: "Southern Kosovo",
    description: "Kosovo's premier ski resort set in the Sharr Mountains, Brezovica offers over 20 km of ski runs at altitudes between 1,700 and 2,500 meters. Its long season and affordable prices attract winter sports enthusiasts.",
    type: "Ski Resort",
    rating: 4.4,
    reviews: 8230,
    bestTime: "December to April",
    tips: "The resort is budget-friendly compared to European Alps. Bring your own equipment for best selection."
  },
  gadime: {
    name: "Gadime Cave",
    coords: [42.4833, 21.2000],
    image: "images/gadime.jpg",
    location: "Central Kosovo",
    description: "A stunning marble cave system discovered in 1969, Gadime Cave features spectacular stalactites, stalagmites, and underground chambers illuminated with atmospheric lighting. Guided tours explore 1.3 km of passages.",
    type: "Cave",
    rating: 4.5,
    reviews: 6710,
    bestTime: "Year-round",
    tips: "The cave maintains a constant temperature around 12°C so bring a jacket. Photography is allowed with no flash."
  },
  "bear-sanctuary": {
    name: "Bear Sanctuary Prishtina",
    coords: [42.6333, 21.1500],
    image: "images/bear-sanctuary.jpg",
    location: "Central Kosovo",
    description: "A rescue sanctuary for Brown Bears rescued from captivity, this ethical attraction provides spacious forested enclosures for over 20 bears. Visitors can observe the bears in a natural environment while learning about conservation.",
    type: "Wildlife Sanctuary",
    rating: 4.7,
    reviews: 8920,
    bestTime: "April to October",
    tips: "Visit during feeding times for the best bear activity. Maintain quiet and do not feed the animals."
  },
  germia: {
    name: "Germia Park",
    coords: [42.6833, 21.1667],
    image: "images/germia.jpg",
    location: "Central Kosovo (Pristina)",
    description: "A large natural park on the outskirts of Pristina, Germia offers hiking trails, a public swimming pool, picnic areas, and a 16th-century church. It's the perfect green escape from the city, popular with locals on weekends.",
    type: "City Park",
    rating: 4.3,
    reviews: 7450,
    bestTime: "May to September",
    tips: "Visit early morning for a peaceful hike. The swimming pool area gets crowded on summer weekends."
  },
  ulpiana: {
    name: "Ulpiana",
    coords: [42.6000, 21.1667],
    image: "images/ulpiana.jpg",
    location: "Central Kosovo",
    description: "An ancient Roman and Byzantine city founded in the 2nd century AD, Ulpiana was an important urban center of the province of Dardania. Ongoing excavations reveal temples, forums, baths, and city walls worth exploring.",
    type: "Archaeological Site",
    rating: 4.3,
    reviews: 5230,
    bestTime: "April to October",
    tips: "Combine with a visit to nearby Gračanica Monastery. The site is free to enter and has informative panels."
  },
  "white-drin": {
    name: "White Drin Waterfall",
    coords: [42.6833, 20.3000],
    image: "images/white-drin.jpg",
    location: "Western Kosovo",
    description: "The highest waterfall in Kosovo, the White Drin Waterfall plunges 25 meters over a limestone cliff near Peja. It is the source of the White Drin River and offers a scenic picnic spot surrounded by lush forest.",
    type: "Natural Wonder",
    rating: 4.6,
    reviews: 8970,
    bestTime: "April to October",
    tips: "Combine with a trip to Radavc Cave, located nearby. The waterfall is most impressive in spring during snowmelt."
  }
};

const restaurantsData = {
  pristina: [
    { name: "Sofia Restaurant", type: "Traditional", specialty: "Kosovan mixed grill and qebapa", url: "https://www.google.com/maps/search/Sofia+Restaurant+Pristina+Kosovo", rating: 4.6 },
    { name: "Liburnia", type: "Seafood", specialty: "Adriatic fish and seafood platter", url: "https://www.google.com/maps/search/Liburnia+Pristina+Kosovo", rating: 4.5 },
    { name: "Restaurant Tirona", type: "Traditional", specialty: "Albanian and Kosovan national dishes", url: "https://www.google.com/maps/search/Tirona+Pristina+Kosovo", rating: 4.4 },
    { name: "Ceren Jeshil", type: "Café", specialty: "Turkish coffee and baklava", url: "https://www.google.com/maps/search/Ceren+Jeshil+Pristina+Kosovo", rating: 4.3 },
    { name: "Hemingway Bar", type: "Café", specialty: "Cocktails and tapas", url: "https://www.google.com/maps/search/Hemingway+Bar+Pristina+Kosovo", rating: 4.5 },
    { name: "Pishat", type: "Traditional", specialty: "Flija and traditional oven dishes", url: "https://www.google.com/maps/search/Pishat+Pristina+Kosovo", rating: 4.6 }
  ],
  prizren: [
    { name: "Restaurant Marash", type: "Traditional", specialty: "Grilled meats and river trout", url: "https://www.google.com/maps/search/Marash+Prizren+Kosovo", rating: 4.7 },
    { name: "Tiffany Restaurant", type: "Fine Dining", specialty: "International cuisine with local ingredients", url: "https://www.google.com/maps/search/Tiffany+Prizren+Kosovo", rating: 4.6 },
    { name: "Kohka", type: "Café", specialty: "Coffee and homemade pastries", url: "https://www.google.com/maps/search/Kohka+Prizren+Kosovo", rating: 4.4 },
    { name: "Ura", type: "Traditional", specialty: "Traditional river terrace dining", url: "https://www.google.com/maps/search/Ura+Prizren+Kosovo", rating: 4.5 },
    { name: "Zani i Carshisë", type: "Traditional", specialty: "Qebapa and grilled vegetables", url: "https://www.google.com/maps/search/Zani+i+Carshise+Prizren+Kosovo", rating: 4.5 }
  ],
  peja: [
    { name: "Hotel Dukagjini Restaurant", type: "Fine Dining", specialty: "Kosovan gourmet tasting menu", url: "https://www.google.com/maps/search/Hotel+Dukagjini+Peja+Kosovo", rating: 4.6 },
    { name: "Restaurant Piceri", type: "Traditional", specialty: "Homemade pasta and grilled lamb", url: "https://www.google.com/maps/search/Restaurant+Piceri+Peja+Kosovo", rating: 4.5 },
    { name: "Peja Brewery", type: "Café", specialty: "Fresh Peja beer and local snacks", url: "https://www.google.com/maps/search/Peja+Brewery+Peja+Kosovo", rating: 4.4 },
    { name: "Shora", type: "Traditional", specialty: "Mountain lamb and cheese pie", url: "https://www.google.com/maps/search/Shora+Peja+Kosovo", rating: 4.5 }
  ],
  gjakova: [
    { name: "Restaurant Hani i Hoxhes", type: "Traditional", specialty: "Traditional lamb casserole", url: "https://www.google.com/maps/search/Hani+i+Hoxhes+Gjakova+Kosovo", rating: 4.6 },
    { name: "Il Passatore", type: "Italian", specialty: "Wood-fired pizza and pasta", url: "https://www.google.com/maps/search/Il+Passatore+Gjakova+Kosovo", rating: 4.4 },
    { name: "Kulla e Madhe", type: "Traditional", specialty: "Kosovan mixed grill in a historic tower", url: "https://www.google.com/maps/search/Kulla+e+Madhe+Gjakova+Kosovo", rating: 4.5 },
    { name: "Caffe Bar Odyssey", type: "Café", specialty: "Coffee and desserts", url: "https://www.google.com/maps/search/Caffe+Bar+Odyssey+Gjakova+Kosovo", rating: 4.3 }
  ],
  mitrovica: [
    { name: "Restaurant Amanti", type: "Traditional", specialty: "Kosovan grill platter", url: "https://www.google.com/maps/search/Amanti+Mitrovica+Kosovo", rating: 4.4 },
    { name: "Hotel Palace Restaurant", type: "Fine Dining", specialty: "International and Balkan cuisine", url: "https://www.google.com/maps/search/Hotel+Palace+Mitrovica+Kosovo", rating: 4.3 },
    { name: "Caffe Bar Sofra", type: "Café", specialty: "Turkish coffee and pastries", url: "https://www.google.com/maps/search/Sofra+Mitrovica+Kosovo", rating: 4.2 }
  ],
  ferizaj: [
    { name: "Restaurant Lumi", type: "Traditional", specialty: "Grilled meats and fresh salads", url: "https://www.google.com/maps/search/Lumi+Ferizaj+Kosovo", rating: 4.4 },
    { name: "Rilindja", type: "Traditional", specialty: "Balkan mixed grill", url: "https://www.google.com/maps/search/Rilindja+Ferizaj+Kosovo", rating: 4.3 },
    { name: "Caffe Bar Prima", type: "Café", specialty: "Coffee and light bites", url: "https://www.google.com/maps/search/Prima+Ferizaj+Kosovo", rating: 4.2 }
  ],
  gjilan: [
    { name: "Restaurant Bardhi", type: "Traditional", specialty: "Kosovan specialities and wine", url: "https://www.google.com/maps/search/Bardhi+Gjilan+Kosovo", rating: 4.4 },
    { name: "Vila Gjilan", type: "Fine Dining", specialty: "Grilled meats with vineyard views", url: "https://www.google.com/maps/search/Vila+Gjilan+Kosovo", rating: 4.5 },
    { name: "Caffe Bar Endrita", type: "Café", specialty: "Coffee and local pastries", url: "https://www.google.com/maps/search/Endrita+Gjilan+Kosovo", rating: 4.3 }
  ],
  decani: [
    { name: "Konoba Deçan", type: "Traditional", specialty: "Monastic bread and local cheese", url: "https://www.google.com/maps/search/Konoba+Decan+Kosovo", rating: 4.4 },
    { name: "Restaurant Tirana", type: "Traditional", specialty: "Grilled lamb and roasted vegetables", url: "https://www.google.com/maps/search/Restaurant+Tirana+Decan+Kosovo", rating: 4.3 },
    { name: "Bujtina e Shtepise", type: "Traditional", specialty: "Homestyle Kosovan cooking", url: "https://www.google.com/maps/search/Bujtina+e+Shtepise+Decan+Kosovo", rating: 4.2 }
  ],
  patriarchate: [
    { name: "Restaurant Peja", type: "Traditional", specialty: "Mountain lamb and local rakija", url: "https://www.google.com/maps/search/Restaurant+Peja+Patriarchate+Kosovo", rating: 4.3 },
    { name: "Bujtina e Gurit", type: "Traditional", specialty: "Traditional stone house cuisine", url: "https://www.google.com/maps/search/Bujtina+e+Gurit+Peja+Kosovo", rating: 4.5 }
  ],
  gracanica: [
    { name: "Restaurant Graçanica", type: "Traditional", specialty: "Serbian and Kosovan specialities", url: "https://www.google.com/maps/search/Restaurant+Gracanica+Kosovo", rating: 4.3 },
    { name: "Etno Restaurant", type: "Traditional", specialty: "Grilled meats and homemade bread", url: "https://www.google.com/maps/search/Etno+Restaurant+Gracanica+Kosovo", rating: 4.4 }
  ],
  rugova: [
    { name: "Restaurant Rugova", type: "Traditional", specialty: "Mountain trout and lamb stew", url: "https://www.google.com/maps/search/Restaurant+Rugova+Canyon+Kosovo", rating: 4.5 },
    { name: "Bujtina e Rugoves", type: "Traditional", specialty: "Traditional mountain cuisine", url: "https://www.google.com/maps/search/Bujtina+e+Rugoves+Kosovo", rating: 4.4 },
    { name: "Kulla e Zahit", type: "Traditional", specialty: "Grilled lamb in a traditional tower", url: "https://www.google.com/maps/search/Kulla+e+Zahit+Rugova+Kosovo", rating: 4.6 }
  ],
  mirusha: [
    { name: "Restaurant Mirusha", type: "Traditional", specialty: "Grilled meats and salads", url: "https://www.google.com/maps/search/Restaurant+Mirusha+Waterfalls+Kosovo", rating: 4.3 },
    { name: "Fusha e Mirushes", type: "Traditional", specialty: "Traditional countryside cooking", url: "https://www.google.com/maps/search/Fusha+e+Mirushes+Kosovo", rating: 4.2 }
  ],
  prevalla: [
    { name: "Restaurant Prevalla", type: "Traditional", specialty: "Mountain stew and grilled meats", url: "https://www.google.com/maps/search/Restaurant+Prevalla+Kosovo", rating: 4.4 },
    { name: "Hotel Prevalla Restaurant", type: "Traditional", specialty: "Alpine cuisine with Balkan twist", url: "https://www.google.com/maps/search/Hotel+Prevalla+Kosovo", rating: 4.3 }
  ],
  brezovica: [
    { name: "Restaurant Brezovica", type: "Traditional", specialty: "Mountain food and hot drinks", url: "https://www.google.com/maps/search/Restaurant+Brezovica+Kosovo", rating: 4.2 },
    { name: "Ski Center Cafeteria", type: "Café", specialty: "Coffee and quick ski bites", url: "https://www.google.com/maps/search/Ski+Center+Brezovica+Kosovo", rating: 4.1 }
  ],
  gadime: [
    { name: "Restaurant Gadime", type: "Traditional", specialty: "Grilled lamb and local wine", url: "https://www.google.com/maps/search/Restaurant+Gadime+Cave+Kosovo", rating: 4.3 },
    { name: "Bujtina Gadime", type: "Traditional", specialty: "Homestyle Kosovan cuisine", url: "https://www.google.com/maps/search/Bujtina+Gadime+Kosovo", rating: 4.2 }
  ],
  "bear-sanctuary": [
    { name: "Restaurant Mramor", type: "Traditional", specialty: "Grilled meats and garden salads", url: "https://www.google.com/maps/search/Mramor+Bear+Sanctuary+Kosovo", rating: 4.3 },
    { name: "Caffe Sanctuary", type: "Café", specialty: "Coffee and light snacks", url: "https://www.google.com/maps/search/Cafe+Bear+Sanctuary+Pristina+Kosovo", rating: 4.1 }
  ],
  germia: [
    { name: "Restaurant Germia", type: "Traditional", specialty: "Grilled meats and fresh salads", url: "https://www.google.com/maps/search/Restaurant+Germia+Park+Kosovo", rating: 4.3 },
    { name: "Park Restaurant", type: "Traditional", specialty: "Pizzas and Balkan dishes", url: "https://www.google.com/maps/search/Park+Restaurant+Germia+Kosovo", rating: 4.2 }
  ],
  ulpiana: [
    { name: "Restaurant Ulpiana", type: "Traditional", specialty: "Kosovan grill and salads", url: "https://www.google.com/maps/search/Restaurant+Ulpiana+Kosovo", rating: 4.2 }
  ],
  "white-drin": [
    { name: "Restaurant Uji i Bardhë", type: "Traditional", specialty: "Grilled trout and mountain lamb", url: "https://www.google.com/maps/search/Uji+i+Bardhe+Waterfall+Kosovo", rating: 4.4 },
    { name: "Bujtina e Drinit", type: "Traditional", specialty: "Traditional wood-fire cooking", url: "https://www.google.com/maps/search/Bujtina+e+Drinit+White+Drin+Kosovo", rating: 4.5 }
  ],
  default: [
    { name: "Restaurant Traditional", type: "Traditional", specialty: "Kosovan national dishes", url: "https://www.google.com/maps/search/Kosovan+restaurant+Kosovo", rating: 4.4 },
    { name: "Konoba Kosova", type: "Traditional", specialty: "Qebapa and flija", url: "https://www.google.com/maps/search/Traditional+restaurant+Kosovo", rating: 4.5 },
    { name: "Caffe Bar Modern", type: "Café", specialty: "Coffee and local pastries", url: "https://www.google.com/maps/search/Cafe+Kosovo", rating: 4.3 }
  ]
,
  "default": [
    { name: "Traditional Restaurant", type: "Traditional", specialty: "Kosovan Cuisine", url: "https://www.google.com/maps/search/?api=1&query=Traditional+Restaurant+Kosovo", rating: 4.5 },
    { name: "Cake Shop", type: "Café", specialty: "Baklava & Coffee", url: "https://www.google.com/maps/search/?api=1&query=Cake+Shop+Prishtina", rating: 4.4 },
    { name: "Grill House", type: "Grill", specialty: "Qebapa & Pljeskavica", url: "https://www.google.com/maps/search/?api=1&query=Grill+House+Kosovo", rating: 4.6 },
    { name: "Caffe Bar", type: "Café", specialty: "Espresso & Pastries", url: "https://www.google.com/maps/search/?api=1&query=Caffe+Bar+Kosovo", rating: 4.3 }
  ]
};;
const accommodationsData = {
  pristina: [
    { name: "Hotel Emerald", type: "Luxury Hotel", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Pristina+Kosovo&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Swiss Diamond Hotel Prishtina", type: "Luxury Hotel", price: "$$$", rating: 4.8, url: "https://www.booking.com/searchresults.html?ss=Pristina+Kosovo&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Garden", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Pristina+Kosovo&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hostel Prishtina", type: "Hostel", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Pristina+Kosovo&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  prizren: [
    { name: "Hotel Prizreni", type: "Boutique Hotel", price: "$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Prizren+Kosovo&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Theranda Hotel", type: "Boutique Hotel", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Prizren+Kosovo&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Arben", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Prizren+Kosovo&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartment Panorama", type: "Apartment", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Prizren+Kosovo&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  peja: [
    { name: "Hotel Dukagjini", type: "Hotel", price: "$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Peja+Kosovo&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Real", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Peja+Kosovo&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Rugova", type: "Guest House", price: "$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Rugova+Kosovo&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  gjakova: [
    { name: "Hotel Gjakova", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Gjakova+Kosovo&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Luli", type: "Hotel", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Gjakova+Kosovo&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Çarshia", type: "Guest House", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Gjakova+Kosovo&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  mitrovica: [
    { name: "Hotel Palace", type: "Hotel", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Mitrovica+Kosovo&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Adria", type: "Hotel", price: "$$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Mitrovica+Kosovo&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Ibar", type: "Guest House", price: "$", rating: 4.1, url: "https://www.booking.com/searchresults.html?ss=Mitrovica+Kosovo&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  ferizaj: [
    { name: "Hotel Ferizaj", type: "Hotel", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Ferizaj+Kosovo&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Centrum", type: "Hotel", price: "$$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Ferizaj+Kosovo&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Brezovica", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Brezovica+Kosovo&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  gjilan: [
    { name: "Hotel Gjilan", type: "Hotel", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Gjilan+Kosovo&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Gjilan", type: "Guest House", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Gjilan+Kosovo&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartment Drita", type: "Apartment", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Gjilan+Kosovo&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  decani: [
    { name: "Hotel Deçan", type: "Hotel", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Decan+Kosovo&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Visoki", type: "Guest House", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Decan+Kosovo&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  rugova: [
    { name: "Bujtina e Rugoves", type: "Guest House", price: "$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Rugova+Kosovo&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Canyon", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Rugova+Kosovo&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  prevalla: [
    { name: "Hotel Prevalla", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Prevalla+Kosovo&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Mountain Lodge Prevalla", type: "Lodge", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Prevalla+Kosovo&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  brezovica: [
    { name: "Hotel Brezovica", type: "Ski Hotel", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Brezovica+Kosovo&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Ski Center Apartments", type: "Apartment", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Brezovica+Kosovo&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "bear-sanctuary": [
    { name: "Hotel Mramor", type: "Hotel", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Pristina+Kosovo&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  default: [
    { name: "Hotel Standard", type: "Hotel", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Kosovo&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Kosovo", type: "Guest House", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Kosovo&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartment Balkan", type: "Apartment", price: "$", rating: 4.1, url: "https://www.booking.com/searchresults.html?ss=Kosovo&aid=2086573&no_rooms=1&group_adults=2" }
  ]
};

const thingsToDoData = {
  pristina: [
    "Visit the iconic Newborn monument and take a photo",
    "Explore the unique architecture of the National Library",
    "Walk through the old Ottoman quarter and Sultan Mehmet Fatih Mosque",
    "Visit the Ethnological Museum in the Emin Gjiku complex",
    "Stroll around Germia Park for nature near the city",
    "Experience the vibrant cafe culture at Skanderbeg Square"
  ],
  prizren: [
    "Climb to Kalaja Fortress for panoramic views over Prizren",
    "Visit the exquisite Sinan Pasha Mosque",
    "Wander the cobblestone streets of the Old Bazaar",
    "Cross the historic stone bridge over the Bistrica River",
    "Attend the Dokufest documentary film festival in August",
    "Explore the Albanian League of Prizren museum"
  ],
  peja: [
    "Visit the Patriarchate of Peć monastery complex",
    "Explore the Peja Old Bazaar with its craft shops",
    "Hike into Rugova Canyon from the city edge",
    "Tour the Peja Brewery and taste local beer",
    "Visit the Bajrakli Mosque and Clock Tower",
    "Take a day trip up to the White Drin Waterfall"
  ],
  gjakova: [
    "Walk the full length of the Old Bazaar, the longest in Kosovo",
    "Visit the Hadum Aga Mosque and its historic complex",
    "Climb the Clock Tower for city views",
    "Explore the Gjakova Museum of local history",
    "Visit the Martyrs' Cemetery memorial",
    "Try traditional qebapa at the bazaar restaurants"
  ],
  mitrovica: [
    "Walk across the iconic main bridge over the Ibar River",
    "Visit the Trepca Mines complex for industrial heritage",
    "Explore the Mitrovica City Museum",
    "Stroll through the southern university quarter",
    "Visit the Sultan Mehmet Fatih Mosque",
    "Climb to the Minatori monument for city views"
  ],
  ferizaj: [
    "Explore the city center and Mulla Veseli Mosque",
    "Use Ferizaj as a base for Sharr Mountains day trips",
    "Visit the local market for fresh produce",
    "Walk through the city park and relax",
    "Head to Brezovica ski resort for winter sports"
  ],
  gjilan: [
    "Visit the St. Nicholas Church",
    "Explore the local vineyards for wine tasting",
    "Walk through the city market square",
    "Relax in the city park",
    "Hike in the surrounding hills",
    "Try traditional Kosovan cuisine at local restaurants"
  ],
  decani: [
    "Tour the UNESCO-listed Visoki Dečani Monastery",
    "Admire the world-class Byzantine frescoes inside the church",
    "Photograph the marble-clad exterior and setting",
    "Visit the monastery garden and olive grove",
    "Light a candle at the monastery church"
  ],
  patriarchate: [
    "Tour the Patriarchate of Peć monastery complex",
    "Admire the 13th-century Byzantine frescoes",
    "Visit all three adjoining churches",
    "Photograph the monastery against the Rugova Mountain backdrop",
    "Combine with a visit to nearby Rugova Canyon"
  ],
  gracanica: [
    "Visit the UNESCO-listed Gračanica Monastery",
    "Admire the exquisite 14th-century frescoes",
    "Attend a service for the spiritual atmosphere",
    "Photograph the church's distinctive architectural style",
    "Combine with a visit to the Ulpiana archaeological site"
  ],
  rugova: [
    "Hike along the 25 km Rugova Canyon trail",
    "Try the via ferrata climbing routes",
    "Photograph the dramatic limestone cliffs",
    "Visit the White Drin River source at the canyon",
    "Rock climb on the canyon walls",
    "Enjoy traditional food at a mountain guesthouse"
  ],
  mirusha: [
    "Hike the trail along the 16 waterfalls chain",
    "Swim in the turquoise natural pools",
    "Photograph the 22-meter main waterfall",
    "Picnic in the forested canyon setting",
    "Explore the limestone rock formations"
  ],
  prevalla: [
    "Hike the mountain trails in the Sharr Mountains",
    "Ski or snowboard in winter season",
    "Photograph the alpine meadows in spring wildflower bloom",
    "Relax at the mountain resort with panoramic views",
    "Take scenic drives from Prizren to Prevalla"
  ],
  brezovica: [
    "Ski on over 20 km of runs in the Sharr Mountains",
    "Snowboard at affordable European prices",
    "Hike the mountain trails in summer",
    "Photograph the alpine scenery from 2,500 meters",
    "Enjoy mountain food at the ski lodge"
  ],
  gadime: [
    "Tour the 1.3 km marble cave passageways",
    "Photograph the stunning stalactite and stalagmite formations",
    "Learn about the cave's discovery in 1969",
    "Enjoy the constant 12°C temperature underground",
    "Visit the nearby village for local hospitality"
  ],
  "bear-sanctuary": [
    "Observe rescued brown bears in forested enclosures",
    "Learn about bear conservation in Kosovo",
    "Photograph the bears from viewing platforms",
    "Visit the educational center for wildlife information",
    "Support ethical wildlife tourism"
  ],
  germia: [
    "Hike the forest trails of Germia Park",
    "Swim in the public outdoor swimming pool",
    "Visit the 16th-century church within the park",
    "Picnic in the designated green areas",
    "Escape the city bustle in nature just minutes from Pristina"
  ],
  ulpiana: [
    "Explore the ancient Roman and Byzantine ruins",
    "View the remains of temples, forums, and city walls",
    "Photograph the excavated archaeological site",
    "Learn about the Dardanian province history",
    "Combine with a visit to Gračanica Monastery"
  ],
  "white-drin": [
    "Photograph the 25-meter White Drin Waterfall",
    "Visit the nearby Radavc Cave spring",
    "Picnic in the forested picnic area",
    "Hike the short trails around the waterfall",
    "Visit in spring when water flow is at its peak"
  ],
  default: [
    "Explore a historic Ottoman-era bazaar",
    "Try traditional Kosovan qebapa and flija",
    "Visit a medieval Serbian Orthodox monastery",
    "Hike in the beautiful Balkan mountains"
  
]
};
