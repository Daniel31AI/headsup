const kategorie = {
    zeme: ["Česko", "Slovensko", "Německo", "Francie", "Itálie", "Španělsko", "Japonsko", "Austrálie", "Brazílie", "Kanada", "Egypt", "Mexiko", "Norsko", "Švédsko", "Řecko", "Thajsko", "Peru", "Indie", "Čína", "Keňa", "USA", "Velká Británie", "Rusko", "Argentina", "Kuba", "Chorvatsko", "Rakousko", "Polsko", "Maďarsko", "Švýcarsko", "Finsko", "Dánsko", "Irsko", "Portugalsko", "Turecko", "Vietnam", "Kambodža", "Kolumbie", "Chile", "Nový Zéland", "Jihoafrická republika", "Maroko", "Madagaskar", "Island", "Ukrajina", "Rumunsko", "Bulharsko", "Srbsko", "Izrael", "SAE"],
    zvirata: ["Pes", "Kočka", "Slon", "Žirafa", "Tygr", "Lev", "Medvěd", "Opice", "Tučňák", "Krokodýl", "Had", "Kůň", "Kráva", "Prase", "Delfín", "Žralok", "Velryba", "Orel", "Pavouk", "Klokan", "Gepard", "Hroch", "Nosorožec", "Zebra", "Velbloud", "Křeček", "Morče", "Papoušek", "Sova", "Netopýr", "Žába", "Ještěrka", "Chameleon", "Mravenec", "Včela", "Motýl", "Slepice", "Kachna", "Husa", "Ovce", "Koza", "Jelen", "Srnec", "Vlk", "Liška", "Zajíc", "Králík", "Kapr", "Štika", "Pštros"],
    povolani: ["Hasič", "Policista", "Lékař", "Učitel", "Programátor", "Kuchař", "Zpěvák", "Herec", "Právník", "Architekt", "Automechanik", "Prodavač", "Kadeřník", "Pilot", "Řidič", "Zubař", "Fotograf", "Novinář", "Zemědělec", "Truhlář", "Zahradník", "Instalatér", "Elektrikář", "Zedník", "Malíř", "Účetní", "Manažer", "Ředitel", "Sekretářka", "Číšník", "Barman", "Letuška", "Soudce", "Politik", "Voják", "Námořník", "Rybář", "Sportovec", "Trenér", "Masér", "Psycholog", "Veterinář", "Spisovatel", "Malíř", "Sochař", "Hudebník", "Tanečník", "Moderátor", "Režisér", "Kameraman"],
    filmy: ["Harry Potter", "Pán prstenů", "Star Wars", "Avatar", "Matrix", "Titanic", "Jurský park", "Forrest Gump", "Pulp Fiction", "Terminátor", "Vetřelec", "Kmotr", "Avengers", "Spiderman", "Batman", "Shrek", "Hledá se Nemo", "Lví král", "Doba ledová", "Piráti z Karibiku", "Gladiátor", "Temný rytíř", "Počátek", "Klub rváčů", "Mlčení jehňátek", "Sedm", "Zelená míle", "Simpsonovi", "Přátelé", "Hra o trůny", "Perníkový táta", "Stranger Things", "Teorie velkého třesku", "Jak jsem poznal vaši matku", "The Office", "Narcos", "Černobyl", "Peaky Blinders", "Sherlock", "Dexter", "Dr. House", "Ztraceni", "Mandalorian", "Westworld", "Black Mirror", "Vikings", "True Detective", "The Crown", "Suits", "Fargo"],
    obleceni: ["Nike", "Adidas", "Puma", "Under Armour", "Reebok", "Gucci", "Prada", "Louis Vuitton", "Balenciaga", "Versace", "Chanel", "Dior", "Zara", "H&M", "Mango", "Calvin Klein", "Tommy Hilfiger", "Hugo Boss", "Levi's", "Wrangler", "Lee", "Vans", "Converse", "New Balance", "Asics", "Fila", "Lacoste", "Ralph Lauren", "Giorgio Armani", "Burberry", "Hermès", "Givenchy", "Dolce & Gabbana", "Fendi", "Valentino", "Guess", "Diesel", "G-Star RAW", "Supreme", "Off-White", "Patagonia", "The North Face", "Columbia", "Timberland", "Salomon", "Crocs", "Skechers", "Kappa", "Umbro", "Champion"],
    firmy: ["Apple", "Microsoft", "Google", "Amazon", "Meta", "Tesla", "Nvidia", "Samsung", "Sony", "Intel", "IBM", "Coca-Cola", "PepsiCo", "McDonald's", "Starbucks", "KFC", "Burger King", "Toyota", "Volkswagen", "BMW", "Mercedes-Benz", "Ford", "Audi", "Porsche", "Ferrari", "Boeing", "Airbus", "Netflix", "Spotify", "Disney", "Warner Bros", "Universal", "Nike", "L'Oréal", "Procter & Gamble", "Unilever", "IKEA", "Walmart", "FedEx", "DHL", "Visa", "Mastercard", "PayPal", "Red Bull", "Lego", "Rolex", "Nestlé", "Siemens", "Bosch", "Panasonic"],
    cz_filmy: ["Pelíšky", "Samotáři", "Kolja", "Vratné lahve", "Slunce, seno, jahody", "S tebou mě baví svět", "Tři oříšky pro Popelku", "Obecná škola", "Ostře sledované vlaky", "Spalovač mrtvol", "Marečku, podejte mi pero!", "Vesničko má středisková", "Dědictví aneb Kurvahošigutntag", "Jáchyme, hoď ho do stroje!", "Na samotě u lesa", "Vrchní, prchni!", "Cesta do hlubin študákovy duše", "Byl jednou jeden král", "Anděl Páně", "Šíleně smutná princezna", "Limonádový Joe", "Tajemství hradu v Karpatech", "Adéla ještě nevečeřela", "Pupendo", "Želary", "Kuky se vrací", "Tmavomodrý svět", "Báječná léta pod psa", "Nuda v Brně", "Štěstí", "Příběhy obyčejného šílenství", "Vlastníci", "Ženy v běhu", "Prvok, Šampón, Tečka a Karel", "Teorie tygra", "Kytice", "Tři veteráni", "Sněženky a machři", "Což takhle dát si špenát", "Dívka na koštěti", "Zítra vstanu a opařím se čajem", "Černí baroni", "Tankový prapor", "Lotrando a Zubejda", "Alois Nebel", "Havel", "Zátopek", "Šarlatán", "Il Boemo", "Buko"],
    cz_serialy: ["Ulice", "Ordinace v růžové zahradě", "Most!", "Kancelář Blaník", "Vyprávěj", "Nemocnice na kraji města", "Chalupáři", "Návštěvníci", "Arabela", "Létající Čestmír", "Hospoda", "Comeback", "Četnické humoresky", "Kriminálka Anděl", "Případy 1. oddělení", "Devadesátky", "Okresní přebor", "Čtvrtá hvězda", "Trpaslík", "Dabing Street", "Zkáza Dejvického divadla", "Labyrint", "Rapl", "Cirkus Bukowsky", "Mamon", "Pustina", "Bez vědomí", "Docent", "Stíny v mlze", "Smysl pro tumor", "Pan Tau", "Slunečná", "ZOO", "Kukačky", "Ochránce", "Božena", "Marie Terezie", "První republika", "Dobrá čtvrť", "Zdivočelá země", "Sanitka", "Malý pitaval z velkého města", "Třicet případů majora Zemana", "F.L. Věk", "Sňatky z rozumu", "Bylo nás pět", "Slovácko sa nesúdí", "Kosmo", "Sever", "Volha"],
    sk_filmy: ["Bathory", "Sviňa", "Únos", "Trhlina", "Čiara", "Loli paradička", "Učiteľka", "Kandidát", "Fontána pre Zuzanu", "Pacho, hybský zbojník", "Obchod na korze", "Tisícročná včela", "Perinbaba", "Záhrada", "Slnko v sieti", "Ružové sny", "Sedím na konári a je mi dobre", "Kruté radosti", "Polčas rozpadu", "Bratislavafilm", "Lóve", "Rytmus sídliskový sen", "Miki", "Špína", "Invalid", "Slúžka", "Amnestie", "Správa", "Piráti", "Kým sa skončí táto noc", "Slepé lásky", "Zlo", "Dom", "Cigán", "Muzika", "Na krásnom modrom Dunaji", "Krajinka", "Rivers of Babylon", "Všetko čo mám rád", "Nejasná správa o konci sveta", "Sokoliar Tomáš", "Nedodržaný sľub", "Tango s komármi", "Marhuľový ostrov", "Agáva", "Rukojemník", "Nina", "Piata loď", "Cenzorka", "Čierne na bielom koni"],
    sk_serialy: ["Panelák", "Oteckovia", "Horná Dolná", "Susedia", "Profesionáli", "Búrlivé víno", "Dunaj, k vašim službám", "Pán profesor", "Mesto tieňov", "Za sklom", "Nemocnica", "Druhá šanca", "Zrada", "Klamstvo", "Mama na prenájom", "Keby bolo keby", "Dedičstvo", "Divoké kone", "ZOO", "Som mama", "Naši", "Delukse", "Hrobári", "Odsúdené", "Dr. Ludsky", "Milenky", "Kuchyňa", "Autoškola", "Rex", "Kriminálka Kraj", "Kriminálka Staré Mesto", "Inšpektor Max", "1890", "Vlci", "Kolonáda", "Tajné životy", "Záchranári", "Sestričky", "Červené pásky", "Ultimátum", "Bodka", "Uhorčík", "Ministri", "Semafor", "Hotel", "Svet podľa Evelyn", "Dvojičky", "Hlavne, že sa máme radi", "Teta", "Spadla z oblakov"],
    cz_herci: ["Ivan Trojan", "Karel Roden", "Jiří Bartoška", "Ondřej Vetchý", "Jiří Macháček", "Bolek Polívka", "Miroslav Donutil", "Jiří Lábus", "Oldřich Kaiser", "Viktor Preiss", "Petr Nárožný", "Pavel Zedníček", "Karel Heřmánek", "Josef Abrhám", "Libuše Šafránková", "Iva Janžurová", "Jiřina Bohdalová", "Dagmar Havlová", "Tatiana Vilhelmová", "Aňa Geislerová", "Klára Issová", "Vojtěch Dyk", "Jiří Mádl", "Vojtěch Kotek", "Kryštof Hádek", "Hynek Čermák", "David Novotný", "Jaroslav Dušek", "Pavel Liška", "Jan Budař", "Tomáš Hanák", "Jan Svěrák", "Martin Dejdar", "Jiří Langmajer", "Marek Vašut", "Lukáš Vaculík", "Sagvan Tofi", "Jan Kraus", "Ondřej Sokol", "Jakub Prachař", "Martin Myšička", "Václav Neužil", "Martha Issová", "Tereza Ramba", "Eliška Balzerová", "Zdeněk Svěrák", "Vladimír Menšík", "Rudolf Hrušínský", "František Filipovský", "Miloš Kopecký"],
    cz_hudba: ["Trezor", "Krev toulavá", "Pohoda", "Šrouby a matice", "Burlaci", "Cesta", "Svařák", "Nonstop", "Pijánovka", "Láska je láska", "Dlouhá noc", "Pátá", "Jahody mražený", "Dej mi víc své lásky", "Jasná zpráva", "Slzy tvý mámy", "Nad stádem koní", "František", "Anděl", "Rub a líc", "Vymyslel jsem spoustu nápadů", "Když nemůžeš, tak přidej", "Nafrněná", "Schody z nebe", "Spomal", "Zapadlej krám", "V stínu kapradiny", "Holki z naší školky", "Decibely lásky", "Lásko má já stůňu", "Zřejmě letos nikde nebudou", "Biologické hodiny", "Půlnoční", "Barevný trubky", "Zrzka", "V blbým věku", "Atentát", "Hledá se žena", "Ztracená bloudím", "Touha", "Mám jizvu na rtu", "Kometa", "Karel nese asi čaj", "Babička", "Jožin z bažin", "Toulavá", "Zlaté střevíčky", "Sladké mámení", "Lásko, voníš deštěm", "Medvídek"],
    svet_hudba: ["Bohemian Rhapsody", "Billie Jean", "Shape of You", "Smells Like Teen Spirit", "Hotel California", "Imagine", "Hey Jude", "Like a Rolling Stone", "I Will Always Love You", "Rolling in the Deep", "Sweet Child O' Mine", "Wonderwall", "Stairway to Heaven", "Don't Stop Believin'", "Thriller", "Hallelujah", "Yesterday", "Let It Be", "Waterloo", "Dancing Queen", "Livin' on a Prayer", "Uptown Funk", "Blinding Lights", "Someone Like You", "Perfect", "Thinking Out Loud", "Bad Guy", "Dance Monkey", "Despacito", "Macarena", "My Heart Will Go On", "Nothing Compares 2 U", "Losing My Religion", "Creep", "Viva La Vida", "Clocks", "Yellow", "Halo", "Crazy in Love", "Single Ladies", "Toxic", "Baby One More Time", "Vogue", "Like a Prayer", "Purple Rain", "When Doves Cry", "Born to Run", "Thunderstruck", "Back in Black", "Highway to Hell"],
    sk_hudba: ["Voda čo ma drží nad vodou", "Láska je tu s vami", "Po schodoch", "Zlodej slnečníc", "Boli sme raz milovaní", "Nie sme zlí", "Kristínka iba spí", "Mandarinka Darinka", "Žily", "Ty a Tvoja sestra", "Na bieleho koňa", "Slovenské tango", "V slepých uličkách", "Biely kvet", "Atlantída", "Zaľúbená žaba", "Vyznanie", "Koloseum", "Vráť trochu lásky medzi nás", "Držím ti miesto", "Loď do neznáma", "Láska moja", "Spomaľ", "Horehronie", "Nezvestný", "Kým vieš snívať", "Odkaz", "Príbeh", "Neľutujem", "Mandolína", "Spolu", "Zatancuj si so mnou", "Keď sme sami", "Úsmev", "Zanedbaný sex", "Cigaretka na 2 ťahy", "Len tebe", "Povedz mi", "Snívaj si v náručí", "Balada o poľných vtákoch", "Dnes", "Pravda víťazí", "Chlapčenský úsmev", "Ak nie si moja", "Umenie žiť", "Včelka Maja", "Slzy tvý mámy (SK verzia)", "Milovanie v daždi", "Modlitba lásky", "Tlaková níž"],
    nhl: ["Anaheim Ducks", "Boston Bruins", "Buffalo Sabres", "Calgary Flames", "Carolina Hurricanes", "Chicago Blackhawks", "Colorado Avalanche", "Columbus Blue Jackets", "Dallas Stars", "Detroit Red Wings", "Edmonton Oilers", "Florida Panthers", "Los Angeles Kings", "Minnesota Wild", "Montreal Canadiens", "Nashville Predators", "New Jersey Devils", "New York Islanders", "New York Rangers", "Ottawa Senators", "Philadelphia Flyers", "Pittsburgh Penguins", "San Jose Sharks", "Seattle Kraken", "St. Louis Blues", "Tampa Bay Lightning", "Toronto Maple Leafs", "Utah Hockey Club", "Vancouver Canucks", "Vegas Golden Knights", "Washington Capitals", "Winnipeg Jets"],
    extraliga_cz: ["HC Sparta Praha", "HC Dynamo Pardubice", "HC Oceláři Třinec", "HC Kometa Brno", "HC Verva Litvínov", "Banes Motor České Budějovice", "Bílí Tygři Liberec", "Mountfield HK", "HC Energie Karlovy Vary", "HC Vítkovice Ridera", "HC Škoda Plzeň", "HC Olomouc", "Rytíři Kladno", "BK Mladá Boleslav"],
    extraliga_sk: ["HC Slovan Bratislava", "HC Košice", "HK Dukla Ingema Michalovce", "HK Nitra", "HK Poprad", "HKM Zvolen", "HC '05 Banská Bystrica", "HK Spišská Nová Ves", "HK Dukla Trenčín", "HC Nové Zámky", "MHk 32 Liptovský Mikuláš", "Vlci Žilina"]
};

let aktualniSlova = [];
let uhodnuto = [];
let preskoceno = [];
let aktualniSlovo = "";
let casovacInterval;
let zbyvajiciCas = 60;
let muzeHadat = false;
let cekamNaNavrat = false; 

function zacniHru(vyber) {
    aktualniSlova = [...kategorie[vyber]].sort(() => Math.random() - 0.5);
    uhodnuto = [];
    preskoceno = [];
    zbyvajiciCas = parseInt(document.getElementById('cas').value) || 60;
    
    document.getElementById('menu').style.display = 'none';
    document.getElementById('vysledky').style.display = 'none';
    document.getElementById('hra').style.display = 'flex';
    document.getElementById('casomira').innerText = zbyvajiciCas;
    
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(err => console.log("Fullscreen zamítnut"));
    }

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
            // Displej směřuje k zemi -> Uhodnuto (Správně)
            uhodnuto.push(aktualniSlovo);
            document.getElementById('hra').style.backgroundColor = "#28a745";
            document.getElementById('slovo').innerText = "Správně!";
        } else { 
            // Displej směřuje ke stropu -> Přeskočeno (Špatně)
            preskoceno.push(aktualniSlovo);
            document.getElementById('hra').style.backgroundColor = "#dc3545";
            document.getElementById('slovo').innerText = "Přeskočeno";
        }
        setTimeout(dalsiSlovo, 800);
    }
}

    if (z < -6.5 || z > 6.5) {
        muzeHadat = false;
        cekamNaNavrat = true;

        if (z < -6.5) { 
            // Displej směřuje k zemi (sklon dopředu) -> Uhodnuto
            uhodnuto.push(aktualniSlovo);
            document.getElementById('hra').style.backgroundColor = "#28a745";
            document.getElementById('slovo').innerText = "Správně!";
        } else { 
            // Displej směřuje ke stropu (záklon) -> Přeskočeno
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
    document.getElementById('vysledky').style.display = 'flex';

    document.getElementById('pocet-uhodnuto').innerText = uhodnuto.length;
    document.getElementById('seznam-uhodnuto').innerHTML = uhodnuto.map(s => `<li>${s}</li>`).join('');
    
    document.getElementById('pocet-preskoceno').innerText = preskoceno.length;
    document.getElementById('seznam-preskoceno').innerHTML = preskoceno.map(s => `<li>${s}</li>`).join('');
}

function zpetDoMenu() {
    document.getElementById('vysledky').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}
