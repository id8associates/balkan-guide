const touristPlaces = {
  sofia: {
    name: "Sofia",
    coords: [42.6977, 23.3219],
    image: "images/sofia.jpg",
    location: "Western Bulgaria",
    description: "Bulgaria's capital is a vibrant blend of ancient and modern, where Roman ruins sit alongside Orthodox cathedrals and communist-era architecture. The iconic Alexander Nevsky Cathedral dominates the skyline, while the Vitosha Mountain provides a stunning backdrop. Explore the Serdica complex, the National Palace of Culture, and the bustling Vitosha Boulevard shopping street.",
    type: "Capital City",
    rating: 4.5,
    reviews: 31250,
    bestTime: "April to October",
    tips: "Visit the Alexander Nevsky Cathedral early to avoid crowds. Take the free walking tour to understand the city's layered history. Ride the lift up Vitosha Mountain for panoramic views."
  },
  plovdiv: {
    name: "Plovdiv",
    coords: [42.1354, 24.7453],
    image: "images/plovdiv.jpg",
    location: "Central Bulgaria",
    description: "One of the oldest continuously inhabited cities in Europe, Plovdiv charms with its Roman amphitheater, colorful 19th-century Revival houses in the Old Town, and a thriving arts scene. The Kapana creative district buzzes with galleries, craft breweries, and street art. The ancient Plovdiv Stadium and the Ethnographic Museum are must-sees.",
    type: "Historic City",
    rating: 4.8,
    reviews: 21340,
    bestTime: "April to October",
    tips: "Stay in the Kapana district for the best vibe. Climb the Nebet Tepe hill for sunset views. Try local wine at a traditional mehana restaurant."
  },
  "veliko-tarnovo": {
    name: "Veliko Tarnovo",
    coords: [43.0757, 25.6172],
    image: "images/veliko-tarnovo.jpg",
    location: "Northern Bulgaria",
    description: "The medieval capital of the Second Bulgarian Empire, Veliko Tarnovo is dramatically perched on three hills overlooking the Yantra River. The Tsarevets Fortress dominates the skyline, while the colorful houses of Samovodska Charshiya market street wind below. The Sound and Light show projected on Tsarevets is unforgettable.",
    type: "Historical Capital",
    rating: 4.7,
    reviews: 18450,
    bestTime: "April to October",
    tips: "Watch the Sound and Light show from the Asenevtsi Monument viewpoint. Explore the artisan workshops on Samovodska Charshiya. Take a day trip to nearby Arbanasi village."
  },
  bansko: {
    name: "Bansko",
    coords: [41.8333, 23.5000],
    image: "images/bansko.jpg",
    location: "Pirin Mountains",
    description: "Bulgaria's premier ski resort is also a charming town with a cobbled Old Town, stone churches, and traditional taverns. In winter, the slopes of the Pirin Mountains offer excellent skiing for all levels. Summer brings hiking, mountain biking, and a lively festival scene centered around the town's growing reputation as a cultural hub.",
    type: "Ski Resort",
    rating: 4.6,
    reviews: 15980,
    bestTime: "December to April (skiing), June to September (hiking)",
    tips: "Book ski equipment in advance during peak season. Try the local Bansko-style kapama stew. Visit the Holy Trinity Church with its beautiful frescoes."
  },
  "rila-monastery": {
    name: "Rila Monastery",
    coords: [42.1333, 23.3403],
    image: "images/rila-monastery.jpg",
    location: "Rila Mountains",
    description: "Bulgaria's most famous monastery and a UNESCO World Heritage site, the Rila Monastery is a masterpiece of Bulgarian National Revival architecture. Founded in the 10th century by Saint Ivan of Rila, its arcaded courtyards are adorned with vibrant frescoes, and the Museum of the Monastery houses the Rafail's Cross — an intricately carved crucifix with 104 religious scenes.",
    type: "Monastery",
    rating: 4.9,
    reviews: 27430,
    bestTime: "May to October",
    tips: "Dress modestly covering shoulders and knees. Spend at least 2-3 hours exploring the grounds. Combine with a hike to the nearby Rila Lakes."
  },
  "seven-rila-lakes": {
    name: "Seven Rila Lakes",
    coords: [42.2000, 23.3167],
    image: "images/seven-rila-lakes.jpg",
    location: "Rila Mountains",
    description: "A stunning glacial lake cirque in the Rila Mountains, the Seven Rila Lakes are connected by a hiking trail that offers some of Bulgaria's most spectacular alpine scenery. Each lake has a name reflecting its shape — the Tear, the Eye, the Kidney, the Twin, the Trefoil, the Fish Lake, and the Lower Lake. Take the chairlift from Panichishte to the trailhead.",
    type: "Natural Wonder",
    rating: 4.9,
    reviews: 19210,
    bestTime: "June to September",
    tips: "Start early to catch the chairlift (arrive before 9 AM). Bring warm layers and rain gear — weather changes fast. The full circuit takes 4-5 hours."
  },
  nessebar: {
    name: "Nessebar - Old Town",
    coords: [42.6592, 27.7247],
    image: "images/nessebar.jpg",
    location: "Black Sea Coast",
    description: "A UNESCO World Heritage site, the ancient town of Nessebar sits on a rocky peninsula connected to the mainland by a narrow causeway. With over 40 well-preserved churches dating from the 5th to the 19th centuries, it is an open-air museum of Byzantine and Bulgarian architecture. The cobblestone streets wind past wooden Revival houses and seaside taverns.",
    type: "UNESCO Old Town",
    rating: 4.7,
    reviews: 22180,
    bestTime: "May to September",
    tips: "Visit early morning or late evening to avoid day-trip crowds. Try the local black mussels at a waterfront restaurant. Explore the lesser-known churches off the main path."
  },
  burgas: {
    name: "Burgas",
    coords: [42.5000, 27.4667],
    image: "images/burgas.jpg",
    location: "Black Sea Coast",
    description: "Bulgaria's fourth-largest city is an underrated coastal gem with a large sea garden park, a bustling pedestrian center, and excellent cultural institutions. The Bogoridi Street promenade leads to the central beach, while the Burgas Lakes to the north and south are important bird-watching sites. The city's transport hub connects to nearby Sunny Beach and Sozopol.",
    type: "Coastal City",
    rating: 4.4,
    reviews: 12540,
    bestTime: "May to September",
    tips: "Walk through the Sea Garden at sunset. Visit the Ethnographic Museum in the old mill building. Take a boat trip to the nearby St. Anastasia Island."
  },
  varna: {
    name: "Varna",
    coords: [43.2167, 27.9167],
    image: "images/varna.jpg",
    location: "Black Sea Coast",
    description: "Bulgaria's maritime capital is a vibrant port city with a beautiful long beach promenade, the Roman Baths complex (the largest in the Balkans), the Varna Archaeological Museum housing the world's oldest gold treasure, and a lively cultural calendar. The Sea Garden is a vast park with an open-air theater, aquarium, and zoo.",
    type: "Coastal City",
    rating: 4.6,
    reviews: 23760,
    bestTime: "May to September",
    tips: "Visit the Archaeological Museum for the Varna Gold Treasure (over 6,000 years old). Swim at the central beach or take a taxi to the more secluded Golden Sands. Enjoy the nightlife along the harbor."
  },
  "sunny-beach": {
    name: "Sunny Beach",
    coords: [42.6833, 27.7167],
    image: "images/sunny-beach.jpg",
    location: "Black Sea Coast",
    description: "The largest and most popular beach resort on the Bulgarian Black Sea coast, Sunny Beach boasts an 8 km stretch of golden sand and shallow, warm waters. With countless hotels, restaurants, bars, and water sports, it is the quintessential summer holiday destination. The nearby Nessebar Old Town provides a cultural contrast to the resort's energetic vibe.",
    type: "Beach Resort",
    rating: 4.2,
    reviews: 18930,
    bestTime: "June to September",
    tips: "Book all-inclusive packages for the best value. Venture to Nessebar for dining — it is cheaper and more authentic. Rent a car to explore the southern coastline."
  },
  sozopol: {
    name: "Sozopol",
    coords: [42.4167, 27.7000],
    image: "images/sozopol.jpg",
    location: "Black Sea Coast",
    description: "One of Bulgaria's oldest towns, Sozopol is a charming fishing town with a beautiful Old Town on a rocky peninsula. Wooden Revival houses, narrow cobbled streets, and ancient churches create a romantic atmosphere. The nearby Harmani Beach and the Apollonia art festival make it a favorite among Bulgarian and international visitors alike.",
    type: "Coastal Town",
    rating: 4.5,
    reviews: 13460,
    bestTime: "May to September",
    tips: "Stay in the Old Town for the best atmosphere. Watch sunset from the southern fortress wall. Take a boat trip to St. Ivan Island for dolphin watching."
  },
  koprivshtitsa: {
    name: "Koprivshtitsa",
    coords: [42.6333, 24.3500],
    image: "images/koprivshtitsa.jpg",
    location: "Sredna Gora Mountains",
    description: "A beautifully preserved town of colorful Bulgarian National Revival houses set in a valley, Koprivshtitsa is a living museum of 19th-century Bulgarian life. Every house tells a story — many were homes of revolutionary heroes. The cobblestone streets, old bridges, and tranquil river make it a photographer's paradise and a peaceful escape from city life.",
    type: "Historic Town",
    rating: 4.8,
    reviews: 9870,
    bestTime: "May to September",
    tips: "Visit the Oslekov House and the Lyutov House museums. Walk the entire town in 2-3 hours. Try shopska salad and rakia at a local guesthouse."
  },
  belogradchik: {
    name: "Belogradchik Rocks",
    coords: [43.6272, 22.6837],
    image: "images/belogradchik.jpg",
    location: "Northwestern Bulgaria",
    description: "A spectacular group of bizarre red sandstone rock formations that rise up to 200 meters, sculpted by nature over millions of years. The Belogradchik Fortress is integrated into the rocks, with walls winding through the natural formations. The shapes have inspired legends — the Madonna, the Horseman, the Schoolgirl, and Adam and Eve are among the named formations.",
    type: "Natural Wonder",
    rating: 4.7,
    reviews: 11560,
    bestTime: "April to October",
    tips: "Climb to the top of the fortress for panoramic views. The sunset light on the red rocks is spectacular. Combine with a visit to the Magura Cave nearby."
  },
  "devetashka-cave": {
    name: "Devetashka Cave",
    coords: [43.2333, 24.8833],
    image: "images/devetashka-cave.jpg",
    location: "Central Northern Bulgaria",
    description: "One of Europe's most impressive karst caves, Devetashka Cave was used as a film location for the Hollywood movie The Last Stand. Its enormous entrance (35 m wide and 30 m high) creates a dramatic natural cathedral. Sunbeams pierce through seven openings in the ceiling, illuminating the cavern. The cave is also home to thousands of bats.",
    type: "Cave",
    rating: 4.6,
    reviews: 8340,
    bestTime: "April to October",
    tips: "Visit in late afternoon when the sunbeams are most dramatic. Bring a flashlight for the deeper chambers. Do not disturb the bat colonies — observe quietly."
  },
  "rila-np": {
    name: "Rila National Park",
    coords: [42.1500, 23.5833],
    image: "images/rila-np.jpg",
    location: "Rila Mountains",
    description: "The largest national park in Bulgaria protects the highest mountain range on the Balkan Peninsula, including Mount Musala (2,925 m), the highest peak in Southeast Europe. The park is a paradise for hikers with hundreds of kilometers of trails through pine forests, glacial lakes, and alpine meadows. Brown bears, wolves, and chamois roam its vast wilderness.",
    type: "National Park",
    rating: 4.9,
    reviews: 14230,
    bestTime: "June to September (hiking), December to April (skiing)",
    tips: "Climb Mount Musala for the ultimate Balkan summit experience. The Seven Rila Lakes circuit is the most popular hike. Check weather conditions at the hut before setting out."
  },
  "pirin-np": {
    name: "Pirin National Park",
    coords: [41.7667, 23.4000],
    image: "images/pirin-np.jpg",
    location: "Pirin Mountains",
    description: "A UNESCO World Heritage site, Pirin National Park is known for its rugged alpine scenery, marble peaks, and over 170 glacial lakes. Mount Vihren (2,914 m) is the park's highest peak. The park is famous for the Pirin Pyramid rock formations, the Bayuvi Dupki pine forest, and the Bunderitsa Valley. It offers some of the most challenging and rewarding hiking in Bulgaria.",
    type: "National Park",
    rating: 4.8,
    reviews: 12350,
    bestTime: "June to September",
    tips: "Base yourself in Bansko for easy access. The Vihren summit hike is strenuous but offers incredible views. Visit the Baikusheva Mura — a 1,300-year-old Bosnian pine."
  },
  melnik: {
    name: "Melnik",
    coords: [41.5225, 23.3919],
    image: "images/melnik.jpg",
    location: "Southwestern Bulgaria",
    description: "Bulgaria's smallest town is famous for its dramatic sandstone pyramids, traditional wineries, and the enormous Melnik Earth Pyramids formations. The town is a wine lover's paradise, producing some of Bulgaria's finest red wines from the local Shiroka Melnishka grape variety. The Rozhen Monastery nearby is the second largest in the country.",
    type: "Wine Town",
    rating: 4.6,
    reviews: 8670,
    bestTime: "April to October",
    tips: "Visit several wineries for tastings — try the Melnik 55 wine. Explore the Earth Pyramids trail at sunset. Stay in a traditional guesthouse for the full experience."
  },
  madara: {
    name: "Madara Rider",
    coords: [43.2833, 27.1000],
    image: "images/madara.jpg",
    location: "Northeastern Bulgaria",
    description: "A unique UNESCO World Heritage site, the Madara Rider is a magnificent 8th-century rock relief carved into a nearly vertical cliff face at 23 meters above ground. Depicting a horseman spearing a lion with a dog running behind, it is the only such relief from the Early Middle Ages in Europe. The surrounding Madara National Park includes a fortress, caves, and scenic trails.",
    type: "UNESCO Historical Site",
    rating: 4.5,
    reviews: 6780,
    bestTime: "April to October",
    tips: "Use the viewing platform for the best photo angle. Walk up to the Madara Fortress ruins above. Combine with a visit to the nearby city of Shumen."
  },
  tsarevets: {
    name: "Tsarevets Fortress",
    coords: [43.0833, 25.6500],
    image: "images/tsarevets.jpg",
    location: "Veliko Tarnovo",
    description: "The medieval stronghold of the Second Bulgarian Empire, Tsarevets Fortress is a massive hilltop complex in Veliko Tarnovo with reconstructed palace, church, and defensive walls. The Patriarchal Cathedral of the Holy Ascension of God features modern murals depicting Bulgarian history. The nightly Sound and Light show uses laser projections and music to tell the story of the fortress.",
    type: "Fortress",
    rating: 4.8,
    reviews: 19680,
    bestTime: "April to October",
    tips: "Visit both during the day and at night for the Sound and Light show. Take the guided tour for historical context. The walk up from the Old Town takes about 20 minutes."
  }
};

const restaurantsData = {
  sofia: [
    { name: "Made in Home", type: "Modern Bulgarian", specialty: "Reimagined traditional dishes", url: "https://www.google.com/maps/search/Made+in+Home+Sofia+Bulgaria", rating: 4.7 },
    { name: "Raketa Rakia Bar", type: "Traditional", specialty: "Rakia flight and grilled meats", url: "https://www.google.com/maps/search/Raketa+Rakia+Bar+Sofia+Bulgaria", rating: 4.6 },
    { name: "Divaka", type: "Fine Dining", specialty: "Wild game and seasonal ingredients", url: "https://www.google.com/maps/search/Divaka+Sofia+Bulgaria", rating: 4.8 },
    { name: "Shtastlivetsa", type: "Traditional", specialty: "Bulgarian classics in elegant setting", url: "https://www.google.com/maps/search/Shtastlivetsa+Sofia+Bulgaria", rating: 4.5 },
    { name: "The Little Things", type: "Cafe", specialty: "Specialty coffee and artisan pastries", url: "https://www.google.com/maps/search/The+Little+Things+Sofia+Bulgaria", rating: 4.4 }
  ],
  plovdiv: [
    { name: "Pavaj", type: "Modern Bulgarian", specialty: "Creative takes on local cuisine", url: "https://www.google.com/maps/search/Pavaj+Plovdiv+Bulgaria", rating: 4.7 },
    { name: "Hendrix", type: "Fine Dining", specialty: "International gourmet with Bulgarian twist", url: "https://www.google.com/maps/search/Hendrix+Plovdiv+Bulgaria", rating: 4.8 },
    { name: "Salt & Pepper", type: "Traditional", specialty: "Homestyle Bulgarian cooking", url: "https://www.google.com/maps/search/Salt+and+Pepper+Plovdiv+Bulgaria", rating: 4.5 },
    { name: "Brick & Wine", type: "Wine Bar", specialty: "Bulgarian wine tasting and tapas", url: "https://www.google.com/maps/search/Brick+and+Wine+Plovdiv+Bulgaria", rating: 4.6 },
    { name: "Kapana Coffee", type: "Cafe", specialty: "Specialty coffee and light bites", url: "https://www.google.com/maps/search/Kapana+Coffee+Plovdiv+Bulgaria", rating: 4.4 }
  ],
  "veliko-tarnovo": [
    { name: "Shtastliveca", type: "Traditional", specialty: "Bulgarian cuisine with river views", url: "https://www.google.com/maps/search/Shtastliveca+Veliko+Tarnovo+Bulgaria", rating: 4.6 },
    { name: "Bojana", type: "Traditional", specialty: "Local slow-cooked dishes", url: "https://www.google.com/maps/search/Bojana+Veliko+Tarnovo+Bulgaria", rating: 4.5 },
    { name: "Museum of Illusions Cafe", type: "Cafe", specialty: "Coffee and desserts", url: "https://www.google.com/maps/search/Museum+of+Illusions+Cafe+Veliko+Tarnovo+Bulgaria", rating: 4.3 },
    { name: "La Cote", type: "Fine Dining", specialty: "European cuisine with fortress view", url: "https://www.google.com/maps/search/La+Cote+Veliko+Tarnovo+Bulgaria", rating: 4.7 }
  ],
  bansko: [
    { name: "Mehana Dedo Pene", type: "Traditional", specialty: "Kapama and other Bansko specialties", url: "https://www.google.com/maps/search/Mehana+Dedo+Pene+Bansko+Bulgaria", rating: 4.7 },
    { name: "The Log House", type: "Traditional", specialty: "Grilled meats and mountain stews", url: "https://www.google.com/maps/search/The+Log+House+Bansko+Bulgaria", rating: 4.6 },
    { name: "Mountain Feast", type: "Fine Dining", specialty: "Modern alpine cuisine", url: "https://www.google.com/maps/search/Mountain+Feast+Bansko+Bulgaria", rating: 4.8 },
    { name: "Happy End", type: "Cafe", specialty: "Coffee and apres-ski drinks", url: "https://www.google.com/maps/search/Happy+End+Bansko+Bulgaria", rating: 4.3 }
  ],
  "rila-monastery": [
    { name: "Restaurant Rila Monastery", type: "Traditional", specialty: "Monastic bean soup and bread", url: "https://www.google.com/maps/search/Rila+Monastery+Restaurant+Bulgaria", rating: 4.2 },
    { name: "Mehana Pri Rilskite Ezera", type: "Traditional", specialty: "Trout and mountain mushrooms", url: "https://www.google.com/maps/search/Pri+Rilskite+Ezera+Rila+Bulgaria", rating: 4.4 },
    { name: "Gorski Kut", type: "Traditional", specialty: "Grilled trout and local wine", url: "https://www.google.com/maps/search/Gorski+Kut+Rila+Bulgaria", rating: 4.3 }
  ],
  "seven-rila-lakes": [
    { name: "Rila Lakes Hut", type: "Mountain Hut", specialty: "Hot soup and tea at altitude", url: "https://www.google.com/maps/search/Rila+Lakes+Hut+Bulgaria", rating: 4.1 },
    { name: "Panichishte Restaurant", type: "Traditional", specialty: "Grilled trout and roast meats", url: "https://www.google.com/maps/search/Panichishte+Restaurant+Rila+Bulgaria", rating: 4.3 },
    { name: "Cafe at the Chairlift", type: "Cafe", specialty: "Hot drinks and sandwiches", url: "https://www.google.com/maps/search/Panichishte+Chairlift+Cafe+Rila+Bulgaria", rating: 4.0 }
  ],
  nessebar: [
    { name: "The White House", type: "Seafood", specialty: "Black mussels and grilled fish", url: "https://www.google.com/maps/search/The+White+House+Nessebar+Bulgaria", rating: 4.6 },
    { name: "Mehana Pri Morska", type: "Traditional", specialty: "Bulgarian seafood dishes", url: "https://www.google.com/maps/search/Mehana+Pri+Morska+Nessebar+Bulgaria", rating: 4.5 },
    { name: "Koko Beach", type: "Seafood", specialty: "Fish platter and local wine", url: "https://www.google.com/maps/search/Koko+Beach+Nessebar+Bulgaria", rating: 4.4 },
    { name: "Seven Saints", type: "Fine Dining", specialty: "Gourmet seafood with sea view", url: "https://www.google.com/maps/search/Seven+Saints+Nessebar+Bulgaria", rating: 4.7 }
  ],
  burgas: [
    { name: "Neptune", type: "Seafood", specialty: "Fresh Black Sea fish", url: "https://www.google.com/maps/search/Neptune+Burgas+Bulgaria", rating: 4.5 },
    { name: "Casa de la Playa", type: "International", specialty: "Mexican and Bulgarian fusion", url: "https://www.google.com/maps/search/Casa+de+la+Playa+Burgas+Bulgaria", rating: 4.6 },
    { name: "Millennium", type: "Traditional", specialty: "Bulgarian national dishes", url: "https://www.google.com/maps/search/Millennium+Burgas+Bulgaria", rating: 4.4 },
    { name: "Cafe Capri", type: "Cafe", specialty: "Italian coffee and gelato", url: "https://www.google.com/maps/search/Cafe+Capri+Burgas+Bulgaria", rating: 4.3 }
  ],
  varna: [
    { name: "Morski Club", type: "Seafood", specialty: "Black Sea fish platter", url: "https://www.google.com/maps/search/Morski+Club+Varna+Bulgaria", rating: 4.7 },
    { name: "Staria Chinar", type: "Traditional", specialty: "Bulgarian home cooking", url: "https://www.google.com/maps/search/Staria+Chinar+Varna+Bulgaria", rating: 4.6 },
    { name: "Di Wine", type: "Wine Bar", specialty: "Bulgarian wine selection", url: "https://www.google.com/maps/search/Di+Wine+Varna+Bulgaria", rating: 4.5 },
    { name: "Garden House", type: "Fine Dining", specialty: "Mediterranean gourmet", url: "https://www.google.com/maps/search/Garden+House+Varna+Bulgaria", rating: 4.8 },
    { name: "Cafe St. Nikola", type: "Cafe", specialty: "Coffee and homemade cakes", url: "https://www.google.com/maps/search/Cafe+St+Nikola+Varna+Bulgaria", rating: 4.4 }
  ],
  "sunny-beach": [
    { name: "Bistro 43", type: "Seafood", specialty: "Grilled fish and chardonnay", url: "https://www.google.com/maps/search/Bistro+43+Sunny+Beach+Bulgaria", rating: 4.4 },
    { name: "Lotus", type: "International", specialty: "Asian and European buffet", url: "https://www.google.com/maps/search/Lotus+Sunny+Beach+Bulgaria", rating: 4.2 },
    { name: "Flamingo", type: "Traditional", specialty: "Bulgarian barbecue", url: "https://www.google.com/maps/search/Flamingo+Sunny+Beach+Bulgaria", rating: 4.3 },
    { name: "Bedroom Beach Bar", type: "Cafe", specialty: "Cocktails and light bites", url: "https://www.google.com/maps/search/Bedroom+Beach+Bar+Sunny+Beach+Bulgaria", rating: 4.1 }
  ],
  sozopol: [
    { name: "Morska Zvezda", type: "Seafood", specialty: "Black mussels and grilled octopus", url: "https://www.google.com/maps/search/Morska+Zvezda+Sozopol+Bulgaria", rating: 4.6 },
    { name: "Bambuka", type: "Traditional", specialty: "Bulgarian dishes with sea views", url: "https://www.google.com/maps/search/Bambuka+Sozopol+Bulgaria", rating: 4.5 },
    { name: "Villa List", type: "Fine Dining", specialty: "International seafood cuisine", url: "https://www.google.com/maps/search/Villa+List+Sozopol+Bulgaria", rating: 4.7 },
    { name: "Kapitan", type: "Cafe", specialty: "Espresso and rakia", url: "https://www.google.com/maps/search/Kapitan+Sozopol+Bulgaria", rating: 4.3 }
  ],
  koprivshtitsa: [
    { name: "Mehana Chavdar", type: "Traditional", specialty: "Shopski salad and grilled meats", url: "https://www.google.com/maps/search/Mehana+Chavdar+Koprivshtitsa+Bulgaria", rating: 4.5 },
    { name: "Koprivshtitsa House", type: "Traditional", specialty: "Homemade Bulgarian cuisine", url: "https://www.google.com/maps/search/Koprivshtitsa+House+Koprivshtitsa+Bulgaria", rating: 4.6 },
    { name: "Maystora", type: "Traditional", specialty: "Local wine and rakia", url: "https://www.google.com/maps/search/Maystora+Koprivshtitsa+Bulgaria", rating: 4.4 }
  ],
  belogradchik: [
    { name: "Restaurant Belogradchik Rocks", type: "Traditional", specialty: "Grilled meats and local cheese", url: "https://www.google.com/maps/search/Belogradchik+Rocks+Restaurant+Bulgaria", rating: 4.4 },
    { name: "Madona", type: "Traditional", specialty: "Balkan grill platter", url: "https://www.google.com/maps/search/Madona+Belogradchik+Bulgaria", rating: 4.3 },
    { name: "Sky View", type: "Cafe", specialty: "Coffee with rock views", url: "https://www.google.com/maps/search/Sky+View+Belogradchik+Bulgaria", rating: 4.2 }
  ],
  "devetashka-cave": [
    { name: "Restaurant Devetashka", type: "Traditional", specialty: "Grilled trout and salad", url: "https://www.google.com/maps/search/Devetashka+Cave+Restaurant+Bulgaria", rating: 4.3 },
    { name: "Lovech Restaurant", type: "Traditional", specialty: "Local meat dishes", url: "https://www.google.com/maps/search/Lovech+Restaurant+Bulgaria", rating: 4.4 },
    { name: "Cafe at the Cave", type: "Cafe", specialty: "Light snacks and drinks", url: "https://www.google.com/maps/search/Devetashka+Cave+Cafe+Bulgaria", rating: 4.0 }
  ],
  "rila-np": [
    { name: "Mussala Hut", type: "Mountain Hut", specialty: "Hot soup and pasta at altitude", url: "https://www.google.com/maps/search/Mussala+Hut+Rila+Bulgaria", rating: 4.1 },
    { name: "Rila Mountain Lodge", type: "Traditional", specialty: "Hearty mountain stews", url: "https://www.google.com/maps/search/Rila+Mountain+Lodge+Bulgaria", rating: 4.3 },
    { name: "Borovets Restaurant", type: "Traditional", specialty: "Grilled trout and local wine", url: "https://www.google.com/maps/search/Borovets+Restaurant+Rila+Bulgaria", rating: 4.2 }
  ],
  "pirin-np": [
    { name: "Vihren Hut", type: "Mountain Hut", specialty: "Mountain breakfast and dinner", url: "https://www.google.com/maps/search/Vihren+Hut+Pirin+Bulgaria", rating: 4.2 },
    { name: "Bunderitsa Hut", type: "Mountain Hut", specialty: "Hot meals and warm drinks", url: "https://www.google.com/maps/search/Bunderitsa+Hut+Pirin+Bulgaria", rating: 4.1 },
    { name: "Bansko Town Restaurant", type: "Traditional", specialty: "Pirin mountain cuisine", url: "https://www.google.com/maps/search/Pirin+Restaurant+Bansko+Bulgaria", rating: 4.4 }
  ],
  melnik: [
    { name: "Melnik Winery", type: "Wine Bar", specialty: "Melnik wine tasting and cheese", url: "https://www.google.com/maps/search/Melnik+Winery+Bulgaria", rating: 4.7 },
    { name: "Sintica", type: "Traditional", specialty: "Local lamb and wine", url: "https://www.google.com/maps/search/Sintica+Melnik+Bulgaria", rating: 4.5 },
    { name: "Chavkova", type: "Traditional", specialty: "Homemade Bulgarian dishes", url: "https://www.google.com/maps/search/Chavkova+Melnik+Bulgaria", rating: 4.6 },
    { name: "Villa Melnik", type: "Wine Bar", specialty: "Premium wine tasting experience", url: "https://www.google.com/maps/search/Villa+Melnik+Bulgaria", rating: 4.8 }
  ],
  madara: [
    { name: "Restaurant Madara", type: "Traditional", specialty: "Grilled meats and salads", url: "https://www.google.com/maps/search/Madara+Restaurant+Bulgaria", rating: 4.3 },
    { name: "Shumen Restaurant", type: "Traditional", specialty: "Bulgarian national dishes", url: "https://www.google.com/maps/search/Shumen+Restaurant+Bulgaria", rating: 4.4 },
    { name: "Rock View Cafe", type: "Cafe", specialty: "Coffee and traditional pastries", url: "https://www.google.com/maps/search/Rock+View+Cafe+Madara+Bulgaria", rating: 4.2 }
  ],
  tsarevets: [
    { name: "Restaurant Tsarevets", type: "Traditional", specialty: "Medieval-style Bulgarian dishes", url: "https://www.google.com/maps/search/Tsarevets+Restaurant+Veliko+Tarnovo+Bulgaria", rating: 4.5 },
    { name: "Ego", type: "Fine Dining", specialty: "Gourmet Bulgarian cuisine", url: "https://www.google.com/maps/search/Ego+Veliko+Tarnovo+Bulgaria", rating: 4.7 },
    { name: "Khan", type: "Traditional", specialty: "Grilled meats and local wine", url: "https://www.google.com/maps/search/Khan+Veliko+Tarnovo+Bulgaria", rating: 4.5 },
    { name: "Bar & Dinner Varusha", type: "Traditional", specialty: "Bulgarian tapas and rakia", url: "https://www.google.com/maps/search/Varusha+Veliko+Tarnovo+Bulgaria", rating: 4.4 }
  ],
  default: [
    { name: "Mehana Bulgaria", type: "Traditional", specialty: "Bulgarian national dishes", url: "https://www.google.com/maps/search/Traditional+Bulgarian+restaurant+Bulgaria", rating: 4.4 },
    { name: "Rakia House", type: "Traditional", specialty: "Rakia selection and meze", url: "https://www.google.com/maps/search/Rakia+restaurant+Bulgaria", rating: 4.5 },
    { name: "Black Sea Fish", type: "Seafood", specialty: "Fresh fish and seafood", url: "https://www.google.com/maps/search/Seafood+restaurant+Bulgaria", rating: 4.3 },
    { name: "Balkan Cafe", type: "Cafe", specialty: "Bulgarian coffee and banitsa", url: "https://www.google.com/maps/search/Bulgarian+cafe+Bulgaria", rating: 4.2 }
  ]
,
  "default": [
    { name: "Traditional Mehana", type: "Traditional", specialty: "Bulgarian Cuisine", url: "https://www.google.com/maps/search/?api=1&query=Mehana+Bulgaria", rating: 4.5 },
    { name: "Seafood Restaurant", type: "Seafood", specialty: "Black Sea Fish", url: "https://www.google.com/maps/search/?api=1&query=Seafood+Restaurant+Bulgaria", rating: 4.4 },
    { name: "Mountain Hut", type: "Traditional", specialty: "Local Specialties", url: "https://www.google.com/maps/search/?api=1&query=Mountain+Hut+Bulgaria", rating: 4.6 },
    { name: "Café Bar", type: "Café", specialty: "Coffee & Pastries", url: "https://www.google.com/maps/search/?api=1&query=Cafe+Bulgaria", rating: 4.3 }
  ]
};;
const accommodationsData = {
  sofia: [
    { name: "Sense Hotel Sofia", type: "Luxury Hotel", price: "$$$", rating: 4.8, url: "https://www.booking.com/searchresults.html?ss=Sofia+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Balkan", type: "Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Sofia+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Arena di Serdica", type: "Boutique Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Sofia+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hostel Mostel", type: "Hostel", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Sofia+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  plovdiv: [
    { name: "Hotel Plovdiv", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Plovdiv+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Kapana Residence", type: "Boutique Hotel", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Plovdiv+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Old Town", type: "Guest House", price: "$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Plovdiv+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Doubletree by Hilton", type: "Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Plovdiv+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "veliko-tarnovo": [
    { name: "Hotel Tsarevets", type: "Hotel", price: "$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Veliko+Tarnovo+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Yantra Guest House", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Veliko+Tarnovo+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Grand Hotel Veliko Tarnovo", type: "Hotel", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Veliko+Tarnovo+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments at Samovodska", type: "Apartment", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Veliko+Tarnovo+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  bansko: [
    { name: "Hotel Kempinski", type: "Luxury Hotel", price: "$$$", rating: 4.8, url: "https://www.booking.com/searchresults.html?ss=Bansko+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Mountain Lodge", type: "Chalet", price: "$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Bansko+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Bansko Palace", type: "Hotel", price: "$$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Bansko+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Pri Toti", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Bansko+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "rila-monastery": [
    { name: "Rila Monastery Guest Rooms", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Rila+Monastery+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Rila", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Rila+Monastery+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Villa Rila", type: "Guest House", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Rila+Monastery+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "seven-rila-lakes": [
    { name: "Rila Lakes Hut", type: "Mountain Hut", price: "$", rating: 4.0, url: "https://www.booking.com/searchresults.html?ss=Rila+Lakes+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Panichishte Hotel", type: "Hotel", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Panichishte+Rila+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Sapareva Banya Spa", type: "Spa Resort", price: "$$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Sapareva+Banya+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  nessebar: [
    { name: "Hotel St. Nikolai", type: "Boutique Hotel", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Nessebar+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Old Nessebar Apartments", type: "Apartment", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Nessebar+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Mediterranean", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Nessebar+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Antim", type: "Hotel", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Nessebar+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  burgas: [
    { name: "Hotel Bulgaria", type: "Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Burgas+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Sea Garden Apartments", type: "Apartment", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Burgas+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Burgas", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Burgas+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Miracle", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Burgas+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  varna: [
    { name: "Hotel Cherno More", type: "Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Varna+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Graffiti Guest House", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Varna+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Panorama", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Varna+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Varna Apartments", type: "Apartment", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Varna+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "sunny-beach": [
    { name: "Hotel Kuban", type: "Resort", price: "$$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Sunny+Beach+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Sunny Beach Palace", type: "Resort", price: "$$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Sunny+Beach+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Aparthotel Sunshine", type: "Apartment", price: "$$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Sunny+Beach+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Villa Morski", type: "Guest House", price: "$", rating: 4.1, url: "https://www.booking.com/searchresults.html?ss=Sunny+Beach+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  sozopol: [
    { name: "Hotel Bulgaria", type: "Hotel", price: "$$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Sozopol+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Old Town Guest House", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Sozopol+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Sozopol Apartments", type: "Apartment", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Sozopol+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Vila List", type: "Boutique Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Sozopol+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  koprivshtitsa: [
    { name: "Guest House Koprivshtitsa", type: "Guest House", price: "$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Koprivshtitsa+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Chavdar", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Koprivshtitsa+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Villa Kodjabashevi", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Koprivshtitsa+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  belogradchik: [
    { name: "Hotel Belogradchik", type: "Hotel", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Belogradchik+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Rock View", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Belogradchik+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Madona Guest House", type: "Guest House", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Belogradchik+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "devetashka-cave": [
    { name: "Hotel Lovech", type: "Hotel", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Lovech+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Balkan", type: "Guest House", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Lovech+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Varosha Guest House", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Lovech+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "rila-np": [
    { name: "Hotel Rila", type: "Hotel", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Rila+Mountain+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Mussala Hut", type: "Mountain Hut", price: "$", rating: 4.0, url: "https://www.booking.com/searchresults.html?ss=Rila+Mountain+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Borovets Hotel", type: "Hotel", price: "$$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Borovets+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "pirin-np": [
    { name: "Hotel Pirin", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Bansko+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vihren Hut", type: "Mountain Hut", price: "$", rating: 4.0, url: "https://www.booking.com/searchresults.html?ss=Pirin+Mountain+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Bansko Resort", type: "Resort", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Bansko+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  melnik: [
    { name: "Guest House Melnik", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Melnik+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Sintica", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Melnik+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Villa Melnik", type: "Boutique Hotel", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Melnik+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  madara: [
    { name: "Hotel Shumen", type: "Hotel", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Shumen+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Madara", type: "Guest House", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Shumen+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Riyan", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Shumen+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  tsarevets: [
    { name: "Hotel Tsarevets", type: "Hotel", price: "$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Veliko+Tarnovo+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Yantra Guest House", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Veliko+Tarnovo+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Grand Hotel", type: "Hotel", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Veliko+Tarnovo+Bulgaria&aid=2086573&no_rooms=1&group_adults=2" }
  ]
};

const thingsToDoData = {
  sofia: [
    "Visit the Alexander Nevsky Cathedral, one of the largest Eastern Orthodox cathedrals in the world",
    "Explore the Roman ruins of Serdica in the city center",
    "Ride the lift to the top of Vitosha Mountain for panoramic views",
    "Walk along Vitosha Boulevard — the main shopping and dining street",
    "Visit the National Palace of Culture and its surrounding park",
    "Tour the Boyana Church, a UNESCO World Heritage site with medieval frescoes"
  ],
  plovdiv: [
    "Explore the ancient Plovdiv Roman Amphitheater, still used for performances",
    "Wander the colorful cobblestone streets of the Old Town",
    "Discover the Kapana creative arts district with galleries and breweries",
    "Climb Nebet Tepe hill for sunset over the city",
    "Visit the Ethnographic Museum housed in a beautiful Revival mansion",
    "Explore the Plovdiv Roman Stadium ruins beneath the main square"
  ],
  "veliko-tarnovo": [
    "Tour the Tsarevets Fortress, the medieval citadel of the Second Bulgarian Empire",
    "Watch the Sound and Light show projected on the fortress walls",
    "Browse artisan shops on Samovodska Charshiya market street",
    "Visit the Museum of the Bulgarian Revival and Constituent Assembly",
    "Walk across the Stambolov Bridge to the Asenevtsi Monument",
    "Take a day trip to the nearby Arbanasi village with its old churches"
  ],
  bansko: [
    "Ski or snowboard on the slopes of the Pirin Mountains",
    "Explore the cobbled Old Town with its stone churches",
    "Try the local Bansko-style kapama stew at a traditional mehana",
    "Hike the Pirin National Park trails in summer",
    "Enjoy the Bansko Jazz Festival in August",
    "Visit the Holy Trinity Church with its impressive frescoes"
  ],
  "rila-monastery": [
    "Admire the stunning frescoes in the main church courtyard",
    "Visit the Monastery Museum including the Rafail's Cross",
    "Light a candle in the Tower of Hrelja",
    "Walk the peaceful monastery grounds and gardens",
    "Hike the short trail behind the monastery to the nearby river",
    "Combine with a visit to the Seven Rila Lakes"
  ],
  "seven-rila-lakes": [
    "Hike the full circuit visiting all seven glacial lakes (4-5 hours)",
    "Ride the chairlift from Panichishte to the trailhead",
    "Photograph the Kidney Lake and the Tear from the ridge",
    "Breathe in the fresh alpine air at over 2,000 meters altitude",
    "Visit during wildflower season in late June and July",
    "Stop at the Rila Lakes Hut for hot soup and tea"
  ],
  nessebar: [
    "Explore over 40 ancient churches in the UNESCO Old Town",
    "Walk the cobblestone streets lined with wooden Revival houses",
    "Visit the Archaeological Museum on the peninsula",
    "Swim at the beaches on either side of the old town",
    "Try fresh black mussels at a waterfront restaurant",
    "Watch sunset from the southern tip of the peninsula"
  ],
  burgas: [
    "Stroll through the Sea Garden park to the central beach",
    "Visit the Bogoridi Street pedestrian promenade",
    "Take a boat to St. Anastasia Island, the only inhabited island in the Black Sea",
    "Bird watch at the Burgas Lakes — important migration stopover",
    "Explore the Ethnographic Museum in the old water mill",
    "Enjoy the Sand Fest sculpture festival in summer"
  ],
  varna: [
    "Visit the Varna Archaeological Museum to see the 6,000-year-old gold treasure",
    "Explore the Roman Baths — the largest in the Balkans",
    "Walk the Sea Garden park to the beach",
    "Swim at the central beach or Golden Sands resort nearby",
    "Enjoy the nightlife along the harbor promenade",
    "Visit the Cathedral of the Assumption, the largest church in Varna"
  ],
  "sunny-beach": [
    "Relax on the 8 km stretch of golden sand beach",
    "Enjoy water sports including jet skiing, parasailing, and banana boats",
    "Explore the nearby Nessebar Old Town for a cultural break",
    "Visit Action Aquapark for a fun family day out",
    "Party at the beachfront bars and nightclubs",
    "Take a day trip to Sozopol or Burgas"
  ],
  sozopol: [
    "Wander the cobbled streets of the Old Town on the peninsula",
    "Swim at Harmani Beach just south of the old town",
    "Take a boat trip to St. Ivan Island for dolphin watching",
    "Visit the Apollonia Art Festival in September",
    "Photograph the wooden Revival houses and ancient churches",
    "Watch the sunset from the southern fortress wall"
  ],
  koprivshtitsa: [
    "Tour the Oslekov House and Lyutov House museums",
    "Walk the cobblestone streets across the old bridges",
    "Visit the house-museums of Bulgarian revolutionary heroes",
    "Have lunch at a traditional guesthouse with garden views",
    "Photograph the colorful National Revival architecture",
    "Visit the church with its original iconostasis"
  ],
  belogradchik: [
    "Explore the Belogradchik Fortress integrated into the rock formations",
    "Photograph the bizarre red sandstone shapes at sunset",
    "Hike the main loop trail through the rock formations",
    "Identify the named rocks — the Madonna, the Horseman, Adam and Eve",
    "Visit the nearby Magura Cave with prehistoric cave paintings",
    "Combine with a trip to the Baba Vida Fortress in Vidin"
  ],
  "devetashka-cave": [
    "Photograph the dramatic sunbeams through the cave openings",
    "Explore the enormous main chamber — 35 m wide and 30 m high",
    "Visit in late afternoon for the best light effects",
    "Observe the bat colonies from a respectful distance",
    "Bring a flashlight to explore the deeper chambers",
    "Combine with a visit to the nearby Krushuna Waterfalls"
  ],
  "rila-np": [
    "Summit Mount Musala (2,925 m) — the highest peak in Southeast Europe",
    "Hike the Seven Rila Lakes circuit — the most popular trail",
    "Visit the Rila Monastery at the park's edge",
    "Spot wildlife including brown bears, chamois, and wolves",
    "Stay overnight at one of the mountain huts for sunrise hiking",
    "Ski at the Borovets resort in the eastern part of the park"
  ],
  "pirin-np": [
    "Climb Mount Vihren (2,914 m) for stunning alpine views",
    "Hike to the Pirin Pyramid rock formations",
    "Visit the 1,300-year-old Baikusheva Mura Bosnian pine",
    "Explore the Bunderitsa Valley with its glacial lakes",
    "Photograph the turquoise waters of Popovo Lake",
    "Base yourself in Bansko for easy park access"
  ],
  melnik: [
    "Visit several wineries for Melnik red wine tastings",
    "Hike through the Melnik Earth Pyramids rock formations",
    "Explore the Rozhen Monastery, Bulgaria's second largest",
    "Taste the local Shiroka Melnishka grape variety",
    "Stay at a traditional guesthouse with wine cellar",
    "Photograph the town from the hillside viewpoint"
  ],
  madara: [
    "View the 8th-century Madara Rider rock relief from the platform",
    "Walk up to the Madara Fortress ruins above the relief",
    "Explore the cave below the cliff face",
    "Visit the Madara National Park nature trails",
    "Learn about the history at the small on-site museum",
    "Combine with a visit to the city of Shumen and its monument"
  ],
  tsarevets: [
    "Tour the reconstructed Patriarchal Cathedral with modern murals",
    "Walk the fully restored fortress walls for panoramic views",
    "Watch the Sound and Light show with laser projections",
    "Visit the Execution Rock and the medieval dungeons",
    "Climb Baldwin's Tower for the best views of Veliko Tarnovo",
    "Explore the artisan shops at the fortress entrance"
  ],
  default: [
    "Explore a local town or city center",
    "Try traditional Bulgarian cuisine at a mehana",
    "Visit a UNESCO World Heritage site nearby",
    "Sample local Bulgarian wines and rakia"
  
]
};
