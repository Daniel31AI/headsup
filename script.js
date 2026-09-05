const kategorie = {
    zeme: ["Česko", "Slovensko", "Německo", "Francie", "Itálie", "Španělsko", "Japonsko", "Austrálie", "Brazílie", "Kanada", "Egypt", "Mexiko", "Norsko", "Švédsko", "Řecko", "Thajsko", "Peru", "Indie", "Čína", "Keňa"],
    zvirata: ["Pes", "Kočka", "Slon", "Žirafa", "Tygr", "Lev", "Medvěd", "Opice", "Tučňák", "Krokodýl", "Had", "Kůň", "Kráva", "Prase", "Delfín", "Žralok", "Velryba", "Orel", "Pavouk", "Klokan"],
    povolani: ["Hasič", "Policista", "Lékař", "Učitel", "Programátor", "Kuchař", "Zpěvák", "Herec", "Právník", "Architekt", "Automechanik", "Prodavač", "Kadeřník", "Pilot", "Řidič", "Zubař", "Fotograf", "Novinář", "Zemědělec", "Truhlář"]
};

let aktualniSlova = [];
let jePripraveno = false;

function zacniHru(vyber) {
    // Zamíchání slov
    aktualniSlova = [...kategorie[vyber]].sort(() => Math.random() - 0.5);
    
    document.getElementById('menu').style.display = 'none';
    document.getElementById('hra').style.display = 'flex';
    
    // Zapnutí celé obrazovky
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(err => console.log(err));
    }

    // Vyžádání oprávnění pro gyroskop (nutné pro iPhony)
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') {
                    window.addEventListener('deviceorientation', zpracujNaklon);
                }
            })
            .catch(console.error);
    } else {
        window.addEventListener('deviceorientation', zpracujNaklon);
    }

    dalsiSlovo();
}

function dalsiSlovo() {
    if (aktualniSlova.length === 0) {
        document.getElementById('slovo').innerText = "Konec!";
        document.getElementById('hra').style.backgroundColor = "#333";
        return;
    }
    document.getElementById('slovo').innerText = aktualniSlova.pop();
    document.getElementById('hra').style.backgroundColor = "#0044cc"; // Výchozí modrá
    jePripraveno = true; // Zabrání nechtěnému přeskočení více slov
}

function zpracujNaklon(event) {
    if (!jePripraveno) return;

    // event.beta měří náklon zepředu dozadu (v telefonu na šířku event.gamma)
    let naklon = window.innerHeight > window.innerWidth ? event.beta : event.gamma;

    if (naklon > 45) { // Sklopení dolů -> Uhodnuto
        jePripraveno = false;
        document.getElementById('hra').style.backgroundColor = "#28a745"; // Zelená
        setTimeout(dalsiSlovo, 1000); // Počká 1 sekundu před dalším slovem
    } else if (naklon < -45) { // Zvednutí nahoru -> Pass/Přeskočit
        jePripraveno = false;
        document.getElementById('hra').style.backgroundColor = "#dc3545"; // Červená
        setTimeout(dalsiSlovo, 1000);
    }
}
