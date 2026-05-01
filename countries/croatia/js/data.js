/**
 * Croatia - Tourism Data
 * Contains all destinations, restaurants, accommodations, and things to do
 */

const touristPlaces = {
  dubrovnik: {
    name: "Dubrovnik – Old Town",
    location: "Dubrovnik, Dalmatia",
    type: "UNESCO World Heritage",
    rating: 4.8,
    reviews: 45230,
    coords: [42.6403, 18.1074],
    image: "images/dubrovnik.jpg",
    description: "Dubrovnik, known as the 'Pearl of the Adriatic,' is one of the world's most stunning medieval walled cities. The entire Old Town is a UNESCO World Heritage Site, featuring remarkably preserved Gothic, Renaissance, and Baroque architecture. Walk along the 2km-long city walls for breathtaking views of the Adriatic Sea and terracotta rooftops. The city's limestone streets, marble-paved squares, and historic buildings have made it a famous filming location for Game of Thrones (King's Landing). Beyond its beauty, Dubrovnik offers a rich cultural scene, excellent seafood restaurants, and easy access to nearby islands and beaches.",
    bestTime: "April-June & September-October (avoid July-August crowds)",
    tips: "Walk the city walls early morning or late afternoon to avoid crowds and heat. Buy a Dubrovnik Card for discounts on attractions. Take the cable car to Mount Srd for panoramic views."
  },
  plitvice: {
    name: "Plitvice Lakes National Park",
    location: "Lika-Senj County",
    type: "National Park",
    rating: 4.9,
    reviews: 38750,
    coords: [44.8667, 15.6167],
    image: "images/plitvice.jpg",
    description: "Plitvice Lakes National Park is Croatia's most famous natural wonder and a UNESCO World Heritage Site. The park features 16 terraced lakes connected by a series of waterfalls, creating a magical landscape of turquoise waters cascading through lush forests. The lakes are divided into Upper and Lower Lakes, with the highest waterfall (Veliki Slap) plunging 78 meters. Wooden boardwalks wind through the park, allowing visitors to get up close to the waterfalls and lakes. The park is home to diverse wildlife including bears, wolves, and over 120 bird species. Each season offers a different experience: frozen waterfalls in winter, vibrant green in spring, crystal-clear waters in summer, and golden foliage in autumn.",
    bestTime: "May-June & September-October (pleasant weather, fewer crowds)",
    tips: "Arrive early (7-8 AM) to avoid crowds. Wear comfortable walking shoes with good grip. The full park tour takes 4-6 hours. Bring water and snacks."
  },
  split: {
    name: "Split – Diocletian's Palace",
    location: "Split, Dalmatia",
    type: "UNESCO World Heritage",
    rating: 4.7,
    reviews: 32150,
    coords: [43.5081, 16.4402],
    image: "images/split.jpg",
    description: "Split is Croatia's second-largest city and home to Diocletian's Palace, one of the world's best-preserved Roman monuments. Built in the 4th century as a retirement palace for Emperor Diocletian, the palace complex now forms the heart of Split's Old Town. The palace walls enclose a vibrant maze of narrow streets, squares, and historic buildings. Key attractions include the Peristyle (central square), the Cathedral of Saint Domnius (built on Diocletian's mausoleum), and the basement halls. Unlike most ancient ruins, Split's palace is a living city where people still reside, shop, and dine within its walls. The city also offers beautiful beaches, excellent seafood, and serves as a gateway to nearby islands.",
    bestTime: "April-June & September-October",
    tips: "Explore the palace basement halls first to understand the layout. Visit the Peristyle in the evening when it's beautifully lit. Take a day trip to nearby islands like Brac or Hvar."
  },
  zagreb: {
    name: "Zagreb – Capital City",
    location: "Zagreb, Central Croatia",
    type: "Capital City",
    rating: 4.5,
    reviews: 28900,
    coords: [45.815, 15.9819],
    image: "images/zagreb.jpg",
    description: "Zagreb, Croatia's capital and largest city, offers a perfect blend of Austro-Hungarian architecture, vibrant street life, and rich cultural heritage. The city is divided into Upper Town (Gornji Grad) and Lower Town (Donji Grad), connected by the famous funicular. Upper Town features historic sites like St. Mark's Church with its colorful tiled roof, Lotrscak Tower, and the Stone Gate. Lower Town boasts beautiful parks, museums, and the bustling Ban Jelacic Square. Zagreb is known for its excellent museums (including the Museum of Broken Relationships), vibrant cafe culture, and lively markets. The city also serves as a gateway to the Croatian countryside and is less touristy than coastal destinations.",
    bestTime: "April-October (especially May-June and September)",
    tips: "Take the funicular between Upper and Lower Town. Visit Dolac Market for fresh local produce. Explore the many museums - many are free on Mondays."
  },
  hvar: {
    name: "Hvar Island",
    location: "Hvar, Dalmatian Islands",
    type: "Island Paradise",
    rating: 4.7,
    reviews: 25600,
    coords: [43.1724, 16.441],
    image: "images/hvar.jpg",
    description: "Hvar is Croatia's most glamorous island, known for its stunning beaches, lavender fields, and vibrant nightlife. The island's main town, Hvar Town, features a beautiful harbor overlooked by a 13th-century fortress offering panoramic views. The island boasts some of Croatia's best beaches, including Dubovica Beach and the famous Pakleni Islands. Hvar is also famous for its lavender production, with fields blooming purple in July and August. The island offers excellent opportunities for sailing, swimming, and exploring secluded coves. Despite its popularity, Hvar retains a charming Mediterranean atmosphere with historic stone buildings, excellent seafood restaurants, and a relaxed island pace.",
    bestTime: "June-September (peak season), May & October for fewer crowds",
    tips: "Rent a scooter to explore the island. Visit the lavender fields in July. Take a boat trip to the Pakleni Islands. Book accommodation well in advance for summer."
  },
  krka: {
    name: "Krka National Park",
    location: "Sibenik-Knin County",
    type: "National Park",
    rating: 4.8,
    reviews: 23400,
    coords: [43.8667, 15.9833],
    image: "images/krka.jpg",
    description: "Krka National Park is renowned for its series of seven stunning waterfalls along the Krka River. The park's centerpiece is Skradinski Buk, the largest waterfall system in Croatia, with 17 waterfalls cascading over a 400-meter stretch. Unlike Plitvice, Krka allows swimming in designated areas near the waterfalls. The park also features Visovac Island with its 15th-century monastery and the historic Krka Monastery. The park's diverse ecosystems support over 800 plant species and 200 bird species. Visitors can explore the park via wooden boardwalks, hiking trails, or by boat. The park is less crowded than Plitvice and offers a more relaxed experience while still showcasing Croatia's natural beauty.",
    bestTime: "May-June & September-October",
    tips: "Swimming is allowed only in designated areas. Take the boat tour to Visovac Island. Visit early morning to avoid crowds. Combine with a visit to Sibenik."
  },
  rovinj: {
    name: "Rovinj – Old Town",
    location: "Rovinj, Istria",
    type: "Coastal Town",
    rating: 4.6,
    reviews: 19800,
    coords: [45.0812, 13.6309],
    image: "images/rovinj.jpg",
    description: "Rovinj is one of Istria's most picturesque coastal towns, characterized by its Venetian-style architecture and stunning Old Town perched on a peninsula. The town's narrow cobblestone streets wind between colorful houses, leading up to the hilltop Church of St. Euphemia, which offers panoramic views of the Adriatic. Rovinj's charming harbor is lined with fishing boats and yachts, while the surrounding area features beautiful beaches and the protected Zlatni Rt (Golden Cape) forest park. The town has a strong Italian influence, reflected in its cuisine, architecture, and bilingual signs. Rovinj is less touristy than Dubrovnik but equally beautiful, offering excellent seafood, art galleries, and a relaxed Mediterranean atmosphere.",
    bestTime: "April-June & September-October",
    tips: "Climb to St. Euphemia Church for the best views. Explore the Old Town early morning or evening. Visit the nearby islands of St. Andrew and St. Catherine."
  },
  zadar: {
    name: "Zadar – Sea Organ",
    location: "Zadar, Dalmatia",
    type: "Coastal City",
    rating: 4.5,
    reviews: 18500,
    coords: [44.1194, 15.2366],
    image: "images/zadar.jpg",
    description: "Zadar is a historic coastal city known for its unique attractions and rich Roman heritage. The city's most famous feature is the Sea Organ, an architectural sound art installation that plays music created by the movement of sea waves through underwater pipes. Nearby is the Monument to the Sun, a circular solar-powered art installation that creates a light show at sunset. Zadar's Old Town features Roman ruins, medieval churches, and Venetian architecture. Key attractions include the Roman Forum, St. Donatus Church, and the fortified city gates. The city is also known for its excellent maraschino cherry liqueur and serves as a gateway to the nearby Kornati Islands National Park. Zadar offers a perfect blend of history, art, and coastal beauty.",
    bestTime: "April-June & September-October",
    tips: "Visit the Sea Organ at sunset for the best experience. Try the local maraschino cherry liqueur. Take a day trip to the Kornati Islands."
  },
  korcula: {
    name: "Korcula – Old Town",
    location: "Korcula Island, Dalmatia",
    type: "Island Town",
    rating: 4.6,
    reviews: 17200,
    coords: [42.9583, 16.7167],
    image: "images/korcula.jpg",
    description: "Korcula Town is often called 'Little Dubrovnik' due to its medieval walls and well-preserved Old Town. The town is believed to be the birthplace of Marco Polo, and his alleged house is now a museum. Korcula's layout features a unique fishbone pattern designed to maximize protection from sea winds and provide shade. The town boasts beautiful Gothic and Renaissance architecture, including the Cathedral of St. Mark and the 15th-century Revelin Tower. The island is known for its excellent white wines (Grk and Posip) and traditional Moreska sword dance. Korcula offers a more authentic and less crowded experience than Dubrovnik, with beautiful beaches, excellent seafood, and a rich cultural heritage.",
    bestTime: "May-June & September-October",
    tips: "Visit the Marco Polo Museum. Try the local white wines. Watch the Moreska sword dance if visiting in summer. Take a boat trip to nearby islands."
  },
  pula: {
    name: "Pula – Roman Arena",
    location: "Pula, Istria",
    type: "Historic City",
    rating: 4.5,
    reviews: 16500,
    coords: [44.8688, 13.8516],
    image: "images/pula.jpg",
    description: "Pula is home to one of the world's best-preserved Roman arenas, a stunning testament to the city's ancient past. The Pula Arena, built in the 1st century AD, is one of the six largest Roman arenas still standing and hosts concerts and events today. Beyond the arena, Pula offers a wealth of Roman ruins including the Temple of Augustus, the Arch of the Sergii, and the Twin Gates. The city's Old Town features charming narrow streets, historic buildings, and beautiful views of the Adriatic. Pula is less touristy than other Croatian destinations but offers excellent historical sites, beautiful beaches nearby, and serves as a gateway to the Brijuni Islands National Park. The city also has a vibrant cultural scene and excellent seafood restaurants.",
    bestTime: "April-June & September-October",
    tips: "Visit the arena at night when it's beautifully lit. Explore the Roman Forum and Temple of Augustus. Take a day trip to the Brijuni Islands."
  },
  motovun: {
    name: "Motovun – Hilltop Town",
    location: "Motovun, Istria",
    type: "Hilltop Town",
    rating: 4.7,
    reviews: 14200,
    coords: [45.3367, 13.8833],
    image: "images/motovun.jpg",
    description: "Motovun is a stunning medieval hilltop town in the heart of Istria, perched on a 277-meter hill overlooking the Mirna River valley. The town is famous for its well-preserved medieval walls, narrow cobblestone streets, and panoramic views of the surrounding countryside. Motovun is known for its truffles, particularly the highly prized white truffles found in the nearby Motovun Forest. The town hosts the annual Motovun Film Festival, attracting filmmakers and visitors from around the world. The climb to the top is rewarded with breathtaking views of the Istrian landscape, vineyards, and olive groves. Motovun offers a perfect blend of history, gastronomy, and natural beauty, making it a must-visit destination in Istria.",
    bestTime: "April-June & September-October",
    tips: "Climb the bell tower for the best views. Try truffle dishes at local restaurants. Visit during the Motovun Film Festival (late July) for a unique experience."
  },
  mljet: {
    name: "Mljet National Park",
    location: "Mljet Island, Dalmatia",
    type: "National Park",
    rating: 4.8,
    reviews: 13800,
    coords: [42.75, 17.55],
    image: "images/mljet.jpg",
    description: "Mljet National Park covers the western third of Mljet Island and is one of Croatia's most pristine natural areas. The park features two stunning saltwater lakes, Veliko Jezero (Great Lake) and Malo Jezero (Small Lake), connected by a narrow channel. In the middle of Veliko Jezero lies the tiny islet of St. Mary with its 12th-century Benedictine monastery. The park is covered in dense Mediterranean forest, home to diverse wildlife including the rare Mljet snake. Visitors can explore the park by cycling, hiking, or kayaking on the lakes. Mljet is less developed and less crowded than other Croatian destinations, offering a peaceful escape into nature. The island also has beautiful beaches and excellent seafood restaurants.",
    bestTime: "May-June & September-October",
    tips: "Rent a bike to explore the park. Take a boat to St. Mary Island. Swim in the saltwater lakes. Stay overnight to experience the park in peace."
  },
  opatija: {
    name: "Opatija Riviera",
    location: "Opatija, Kvarner Gulf",
    type: "Coastal Resort",
    rating: 4.5,
    reviews: 12500,
    coords: [45.34, 14.3083],
    image: "images/opatija.jpg",
    description: "Opatija is Croatia's oldest and most elegant seaside resort town, known as the 'Nice of the Adriatic.' The town's 12-kilometer coastal promenade (Lungomare) connects Opatija with neighboring towns and offers stunning sea views. Opatija's architecture reflects its Austro-Hungarian past, with beautiful villas, hotels, and the iconic Angiolina Park. The town has been a popular destination since the 19th century, attracting European royalty and aristocracy. Today, Opatija offers a perfect blend of historic charm, beautiful beaches, excellent restaurants, and a relaxed atmosphere. The town serves as a gateway to the Kvarner Gulf islands and is less crowded than other Croatian coastal destinations.",
    bestTime: "April-June & September-October",
    tips: "Walk the entire Lungomare promenade. Visit the beautiful Villa Angiolina. Try local seafood at waterfront restaurants. Take day trips to nearby islands."
  },
  sibenik: {
    name: "Sibenik – Cathedral",
    location: "Sibenik, Dalmatia",
    type: "Historic City",
    rating: 4.4,
    reviews: 11800,
    coords: [43.7333, 15.8933],
    image: "images/sibenik.jpg",
    description: "Sibenik is a historic coastal city known for its stunning UNESCO-listed Cathedral of St. James, a masterpiece of Renaissance architecture built entirely of stone without any wooden supports. The city's Old Town features narrow medieval streets, beautiful squares, and four historic fortresses overlooking the city and sea. Sibenik is also the gateway to Krka National Park and the Kornati Islands. The city has a rich maritime history and was an important Renaissance center. Today, Sibenik offers excellent seafood, beautiful beaches nearby, and a more authentic Croatian experience than more touristy destinations. The city's cultural scene includes the International Children's Festival and various summer events.",
    bestTime: "April-June & September-October",
    tips: "Visit the Cathedral of St. James (UNESCO site). Explore the four fortresses. Take a day trip to Krka National Park. Try local seafood at the waterfront."
  },
  trogi: {
    name: "Trogir – UNESCO Town",
    location: "Trogir, Dalmatia",
    type: "UNESCO World Heritage",
    rating: 4.6,
    reviews: 11200,
    coords: [43.5311, 16.2503],
    image: "images/trogi.jpg",
    description: "Trogir is a beautifully preserved medieval town on a small island connected to the mainland and the island of Ciovo by bridges. The entire Old Town is a UNESCO World Heritage Site, featuring remarkable examples of Romanesque, Gothic, Renaissance, and Baroque architecture. The town's centerpiece is the Cathedral of St. Lawrence with its famous Radovan Portal, considered one of the finest examples of medieval sculpture in Europe. Trogir's narrow streets, beautiful squares, and historic buildings create a magical atmosphere. The town is less crowded than nearby Split but offers excellent restaurants, beautiful beaches, and easy access to nearby islands. Trogir is also home to the Kamerlengo Fortress, offering panoramic views of the area.",
    bestTime: "April-June & September-October",
    tips: "Explore the Radovan Portal at the cathedral. Walk the town walls. Visit the Kamerlengo Fortress for views. Take a boat trip to nearby islands."
  },
  ston: {
    name: "Ston – Walls & Oysters",
    location: "Ston, Peljesac Peninsula",
    type: "Historic Town",
    rating: 4.5,
    reviews: 10500,
    coords: [42.8333, 17.7],
    image: "images/ston.jpg",
    description: "Ston is famous for two things: its impressive medieval walls and its world-renowned oysters. The Ston Walls, stretching over 5 kilometers, are the longest fortification system in Europe after the Great Wall of China. The walls connect Ston with neighboring Mali Ston, offering stunning views of the surrounding countryside and sea. The area is also famous for its oyster farms, producing some of the best oysters in the world. Ston is located on the Peljesac Peninsula, known for its excellent red wines (Dingac and Postup). The town offers a unique combination of history, gastronomy, and natural beauty. Visitors can walk the walls, taste fresh oysters, and explore the beautiful surrounding countryside.",
    bestTime: "April-June & September-October",
    tips: "Walk the Ston Walls (takes 2-3 hours). Try fresh oysters at local restaurants. Visit nearby Mali Ston. Combine with wine tasting on the Peljesac Peninsula."
  },
  vis: {
    name: "Vis Island",
    location: "Vis Island, Dalmatian Islands",
    type: "Remote Island",
    rating: 4.7,
    reviews: 9800,
    coords: [43.4167, 16.2],
    image: "images/vis.jpg",
    description: "Vis is Croatia's most remote inhabited island, located farthest from the mainland. The island was closed to foreigners until 1989, preserving its authentic character and natural beauty. Vis Town features beautiful Venetian architecture and a charming harbor, while Komiza on the opposite side is a traditional fishing village. The island is famous for its stunning beaches, including Stiniva Beach (one of Europe's best), and the Blue Cave on nearby Bisevo Island. Vis offers excellent opportunities for sailing, diving, and exploring secluded coves. The island's cuisine is exceptional, particularly its seafood and local wines. Vis provides a perfect escape from the crowds, offering a glimpse into traditional island life.",
    bestTime: "June-September",
    tips: "Take a boat trip to the Blue Cave on Bisevo Island. Visit Stiniva Beach (accessible by boat or hike). Try local seafood and wines. Rent a scooter to explore the island."
  },
  lokrum: {
    name: "Lokrum Island",
    location: "Lokrum Island, near Dubrovnik",
    type: "Nature Reserve",
    rating: 4.6,
    reviews: 9200,
    coords: [42.6283, 18.1167],
    image: "images/lokrum.jpg",
    description: "Lokrum Island is a beautiful nature reserve just a 15-minute boat ride from Dubrovnik. The island is covered in dense Mediterranean forest and features beautiful walking trails, secluded beaches, and historic sites. Key attractions include the Benedictine monastery ruins, a small saltwater lake called the Dead Sea, and a fort offering panoramic views of Dubrovnik. The island is home to peacocks that roam freely and was a filming location for Game of Thrones (Qarth). Lokrum offers a peaceful escape from Dubrovnik's crowds, with excellent swimming spots, beautiful nature, and stunning views. The island is car-free, making it perfect for walking and relaxation.",
    bestTime: "May-October",
    tips: "Take the ferry from Dubrovnik Old Port (runs frequently). Bring swimming gear and water. Visit the fort for the best views. Watch out for peacocks!"
  },
  groznjan: {
    name: "Groznjan – Art Town",
    location: "Groznjan, Istria",
    type: "Artistic Town",
    rating: 4.5,
    reviews: 8500,
    coords: [45.3833, 13.7667],
    image: "images/groznjan.jpg",
    description: "Groznjan is a picturesque hilltop town known as the 'Town of Artists' due to its vibrant arts scene. The town's narrow streets are lined with art galleries, studios, and workshops, making it a haven for artists and art lovers. Groznjan's medieval architecture and stunning views of the Istrian countryside create a perfect setting for artistic inspiration. The town hosts numerous art exhibitions, music festivals, and cultural events throughout the year. Despite its small size, Groznjan offers excellent restaurants, beautiful views, and a unique cultural experience. The town is less touristy than other Istrian destinations but equally charming, offering a perfect blend of art, history, and natural beauty.",
    bestTime: "April-June & September-October",
    tips: "Visit the many art galleries and studios. Attend a music festival or cultural event. Enjoy the panoramic views from the town walls. Try local Istrian cuisine."
  }
};

const restaurantsData = {
  dubrovnik: [
    {
      name: "Konavoski Dvori",
      type: "Traditional Croatian",
      rating: 4.7,
      specialty: "Peka & Lamb",
      url: "https://www.google.com/maps/search/Konavoski+Dvori+Dubrovnik"
    },
    {
      name: "Proto",
      type: "Seafood",
      rating: 4.6,
      specialty: "Oysters & Fish",
      url: "https://www.google.com/maps/search/Proto+Restaurant+Dubrovnik"
    },
    {
      name: "Nautika",
      type: "Fine Dining",
      rating: 4.5,
      specialty: "Mediterranean",
      url: "https://www.google.com/maps/search/Nautika+Dubrovnik"
    },
    {
      name: "Meastra",
      type: "Italian",
      rating: 4.4,
      specialty: "Pasta & Pizza",
      url: "https://www.google.com/maps/search/Meastra+Dubrovnik"
    }
  ],
  plitvice: [
    {
      name: "Licka Kuca",
      type: "Traditional Croatian",
      rating: 4.5,
      specialty: "Lika Cuisine",
      url: "https://www.google.com/maps/search/Licka+Kuca+Plitvice"
    },
    {
      name: "Polana",
      type: "International",
      rating: 4.4,
      specialty: "Grilled Meats",
      url: "https://www.google.com/maps/search/Polana+Restaurant+Plitvice"
    },
    {
      name: "Grabovac",
      type: "Traditional",
      rating: 4.3,
      specialty: "Local Specialties",
      url: "https://www.google.com/maps/search/Grabovac+Plitvice"
    }
  ],
  split: [
    {
      name: "Uje Oil Bar",
      type: "Mediterranean",
      rating: 4.6,
      specialty: "Olive Oil Dishes",
      url: "https://www.google.com/maps/search/Uje+Oil+Bar+Split"
    },
    {
      name: "Zrno Soli",
      type: "Seafood",
      rating: 4.5,
      specialty: "Fresh Fish",
      url: "https://www.google.com/maps/search/Zrno+Soli+Split"
    },
    {
      name: "Bajamonti",
      type: "Traditional",
      rating: 4.4,
      specialty: "Dalmatian Cuisine",
      url: "https://www.google.com/maps/search/Bajamonti+Split"
    },
    {
      name: "Mazzgoon",
      type: "Pizza",
      rating: 4.3,
      specialty: "Wood-fired Pizza",
      url: "https://www.google.com/maps/search/Mazzgoon+Split"
    }
  ],
  zagreb: [
    {
      name: "Vinodol",
      type: "Traditional Croatian",
      rating: 4.5,
      specialty: "Roast Meats",
      url: "https://www.google.com/maps/search/Vinodol+Zagreb"
    },
    {
      name: "Noel",
      type: "Steakhouse",
      rating: 4.6,
      specialty: "Steaks",
      url: "https://www.google.com/maps/search/Noel+Zagreb"
    },
    {
      name: "Bistro Apetit",
      type: "Modern Croatian",
      rating: 4.4,
      specialty: "Fusion",
      url: "https://www.google.com/maps/search/Bistro+Apetit+Zagreb"
    },
    {
      name: "Pivnica Mali Medo",
      type: "Brewery",
      rating: 4.3,
      specialty: "Craft Beer",
      url: "https://www.google.com/maps/search/Pivnica+Mali+Medo+Zagreb"
    }
  ],
  hvar: [
    {
      name: "Gariful",
      type: "Seafood",
      rating: 4.7,
      specialty: "Lobster & Fish",
      url: "https://www.google.com/maps/search/Gariful+Hvar"
    },
    {
      name: "Macondo",
      type: "Mediterranean",
      rating: 4.5,
      specialty: "Grilled Fish",
      url: "https://www.google.com/maps/search/Macondo+Hvar"
    },
    {
      name: "Dalmatino",
      type: "Traditional",
      rating: 4.4,
      specialty: "Dalmatian Cuisine",
      url: "https://www.google.com/maps/search/Dalmatino+Hvar"
    },
    {
      name: "Hula Hula",
      type: "Beach Bar",
      rating: 4.3,
      specialty: "Cocktails & Snacks",
      url: "https://www.google.com/maps/search/Hula+Hula+Hvar"
    }
  ],
  krka: [
    {
      name: "Pansion Vrelo",
      type: "Traditional",
      rating: 4.4,
      specialty: "Local Cuisine",
      url: "https://www.google.com/maps/search/Pansion+Vrelo+Krka"
    },
    {
      name: "Restoran Skradinski Buk",
      type: "International",
      rating: 4.3,
      specialty: "Grilled Meats",
      url: "https://www.google.com/maps/search/Restoran+Skradinski+Buk"
    },
    {
      name: "Konoba Krka",
      type: "Traditional",
      rating: 4.2,
      specialty: "Croatian Specialties",
      url: "https://www.google.com/maps/search/Konoba+Krka"
    }
  ],
  rovinj: [
    {
      name: "Monte",
      type: "Seafood",
      rating: 4.6,
      specialty: "Fresh Fish",
      url: "https://www.google.com/maps/search/Monte+Rovinj"
    },
    {
      name: "Villa Andrea",
      type: "Italian",
      rating: 4.5,
      specialty: "Pasta & Risotto",
      url: "https://www.google.com/maps/search/Villa+Andrea+Rovinj"
    },
    {
      name: "La Puntulina",
      type: "Seafood",
      rating: 4.4,
      specialty: "Mediterranean",
      url: "https://www.google.com/maps/search/La+Puntulina+Rovinj"
    },
    {
      name: "Agave",
      type: "Modern Croatian",
      rating: 4.3,
      specialty: "Fusion",
      url: "https://www.google.com/maps/search/Agave+Rovinj"
    }
  ],
  zadar: [
    {
      name: "Kornat",
      type: "Seafood",
      rating: 4.5,
      specialty: "Fresh Fish",
      url: "https://www.google.com/maps/search/Kornat+Zadar"
    },
    {
      name: "Brasserie on the Roof",
      type: "International",
      rating: 4.4,
      specialty: "Modern European",
      url: "https://www.google.com/maps/search/Brasserie+on+the+Roof+Zadar"
    },
    {
      name: "Pet Bunara",
      type: "Traditional",
      rating: 4.3,
      specialty: "Dalmatian Cuisine",
      url: "https://www.google.com/maps/search/Pet+Bunara+Zadar"
    },
    {
      name: "Fosa",
      type: "Seafood",
      rating: 4.2,
      specialty: "Grilled Fish",
      url: "https://www.google.com/maps/search/Fosa+Zadar"
    }
  ],
  korcula: [
    {
      name: "Aterina",
      type: "Seafood",
      rating: 4.6,
      specialty: "Fresh Fish",
      url: "https://www.google.com/maps/search/Aterina+Korcula"
    },
    {
      name: "Konoba Maha",
      type: "Traditional",
      rating: 4.5,
      specialty: "Dalmatian Cuisine",
      url: "https://www.google.com/maps/search/Konoba+Maha+Korcula"
    },
    {
      name: "LD Restaurant",
      type: "Modern Croatian",
      rating: 4.4,
      specialty: "Fusion",
      url: "https://www.google.com/maps/search/LD+Restaurant+Korcula"
    },
    {
      name: "Adio Mare",
      type: "Seafood",
      rating: 4.3,
      specialty: "Mediterranean",
      url: "https://www.google.com/maps/search/Adio+Mare+Korcula"
    }
  ],
  pula: [
    {
      name: "Bistro Sveti Nikola",
      type: "Seafood",
      rating: 4.5,
      specialty: "Fresh Fish",
      url: "https://www.google.com/maps/search/Bistro+Sveti+Nikola+Pula"
    },
    {
      name: "Vodnjanka",
      type: "Traditional",
      rating: 4.4,
      specialty: "Istrian Cuisine",
      url: "https://www.google.com/maps/search/Vodnjanka+Pula"
    },
    {
      name: "Amfiteatar",
      type: "International",
      rating: 4.3,
      specialty: "Grilled Meats",
      url: "https://www.google.com/maps/search/Amfiteatar+Pula"
    },
    {
      name: "Konoba Batelina",
      type: "Traditional",
      rating: 4.2,
      specialty: "Local Specialties",
      url: "https://www.google.com/maps/search/Konoba+Batelina+Pula"
    }
  ],
  motovun: [
    {
      name: "Konoba Mota",
      type: "Traditional",
      rating: 4.5,
      specialty: "Truffle Dishes",
      url: "https://www.google.com/maps/search/Konoba+Mota+Motovun"
    },
    {
      name: "Gastromotovun",
      type: "Modern Croatian",
      rating: 4.4,
      specialty: "Fusion",
      url: "https://www.google.com/maps/search/Gastromotovun"
    },
    {
      name: "Pod priko",
      type: "Traditional",
      rating: 4.3,
      specialty: "Istrian Cuisine",
      url: "https://www.google.com/maps/search/Pod+priko+Motovun"
    }
  ],
  mljet: [
    {
      name: "Konoba Odisej",
      type: "Traditional",
      rating: 4.4,
      specialty: "Seafood",
      url: "https://www.google.com/maps/search/Konoba+Odisej+Mljet"
    },
    {
      name: "Restoran Mljet",
      type: "International",
      rating: 4.3,
      specialty: "Grilled Meats",
      url: "https://www.google.com/maps/search/Restoran+Mljet"
    },
    {
      name: "Konoba Diana",
      type: "Traditional",
      rating: 4.2,
      specialty: "Local Specialties",
      url: "https://www.google.com/maps/search/Konoba+Diana+Mljet"
    }
  ],
  opatija: [
    {
      name: "Bevanda",
      type: "Seafood",
      rating: 4.6,
      specialty: "Fresh Fish",
      url: "https://www.google.com/maps/search/Bevanda+Opatija"
    },
    {
      name: "Kukuriku",
      type: "Traditional",
      rating: 4.5,
      specialty: "Croatian Cuisine",
      url: "https://www.google.com/maps/search/Kukuriku+Opatija"
    },
    {
      name: "Ruzmarin",
      type: "Mediterranean",
      rating: 4.4,
      specialty: "Grilled Fish",
      url: "https://www.google.com/maps/search/Ruzmarin+Opatija"
    },
    {
      name: "Kamencica",
      type: "Traditional",
      rating: 4.3,
      specialty: "Local Specialties",
      url: "https://www.google.com/maps/search/Kamencica+Opatija"
    }
  ],
  sibenik: [
    {
      name: "Pelegrini",
      type: "Modern Croatian",
      rating: 4.6,
      specialty: "Fusion",
      url: "https://www.google.com/maps/search/Pelegrini+Sibenik"
    },
    {
      name: "Konoba Toni",
      type: "Traditional",
      rating: 4.5,
      specialty: "Dalmatian Cuisine",
      url: "https://www.google.com/maps/search/Konoba+Toni+Sibenik"
    },
    {
      name: "Villa Andrea",
      type: "Seafood",
      rating: 4.4,
      specialty: "Fresh Fish",
      url: "https://www.google.com/maps/search/Villa+Andrea+Sibenik"
    },
    {
      name: "Konoba Dalmatino",
      type: "Traditional",
      rating: 4.3,
      specialty: "Local Specialties",
      url: "https://www.google.com/maps/search/Konoba+Dalmatino+Sibenik"
    }
  ],
  trogi: [
    {
      name: "Trs",
      type: "Seafood",
      rating: 4.5,
      specialty: "Fresh Fish",
      url: "https://www.google.com/maps/search/Trs+Trogir"
    },
    {
      name: "Konoba Boba",
      type: "Traditional",
      rating: 4.4,
      specialty: "Dalmatian Cuisine",
      url: "https://www.google.com/maps/search/Konoba+Boba+Trogir"
    },
    {
      name: "Camaro",
      type: "Mediterranean",
      rating: 4.3,
      specialty: "Grilled Fish",
      url: "https://www.google.com/maps/search/Camaro+Trogir"
    },
    {
      name: "Don Dino",
      type: "Italian",
      rating: 4.2,
      specialty: "Pasta & Pizza",
      url: "https://www.google.com/maps/search/Don+Dino+Trogir"
    }
  ],
  ston: [
    {
      name: "Kapetanova Kuca",
      type: "Seafood",
      rating: 4.6,
      specialty: "Oysters & Fish",
      url: "https://www.google.com/maps/search/Kapetanova+Kuca+Ston"
    },
    {
      name: "Bota Sare",
      type: "Traditional",
      rating: 4.5,
      specialty: "Oysters & Wine",
      url: "https://www.google.com/maps/search/Bota+Sare+Ston"
    },
    {
      name: "Konoba Veliki Majstor",
      type: "Traditional",
      rating: 4.4,
      specialty: "Local Specialties",
      url: "https://www.google.com/maps/search/Konoba+Veliki+Majstor+Ston"
    }
  ],
  vis: [
    {
      name: "Jastozera",
      type: "Seafood",
      rating: 4.7,
      specialty: "Lobster & Fish",
      url: "https://www.google.com/maps/search/Jastozera+Vis"
    },
    {
      name: "Konoba Vatrica",
      type: "Traditional",
      rating: 4.5,
      specialty: "Local Cuisine",
      url: "https://www.google.com/maps/search/Konoba+Vatrica+Vis"
    },
    {
      name: "Pojoda",
      type: "Seafood",
      rating: 4.4,
      specialty: "Fresh Fish",
      url: "https://www.google.com/maps/search/Pojoda+Vis"
    },
    {
      name: "Konoba Bako",
      type: "Traditional",
      rating: 4.3,
      specialty: "Dalmatian Cuisine",
      url: "https://www.google.com/maps/search/Konoba+Bako+Vis"
    }
  ],
  lokrum: [
    {
      name: "Lokrum Restaurant",
      type: "International",
      rating: 4.3,
      specialty: "Grilled Meats",
      url: "https://www.google.com/maps/search/Lokrum+Restaurant"
    },
    {
      name: "Portobello",
      type: "Mediterranean",
      rating: 4.2,
      specialty: "Light Meals",
      url: "https://www.google.com/maps/search/Portobello+Lokrum"
    }
  ],
  groznjan: [
    {
      name: "Konoba Groznjan",
      type: "Traditional",
      rating: 4.4,
      specialty: "Istrian Cuisine",
      url: "https://www.google.com/maps/search/Konoba+Groznjan"
    },
    {
      name: "Astria",
      type: "Modern Croatian",
      rating: 4.3,
      specialty: "Fusion",
      url: "https://www.google.com/maps/search/Astria+Groznjan"
    },
    {
      name: "Villa Meneghetti",
      type: "Fine Dining",
      rating: 4.2,
      specialty: "Gourmet",
      url: "https://www.google.com/maps/search/Villa+Meneghetti+Groznjan"
    }
  ],
  default: [
    {
      name: "Local Konoba",
      type: "Traditional Croatian",
      rating: 4.2,
      specialty: "Local Cuisine",
      url: "https://www.google.com/maps/search/Local+Konoba+Croatia"
    },
    {
      name: "Seafood Restaurant",
      type: "Seafood",
      rating: 4.1,
      specialty: "Fresh Fish",
      url: "https://www.google.com/maps/search/Seafood+Restaurant+Croatia"
    },
    {
      name: "Pizzeria",
      type: "Italian",
      rating: 4,
      specialty: "Pizza and Pasta",
      url: "https://www.google.com/maps/search/Pizzeria+Croatia"
    }
  ]
,
  "default": [
    { name: "Konoba", type: "Traditional", specialty: "Dalmatian Cuisine", url: "https://www.google.com/maps/search/?api=1&query=Konoba+Croatia", rating: 4.5 },
    { name: "Seafood Restaurant", type: "Seafood", specialty: "Fresh Adriatic Fish", url: "https://www.google.com/maps/search/?api=1&query=Seafood+Restaurant+Croatia", rating: 4.6 },
    { name: "Wine Bar", type: "Wine Bar", specialty: "Croatian Wines", url: "https://www.google.com/maps/search/?api=1&query=Wine+Bar+Croatia", rating: 4.4 },
    { name: "Café", type: "Café", specialty: "Coffee & Desserts", url: "https://www.google.com/maps/search/?api=1&query=Cafe+Croatia", rating: 4.3 }
  ]
};;
const accommodationsData = {
  dubrovnik: [
    {
      name: "Hotel Excelsior",
      type: "Luxury Hotel",
      rating: 4.8,
      price: "$$$",
      url: "https://www.booking.com/searchresults.html?ss=Dubrovnik+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Hilton Imperial Dubrovnik",
      type: "Luxury Hotel",
      rating: 4.7,
      price: "$$$",
      url: "https://www.booking.com/searchresults.html?ss=Dubrovnik+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Hotel Kompas",
      type: "Mid-range Hotel",
      rating: 4.5,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Dubrovnik+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Villa Orsula",
      type: "Boutique Hotel",
      rating: 4.6,
      price: "$$$",
      url: "https://www.booking.com/searchresults.html?ss=Dubrovnik+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Old Town Hostel",
      type: "Hostel",
      rating: 4.4,
      price: "$",
      url: "https://www.booking.com/searchresults.html?ss=Dubrovnik+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    }
  ],
  plitvice: [
    {
      name: "Hotel Plitvice",
      type: "Mid-range Hotel",
      rating: 4.5,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Plitvice+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Hotel Jezero",
      type: "Mid-range Hotel",
      rating: 4.4,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Plitvice+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Ethno House Plitvice",
      type: "Guesthouse",
      rating: 4.6,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Plitvice+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "House Plitvicka Jezer",
      type: "Apartment",
      rating: 4.3,
      price: "$",
      url: "https://www.booking.com/searchresults.html?ss=Plitvice+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    }
  ],
  split: [
    {
      name: "Hotel Park Split",
      type: "Luxury Hotel",
      rating: 4.7,
      price: "$$$",
      url: "https://www.booking.com/searchresults.html?ss=Split+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Radisson Blu Resort",
      type: "Luxury Hotel",
      rating: 4.6,
      price: "$$$",
      url: "https://www.booking.com/searchresults.html?ss=Split+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Hotel Diocletian",
      type: "Boutique Hotel",
      rating: 4.5,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Split+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Villa Spalato",
      type: "Guesthouse",
      rating: 4.4,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Split+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Split Hostel",
      type: "Hostel",
      rating: 4.3,
      price: "$",
      url: "https://www.booking.com/searchresults.html?ss=Split+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    }
  ],
  zagreb: [
    {
      name: "Esplanade Zagreb Hotel",
      type: "Luxury Hotel",
      rating: 4.7,
      price: "$$$",
      url: "https://www.booking.com/searchresults.html?ss=Zagreb+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Hotel Westin",
      type: "Luxury Hotel",
      rating: 4.6,
      price: "$$$",
      url: "https://www.booking.com/searchresults.html?ss=Zagreb+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Hotel Jagerhorn",
      type: "Boutique Hotel",
      rating: 4.5,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Zagreb+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Swanky Mint Hostel",
      type: "Hostel",
      rating: 4.4,
      price: "$",
      url: "https://www.booking.com/searchresults.html?ss=Zagreb+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    }
  ],
  hvar: [
    {
      name: "Amfora Hvar Grand Beach Resort",
      type: "Luxury Hotel",
      rating: 4.6,
      price: "$$$",
      url: "https://www.booking.com/searchresults.html?ss=Hvar+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Adriana Hvar Spa Hotel",
      type: "Luxury Hotel",
      rating: 4.5,
      price: "$$$",
      url: "https://www.booking.com/searchresults.html?ss=Hvar+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Hotel Suncani Hvar",
      type: "Mid-range Hotel",
      rating: 4.4,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Hvar+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Hvar Hostel",
      type: "Hostel",
      rating: 4.3,
      price: "$",
      url: "https://www.booking.com/searchresults.html?ss=Hvar+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    }
  ],
  krka: [
    {
      name: "Hotel Krka",
      type: "Mid-range Hotel",
      rating: 4.4,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Krka+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Villa Lovric",
      type: "Guesthouse",
      rating: 4.3,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Krka+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Apartments Krka",
      type: "Apartment",
      rating: 4.2,
      price: "$",
      url: "https://www.booking.com/searchresults.html?ss=Krka+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    }
  ],
  rovinj: [
    {
      name: "Hotel Lone",
      type: "Luxury Hotel",
      rating: 4.6,
      price: "$$$",
      url: "https://www.booking.com/searchresults.html?ss=Rovinj+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Hotel Monte Mulini",
      type: "Luxury Hotel",
      rating: 4.5,
      price: "$$$",
      url: "https://www.booking.com/searchresults.html?ss=Rovinj+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Villa Eugenia",
      type: "Boutique Hotel",
      rating: 4.4,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Rovinj+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Hostel Rovinj",
      type: "Hostel",
      rating: 4.3,
      price: "$",
      url: "https://www.booking.com/searchresults.html?ss=Rovinj+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    }
  ],
  zadar: [
    {
      name: "Hotel Bastion",
      type: "Luxury Hotel",
      rating: 4.6,
      price: "$$$",
      url: "https://www.booking.com/searchresults.html?ss=Zadar+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Hotel Kolovare",
      type: "Mid-range Hotel",
      rating: 4.5,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Zadar+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Falkensteiner Hotel Iadera",
      type: "Luxury Hotel",
      rating: 4.4,
      price: "$$$",
      url: "https://www.booking.com/searchresults.html?ss=Zadar+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Hostel Forum",
      type: "Hostel",
      rating: 4.3,
      price: "$",
      url: "https://www.booking.com/searchresults.html?ss=Zadar+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    }
  ],
  korcula: [
    {
      name: "Hotel Korcula",
      type: "Mid-range Hotel",
      rating: 4.5,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Korcula+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Aminess Korcula Beach Resort",
      type: "Luxury Hotel",
      rating: 4.4,
      price: "$$$",
      url: "https://www.booking.com/searchresults.html?ss=Korcula+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Guesthouse Korcula",
      type: "Guesthouse",
      rating: 4.3,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Korcula+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Korcula Hostel",
      type: "Hostel",
      rating: 4.2,
      price: "$",
      url: "https://www.booking.com/searchresults.html?ss=Korcula+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    }
  ],
  pula: [
    {
      name: "Hotel Scaletta",
      type: "Luxury Hotel",
      rating: 4.5,
      price: "$$$",
      url: "https://www.booking.com/searchresults.html?ss=Pula+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Hotel Galija",
      type: "Mid-range Hotel",
      rating: 4.4,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Pula+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Villa Pula",
      type: "Guesthouse",
      rating: 4.3,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Pula+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Pula Hostel",
      type: "Hostel",
      rating: 4.2,
      price: "$",
      url: "https://www.booking.com/searchresults.html?ss=Pula+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    }
  ],
  motovun: [
    {
      name: "Hotel Kastel",
      type: "Luxury Hotel",
      rating: 4.6,
      price: "$$$",
      url: "https://www.booking.com/searchresults.html?ss=Motovun+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Villa Motovun",
      type: "Boutique Hotel",
      rating: 4.5,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Motovun+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Guesthouse Motovun",
      type: "Guesthouse",
      rating: 4.4,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Motovun+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    }
  ],
  mljet: [
    {
      name: "Hotel Odisej Mljet",
      type: "Mid-range Hotel",
      rating: 4.4,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Mljet+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Villa Mljet",
      type: "Guesthouse",
      rating: 4.3,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Mljet+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Apartments Mljet",
      type: "Apartment",
      rating: 4.2,
      price: "$",
      url: "https://www.booking.com/searchresults.html?ss=Mljet+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    }
  ],
  opatija: [
    {
      name: "Hotel Milenij",
      type: "Luxury Hotel",
      rating: 4.6,
      price: "$$$",
      url: "https://www.booking.com/searchresults.html?ss=Opatija+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Hotel Bristol",
      type: "Luxury Hotel",
      rating: 4.5,
      price: "$$$",
      url: "https://www.booking.com/searchresults.html?ss=Opatija+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Hotel Admiral",
      type: "Mid-range Hotel",
      rating: 4.4,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Opatija+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Opatija Hostel",
      type: "Hostel",
      rating: 4.3,
      price: "$",
      url: "https://www.booking.com/searchresults.html?ss=Opatija+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    }
  ],
  sibenik: [
    {
      name: "Hotel Ivan",
      type: "Luxury Hotel",
      rating: 4.5,
      price: "$$$",
      url: "https://www.booking.com/searchresults.html?ss=Sibenik+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Hotel Jure",
      type: "Mid-range Hotel",
      rating: 4.4,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Sibenik+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Villa Sibenik",
      type: "Guesthouse",
      rating: 4.3,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Sibenik+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Sibenik Hostel",
      type: "Hostel",
      rating: 4.2,
      price: "$",
      url: "https://www.booking.com/searchresults.html?ss=Sibenik+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    }
  ],
  trogi: [
    {
      name: "Hotel Trogir Palace",
      type: "Luxury Hotel",
      rating: 4.6,
      price: "$$$",
      url: "https://www.booking.com/searchresults.html?ss=Trogir+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Hotel Tragos",
      type: "Mid-range Hotel",
      rating: 4.5,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Trogir+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Villa Trogir",
      type: "Guesthouse",
      rating: 4.4,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Trogir+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Trogir Hostel",
      type: "Hostel",
      rating: 4.3,
      price: "$",
      url: "https://www.booking.com/searchresults.html?ss=Trogir+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    }
  ],
  ston: [
    {
      name: "Villa Ston",
      type: "Boutique Hotel",
      rating: 4.5,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Ston+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Guesthouse Ston",
      type: "Guesthouse",
      rating: 4.4,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Ston+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Apartments Ston",
      type: "Apartment",
      rating: 4.3,
      price: "$",
      url: "https://www.booking.com/searchresults.html?ss=Ston+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    }
  ],
  vis: [
    {
      name: "Hotel Tamaris",
      type: "Mid-range Hotel",
      rating: 4.4,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Vis+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Villa Vis",
      type: "Guesthouse",
      rating: 4.3,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Vis+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Apartments Vis",
      type: "Apartment",
      rating: 4.2,
      price: "$",
      url: "https://www.booking.com/searchresults.html?ss=Vis+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    }
  ],
  lokrum: [
    {
      name: "Lokrum Accommodation",
      type: "Guesthouse",
      rating: 4.3,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Lokrum+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    }
  ],
  groznjan: [
    {
      name: "Villa Groznjan",
      type: "Boutique Hotel",
      rating: 4.5,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Groznjan+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Guesthouse Groznjan",
      type: "Guesthouse",
      rating: 4.4,
      price: "$$",
      url: "https://www.booking.com/searchresults.html?ss=Groznjan+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    },
    {
      name: "Apartments Groznjan",
      type: "Apartment",
      rating: 4.3,
      price: "$",
      url: "https://www.booking.com/searchresults.html?ss=Groznjan+Croatia&aid=2086573&no_rooms=1&group_adults=2"
    }
  ]
};

const thingsToDoData = {
  dubrovnik: [
    "Walk the 2km city walls for breathtaking views",
    "Take the cable car to Mount Srd for panoramic vistas",
    "Explore the Old Town's narrow streets and historic squares",
    "Visit the Rector's Palace and Franciscan Monastery",
    "Swim at Banje Beach or take a boat to Lokrum Island",
    "Watch the sunset from the city walls or Buza Bar",
    "Take a Game of Thrones tour to see filming locations"
  ],
  plitvice: [
    "Walk the wooden boardwalks through all 16 lakes",
    "Visit the spectacular Veliki Slap waterfall",
    "Take a boat ride across Kozjak Lake",
    "Hike the upper and lower lake trails",
    "Spot wildlife including bears and birds",
    "Photograph the turquoise waters and lush forests",
    "Visit the park's educational center"
  ],
  split: [
    "Explore Diocletian's Palace and basement halls",
    "Climb the bell tower of St. Domnius Cathedral",
    "Walk the Riva waterfront promenade",
    "Visit the Peristyle central square",
    "Take a day trip to nearby islands (Brac, Hvar)",
    "Relax at Bacvice Beach",
    "Explore the Old Town's narrow streets and markets"
  ],
  zagreb: [
    "Explore the Upper Town's historic sites",
    "Take the funicular between Upper and Lower Town",
    "Visit St. Mark's Church with its colorful roof",
    "Explore Dolac Market for local produce",
    "Visit the Museum of Broken Relationships",
    "Walk through Maksimir Park",
    "Enjoy the cafe culture in Ban Jelacic Square"
  ],
  hvar: [
    "Explore Hvar Town's historic streets and fortress",
    "Visit the Pakleni Islands for beautiful beaches",
    "Swim at Dubovica Beach",
    "Explore the lavender fields in July",
    "Take a boat trip to nearby islands",
    "Enjoy the vibrant nightlife",
    "Visit the Franciscan Monastery"
  ],
  krka: [
    "Walk the wooden boardwalks to Skradinski Buk waterfall",
    "Swim in designated areas near the falls",
    "Take a boat tour to Visovac Island and monastery",
    "Explore the hiking trails through the park",
    "Photograph the cascading waterfalls and wildlife",
    "Visit the Krka Monastery",
    "Take a guided tour to learn about the ecosystem"
  ],
  rovinj: [
    "Climb to St. Euphemia Church for panoramic views",
    "Explore the narrow cobblestone streets of the Old Town",
    "Walk along the harbor and watch the fishing boats",
    "Visit the Zlatni Rt (Golden Cape) forest park",
    "Take a boat trip to the nearby islands",
    "Swim at the beautiful beaches around Rovinj",
    "Browse the art galleries and local shops"
  ],
  zadar: [
    "Watch the sunset while listening to the Sea Organ",
    "Visit the Monument to the Sun at night",
    "Explore the Roman Forum and St. Donatus Church",
    "Walk along the Riva waterfront promenade",
    "Visit the Archaeological Museum",
    "Try local maraschino cherry liqueur",
    "Take a day trip to the Kornati Islands National Park"
  ],
  korcula: [
    "Explore the medieval Old Town with its fishbone layout",
    "Visit the alleged house of Marco Polo",
    "Climb the bell tower of St. Mark's Cathedral",
    "Taste local white wines (Grk and Posip)",
    "Watch the traditional Moreska sword dance",
    "Swim at nearby beaches",
    "Take a boat trip to nearby islands"
  ],
  pula: [
    "Visit the Pula Arena, one of the best-preserved Roman arenas",
    "Explore the Temple of Augustus and Roman Forum",
    "Walk through the Arch of the Sergii",
    "Visit the Archaeological Museum of Istria",
    "Relax at nearby beaches",
    "Take a day trip to Brijuni Islands National Park",
    "Explore the Old Town's historic streets"
  ],
  motovun: [
    "Walk the medieval walls for stunning views",
    "Climb the bell tower for panoramic vistas",
    "Try truffle dishes at local restaurants",
    "Visit the Motovun Film Festival in summer",
    "Explore the narrow cobblestone streets",
    "Taste local Istrian wines",
    "Photograph the beautiful Istrian countryside"
  ],
  mljet: [
    "Explore the two saltwater lakes by bike or on foot",
    "Take a boat to St. Mary Island and monastery",
    "Swim in the crystal-clear saltwater lakes",
    "Kayak across the Great Lake",
    "Cycle through the dense Mediterranean forest",
    "Hike the trails to scenic viewpoints",
    "Visit the small villages on the island"
  ],
  opatija: [
    "Walk the Lungomare coastal promenade",
    "Visit the beautiful Villa Angiolina and park",
    "Explore the historic villas and hotels",
    "Swim at the beaches along the riviera",
    "Take a day trip to the Kvarner Gulf islands",
    "Try local seafood at waterfront restaurants",
    "Relax in the elegant seaside atmosphere"
  ],
  sibenik: [
    "Visit the UNESCO-listed Cathedral of St. James",
    "Explore the four historic fortresses",
    "Walk through the narrow medieval streets",
    "Visit the St. Michael Fortress for sunset views",
    "Take a day trip to Krka National Park",
    "Try local seafood at the waterfront",
    "Visit the International Children's Festival in summer"
  ],
  trogi: [
    "Explore the Cathedral of St. Lawrence and Radovan Portal",
    "Walk the narrow streets of the UNESCO Old Town",
    "Visit the Kamerlengo Fortress for panoramic views",
    "Walk along the waterfront promenade",
    "Take a boat trip to nearby islands",
    "Swim at nearby beaches on Ciovo island",
    "Explore the town's galleries and shops"
  ],
  ston: [
    "Walk the longest fortification system in Europe",
    "Tour the Ston Walls connecting to Mali Ston",
    "Taste fresh oysters from the local farms",
    "Visit the salt pans and learn about salt production",
    "Try local wines (Dingac and Postup)",
    "Explore the historic town center",
    "Photograph the stunning views from the walls"
  ],
  vis: [
    "Take a boat trip to the Blue Cave on Bisevo Island",
    "Visit Stiniva Beach, one of Europe's best beaches",
    "Explore Vis Town's Venetian architecture",
    "Visit the charming fishing village of Komiza",
    "Try local seafood and Vis wines",
    "Rent a scooter to explore the island",
    "Go diving or snorkeling in the crystal-clear waters"
  ],
  lokrum: [
    "Take the ferry from Dubrovnik to the island",
    "Explore the Benedictine monastery ruins",
    "Swim in the Dead Sea saltwater lake",
    "Visit the fort for panoramic views of Dubrovnik",
    "Feed the peacocks roaming the island",
    "Walk the nature trails through Mediterranean forest",
    "Find Game of Thrones filming locations (Qarth)"
  ],
  groznjan: [
    "Visit the many art galleries and artist studios",
    "Attend a music festival or cultural event",
    "Enjoy panoramic views from the town walls",
    "Try local Istrian cuisine and wines",
    "Explore the narrow medieval streets",
    "Browse handmade crafts and local art",
    "Photograph the beautiful Istrian hilltop scenery"
  ],
  default: [
    "Visit local historic sites and landmarks",
    "Try traditional Croatian cuisine at local restaurants",
    "Explore the natural beauty of the region",
    "Visit local markets and shops",
    "Enjoy the local culture and festivals",
    "Take a guided tour to learn about the area",
    "Relax and enjoy the Mediterranean atmosphere"
  
]
};