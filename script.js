const kategorie = {
    zeme: ["Česko", "Slovensko", "Německo", "Francie", "Itálie", "Španělsko", "Japonsko", "Austrálie", "Brazílie", "Kanada", "Egypt", "Mexiko", "Norsko", "Švédsko", "Řecko", "Thajsko", "Peru", "Indie", "Čína", "Keňa", "USA", "Velká Británie", "Rusko", "Argentina", "Kuba", "Chorvatsko", "Rakousko", "Polsko", "Maďarsko", "Švýcarsko", "Finsko", "Dánsko", "Irsko", "Portugalsko", "Turecko", "Vietnam", "Kambodža", "Kolumbie", "Chile", "Nový Zéland", "Jihoafrická republika", "Maroko", "Madagaskar", "Island", "Ukrajina", "Rumunsko", "Bulharsko", "Srbsko", "Izrael", "SAE"],
    zvirata: ["Pes", "Kočka", "Slon", "Žirafa", "Tygr", "Lev", "Medvěd", "Opice", "Tučňák", "Krokodýl", "Had", "Kůň", "Kráva", "Prase", "Delfín", "Žralok", "Velryba", "Orel", "Pavouk", "Klokan", "Gepard", "Hroch", "Nosorožec", "Zebra", "Velbloud", "Křeček", "Morče", "Papoušek", "Sova", "Netopýr", "Žába", "Ještěrka", "Chameleon", "Mravenec", "Včela", "Motýl", "Slepice", "Kachna", "Husa", "Ovce", "Koza", "Jelen", "Srnec", "Vlk", "Liška", "Zajíc", "Králík", "Kapr", "Štika", "Pštros"],
    povolani: ["Hasič", "Policista", "Lékař", "Učitel", "Programátor", "Kuchař", "Zpěvák", "Herec", "Právník", "Architekt", "Automechanik", "Prodavač", "Kadeřník", "Pilot", "Řidič", "Zubař", "Fotograf", "Novinář", "Zemědělec", "Truhlář", "Zahradník", "Instalatér", "Elektrikář", "Zedník", "Malíř", "Účetní", "Manažer", "Ředitel", "Sekretářka", "Číšník", "Barman", "Letuška", "Soudce", "Politik", "Voják", "Námořník", "Rybář", "Sportovec", "Trenér", "Masér", "Psycholog", "Veterinář", "Spisovatel", "Malíř", "Sochař", "Hudebník", "Tanečník", "Moderátor", "Režisér", "Kameraman"],
    filmy: ["Harry Potter", "Pán prstenů", "Star Wars", "Pelíšky", "Avatar", "Matrix", "Titanic", "Jurský park", "Forrest Gump", "Pulp Fiction", "Terminátor", "Vetřelec", "Kmotr", "Avengers", "Spiderman", "Batman", "Shrek", "Hledá se Nemo", "Lví král", "Doba ledová", "Piráti z Karibiku", "Gladiátor", "Samotáři", "Slunce, seno, jahody", "Vykoupení z věznice Shawshank", "Temný rytíř", "Počátek", "Klub rváčů", "Přelet nad kukaččím hnízdem", "Mlčení jehňátek", "Sedm", "Zelená míle", "Dobrý voják Švejk", "Kolja", "Vratné lahve", "Simpsonovi", "Přátelé", "Hra o trůny", "Perníkový táta", "Stranger Things", "Teorie velkého třesku", "Jak jsem poznal vaši matku", "The Office", "Narcos", "Černobyl", "Peaky Blinders", "Sherlock", "Dexter", "Dr. House", "Ztraceni"],
    sport_auta: ["Fotbal", "Hokej", "Cyklistika", "Tenis", "Basketbal", "Chůze", "Volejbal", "Atletika", "Plavání", "Lyžování", "Snowboarding", "Skoky na lyžích", "Biatlon", "Krasobruslení", "Box", "MMA", "Judo", "Karate", "Gymnastika", "Florbal", "Ragby", "Golf", "Šipky", "Formule 1", "Rallye", "Trekking", "Audi", "Toyota", "BMW", "Mercedes-Benz", "Škoda", "Volkswagen", "Ford", "Ferrari", "Porsche", "Lamborghini", "MFK Karviná", "Honda", "Nissan", "Hyundai", "Kia", "Peugeot", "Renault", "Fiat", "Volvo", "Mazda", "Subaru", "Tesla", "Forza Horizon", "Motocykl"],
    marketing_it: ["Google Analytics", "BigQuery", "SQL", "Looker Studio", "Microsoft Teams", "Asana", "Cílová skupina", "PPC", "SEO", "HTML", "CSS", "JavaScript", "Klávesnice", "Myš", "Monitor", "Počítač", "Notebook", "Server", "Cloud", "Databáze", "Algoritmus", "Aplikace", "Software", "Hardware", "Router", "Wi-Fi", "Internet", "Firewall", "Antivirus", "Hacker", "Uživatelská zkušenost (UX)", "Sociální sítě", "Instagram", "Facebook", "TikTok", "LinkedIn", "E-mail marketing", "Copywriting", "Konverzní poměr", "Návratnost investic (ROI)", "B2B", "B2C", "Startup", "Brainstorming", "KPI", "Umělá inteligence", "Virtuální realita", "Tiskárna", "Grafická karta", "Procesor"]
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
        document.documentElement.requestFullscreen().catch(err => console.log(err));
    }

    // Vyžádání přístupu k akcelerometru pro pohyb zařízení
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
    
    // Krátká pauza než povolí hádání, aby nedošlo k okamžitému přeskočení
    setTimeout(() => { muzeHadat = true; }, 500);
}

function zpracujPohyb(event) {
    if (!muzeHadat) return;

    // Sledujeme osu Z (gravitace směřující ven z displeje)
    // Pokud je telefon svisle na čele, Z je blízko 0.
    // Displej dolů k zemi = Z jde do mínusu. Displej nahoru = Z jde do plusu.
    let z = event.accelerationIncludingGravity.z;

    if (cekamNaNavrat) {
        // Mrtvá zóna - hráč musí vrátit telefon zpět na čelo (svisle)
        if (z > -3 && z < 3) {
            cekamNaNavrat = false;
            document.getElementById('hra').style.backgroundColor = "#0044cc";
            document.getElementById('slovo').innerText = aktualniSlovo;
        }
        return;
    }

    // Citlivost nastavena na +- 6.5 (gravitační zrychlení)
    if (z < -6.5 || z > 6.5) {
        muzeHadat = false;
        cekamNaNavrat = true;

        if (z < -6.5) { 
            // Sklopení dolů -> Uhodnuto
            uhodnuto.push(aktualniSlovo);
            document.getElementById('hra').style.backgroundColor = "#28a745";
            document.getElementById('slovo').innerText = "Správně!";
        } else { 
            // Zvednutí nahoru -> Přeskočeno
            preskoceno.push(aktualniSlovo);
            document.getElementById('hra').style.backgroundColor = "#dc3545";
            document.getElementById('slovo').innerText = "Přeskočeno";
        }
        setTimeout(dalsiSlovo, 800);
    }
}

function konecHry() {
    clearInterval(casovacInterval);
    window.removeEventListener('devicemotion', zpracujPohyb);
    
    if (document.exitFullscreen) {
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
