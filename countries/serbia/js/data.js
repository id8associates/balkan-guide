const touristPlaces = {
  belgrade: {
    name: "Belgrade",
    coords: [44.8176, 20.4569],
    image: "images/belgrade.jpg",
    location: "Central Serbia",
    description: "The vibrant capital where the Sava and Danube rivers meet, Belgrade pulses with energy day and night. From the historic Kalemegdan Fortress and bohemian Skadarlija quarter to world-class nightlife along the river splavovi, this city never sleeps. Explore the Temple of Saint Sava, one of the largest Orthodox churches in the world, and the fascinating Museum of Nikola Tesla.",
    type: "Capital City",
    rating: 4.7,
    reviews: 42150,
    bestTime: "April to October",
    tips: "Experience the splavovi (floating river clubs) on the Sava and Danube for the legendary Belgrade nightlife. Visit Kalemegdan Park at sunset for stunning views of the confluence."
  },
  "novi-sad": {
    name: "Novi Sad",
    coords: [45.2671, 19.8335],
    image: "images/novi-sad.jpg",
    location: "Vojvodina",
    description: "Serbia's second city is a cultural gem crowned by the mighty Petrovaradin Fortress. Known as the Serbian Athens, Novi Sad charms with its pastel-colored Liberty Square, the EXIT Festival fame, and the serene Danube Park. The city's multicultural heritage reflects in its architecture and vibrant food scene.",
    type: "Cultural City",
    rating: 4.6,
    reviews: 18340,
    bestTime: "May to September",
    tips: "Visit during EXIT Festival in July for an unforgettable music experience. Explore the underground tunnels of Petrovaradin Fortress."
  },
  subotica: {
    name: "Subotica",
    coords: [46.1000, 19.6667],
    image: "images/subotica.jpg",
    location: "Vojvodina, near Hungarian border",
    description: "A gem of Hungarian Art Nouveau architecture, Subotica dazzles with its ornate City Hall and the stunning Synagogue. Located near Lake Palić, this multicultural town offers a unique blend of Serbian and Hungarian influences, thermal spas, and the vast plains of the Pannonian Basin.",
    type: "Art Nouveau Town",
    rating: 4.5,
    reviews: 8920,
    bestTime: "April to October",
    tips: "Climb the City Hall tower for panoramic views of the town and Lake Palić. Try the local fish specialties at Lake Palić restaurants."
  },
  zlatibor: {
    name: "Zlatibor",
    coords: [43.7333, 19.7000],
    image: "images/zlatibor.jpg",
    location: "Western Serbia",
    description: "Serbia's most popular mountain resort, Zlatibor is a vast plateau of rolling green hills, pine forests, and traditional wooden architecture. The scenic Sargan Eight narrow-gauge railway and the nearby Stopića Cave are top attractions, while the crisp mountain air makes it a year-round destination for hiking and relaxation.",
    type: "Mountain Resort",
    rating: 4.5,
    reviews: 21560,
    bestTime: "June to September (hiking), December to March (winter sports)",
    tips: "Ride the Sargan Eight vintage train for spectacular mountain views. Try the local Zlatibor pršut (smoked ham) and kajmak."
  },
  "tara-np": {
    name: "Tara National Park",
    coords: [43.9167, 19.3333],
    image: "images/tara-np.jpg",
    location: "Western Serbia",
    description: "A pristine national park of dense pine forests, deep river canyons, and crystal-clear lakes, Tara is a paradise for nature lovers. The Drina River canyon, one of the deepest in Europe, offers breathtaking viewpoints. The park is home to brown bears, wolves, and golden eagles within its protected wilderness.",
    type: "National Park",
    rating: 4.8,
    reviews: 11230,
    bestTime: "May to October",
    tips: "Drive the scenic road to Banjska Stena viewpoint for the best panorama of the Drina Canyon. Bring binoculars for wildlife spotting."
  },
  "djavolja-varos": {
    name: "Đavolja Varoš",
    coords: [42.9833, 21.4000],
    image: "images/djavolja-varos.jpg",
    location: "Southern Serbia",
    description: "Đavolja Varoš (Devil's Town) is a bizarre and breathtaking natural phenomenon of 202 earth pyramids carved by erosion, standing like stone sentinels in a remote valley. The site's otherworldly appearance, marked by mineral springs and strange rock formations, has earned it protection as a natural monument and a place of local legends.",
    type: "Natural Wonder",
    rating: 4.7,
    reviews: 6780,
    bestTime: "April to October",
    tips: "Wear sturdy walking shoes for the steep trail down to the formations. Visit on a clear day for the best photo opportunities."
  },
  sirogojno: {
    name: "Sirogojno",
    coords: [43.6833, 19.8833],
    image: "images/sirogojno.jpg",
    location: "Western Serbia (Zlatibor region)",
    description: "An open-air ethnographic museum preserving the traditional life of 19th-century Serbian villages. The Old Village (Staro Selo) features authentic wooden houses, workshops, and a church, showcasing the rich heritage of the Zlatibor region. Sirogojno is also famous for its hand-knitted woolen sweaters.",
    type: "Ethnographic Museum",
    rating: 4.4,
    reviews: 5430,
    bestTime: "May to September",
    tips: "Buy a traditional Sirogojno knitted sweater as a souvenir. Allow at least 2 hours to explore the museum complex thoroughly."
  },
  studenica: {
    name: "Studenica Monastery",
    coords: [43.4833, 20.5333],
    image: "images/studenica.jpg",
    location: "Central Serbia",
    description: "The largest and richest of Serbia's Orthodox monasteries, Studenica is a UNESCO World Heritage site founded in the 12th century by Stefan Nemanja. Its stunning white marble Church of the Virgin houses exquisite Byzantine frescoes, while the complex's serene setting in the Ibar River valley radiates spiritual tranquility.",
    type: "UNESCO Monastery",
    rating: 4.9,
    reviews: 14560,
    bestTime: "April to October",
    tips: "Dress modestly covering shoulders and knees. The frescoes inside the main church are masterpieces of Byzantine art — bring a guidebook to identify the scenes."
  },
  sopocani: {
    name: "Sopoćani Monastery",
    coords: [43.1167, 20.4167],
    image: "images/sopocani.jpg",
    location: "Southern Serbia (Raška region)",
    description: "A UNESCO World Heritage monastery renowned for its magnificent 13th-century frescoes considered among the finest examples of Paleologian Renaissance art. The Church of the Holy Trinity houses the famous Dormition of the Virgin fresco, and the peaceful monastery complex sits near the Stari Ras medieval capital.",
    type: "UNESCO Monastery",
    rating: 4.7,
    reviews: 4890,
    bestTime: "May to September",
    tips: "Combine with a visit to nearby Stari Ras and the Church of St. Peter (the oldest in Serbia). The frescoes are best viewed in the morning light."
  },
  gamzigrad: {
    name: "Gamzigrad",
    coords: [43.9000, 22.1833],
    image: "images/gamzigrad.jpg",
    location: "Eastern Serbia",
    description: "Gamzigrad (Felix Romuliana) is a UNESCO World Heritage Roman palace complex built by Emperor Galerius in the early 4th century. The vast fortified compound includes temples, bathhouses, and mosaics, set against a backdrop of rolling hills. It is one of the most important late Roman sites in Europe.",
    type: "UNESCO Roman Site",
    rating: 4.6,
    reviews: 7650,
    bestTime: "April to October",
    tips: "Hire a guide to fully understand the significance of the ruins. The on-site museum displays remarkable mosaic floors and artifacts."
  },
  smederevo: {
    name: "Smederevo Fortress",
    coords: [44.6667, 20.9333],
    image: "images/smederevo.jpg",
    location: "Central Serbia (Danube)",
    description: "One of the largest lowland fortresses in Europe, Smederevo Fortress was built in the 15th century as the capital of the Serbian Despotate. Its triangular layout features 25 massive towers and walls stretching along the Danube. The fortress withstood Ottoman sieges and remains an imposing monument to medieval Serbian statehood.",
    type: "Medieval Fortress",
    rating: 4.5,
    reviews: 8230,
    bestTime: "April to October",
    tips: "Visit during the Smederevo Autumn cultural festival for medieval reenactments. Walk the entire perimeter of the walls to appreciate the scale."
  },
  kopaonik: {
    name: "Kopaonik",
    coords: [43.2833, 20.8000],
    image: "images/kopaonik.jpg",
    location: "Central Serbia",
    description: "Serbia's premier ski resort and a national park, Kopaonik offers the best winter sports in the Balkans with 25 ski lifts and 70 km of slopes. In summer, the mountain transforms into a paradise for hikers, mountain bikers, and paragliders, with alpine meadows carpeted in wildflowers.",
    type: "Ski Resort & National Park",
    rating: 4.5,
    reviews: 18920,
    bestTime: "December to March (skiing), June to September (hiking)",
    tips: "Book accommodation and ski passes well in advance during peak season (January-February). Try the local rakija (fruit brandy) at mountain lodges."
  },
  "fruska-gora": {
    name: "Fruška Gora",
    coords: [45.1500, 19.7167],
    image: "images/fruska-gora.jpg",
    location: "Vojvodina (Srem)",
    description: "Known as the 'Jewel of Serbia,' Fruška Gora National Park is a low mountain range covered in dense forests, vineyards, and 16 historic Orthodox monasteries dating from the 15th-18th centuries. The area is also Vojvodina's premier wine region, with numerous wine cellars offering tastings.",
    type: "National Park & Wine Region",
    rating: 4.6,
    reviews: 11450,
    bestTime: "April to October",
    tips: "Visit at least 3-4 of the monasteries — each has unique architecture and frescoes. Combine with a wine tasting at one of the many wineries on the southern slopes."
  },
  nis: {
    name: "Niš",
    coords: [43.3167, 21.9000],
    image: "images/nis.jpg",
    location: "Southern Serbia",
    description: "One of the oldest cities in the Balkans, Niš is the birthplace of Constantine the Great, the first Christian Roman emperor. The city's turbulent history is visible in the Skull Tower, Niš Fortress, and the Nazi concentration camp Crveni Krst. Today Niš is a lively university city with excellent food and warm hospitality.",
    type: "Historical City",
    rating: 4.5,
    reviews: 15670,
    bestTime: "April to October",
    tips: "Try the famous Niš ćevapi (grilled minced meat) at one of the city's legendary grill restaurants. Visit the Mediana archaeological site to see Constantine's villa."
  },
  petrovaradin: {
    name: "Petrovaradin Fortress",
    coords: [45.2500, 19.8667],
    image: "images/petrovaradin.jpg",
    location: "Vojvodina (Novi Sad)",
    description: "The 'Gibraltar of the Danube' is an imposing 18th-century Habsburg fortress dominating the river from a volcanic ridge. Its intricate network of underground tunnels spans 16 km, and the fortress clock tower famously has a large minute hand and small hour hand so boat captains could read it from afar.",
    type: "Fortress",
    rating: 4.6,
    reviews: 13450,
    bestTime: "April to October",
    tips: "Explore the underground military tunnels — guided tours are available. Visit during EXIT Festival in July when the fortress hosts the music event."
  },
  uvac: {
    name: "Uvac Canyon",
    coords: [43.3000, 19.9833],
    image: "images/uvac.jpg",
    location: "Southwestern Serbia",
    description: "A spectacular meandering river canyon of the Uvac River, famous for its dramatic horseshoe bends carved through limestone mountains. The Uvac Special Nature Reserve is home to the rare griffon vulture, and boat tours along the emerald-green river reveal stunning geological formations and caves.",
    type: "Natural Reserve",
    rating: 4.8,
    reviews: 8920,
    bestTime: "May to September",
    tips: "Book a boat tour through the canyon to see the meanders up close. Bring binoculars to spot griffon vultures nesting on the cliffs."
  },
  "drina-house": {
    name: "Drina River House",
    coords: [43.9833, 19.5667],
    image: "images/drina-house.jpg",
    location: "Western Serbia (Drina River)",
    description: "One of the most photographed houses in the world, the Drina River House sits perched on a solitary rock in the middle of the Drina River near Bajina Bašta. Built by local youth in 1968 as a shelter, the house has survived countless floods and storms, becoming an iconic symbol of Serbian resilience and ingenuity.",
    type: "Iconic Landmark",
    rating: 4.7,
    reviews: 11230,
    bestTime: "May to September",
    tips: "Visit at sunrise or sunset for the most dramatic photographs. The best viewpoint is from the riverbank in Bajina Bašta town."
  },
  "resava-cave": {
    name: "Resava Cave",
    coords: [44.0667, 21.6167],
    image: "images/resava-cave.jpg",
    location: "Eastern Serbia",
    description: "One of the largest and most beautifully decorated caves in Serbia, Resava Cave stretches 4.5 km with 800 meters open to visitors. The cave features spectacular stalactites, stalagmites, and rare cave formations including the 'Underground Throne.' The constant 8°C temperature makes it a refreshing escape in summer.",
    type: "Cave",
    rating: 4.6,
    reviews: 7890,
    bestTime: "Year-round",
    tips: "Wear warm clothing as the cave temperature stays around 8°C year-round. The 45-minute guided tour covers the most impressive sections with well-lit pathways."
  },
  viminacium: {
    name: "Viminacium",
    coords: [44.7333, 21.2167],
    image: "images/viminacium.jpg",
    location: "Eastern Serbia (near Požarevac)",
    description: "Once a major Roman provincial capital and military camp, Viminacium is one of the most important archaeological sites in the Balkans. The sprawling site includes a Roman amphitheater, baths, city walls, and remarkably preserved frescoes. The on-site museum showcases thousands of artifacts from this once-thriving city of 40,000 inhabitants.",
    type: "Roman Archaeological Site",
    rating: 4.6,
    reviews: 6540,
    bestTime: "April to October",
    tips: "Take the guided tour to see the reconstructed Roman villa and the mammoth skeleton discovered on site. Combine with a visit to nearby Požarevac."
  }
};

const restaurantsData = {
  belgrade: [
    { name: "Kalemegdanska Terasa", type: "Fine Dining", specialty: "Grilled fish and Danube views", url: "https://www.google.com/maps/search/Kalemegdanska+Terasa+Belgrade+Serbia", rating: 4.7 },
    { name: "Skadarlija Quarter", type: "Traditional", specialty: "Serbian grill platter and live music", url: "https://www.google.com/maps/search/Skadarlija+Belgrade+Serbia", rating: 4.6 },
    { name: "Mala Fabrika Ukusa", type: "Fusion", specialty: "Modern Serbian cuisine and craft beer", url: "https://www.google.com/maps/search/Mala+Fabrika+Ukusa+Belgrade+Serbia", rating: 4.5 },
    { name: "Toro Latin GastroBar", type: "Latin", specialty: "Latin American fusion and cocktails", url: "https://www.google.com/maps/search/Toro+Latin+Belgrade+Serbia", rating: 4.8 },
    { name: "Zavicaj", type: "Traditional", specialty: "Roasted lamb and homemade sarma", url: "https://www.google.com/maps/search/Zavicaj+Belgrade+Serbia", rating: 4.6 },
    { name: "Homa", type: "Fine Dining", specialty: "Contemporary Balkan gastronomy", url: "https://www.google.com/maps/search/Homa+Belgrade+Serbia", rating: 4.8 }
  ],
  "novi-sad": [
    { name: "Fish & Zeleniš", type: "Seafood", specialty: "Danube fish soup and grilled carp", url: "https://www.google.com/maps/search/Fish+Zeleni%C5%A1+Novi+Sad+Serbia", rating: 4.7 },
    { name: "Project 72", type: "Fine Dining", specialty: "Vojvodina gourmet tasting menu", url: "https://www.google.com/maps/search/Project+72+Novi+Sad+Serbia", rating: 4.8 },
    { name: "Plava Frajla", type: "Traditional", specialty: "Traditional Vojvodina dishes", url: "https://www.google.com/maps/search/Plava+Frajla+Novi+Sad+Serbia", rating: 4.6 },
    { name: "Mostonga", type: "Traditional", specialty: "Grilled meats and local wines", url: "https://www.google.com/maps/search/Mostonga+Novi+Sad+Serbia", rating: 4.5 },
    { name: "Čarda Tartinijev", type: "Traditional", specialty: "Fish stew and river specialties", url: "https://www.google.com/maps/search/%C4%8Carda+Tartinijev+Novi+Sad+Serbia", rating: 4.5 }
  ],
  subotica: [
    { name: "Boss Cafe", type: "Café", specialty: "Coffee and Hungarian-style pastries", url: "https://www.google.com/maps/search/Boss+Cafe+Subotica+Serbia", rating: 4.4 },
    { name: "Restaurant Palić", type: "Traditional", specialty: "Fish paprikash and lake specialties", url: "https://www.google.com/maps/search/Restaurant+Pali%C4%87+Subotica+Serbia", rating: 4.5 },
    { name: "Gradska Terasa", type: "Fine Dining", specialty: "Hungarian-Serbian fusion cuisine", url: "https://www.google.com/maps/search/Gradska+Terasa+Subotica+Serbia", rating: 4.6 },
    { name: "Kruč", type: "Traditional", specialty: "Wild game and forest mushrooms", url: "https://www.google.com/maps/search/Kru%C4%8D+Subotica+Serbia", rating: 4.5 }
  ],
  zlatibor: [
    { name: "Konačište", type: "Traditional", specialty: "Zlatibor pršut and kajmak", url: "https://www.google.com/maps/search/Kona%C4%8Di%C5%A1te+Zlatibor+Serbia", rating: 4.6 },
    { name: "Restaurant Palisad", type: "Hotel Restaurant", specialty: "Mountain lamb and local trout", url: "https://www.google.com/maps/search/Restaurant+Palisad+Zlatibor+Serbia", rating: 4.5 },
    { name: "Srpska Trpeza", type: "Traditional", specialty: "Serbian national dishes and homemade rakija", url: "https://www.google.com/maps/search/Srpska+Trpeza+Zlatibor+Serbia", rating: 4.4 },
    { name: "Zlatiborska Noć", type: "Traditional", specialty: "Grilled meats and live folk music", url: "https://www.google.com/maps/search/Zlatiborska+No%C4%87+Zlatibor+Serbia", rating: 4.5 }
  ],
  "tara-np": [
    { name: "Restaurant Tara", type: "Traditional", specialty: "Trout and forest mushroom stew", url: "https://www.google.com/maps/search/Restaurant+Tara+National+Park+Serbia", rating: 4.5 },
    { name: "Etno Selo Tara", type: "Traditional", specialty: "Roasted lamb under the bell", url: "https://www.google.com/maps/search/Etno+Selo+Tara+National+Park+Serbia", rating: 4.6 },
    { name: "Vikendica Tara", type: "Café", specialty: "Homemade pies and mountain tea", url: "https://www.google.com/maps/search/Vikendica+Tara+Serbia", rating: 4.3 },
    { name: "Drinska Terasa", type: "Traditional", specialty: "Grilled river fish and local wine", url: "https://www.google.com/maps/search/Drinska+Terasa+Tara+Serbia", rating: 4.4 }
  ],
  "djavolja-varos": [
    { name: "Restaurant Đavolja Varoš", type: "Traditional", specialty: "Mountain lamb and bean stew", url: "https://www.google.com/maps/search/Restaurant+%C4%90avolja+Varo%C5%A1+Serbia", rating: 4.3 },
    { name: "Kod Bunara", type: "Traditional", specialty: "Homemade cheese and prosciutto", url: "https://www.google.com/maps/search/Kod+Bunara+%C4%90avolja+Varo%C5%A1+Serbia", rating: 4.2 },
    { name: "Planinarski Dom", type: "Café", specialty: "Rakija and mountain snacks", url: "https://www.google.com/maps/search/Planinarski+Dom+%C4%90avolja+Varo%C5%A1+Serbia", rating: 4.1 }
  ],
  sirogojno: [
    { name: "Konoba Sirogojno", type: "Traditional", specialty: "Roasted lamb and potato stew", url: "https://www.google.com/maps/search/Konoba+Sirogojno+Serbia", rating: 4.5 },
    { name: "Etno Kuća", type: "Traditional", specialty: "Homemade cheese and kajmak", url: "https://www.google.com/maps/search/Etno+Ku%C4%87a+Sirogojno+Serbia", rating: 4.4 },
    { name: "Staro Selo Restaurant", type: "Traditional", specialty: "Traditional village dishes", url: "https://www.google.com/maps/search/Staro+Selo+Sirogojno+Serbia", rating: 4.3 }
  ],
  studenica: [
    { name: "Restoran Studenica", type: "Traditional", specialty: "Monastic lentil soup and trout", url: "https://www.google.com/maps/search/Restoran+Studenica+Monastery+Serbia", rating: 4.4 },
    { name: "Konaba Studenica", type: "Traditional", specialty: "Grilled meat and cheese pie", url: "https://www.google.com/maps/search/Konaba+Studenica+Serbia", rating: 4.5 },
    { name: "Gostionica Kod Manastira", type: "Traditional", specialty: "Homemade bread and local honey", url: "https://www.google.com/maps/search/Gostionica+Studenica+Serbia", rating: 4.3 }
  ],
  sopocani: [
    { name: "Restoran Sopoćani", type: "Traditional", specialty: "Mountain lamb and fresh salads", url: "https://www.google.com/maps/search/Restoran+Sopo%C4%87ani+Serbia", rating: 4.4 },
    { name: "Gostionica Raška", type: "Traditional", specialty: "Trout from the Raška river", url: "https://www.google.com/maps/search/Gostionica+Ra%C5%A1ka+Serbia", rating: 4.3 },
    { name: "Etno Selo Sopoćani", type: "Traditional", specialty: "Traditional Balkan grill platter", url: "https://www.google.com/maps/search/Etno+Selo+Sopo%C4%87ani+Serbia", rating: 4.5 }
  ],
  gamzigrad: [
    { name: "Restoran Felix Romuliana", type: "Traditional", specialty: "Grilled meats and local wine", url: "https://www.google.com/maps/search/Restoran+Felix+Romuliana+Gamzigrad+Serbia", rating: 4.4 },
    { name: "Konoba Gamzigrad", type: "Traditional", specialty: "Roman-inspired dishes and stews", url: "https://www.google.com/maps/search/Konoba+Gamzigrad+Serbia", rating: 4.3 },
    { name: "Vila Gamzigrad", type: "Café", specialty: "Coffee and local pastries", url: "https://www.google.com/maps/search/Vila+Gamzigrad+Serbia", rating: 4.2 }
  ],
  smederevo: [
    { name: "Restoran Smederevska Tvrdjava", type: "Traditional", specialty: "Danube fish specialties", url: "https://www.google.com/maps/search/Restoran+Smederevska+Tvrdjava+Serbia", rating: 4.5 },
    { name: "Kod Krste", type: "Traditional", specialty: "Grilled river fish and kajmak", url: "https://www.google.com/maps/search/Kod+Krste+Smederevo+Serbia", rating: 4.4 },
    { name: "Vinarija Smederevo", type: "Wine Bar", specialty: "Wine tasting and cheese platter", url: "https://www.google.com/maps/search/Vinarija+Smederevo+Serbia", rating: 4.5 },
    { name: "Restoran Dve Bube", type: "Traditional", specialty: "Serbian grill and local wines", url: "https://www.google.com/maps/search/Dve+Bube+Smederevo+Serbia", rating: 4.3 }
  ],
  kopaonik: [
    { name: "Restoran Nacionalna Klasa", type: "Traditional", specialty: "Mountain lamb and cheese pie", url: "https://www.google.com/maps/search/Nacionalna+Klasa+Kopaonik+Serbia", rating: 4.5 },
    { name: "Gondola Restaurant", type: "Traditional", specialty: "Grilled trout and forest mushrooms", url: "https://www.google.com/maps/search/Gondola+Restaurant+Kopaonik+Serbia", rating: 4.4 },
    { name: "Mala Planina", type: "Traditional", specialty: "Hearty mountain stews and rakija", url: "https://www.google.com/maps/search/Mala+Planina+Kopaonik+Serbia", rating: 4.5 },
    { name: "Pizza Kopaonik", type: "Pizza", specialty: "Wood-fired pizza and pasta", url: "https://www.google.com/maps/search/Pizza+Kopaonik+Serbia", rating: 4.3 }
  ],
  "fruska-gora": [
    { name: "Restoran Borkovac", type: "Traditional", specialty: "Fish paprikash and local wine", url: "https://www.google.com/maps/search/Restoran+Borkovac+Fru%C5%A1ka+Gora+Serbia", rating: 4.6 },
    { name: "Vinarija Zivanovic", type: "Wine Bar", specialty: "Wine tasting with cheese pairing", url: "https://www.google.com/maps/search/Vinarija+Zivanovic+Fru%C5%A1ka+Gora+Serbia", rating: 4.7 },
    { name: "Restoran Vrdnička Kula", type: "Traditional", specialty: "Wild game and mushroom dishes", url: "https://www.google.com/maps/search/Vrdni%C4%8Dka+Kula+Fru%C5%A1ka+Gora+Serbia", rating: 4.5 },
    { name: "Etno Selo Stari Slankamen", type: "Traditional", specialty: "Traditional Vojvodina cuisine", url: "https://www.google.com/maps/search/Stari+Slankamen+Fru%C5%A1ka+Gora+Serbia", rating: 4.4 }
  ],
  nis: [
    { name: "Mehana Galija", type: "Traditional", specialty: "Niš ćevapi and roast meats", url: "https://www.google.com/maps/search/Mehana+Galija+Ni%C5%A1+Serbia", rating: 4.7 },
    { name: "Stambolijski", type: "Traditional", specialty: "Grilled kebabs and lepinja bread", url: "https://www.google.com/maps/search/Stambolijski+Ni%C5%A1+Serbia", rating: 4.6 },
    { name: "Moose Coffee", type: "Café", specialty: "Specialty coffee and brunch", url: "https://www.google.com/maps/search/Moose+Coffee+Ni%C5%A1+Serbia", rating: 4.5 },
    { name: "Nislijska Mehana", type: "Traditional", specialty: "Authentic Niš grill specialties", url: "https://www.google.com/maps/search/Nislijska+Mehana+Ni%C5%A1+Serbia", rating: 4.6 },
    { name: "Restoran Dveri", type: "Fine Dining", specialty: "Modern Serbian cuisine", url: "https://www.google.com/maps/search/Dveri+Ni%C5%A1+Serbia", rating: 4.7 }
  ],
  petrovaradin: [
    { name: "Restoran Petrovaradin", type: "Traditional", specialty: "Danube fish soup and grilled carp", url: "https://www.google.com/maps/search/Restoran+Petrovaradin+Fortress+Serbia", rating: 4.5 },
    { name: "Pod Zidom", type: "Café", specialty: "Coffee and cakes with fortress view", url: "https://www.google.com/maps/search/Pod+Zidom+Petrovaradin+Serbia", rating: 4.4 },
    { name: "Fortress Bistro", type: "Bistro", specialty: "International and local fusion", url: "https://www.google.com/maps/search/Fortress+Bistro+Petrovaradin+Serbia", rating: 4.5 }
  ],
  uvac: [
    { name: "Restoran Uvac", type: "Traditional", specialty: "Trout and grilled river fish", url: "https://www.google.com/maps/search/Restoran+Uvac+Canyon+Serbia", rating: 4.4 },
    { name: "Etno Selo Uvac", type: "Traditional", specialty: "Mountain lamb and homemade cheese", url: "https://www.google.com/maps/search/Etno+Selo+Uvac+Serbia", rating: 4.5 },
    { name: "Vidikovac Uvac", type: "Café", specialty: "Tea and snacks with canyon view", url: "https://www.google.com/maps/search/Vidikovac+Uvac+Serbia", rating: 4.3 }
  ],
  "drina-house": [
    { name: "Restoran Bajina Bašta", type: "Traditional", specialty: "Grilled trout and river specialties", url: "https://www.google.com/maps/search/Restoran+Bajina+Ba%C5%A1ta+Drina+Serbia", rating: 4.5 },
    { name: "Kućica na Drini", type: "Café", specialty: "Coffee and pastries with river view", url: "https://www.google.com/maps/search/Ku%C4%87ica+na+Drini+Bajina+Ba%C5%A1ta+Serbia", rating: 4.4 },
    { name: "Konoba Drina", type: "Traditional", specialty: "Grilled meats and local rakija", url: "https://www.google.com/maps/search/Konoba+Drina+Bajina+Ba%C5%A1ta+Serbia", rating: 4.5 }
  ],
  "resava-cave": [
    { name: "Restoran Resava", type: "Traditional", specialty: "Trout and grilled vegetables", url: "https://www.google.com/maps/search/Restoran+Resava+Cave+Serbia", rating: 4.4 },
    { name: "Etno Selo Resava", type: "Traditional", specialty: "Homemade lamb and potato stew", url: "https://www.google.com/maps/search/Etno+Selo+Resava+Serbia", rating: 4.5 },
    { name: "Kod Pećine", type: "Café", specialty: "Coffee and mountain honey snacks", url: "https://www.google.com/maps/search/Kod+Pe%C4%87ine+Resava+Serbia", rating: 4.3 }
  ],
  viminacium: [
    { name: "Restoran Viminacium", type: "Traditional", specialty: "Roman-inspired gourmet dishes", url: "https://www.google.com/maps/search/Restoran+Viminacium+Serbia", rating: 4.5 },
    { name: "Kod Rimskog Cara", type: "Traditional", specialty: "Grilled meats and local wines", url: "https://www.google.com/maps/search/Kod+Rimskog+Cara+Viminacium+Serbia", rating: 4.4 },
    { name: "Vinarija Požarevac", type: "Wine Bar", specialty: "Wine tasting and cheese platter", url: "https://www.google.com/maps/search/Vinarija+Po%C5%BEarevac+Serbia", rating: 4.5 }
  ],
  default: [
    { name: "Restaurant Srpska Trpeza", type: "Traditional", specialty: "Serbian national dishes", url: "https://www.google.com/maps/search/Serbian+national+restaurant+Serbia", rating: 4.4 },
    { name: "Konoba Balkan", type: "Traditional", specialty: "Balkan grill and salads", url: "https://www.google.com/maps/search/Konoba+Balkan+Serbia", rating: 4.5 },
    { name: "Caffe Bar Central", type: "Café", specialty: "Coffee and local pastries", url: "https://www.google.com/maps/search/Cafe+Serbia", rating: 4.3 },
    { name: "Vinarija Region", type: "Wine Bar", specialty: "Serbian wine tasting", url: "https://www.google.com/maps/search/Wine+Serbia", rating: 4.4 }
  ]
,
  "default": [
    { name: "Kafana", type: "Traditional", specialty: "Serbian Cuisine", url: "https://www.google.com/maps/search/?api=1&query=Kafana+Serbia", rating: 4.5 },
    { name: "Skadarlija Restaurant", type: "Traditional", specialty: "Live Music & Roast Meats", url: "https://www.google.com/maps/search/?api=1&query=Skadarlija+Belgrade", rating: 4.6 },
    { name: "Wine House", type: "Wine Bar", specialty: "Serbian Wines", url: "https://www.google.com/maps/search/?api=1&query=Wine+House+Serbia", rating: 4.4 },
    { name: "Caffe Bar", type: "Café", specialty: "Coffee & Pastries", url: "https://www.google.com/maps/search/?api=1&query=Caffe+Bar+Belgrade", rating: 4.3 }
  ]
};;
const accommodationsData = {
  belgrade: [
    { name: "Metropol Palace", type: "Luxury Hotel", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Belgrade+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Moskva", type: "Historic Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Belgrade+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Boutique Hotel Museum", type: "Boutique Hotel", price: "$$", rating: 4.8, url: "https://www.booking.com/searchresults.html?ss=Belgrade+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hostel Belgrade", type: "Hostel", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Belgrade+Serbia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "novi-sad": [
    { name: "Hotel Prezident", type: "Boutique Hotel", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Novi+Sad+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Centar", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Novi+Sad+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Novi Sad", type: "Apartment", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Novi+Sad+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Dunav", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Novi+Sad+Serbia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  subotica: [
    { name: "Hotel Patria", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Subotica+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Galleria Boutique Hotel", type: "Boutique Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Subotica+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartmani Palić", type: "Apartment", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Subotica+Serbia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  zlatibor: [
    { name: "Hotel Palisad", type: "Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Zlatibor+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Zlatibor", type: "Villa", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Zlatibor+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartmani Mona", type: "Apartment", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Zlatibor+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Kralj", type: "Guest House", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Zlatibor+Serbia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "tara-np": [
    { name: "Hotel Tara", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Tara+National+Park+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Etno Selo Tara", type: "Guest House", price: "$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Tara+National+Park+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vikendica Tara", type: "Cottage", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Tara+National+Park+Serbia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "djavolja-varos": [
    { name: "Hotel Đavolja Varoš", type: "Hotel", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=%C4%90avolja+Varo%C5%A1+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Kuršumlija", type: "Guest House", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=%C4%90avolja+Varo%C5%A1+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Prolom", type: "Villa", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=%C4%90avolja+Varo%C5%A1+Serbia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  sirogojno: [
    { name: "Hotel Sirogojno", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Sirogojno+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Etno Selo Sirogojno", type: "Guest House", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Sirogojno+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Stara Kuća", type: "Traditional House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Sirogojno+Serbia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  studenica: [
    { name: "Hotel Studenica", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Studenica+Monastery+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Ibar", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Studenica+Monastery+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "B&B Manastir", type: "Bed & Breakfast", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Studenica+Monastery+Serbia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  sopocani: [
    { name: "Hotel Sopoćani", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Sopo%C4%87ani+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Raška", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Sopo%C4%87ani+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Etno Selo Raška", type: "Traditional House", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Sopo%C4%87ani+Serbia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  gamzigrad: [
    { name: "Hotel Felix Romuliana", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Gamzigrad+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Gamzigrad", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Gamzigrad+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Zaječar", type: "Villa", price: "$$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Gamzigrad+Serbia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  smederevo: [
    { name: "Hotel Smederevo", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Smederevo+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartmani Dunav", type: "Apartment", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Smederevo+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Vinarija", type: "Guest House", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Smederevo+Serbia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  kopaonik: [
    { name: "Hotel Grand Kopaonik", type: "Ski Resort", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Kopaonik+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Kopaonik", type: "Apartment", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Kopaonik+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Snežna", type: "Villa", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Kopaonik+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Planinka", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Kopaonik+Serbia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "fruska-gora": [
    { name: "Hotel Fruška Gora", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Fru%C5%A1ka+Gora+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vinarija Rooms", type: "Guest House", price: "$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Fru%C5%A1ka+Gora+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Etno Selo Vrdnik", type: "Traditional House", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Fru%C5%A1ka+Gora+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Srem", type: "Villa", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Fru%C5%A1ka+Gora+Serbia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  nis: [
    { name: "Hotel Ambassador", type: "Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Ni%C5%A1+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel My Place", type: "Boutique Hotel", price: "$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Ni%C5%A1+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartments Niš", type: "Apartment", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Ni%C5%A1+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Niš", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Ni%C5%A1+Serbia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  petrovaradin: [
    { name: "Hotel Petrovaradin", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Petrovaradin+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Fortress Apartments", type: "Apartment", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Petrovaradin+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Pod Zidom", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Petrovaradin+Serbia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  uvac: [
    { name: "Hotel Uvac", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Uvac+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Etno Selo Uvac", type: "Guest House", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Uvac+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Zlatar", type: "Villa", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Uvac+Serbia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "drina-house": [
    { name: "Hotel Drina", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Bajina+Ba%C5%A1ta+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Bajina Bašta", type: "Villa", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Bajina+Ba%C5%A1ta+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartmani Drina", type: "Apartment", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Bajina+Ba%C5%A1ta+Serbia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "resava-cave": [
    { name: "Hotel Resava", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Resava+Cave+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Despotovac", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Resava+Cave+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Etno Selo Resava", type: "Traditional House", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Resava+Cave+Serbia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  viminacium: [
    { name: "Hotel Viminacium", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Viminacium+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Požarevac", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Viminacium+Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Braničevo", type: "Villa", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Viminacium+Serbia&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  default: [
    { name: "Hotel Serbia", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Guest House Balkan", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Apartmani Centar", type: "Apartment", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Serbia&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Panorama", type: "Villa", price: "$$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Serbia&aid=2086573&no_rooms=1&group_adults=2" }
  ]
};

const thingsToDoData = {
  belgrade: [
    "Explore Kalemegdan Fortress and its military museum",
    "Visit the Temple of Saint Sava, one of the largest Orthodox cathedrals in the world",
    "Stroll through the bohemian Skadarlija quarter for live music and traditional food",
    "Experience Belgrade nightlife on the Sava and Danube river splavovi",
    "Tour the Museum of Nikola Tesla and see original artifacts",
    "Walk through the Belgrade Waterfront promenade at sunset",
    "Visit the Ada Ciganlija river island for beaches and sports"
  ],
  "novi-sad": [
    "Explore the Petrovaradin Fortress and its underground tunnels",
    "Wander Liberty Square and the old town's pastel-colored buildings",
    "Visit the EXIT Festival if in town during July",
    "Relax at Danube Park with its fountain and statues",
    "Tour the Museum of Vojvodina for regional history",
    "Stroll the Danube promenade and watch the river traffic"
  ],
  subotica: [
    "Photograph the Art Nouveau City Hall and its stained-glass windows",
    "Visit the Subotica Synagogue, a masterpiece of Hungarian Art Nouveau",
    "Relax at Lake Palić with its Art Nouveau water tower",
    "Climb the City Hall tower for panoramic views",
    "Explore the local wine cellars of the surrounding region",
    "Visit the Raichle Palace, a stunning Art Nouveau villa"
  ],
  zlatibor: [
    "Ride the Sargan Eight narrow-gauge heritage railway",
    "Hike the rolling green hills of the Zlatibor plateau",
    "Visit Stopića Cave with its waterfalls and pools",
    "Try local Zlatibor pršut and kajmak at a traditional konoba",
    "Go paragliding over the mountain landscape",
    "Shop for handmade woolen products from Sirogojno"
  ],
  "tara-np": [
    "Hike to Banjska Stena viewpoint for the Drina Canyon panorama",
    "Explore the pristine pine forests on marked hiking trails",
    "Visit the Drina River House from the opposite bank",
    "Go kayaking or rafting on the Drina River",
    "Photograph the sunset over the canyon from multiple viewpoints",
    "Bird watch for golden eagles and other raptors"
  ],
  "djavolja-varos": [
    "Walk among the 202 earth pyramid formations",
    "Photograph the bizarre natural sculptures at different times of day",
    "Taste the mineral-rich water from the nearby springs",
    "Learn the local legends about the Devil's Town",
    "Hike the surrounding hills for alternative viewpoints",
    "Visit the nearby Prolom Banja spa for relaxation"
  ],
  sirogojno: [
    "Explore the open-air Staro Selo ethnographic museum",
    "Watch traditional crafts being demonstrated by local artisans",
    "Buy a hand-knitted Sirogojno woolen sweater as a souvenir",
    "Visit the authentic 19th-century wooden church",
    "Sample traditional Zlatibor cuisine at the museum konoba",
    "Walk through the old village houses and workshops"
  ],
  studenica: [
    "Admire the stunning white marble Church of the Virgin",
    "Study the exquisite 13th-century Byzantine frescoes inside",
    "Visit the monastery museum with its religious artifacts",
    "Walk the peaceful monastery grounds and gardens",
    "Light a candle at the shrine of Saint Stefan Nemanja",
    "Photograph the monastery against the Ibar River valley backdrop"
  ],
  sopocani: [
    "View the famous Dormition of the Virgin fresco masterpiece",
    "Explore the Church of the Holy Trinity and its Paleologian art",
    "Visit nearby Stari Ras, the medieval Serbian capital ruins",
    "See the Church of St. Peter, the oldest church in Serbia",
    "Photograph the monastery complex in the Raška valley",
    "Combine with a visit to the nearby Gradac Monastery"
  ],
  gamzigrad: [
    "Tour the Roman imperial palace complex of Felix Romuliana",
    "Walk the fortified walls and towers of the palace",
    "View the remarkable floor mosaics in the on-site museum",
    "Learn about Emperor Galerius who built this retirement palace",
    "Photograph the ruins against the surrounding hills",
    "Visit the nearby thermal springs that attracted the Romans"
  ],
  smederevo: [
    "Walk the entire perimeter of the massive medieval fortress",
    "Climb the towers for views over the Danube River",
    "Learn about the Serbian Despotate at the fortress museum",
    "Photograph the triangular fortress with its 25 towers",
    "Visit during the Smederevo Autumn cultural festival",
    "Explore the nearby Smederevo wine region cellars"
  ],
  kopaonik: [
    "Ski or snowboard on Serbia's best slopes in winter",
    "Hike the alpine meadows carpeted in wildflowers in summer",
    "Take the gondola to Pancic Peak for panoramic views",
    "Go mountain biking on the extensive trail network",
    "Try paragliding for an aerial view of the mountain",
    "Relax at the thermal spa in nearby Jošanička Banja"
  ],
  "fruska-gora": [
    "Tour the 16 historic Orthodox monasteries scattered across the hills",
    "Go wine tasting at the numerous wineries on the southern slopes",
    "Hike through the dense forests of the national park",
    "Visit the Vrdnik Tower and spa complex",
    "Cycle the scenic routes connecting monasteries and vineyards",
    "Bird watch in the protected forest areas"
  ],
  nis: [
    "Visit the Skull Tower (Ćele Kula), an eerie memorial from Ottoman times",
    "Explore the Niš Fortress and its park",
    "See the Mediana archaeological site with Constantine's villa",
    "Tour the Crveni Krst Nazi concentration camp museum",
    "Try the legendary Niš ćevapi at a local grill restaurant",
    "Walk the pedestrianized main street for shopping and cafes"
  ],
  petrovaradin: [
    "Explore the vast underground tunnel network of the fortress",
    "Visit the fortress clock tower with its unusual hands",
    "Attend the EXIT Festival if visiting in July",
    "Photograph the Danube panorama from the fortress walls",
    "Visit the Museum of Novi Sad inside the fortress",
    "Walk along the riverbank below the fortress walls"
  ],
  uvac: [
    "Take a boat tour through the spectacular meandering canyon",
    "Hike to the viewpoint overlooking the horseshoe bends",
    "Spot griffon vultures nesting on the limestone cliffs",
    "Photograph the emerald-green river from multiple angles",
    "Explore the cave formations along the canyon walls",
    "Visit the nearby Zlatibor plateau for more outdoor activities"
  ],
  "drina-house": [
    "Photograph the iconic Drina River House from the riverbank",
    "Visit in early morning or late afternoon for best lighting",
    "Swim in the Drina River near the house in summer",
    "Enjoy a meal at a riverside konoba in Bajina Bašta",
    "Take a boat trip on the Drina for alternative views",
    "Combine with a visit to Tara National Park nearby"
  ],
  "resava-cave": [
    "Take the guided tour through the illuminated cave chambers",
    "Photograph the spectacular stalactite and stalagmite formations",
    "See the Underground Throne and other unique rock formations",
    "Enjoy the refreshing 8°C temperature on a hot summer day",
    "Visit the nearby Resava Monastery and Lisine waterfall",
    "Learn about the cave's discovery and geological history"
  ],
  viminacium: [
    "Walk through the excavated Roman city streets and buildings",
    "Visit the Roman amphitheater, one of the largest in the Balkans",
    "See the reconstructed Roman villa with authentic interiors",
    "View the mammoth skeleton discovered at the archaeological site",
    "Explore the on-site museum with thousands of Roman artifacts",
    "Learn about the daily life in this once-thriving Roman city"
  ],
  default: [
    "Explore a historic fortress or castle in the area",
    "Try traditional Serbian grilled meats and local wines",
    "Visit a nearby Orthodox monastery or church",
    "Enjoy the natural scenery with a walk or hike nearby"
  
]
};
