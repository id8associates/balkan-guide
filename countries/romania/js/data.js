const touristPlaces = {
  bucharest: {
    name: "Bucharest",
    coords: [44.4268, 26.1025],
    image: "images/bucharest.jpg",
    location: "Southern Romania",
    description: "Often called 'Little Paris,' Romania's capital dazzles with monumental architecture, tree-lined boulevards, and a vibrant cultural scene. The massive Palace of the Parliament, charming Old Town (Lipscani), and elegant Ateneu Roman define this dynamic city.",
    type: "Capital City",
    rating: 4.5,
    reviews: 31240,
    bestTime: "April to October",
    tips: "Explore the Old Town on foot. Visit the Palace of the Parliament with a guided tour booked in advance."
  },
  brasov: {
    name: "Brasov",
    coords: [45.6427, 25.5887],
    image: "images/brasov.jpg",
    location: "Transylvania",
    description: "Nestled at the foot of Mount Tampa, Brasov is a fairy-tale Transylvanian city with a well-preserved medieval Old Town, the iconic Black Church, and cobblestone squares surrounded by the Carpathian Mountains.",
    type: "Medieval City",
    rating: 4.8,
    reviews: 24680,
    bestTime: "April to October",
    tips: "Take the cable car up Mount Tampa for panoramic views. Visit the Black Church to see its impressive organ."
  },
  sibiu: {
    name: "Sibiu",
    coords: [45.7983, 24.1256],
    image: "images/sibiu.jpg",
    location: "Transylvania",
    description: "A former European Capital of Culture, Sibiu charms visitors with its colorful baroque buildings, the iconic 'eyes of Sibiu' attic windows, three concentric squares, and the stunning Brukenthal Museum.",
    type: "Cultural City",
    rating: 4.7,
    reviews: 18930,
    bestTime: "April to October",
    tips: "Walk the Liar's Bridge (Podul Minciunilor) in the Upper Town. Visit the ASTRA Museum of Traditional Folk Civilization."
  },
  cluj: {
    name: "Cluj-Napoca",
    coords: [46.7667, 23.5833],
    image: "images/cluj.jpg",
    location: "Transylvania",
    description: "Romania's unofficial cultural capital and a vibrant university city, Cluj-Napoca boasts a lively arts scene, the majestic St. Michael's Church, and a youthful energy fueled by its large student population.",
    type: "University City",
    rating: 4.6,
    reviews: 17520,
    bestTime: "May to September",
    tips: "Explore the Central Park and climb the Cetatuia Hill for city views. Check out the street art in the city center."
  },
  timisoara: {
    name: "Timisoara",
    coords: [45.7567, 21.2289],
    image: "images/timisoara.jpg",
    location: "Western Romania",
    description: "The birthplace of the 1989 Romanian Revolution, Timisoara is a beautiful city of parks and pastel-colored baroque buildings. Its three central squares — Unirii, Victoriei, and Libertatii — form one of the most elegant urban ensembles in Romania.",
    type: "Historic City",
    rating: 4.6,
    reviews: 15280,
    bestTime: "April to October",
    tips: "Visit the Memorial Museum of the 1989 Revolution. Enjoy a coffee on Piata Unirii surrounded by Secession-style architecture."
  },
  sighisoara: {
    name: "Sighisoara",
    coords: [46.2167, 24.7833],
    image: "images/sighisoara.jpg",
    location: "Transylvania",
    description: "A UNESCO World Heritage site and one of the best-preserved medieval citadels in Europe, Sighisoara is the birthplace of Vlad the Impaler (Dracula). Its colorful houses, cobbled lanes, and iconic Clock Tower transport visitors back to the 15th century.",
    type: "UNESCO Citadel",
    rating: 4.7,
    reviews: 16240,
    bestTime: "April to October",
    tips: "Climb the Clock Tower for views over the citadel. Visit the room where Vlad Dracul is said to have been born."
  },
  "bran-castle": {
    name: "Bran Castle",
    coords: [45.5153, 25.3694],
    image: "images/bran-castle.jpg",
    location: "Transylvania",
    description: "Often marketed as 'Dracula's Castle,' Bran Castle is a dramatic medieval fortress perched on a cliff between mountains. While its connection to Vlad the Impaler is tenuous, its Gothic towers, secret passages, and stunning setting make it Romania's most famous castle.",
    type: "Castle",
    rating: 4.4,
    reviews: 31280,
    bestTime: "May to October",
    tips: "Arrive early (before 10 AM) to avoid crowds. Buy tickets online in advance during peak season."
  },
  "peles-castle": {
    name: "Peles Castle",
    coords: [45.3589, 25.5428],
    image: "images/peles-castle.jpg",
    location: "Prahova Valley",
    description: "One of the most stunning castles in Europe, Peles Castle is a neo-Renaissance masterpiece built for King Carol I. Its 160 rooms are lavishly decorated with hand-carved wood, stained glass, and priceless art collections, set against a Carpathian forest backdrop.",
    type: "Royal Castle",
    rating: 4.9,
    reviews: 28940,
    bestTime: "May to October",
    tips: "Only guided tours are allowed inside. Combine with a visit to nearby Sinaia Monastery and the summer residence of King Ferdinand."
  },
  "danube-delta": {
    name: "Danube Delta",
    coords: [45.0, 29.0],
    image: "images/danube-delta.jpg",
    location: "Eastern Romania",
    description: "A UNESCO World Heritage biosphere reserve, the Danube Delta is Europe's largest and best-preserved river delta. A labyrinth of waterways, reed beds, and floating islands, it is home to over 300 bird species, including pelicans, herons, and cormorants.",
    type: "Biosphere Reserve",
    rating: 4.8,
    reviews: 13450,
    bestTime: "April to September (birdwatching), May to October (general)",
    tips: "Book a multi-day boat tour from Tulcea to explore the remote channels. Bring binoculars and insect repellent."
  },
  transfagarasan: {
    name: "Transfagarasan Highway",
    coords: [45.3333, 24.5833],
    image: "images/transfagarasan.jpg",
    location: "Carpathian Mountains",
    description: "Built by Ceausescu's army, the Transfagarasan is one of the world's most spectacular drives. Winding 90 km through the Fagaras Mountains, it features dramatic hairpin turns, tunnels carved through rock, and the stunning Balea Lake at its highest point.",
    type: "Scenic Road",
    rating: 4.9,
    reviews: 22160,
    bestTime: "Late June to October (when open)",
    tips: "Check the opening dates — the road is only open from late June to October due to snow. Drive from north to south for the best views."
  },
  "corvin-castle": {
    name: "Corvin Castle",
    coords: [45.75, 22.8833],
    image: "images/corvin-castle.jpg",
    location: "Hunedoara, Transylvania",
    description: "One of the largest and most impressive Gothic-Renaissance castles in Europe, Corvin Castle (also known as Hunedoara Castle) rises dramatically on a rocky bluff above the small Zlasti River. Its towering spires, drawbridge, and deep dungeon evoke a true medieval fortress.",
    type: "Castle",
    rating: 4.7,
    reviews: 19210,
    bestTime: "April to October",
    tips: "Visit during the medieval festival in June for jousting and re-enactments. The castle is equally impressive at night when illuminated."
  },
  maramures: {
    name: "Maramures",
    coords: [47.6667, 24.5],
    image: "images/maramures.jpg",
    location: "Northern Romania",
    description: "A living museum of traditional Romanian village life, Maramures is famous for its tall wooden churches with shingled roofs and slender bell towers (eight are UNESCO-listed), intricate wooden gates, and preserved rural traditions and crafts.",
    type: "Cultural Region",
    rating: 4.7,
    reviews: 11280,
    bestTime: "May to October",
    tips: "Stay in a traditional guesthouse in Barsana or Sapanta. Visit the Merry Cemetery of Sapanta, where colorful crosses tell the life stories of the deceased in humorous epitaphs."
  },
  sucevita: {
    name: "Sucevita Monastery",
    coords: [47.7667, 25.75],
    image: "images/sucevita.jpg",
    location: "Bukovina",
    description: "The largest and most impressive of the Painted Monasteries of Bukovina, Sucevita Monastery is surrounded by thick defensive walls and covered inside and out with vibrant 16th-century frescoes depicting biblical scenes in remarkable detail.",
    type: "Painted Monastery",
    rating: 4.8,
    reviews: 9670,
    bestTime: "May to October",
    tips: "The interior frescoes are best viewed on a sunny day when natural light streams in. Combine with Voronet and Moldovita monasteries for a full-day tour."
  },
  voronet: {
    name: "Voronet Monastery",
    coords: [47.5167, 25.8667],
    image: "images/voronet.jpg",
    location: "Bukovina",
    description: "Known as the 'Sistine Chapel of the East,' Voronet Monastery's exterior walls are covered in vivid blue frescoes, a shade now known worldwide as 'Voronet blue.' The Last Judgment painting on the west facade is one of the masterpieces of Byzantine art.",
    type: "Painted Monastery",
    rating: 4.9,
    reviews: 14560,
    bestTime: "May to October",
    tips: "Visit early morning for the best light on the frescoes. Respect the dress code — shoulders and knees must be covered."
  },
  sarmizegetusa: {
    name: "Sarmizegetusa Regia",
    coords: [45.6167, 23.3],
    image: "images/sarmizegetusa.jpg",
    location: "Orastie Mountains",
    description: "The ancient capital of the Dacian kingdom, Sarmizegetusa Regia is a UNESCO World Heritage site nestled in the forests of the Orastie Mountains. The impressive stone fortress complex includes sanctuaries, defensive walls, and the unique Andesite Sun altar.",
    type: "Archaeological Site",
    rating: 4.6,
    reviews: 8120,
    bestTime: "May to October",
    tips: "Wear hiking shoes as the site involves walking through forest trails. Hire a guide to understand the Dacian history and the site's astronomical alignments."
  },
  "balea-lake": {
    name: "Balea Lake",
    coords: [45.6, 24.6167],
    image: "images/balea-lake.jpg",
    location: "Fagaras Mountains",
    description: "A stunning glacial lake perched at 2,040 meters on the Transfagarasan Highway, Balea Lake offers breathtaking alpine scenery. In summer it is a starting point for hikes, and in winter it hosts the famous Balea Ice Hotel — the only ice hotel in Eastern Europe.",
    type: "Glacial Lake",
    rating: 4.7,
    reviews: 11430,
    bestTime: "July to September (hiking), December to March (ice hotel)",
    tips: "The ice hotel is rebuilt annually from December to March. In summer, hike the ridge trail to Moldoveanu Peak, Romania's highest mountain."
  },
  vidraru: {
    name: "Vidraru Dam",
    coords: [45.3667, 24.6333],
    image: "images/vidraru.jpg",
    location: "Fagaras Mountains",
    description: "An engineering marvel of the Ceausescu era, the Vidraru Dam stands 166 meters tall on the Arges River. The dam's arch structure and the 100-meter-tall Poenari Castle ruins perched on the cliff above make for a dramatic landscape along the Transfagarasan route.",
    type: "Engineering Landmark",
    rating: 4.5,
    reviews: 8760,
    bestTime: "June to October",
    tips: "Climb the 1,480 steps to Poenari Castle (the real fortress of Vlad the Impaler) for incredible views of the dam and reservoir."
  },
  "mud-volcanoes": {
    name: "Mud Volcanoes",
    coords: [45.3667, 26.7167],
    image: "images/mud-volcanoes.jpg",
    location: "Buzau County",
    description: "A bizarre lunar-like landscape where natural gases push cold mud to the surface, creating small volcano cones that bubble and erupt. The Mud Volcanoes (Vulcanii Noroiosi) near Berca are a unique geological phenomenon that feels otherworldly.",
    type: "Natural Wonder",
    rating: 4.5,
    reviews: 7630,
    bestTime: "April to October",
    tips: "Best visited after rain when the mud is more active. Wear shoes you don't mind getting muddy. There are two areas — Paclele Mari and Paclele Mici."
  },
  "bigar-waterfall": {
    name: "Bigar Waterfall",
    coords: [44.8833, 21.95],
    image: "images/bigar-waterfall.jpg",
    location: "Caras-Severin County",
    description: "Once hailed as one of the world's most beautiful waterfalls, Bigar Waterfall is a magical sight where water flows over a moss-covered tufa rock formation, creating a thin, veiled curtain of water that shimmers like silk. The waterfall emerges directly from a cliffside spring.",
    type: "Waterfall",
    rating: 4.6,
    reviews: 8940,
    bestTime: "April to October",
    tips: "The site is currently under restoration — check access conditions before visiting. Combine with a trip to the nearby Nera Gorge National Park."
  }
};

const restaurantsData = {
  bucharest: [
    { name: "Caru' cu Bere", type: "Traditional", specialty: "Romanian dishes and local beer in a historic beer hall", url: "https://www.google.com/maps/search/Caru+cu+Bere+Bucharest+Romania", rating: 4.6 },
    { name: "Hanul lui Manuc", type: "Traditional", specialty: "Traditional Romanian platter and mititei", url: "https://www.google.com/maps/search/Hanul+lui+Manuc+Bucharest+Romania", rating: 4.5 },
    { name: "The Artist", type: "Fine Dining", specialty: "Modern Romanian tasting menu", url: "https://www.google.com/maps/search/The+Artist+Bucharest+Romania", rating: 4.8 },
    { name: "Nomad Skybar", type: "Fusion", specialty: "Cocktails and international tapas with panoramic views", url: "https://www.google.com/maps/search/Nomad+Skybar+Bucharest+Romania", rating: 4.7 },
    { name: "Beraria H", type: "Pub", specialty: "Craft beer and German-style pretzels", url: "https://www.google.com/maps/search/Beraria+H+Bucharest+Romania", rating: 4.4 },
    { name: "Barca", type: "Seafood", specialty: "Grilled fish and seafood platters", url: "https://www.google.com/maps/search/Barca+Restaurant+Bucharest+Romania", rating: 4.5 }
  ],
  brasov: [
    { name: "Sergiana", type: "Traditional", specialty: "Romanian meat platter and polenta", url: "https://www.google.com/maps/search/Sergiana+Brasov+Romania", rating: 4.6 },
    { name: "Bistro de l'Arte", type: "International", specialty: "Pasta and grilled meats in a courtyard setting", url: "https://www.google.com/maps/search/Bistro+de+lArte+Brasov+Romania", rating: 4.5 },
    { name: "Kasho Lounge", type: "Fusion", specialty: "Asian-European fusion and signature cocktails", url: "https://www.google.com/maps/search/Kasho+Lounge+Brasov+Romania", rating: 4.7 },
    { name: "Casa Romaneasca", type: "Traditional", specialty: "Sarmale and mamaliga with sour cream", url: "https://www.google.com/maps/search/Casa+Romaneasca+Brasov+Romania", rating: 4.4 },
    { name: "La Ceaun", type: "Traditional", specialty: "Bean soup in bread bowl and stews", url: "https://www.google.com/maps/search/La+Ceaun+Brasov+Romania", rating: 4.5 }
  ],
  sibiu: [
    { name: "Crama Sibiul Vechi", type: "Traditional", specialty: "Traditional Romanian cellar cuisine", url: "https://www.google.com/maps/search/Crama+Sibiul+Vechi+Sibiu+Romania", rating: 4.6 },
    { name: "Max", type: "International", specialty: "Grilled meats and fine wines", url: "https://www.google.com/maps/search/Max+Restaurant+Sibiu+Romania", rating: 4.5 },
    { name: "Kombinat Gastro-Brewery", type: "Brewpub", specialty: "Craft beer and pizza", url: "https://www.google.com/maps/search/Kombinat+Sibiu+Romania", rating: 4.4 },
    { name: "La Turn", type: "Traditional", specialty: "Saxon-inspired dishes in a historic tower", url: "https://www.google.com/maps/search/La+Turn+Sibiu+Romania", rating: 4.5 },
    { name: "Pardon Cafe", type: "Cafe", specialty: "Specialty coffee and homemade cakes", url: "https://www.google.com/maps/search/Pardon+Cafe+Sibiu+Romania", rating: 4.3 }
  ],
  cluj: [
    { name: "Toto Restaurant", type: "Fine Dining", specialty: "Romanian gourmet reinterpretation", url: "https://www.google.com/maps/search/Toto+Restaurant+Cluj+Romania", rating: 4.7 },
    { name: "Baracca", type: "Italian", specialty: "Pasta and wood-fired pizza", url: "https://www.google.com/maps/search/Baracca+Cluj+Romania", rating: 4.6 },
    { name: "Roata", type: "Traditional", specialty: "Grilled meats and local wine", url: "https://www.google.com/maps/search/Roata+Cluj+Romania", rating: 4.4 },
    { name: "Atelier Cafe", type: "Cafe", specialty: "Specialty brunch and coffee", url: "https://www.google.com/maps/search/Atelier+Cafe+Cluj+Romania", rating: 4.5 },
    { name: "Tiraila", type: "International", specialty: "Tapas and sharing platters", url: "https://www.google.com/maps/search/Tiraila+Cluj+Romania", rating: 4.5 }
  ],
  timisoara: [
    { name: "Neo", type: "Gastro Pub", specialty: "Romanian reinterpreted small plates", url: "https://www.google.com/maps/search/Neo+Timisoara+Romania", rating: 4.7 },
    { name: "Locanda del Corso", type: "Italian", specialty: "Homemade pasta and risotto", url: "https://www.google.com/maps/search/Locanda+del+Corso+Timisoara+Romania", rating: 4.6 },
    { name: "Piata 700", type: "Traditional", specialty: "Romanian stews and grilled dishes", url: "https://www.google.com/maps/search/Piata+700+Timisoara+Romania", rating: 4.5 },
    { name: "Casa Bunicii", type: "Traditional", specialty: "Home-style Romanian cooking", url: "https://www.google.com/maps/search/Casa+Bunicii+Timisoara+Romania", rating: 4.4 },
    { name: "Scart Loc Lejer", type: "Cafe", specialty: "Coffee and vegan-friendly brunch", url: "https://www.google.com/maps/search/Scart+Loc+Lejer+Timisoara+Romania", rating: 4.3 }
  ],
  sighisoara: [
    { name: "Casa Vlad Dracul", type: "Traditional", specialty: "Dracula-themed Romanian platters", url: "https://www.google.com/maps/search/Casa+Vlad+Dracul+Sighisoara+Romania", rating: 4.3 },
    { name: "La Scara", type: "Traditional", specialty: "Romanian stews and local wine", url: "https://www.google.com/maps/search/La+Scara+Sighisoara+Romania", rating: 4.5 },
    { name: "Cafe International", type: "Cafe", specialty: "Pastries and coffee in the citadel", url: "https://www.google.com/maps/search/Cafe+International+Sighisoara+Romania", rating: 4.4 },
    { name: "Cosmopolitan", type: "International", specialty: "Pasta and grilled specialties", url: "https://www.google.com/maps/search/Cosmopolitan+Sighisoara+Romania", rating: 4.3 },
    { name: "Burg Hostel", type: "Cafe", specialty: "Gourmet burgers and craft beer", url: "https://www.google.com/maps/search/Burg+Hostel+Sighisoara+Romania", rating: 4.2 }
  ],
  "bran-castle": [
    { name: "Casa Bran", type: "Traditional", specialty: "Grilled trout and polenta", url: "https://www.google.com/maps/search/Casa+Bran+Castle+Romania", rating: 4.4 },
    { name: "Coliba Haiducilor", type: "Traditional", specialty: "Grilled meats and local cheese", url: "https://www.google.com/maps/search/Coliba+Haiducilor+Bran+Romania", rating: 4.5 },
    { name: "Vila Bran", type: "Traditional", specialty: "Romanian mountain cuisine", url: "https://www.google.com/maps/search/Vila+Bran+Romania", rating: 4.3 },
    { name: "Conacul Bran", type: "Fine Dining", specialty: "Elevated Romanian cuisine with castle views", url: "https://www.google.com/maps/search/Conacul+Bran+Romania", rating: 4.6 }
  ],
  "peles-castle": [
    { name: "Restaurant Peles", type: "Traditional", specialty: "Romanian dishes with mountain views", url: "https://www.google.com/maps/search/Restaurant+Peles+Sinaia+Romania", rating: 4.4 },
    { name: "Taverna Ceausului", type: "Traditional", specialty: "Mountain lamb stew and polenta", url: "https://www.google.com/maps/search/Taverna+Ceausului+Sinaia+Romania", rating: 4.5 },
    { name: "Chip and Dale", type: "Cafe", specialty: "Coffee and pastries near the castle", url: "https://www.google.com/maps/search/Chip+and+Dale+Sinaia+Romania", rating: 4.3 },
    { name: "Hotel Palace Restaurant", type: "Fine Dining", specialty: "International fine dining in a historic hotel", url: "https://www.google.com/maps/search/Hotel+Palace+Sinaia+Romania", rating: 4.6 }
  ],
  "danube-delta": [
    { name: "Sulina Restaurant", type: "Seafood", specialty: "Fresh Danube fish stew", url: "https://www.google.com/maps/search/Sulina+Restaurant+Danube+Delta+Romania", rating: 4.5 },
    { name: "Deltaica", type: "Traditional", specialty: "Fish soup and grilled sturgeon", url: "https://www.google.com/maps/search/Deltaica+Tulcea+Romania", rating: 4.4 },
    { name: "Pescaria", type: "Seafood", specialty: "Grilled carp and catfish", url: "https://www.google.com/maps/search/Pescaria+Danube+Delta+Romania", rating: 4.3 },
    { name: "Vega", type: "Traditional", specialty: "Romanian dishes by the water", url: "https://www.google.com/maps/search/Vega+Tulcea+Romania", rating: 4.2 }
  ],
  transfagarasan: [
    { name: "Cabana Balea", type: "Traditional", specialty: "Mountain cheese and grilled sausages", url: "https://www.google.com/maps/search/Cabana+Balea+Transfagarasan+Romania", rating: 4.3 },
    { name: "Vidraru Restaurant", type: "Traditional", specialty: "Trout and lamb stew near the dam", url: "https://www.google.com/maps/search/Vidraru+Restaurant+Transfagarasan+Romania", rating: 4.2 },
    { name: "Popasul Drumetului", type: "Cafe", specialty: "Hot drinks and snacks at the viewpoint", url: "https://www.google.com/maps/search/Popasul+Drumetului+Transfagarasan+Romania", rating: 4.1 },
    { name: "Cabana Capra", type: "Traditional", specialty: "Grilled mountain trout and polenta", url: "https://www.google.com/maps/search/Cabana+Capra+Transfagarasan+Romania", rating: 4.3 }
  ],
  "corvin-castle": [
    { name: "La Castel", type: "Traditional", specialty: "Romanian platters and grilled meats", url: "https://www.google.com/maps/search/La+Castel+Hunedoara+Romania", rating: 4.4 },
    { name: "Coroana", type: "Traditional", specialty: "Sarmale and mamaliga", url: "https://www.google.com/maps/search/Coroana+Hunedoara+Romania", rating: 4.3 },
    { name: "Bistro 21", type: "International", specialty: "Burgers and pasta near the castle", url: "https://www.google.com/maps/search/Bistro+21+Hunedoara+Romania", rating: 4.2 },
    { name: "Casa Bucatarului", type: "Traditional", specialty: "Home-style Romanian dishes", url: "https://www.google.com/maps/search/Casa+Bucatarului+Hunedoara+Romania", rating: 4.3 }
  ],
  maramures: [
    { name: "La Grasu'", type: "Traditional", specialty: "Grilled meats and local brandy", url: "https://www.google.com/maps/search/La+Grasu+Maramures+Romania", rating: 4.5 },
    { name: "Hora Restaurant", type: "Traditional", specialty: "Maramures traditional platters", url: "https://www.google.com/maps/search/Hora+Restaurant+Maramures+Romania", rating: 4.4 },
    { name: "Casa Traditionala", type: "Traditional", specialty: "Homemade bread and pork stew", url: "https://www.google.com/maps/search/Casa+Traditionala+Maramures+Romania", rating: 4.3 },
    { name: "Hanul Povestilor", type: "Traditional", specialty: "Nettle soup and local cheese", url: "https://www.google.com/maps/search/Hanul+Povestilor+Maramures+Romania", rating: 4.5 }
  ],
  sucevita: [
    { name: "Popas Sucevita", type: "Traditional", specialty: "Bukovina trout and polenta", url: "https://www.google.com/maps/search/Popas+Sucevita+Romania", rating: 4.4 },
    { name: "Casa Bucovineana", type: "Traditional", specialty: "Mushroom soup and grilled meats", url: "https://www.google.com/maps/search/Casa+Bucovineana+Sucevita+Romania", rating: 4.5 },
    { name: "Pensiunea Plai", type: "Traditional", specialty: "Homemade Bukovina dishes", url: "https://www.google.com/maps/search/Pensiunea+Plai+Sucevita+Romania", rating: 4.3 },
    { name: "Casa Gherman", type: "Cafe", specialty: "Coffee and local pastries", url: "https://www.google.com/maps/search/Casa+Gherman+Sucevita+Romania", rating: 4.2 }
  ],
  voronet: [
    { name: "Casa Voronet", type: "Traditional", specialty: "Bukovina trout and mamaliga", url: "https://www.google.com/maps/search/Casa+Voronet+Romania", rating: 4.4 },
    { name: "Popasul Voronet", type: "Traditional", specialty: "Grilled pork and local wine", url: "https://www.google.com/maps/search/Popasul+Voronet+Romania", rating: 4.3 },
    { name: "Hanul Pasarilor", type: "Traditional", specialty: "Chicken stew with polenta", url: "https://www.google.com/maps/search/Hanul+Pasarilor+Voronet+Romania", rating: 4.4 },
    { name: "La Marcu", type: "Cafe", specialty: "Coffee and homemade cakes", url: "https://www.google.com/maps/search/La+Marcu+Voronet+Romania", rating: 4.2 }
  ],
  sarmizegetusa: [
    { name: "Cabana Sarmizegetusa", type: "Traditional", specialty: "Mountain trout and forest mushrooms", url: "https://www.google.com/maps/search/Cabana+Sarmizegetusa+Romania", rating: 4.3 },
    { name: "La Cetate", type: "Traditional", specialty: "Grilled meats and local cheese", url: "https://www.google.com/maps/search/La+Cetate+Sarmizegetusa+Romania", rating: 4.2 },
    { name: "Casa Dacilor", type: "Traditional", specialty: "Dacian-inspired stews", url: "https://www.google.com/maps/search/Casa+Dacilor+Orastie+Romania", rating: 4.3 },
    { name: "Hanul Dacilor", type: "Cafe", specialty: "Coffee and local pastries", url: "https://www.google.com/maps/search/Hanul+Dacilor+Sarmizegetusa+Romania", rating: 4.1 }
  ],
  "balea-lake": [
    { name: "Cabana Balea Cascada", type: "Traditional", specialty: "Mountain cheese and grilled trout", url: "https://www.google.com/maps/search/Cabana+Balea+Lake+Romania", rating: 4.4 },
    { name: "Ice Hotel Restaurant", type: "Seasonal", specialty: "Hot soup and mulled wine in an ice setting", url: "https://www.google.com/maps/search/Ice+Hotel+Balea+Lake+Romania", rating: 4.5 },
    { name: "Balea Waterfall Chalet", type: "Traditional", specialty: "Grilled meats and polenta", url: "https://www.google.com/maps/search/Balea+Waterfall+Romania", rating: 4.3 },
    { name: "Refugiul Balea", type: "Cafe", specialty: "Hot drinks and energy snacks", url: "https://www.google.com/maps/search/Refugiul+Balea+Romania", rating: 4.2 }
  ],
  vidraru: [
    { name: "Cabana Vidraru", type: "Traditional", specialty: "Grilled trout and mountain dishes", url: "https://www.google.com/maps/search/Cabana+Vidraru+Romania", rating: 4.3 },
    { name: "Popasul Barajului", type: "Cafe", specialty: "Coffee and light meals with dam views", url: "https://www.google.com/maps/search/Popasul+Barajului+Vidraru+Romania", rating: 4.2 },
    { name: "La Poenari", type: "Traditional", specialty: "Grilled meats after the Poenari climb", url: "https://www.google.com/maps/search/La+Poenari+Vidraru+Romania", rating: 4.3 },
    { name: "Casa Argeseanului", type: "Traditional", specialty: "Local stews and grilled sausages", url: "https://www.google.com/maps/search/Casa+Argeseanului+Vidraru+Romania", rating: 4.1 }
  ],
  "mud-volcanoes": [
    { name: "Popasul Buzau", type: "Traditional", specialty: "Buzau-style grilled meats", url: "https://www.google.com/maps/search/Popasul+Buzau+Mud+Volcanoes+Romania", rating: 4.2 },
    { name: "Casa Vulcanilor", type: "Traditional", specialty: "Traditional Romanian dishes", url: "https://www.google.com/maps/search/Casa+Vulcanilor+Berca+Romania", rating: 4.3 },
    { name: "Hanul Noroios", type: "Cafe", specialty: "Coffee and snacks near the volcanoes", url: "https://www.google.com/maps/search/Hanul+Noroios+Berca+Romania", rating: 4.1 },
    { name: "La Berca", type: "Traditional", specialty: "Bean soup and grilled pork", url: "https://www.google.com/maps/search/La+Berca+Romania", rating: 4.2 }
  ],
  "bigar-waterfall": [
    { name: "Cabana Bigar", type: "Traditional", specialty: "Trout and polenta", url: "https://www.google.com/maps/search/Cabana+Bigar+Waterfall+Romania", rating: 4.3 },
    { name: "Hanul Nerei", type: "Traditional", specialty: "Mountain dishes and local wine", url: "https://www.google.com/maps/search/Hanul+Nerei+Bigar+Romania", rating: 4.2 },
    { name: "Cascadei Bigar", type: "Cafe", specialty: "Coffee and light snacks with waterfall views", url: "https://www.google.com/maps/search/Cascadei+Bigar+Romania", rating: 4.1 },
    { name: "Popasul Carasului", type: "Traditional", specialty: "Grilled meats and local cheese", url: "https://www.google.com/maps/search/Popasul+Carasului+Bigar+Romania", rating: 4.3 }
  ],
  default: [
    { name: "La Mama", type: "Traditional", specialty: "Romanian home-style cooking", url: "https://www.google.com/maps/search/Romanian+traditional+restaurant+Romania", rating: 4.4 },
    { name: "Hanul Traditional", type: "Traditional", specialty: "Sarmale and mititei", url: "https://www.google.com/maps/search/Traditional+Romanian+restaurant+Romania", rating: 4.3 },
    { name: "Bistro 24", type: "International", specialty: "International dishes and local wine", url: "https://www.google.com/maps/search/International+restaurant+Romania", rating: 4.2 },
    { name: "Cafe Boema", type: "Cafe", specialty: "Coffee and Romanian pastries", url: "https://www.google.com/maps/search/Cafe+Romania", rating: 4.1 }
  ]
,
  "default": [
    { name: "Traditional Restaurant", type: "Traditional", specialty: "Romanian Cuisine", url: "https://www.google.com/maps/search/?api=1&query=Traditional+Restaurant+Romania", rating: 4.5 },
    { name: "Cafenea", type: "Café", specialty: "Coffee & Desserts", url: "https://www.google.com/maps/search/?api=1&query=Cafenea+Romania", rating: 4.4 },
    { name: "Grill House", type: "Grill", specialty: "Mici & Steaks", url: "https://www.google.com/maps/search/?api=1&query=Grill+House+Romania", rating: 4.6 },
    { name: "Wine Bistro", type: "Wine Bar", specialty: "Romanian Wines", url: "https://www.google.com/maps/search/?api=1&query=Wine+Bistro+Romania", rating: 4.3 }
  ]
};;
const accommodationsData = {
  bucharest: [
    { name: "InterContinental Bucharest", type: "Luxury Hotel", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Bucharest+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Cismigiu", type: "Boutique Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Bucharest+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Moxy Bucharest Old Town", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Bucharest+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hostel Little Bucharest", type: "Hostel", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Bucharest+Romania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  brasov: [
    { name: "Hotel Aro Palace", type: "Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Brasov+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Bella Muzica", type: "Boutique Hotel", price: "$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Brasov+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Kronwell Hotel", type: "Hotel", price: "$$$", rating: 4.8, url: "https://www.booking.com/searchresults.html?ss=Brasov+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Rolling Stone Hostel", type: "Hostel", price: "$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Brasov+Romania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  sibiu: [
    { name: "Hotel Imparatul Romanilor", type: "Historic Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Sibiu+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Villa Bohemia", type: "Boutique Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Sibiu+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Apollo Central", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Sibiu+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Pension Ileana", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Sibiu+Romania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  cluj: [
    { name: "Hotel Grand Italia", type: "Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Cluj+Napoca+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Platinia", type: "Boutique Hotel", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Cluj+Napoca+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Bristol Hotel", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Cluj+Napoca+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Retro Hostel", type: "Hostel", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Cluj+Napoca+Romania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  timisoara: [
    { name: "Hotel Timisoara", type: "Hotel", price: "$$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Timisoara+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "NH Timisoara", type: "Hotel", price: "$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Timisoara+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel K7", type: "Boutique Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Timisoara+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hostel Costel", type: "Hostel", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Timisoara+Romania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  sighisoara: [
    { name: "Hotel Sighisoara", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Sighisoara+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Casa Dracula", type: "Guest House", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Sighisoara+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Villa Rose", type: "Boutique Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Sighisoara+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Pension casa Sighisoara", type: "Guest House", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Sighisoara+Romania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "bran-castle": [
    { name: "Hotel Bran", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Bran+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Villa Bran", type: "Guest House", price: "$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Bran+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Cabana Bran", type: "Cabin", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Bran+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Conacul Bran", type: "Boutique Hotel", price: "$$$", rating: 4.7, url: "https://www.booking.com/searchresults.html?ss=Bran+Romania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "peles-castle": [
    { name: "Hotel Palace", type: "Historic Hotel", price: "$$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Sinaia+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Rina Sinaia", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Sinaia+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Cabana Miorita", type: "Cabin", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Sinaia+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Villa Gabriela", type: "Guest House", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Sinaia+Romania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "danube-delta": [
    { name: "Hotel Delta", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Tulcea+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Complex Deltaica", type: "Resort", price: "$$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Tulcea+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Pensiunea Egreta", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Danube+Delta+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Floating Guesthouse", type: "Boat", price: "$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Danube+Delta+Romania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  transfagarasan: [
    { name: "Cabana Balea", type: "Mountain Cabin", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Balea+Lake+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Casa Capra", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Transfagarasan+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Pensiunea Alex", type: "Guest House", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Transfagarasan+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Ice Hotel Balea", type: "Ice Hotel", price: "$$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Balea+Lake+Romania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "corvin-castle": [
    { name: "Hotel Hunedoara", type: "Hotel", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Hunedoara+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Pension Printesa", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Hunedoara+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Castel", type: "Guest House", price: "$$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Hunedoara+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "B&B La Curte", type: "Bed & Breakfast", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Hunedoara+Romania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  maramures: [
    { name: "Pensiunea Munteanu", type: "Guest House", price: "$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Maramures+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Maramures", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Maramures+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Vila Barsana", type: "Villa", price: "$$", rating: 4.6, url: "https://www.booking.com/searchresults.html?ss=Maramures+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Pension Casa Traditionala", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Maramures+Romania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  sucevita: [
    { name: "Pensiunea Sucevita", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Sucevita+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Casa Bucovineana", type: "Guest House", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Sucevita+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Raraul", type: "Hotel", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Sucevita+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Pensiunea Plai", type: "Guest House", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Sucevita+Romania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  voronet: [
    { name: "Pensiunea Voronet", type: "Guest House", price: "$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Voronet+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Bucovina", type: "Hotel", price: "$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Voronet+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Casa Humor", type: "Guest House", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Voronet+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Pensiunea Gura Humorului", type: "Guest House", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Voronet+Romania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  sarmizegetusa: [
    { name: "Cabana Dacilor", type: "Cabin", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Sarmizegetusa+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Pensiunea Cetate", type: "Guest House", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Sarmizegetusa+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Orastie", type: "Hotel", price: "$$", rating: 4.1, url: "https://www.booking.com/searchresults.html?ss=Orastie+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Pensiunea La Cetate", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Sarmizegetusa+Romania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "balea-lake": [
    { name: "Cabana Balea", type: "Mountain Cabin", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Balea+Lake+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Ice Hotel Balea", type: "Ice Hotel", price: "$$$", rating: 4.5, url: "https://www.booking.com/searchresults.html?ss=Balea+Lake+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Pensiunea Cascada", type: "Guest House", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Balea+Lake+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Refugiul Balea", type: "Mountain Hut", price: "$", rating: 4.1, url: "https://www.booking.com/searchresults.html?ss=Balea+Lake+Romania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  vidraru: [
    { name: "Pensiunea Vidraru", type: "Guest House", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Vidraru+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Cabana Dam", type: "Cabin", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Vidraru+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Curtea de Arges", type: "Hotel", price: "$$", rating: 4.4, url: "https://www.booking.com/searchresults.html?ss=Curtea+de+Arges+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Pensiunea Argesana", type: "Guest House", price: "$", rating: 4.1, url: "https://www.booking.com/searchresults.html?ss=Vidraru+Romania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "mud-volcanoes": [
    { name: "Pensiunea Berca", type: "Guest House", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Berca+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Buzau", type: "Hotel", price: "$$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Buzau+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Pensiunea Vulcanii", type: "Guest House", price: "$", rating: 4.1, url: "https://www.booking.com/searchresults.html?ss=Buzau+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Casa Noroioasa", type: "Guest House", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Berca+Romania&aid=2086573&no_rooms=1&group_adults=2" }
  ],
  "bigar-waterfall": [
    { name: "Pensiunea Bigar", type: "Guest House", price: "$", rating: 4.3, url: "https://www.booking.com/searchresults.html?ss=Bigar+Waterfall+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Hotel Caras", type: "Hotel", price: "$$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Caras+Severin+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Pensiunea Nera", type: "Guest House", price: "$", rating: 4.1, url: "https://www.booking.com/searchresults.html?ss=Nera+Romania&aid=2086573&no_rooms=1&group_adults=2" },
    { name: "Casa de la Cascada", type: "Guest House", price: "$", rating: 4.2, url: "https://www.booking.com/searchresults.html?ss=Bigar+Romania&aid=2086573&no_rooms=1&group_adults=2" }
  ]
};

const thingsToDoData = {
  bucharest: [
    "Tour the massive Palace of the Parliament — the world's second-largest administrative building",
    "Stroll through the charming Old Town (Lipscani) with its lively bars and restaurants",
    "Visit the Romanian Athenaeum for a classical concert",
    "Explore the Village Museum, an open-air ethnographic park",
    "Walk along Victoriei Avenue past elegant 19th-century architecture",
    "Relax in Cismigiu Gardens, Bucharest's oldest public park"
  ],
  brasov: [
    "Climb Mount Tampa via cable car for panoramic views over Brasov",
    "Visit the Black Church, Romania's largest Gothic church",
    "Wander the Council Square (Piata Sfatului) and its colorful baroque buildings",
    "Explore the narrowest street in Romania — Strada Sforii",
    "Walk the medieval fortifications along the White Tower",
    "Take a day trip to nearby Bran Castle"
  ],
  sibiu: [
    "Cross the famous Liar's Bridge (Podul Minciunilor) in the Upper Town",
    "Visit the Brukenthal National Museum, Romania's oldest museum",
    "Explore the ASTRA Museum of Traditional Folk Civilization",
    "Climb the Council Tower for views over the Grand Square",
    "Photograph the iconic 'eyes of Sibiu' attic windows",
    "Walk through the Lower Town's charming artisan streets"
  ],
  cluj: [
    "Visit St. Michael's Church, the second-largest Gothic church in Romania",
    "Explore the Ethnographic Museum of Transylvania",
    "Walk up Cetatuia Hill for panoramic views of the city",
    "Discover the vibrant street art scene in the city center",
    "Relax in Central Park and visit the casino building",
    "Explore the Botanical Garden, one of the largest in Eastern Europe"
  ],
  timisoara: [
    "Admire the Union Square (Piata Unirii) with its Secession-style architecture",
    "Visit the Memorial Museum of the 1989 Revolution",
    "Explore the Timisoara Metropolitan Cathedral",
    "Walk through the Roses Park (Parcul Rozelor)",
    "See the Huniade Castle, the oldest building in Timisoara",
    "Enjoy coffee at one of the many outdoor terraces on Victoriei Square"
  ],
  sighisoara: [
    "Climb the 64-meter Clock Tower for views over the medieval citadel",
    "Visit the birthplace of Vlad the Impaler (Dracula)",
    "Explore the covered Stairs (Scara Acoperita) leading to the school",
    "Wander the cobblestone streets of the UNESCO-listed citadel",
    "Visit the Church on the Hill with its 15th-century frescoes",
    "Attend the annual Medieval Festival in July"
  ],
  "bran-castle": [
    "Tour the Gothic halls and secret passages of Dracula's Castle",
    "Walk through the castle's medieval torture exhibit",
    "Explore the surrounding village of Bran with its craft markets",
    "Photograph the castle from the hill opposite for the best angle",
    "Visit the nearby Rasnov Fortress for more medieval history",
    "Hike the trails in the Carpathian forests around the castle"
  ],
  "peles-castle": [
    "Tour the lavishly decorated 160 rooms of Peles Castle",
    "Visit the nearby Pelisor Castle, the Art Nouveau residence",
    "Explore the Sinaia Monastery, founded by Prince Mihail Cantacuzino",
    "Walk through the castle's magnificent gardens and terraces",
    "Take the cable car up to the Bucegi Mountains for hikes",
    "Visit the Sinaia Casino, a beautiful 19th-century building"
  ],
  "danube-delta": [
    "Take a boat tour through the narrow canals of the delta",
    "Spot pelicans, herons, cormorants and over 300 bird species",
    "Visit the remote fishing villages of Sulina and Crisan",
    "Fish for catfish, pike, and carp in the delta channels",
    "Explore the Letea Forest, Europe's oldest subtropical forest",
    "Watch the sunrise over the reed beds from a floating guesthouse"
  ],
  transfagarasan: [
    "Drive the entire 90 km of the Transfagarasan Highway",
    "Stop at Balea Lake at the highest point (2,040 m)",
    "Photograph the dramatic hairpin turns from multiple viewpoints",
    "Visit Vidraru Dam and Poenari Castle along the route",
    "Hike from Balea Lake to the Moldoveanu Peak trailhead",
    "Capture the sunset over the Fagaras Mountains"
  ],
  "corvin-castle": [
    "Tour the impressive Gothic halls and Renaissance galleries",
    "Cross the drawbridge over the Zlasti River",
    "Explore the castle's deep dungeon and torture chamber",
    "Climb the towers for views over Hunedoara",
    "Photograph the castle's dramatic silhouette at night when lit",
    "Visit during the annual medieval festival in June"
  ],
  maramures: [
    "Visit the Merry Cemetery of Sapanta with its colorful carved crosses",
    "Explore the UNESCO-listed wooden churches of Barsana, Surdesti, and Ieud",
    "Photograph the ornate wooden gates that mark traditional houses",
    "Visit local artisans weaving and woodcarving in village workshops",
    "Ride the Mocanita steam train through the Vaser Valley",
    "Taste local palinca (fruit brandy) and traditional dishes"
  ],
  sucevita: [
    "Admire the exterior frescoes depicting the Ladder of St. John Climacus",
    "Visit the monastery's museum of art and religious artifacts",
    "Explore the thick defensive walls surrounding the monastery",
    "Photograph the vivid 16th-century frescoes on the south wall",
    "Combine with visits to Moldovita and Arbore monasteries",
    "Hike in the surrounding Bukovina countryside"
  ],
  voronet: [
    "Marvel at the famous 'Voronet blue' frescoes on the west facade",
    "Study the Last Judgment painting, a Byzantine masterpiece",
    "Visit the monastery's small museum of religious art",
    "Photograph the exterior in the early morning light",
    "Explore the village of Gura Humorului nearby",
    "Combine with visits to Sucevita and Moldovita monasteries"
  ],
  sarmizegetusa: [
    "Walk through the ancient Dacian fortress ruins",
    "Visit the unique Andesite Sun altar, a Dacian calendar",
    "Explore the sacred sanctuaries and temple foundations",
    "Hike the forest trails connecting the different terraces",
    "Visit the nearby Ulpia Traiana Sarmizegetusa (Roman city)",
    "Learn about Dacian history at the on-site information center"
  ],
  "balea-lake": [
    "Hike the ridge trails from Balea Lake to Moldoveanu Peak",
    "Stay at the Balea Ice Hotel (winter only)",
    "Photograph the turquoise glacial lake against the mountain backdrop",
    "Walk the Balea Waterfall trail from the lower cable car station",
    "Ski or snowboard on the nearby slopes in winter",
    "Enjoy mountain trout and polenta at the cabana restaurant"
  ],
  vidraru: [
    "Walk across the top of the 166-meter Vidraru Dam",
    "Climb the 1,480 steps to Poenari Castle — the real fortress of Vlad the Impaler",
    "Take a boat trip on Vidraru Lake",
    "Photograph the dam from the viewpoint on the Transfagarasan road",
    "Visit the nearby statuary park featuring communist-era sculptures",
    "Learn about the dam's construction at the small on-site museum"
  ],
  "mud-volcanoes": [
    "Watch the bubbling mud cones at Paclele Mari and Paclele Mici",
    "Photograph the strange lunar-like landscape",
    "Touch the cool, clay-rich mud (it's good for the skin!)",
    "Visit the nearby Berca salt mines",
    "Explore the Colti Museum of Amber, unique in Romania",
    "Take a walk through the surrounding badlands of Buzau County"
  ],
  "bigar-waterfall": [
    "Photograph the iconic veil-like waterfall cascading over moss-covered rocks",
    "Walk the wooden path that winds around the waterfall",
    "Visit the nearby Nera Gorge-Beusnita National Park",
    "Explore the Ochiul Beiului (Beul's Eye) lake, a stunning blue karst lake",
    "Combine with a trip to the Cheile Nerei hiking trails",
    "Enjoy a picnic in the forested surroundings"
  ],
  default: [
    "Explore the local historical and cultural attractions",
    "Try traditional Romanian cuisine at a local restaurant",
    "Visit nearby natural landmarks and scenic viewpoints",
    "Photograph the unique architecture and landscapes",
    "Learn about the area's history at local museums",
    "Enjoy outdoor activities like hiking, walking, or cycling"
  
]
};
