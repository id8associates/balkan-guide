/**
 * Bosnia & Herzegovina — Tourist Place Data
 * Keyed by placeId, used by country.js
 */

const touristPlaces = {
  "bascarsija": {
    name: "Sarajevo Old Town (Baščaršija)",
    coords: [43.8591, 18.4310],
    image: "images/bascarsija.jpg",
    location: "Sarajevo",
    description: "The capital and largest city of Bosnia and Herzegovina, Sarajevo is a fascinating blend of East and West. The old town (Baščaršija) is a vibrant Ottoman-era bazaar with cobblestone streets, copper workshops, mosques, and cevapi shops. Nicknamed the 'European Jerusalem' for its historic coexistence of mosques, Catholic and Orthodox churches, and synagogues. Host of the 1984 Winter Olympics and site of the assassination of Archduke Franz Ferdinand triggering WWI.",
    type: "Cultural",
    rating: 4.9,
    reviews: 3156,
    bestTime: "May–September (warm, festivals)",
    tips: "Try traditional Bosnian coffee here"
  },
  "stari-most": {
    name: "Stari Most (Old Bridge)",
    coords: [43.3371, 17.8150],
    image: "images/stari-most.jpg",
    location: "Mostar",
    description: "One of Bosnia's most iconic destinations, Mostar is famous for its UNESCO-listed Stari Most (Old Bridge), a 16th-century Ottoman arched bridge rebuilt after its destruction in the 1993 war. The old town features cobbled streets, stone houses, artisan shops, and traditional restaurants along the Neretva River. The bridge is the stage for the famous local tradition of diving into the Neretva River. UNESCO World Heritage Site (2005) and powerful symbol of reconciliation.",
    type: "Historical",
    rating: 4.9,
    reviews: 2847,
    bestTime: "May–October (April–May ideal — spring flowers, pleasant temps)",
    tips: "Watch traditional bridge diving at midday"
  },
  "kravice": {
    name: "Kravice Waterfalls",
    coords: [43.1551, 17.5418],
    image: "images/kravice.jpg",
    location: "Ljubuški",
    description: "A stunning 25-meter-high, 120-meter-wide semicircular waterfall on the Trebižat River, often called 'Bosnia's Plitvice.' The waterfall cascades into a large turquoise pool perfect for swimming in summer. Surrounded by lush greenery and small restaurants serving local trout. One of the most beautiful natural attractions in the Balkans; much less crowded and cheaper than Croatia's Plitvice Lakes.",
    type: "Nature",
    rating: 4.8,
    reviews: 1923,
    bestTime: "May–September (July/August best for water levels)",
    tips: "Bring swimwear — the pool is refreshing!"
  },
  "blagaj": {
    name: "Blagaj Tekke",
    coords: [43.2581, 17.9018],
    image: "images/blagaj.jpg",
    location: "Blagaj near Mostar",
    description: "A historic village at the source of the Buna River (Vrelo Bune), one of the largest and most beautiful karst springs in Europe. The 16th-century Blagaj Tekke (Dervish monastery) is built into the cliffside right at the spring's mouth, creating a scene of extraordinary beauty. The emerald-green water and the mist rising from the cave are mesmerizing. UNESCO Tentative World Heritage site and one of Europe's strongest karst springs (up to 43 m³/s).",
    type: "Cultural/Spiritual",
    rating: 4.7,
    reviews: 1567,
    bestTime: "April–October (spring and fall for best photos with mist)",
    tips: "Visit the riverside restaurants after"
  },
  "jajce": {
    name: "Jajce",
    coords: [44.3425, 17.2708],
    image: "images/jajce.jpg",
    location: "Jajce",
    description: "A historic city built around an extraordinary 22-meter-high waterfall (Pliva Waterfall) that falls directly into the city center — one of the only waterfalls in the world located within a town. Jajce was the capital of the medieval Kingdom of Bosnia and also where Yugoslavia was founded in 1943 during the AVNOJ conference. Rich medieval and WWII history with beautiful Pliva Lakes nearby.",
    type: "Historical",
    rating: 4.6,
    reviews: 982,
    bestTime: "April–October (spring for maximum waterfall volume)",
    tips: "See the Pliva waterfalls at night — they're illuminated"
  },
  "sutjeska": {
    name: "Sutjeska National Park",
    coords: [43.3500, 18.4500],
    image: "images/sutjeska.jpg",
    location: "Foča",
    description: "The oldest and largest national park in Bosnia and Herzegovina, home to Maglić (2,386 m — the country's highest peak) and Perućica, one of the last two remaining primeval forests in Europe. The park also features the stunning Sutjeska River canyon and the massive Tjentište war memorial commemorating the 1943 Battle of Sutjeska. Untouched wilderness with Europe's last primeval forests.",
    type: "Nature",
    rating: 4.8,
    reviews: 742,
    bestTime: "June–September (July–August for peak hiking)",
    tips: "Book accommodation in advance — limited options"
  },
  "travnik": {
    name: "Travnik",
    coords: [44.2258, 17.6666],
    image: "images/travnik.jpg",
    location: "Travnik",
    description: "A historic town in central Bosnia, once the capital of the Ottoman Viziers of Bosnia. Known as the 'City of Viziers,' Travnik features a well-preserved old town, two restored clock towers (sahat kule), several mosques, and the birthplace of Ivo Andrić, Yugoslavia's only Nobel Prize laureate in literature (1961). Rich Ottoman history and famous for Travnik cheese and ćevapi.",
    type: "Cultural",
    rating: 4.5,
    reviews: 645,
    bestTime: "May–September (summer for mountain hikes)",
    tips: "Visit the Andrićgrad cultural complex"
  },
  "mehmed-pasa": {
    name: "Mehmed Paša Sokolović Bridge",
    coords: [43.7861, 19.2883],
    image: "images/mehmed-pasa.jpg",
    location: "Višegrad",
    description: "A town in eastern Bosnia most famous for the UNESCO-listed Mehmed Paša Sokolović Bridge across the Drina River — immortalized in Ivo Andrić's Nobel Prize-winning novel 'The Bridge on the Drina.' The town also features Andrićgrad (a stone town built by filmmaker Emir Kusturica), inspired by medieval and Ottoman architecture. UNESCO World Heritage Site (2007) and masterpiece of 16th-century Ottoman engineering designed by Mimar Sinan.",
    type: "Historical",
    rating: 4.7,
    reviews: 1123,
    bestTime: "April–October (spring for river volume)",
    tips: "Take a boat ride under the bridge"
  },
  "boracko": {
    name: "Boračko Lake",
    coords: [43.5200, 17.9500],
    image: "images/boracko.jpg",
    location: "Konjic",
    description: "A glacial lake surrounded by dramatic mountain scenery near Konjic, perfect for outdoor activities. Sits at 398 meters above sea level surrounded by dense coniferous forests.",
    type: "Nature",
    rating: 4.6,
    reviews: 428,
    bestTime: "Summer for swimming, winter for snow",
    tips: "Great base for hiking in nearby mountains"
  },
  "jahorina": {
    name: "Jahorina Mountain",
    coords: [43.7300, 18.5600],
    image: "images/jahorina.jpg",
    location: "Pale",
    description: "The two main mountains that hosted the 1984 Winter Olympics. Jahorina (1,916 m) is the largest ski resort in Bosnia, with 20 km of slopes, while Bjelašnica (2,067 m) offers steeper terrain and spectacular views of Sarajevo. Both have been revitalized with modern lifts and offer some of the best-value skiing in Europe. Hosted the 1984 Winter Olympic Games and the 2019 European Youth Olympic Winter Festival.",
    type: "Adventure",
    rating: 4.5,
    reviews: 892,
    bestTime: "December–March for skiing (January–February best snow)",
    tips: "Much more affordable than Alpine resorts"
  },
  "vjetrenica": {
    name: "Vjetrenica Cave",
    coords: [42.8300, 17.8500],
    image: "images/vjetrenica.jpg",
    location: "Ravno",
    description: "One of the most important caves in the Dinaric Alps featuring impressive stalactites, stalagmites, underground lakes, and endemic species including a cave-dwelling salamander.",
    type: "Nature",
    rating: 4.7,
    reviews: 356,
    bestTime: "Summer (cool escape)",
    tips: "Bring a light jacket — it's cold inside"
  },
  "banja-luka": {
    name: "Banja Luka",
    coords: [44.7758, 17.1850],
    image: "images/banja-luka.jpg",
    location: "Banja Luka",
    description: "The second-largest city in Bosnia and Herzegovina and the administrative center of Republika Srpska. Known as the 'Green City' for its abundant parks, tree-lined boulevards, and the beautiful Vrbas River canyon. The city's main landmark is the Kastel Fortress on the riverbank, and it boasts the recently rebuilt Ferhadija Mosque, a masterpiece of Ottoman architecture. Lively city with excellent cafe culture and natural beauty.",
    type: "Urban",
    rating: 4.4,
    reviews: 1245,
    bestTime: "May–September (summer for Vrbas rafting)",
    tips: "Try the famous Banja Luka ćevapi"
  },
  "una-np": {
    name: "Una National Park",
    coords: [44.8000, 16.0000],
    image: "images/una-np.jpg",
    location: "Bihać",
    description: "A stunning national park protecting the Una River and its spectacular waterfalls, rapids, and emerald-green pools. The park's crown jewel is the Štrbački Buk waterfall, a 24-meter-high cascade. The Una River (name means 'the one') is known for its extraordinary turquoise color and is considered one of Europe's most beautiful rivers. Pristine nature with world-class waterfalls and excellent rafting.",
    type: "Nature/Adventure",
    rating: 4.8,
    reviews: 567,
    bestTime: "May–September (rafting best May–June with high water)",
    tips: "Book rafting in advance during peak season"
  },
  "srebrenica": {
    name: "Srebrenica",
    coords: [44.1042, 19.2958],
    image: "images/srebrenica.jpg",
    location: "Srebrenica",
    description: "A small town known for the 1995 genocide memorialized at the Srebrenica-Potočari Memorial Center. Also features natural springs and historic spa facilities.",
    type: "Historical/Memorial",
    rating: 4.3,
    reviews: 234,
    bestTime: "July 11 for commemorations",
    tips: "Visit the memorial center with respect"
  },
  "trebinje": {
    name: "Trebinje",
    coords: [42.7112, 18.3442],
    image: "images/trebinje.jpg",
    location: "Trebinje",
    description: "A beautiful Ottoman-era city on the Trebišnjica River, often called 'the city of sun and platan trees.' Trebinje is Herzegovina's southernmost city, sitting near the border with Montenegro. Its old town (Stari Grad) features stone houses, the Arslanagić Bridge, and the picturesque Hercegovačka Gračanica monastery perched on a hill. Authentic, uncrowded Ottoman atmosphere and excellent wine region (famous vranac and žilavka wines).",
    type: "Cultural",
    rating: 4.6,
    reviews: 876,
    bestTime: "April–October (September–October best for wine harvest)",
    tips: "Visit local wineries and taste Vranac wine"
  },
  "pocitelj": {
    name: "Počitelj",
    coords: [43.1833, 17.7167],
    image: "images/pocitelj.jpg",
    location: "Čapljina",
    description: "One of the most beautiful Ottoman-era fortified villages in the Balkans. Perched on a hillside along the Neretva River, Počitelj features a well-preserved medieval stone town with a clock tower (Sahat Kula), a mosque, an inn (han), and a madrasa (Islamic school) — all built between the 14th and 17th centuries. The village offers breathtaking views of the Neretva Valley. UNESCO Tentative World Heritage Site (2007).",
    type: "Historical",
    rating: 4.5,
    reviews: 412,
    bestTime: "April–October (spring and fall for comfortable climbing)",
    tips: "Climb the fortress for valley views"
  },
  "medjugorje": {
    name: "Međugorje",
    coords: [43.1917, 17.6667],
    image: "images/medjugorje.jpg",
    location: "Međugorje",
    description: "One of the most important Catholic pilgrimage sites in the world. Since 1981, when six local children reported visions of the Virgin Mary, Međugorje has drawn millions of pilgrims. The town features several large churches, the Apparition Hill (Podbrdo), and Cross Mountain (Križevac), plus countless shops selling religious items. Third most important Catholic pilgrimage site in Europe with over 30 million visitors since 1981.",
    type: "Spiritual",
    rating: 4.4,
    reviews: 2341,
    bestTime: "March–November (June–August peak pilgrimage season)",
    tips: "Attend the evening prayer program at St. James Church"
  },
  "neum": {
    name: "Neum",
    coords: [42.7000, 17.6000],
    image: "images/neum.jpg",
    location: "Neum",
    description: "Bosnia and Herzegovina's only Adriatic coastal town, a narrow 20 km stretch of coast between Croatian territories. Neum features small pebble beaches, several large hotels, and a relaxed Mediterranean atmosphere. It's more affordable than neighboring Croatian coastal towns like Dubrovnik (just 60 km away). Bosnia's only access to the Adriatic Sea with a Mediterranean flavor.",
    type: "Coastal",
    rating: 4.2,
    reviews: 678,
    bestTime: "June–September (July–August peak beach season)",
    tips: "Day trip to Dubrovnik, Croatia (1 hour away)"
  },
  "lukomir": {
    name: "Lukomir",
    coords: [43.7333, 18.2500],
    image: "images/lukomir.jpg",
    location: "Bjelašnica Mountain",
    description: "The highest permanently inhabited village in Bosnia (1,495 m), Lukomir offers a glimpse into traditional Bosnian mountain life that has remained largely unchanged for centuries. Stone-roofed houses, sheepherding, and stunning views of the Rakitnica River canyon. Authentic traditional village life and incredible canyon views with unique stone-roof architecture. Living museum of medieval Dinaric lifestyle.",
    type: "Cultural",
    rating: 4.8,
    reviews: 289,
    bestTime: "June–September (village accessible, shepherds present)",
    tips: "Hiking from Bjelašnica — winter inaccessible due to snow"
  }
};

/**
 * Restaurant Data — keyed by placeId, Google Maps links
 */
const restaurantsData = {
  "bascarsija": [
    { name: "Ćevabdžinica Željo", type: "Traditional", specialty: "Ćevapi", url: "https://www.google.com/maps/search/?api=1&query=%C4%86evabd%C5%BEinica+%C5%BDeljo+Sarajevo", rating: 4.8 },
    { name: "Restaurant Inat Kuća", type: "Traditional", specialty: "Bosnian Cuisine", url: "https://www.google.com/maps/search/?api=1&query=Inat+Ku%C4%87a+Sarajevo", rating: 4.5 },
    { name: "Caffe Barometar", type: "Café", specialty: "Coffee & Desserts", url: "https://www.google.com/maps/search/?api=1&query=Barometar+Caffe+Sarajevo", rating: 4.4 },
    { name: "Buregdžinica Bosna", type: "Fast Food", specialty: "Burek", url: "https://www.google.com/maps/search/?api=1&query=Buregd%C5%BEinica+Bosna+Sarajevo", rating: 4.6 },
    { name: "Dveri Restaurant", type: "Fine Dining", specialty: "Modern Bosnian", url: "https://www.google.com/maps/search/?api=1&query=Dveri+Restaurant+Sarajevo", rating: 4.7 },
    { name: "Ćevabdžinica Mrkva", type: "Traditional", specialty: "Ćevapi", url: "https://www.google.com/maps/search/?api=1&query=%C4%86evabd%C5%BEinica+Mrkva+Sarajevo", rating: 4.7 },
    { name: "Klopa", type: "Modern", specialty: "Fusion Cuisine", url: "https://www.google.com/maps/search/?api=1&query=Klopa+Restaurant+Sarajevo", rating: 4.6 },
    { name: "Pod Lipom", type: "Traditional", specialty: "Bosnian Specialties", url: "https://www.google.com/maps/search/?api=1&query=Pod+Lipom+Sarajevo", rating: 4.5 },
    { name: "Caffe Sari", type: "Café", specialty: "Artisan Coffee", url: "https://www.google.com/maps/search/?api=1&query=Caffe+Sari+Sarajevo", rating: 4.6 },
    { name: "Vrelo Bosne", type: "Restaurant", specialty: "Nature Views", url: "https://www.google.com/maps/search/?api=1&query=Vrelo+Bosne+Restoran", rating: 4.4 }
  ],
  "stari-most": [
    { name: "Restoran Hindin Han", type: "Traditional", specialty: "Bosnian Cuisine", url: "https://www.google.com/maps/search/?api=1&query=Hindin+Han+Mostar", rating: 4.7 },
    { name: "Šadrvan Restaurant", type: "Traditional", specialty: "Ottoman Cuisine", url: "https://www.google.com/maps/search/?api=1&query=%C5%A0adrvan+Mostar", rating: 4.6 },
    { name: "Restoran Šeher", type: "Fine Dining", specialty: "Modern Bosnian", url: "https://www.google.com/maps/search/?api=1&query=Restoran+%C5%A0eher+Mostar", rating: 4.6 },
    { name: "Caffe Stari Most", type: "Café", specialty: "Bosnian Coffee", url: "https://www.google.com/maps/search/?api=1&query=Caffe+Stari+Most+Mostar", rating: 4.4 },
    { name: "Ćevabdžinica Oppo", type: "Fast Food", specialty: "Ćevapi", url: "https://www.google.com/maps/search/?api=1&query=%C4%86evabd%C5%BEinica+Oppo+Mostar", rating: 4.7 },
    { name: "Tima-Irma", type: "Traditional", specialty: "Grilled Meats", url: "https://www.google.com/maps/search/?api=1&query=Tima+Irma+Mostar", rating: 4.6 },
    { name: "Restoran Ćevabdžinica Tima", type: "Traditional", specialty: "Ćevapi", url: "https://www.google.com/maps/search/?api=1&query=Cevabd%C5%BEinica+Tima+Mostar", rating: 4.5 },
    { name: "Caffe Mepas", type: "Café", specialty: "Modern Coffee", url: "https://www.google.com/maps/search/?api=1&query=Caffe+Mepas+Mostar", rating: 4.5 },
    { name: "Restoran Lagero", type: "Restaurant", specialty: "International", url: "https://www.google.com/maps/search/?api=1&query=Restoran+Lagero+Mostar", rating: 4.4 },
    { name: "Old Town Kitchen", type: "Traditional", specialty: "Local Dishes", url: "https://www.google.com/maps/search/?api=1&query=Old+Town+Kitchen+Mostar", rating: 4.5 }
  ],
  "kravice": [
    { name: "Restoran Kravice", type: "Traditional", specialty: "Grilled Meats", url: "https://www.google.com/maps/search/?api=1&query=Restoran+Kravice+Ljubu%C5%A1ki", rating: 4.4 },
    { name: "Restaurant Garden", type: "Traditional", specialty: "River Fish", url: "https://www.google.com/maps/search/?api=1&query=Restaurant+Garden+Kravice", rating: 4.5 },
    { name: "Restaurant Riverside", type: "Fine Dining", specialty: "Local Trout", url: "https://www.google.com/maps/search/?api=1&query=Riverside+Restaurant+Ljubu%C5%A1ki", rating: 4.6 },
    { name: "Caffe Waterfall", type: "Café", specialty: "Soups & Salads", url: "https://www.google.com/maps/search/?api=1&query=Caffe+Waterfall+Kravice", rating: 4.3 },
    { name: "Herzegovina Wine House", type: "Winery", specialty: "Local Wines", url: "https://www.google.com/maps/search/?api=1&query=Vinarija+Ljubu%C5%A1ki", rating: 4.6 },
    { name: "Restoran Kočuša", type: "Traditional", specialty: "Grilled Fish", url: "https://www.google.com/maps/search/?api=1&query=Restoran+Kocusa+Ljubuski", rating: 4.4 },
    { name: "Waterfall View Café", type: "Café", specialty: "Scenic Views", url: "https://www.google.com/maps/search/?api=1&query=Caffe+Kravice+Waterfall", rating: 4.3 },
    { name: "River Bank Restaurant", type: "Traditional", specialty: "Fresh Trout", url: "https://www.google.com/maps/search/?api=1&query=Restoran+Trebi%C5%BEat+Kravice", rating: 4.5 }
  ],
  "blagaj": [
    { name: "Restoran Blagaj", type: "Traditional", specialty: "River Fish", url: "https://www.google.com/maps/search/?api=1&query=Restoran+Blagaj+Buna", rating: 4.7 },
    { name: "Vrelo Bune Restaurant", type: "Traditional", specialty: "Fresh Trout", url: "https://www.google.com/maps/search/?api=1&query=Vrelo+Bune+Blagaj", rating: 4.6 },
    { name: "Caffe Sufi", type: "Café", specialty: "Tea & Sweets", url: "https://www.google.com/maps/search/?api=1&query=Caffe+Blagaj+Tekke", rating: 4.5 },
    { name: "Old Mill Blagaj", type: "Traditional", specialty: "Local Cuisine", url: "https://www.google.com/maps/search/?api=1&query=Stari+Mlin+Blagaj", rating: 4.3 },
    { name: "Buna River Café", type: "Café", specialty: "River Views", url: "https://www.google.com/maps/search/?api=1&query=Caffe+Buna+Blagaj", rating: 4.4 },
    { name: "Tekke Garden Restaurant", type: "Traditional", specialty: "Ottoman Cuisine", url: "https://www.google.com/maps/search/?api=1&query=Restoran+Tekke+Blagaj", rating: 4.5 },
    { name: "Spring View Café", type: "Café", specialty: "Nature Views", url: "https://www.google.com/maps/search/?api=1&query=Caffe+Vrelo+Blagaj", rating: 4.4 }
  ],
  "mehmed-pasa": [
    { name: "Restoran Na Drini Ćuprija", type: "Traditional", specialty: "Traditional Dishes", url: "https://www.google.com/maps/search/?api=1&query=Na+Drini+%C4%86uprija+Vi%C5%A1egrad", rating: 4.6 },
    { name: "Caffe Andrićgrad", type: "Café", specialty: "Coffee with View", url: "https://www.google.com/maps/search/?api=1&query=Andri%C4%87grad+Caffe+Vi%C5%A1egrad", rating: 4.5 },
    { name: "Restaurant Obala", type: "Traditional", specialty: "River View Dining", url: "https://www.google.com/maps/search/?api=1&query=Restoran+Obala+Vi%C5%A1egrad", rating: 4.4 },
    { name: "Stone Bridge Tavern", type: "Tavern", specialty: "Local Cuisine", url: "https://www.google.com/maps/search/?api=1&query=Kafana+Vi%C5%A1egrad", rating: 4.4 }
  ],
  "sutjeska": [
    { name: "Sutjeska Base Camp", type: "Restaurant", specialty: "Mountain Food", url: "https://www.google.com/maps/search/?api=1&query=Sutjeska+NP+Restoran", rating: 4.4 },
    { name: "Perućica Lodge", type: "Lodge", specialty: "Wild Game", url: "https://www.google.com/maps/search/?api=1&query=Lova%C4%8Dka+Ku%C4%87a+Sutjeska", rating: 4.5 },
    { name: "Maglić Peak Café", type: "Café", specialty: "Highest Peak Views", url: "https://www.google.com/maps/search/?api=1&query=Magli%C4%87+Planina+Restoran", rating: 4.3 },
    { name: "Ski Center Restaurant", type: "Restaurant", specialty: "Ski Season", url: "https://www.google.com/maps/search/?api=1&query=Ski+Centar+Sutjeska", rating: 4.4 }
  ],
  "travnik": [
    { name: "Plava Voda Springs", type: "Restaurant", specialty: "Fresh Water Cuisine", url: "https://www.google.com/maps/search/?api=1&query=Plava+Voda+Travnik", rating: 4.7 },
    { name: "Castle View Restaurant", type: "Traditional", specialty: "Mountain Views", url: "https://www.google.com/maps/search/?api=1&query=Restoran+Stari+Grad+Travnik", rating: 4.6 },
    { name: "Ivo Andrić Café", type: "Café", specialty: "Literary History", url: "https://www.google.com/maps/search/?api=1&query=Kafana+Travnik", rating: 4.5 },
    { name: "Sulejmanija Gardens", type: "Café", specialty: "Tea & Relaxation", url: "https://www.google.com/maps/search/?api=1&query=D%C5%BEamija+Sulejmanija+Travnik", rating: 4.3 }
  ],
  "jajce": [
    { name: "Pliva Lake Restaurant", type: "Traditional", specialty: "River Trout", url: "https://www.google.com/maps/search/?api=1&query=Restoran+Pliva+Jajce", rating: 4.5 },
    { name: "Waterfalls Café", type: "Café", specialty: "Waterfall Views", url: "https://www.google.com/maps/search/?api=1&query=Cafe+Slapovi+Jajce", rating: 4.4 },
    { name: "Mlinica Restaurant", type: "Traditional", specialty: "Local Cheese", url: "https://www.google.com/maps/search/?api=1&query=Restoran+Mlinica+Jajce", rating: 4.6 },
    { name: "Royal Castle Tavern", type: "Tavern", specialty: "Medieval Dishes", url: "https://www.google.com/maps/search/?api=1&query=Stari+Grad+Jajce+Restoran", rating: 4.3 },
    { name: "Pliva Lakeside Restaurant", type: "Traditional", specialty: "Fresh Fish", url: "https://www.google.com/maps/search/?api=1&query=Restoran+Pliva+Lakes+Jajce", rating: 4.5 },
    { name: "Waterfall View Café", type: "Café", specialty: "Scenic Views", url: "https://www.google.com/maps/search/?api=1&query=Caffe+Waterfall+Jajce", rating: 4.4 },
    { name: "Old Town Restaurant", type: "Traditional", specialty: "Bosnian Cuisine", url: "https://www.google.com/maps/search/?api=1&query=Restoran+Stari+Grad+Jajce", rating: 4.4 },
    { name: "Medieval Kitchen", type: "Traditional", specialty: "Historic Dishes", url: "https://www.google.com/maps/search/?api=1&query=Medieval+Kitchen+Jajce", rating: 4.3 }
  ],
  "banja-luka": [
    { name: "Kastel Restaurant", type: "Fine Dining", specialty: "International", url: "https://www.google.com/maps/search/?api=1&query=Kastel+Banja+Luka", rating: 4.6 },
    { name: "Ćevabdžinica Saveta", type: "Traditional", specialty: "Banja Luka Ćevapi", url: "https://www.google.com/maps/search/?api=1&query=%C4%86evabd%C5%BEinica+Saveta+Banja+Luka", rating: 4.9 },
    { name: "Priča Brewery", type: "Brewery", specialty: "Local Beer", url: "https://www.google.com/maps/search/?api=1&query=Pivara+Pri%C4%8Da+Banja+Luka", rating: 4.7 },
    { name: "Vrbas River Café", type: "Café", specialty: "Riverside Views", url: "https://www.google.com/maps/search/?api=1&query=Vrbas+Cafe+Banja+Luka", rating: 4.4 },
    { name: "Restoran Ćevabdžinica Kod Muje", type: "Traditional", specialty: "Ćevapi", url: "https://www.google.com/maps/search/?api=1&query=Cevabd%C5%BEinica+Kod+Muje+Banja+Luka", rating: 4.8 },
    { name: "Mali London", type: "Restaurant", specialty: "International", url: "https://www.google.com/maps/search/?api=1&query=Mali+London+Banja+Luka", rating: 4.5 },
    { name: "Caffe Zona", type: "Café", specialty: "Modern Coffee", url: "https://www.google.com/maps/search/?api=1&query=Caffe+Zona+Banja+Luka", rating: 4.5 },
    { name: "Vrbas Canyon Restaurant", type: "Restaurant", specialty: "River Views", url: "https://www.google.com/maps/search/?api=1&query=Restoran+Vrbas+Canyon+Banja+Luka", rating: 4.4 },
    { name: "Old Town Café", type: "Café", specialty: "Traditional Atmosphere", url: "https://www.google.com/maps/search/?api=1&query=Caffe+Stari+Grad+Banja+Luka", rating: 4.4 }
  ],
  "jahorina": [
    { name: "Jahorina Ski Center", type: "Restaurant", specialty: "Olympic History", url: "https://www.google.com/maps/search/?api=1&query=Ski+Centar+Jahorina", rating: 4.5 },
    { name: "Poljice Restaurant", type: "Restaurant", specialty: "Mountain Views", url: "https://www.google.com/maps/search/?api=1&query=Poljice+Jahorina+Restoran", rating: 4.6 },
    { name: "Ski Slope Café", type: "Café", specialty: "Hot Chocolate", url: "https://www.google.com/maps/search/?api=1&query=Caffe+Jahorina", rating: 4.5 },
    { name: "1984 Olympic Café", type: "Café", specialty: "Ski History", url: "https://www.google.com/maps/search/?api=1&query=Jahorina+Olimpijski+Museum", rating: 4.4 }
  ],
  "trebinje": [
    { name: "Restoran Platani", type: "Mediterranean", specialty: "Seafood", url: "https://www.google.com/maps/search/?api=1&query=Restoran+Platani+Trebinje", rating: 4.7 },
    { name: "Wine Cellar Radojčić", type: "Winery", specialty: "Vranac Wine", url: "https://www.google.com/maps/search/?api=1&query=Vinarija+Radoj%C4%8Di%C4%87+Trebinje", rating: 4.8 },
    { name: "Studenac Restaurant", type: "Traditional", specialty: "Herzegovinian Cuisine", url: "https://www.google.com/maps/search/?api=1&query=Restoran+Studenac+Trebinje", rating: 4.6 },
    { name: "Arslanagić Bridge Café", type: "Café", specialty: "Historic Views", url: "https://www.google.com/maps/search/?api=1&query=Most+Arslanagi%C4%87+Trebinje", rating: 4.4 },
    { name: "Vukoje Winery", type: "Winery", specialty: "Premium Wines", url: "https://www.google.com/maps/search/?api=1&query=Vinarija+Vukoje+Trebinje", rating: 4.7 },
    { name: "Tvrdos Monastery Wine", type: "Winery", specialty: "Monastic Wines", url: "https://www.google.com/maps/search/?api=1&query=Tvrdos+Vinarija+Trebinje", rating: 4.6 },
    { name: "River Promenade Café", type: "Café", specialty: "River Views", url: "https://www.google.com/maps/search/?api=1&query=Caffe+Trebi%C5%A1njica+Trebinje", rating: 4.5 },
    { name: "Old Town Restaurant", type: "Traditional", specialty: "Local Specialties", url: "https://www.google.com/maps/search/?api=1&query=Restoran+Stari+Grad+Trebinje", rating: 4.5 },
    { name: "Hercegovačka Gračanica Café", type: "Café", specialty: "Panoramic Views", url: "https://www.google.com/maps/search/?api=1&query=Caffe+Gracanica+Trebinje", rating: 4.4 }
  ],
  "una-np": [
    { name: "Una Rafting Center", type: "Restaurant", specialty: "Adventure Food", url: "https://www.google.com/maps/search/?api=1&query=Una+Rafting+Biha%C4%87", rating: 4.6 },
    { name: "Štrbački Buk Restaurant", type: "Restaurant", specialty: "Waterfall Views", url: "https://www.google.com/maps/search/?api=1&query=%C5%A0trba%C4%8Dki+Buk+Restoran", rating: 4.7 },
    { name: "River Una Tavern", type: "Tavern", specialty: "Fresh Fish", url: "https://www.google.com/maps/search/?api=1&query=Restoran+Una+Biha%C4%87", rating: 4.6 },
    { name: "Old Town Grill", type: "Grill", specialty: "Kebabs", url: "https://www.google.com/maps/search/?api=1&query=Cevapi+Biha%C4%87", rating: 4.4 }
  ],
  "vjetrenica": [
    { name: "Vjetrenica Cave Café", type: "Café", specialty: "Underground Dining", url: "https://www.google.com/maps/search/?api=1&query=Vjetrenica+Caffe+Ravno", rating: 4.4 },
    { name: "Popovo Polje Tavern", type: "Tavern", specialty: "Wine Region", url: "https://www.google.com/maps/search/?api=1&query=Popovo+Polje+Restoran+Ravno", rating: 4.5 },
    { name: "Herzegovina Vineyard", type: "Winery", specialty: "Local Wines", url: "https://www.google.com/maps/search/?api=1&query=Vinarija+Ravno", rating: 4.6 },
    { name: "Lijevče Polje Lodge", type: "Lodge", specialty: "Rural Experience", url: "https://www.google.com/maps/search/?api=1&query=Selja%C4%8Dka+Ku%C4%87a+Ravno", rating: 4.3 }
  ],
  "boracko": [
    { name: "Boračko Lake Restaurant", type: "Restaurant", specialty: "Glacial Lake", url: "https://www.google.com/maps/search/?api=1&query=Restoran+Bora%C4%8Dko+Jezero", rating: 4.7 },
    { name: "Mountain Lodge Konjic", type: "Lodge", specialty: "Mountain Views", url: "https://www.google.com/maps/search/?api=1&query=Planinarski+Dom+Konjic", rating: 4.5 },
    { name: "Neretva River Grill", type: "Grill", specialty: "River Fish", url: "https://www.google.com/maps/search/?api=1&query=Restoran+Neretva+Konjic", rating: 4.6 },
    { name: "Old Stone Bridge Café", type: "Café", specialty: "Historic Bridge", url: "https://www.google.com/maps/search/?api=1&query=Stari+Most+Konjic+Caffe", rating: 4.4 }
  ],
  "srebrenica": [
    { name: "Memorial Center Café", type: "Café", specialty: "Commemoration", url: "https://www.google.com/maps/search/?api=1&query=Srebrenica+Memorial+Center", rating: 4.2 },
    { name: "Drina Valley Tavern", type: "Tavern", specialty: "River Trout", url: "https://www.google.com/maps/search/?api=1&query=Restoran+Srebrenica", rating: 4.4 },
    { name: "Healing Springs", type: "Restaurant", specialty: "Spa Cuisine", url: "https://www.google.com/maps/search/?api=1&query=Srebrenica+Springs+Restoran", rating: 4.3 },
    { name: "Srebrenica Old Town", type: "Traditional", specialty: "Local History", url: "https://www.google.com/maps/search/?api=1&query=Srebrenica+Restoran+Stari+Grad", rating: 4.4 }
  ],
  "pocitelj": [
    { name: "Restoran Počitelj", type: "Traditional", specialty: "Herzegovinian Cuisine", url: "https://www.google.com/maps/search/?api=1&query=Restoran+Po%C4%8Ditelj", rating: 4.5 },
    { name: "Neretva View Café", type: "Café", specialty: "Panoramic Views", url: "https://www.google.com/maps/search/?api=1&query=Caffe+Po%C4%8Ditelj", rating: 4.4 },
    { name: "Fortress Tavern", type: "Tavern", specialty: "Traditional Dishes", url: "https://www.google.com/maps/search/?api=1&query=Kafana+Po%C4%8Ditelj", rating: 4.3 },
    { name: "Ottoman House Restaurant", type: "Traditional", specialty: "Local Specialties", url: "https://www.google.com/maps/search/?api=1&query=Stari+Grad+Po%C4%8Ditelj+Restoran", rating: 4.4 }
  ],
  "medjugorje": [
    { name: "Restoran Mamma Mia", type: "Traditional", specialty: "Italian & Bosnian", url: "https://www.google.com/maps/search/?api=1&query=Restoran+Mamma+Mia+Me%C4%91ugorje", rating: 4.6 },
    { name: "Pilgrim's Kitchen", type: "Traditional", specialty: "Bosnian Cuisine", url: "https://www.google.com/maps/search/?api=1&query=Restoran+Me%C4%91ugorje", rating: 4.5 },
    { name: "St. James Café", type: "Café", specialty: "Coffee & Snacks", url: "https://www.google.com/maps/search/?api=1&query=Caffe+Me%C4%91ugorje", rating: 4.4 },
    { name: "Herzegovina Grill", type: "Grill", specialty: "Ćevapi", url: "https://www.google.com/maps/search/?api=1&query=Cevapi+Me%C4%91ugorje", rating: 4.5 }
  ],
  "neum": [
    { name: "Restoran Neum", type: "Seafood", specialty: "Fresh Fish", url: "https://www.google.com/maps/search/?api=1&query=Restoran+Neum", rating: 4.5 },
    { name: "Adriatic Seafood", type: "Seafood", specialty: "Mediterranean", url: "https://www.google.com/maps/search/?api=1&query=Seafood+Neum", rating: 4.6 },
    { name: "Beach Bar Neum", type: "Bar", specialty: "Cocktails & Views", url: "https://www.google.com/maps/search/?api=1&query=Beach+Bar+Neum", rating: 4.4 },
    { name: "Hotel Restaurant", type: "Fine Dining", specialty: "International", url: "https://www.google.com/maps/search/?api=1&query=Hotel+Restoran+Neum", rating: 4.5 }
  ],
  "lukomir": [
    { name: "Mountain Lodge Lukomir", type: "Lodge", specialty: "Traditional Bosnian", url: "https://www.google.com/maps/search/?api=1&query=Planinarski+Dom+Lukomir", rating: 4.7 },
    { name: "Shepherd's Table", type: "Traditional", specialty: "Local Specialties", url: "https://www.google.com/maps/search/?api=1&query=Restoran+Lukomir", rating: 4.6 },
    { name: "Canyon View Café", type: "Café", specialty: "Mountain Views", url: "https://www.google.com/maps/search/?api=1&query=Caffe+Lukomir", rating: 4.5 },
    { name: "Traditional House", type: "Traditional", specialty: "Homemade Food", url: "https://www.google.com/maps/search/?api=1&query+Ku%C4%87a+Lukomir", rating: 4.6 }
  ],
  "default": [
    { name: "Local Kafana", type: "Traditional", specialty: "Bosnian Coffee", url: "https://www.google.com/maps/search/?api=1&query=Kafana+Bosna", rating: 4.5 },
    { name: "Mountain Restaurant", type: "Traditional", specialty: "Local Food", url: "https://www.google.com/maps/search/?api=1&query=Planinski+Restoran+Bosnia", rating: 4.6 },
    { name: "Riverside Café", type: "Café", specialty: "Scenic Views", url: "https://www.google.com/maps/search/?api=1&query=Riverside+Cafe+Bosnia", rating: 4.4 },
    { name: "Traditional Burek", type: "Fast Food", specialty: "Pastry", url: "https://www.google.com/maps/search/?api=1&query=Buregd%C5%BEinica+Bosna", rating: 4.7 }
  ]
};

/**
 * Accommodation Data — keyed by placeId, Booking.com links
 */
const accommodationsData = {
  "bascarsija": [
    { name: "Hotel Europe", type: "Luxury Hotel", price: "$$$", url: "https://www.booking.com/hotel/ba/hotel-europe.en.html", rating: 4.7 },
    { name: "Hotel Sarajevo", type: "Business Hotel", price: "$$", url: "https://www.booking.com/hotel/ba/hotel-sarajevo.en.html", rating: 4.5 },
    { name: "Hills Hotel Sarajevo", type: "Boutique Hotel", price: "$$$", url: "https://www.booking.com/hotel/ba/hills-hotel-sarajevo.en.html", rating: 4.6 },
    { name: "Hotel Bristol", type: "Historic Hotel", price: "$$", url: "https://www.booking.com/hotel/ba/bristol.en.html", rating: 4.4 },
    { name: "Pansion Old Town", type: "Guesthouse", price: "$", url: "https://www.booking.com/hotel/ba/pansion-old-town.en.html", rating: 4.5 },
    { name: "Halvat Guesthouse", type: "Guesthouse", price: "$", url: "https://www.booking.com/hotel/ba/halvat-guesthouse.en.html", rating: 4.6 },
    { name: "Sarajevo Hostel", type: "Hostel", price: "$", url: "https://www.booking.com/hostel/ba/sarajevo-hostel.en.html", rating: 4.3 },
    { name: "Apartment Baščaršija", type: "Apartment", price: "$$", url: "https://www.booking.com/hotel/ba/apartment-bascarsija.en.html", rating: 4.7 }
  ],
  "stari-most": [
    { name: "Hotel Kriva Cuprija", type: "Luxury Hotel", price: "$$$", url: "https://www.booking.com/hotel/ba/kriva-cuprija.en.html", rating: 4.8 },
    { name: "Hotel Mepas", type: "Business Hotel", price: "$$", url: "https://www.booking.com/hotel/ba/mepas.en.html", rating: 4.5 },
    { name: "Hotel Bevanda", type: "Boutique Hotel", price: "$$$", url: "https://www.booking.com/hotel/ba/bevanda.en.html", rating: 4.6 },
    { name: "Pellegrino Hotel", type: "Historic Hotel", price: "$$", url: "https://www.booking.com/hotel/ba/pellegrino.en.html", rating: 4.4 },
    { name: "Old Town Guesthouse", type: "Guesthouse", price: "$", url: "https://www.booking.com/hotel/ba/old-town-guesthouse.en.html", rating: 4.5 },
    { name: "Mostar Hostel", type: "Hostel", price: "$", url: "https://www.booking.com/hostel/ba/mostar-hostel.en.html", rating: 4.3 },
    { name: "Apartment Stari Most", type: "Apartment", price: "$$", url: "https://www.booking.com/hotel/ba/apartment-stari-most.en.html", rating: 4.6 }
  ],
  "kravice": [
    { name: "Hotel Kravice", type: "Resort Hotel", price: "$$", url: "https://www.booking.com/hotel/ba/hotel-kravice.en.html", rating: 4.4 },
    { name: "Kravice Guesthouse", type: "Guesthouse", price: "$", url: "https://www.booking.com/hotel/ba/kravice-guesthouse.en.html", rating: 4.3 },
    { name: "Waterfall Apartments", type: "Apartment", price: "$$", url: "https://www.booking.com/hotel/ba/waterfall-apartments.en.html", rating: 4.5 },
    { name: "River Camp Kravice", type: "Campsite", price: "$", url: "https://www.booking.com/campsite/ba/river-camp.en.html", rating: 4.2 }
  ],
  "blagaj": [
    { name: "Blagaj Hotel", type: "Boutique Hotel", price: "$$", url: "https://www.booking.com/hotel/ba/blagaj-hotel.en.html", rating: 4.5 },
    { name: "Vrelo Bune Guesthouse", type: "Guesthouse", price: "$", url: "https://www.booking.com/hotel/ba/vrelo-bune.en.html", rating: 4.4 },
    { name: "Tekke Apartments", type: "Apartment", price: "$$", url: "https://www.booking.com/hotel/ba/tekke-apartments.en.html", rating: 4.6 },
    { name: "Buna River Lodge", type: "Lodge", price: "$$", url: "https://www.booking.com/hotel/ba/buna-river-lodge.en.html", rating: 4.5 }
  ],
  "jajce": [
    { name: "Hotel Jajce", type: "Business Hotel", price: "$$", url: "https://www.booking.com/hotel/ba/hotel-jajce.en.html", rating: 4.4 },
    { name: "Pliva Lakeside Hotel", type: "Resort Hotel", price: "$$", url: "https://www.booking.com/hotel/ba/pliva-lakeside.en.html", rating: 4.5 },
    { name: "Waterfall Guesthouse", type: "Guesthouse", price: "$", url: "https://www.booking.com/hotel/ba/waterfall-guesthouse.en.html", rating: 4.3 },
    { name: "Old Town Apartments", type: "Apartment", price: "$$", url: "https://www.booking.com/hotel/ba/old-town-apartments.en.html", rating: 4.5 },
    { name: "Medieval Castle Hotel", type: "Historic Hotel", price: "$$$", url: "https://www.booking.com/hotel/ba/medieval-castle.en.html", rating: 4.6 }
  ],
  "sutjeska": [
    { name: "Sutjeska Hotel", type: "Mountain Hotel", price: "$$", url: "https://www.booking.com/hotel/ba/sutjeska-hotel.en.html", rating: 4.3 },
    { name: "Perućica Lodge", type: "Lodge", price: "$$", url: "https://www.booking.com/hotel/ba/perucica-lodge.en.html", rating: 4.5 },
    { name: "Tjentište Camp", type: "Campsite", price: "$", url: "https://www.booking.com/campsite/ba/tjentiste-camp.en.html", rating: 4.2 },
    { name: "Maglić Mountain Hut", type: "Mountain Hut", price: "$", url: "https://www.booking.com/hotel/ba/maglic-hut.en.html", rating: 4.4 }
  ],
  "travnik": [
    { name: "Hotel Travnik", type: "Business Hotel", price: "$$", url: "https://www.booking.com/hotel/ba/hotel-travnik.en.html", rating: 4.4 },
    { name: "Plava Voda Hotel", type: "Boutique Hotel", price: "$$", url: "https://www.booking.com/hotel/ba/plava-voda.en.html", rating: 4.5 },
    { name: "Castle View Guesthouse", type: "Guesthouse", price: "$", url: "https://www.booking.com/hotel/ba/castle-view.en.html", rating: 4.3 },
    { name: "Andrić Apartments", type: "Apartment", price: "$$", url: "https://www.booking.com/hotel/ba/andric-apartments.en.html", rating: 4.5 }
  ],
  "mehmed-pasa": [
    { name: "Hotel Višegrad", type: "Business Hotel", price: "$$", url: "https://www.booking.com/hotel/ba/hotel-vi%C5%A1egrad.en.html", rating: 4.4 },
    { name: "Andrićgrad Hotel", type: "Boutique Hotel", price: "$$$", url: "https://www.booking.com/hotel/ba/andricgrad-hotel.en.html", rating: 4.6 },
    { name: "Drina River Guesthouse", type: "Guesthouse", price: "$", url: "https://www.booking.com/hotel/ba/drina-river.en.html", rating: 4.3 },
    { name: "Bridge View Apartments", type: "Apartment", price: "$$", url: "https://www.booking.com/hotel/ba/bridge-view.en.html", rating: 4.5 }
  ],
  "boracko": [
    { name: "Boračko Lake Hotel", type: "Resort Hotel", price: "$$", url: "https://www.booking.com/hotel/ba/boracko-lake.en.html", rating: 4.4 },
    { name: "Mountain Lodge Konjic", type: "Lodge", price: "$$", url: "https://www.booking.com/hotel/ba/mountain-lodge.en.html", rating: 4.5 },
    { name: "Lake View Apartments", type: "Apartment", price: "$$", url: "https://www.booking.com/hotel/ba/lake-view.en.html", rating: 4.4 },
    { name: "Boračko Camp", type: "Campsite", price: "$", url: "https://www.booking.com/campsite/ba/boracko-camp.en.html", rating: 4.2 }
  ],
  "jahorina": [
    { name: "Hotel Jahorina", type: "Ski Hotel", price: "$$$", url: "https://www.booking.com/hotel/ba/hotel-jahorina.en.html", rating: 4.5 },
    { name: "Bjelašnica Hotel", type: "Ski Hotel", price: "$$$", url: "https://www.booking.com/hotel/ba/bjelasnica-hotel.en.html", rating: 4.6 },
    { name: "Poljice Apartments", type: "Apartment", price: "$$", url: "https://www.booking.com/hotel/ba/poljice.en.html", rating: 4.5 },
    { name: "Ski Center Lodge", type: "Lodge", price: "$$", url: "https://www.booking.com/hotel/ba/ski-center-lodge.en.html", rating: 4.4 },
    { name: "Olympic Hotel", type: "Historic Hotel", price: "$$$", url: "https://www.booking.com/hotel/ba/olympic-hotel.en.html", rating: 4.6 }
  ],
  "vjetrenica": [
    { name: "Vjetrenica Hotel", type: "Boutique Hotel", price: "$$", url: "https://www.booking.com/hotel/ba/vjetrenica-hotel.en.html", rating: 4.3 },
    { name: "Popovo Polje Guesthouse", type: "Guesthouse", price: "$", url: "https://www.booking.com/hotel/ba/popovo-polje.en.html", rating: 4.2 },
    { name: "Cave View Apartments", type: "Apartment", price: "$$", url: "https://www.booking.com/hotel/ba/cave-view.en.html", rating: 4.4 }
  ],
  "banja-luka": [
    { name: "Hotel Banja Luka", type: "Luxury Hotel", price: "$$$", url: "https://www.booking.com/hotel/ba/hotel-banja-luka.en.html", rating: 4.6 },
    { name: "Cezar Hotel", type: "Business Hotel", price: "$$", url: "https://www.booking.com/hotel/ba/cezar.en.html", rating: 4.5 },
    { name: "Vrbas Hotel", type: "Boutique Hotel", price: "$$", url: "https://www.booking.com/hotel/ba/vrbas.en.html", rating: 4.4 },
    { name: "Kastel Guesthouse", type: "Guesthouse", price: "$", url: "https://www.booking.com/hotel/ba/kastel-guesthouse.en.html", rating: 4.3 },
    { name: "City Center Apartments", type: "Apartment", price: "$$", url: "https://www.booking.com/hotel/ba/city-center.en.html", rating: 4.5 },
    { name: "Vrbas River Lodge", type: "Lodge", price: "$$", url: "https://www.booking.com/hotel/ba/vrbas-river-lodge.en.html", rating: 4.4 }
  ],
  "una-np": [
    { name: "Hotel Una", type: "Resort Hotel", price: "$$", url: "https://www.booking.com/hotel/ba/hotel-una.en.html", rating: 4.5 },
    { name: "Štrbački Buk Hotel", type: "Nature Hotel", price: "$$", url: "https://www.booking.com/hotel/ba/strbacki-buk.en.html", rating: 4.4 },
    { name: "Una River Lodge", type: "Lodge", price: "$$", url: "https://www.booking.com/hotel/ba/una-river-lodge.en.html", rating: 4.5 },
    { name: "Bihać City Hotel", type: "Business Hotel", price: "$$", url: "https://www.booking.com/hotel/ba/bihac-city.en.html", rating: 4.4 },
    { name: "Rafting Center Camp", type: "Campsite", price: "$", url: "https://www.booking.com/campsite/ba/rafting-camp.en.html", rating: 4.3 }
  ],
  "srebrenica": [
    { name: "Hotel Srebrenica", type: "Business Hotel", price: "$$", url: "https://www.booking.com/hotel/ba/hotel-srebrenica.en.html", rating: 4.2 },
    { name: "Memorial Guesthouse", type: "Guesthouse", price: "$", url: "https://www.booking.com/hotel/ba/memorial-guesthouse.en.html", rating: 4.1 },
    { name: "Drina Valley Hotel", type: "Boutique Hotel", price: "$$", url: "https://www.booking.com/hotel/ba/drina-valley.en.html", rating: 4.3 }
  ],
  "trebinje": [
    { name: "Hotel Trebinje", type: "Luxury Hotel", price: "$$$", url: "https://www.booking.com/hotel/ba/hotel-trebinje.en.html", rating: 4.6 },
    { name: "Platani Hotel", type: "Boutique Hotel", price: "$$$", url: "https://www.booking.com/hotel/ba/platani.en.html", rating: 4.7 },
    { name: "Wine Country Hotel", type: "Resort Hotel", price: "$$", url: "https://www.booking.com/hotel/ba/wine-country.en.html", rating: 4.5 },
    { name: "Old Town Guesthouse", type: "Guesthouse", price: "$", url: "https://www.booking.com/hotel/ba/old-town-trebinje.en.html", rating: 4.4 },
    { name: "River View Apartments", type: "Apartment", price: "$$", url: "https://www.booking.com/hotel/ba/river-view-trebinje.en.html", rating: 4.6 },
    { name: "Vukoje Winery Stay", type: "Winery Stay", price: "$$$", url: "https://www.booking.com/hotel/ba/vukoje-winery.en.html", rating: 4.7 }
  ],
  "pocitelj": [
    { name: "Počitelj Guesthouse", type: "Guesthouse", price: "$", url: "https://www.booking.com/hotel/ba/pocitelj-guesthouse.en.html", rating: 4.3 },
    { name: "Fortress View Apartments", type: "Apartment", price: "$$", url: "https://www.booking.com/hotel/ba/fortress-view.en.html", rating: 4.4 },
    { name: "Neretva Valley Lodge", type: "Lodge", price: "$$", url: "https://www.booking.com/hotel/ba/neretva-valley.en.html", rating: 4.4 }
  ],
  "medjugorje": [
    { name: "Hotel Medjugorje", type: "Pilgrimage Hotel", price: "$$", url: "https://www.booking.com/hotel/ba/hotel-medjugorje.en.html", rating: 4.5 },
    { name: "Pilgrim's Rest Hotel", type: "Pilgrimage Hotel", price: "$$", url: "https://www.booking.com/hotel/ba/pilgrims-rest.en.html", rating: 4.4 },
    { name: "St. James Guesthouse", type: "Guesthouse", price: "$", url: "https://www.booking.com/hotel/ba/st-james.en.html", rating: 4.3 },
    { name: "Apparition Hill Apartments", type: "Apartment", price: "$$", url: "https://www.booking.com/hotel/ba/apparition-hill.en.html", rating: 4.5 },
    { name: "Cross Mountain Lodge", type: "Lodge", price: "$$", url: "https://www.booking.com/hotel/ba/cross-mountain.en.html", rating: 4.4 }
  ],
  "neum": [
    { name: "Hotel Neum", type: "Beach Hotel", price: "$$$", url: "https://www.booking.com/hotel/ba/hotel-neum.en.html", rating: 4.4 },
    { name: "Adriatic Resort", type: "Resort Hotel", price: "$$$", url: "https://www.booking.com/hotel/ba/adriatic-resort.en.html", rating: 4.5 },
    { name: "Beachfront Apartments", type: "Apartment", price: "$$", url: "https://www.booking.com/hotel/ba/beachfront.en.html", rating: 4.5 },
    { name: "Coastal Guesthouse", type: "Guesthouse", price: "$$", url: "https://www.booking.com/hotel/ba/coastal-guesthouse.en.html", rating: 4.3 },
    { name: "Sea View Hotel", type: "Beach Hotel", price: "$$$", url: "https://www.booking.com/hotel/ba/sea-view.en.html", rating: 4.6 }
  ],
  "lukomir": [
    { name: "Lukomir Mountain Hut", type: "Mountain Hut", price: "$", url: "https://www.booking.com/hotel/ba/lukomir-hut.en.html", rating: 4.5 },
    { name: "Shepherd's House", type: "Traditional Stay", price: "$", url: "https://www.booking.com/hotel/ba/shepherds-house.en.html", rating: 4.6 },
    { name: "Canyon View Lodge", type: "Lodge", price: "$$", url: "https://www.booking.com/hotel/ba/canyon-view-lodge.en.html", rating: 4.5 },
    { name: "Bjelašnica Base Camp", type: "Mountain Camp", price: "$", url: "https://www.booking.com/campsite/ba/bjelasnica-camp.en.html", rating: 4.4 }
  ],
  "default": [
    { name: "Local Hotel", type: "Hotel", price: "$$", url: "https://www.booking.com/searchresults.html?ss=Bosnia%20and%20Herzegovina&aid=2086573&no_rooms=1&group_adults=2", rating: 4.5 },
    { name: "Guesthouse", type: "Guesthouse", price: "$", url: "https://www.booking.com/searchresults.html?ss=Bosnia%20and%20Herzegovina&aid=2086573&no_rooms=1&group_adults=2", rating: 4.4 },
    { name: "Apartment", type: "Apartment", price: "$$", url: "https://www.booking.com/searchresults.html?ss=Bosnia%20and%20Herzegovina&aid=2086573&no_rooms=1&group_adults=2", rating: 4.6 },
    { name: "Hostel", type: "Hostel", price: "$", url: "https://www.booking.com/searchresults.html?ss=Bosnia%20and%20Herzegovina&aid=2086573&no_rooms=1&group_adults=2", rating: 4.3 }
  ]
};

// ── Things to Do Data ──
const thingsToDoData = {
  "bascarsija": [
    "Wander Baščaršija old town and visit Sebilj fountain",
    "Visit Gazi Husrev-beg Mosque (16th century)",
    "Explore the Tunnel of Hope (Sarajevo War Tunnel Museum)",
    "Ride the cable car to Trebević Mountain for panoramic views",
    "Visit the Latin Bridge and 1878-1918 Museum",
    "Try local food: ćevapi, burek, baklava at local restaurants",
    "Walk the eternal flame and Ferhadija pedestrian street"
  ],
  "stari-most": [
    "Walk across Stari Most and watch bridge divers",
    "Explore the Old Bazaar (Kujundžiluk) for copper crafts",
    "Visit Koski Mehmed Pasha Mosque (climb the minaret for views)",
    "Cross the river to the Croatian side for a different perspective",
    "Visit the War Photo Exhibition and Museum of War and Genocide Victims",
    "Day trip to Blagaj, Počitelj, and Kravice Waterfalls",
    "Dine at riverside restaurants along the Neretva"
  ],
  "kravice": [
    "Swim in the natural pool beneath the falls",
    "Hike the trails around the waterfall complex",
    "Enjoy fresh trout at the on-site restaurants",
    "Visit nearby Kočuša waterfall (less crowded)",
    "Take photos from the lookout platforms",
    "Picnic in the surrounding green areas"
  ],
  "blagaj": [
    "Tour the Blagaj Tekke (Dervish house interior)",
    "Walk along the Buna River spring boardwalk",
    "Visit the ruins of Stjepan-grad fortress above the village",
    "Try fresh river trout at the waterside restaurants",
    "Kayak or paddleboard on the Buna River",
    "Visit the old stone mill (now a museum)"
  ],
  "pocitelj": [
    "Climb the Počitelj fortress for valley views",
    "Visit the Šišman Ibrahim Pasha Mosque (1563)",
    "Walk the cobblestone streets through the old town",
    "Explore the Gavran Kapetanović Tower",
    "Enjoy coffee at the traditional café by the river",
    "Visit local artists' galleries in restored stone houses"
  ],
  "jajce": [
    "View the Pliva Waterfall from multiple viewpoints",
    "Explore the Medieval Fortress of Jajce (13th-14th century)",
    "Visit the AVNOJ Museum (WWII history)",
    "Walk through the Mithraeum (2nd-century Roman temple)",
    "Relax at the Pliva Lakes (Great and Small Lake) just outside town",
    "Visit the Catacombs (underground church from the 15th century)",
    "Kayak or fish on the Pliva River"
  ],
  "una-np": [
    "Rafting on the Una River (Class II-IV rapids)",
    "Hike to Štrbački Buk waterfall",
    "Swim in the natural pools at Martin Brod",
    "Visit the Ostrožac Castle (16th-century fortress)",
    "Fly fishing for huchen and trout",
    "Kayak through the Una River canyons",
    "Explore the city of Bihać with its old town and cafes along the river"
  ],
  "medjugorje": [
    "Walk up Apparition Hill (Podbrdo) — rosary path",
    "Climb Cross Mountain (Križevac) for sunrise",
    "Attend the evening prayer program at St. James Church",
    "Visit the adoration chapel",
    "Explore the surrounding wine country (Herzegovina wine region)",
    "Visit nearby ancient stećak tombstones",
    "Explore the town's many religious souvenir shops"
  ],
  "trebinje": [
    "Explore the Old Town (Stari Grad) with its stone streets",
    "Visit Hercegovačka Gračanica monastery (incredible views)",
    "Walk across the Arslanagić Bridge (16th century)",
    "Wine tasting at local wineries (Tvrdos Monastery, Vukoje)",
    "Stroll the Trebišnjica River promenade",
    "Visit the Tvrdos Monastery (15th century)",
    "Explore the Old Town mills along the river"
  ],
  "banja-luka": [
    "Visit Kastel Fortress (Roman/medieval origin)",
    "See the Ferhadija Mosque (rebuilt, originally 1579)",
    "Raft or kayak on the Vrbas River through the canyon",
    "Walk through Park Mladeži (youth park)",
    "Visit the Museum of Republika Srpska",
    "Explore Banja Luka's Austro-Hungarian architecture",
    "Hike up Banj Hill for city views"
  ],
  "sutjeska": [
    "Hike to Maglić peak (challenging 2-day trek)",
    "Guided tour of Perućica primeval forest",
    "Visit the Tjentište War Memorial",
    "Hike to Skakavac Waterfall (75 m high)",
    "Camping in the park",
    "Explore the Sutjeska River canyon",
    "Wildlife spotting (bears, wolves, chamois)"
  ],
  "travnik": [
    "Tour the Sulejmanija Mosque (Colored Mosque)",
    "Visit the Ivo Andrić Birthplace Museum",
    "Explore the Plava Voda (Blue Water) spring area",
    "Climb to the Stari Grad fortress ruins",
    "Visit the Sahat Kula (Ottoman clock towers)",
    "Try Travnik cheese at local markets",
    "Hike on nearby Vlašić Mountain"
  ],
  "visegrad": [
    "Walk across the Mehmed Paša Sokolović Bridge (1577)",
    "Explore Andrićgrad (Kusturica's stone town)",
    "Visit the Andrić Institute museum",
    "Take a boat ride through the Drina River canyon (second deepest in Europe)",
    "Rafting on the Drina River",
    "Visit the Dobrun Monastery nearby"
  ],
  "jahorina": [
    "Skiing and snowboarding (December–March)",
    "Hiking and trail running in summer",
    "Mountain biking on alpine trails",
    "Visit the Olympic bobsled track on Trebević",
    "Paragliding off Bjelašnica",
    "Enjoy mountain lodges with traditional Bosnian food",
    "Overnight stays at mountain hotels for stargazing"
  ],
  "neum": [
    "Relax on Neum's pebble beaches",
    "Swim in the crystal-clear Adriatic",
    "Fresh seafood dining at waterfront restaurants",
    "Boat trips along the coast",
    "Visit the nearby ancient Roman villa at Mogorjelo",
    "Day trip to Dubrovnik, Croatia (1 hour away)",
    "Explore the Pelješac Peninsula wine region nearby"
  ],
  "lukomir": [
    "Explore traditional stone-roofed houses",
    "Hike to Rakitnica River canyon viewpoints",
    "Meet local shepherds and learn about traditional life",
    "Photograph the stunning canyon landscapes",
    "Stay overnight in a traditional mountain hut",
    "Hike trails connecting to Bjelašnica mountain"
  ],
  "boracko": [
    "Swim in the crystal-clear lake",
    "Hike around the lake perimeter",
    "Picnic in the surrounding pine forest",
    "Fishing in the lake",
    "Camping near the lakeshore"
  ],
  "vjetrenica": [
    "Explore the cave with guided tours",
    "See unique cave formations and endemic species",
    "Visit the Zavala village nearby",
    "Hike in the surrounding Popovo Polje"
  ],
  "srebrenica": [
    "Visit the Srebrenica-Potočari Memorial",
    "Learn about the 1995 genocide at the memorial center",
    "Walk through the memorial cemetery",
    "Visit the old town of Srebrenica",
    "Explore the Drina Valley"
  ],
  "default": [
    "Explore the local area",
    "Visit historical sites",
    "Enjoy local cuisine",
    "Take scenic walks"
  ]
};
