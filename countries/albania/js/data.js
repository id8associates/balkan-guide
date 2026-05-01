const touristPlaces = {
  tirana: {
    name: "Tirana",
    coords: [41.3275, 19.8187],
    image: "images/tirana.jpg",
    location: "Central Albania",
    description: "Albania's vibrant capital is a colorful mosaic of Ottoman-era buildings, Italian fascist architecture, and Soviet bunkers — all set against a backdrop of towering mountains. Skanderbeg Square anchors the city center, while the Blloku district buzzes with trendy cafes and nightlife.",
    type: "Capital City",
    rating: 4.5,
    reviews: 31200,
    bestTime: "April to October",
    tips: "Visit the Bunk'Art museums for Cold War history. Climb the Sky Tower for panoramic city views. Explore the Grand Park for a peaceful escape."
  },
  berati: {
    name: "Berat \u2013 City of a Thousand Windows",
    coords: [40.7044, 19.9497],
    image: "images/berati.jpg",
    location: "Central Albania",
    description: "A UNESCO World Heritage site, Berat is one of Albania's oldest continuously inhabited cities. Its distinctive Ottoman houses climb the hillside, their large windows giving the city its nickname. The Berat Castle, still inhabited, offers stunning views of the Osum River valley.",
    type: "UNESCO Old Town",
    rating: 4.8,
    reviews: 18450,
    bestTime: "April to October",
    tips: "Walk across the Old Bridge at sunset for the best photo. Visit the Onufri Museum inside the castle for Byzantine icons. Try local wine from the Berat region."
  },
  gjirokaster: {
    name: "Gjirokaster \u2013 Stone City",
    coords: [40.0758, 20.1389],
    image: "images/gjirokaster.jpg",
    location: "Southern Albania",
    description: "A UNESCO World Heritage site, Gjirokaster is a well-preserved Ottoman-era town built on a steep hillside. Its stone-roofed houses, cobbled streets, and imposing castle make it feel frozen in time. It is also the birthplace of writer Ismail Kadare and communist dictator Enver Hoxha.",
    type: "UNESCO Old Town",
    rating: 4.7,
    reviews: 16230,
    bestTime: "April to October",
    tips: "Visit the Gjirokaster Castle for views and the National Museum of Armaments. Explore the Old Bazaar for handmade crafts. Try qifqi (rice balls with herbs), a local specialty."
  },
  saranda: {
    name: "Saranda",
    coords: [39.8753, 20.0050],
    image: "images/saranda.jpg",
    location: "Albanian Riviera",
    description: "The unofficial capital of the Albanian Riviera, Saranda is a lively coastal town with a beautiful waterfront promenade, excellent seafood restaurants, and easy access to the UNESCO ruins of Butrint. It sits directly across from the Greek island of Corfu.",
    type: "Coastal Town",
    rating: 4.4,
    reviews: 19870,
    bestTime: "May to September",
    tips: "Take the ferry to Corfu for a day trip. Walk the promenade at sunset. Visit the nearby Lekuresi Castle for panoramic views of the bay."
  },
  butrint: {
    name: "Butrint \u2013 UNESCO Ruins",
    coords: [39.7450, 20.0203],
    image: "images/butrint.jpg",
    location: "Southern Albania",
    description: "One of the most important archaeological sites in the Balkans, Butrint was a Greek city, Roman colony, and Byzantine bishopric. Its well-preserved ruins include a theater, baptistery, basilica, and castle, all set within a lush national park teeming with wildlife.",
    type: "UNESCO Archaeological Site",
    rating: 4.8,
    reviews: 14320,
    bestTime: "March to October",
    tips: "Allow at least 2-3 hours to explore the site. Wear comfortable walking shoes. Combine with a visit to the nearby Blue Eye Spring."
  },
  ksamil: {
    name: "Ksamil Islands",
    coords: [39.7689, 19.9956],
    image: "images/ksamil.jpg",
    location: "Albanian Riviera",
    description: "Famous for its turquoise waters and tiny offshore islets, Ksamil is the postcard image of the Albanian Riviera. The small islands are reachable by swimming or kayaking, and the beaches offer some of the clearest water in the Mediterranean.",
    type: "Beach Destination",
    rating: 4.6,
    reviews: 22100,
    bestTime: "June to September",
    tips: "Rent a kayak to explore the small islands. Visit early in the morning to avoid crowds. Bring snorkeling gear to explore underwater life."
  },
  himara: {
    name: "Himara",
    coords: [40.1167, 19.7333],
    image: "images/himara.jpg",
    location: "Albanian Riviera",
    description: "A laid-back coastal town with a string of stunning beaches, Himara offers a more relaxed alternative to Saranda. Its crystal-clear waters, olive groves, and hilltop castle ruins create a quintessential Mediterranean atmosphere.",
    type: "Coastal Town",
    rating: 4.5,
    reviews: 12450,
    bestTime: "May to September",
    tips: "Explore the beaches along the coast from Himara to Dhërmi. Visit the Himara Castle at sunset. Try fresh seafood at a beachfront taverna."
  },
  vlora: {
    name: "Vlora",
    coords: [40.4667, 19.4833],
    image: "images/vlora.jpg",
    location: "Albanian Riviera",
    description: "Where the Adriatic meets the Ionian Sea, Vlora is a historic port city where Albania declared its independence in 1912. The city boasts a long waterfront promenade, nearby beaches, and access to the Karaburun Peninsula marine park.",
    type: "Coastal City",
    rating: 4.3,
    reviews: 16780,
    bestTime: "May to September",
    tips: "Visit the Independence Monument and Museum. Take a boat tour to the Karaburun Peninsula. Walk the Lungomare promenade at sunset."
  },
  durres: {
    name: "Durres",
    coords: [41.3111, 19.4536],
    image: "images/durres.jpg",
    location: "Central Coast",
    description: "Albania's second-largest city and main port, Durres has a 3,000-year history stretching back to Greek and Roman times. Its enormous Byzantine-era amphitheater, one of the largest in the Balkans, is the city's crown jewel.",
    type: "Historic Coastal City",
    rating: 4.2,
    reviews: 13900,
    bestTime: "April to October",
    tips: "Visit the Durres Amphitheatre, the largest in the Balkans. Explore the Venetian Tower and the Archaeological Museum. Relax at the long sandy beach."
  },
  shkodra: {
    name: "Shkodra",
    coords: [42.0667, 19.5000],
    image: "images/shkodra.jpg",
    location: "Northern Albania",
    description: "One of Albania's oldest cities, Shkodra sits at the confluence of the Buna and Drin rivers near Lake Skadar. Its Rozafa Castle offers sweeping views of the surrounding landscape, while the city center buzzes with pedestrian streets and cafe culture.",
    type: "Historic City",
    rating: 4.5,
    reviews: 11830,
    bestTime: "April to October",
    tips: "Climb Rozafa Castle for panoramic views. Visit the Marubi Photography Museum. Explore Lake Skadar by boat from nearby Shiroka."
  },
  kruja: {
    name: "Kruja",
    coords: [41.5167, 19.8000],
    image: "images/kruja.jpg",
    location: "Central Albania",
    description: "The historic town of Kruja is the home of Albania's national hero, Skanderbeg, who defended the country from Ottoman forces in the 15th century. The Skanderbeg Museum inside the castle, the Old Bazaar, and the ethnographic museum are major draws.",
    type: "Historic Town",
    rating: 4.6,
    reviews: 12980,
    bestTime: "April to October",
    tips: "Visit the Skanderbeg Museum for Albanian history. Haggle for souvenirs at the Old Bazaar. Try traditional Albanian dishes at a restaurant with mountain views."
  },
  korca: {
    name: "Korca",
    coords: [40.6167, 20.7833],
    image: "images/korca.jpg",
    location: "Southeastern Albania",
    description: "Known as the 'city of serenades,' Korca is a charming cultural hub with a beautifully restored pedestrian boulevard, colorful buildings, and a thriving arts scene. The city is also famous for its beer, and the Korca Brewery is a local landmark.",
    type: "Cultural City",
    rating: 4.5,
    reviews: 10760,
    bestTime: "April to October",
    tips: "Visit the National Museum of Medieval Art. Stroll the Boulevard Shën Gjergji. Take a day trip to the Dajti Mountain or Voskopoja village."
  },
  theth: {
    name: "Theth",
    coords: [42.4000, 19.7667],
    image: "images/theth.jpg",
    location: "Accursed Mountains",
    description: "A remote mountain village in the heart of the Accursed Mountains, Theth is a paradise for hikers and nature lovers. The valley is home to the iconic Lock-in-Tower, the Theth Church, and the stunning Grunas Waterfall, all set amid dramatic alpine scenery.",
    type: "Mountain Village",
    rating: 4.8,
    reviews: 8760,
    bestTime: "June to September",
    tips: "Hike the trail from Theth to Valbona for one of Albania's best treks. Visit the Grunas Waterfall. Stay in a traditional guesthouse (kulla) for an authentic experience."
  },
  valbona: {
    name: "Valbona Valley",
    coords: [42.4167, 19.8833],
    image: "images/valbona.jpg",
    location: "Accursed Mountains",
    description: "The Valbona Valley National Park features some of the most spectacular alpine scenery in the Balkans. Towering peaks, crystal-clear rivers, and dense forests create a pristine natural paradise. The valley is a starting point for many epic mountain treks.",
    type: "National Park",
    rating: 4.7,
    reviews: 7890,
    bestTime: "June to September",
    tips: "Hike the Valbona to Theth trail for stunning alpine views. Visit the Valbona River for swimming in crystal-clear water. Stay at a mountain guesthouse for local hospitality."
  },
  llogara: {
    name: "Llogara Pass",
    coords: [40.2000, 19.5833],
    image: "images/llogara.jpg",
    location: "Albanian Riviera",
    description: "The Llogara Pass is a high mountain pass connecting the coast to the interior, offering breathtaking views of the Ionian Sea from over 1,000 meters. It is a popular spot for paragliding, hiking, and enjoying the cool mountain air above the Riviera.",
    type: "Scenic Pass",
    rating: 4.6,
    reviews: 6540,
    bestTime: "May to October",
    tips: "Try paragliding for an unforgettable experience. Stop at the viewpoint restaurant for panoramic photos. Visit the nearby Cesar Pass for hiking."
  },
  "lake-ohrid-albania": {
    name: "Lake Ohrid (Albanian Side)",
    coords: [41.0000, 20.7000],
    image: "images/lake-ohrid-albania.jpg",
    location: "Southeastern Albania",
    description: "The Albanian shore of Lake Ohrid, shared with North Macedonia, offers a quieter, more pristine experience than its busy counterpart. The towns of Pogradec and Lin feature beautiful lakeside promenades, and the Lin Peninsula has remarkable 6th-century mosaic ruins.",
    type: "Natural Lake",
    rating: 4.5,
    reviews: 9120,
    bestTime: "May to September",
    tips: "Visit the Lin mosaics for early Christian art. Enjoy fresh lake trout at a lakeside restaurant. Take a boat ride along the Albanian shoreline."
  },
  apollonia: {
    name: "Apollonia Ruins",
    coords: [40.7167, 19.4667],
    image: "images/apollonia.jpg",
    location: "Central Albania",
    description: "Founded in the 6th century BC, Apollonia was one of the most important cities of the ancient Greek and Roman world. Its ruins include a well-preserved bouleuterion, a library, and a triumphal arch, all set amid rolling green hills near Fier.",
    type: "Archaeological Site",
    rating: 4.6,
    reviews: 7890,
    bestTime: "March to October",
    tips: "Combine with a visit to the Ardenica Monastery nearby. Allow 1-2 hours to explore the site. Visit the onsite archaeological museum for artifacts."
  },
  "blue-eye": {
    name: "Blue Eye Spring",
    coords: [39.9000, 20.1833],
    image: "images/blue-eye.jpg",
    location: "Southern Albania",
    description: "A natural spring of mesmerizing azure-blue water, the Blue Eye (Syri i Kalter) is a popular natural attraction near Saranda. The water is so clear and deep that the spring appears as a blue eye from above, with water temperatures remaining a constant 10\u00b0C year-round.",
    type: "Natural Spring",
    rating: 4.7,
    reviews: 15230,
    bestTime: "May to September",
    tips: "Go early in the morning to avoid crowds. Bring a jacket as the area is shaded and cool. The water is too cold for swimming but beautiful for photos."
  },
  borsh: {
    name: "Borsh Beach",
    coords: [40.0500, 19.8667],
    image: "images/borsh.jpg",
    location: "Albanian Riviera",
    description: "One of the longest beaches on the Albanian Riviera, Borsh stretches for over 7 kilometers of pebbles and crystal-clear waters. Surrounded by olive groves and with a hilltop castle overseeing the bay, it offers a more peaceful alternative to the busier beaches further south.",
    type: "Beach",
    rating: 4.5,
    reviews: 9870,
    bestTime: "June to September",
    tips: "Drive the coastal road for stunning views of the bay. Visit the Borsh Castle on the hill. Enjoy fresh seafood at one of the beachfront tavernas."
  }
};

const restaurantsData = {
  tirana: [
    { name: "Oda", type: "Traditional", specialty: "Albanian home-style cooking and tave kosi", url: "https://www.google.com/maps/search/Oda+Tirana+Albania", rating: 4.6 },
    { name: "Mullixhiu", type: "Fine Dining", specialty: "Modern Albanian farm-to-table cuisine", url: "https://www.google.com/maps/search/Mullixhiu+Tirana+Albania", rating: 4.8 },
    { name: "Padam Boutique", type: "Fusion", specialty: "Asian-Mediterranean fusion with rooftop views", url: "https://www.google.com/maps/search/Padam+Boutique+Tirana+Albania", rating: 4.7 },
    { name: "Sofra e Arteve", type: "Traditional", specialty: "Albanian meze and grilled meats", url: "https://www.google.com/maps/search/Sofra+e+Arteve+Tirana+Albania", rating: 4.5 },
    { name: "Ethno House", type: "Traditional", specialty: "Slow-cooked Albanian stews and pies", url: "https://www.google.com/maps/search/Ethno+House+Tirana+Albania", rating: 4.6 },
    { name: "Piceri Era", type: "Caf\u00e9", specialty: "Italian-Albanian fusion pizza and pasta", url: "https://www.google.com/maps/search/Piceri+Era+Tirana+Albania", rating: 4.4 }
  ],
  berati: [
    { name: "Homemade Food Lili", type: "Traditional", specialty: "Home-cooked Berati specialties", url: "https://www.google.com/maps/search/Homemade+Food+Lili+Berat+Albania", rating: 4.7 },
    { name: "Onufri Restaurant", type: "Traditional", specialty: "Albanian grill and local wines", url: "https://www.google.com/maps/search/Onufri+Restaurant+Berat+Albania", rating: 4.6 },
    { name: "Antigoni", type: "Traditional", specialty: "Berati lamb and yogurt dishes", url: "https://www.google.com/maps/search/Antigoni+Berat+Albania", rating: 4.5 },
    { name: "Winery Berat", type: "Wine Bar", specialty: "Local wine tasting with cheese platters", url: "https://www.google.com/maps/search/Winery+Berat+Albania", rating: 4.4 },
    { name: "Castle View Restaurant", type: "Traditional", specialty: "Grilled meats with castle panorama", url: "https://www.google.com/maps/search/Castle+View+Berat+Albania", rating: 4.5 }
  ],
  gjirokaster: [
    { name: "Gjirokaster Castle Restaurant", type: "Traditional", specialty: "Qifqi rice balls and lamb dishes", url: "https://www.google.com/maps/search/Gjirokaster+Castle+Restaurant+Albania", rating: 4.5 },
    { name: "Kujtimi", type: "Traditional", specialty: "Authentic Gjirokaster home cooking", url: "https://www.google.com/maps/search/Kujtimi+Gjirokaster+Albania", rating: 4.6 },
    { name: "Stone City Restaurant", type: "Traditional", specialty: "Grilled meats and local wine", url: "https://www.google.com/maps/search/Stone+City+Restaurant+Gjirokaster+Albania", rating: 4.4 },
    { name: "Restaurant Tradita", type: "Traditional", specialty: "Ottoman-style Albanian cuisine", url: "https://www.google.com/maps/search/Restaurant+Tradita+Gjirokaster+Albania", rating: 4.7 },
    { name: "Bazaar Bar", type: "Caf\u00e9", specialty: "Coffee and baklava in the old bazaar", url: "https://www.google.com/maps/search/Bazaar+Bar+Gjirokaster+Albania", rating: 4.3 }
  ],
  saranda: [
    { name: "Haxhi", type: "Seafood", specialty: "Fresh grilled fish and octopus", url: "https://www.google.com/maps/search/Haxhi+Saranda+Albania", rating: 4.6 },
    { name: "La Montagna", type: "Italian", specialty: "Wood-fired pizza and pasta", url: "https://www.google.com/maps/search/La+Montagna+Saranda+Albania", rating: 4.5 },
    { name: "Shemo", type: "Seafood", specialty: "Seafood platter with sea views", url: "https://www.google.com/maps/search/Shemo+Saranda+Albania", rating: 4.7 },
    { name: "Lekuresi Castle Restaurant", type: "Traditional", specialty: "Grilled lamb with panoramic bay views", url: "https://www.google.com/maps/search/Lekuresi+Castle+Saranda+Albania", rating: 4.6 },
    { name: "Mare Nostrum", type: "Fine Dining", specialty: "Mediterranean seafood and cocktails", url: "https://www.google.com/maps/search/Mare+Nostrum+Saranda+Albania", rating: 4.5 }
  ],
  butrint: [
    { name: "Restaurant Butrinti", type: "Traditional", specialty: "Fresh lake fish and grilled meats", url: "https://www.google.com/maps/search/Restaurant+Butrinti+Butrint+Albania", rating: 4.4 },
    { name: "Kisha e Butrintit", type: "Traditional", specialty: "Albanian meze near the ruins", url: "https://www.google.com/maps/search/Kisha+e+Butrintit+Butrint+Albania", rating: 4.3 },
    { name: "Vila Butrint", type: "Seafood", specialty: "Seafood pasta and fresh salads", url: "https://www.google.com/maps/search/Vila+Butrint+Butrint+Albania", rating: 4.5 },
    { name: "Caf\u00e9 Butrint", type: "Caf\u00e9", specialty: "Coffee and light snacks near the entrance", url: "https://www.google.com/maps/search/Cafe+Butrint+Albania", rating: 4.2 }
  ],
  ksamil: [
    { name: "Taverna Ksamil", type: "Seafood", specialty: "Grilled octopus and mussels", url: "https://www.google.com/maps/search/Taverna+Ksamil+Albania", rating: 4.6 },
    { name: "Absinthe", type: "Seafood", specialty: "Fresh fish with Mediterranean herbs", url: "https://www.google.com/maps/search/Absinthe+Ksamil+Albania", rating: 4.5 },
    { name: "Beach Bar Restaurant", type: "Caf\u00e9", specialty: "Smoothies, salads, and light seafood", url: "https://www.google.com/maps/search/Beach+Bar+Ksamil+Albania", rating: 4.3 },
    { name: "Vila Ksamil", type: "Traditional", specialty: "Grilled seafood platter", url: "https://www.google.com/maps/search/Vila+Ksamil+Albania", rating: 4.4 },
    { name: "Lulishte", type: "Traditional", specialty: "Homemade Albanian pies and salads", url: "https://www.google.com/maps/search/Lulishte+Ksamil+Albania", rating: 4.5 }
  ],
  himara: [
    { name: "Taverna Lefteri", type: "Seafood", specialty: "Grilled fish and seafood risotto", url: "https://www.google.com/maps/search/Taverna+Lefteri+Himara+Albania", rating: 4.7 },
    { name: "Pearl of Himara", type: "Seafood", specialty: "Octopus and shrimp buzara", url: "https://www.google.com/maps/search/Pearl+of+Himara+Albania", rating: 4.6 },
    { name: "Restaurant Limani", type: "Traditional", specialty: "Seafood pasta and grilled squid", url: "https://www.google.com/maps/search/Restaurant+Limani+Himara+Albania", rating: 4.5 },
    { name: "Casa de Mare", type: "Caf\u00e9", specialty: "Coffee and homemade lemon cake", url: "https://www.google.com/maps/search/Casa+de+Mare+Himara+Albania", rating: 4.3 },
    { name: "Gonia Restaurant", type: "Traditional", specialty: "Greek-Albanian fusion dishes", url: "https://www.google.com/maps/search/Gonia+Himara+Albania", rating: 4.4 }
  ],
  vlora: [
    { name: "Restaurant Marina", type: "Seafood", specialty: "Seafood platter and fresh oysters", url: "https://www.google.com/maps/search/Restaurant+Marina+Vlora+Albania", rating: 4.6 },
    { name: "Pisha & Pisha", type: "Traditional", specialty: "Grilled lamb and local salads", url: "https://www.google.com/maps/search/Pisha+Pisha+Vlora+Albania", rating: 4.5 },
    { name: "Julvin Blloku", type: "Seafood", specialty: "Black risotto and grilled fish", url: "https://www.google.com/maps/search/Julvin+Blloku+Vlora+Albania", rating: 4.4 },
    { name: "Studio Lule", type: "Caf\u00e9", specialty: "Specialty coffee and pastries", url: "https://www.google.com/maps/search/Studio+Lule+Vlora+Albania", rating: 4.3 },
    { name: "Ujvara", type: "Fine Dining", specialty: "Fine dining with sea views", url: "https://www.google.com/maps/search/Ujvara+Vlora+Albania", rating: 4.7 }
  ],
  durres: [
    { name: "Restaurant Palma", type: "Seafood", specialty: "Fresh Adriatic fish and grilled squid", url: "https://www.google.com/maps/search/Restaurant+Palma+Durres+Albania", rating: 4.5 },
    { name: "Mezuraj Museum Restaurant", type: "Traditional", specialty: "Albanian meze with art ambiance", url: "https://www.google.com/maps/search/Mezuraj+Museum+Durres+Albania", rating: 4.6 },
    { name: "Te Joni", type: "Seafood", specialty: "Seafood buzara and mussels", url: "https://www.google.com/maps/search/Te+Joni+Durres+Albania", rating: 4.4 },
    { name: "Gusto", type: "Caf\u00e9", specialty: "Italian-style coffee and gelato", url: "https://www.google.com/maps/search/Gusto+Durres+Albania", rating: 4.3 },
    { name: "Villa Verde", type: "Fine Dining", specialty: "Mediterranean fine dining", url: "https://www.google.com/maps/search/Villa+Verde+Durres+Albania", rating: 4.5 }
  ],
  shkodra: [
    { name: "Restaurant Tradita", type: "Traditional", specialty: "Northern Albanian slow-cooked lamb", url: "https://www.google.com/maps/search/Restaurant+Tradita+Shkodra+Albania", rating: 4.7 },
    { name: "San Francisco", type: "Traditional", specialty: "Grilled meats and fresh salads", url: "https://www.google.com/maps/search/San+Francisco+Shkodra+Albania", rating: 4.5 },
    { name: "Pasticeri Ëngjëlli", type: "Caf\u00e9", specialty: "Baklava and traditional sweets", url: "https://www.google.com/maps/search/Pasticeri+Engjelli+Shkodra+Albania", rating: 4.4 },
    { name: "Bazaar Restaurant", type: "Traditional", specialty: "Shkodra lake fish and local wine", url: "https://www.google.com/maps/search/Bazaar+Restaurant+Shkodra+Albania", rating: 4.5 },
    { name: "Aroma", type: "Caf\u00e9", specialty: "Specialty coffee and brunch", url: "https://www.google.com/maps/search/Aroma+Shkodra+Albania", rating: 4.3 }
  ],
  kruja: [
    { name: "Restaurant Kalaja", type: "Traditional", specialty: "Grilled lamb and mountain salads", url: "https://www.google.com/maps/search/Restaurant+Kalaja+Kruja+Albania", rating: 4.6 },
    { name: "Bazaar Restaurant", type: "Traditional", specialty: "Albanian pies and grilled meats", url: "https://www.google.com/maps/search/Bazaar+Restaurant+Kruja+Albania", rating: 4.5 },
    { name: "Saray Restaurant", type: "Traditional", specialty: "Ottoman-style Albanian cuisine", url: "https://www.google.com/maps/search/Saray+Restaurant+Kruja+Albania", rating: 4.4 },
    { name: "Skanderbeg View", type: "Caf\u00e9", specialty: "Coffee with castle views", url: "https://www.google.com/maps/search/Skanderbeg+View+Kruja+Albania", rating: 4.3 },
    { name: "Te Stela", type: "Traditional", specialty: "Home-cooked Albanian meals", url: "https://www.google.com/maps/search/Te+Stela+Kruja+Albania", rating: 4.5 }
  ],
  korca: [
    { name: "Aromun Restaurant", type: "Traditional", specialty: "Aromanian-style grilled meats", url: "https://www.google.com/maps/search/Aromun+Restaurant+Korca+Albania", rating: 4.6 },
    { name: "Taverna Peshku", type: "Seafood", specialty: "Fresh lake trout and grilled fish", url: "https://www.google.com/maps/search/Taverna+Peshku+Korca+Albania", rating: 4.5 },
    { name: "Life Gallery", type: "Fine Dining", specialty: "Modern Albanian cuisine", url: "https://www.google.com/maps/search/Life+Gallery+Korca+Albania", rating: 4.7 },
    { name: "Korca Beer Garden", type: "Caf\u00e9", specialty: "Korca beer and local snacks", url: "https://www.google.com/maps/search/Korca+Beer+Garden+Albania", rating: 4.4 },
    { name: "Boulangerie Artisan", type: "Caf\u00e9", specialty: "French-style pastries and coffee", url: "https://www.google.com/maps/search/Boulangerie+Artisan+Korca+Albania", rating: 4.3 }
  ],
  theth: [
    { name: "Guesthouse Theth Restaurant", type: "Traditional", specialty: "Mountain lamb stew and flija pie", url: "https://www.google.com/maps/search/Guesthouse+Theth+Restaurant+Albania", rating: 4.5 },
    { name: "Restaurant Marashi", type: "Traditional", specialty: "Organic mountain vegetables and lamb", url: "https://www.google.com/maps/search/Restaurant+Marashi+Theth+Albania", rating: 4.6 },
    { name: "Kulla e Ngjuar", type: "Traditional", specialty: "Traditional mountain dishes and rakija", url: "https://www.google.com/maps/search/Kulla+e+Ngjuar+Theth+Albania", rating: 4.4 },
    { name: "Bjeshka Restaurant", type: "Traditional", specialty: "Grilled trout and mountain cheese", url: "https://www.google.com/maps/search/Bjeshka+Theth+Albania", rating: 4.3 },
    { name: "Buen Retiro", type: "Caf\u00e9", specialty: "Coffee and homemade cakes", url: "https://www.google.com/maps/search/Buen+Retiro+Theth+Albania", rating: 4.2 }
  ],
  valbona: [
    { name: "Guesthouse Valbona Restaurant", type: "Traditional", specialty: "Mountain lamb and fresh dairy", url: "https://www.google.com/maps/search/Guesthouse+Valbona+Restaurant+Albania", rating: 4.5 },
    { name: "Mrizi i Zanave", type: "Traditional", specialty: "Slow food Albanian mountain cuisine", url: "https://www.google.com/maps/search/Mrizi+i+Zanave+Valbona+Albania", rating: 4.6 },
    { name: "Restaurant Alpine", type: "Traditional", specialty: "Grilled meats and local cheeses", url: "https://www.google.com/maps/search/Restaurant+Alpine+Valbona+Albania", rating: 4.4 },
    { name: "Kodra e Diellit", type: "Caf\u00e9", specialty: "Hot drinks and mountain snacks", url: "https://www.google.com/maps/search/Kodra+e+Diellit+Valbona+Albania", rating: 4.3 },
    { name: "Valbona Grill", type: "Traditional", specialty: "Fresh trout and grilled vegetables", url: "https://www.google.com/maps/search/Valbona+Grill+Albania", rating: 4.4 }
  ],
  llogara: [
    { name: "Llogara Pass Restaurant", type: "Traditional", specialty: "Mountain lamb and fresh trout", url: "https://www.google.com/maps/search/Llogara+Pass+Restaurant+Albania", rating: 4.5 },
    { name: "Restaurant Tundas", type: "Traditional", specialty: "Albanian grill with sea views", url: "https://www.google.com/maps/search/Restaurant+Tundas+Llogara+Albania", rating: 4.4 },
    { name: "Paragliding Caf\u00e9", type: "Caf\u00e9", specialty: "Coffee and light bites with panoramic views", url: "https://www.google.com/maps/search/Paragliding+Cafe+Llogara+Albania", rating: 4.3 },
    { name: "Hotel Llogara Restaurant", type: "Traditional", specialty: "Grilled meats and mountain salads", url: "https://www.google.com/maps/search/Hotel+Llogara+Restaurant+Albania", rating: 4.4 },
    { name: "Sopoti Restaurant", type: "Traditional", specialty: "Wild mushroom dishes and lamb", url: "https://www.google.com/maps/search/Sopoti+Llogara+Albania", rating: 4.5 }
  ],
  "lake-ohrid-albania": [
    { name: "Restaurant Enkelana", type: "Seafood", specialty: "Lake Ohrid trout and fresh salads", url: "https://www.google.com/maps/search/Restaurant+Enkelana+Pogradec+Albania", rating: 4.5 },
    { name: "Taverna Iliria", type: "Traditional", specialty: "Grilled fish and local wine", url: "https://www.google.com/maps/search/Taverna+Iliria+Pogradec+Albania", rating: 4.4 },
    { name: "Restaurant Limani", type: "Seafood", specialty: "Lake fish buzara and seafood pasta", url: "https://www.google.com/maps/search/Restaurant+Limani+Pogradec+Albania", rating: 4.6 },
    { name: "Korabi Bar Restorant", type: "Caf\u00e9", specialty: "Coffee and lake views", url: "https://www.google.com/maps/search/Korabi+Pogradec+Albania", rating: 4.3 },
    { name: "Vila Sazani", type: "Traditional", specialty: "Freshwater fish and grilled vegetables", url: "https://www.google.com/maps/search/Vila+Sazani+Pogradec+Albania", rating: 4.4 }
  ],
  apollonia: [
    { name: "Restaurant Apollonia", type: "Traditional", specialty: "Grilled meats and local salads", url: "https://www.google.com/maps/search/Restaurant+Apollonia+Fier+Albania", rating: 4.4 },
    { name: "Ardenica Monastery Restaurant", type: "Traditional", specialty: "Monastic bread and lamb dishes", url: "https://www.google.com/maps/search/Ardenica+Monastery+Albania", rating: 4.5 },
    { name: "Kodra E Restorant", type: "Traditional", specialty: "Traditional Albanian farm food", url: "https://www.google.com/maps/search/Kodra+Fier+Albania", rating: 4.3 },
    { name: "Bar Restorant Apollonia", type: "Caf\u00e9", specialty: "Coffee and light meals near ruins", url: "https://www.google.com/maps/search/Bar+Apollonia+Albania", rating: 4.2 }
  ],
  "blue-eye": [
    { name: "Blue Eye Restaurant", type: "Traditional", specialty: "Grilled trout and fresh salads", url: "https://www.google.com/maps/search/Blue+Eye+Restaurant+Saranda+Albania", rating: 4.4 },
    { name: "Taverna Syri Kalter", type: "Traditional", specialty: "Mountain lamb and local cheese", url: "https://www.google.com/maps/search/Taverna+Syri+Kalter+Albania", rating: 4.5 },
    { name: "Restaurant Mema", type: "Traditional", specialty: "Home-cooked Albanian mountain dishes", url: "https://www.google.com/maps/search/Restaurant+Mema+Blue+Eye+Albania", rating: 4.3 },
    { name: "Blue Eye Caf\u00e9", type: "Caf\u00e9", specialty: "Coffee and ice cream near the spring", url: "https://www.google.com/maps/search/Blue+Eye+Cafe+Albania", rating: 4.2 }
  ],
  borsh: [
    { name: "Taverna Borsh", type: "Seafood", specialty: "Grilled fish and seafood platter", url: "https://www.google.com/maps/search/Taverna+Borsh+Albania", rating: 4.5 },
    { name: "Restaurant Riviera", type: "Traditional", specialty: "Seafood pasta and grilled lamb", url: "https://www.google.com/maps/search/Restaurant+Riviera+Borsh+Albania", rating: 4.4 },
    { name: "Castle Borsh Restaurant", type: "Traditional", specialty: "Grilled meats with sea views", url: "https://www.google.com/maps/search/Castle+Borsh+Albania", rating: 4.6 },
    { name: "Borsh Beach Bar", type: "Caf\u00e9", specialty: "Smoothies and beachside snacks", url: "https://www.google.com/maps/search/Borsh+Beach+Bar+Albania", rating: 4.3 },
    { name: "Olive Garden Restaurant", type: "Traditional", specialty: "Traditional Albanian meze and wine", url: "https://www.google.com/maps/search/Olive+Garden+Borsh+Albania", rating: 4.5 }
  ],
  default: [
    { name: "Restaurant Vatra", type: "Traditional", specialty: "Albanian national dishes and grill", url: "https://www.google.com/maps/search/Traditional+Albanian+restaurant+Albania", rating: 4.4 },
    { name: "Taverna Liria", type: "Traditional", specialty: "Albanian meze and fresh salads", url: "https://www.google.com/maps/search/Taverna+Liria+Albania", rating: 4.5 },
    { name: "Seafood Grill", type: "Seafood", specialty: "Fresh Adriatic seafood", url: "https://www.google.com/maps/search/Seafood+restaurant+Albania", rating: 4.4 },
    { name: "Cafe Flora", type: "Caf\u00e9", specialty: "Coffee and local pastries", url: "https://www.google.com/maps/search/Cafe+Albania", rating: 4.3 }
  ]
,
  "default": [
    { name: "Traditional Restaurant", type: "Traditional", specialty: "Albanian Cuisine", url: "https://www.google.com/maps/search/?api=1&query=Restaurant+Albania", rating: 4.5 },
    { name: "Seafood Taverna", type: "Seafood", specialty: "Fresh Adriatic Fish", url: "https://www.google.com/maps/search/?api=1&query=Seafood+Taverna+Albania", rating: 4.4 },
    { name: "Mountain Lodge Restaurant", type: "Traditional", specialty: "Local Specialties", url: "https://www.google.com/maps/search/?api=1&query=Mountain+Restaurant+Albania", rating: 4.6 },
    { name: "Cafe Bar", type: "Café", specialty: "Coffee & Pastries", url: "https://www.google.com/maps/search/?api=1&query=Cafe+Albania", rating: 4.3 }
  ]
};;
const accommodationsData = {
  tirana: [
    { name: "Rogner Hotel Europapark", type: "Luxury Hotel", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Tirana+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Granda", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Tirana+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Boutique Hotel Artë", type: "Boutique Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Tirana+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hostel Tirana Backpacker", type: "Hostel", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Tirana+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Freddy's Hotel", type: "Hotel", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Tirana+Albania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  berati: [
    { name: "Hotel Mangalem", type: "Boutique Hotel", price: "$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Berat+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Castle Park", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Berat+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Berat Backpackers Hostel", type: "Hostel", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Berat+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guesthouse Flores", type: "Guest House", price: "$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Berat+Albania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  gjirokaster: [
    { name: "Hotel Kalemi", type: "Boutique Hotel", price: "$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Gjirokaster+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Stone City Hostel", type: "Hostel", price: "$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Gjirokaster+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Argjiro", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Gjirokaster+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Kerculla Resort", type: "Resort", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Gjirokaster+Albania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  saranda: [
    { name: "Hotel Butrinti", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Saranda+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Mountain View Hotel", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Saranda+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Lule", type: "Guest House", price: "$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Saranda+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Nertili", type: "Boutique Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Saranda+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Saranda Backpackers", type: "Hostel", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Saranda+Albania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  butrint: [
    { name: "Hotel Butrint", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Butrint+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Butrint", type: "Guest House", price: "$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Butrint+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guesthouse Kiri", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Butrint+Albania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  ksamil: [
    { name: "Hotel Ksamil", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Ksamil+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Villa Ksamil", type: "Villa", price: "$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Ksamil+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Sunrise", type: "Apartment", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Ksamil+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Imperial", type: "Boutique Hotel", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Ksamil+Albania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  himara: [
    { name: "Hotel Himara", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Himara+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Vista", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Himara+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Sea View Apartments", type: "Apartment", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Himara+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Porto Palermo Resort", type: "Resort", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Himara+Albania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  vlora: [
    { name: "Hotel Adriatik", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Vlora+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Regina City Hotel", type: "Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Vlora+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guesthouse Besa", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Vlora+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Laguna", type: "Apartment", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Vlora+Albania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  durres: [
    { name: "Hotel Durres", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Durres+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Adriatik Hotel", type: "Luxury Hotel", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Durres+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guesthouse Vista", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Durres+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartment Palma", type: "Apartment", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Durres+Albania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  shkodra: [
    { name: "Hotel Tradita", type: "Boutique Hotel", price: "$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Shkodra+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Kaduku", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Shkodra+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guesthouse Shkodra", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Shkodra+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Verde", type: "Villa", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Shkodra+Albania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  kruja: [
    { name: "Hotel Panorama", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Kruja+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guesthouse Kruja", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Kruja+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Skanderbeg Hotel", type: "Hotel", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Kruja+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Castle View Rooms", type: "Bed & Breakfast", price: "$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Kruja+Albania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  korca: [
    { name: "Hotel Kastro", type: "Boutique Hotel", price: "$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Korca+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Lidia", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Korca+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guesthouse Pushimi", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Korca+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Etnike", type: "Boutique Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Korca+Albania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  theth: [
    { name: "Guesthouse Theth", type: "Guest House", price: "$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Theth+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Buen Retiro Theth", type: "Guest House", price: "$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Theth+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Kulla e Pajtimit", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Theth+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Pola's Guesthouse", type: "Guest House", price: "$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Theth+Albania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  valbona: [
    { name: "Guesthouse Valbona", type: "Guest House", price: "$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Valbona+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Mrizi i Zanave", type: "Guest House", price: "$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Valbona+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Kulla e Muca", type: "Guest House", price: "$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Valbona+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Valbona Resort", type: "Resort", price: "$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Valbona+Albania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  llogara: [
    { name: "Hotel Llogara", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Llogara+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Restaurant-Hotel Tundas", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Llogara+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guesthouse Sopoti", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Llogara+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Llogara", type: "Villa", price: "$$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Llogara+Albania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "lake-ohrid-albania": [
    { name: "Hotel Pogradec", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Pogradec+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Sazani", type: "Guest House", price: "$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Pogradec+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guesthouse Lin", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Pogradec+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Enkelana", type: "Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Pogradec+Albania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  apollonia: [
    { name: "Hotel Apollonia", type: "Hotel", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Fier+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guesthouse Fier", type: "Guest House", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Fier+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Presidenti", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Fier+Albania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "blue-eye": [
    { name: "Guesthouse Blue Eye", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Blue+Eye+Saranda+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Blue Eye", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Blue+Eye+Saranda+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Muzina", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Blue+Eye+Saranda+Albania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  borsh: [
    { name: "Guesthouse Borsh", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Borsh+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Borsh", type: "Villa", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Borsh+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Borsh Beach Resort", type: "Resort", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Borsh+Albania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Borsh", type: "Apartment", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Borsh+Albania&aid=2086573&no_rooms=1&group_adults=2" }
  ]
};

const thingsToDoData = {
  tirana: [
    "Visit Skanderbeg Square and the Et'hem Bey Mosque",
    "Explore the Bunk'Art 1 and Bunk'Art 2 Cold War museums",
    "Walk the trendy Blloku district with its cafes and boutiques",
    "Ride the Dajti Ekspres cable car for mountain views over the city",
    "Visit the National History Museum for Albanian heritage",
    "Climb the Sky Tower for a panoramic view of Tirana"
  ],
  berati: [
    "Explore the Berat Castle and its inhabited houses",
    "Walk the Mangalem quarter's Ottoman-era streets",
    "Visit the Onufri Museum of Byzantine icons",
    "Cross the Old Bridge over the Osum River for sunset views",
    "Taste local wines at a Berati wine cellar",
    "Hike up to the Gorica quarter for panoramic photos"
  ],
  gjirokaster: [
    "Tour the Gjirokaster Castle and Armaments Museum",
    "Visit the Zekate House for Ottoman architecture",
    "Explore the Old Bazaar for handmade souvenirs",
    "Visit the birthplace of Ismail Kadare (now a museum)",
    "Walk the cobbled streets of the UNESCO-listed Old Town",
    "Try qifqi (rice balls) at a traditional restaurant"
  ],
  saranda: [
    "Stroll the Saranda promenade along the Ionian Sea",
    "Visit the Lekuresi Castle for sunset views over the bay",
    "Take a day trip by ferry to Corfu, Greece",
    "Relax on Mirror Beach (Pasqyra Beach)",
    "Explore the nearby ancient city of Butrint",
    "Dine at a waterfront seafood restaurant"
  ],
  butrint: [
    "Explore the UNESCO ruins of the ancient Greek and Roman city",
    "Visit the well-preserved theater and baptistery",
    "Walk through the Butrint National Park wildlife area",
    "Climb the Venetian castle for views of the Vivari Channel",
    "Photograph the lion gate and the forum mosaics",
    "Combine with a visit to the Blue Eye Spring"
  ],
  ksamil: [
    "Swim to the tiny offshore islets from the main beach",
    "Rent a kayak to explore the turquoise waters",
    "Snorkel in the crystal-clear Ionian Sea",
    "Relax on the soft white sand beaches",
    "Enjoy fresh seafood at a beachfront taverna",
    "Watch the sunset over the Ksamil Islands"
  ],
  himara: [
    "Swim at the stunning beaches of Himara, Gjiri i Akuarit, and Potami",
    "Explore the Himara Castle ruins with sea views",
    "Drive the scenic coastal road to nearby Dh\u00ebrmi",
    "Visit the Porto Palermo Castle and submarine tunnel",
    "Enjoy fresh seafood at a waterfront taverna",
    "Hike through olive groves to secluded coves"
  ],
  vlora: [
    "Walk the Lungomare promenade along the waterfront",
    "Visit the Independence Monument and Flag Museum",
    "Take a boat tour to the Karaburun Peninsula and Sazan Island",
    "Relax at Plazhi i Ri or Vlora Bay beaches",
    "Explore the Zvernec Monastery on the Narta Lagoon",
    "Try fresh seafood at a traditional Vlora restaurant"
  ],
  durres: [
    "Visit the Durres Amphitheatre, the largest in the Balkans",
    "Explore the Durres Archaeological Museum",
    "Walk the Venetian Tower and city walls",
    "Relax on the long sandy beach of Durres",
    "Stroll the waterfront promenade with its restaurants",
    "Visit the Royal Villa of Durres"
  ],
  shkodra: [
    "Climb Rozafa Castle for panoramic lake and river views",
    "Explore the Marubi National Museum of Photography",
    "Take a boat tour on Lake Skadar",
    "Walk the pedestrian Kole Idromeno Street",
    "Visit the Mesi Bridge, an Ottoman stone bridge",
    "Try lake fish at a restaurant near Shiroka"
  ],
  kruja: [
    "Visit the Skanderbeg Museum inside Kruja Castle",
    "Shop at the Old Bazaar for Albanian crafts and souvenirs",
    "Explore the Ethnographic Museum in a traditional house",
    "Photograph the panoramic views from the castle walls",
    "Learn about Albanian history at the National Museum",
    "Try traditional mountain cuisine at a castle restaurant"
  ],
  korca: [
    "Stroll the Boulevard Sh\u00ebn Gjergji, Korca's main pedestrian street",
    "Visit the National Museum of Medieval Art",
    "Tour the Korca Brewery and taste local beer",
    "Explore the Voskopoja village with its old churches",
    "Visit the Resurrection of Christ Cathedral",
    "Enjoy a performance at the Andon Zako Cajupi Theatre"
  ],
  theth: [
    "Hike the famous Theth to Valbona trail through the Accursed Mountains",
    "Visit the Grunas Waterfall for a refreshing swim",
    "Explore the Lock-in-Tower (Kulla e Ngujimit)",
    "Photograph the Theth Church with mountain backdrop",
    "Stay in a traditional Albanian guesthouse (kulla)",
    "Swim in the crystal-clear Blue Eye of Theth"
  ],
  valbona: [
    "Hike the Valbona to Theth trail for spectacular alpine scenery",
    "Walk through the Valbona Valley National Park trails",
    "Swim in the clear waters of the Valbona River",
    "Photograph the dramatic peaks of the Accursed Mountains",
    "Visit local guesthouses for traditional mountain hospitality",
    "Explore the remote villages of the upper valley"
  ],
  llogara: [
    "Paraglide over the Ionian Sea from the Llogara Pass",
    "Enjoy panoramic views from the pass viewpoint",
    "Hike the trails in the Llogara National Park",
    "Drive the scenic coastal road with dramatic sea cliffs",
    "Visit the Cesar Pass for more alpine scenery",
    "Dine at a mountain restaurant with sea views"
  ],
  "lake-ohrid-albania": [
    "Visit the Lin Peninsula for 6th-century mosaic ruins",
    "Swim in the crystal-clear waters of Lake Ohrid",
    "Take a boat ride along the Albanian shoreline",
    "Enjoy fresh lake trout at a lakeside restaurant",
    "Visit the medieval Church of St. Mary in Lin",
    "Explore the Drilon park and springs near Pogradec"
  ],
  apollonia: [
    "Explore the ancient Greek and Roman ruins of Apollonia",
    "Visit the onsite archaeological museum for artifacts",
    "Photograph the well-preserved bouleuterion and arches",
    "Learn about the city's role as a major learning center",
    "Visit the nearby Ardenica Monastery",
    "Walk through the olive groves surrounding the site"
  ],
  "blue-eye": [
    "Photograph the mesmerizing azure-blue spring from above",
    "Walk the wooden boardwalks around the spring",
    "Visit early morning to avoid crowds",
    "Combine with a trip to Butrint and Ksamil",
    "Enjoy the cool forest atmosphere around the spring",
    "Have lunch at the nearby traditional restaurant"
  ],
  borsh: [
    "Relax on one of Albania's longest beaches (7km)",
    "Visit the Borsh Castle on the hill overlooking the bay",
    "Swim in the crystal-clear Ionian waters",
    "Walk through the olive groves behind the beach",
    "Enjoy fresh seafood at a beachfront taverna",
    "Explore the nearby Qeparo village and its old town"
  ],
  default: [
    "Explore a historic Ottoman-era town center",
    "Try traditional Albanian cuisine at a local restaurant",
    "Visit a nearby castle or archaeological site",
    "Enjoy the natural landscape with hiking or swimming"
  
]
};
