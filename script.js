const kategorieData = {
    zeme: { nazev: "Země", slova: ["Česko", "Slovensko", "Německo", "Francie", "Itálie", "Španělsko", "Japonsko", "Austrálie", "Brazílie", "Kanada", "Egypt", "Mexiko", "Norsko", "Švédsko", "Řecko", "Thajsko", "Peru", "Indie", "Čína", "Keňa", "USA", "Velká Británie", "Rusko", "Argentina", "Kuba", "Chorvatsko", "Rakousko", "Polsko", "Maďarsko", "Švýcarsko", "Finsko", "Dánsko", "Irsko", "Portugalsko", "Turecko", "Vietnam", "Kambodža", "Kolumbie", "Chile", "Nový Zéland", "Jihoafrická republika", "Maroko", "Madagaskar", "Island", "Ukrajina", "Rumunsko", "Bulharsko", "Srbsko", "Izrael", "SAE"] },
    zvirata: { nazev: "Zvířata", slova: ["Pes", "Kočka", "Slon", "Žirafa", "Tygr", "Lev", "Medvěd", "Opice", "Tučňák", "Krokodýl", "Had", "Kůň", "Kráva", "Prase", "Delfín", "Žralok", "Velryba", "Orel", "Pavouk", "Klokan", "Gepard", "Hroch", "Nosorožec", "Zebra", "Velbloud", "Křeček", "Morče", "Papoušek", "Sova", "Netopýr", "Žába", "Ještěrka", "Chameleon", "Mravenec", "Včela", "Motýl", "Slepice", "Kachna", "Husa", "Ovce", "Koza", "Jelen", "Srnec", "Vlk", "Liška", "Zajíc", "Králík", "Kapr", "Štika", "Pštros"] },
    povolani: { nazev: "Povolání", slova: ["Hasič", "Policista", "Lékař", "Učitel", "Programátor", "Kuchař", "Zpěvák", "Herec", "Právník", "Architekt", "Automechanik", "Prodavač", "Kadeřník", "Pilot", "Řidič", "Zubař", "Fotograf", "Novinář", "Zemědělec", "Truhlář", "Zahradník", "Instalatér", "Elektrikář", "Zedník", "Malíř", "Účetní", "Manažer", "Ředitel", "Sekretářka", "Číšník", "Barman", "Letuška", "Soudce", "Politik", "Voják", "Námořník", "Rybář", "Sportovec", "Trenér", "Masér", "Psycholog", "Veterinář", "Spisovatel", "Malíř", "Sochař", "Hudebník", "Tanečník", "Moderátor", "Režisér", "Kameraman"] },
    filmy: { nazev: "Světové filmy a seriály", slova: ["Harry Potter", "Pán prstenů", "Star Wars", "Avatar", "Matrix", "Titanic", "Jurský park", "Forrest Gump", "Pulp Fiction", "Terminátor", "Vetřelec", "Kmotr", "Avengers", "Spiderman", "Batman", "Shrek", "Hledá se Nemo", "Lví král", "Doba ledová", "Piráti z Karibiku", "Gladiátor", "Temný rytíř", "Počátek", "Klub rváčů", "Mlčení jehňátek", "Sedm", "Zelená míle", "Simpsonovi", "Přátelé", "Hra o trůny", "Perníkový táta", "Stranger Things", "Teorie velkého třesku", "Jak jsem poznal vaši matku", "The Office", "Narcos", "Černobyl", "Peaky Blinders", "Sherlock", "Dexter", "Dr. House", "Ztraceni", "Mandalorian", "Westworld", "Black Mirror", "Vikings", "True Detective", "The Crown", "Suits", "Fargo"] },
    obleceni: { nazev: "Značky oblečení", slova: ["Nike", "Adidas", "Puma", "Under Armour", "Reebok", "Gucci", "Prada", "Louis Vuitton", "Balenciaga", "Versace", "Chanel", "Dior", "Zara", "H&M", "Mango", "Calvin Klein", "Tommy Hilfiger", "Hugo Boss", "Levi's", "Wrangler", "Lee", "Vans", "Converse", "New Balance", "Asics", "Fila", "Lacoste", "Ralph Lauren", "Giorgio Armani", "Burberry", "Hermès", "Givenchy", "Dolce & Gabbana", "Fendi", "Valentino", "Guess", "Diesel", "G-Star RAW", "Supreme", "Off-White", "Patagonia", "The North Face", "Columbia", "Timberland", "Salomon", "Crocs", "Skechers", "Kappa", "Umbro", "Champion"] },
    firmy: { nazev: "Světové firmy", slova: ["Apple", "Microsoft", "Google", "Amazon", "Meta", "Tesla", "Nvidia", "Samsung", "Sony", "Intel", "IBM", "Coca-Cola", "PepsiCo", "McDonald's", "Starbucks", "KFC", "Burger King", "Toyota", "Volkswagen", "BMW", "Mercedes-Benz", "Ford", "Audi", "Porsche", "Ferrari", "Boeing", "Airbus", "Netflix", "Spotify", "Disney", "Warner Bros", "Universal", "Nike", "L'Oréal", "Procter & Gamble", "Unilever", "IKEA", "Walmart", "FedEx", "DHL", "Visa", "Mastercard", "PayPal", "Red Bull", "Lego", "Rolex", "Nestlé", "Siemens", "Bosch", "Panasonic"] },
    cz_filmy: { nazev: "České filmy", slova: ["Pelíšky", "Samotáři", "Kolja", "Vratné lahve", "Slunce, seno, jahody", "S tebou mě baví svět", "Tři oříšky pro Popelku", "Obecná škola", "Ostře sledované vlaky", "Spalovač mrtvol", "Marečku, podejte mi pero!", "Vesničko má středisková", "Dědictví aneb Kurvahošigutntag", "Jáchyme, hoď ho do stroje!", "Na samotě u lesa", "Vrchní, prchni!", "Cesta do hlubin študákovy duše", "Byl jednou jeden král", "Anděl Páně", "Šíleně smutná princezna", "Limonádový Joe", "Tajemství hradu v Karpatech", "Adéla ještě nevečeřela", "Pupendo", "Želary", "Kuky se vrací", "Tmavomodrý svět", "Báječná léta pod psa", "Nuda v Brně", "Štěstí", "Příběhy obyčejného šílenství", "Vlastníci", "Ženy v běhu", "Prvok, Šampón, Tečka a Karel", "Teorie tygra", "Kytice", "Tři veteráni", "Sněženky a machři", "Což takhle dát si špenát", "Dívka na koštěti", "Zítra vstanu a opařím se čajem", "Černí baroni", "Tankový prapor", "Lotrando a Zubejda", "Alois Nebel", "Havel", "Zátopek", "Šarlatán", "Il Boemo", "Buko"] },
    cz_serialy: { nazev: "České seriály", slova: ["Ulice", "Ordinace v růžové zahradě", "Most!", "Kancelář Blaník", "Vyprávěj", "Nemocnice na kraji města", "Chalupáři", "Návštěvníci", "Arabela", "Létající Čestmír", "Hospoda", "Comeback", "Četnické humoresky", "Kriminálka Anděl", "Případy 1. oddělení", "Devadesátky", "Okresní přebor", "Čtvrtá hvězda", "Trpaslík", "Dabing Street", "Zkáza Dejvického divadla", "Labyrint", "Rapl", "Cirkus Bukowsky", "Mamon", "Pustina", "Bez vědomí", "Docent", "Stíny v mlze", "Smysl pro tumor", "Pan Tau", "Slunečná", "ZOO", "Kukačky", "Ochránce", "Božena", "Marie Terezie", "První republika", "Dobrá čtvrť", "Zdivočelá země", "Sanitka", "Malý pitaval z velkého města", "Třicet případů majora Zemana", "F.L. Věk", "Sňatky z rozumu", "Bylo nás pět", "Slovácko sa nesúdí", "Kosmo", "Sever", "Volha"] },
    sk_filmy: { nazev: "Slovenské filmy", slova: ["Bathory", "Sviňa", "Únos", "Trhlina", "Čiara", "Loli paradička", "Učiteľka", "Kandidát", "Fontána pre Zuzanu", "Pacho, hybský zbojník", "Obchod na korze", "Tisícročná včela", "Perinbaba", "Záhrada", "Slnko v sieti", "Ružové sny", "Sedím na konári a je mi dobre", "Kruté radosti", "Polčas rozpadu", "Bratislavafilm", "Lóve", "Rytmus sídliskový sen", "Miki", "Špína", "Invalid", "Slúžka", "Amnestie", "Správa", "Piráti", "Kým sa skončí táto noc", "Slepé lásky", "Zlo", "Dom", "Cigán", "Muzika", "Na krásnom modrom Dunaji", "Krajinka", "Rivers of Babylon", "Všetko čo mám rád", "Nejasná správa o konci sveta", "Sokoliar Tomáš", "Nedodržaný sľub", "Tango s komármi", "Marhuľový ostrov", "Agáva", "Rukojemník", "Nina", "Piata loď", "Cenzorka", "Čierne na bielom koni"] },
    sk_serialy: { nazev: "Slovenské seriály", slova: ["Panelák", "Oteckovia", "Horná Dolná", "Susedia", "Profesionáli", "Búrlivé víno", "Dunaj, k vašim službám", "Pán profesor", "Mesto tieňov", "Za sklom", "Nemocnica", "Druhá šanca", "Zrada", "Klamstvo", "Mama na prenájom", "Keby bolo keby", "Dedičstvo", "Divoké kone", "ZOO", "Som mama", "Naši", "Delukse", "Hrobári", "Odsúdené", "Dr. Ludsky", "Milenky", "Kuchyňa", "Autoškola", "Rex", "Kriminálka Kraj", "Kriminálka Staré Mesto", "Inšpektor Max", "1890", "Vlci", "Kolonáda", "Tajné životy", "Záchranári", "Sestričky", "Červené pásky", "Ultimátum", "Bodka", "Uhorčík", "Ministri", "Semafor", "Hotel", "Svet podľa Evelyn", "Dvojičky", "Hlavne, že sa máme radi", "Teta", "Spadla z oblakov"] },
    cz_herci: { nazev: "Čeští herci", slova: ["Ivan Trojan", "Karel Roden", "Jiří Bartoška", "Ondřej Vetchý", "Jiří Macháček", "Bolek Polívka", "Miroslav Donutil", "Jiří Lábus", "Oldřich Kaiser", "Viktor Preiss", "Petr Nárožný", "Pavel Zedníček", "Karel Heřmánek", "Josef Abrhám", "Libuše Šafránková", "Iva Janžurová", "Jiřina Bohdalová", "Dagmar Havlová", "Tatiana Vilhelmová", "Aňa Geislerová", "Klára Issová", "Vojtěch Dyk", "Jiří Mádl", "Vojtěch Kotek", "Kryštof Hádek", "Hynek Čermák", "David Novotný", "Jaroslav Dušek", "Pavel Liška", "Jan Budař", "Tomáš Hanák", "Jan Svěrák", "Martin Dejdar", "Jiří Langmajer", "Marek Vašut", "Lukáš Vaculík", "Sagvan Tofi", "Jan Kraus", "Ondřej Sokol", "Jakub Prachař", "Martin Myšička", "Václav Neužil", "Martha Issová", "Tereza Ramba", "Eliška Balzerová", "Zdeněk Svěrák", "Vladimír Menšík", "Rudolf Hrušínský", "František Filipovský", "Miloš Kopecký"] },
    cz_hudba: { nazev: "České písničky", slova: ["Trezor", "Krev toulavá", "Pohoda", "Šrouby a matice", "Burlaci", "Cesta", "Svařák", "Nonstop", "Pijánovka", "Láska je láska", "Dlouhá noc", "Pátá", "Jahody mražený", "Dej mi víc své lásky", "Jasná zpráva", "Slzy tvý mámy", "Nad stádem koní", "František", "Anděl", "Rub a líc", "Vymyslel jsem spoustu nápadů", "Když nemůžeš, tak přidej", "Nafrněná", "Schody z nebe", "Spomal", "Zapadlej krám", "V stínu kapradiny", "Holki z naší školky", "Decibely lásky", "Lásko má já stůňu", "Zřejmě letos nikde nebudou", "Biologické hodiny", "Půlnoční", "Barevný trubky", "Zrzka", "V blbým věku", "Atentát", "Hledá se žena", "Ztracená bloudím", "Touha", "Mám jizvu na rtu", "Kometa", "Karel nese asi čaj", "Babička", "Jožin z bažin", "Toulavá", "Zlaté střevíčky", "Sladké mámení", "Lásko, voníš deštěm", "Medvídek"] },
    nhl: { nazev: "Týmy NHL", slova: ["Anaheim Ducks", "Boston Bruins", "Buffalo Sabres", "Calgary Flames", "Carolina Hurricanes", "Chicago Blackhawks", "Colorado Avalanche", "Columbus Blue Jackets", "Dallas Stars", "Detroit Red Wings", "Edmonton Oilers", "Florida Panthers", "Los Angeles Kings", "Minnesota Wild", "Montreal Canadiens", "Nashville Predators", "New Jersey Devils", "New York Islanders", "New York Rangers", "Ottawa Senators", "Philadelphia Flyers", "Pittsburgh Penguins", "San Jose Sharks", "Seattle Kraken", "St. Louis Blues", "Tampa Bay Lightning", "Toronto Maple Leafs", "Utah Hockey Club", "Vancouver Canucks", "Vegas Golden Knights", "Washington Capitals", "Winnipeg Jets"] },
    extraliga_cz: { nazev: "CZ Tipsport Extraliga", slova: ["HC Sparta Praha", "HC Dynamo Pardubice", "HC Oceláři Třinec", "HC Kometa Brno", "HC Verva Litvínov", "Banes Motor České Budějovice", "Bílí Tygři Liberec", "Mountfield HK", "HC Energie Karlovy Vary", "HC Vítkovice Ridera", "HC Škoda Plzeň", "HC Olomouc", "Rytíři Kladno", "BK Mladá Boleslav"] },
    extraliga_sk: { nazev: "SK Hokejová Extraliga", slova: ["HC Slovan Bratislava", "HC Košice", "HK Dukla Ingema Michalovce", "HK Nitra", "HK Poprad", "HKM Zvolen", "HC '05 Banská Bystrica", "HK Spišská Nová Ves", "HK Dukla Trenčín", "HC Nové Zámky", "MHk 32 Liptovský Mikuláš", "Vlci Žilina", "HC Prešov", "HK 36 Skalica", "MHK Dubnica", "HC Topoľčany"] },
    fastfoody: { nazev: "Fastfoody", slova: ["McDonald's", "KFC", "Burger King", "Subway", "Starbucks", "Domino's", "Pizza Hut", "Taco Bell", "Wendy's", "Chipotle", "Five Guys", "In-N-Out", "Popeyes", "Shake Shack", "Panda Express", "Dairy Queen", "Dunkin'", "Krispy Kreme", "Costa Coffee", "Bageterie Boulevard", "Burrito Loco", "Paul", "Nordsee", "UGO", "CrossCafe", "Kebab do ruky", "Sbarro", "Cinnabon", "Hard Rock Cafe", "Hooters", "Pret A Manger", "Tim Hortons", "Jack in the Box", "Arby's", "Sonic", "Carl's Jr.", "Papa John's", "Little Caesars", "Jollibee", "Nando's", "Wagamama", "Vapiano", "Greggs", "Leon", "Hesburger", "Max Burgers", "Quick", "Baskin-Robbins", "Cold Stone"] },
    jidlo: { nazev: "Jídlo a vaření", slova: ["Svíčková", "Řízek", "Guláš", "Pizza", "Sushi", "Kebab", "Hamburger", "Těstoviny", "Salát", "Tatarák", "Pečená kachna", "Vepřo knedlo zelo", "Smažák", "Utopenec", "Nakládaný hermelín", "Bramborák", "Hranolky", "Rýže", "Kuskus", "Bulgur", "Quinoa", "Tofu", "Steak", "Losos", "Kapr", "Tuňák", "Krevety", "Chobotnice", "Kaviár", "Lívance", "Palačinky", "Vafle", "Zmrzlina", "Čokoláda", "Dort", "Bábovka", "Štrúdl", "Koláč", "Buchty", "Croissant", "Muffin", "Donut", "Bageta", "Chleba", "Rohlík", "Sýr", "Šunka", "Slanina", "Párek", "Klobása"] },
    kuchyn: { nazev: "V kuchyni", slova: ["Nůž", "Vidlička", "Lžíce", "Hrnec", "Pánev", "Prkénko", "Mixér", "Trouba", "Mikrovlnka", "Lednice", "Mrazák", "Myčka", "Dřez", "Sporák", "Varná konvice", "Kávovar", "Toustovač", "Topinkovač", "Váha", "Odměrka", "Naběračka", "Obracečka", "Škrabka", "Struhadlo", "Lis na česnek", "Vývrtka", "Otvírák", "Cedník", "Sítko", "Váleček", "Forma na pečení", "Pekáč", "Zástěra", "Chňapka", "Utěrka", "Houbička", "Jar", "Odpadkový koš", "Talíř", "Miska", "Hrneček", "Sklenička", "Kastrůlek", "Palička na maso", "Mlýnek na kávu", "Louskáček", "Kráječ na pizzu", "Metla", "Stěrka", "Zavařovací sklenice"] },
    hudebni_nastroje: { nazev: "Hudební nástroje", slova: ["Kytara", "Klavír", "Housle", "Buben", "Flétna", "Trubka", "Saxofon", "Baskytara", "Harmonika", "Akordeon", "Varhany", "Syntetizér", "Cello", "Kontrabas", "Viola", "Klarinet", "Hoboj", "Fagot", "Trombón", "Lesní roh", "Tuba", "Harfa", "Xylofon", "Vibrafon", "Marimba", "Tympány", "Činely", "Konga", "Bonga", "Djembe", "Cajon", "Tamburína", "Triangl", "Kastraněty", "Rolničky", "Zobcová flétna", "Okarína", "Dudy", "Banjo", "Mandolína", "Ukulele", "Loutna", "Zvonkohra", "Gong", "Rumba koule", "Panova flétna", "Elektrická kytara", "Bicí souprava", "Didgeridoo", "Sitár"] },
    cz_mesta: { nazev: "Česká města", slova: ["Praha", "Brno", "Ostrava", "Plzeň", "Liberec", "Olomouc", "České Budějovice", "Hradec Králové", "Ústí nad Labem", "Pardubice", "Zlín", "Havířov", "Kladno", "Most", "Opava", "Frýdek-Místek", "Karviná", "Jihlava", "Teplice", "Děčín"] },
    sk_mesta: { nazev: "Slovenská města", slova: ["Bratislava", "Košice", "Prešov", "Žilina", "Nitra", "Banská Bystrica", "Trnava", "Trenčín", "Martin", "Poprad", "Prievidza", "Zvolen", "Považská Bystrica", "Michalovce", "Nové Zámky", "Spišská Nová Ves", "Komárno", "Humenné", "Levice", "Bardejov"] },
    cs_influenceri: { nazev: "CZ/SK Influenceři", slova: ["Kovy", "Jirka Král", "MenT", "Gejmr", "Tary", "Bača", "Expl0ited", "GogoManTV", "Duklock", "Selassie", "Anna Šulcová", "Shopaholic Nicol", "FattyPillow", "Stejk", "Agraelus", "Kazma", "Leoš Mareš", "Zuzana Plačková", "Rytmus", "Sajfa", "Fero Joke", "Kokeš", "Třešničková", "HouseBox", "Asimister", "VláďaVideos", "Karlos Vémola", "Ewa Farna", "Bára Mottlová", "Dara Rolins", "Majk Spirit", "Separ"] },
    auta: { nazev: "Značky aut", slova: ["Škoda", "Volkswagen", "Ford", "BMW", "Mercedes-Benz", "Audi", "Toyota", "Peugeot", "Renault", "Hyundai", "Kia", "Fiat", "Opel", "Seat", "Dacia", "Volvo", "Nissan", "Mazda", "Honda", "Suzuki", "Porsche", "Ferrari", "Lamborghini", "Tesla", "Chevrolet", "Jeep", "Alfa Romeo", "Aston Martin", "Bentley", "Bugatti", "Cadillac", "Chrysler", "Citroën", "Dodge", "GMC", "Jaguar", "Land Rover", "Lexus", "Maserati", "McLaren", "Mini", "Mitsubishi", "Subaru"] },
    trenyrkarna: { nazev: "Trenýrkárna", slova: [
        "Koule v bezpečí", "Prádlo pro všechny", "Dnes objednáš, zítra máš", "Balíček plný trenek", "Trenýrkový terminátor", 
        "Vémolovy trenky", "Komparz za tři tisíce", "Sraz v devět", "Sportovní kraťasy", "Dones si džíny", "Natáčení u Sabči", 
        "Zapnutá bunda", "Svetr přes rameno", "Ohrnuté kalhoty", "Outfit z produktovky", "GRWM", "Outfit ve špíně", 
        "Když ten jeden outfit nemůžeš najít", "Back to school", "Máma a syn", "Lela31", "VEPREK30", "Influencer kód", 
        "Devět objednávek", "Barter", "Licence na Meta", "Dvanáct procent fee", "Dosah", "Organický dosah", "Engagement", 
        "Reelko", "TikTok trend", "Instagram kvalita", "Rozmazané Reels", "4K export", "DaVinci", "Highest Quality", 
        "Facebook desktop", "TikTok ostřejší než Instagram", "Algoritmus", "Tally", "Looker", "Respondent ID", "Count distinct", 
        "Google tabulka", "BigQuery", "SQL", "KPI", "Téčko", "Asana", "Mnutí vajec", "Saháš si na koule", "Samovyšetření koulí", 
        "Prasklé trenky", "Díra na palci", "Díra na patě", "Roztrhané ponožky", "Osamělá ponožka", "Ztracená ponožka", 
        "Ponožková hierarchie", "Kalhotková hierarchie", "Poslední čisté boxerky", "Prádlo na dně koše", "Hora prádla", 
        "Koš na prádlo", "Pračka", "Sušák", "Aviváž", "Praní na třicet", "Praní naruby", "Zlatá guma", "Stříbrná guma", 
        "Barevná guma", "Metalická guma", "Guma od trenek", "Vytahaná guma", "Zařízlé trenky", "Trenky v zadku", "Trenky naruby", 
        "Trenky pro štěstí", "Trenky po tátovi", "Vánoční trenky", "Partnerské trenky", "Stejné boxerky", "Černé boxerky", 
        "Sto stejných boxerek", "Rozhodovací paralýza", "Ranní výběr trenek", "Čistý šuplík", "Šuplík se spodním prádlem", 
        "Matching pyžamo", "Matching rodina", "Matching máma a syn", "Matching couple", "Rodinné pyžamo", "Pyžamová párty", 
        "Movie night", "Gauč", "Deka", "Netflix", "Love Island", "Ovladač", "„Dávaj novej Love Island“", "Tajení Love Islandu", 
        "Zažranej do reality show", "Přetahování o ovladač", "Couch potato", "Chrápání", "Spánek bez kalhot", "Pyžamo celý den", 
        "Willy Wonka", "Kouzelný kalendář", "Zlatý voucher", "Stříbrný voucher", "Tajná výhra", "Výherní kalendář", "Zlatý lístek", 
        "Splněné přání", "Vánoční překvapení", "Balík pod stromkem", "Dopis Ježíškovi", "Stromek ve skladu", "Vánoční sklad", 
        "Dopravce před Vánoci", "Balík na pásu", "Rozbalování kalendáře", "První prosinec", "Adventní okénko", "Perníček", 
        "Vánoční ponožky", "Trenýrkárna laboratoř", "Hořící spodní prádlo", "Bavlna v ohni", "Syntetika v ohni", "Propocené termoprádlo", 
        "Bavlna pod termem", "Bavlněné ponožky na sport", "Hrubý šev", "Funkční prádlo", "Pot v trenkách", "Zapařený zadek", 
        "Sportovní boxerky", "Termoprádlo", "Vrstva navíc", "Funkční materiál", "Test ponožek", "Test pyžama", "Experiment", 
        "Laboratorní plášť", "Trenýrkový vědec", "Dvě minuty", "Trestná lavice", "Hokejová kabina", "Trenér", "Hokejista", 
        "Prasknutí v kabině", "Dukla", "Hokejové spodky", "Celá lajna", "Jeden hráč", "Tři hráči", "3PACK proti jednomu", 
        "Přesilovka", "Střídačka", "Šatna plná trenek", "Koule", "Prostata", "Prsa", "Bradavka", "Bulka", "Růžová stuha", 
        "Modrá stuha", "Samovyšetření", "Menstruační krev", "Čípek", "Flap flossing", "Golden gusset", "Klínek", "Úzký klínek", 
        "Široký klínek", "Pánevní dno", "Menstruační houba", "Houba v pochvě", "Kalíšek ve škole", "Kalhotky do školy", "Kde máme…?", 
        "Tam, kde to je čtyři roky", "Deset vyřešených večeří", "Den bez šůrování", "Schopnost najít věci očima", "Nakupování pro celou rodinu", 
        "Dárek, co není pro tebe", "Boxerky jako dárek", "Ponožky jako dárek", "Špatně trefená velikost", "Správně trefená velikost", 
        "Dárek na poslední chvíli", "Low budget dárek", "Dárek pro něj", "Dárek pro ni", "Slovensko", "Maďarsko", "Německo", "Polsko", 
        "Rumunsko", "Chorvatsko", "Slovinsko", "Nizozemsko", "Francie", "Bulharsko", "Řecko", "Itálie", "Španělsko", "Portugalsko", 
        "Lotyšsko", "Litva", "Estonsko", "Finsko", "Dánsko", "Švédsko", "Díra na ponožce", "Vytahaná guma", "Poslední čisté trenky", 
        "Prádlo ve špíně", "Párování ponožek", "Ranní oblékání", "Praní", "Sušička", "Šatna", "Převlékání", "Sportovní kraťasy", 
        "Džíny", "Kabina", "Led", "Hokejka", "Trenky pro štěstí", "Zlatá guma", "Stříbrná guma", "Spodní prádlo na sport", 
        "Chrápání v pyžamu", "Sklad", "Expedice", "Objednávka", "Balík", "Dopravce", "GLS", "Voucher", "Doprava zdarma", 
        "Vratka", "Reklamace", "Košík", "Checkout", "Velikostní tabulka", "Marže", "AOV", "Zákazník", "Homepage", "Marketplace", 
        "Decathlon", "Dr.Max", "Karlos Vémola", "Lela Vémola", "HC Dukla Jihlava", "Terminátor", "Ženská cykličnost", "Zdeňka Svobodová", 
        "NFVK", "Veronika Kašáková", "Loono", "Muž roku", "Ivana", "Bára", "Lenka", "Vepřekovi", "Majzny", "Matěj", "Dejv", 
        "Helča", "Kuba", "Sabča", "Menstruace", "Ovulace", "PMS", "Menstruační cyklus", "LH hormon", "Melatonin", "Progesteron", 
        "Estrogen", "Vaginální suchost", "Kojení", "Perimenopauza", "Endometrióza", "Výtok", "Inkontinence", "Pánevní dno", 
        "Děložní čípek", "Mikroflóra", "Hormonální zdraví", "Sexuální zdraví", "Prostata", "Content creator", "PrestaShop", 
        "BigQuery", "Looker Studio", "Tally", "Google Sheets", "Asana", "Figma", "DaVinci Resolve", "Meta", "PPC", "CMS", "SEO", 
        "Newsletter", "Push notifikace", "Landing page", "A/B test", "KPI", "Report", "Expanze", "Instagram", "TikTok", "Facebook", 
        "Reels", "Stories", "Carousel", "Hook", "CTA", "UGC", "Influencer", "Komparzista", "GRWM", "Matching outfit", "Meme", 
        "Trend", "Anketa", "Soutěž", "Unboxing", "Giveaway", "Voiceover", "Black Friday", "Letní Vánoce", "Výhodný čtvrtek", 
        "Totální výprodej", "Narozeniny", "Flash sale", "Fashion Sale", "Dny Maluna", "Dny Marianne", "Ona Dnes Nákupy", 
        "Adventní kalendář", "Zlaté trenky", "Stříbrné ponožky", "Perníček", "Willy Wonka", "Halloween", "Valentýn", "Back to school", 
        "Vánoce", "Výprodej plavek", "Trenýrky", "Boxerky", "Slipy", "Kalhotky", "Podprsenka", "Ponožky", "Pyžamo", "Noční košilka", 
        "Termoprádlo", "3PACK", "2PACK", "Multipack", "Ball Holder", "Menstruační kalhotky", "Menstruační plavky", "Menstruační kalíšek", 
        "Látková vložka", "Menstruační houba", "Tampon", "Intimní gel", "Trenýrkárna", "STYX", "Nedeto", "Pietro Filipi", "Maluna", 
        "Kalíšek", "Povidlo", "Danidarx", "ZOOT", "Dedoles", "Calvin Klein", "Tommy Hilfiger", "Diesel", "Puma", "Gant", "Boss", 
        "Under Armour", "Dorina", "Modibodi", "Love Luna"
    ] }
};

let vybraneKategorieKeys = [];
let aktualniSlova = [];
let uhodnuto = [];
let preskoceno = [];
let aktualniSlovo = "";
let casovacInterval;
let zbyvajiciCas = 60;
let muzeHadat = false;
let cekamNaNavrat = false; 

let audioCtx;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

function zahrajZvuk(typ) {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    if (typ === 'spravne') {
        osc.type = 'square';
        osc.frequency.setValueAtTime(987.77, audioCtx.currentTime);
        osc.frequency.setValueAtTime(1318.51, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.4);
    } else if (typ === 'spatne') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(300, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.3);
        gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.4);
    }
}

window.onload = () => {
    const kontejner = document.getElementById('seznam-kategorii');
    for (const klika in kategorieData) {
        const btn = document.createElement('button');
        btn.innerText = kategorieData[klika].nazev;
        btn.onclick = () => prepniKategorii(btn, klika);
        kontejner.appendChild(btn);
    }
};

function prepniKategorii(btn, klic) {
    if (vybraneKategorieKeys.includes(klic)) {
        vybraneKategorieKeys = vybraneKategorieKeys.filter(k => k !== klic);
        btn.classList.remove('vybrano');
    } else {
        vybraneKategorieKeys.push(klic);
        btn.classList.add('vybrano');
    }

    const panel = document.getElementById('start-panel');
    if (vybraneKategorieKeys.length > 0) {
        panel.style.display = 'block';
    } else {
        panel.style.display = 'none';
    }
}

function pripravHru() {
    aktualniSlova = [];
    vybraneKategorieKeys.forEach(klic => {
        aktualniSlova = aktualniSlova.concat(kategorieData[klic].slova);
    });
    
    aktualniSlova = aktualniSlova.sort(() => Math.random() - 0.5);
    
    uhodnuto = [];
    preskoceno = [];
    zbyvajiciCas = parseInt(document.getElementById('cas').value) || 60;
    
    document.getElementById('menu').style.display = 'none';
    document.getElementById('start-panel').style.display = 'none';
    
    const priprava = document.getElementById('priprava');
    priprava.style.display = 'flex';
    document.getElementById('priprava-text').innerText = "Klepnutím na obrazovku začneš hru";
}

function odstartujOdpotocet() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(err => console.log("Fullscreen zamítnut"));
    }

    initAudio();

    if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') {
                    window.addEventListener('devicemotion', zpracujPohyb);
                }
            })
            .catch(console.error);
    } else {
        window.addEventListener('devicemotion', zpracujPohyb);
    }

    let cislo = 3;
    const text = document.getElementById('priprava-text');
    text.innerText = cislo;
    
    const interval = setInterval(() => {
        cislo--;
        if (cislo > 0) {
            text.innerText = cislo;
        } else {
            clearInterval(interval);
            skutecnyStartHry();
        }
    }, 1000);
}

function skutecnyStartHry() {
    document.getElementById('priprava').style.display = 'none';
    document.getElementById('hra').style.display = 'flex';
    document.getElementById('casomira').innerText = zbyvajiciCas;
    
    casovacInterval = setInterval(odpocet, 1000);
    dalsiSlovo();
}

function odpocet() {
    zbyvajiciCas--;
    document.getElementById('casomira').innerText = zbyvajiciCas;
    
    if (zbyvajiciCas <= 0) {
        konecHry();
    }
}

function dalsiSlovo() {
    if (aktualniSlova.length === 0 || zbyvajiciCas <= 0) {
        konecHry();
        return;
    }
    aktualniSlovo = aktualniSlova.pop();
    document.getElementById('slovo').innerText = aktualniSlovo;
    document.getElementById('hra').style.backgroundColor = "#0044cc";
    
    setTimeout(() => { muzeHadat = true; }, 500);
}

function zpracujPohyb(event) {
    if (!muzeHadat) return;

    let z = event.accelerationIncludingGravity.z;

    if (cekamNaNavrat) {
        if (z > -3 && z < 3) {
            cekamNaNavrat = false;
            document.getElementById('hra').style.backgroundColor = "#0044cc";
            document.getElementById('slovo').innerText = aktualniSlovo;
        }
        return;
    }

    if (z < -6.5 || z > 6.5) {
        muzeHadat = false;
        cekamNaNavrat = true;

        if (z > 6.5) { 
            zahrajZvuk('spravne');
            uhodnuto.push(aktualniSlovo);
            document.getElementById('hra').style.backgroundColor = "#28a745";
            document.getElementById('slovo').innerText = "Správně!";
        } else { 
            zahrajZvuk('spatne');
            preskoceno.push(aktualniSlovo);
            document.getElementById('hra').style.backgroundColor = "#dc3545";
            document.getElementById('slovo').innerText = "Přeskočeno";
        }
        setTimeout(dalsiSlovo, 800);
    }
}

function ukoncitHru() {
    if (confirm("Opravdu chceš hru ukončit?")) {
        konecHry();
    }
}

function konecHry() {
    clearInterval(casovacInterval);
    window.removeEventListener('devicemotion', zpracujPohyb);
    
    if (document.exitFullscreen && document.fullscreenElement) {
        document.exitFullscreen().catch(err => console.log(err));
    }

    document.getElementById('hra').style.display = 'none';
    document.getElementById('priprava').style.display = 'none';
    document.getElementById('vysledky').style.display = 'flex';

    document.getElementById('pocet-uhodnuto').innerText = uhodnuto.length;
    document.getElementById('seznam-uhodnuto').innerHTML = uhodnuto.map(s => `<li>${s}</li>`).join('');
    
    document.getElementById('pocet-preskoceno').innerText = preskoceno.length;
    document.getElementById('seznam-preskoceno').innerHTML = preskoceno.map(s => `<li>${s}</li>`).join('');
}

function zpetDoMenu() {
    vybraneKategorieKeys = [];
    document.querySelectorAll('.tlacitka-kategorie button').forEach(btn => btn.classList.remove('vybrano'));
    
    document.getElementById('vysledky').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}
