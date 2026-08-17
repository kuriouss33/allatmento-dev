// === SÖTÉT MÓD LOGIKA ===
const themeToggleBtn = document.getElementById("themeToggleBtn");
const currentTheme = localStorage.getItem("allatmento_theme");

if (currentTheme === "dark" || (!currentTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.documentElement.setAttribute("data-theme", "dark");
  if (themeToggleBtn) themeToggleBtn.innerText = "☀️";
} else {
  document.documentElement.setAttribute("data-theme", "light");
  if (themeToggleBtn) themeToggleBtn.innerText = "🌙";
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute("data-theme");
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("allatmento_theme", "light");
      themeToggleBtn.innerText = "🌙";
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("allatmento_theme", "dark");
      themeToggleBtn.innerText = "☀️";
    }
  });
}

// === ANGOL / MAGYAR NYELV LOGIKA (i18N SZÓTÁR) ===
const translations = {
  hu: {
    appTitle: "Állatmentő Portál",
    appSub: "Sürgősségi segítség & koordináció",
    btnActiveReports: "Bejelentések",
    btnNewReport: "Új bejelentést teszek",
    btnMyCases: "Saját ügyeim & Vállalásaim",
    btnInfo: "Információk & Elérhetőségek",
    backToMenu: "← Vissza a főmenübe",
    activeReportsTitle: "Bejelentések",
    activeReportsSub: "Kövesd az ügyek állapotát vagy vállalj mentést!",
    toggleMap: "Térkép",
    toggleList: "Lista nézet",
    searchPlaceholder: "🔍 Keresés fajta, megjegyzés vagy tel. alapján...",
    myCasesTitle: "📋 Saját Ügyeim",
    myCasesSub: "Az általad tett és az elvállalt bejelentések:",
    noReportsFound: "Nincs a keresésnek megfelelő bejelentés.",
    noPhone: "📞 Telefonszám nincs megadva",
    callBtn: "Hívás",
    callOrgBtn: "📞 HÍVÁS MOST",
    openMapLink: "Pontos helyszín megnyitása Google Maps-en",
    solutionLabel: "Megoldás:",
    noNotes: "Nincs megjegyzés",
    shareBtn: "Bejelentés megosztása",
    deleteBtn: "Bejelentés törlése",
    myCreatedRole: "Általad bejelentve",
    myTakenRole: "Általad elvállalva",
    noMyCases: "Még nincs saját bejelentésed vagy elvállalt ügyed.",
    statusNew: "ÚJ",
    statusInProg: "FOLYAMATBAN",
    statusSolved: "MEGOLDVA",
    statusNewBadge: "ÚJ BEJELENTÉS",
    statusInProgBadge: "FOLYAMATBAN (Úton)",
    btnTake: "Úton vagyok / Elvállalom",
    btnSolved: "Úgy látom, megoldva!",
    btnCancelTake: "Mégsem tudom vállalni",
    statusTakenByOther: "Valaki már úton van erre az ügyre",
    statusCaseClosed: "✅ Ez az ügy lezárult",
    btnReopen: "Újrakiadás / Visszaállítás",
    deleteConfirmQuestion: "Biztosan törlöd ezt a bejelentést?",
    btnYesDelete: "IGEN, TÖRÖLD",
    btnCancel: "Mégsem",
    resolveInputLabel: "Megoldás részletei:",
    resolveRequiredError: "⚠️ Kérlek, írd le röviden a megoldást a lezáráshoz!",
    btnSaveResolve: "✅ Mentés & Lezárás",
    step1Badge: "1 / 3 LÉPÉS",
    step1Title: "Állatfajta",
    step1Sub: "Milyen állatról van szó?",
    typeDog: "Kutya",
    typeCat: "Macska",
    typeWild: "Vadállat",
    typeOther: "Egyéb",
    nextBtn: "Tovább →",
    backBtn: "← Vissza",
    step2Badge: "2 / 3 LÉPÉS",
    step2Title: "Helyszín & Fotó",
    step2Sub: "Hol láttad az állatot? Csatolhatsz fotót is.",
    gpsBtn: "📍 Saját pozíció lekérése (GPS)",
    mapSelectBtn: "🗺️ Helyszín kiválasztása a térképen",
    uploadPhotoText: "Fotó készítése / Csatolása",
    removePhotoText: "❌ Fotó eltávolítása",
    searchAddressPlaceholder: "Cím keresése (pl. Budapest, Váci út)",
    locationDefaultText: "Válassz a fenti lehetőségek közül!",
    step3Badge: "3 / 3 LÉPÉS",
    step3Title: "Részletek & Küldés",
    step3Sub: "Megjegyzés és elérhetőség (opcionális)",
    notesPlaceholder: "Pl.: Félős, a bokor alatt lapul, kék nyakörv van rajta...",
    phonePlaceholder: "Telefonszámod (opcionális)",
    submitBtn: "BEJELENTÉS KÜLDÉSE",
    mapMarkerPopup: "A bejelentés helye (Húzható!)",
    resolvePlaceholder: "Pl.: A cica a Váci Állatkórházba került...",
    gpsSearching: "⏳ GPS pozíció keresése...",
    gpsNotSupported: "A böngésződ nem támogatja a GPS-t. Használd a manuális választást!",
    gpsSuccess: "Pozíció rögzítve! (Áthelyezhető)",
    gpsError: "Nem sikerült lekérni a helyzeted. Kattints a manuális választásra!",
    manualMapHint: "Kattints a térképre vagy húzd a gombostűt a pontos helyszínre!",
    locationSaved: "Új helyszín rögzítve!",
    searchAddressError: "⚠️ Kérlek, írj be egy címet a kereséshez!",
    searchSearching: "⏳ Keresés folyamatban...",
    searchFound: "Helyszín megtalálva: ",
    searchNotFound: "Nem találtunk ilyen címet. Próbáld meg máshogy írni!",
    searchNetworkError: "Hiba történt a keresés során. Ellenőrizd az internetkapcsolatot!",
    uploadSuccess: "Fotó sikeresen csatolva!",
    step4Title: "Információk & Útmutatók",
    step4Sub: "Szervezetek elérhetőségei és teendők vészhelyzet esetén:",
    toggleOrganizations: "Szervezetek",
    toggleGuide: "Elsősegély kisokos",
    searchOrgPlaceholder: "Keresés név, város vagy kulcsszó alapján...",
    catAll: "Minden kategória",
    catShelter: "Menhelyek & Egyesületek",
    catVet: "Állatkórházak & Rendelők",
    catAuth: "Hatóságok & Polgárőrség",
    catWild: "Vadmentés",
    ctyAll: "Összes megye / régió",
    ctyPest: "Pest megye",
    noOrgFound: "❌ Nincs a keresésnek megfelelő szervezet.",
    modalHint: "Görgess vagy húzd az ujjad a zoomoláshoz",
    g1Title: "Madárfióka (Csupasz vagy tollas?)",
    g1Body: `<p><b>1. Csupasz / Pehelytollas fióka:</b> Még nem tudja elhagyni a fészket. Ha megtalálod a fészket, <b>tedd vissza!</b> (Tévhit: a madarak nem hagyják el a fiókát az emberi szag miatt). Ha a fészek megsemmisült, tegyed egy kis bélelt dobozba és rögzítsd a fára.</p><p><b>2. Tollas fióka (Fészekhagyó):</b> A rigók, cinkék, baglyok fiókái természetes módon elhagyják a fészket, mielőtt röpképesek lennének. A szüleik a földön is etetik őket! <b>Ne vidd el!</b> Csak akkor nyúlj hozzá, ha közvetlen veszélyben van (úttest, macska) – ekkor tedd fel a legközelebbi bokor/fa ágára.</p><p><b>⚠️ Szigorúan TILOS:</b> Fecskendőből vizet vagy tejet nyomni a csőrébe! A légcsőnyílásuk a nyelvük mögött van, így pillanatok alatt megfulladnak tőle.</p>`,
    g2Title: "Felnőtt, sérült madár",
    g2Body: `<p><b>1. Ablaknak repült / Sokkos madár:</b> Gyakran csak agyrázkódása van. Dobj rá egy törölközőt, óvatosan tedd egy zárt, szellőzőnyílásokkal ellátott <b>kartondobozba</b>, és tedd csendes, sötét helyre. 1-2 óra múlva nyisd ki a dobozt a szabadban – ha magához tért, el fog repülni.</p><p><b>2. Lógó szárny, vérzés, törés:</b> Helyezd sötét kartondobozba (a sötétség csökkenti a sokkot). A doboz aljára tegyél papírtörlőt.</p><p><b>⚠️ Fontos:</b> Ne adj neki ételt és vizet is maximum egy pici kupakban vagy tálkában tegyél be mellé! Hívd a legközelebbi Nemzeti Parkot vagy Mályi/Rákosmenti Madármentőket.</p>`,
    g3Title: "Sérült vagy elütött macska",
    g3Body: `<p><b>1. Védekezés:</b> A fájdalmat érző macska pánikba esik, súlyos harapott/karmolt sebet okozhat! Használj vastag pokrócot vagy munkavédelmi kesztyűt.</p><p><b>2. "Burrito" módszer:</b> Terítsd rá a pokrócot, és szorosan tekerd be a testét és a lábait, így biztonságosan fel tudod emelni anélkül, hogy megkarcolna vagy kárt tenne magában.</p><p><b>3. Szállítás:</b> Tedd zárt hordozóba vagy dobozba. Ha sokkos állapotban van (kihűlés fenyegeti), tegyél mellé törölközőbe tekert melegvizes palackot.</p>`,
    g4Title: "Talált vagy elütött kutya",
    g4Body: `<p><b>1. Megközelítés:</b> Lassan, guggolva, oldalról közelíts! Ne nézz közvetlenül a szemébe, és beszélj hozzá halkan. Ne tegyél hirtelen mozdulatot.</p><p><b>2. Sérült kutya mozgatása:</b> A fájdalom miatt a legszelídebb kutya is kaphat maga felé. Ha emelned kell, pléd segítségével hordágyként mozgassátok. Ha szükséges, pórázzal vagy gézzel óvatosan kösd át a pofáját a szállítás idejére.</p><p><b>3. Ingyenes chipolvasás:</b> A legtöbb <b>MOL benzinkúton</b> és minden állatorvosnál díjmentesen leolvassák a mikrochipet a gazda értesítéséhez.</p>`,
    g5Title: "Sünök & Denevérek",
    g5Body: `<p><b>🦔 Sün nappal a szabadban:</b> A sün éjszakai állat. Ha nappal nyílt terepen kóborol, billeg vagy elterül, az szinte biztosan betegséget vagy sérülést jelez. Kesztyűvel tedd magas falu dobozba.</p><p><b>🦔 Kicsi sün télen:</b> Késő ősszel/télen a 400-500 gramm alatti sünök nem tudnak áttelelni, segítségre van szükségük!</p><p><b>🦇 Denevér a lakásban/földön:</b> Védett állat! <b>Soha ne nyúlj hozzá puszta kézzel!</b> Teríts rá egy rongyot, tedd dobozba és értesítsd a helyi Nemzeti Park Igazgatóságot.</p>`,
    g6Title: "Nagyvadak (Őz, Róka, Vaddisznó)",
    g6Body: `<p><b>1. Saját biztonság:</b> Sérült őzhöz, vaddisznóhoz ne menj közel! A patájukkal és agyarukkal életveszélyes sérülést okozhatnak.</p><p><b>2. Közúti baleset esetén:</b> Kapcsold be a vészvillogót, tegyed ki az elakadásjelző háromszöget. Hívd a <b>112-es segélyhívót</b> – ők értesítik a területileg illetékes vadásztársaságot.</p><p><b>3. Autópályán:</b> Az autópálya-kezelőt vagy a 112-t értesítsd, ne szállj ki az autóból a leállósávban sem védőfelszerelés nélkül!</p>`
  },
  en: {
    appTitle: "Animal Rescue Portal",
    appSub: "Emergency Assistance & Coordination",
    btnActiveReports: "Reports",
    btnNewReport: "Submit New Report",
    btnMyCases: "My Cases & Commitments",
    btnInfo: "Information & Contacts",
    backToMenu: "← Back to Main Menu",
    activeReportsTitle: "Reports",
    activeReportsSub: "Track report statuses or volunteer for a rescue!",
    toggleMap: "Map",
    toggleList: "List View",
    searchPlaceholder: "Search by species, notes, or phone...",
    myCasesTitle: "My Cases",
    myCasesSub: "Reports created or undertaken by you:",
    noReportsFound: "No reports matching your search.",
    noPhone: "Phone number not provided",
    callBtn: "📞 Call",
    callOrgBtn: "📞 CALL NOW",
    openMapLink: "Open exact location on Google Maps",
    solutionLabel: "Resolution:",
    noNotes: "No additional notes",
    shareBtn: "Share Report",
    deleteBtn: "Delete Report",
    myCreatedRole: "Reported by you",
    myTakenRole: "Undertaken by you",
    noMyCases: "You have no created or undertaken reports yet.",
    statusNew: "NEW",
    statusInProg: "IN PROGRESS",
    statusSolved: "RESOLVED",
    statusNewBadge: "NEW REPORT",
    statusInProgBadge: "IN PROGRESS (On the way)",
    btnTake: "On my way / Volunteer",
    btnSolved: "✅ I consider it resolved!",
    btnCancelTake: "Cancel my volunteer status",
    statusTakenByOther: "Someone is already on their way",
    resolvePlaceholder: "E.g., The cat was brought to the vet...",
    statusCaseClosed: "✅ This case is closed",
    btnReopen: "Reopen / Reset Case",
    deleteConfirmQuestion: "Are you sure you want to delete this report?",
    btnYesDelete: "YES, DELETE",
    btnCancel: "Cancel",
    resolveInputLabel: "Resolution details:",
    resolveRequiredError: "⚠️ Please provide a brief explanation to resolve this report!",
    btnSaveResolve: "✅ Save & Close",
    step1Badge: "STEP 1 / 3",
    step1Title: "Animal Species",
    step1Sub: "What kind of animal is it?",
    typeDog: "Dog",
    typeCat: "Cat",
    typeWild: "Wild Animal",
    typeOther: "Other",
    nextBtn: "Next →",
    backBtn: "← Back",
    step2Badge: "STEP 2 / 3",
    step2Title: "Location & Photo",
    step2Sub: "Where did you see the animal? You can attach a photo.",
    gpsBtn: "Get My Current Location (GPS)",
    mapMarkerPopup: "Report location (Draggable!)",
    mapSelectBtn: "Pick Location on Map",
    uploadPhotoText: "Take Photo / Attach",
    removePhotoText: "Remove Photo",
    searchAddressPlaceholder: "Search address (e.g. Budapest, Váci út)",
    locationDefaultText: "Choose from the options above!",
    step3Badge: "STEP 3 / 3",
    step3Title: "Details & Submit",
    step3Sub: "Notes and contact info (optional)",
    notesPlaceholder: "E.g., Scared, hiding under bushes, blue collar...",
    phonePlaceholder: "Your phone number (optional)",
    submitBtn: "SUBMIT REPORT",
    gpsSearching: "⏳ Searching GPS location...",
    gpsNotSupported: "GPS is not supported by your browser. Use manual selection!",
    gpsSuccess: "Location saved! (Draggable)",
    gpsError: "Could not retrieve GPS location. Please select manually!",
    manualMapHint: "Click on the map or drag the pin to the exact location!",
    locationSaved: "New location saved!",
    searchAddressError: "⚠️ Please enter an address to search!",
    searchSearching: "⏳ Searching...",
    searchFound: "Location found: ",
    searchNotFound: "Address not found. Try typing it differently!",
    searchNetworkError: "Error during search. Check your internet connection!",
    uploadSuccess: "Photo attached successfully!",
    step4Title: "Info & Guides",
    step4Sub: "Contacts for rescue organizations and emergency guides:",
    toggleOrganizations: "Organizations",
    toggleGuide: "First Aid Guide",
    searchOrgPlaceholder: "Search by name, city, or keyword...",
    catAll: "All Categories",
    catShelter: "Shelters & Associations",
    catVet: "Hospitals & Vets",
    catAuth: "Authorities & Police",
    catWild: "Wildlife Rescue",
    ctyAll: "All counties / regions",
    ctyPest: "Pest county",
    noOrgFound: "❌ No organizations matching your search.",
    modalHint: "Pinch or scroll to zoom",
    g1Title: "Bird Chick (Fledged or Unfledged?)",
    g1Body: `<p><b>1. Naked / Downy Chick:</b> Cannot leave the nest yet. If you find the nest, <b>put it back!</b> (Myth: birds do not abandon chicks due to human scent). If destroyed, put it in a lined box and attach to the tree.</p><p><b>2. Fledged Chick:</b> Fledglings naturally leave the nest before being able to fly well. Parents feed them on the ground! <b>Do not remove them!</b> Only intervene if in immediate danger (road, cat) – place onto a nearby branch.</p><p><b>⚠️ Strictly FORBIDDEN:</b> Squirt water or milk into the beak! Their airway is behind the tongue; they can suffocate instantly.</p>`,
    g2Title: "Adult, Injured Bird",
    g2Body: `<p><b>1. Window Collision / Shocked:</b> Often just a concussion. Throw a towel over it, place gently in a closed, ventilated <b>cardboard box</b> in a quiet, dark spot. Open outside after 1-2 hours – if recovered, it will fly away.</p><p><b>2. Drooping Wing, Bleeding, Fracture:</b> Keep in a dark box to reduce shock. Line the bottom with paper towels.</p><p><b>⚠️ Important:</b> Do not give food/water except a tiny cap. Call a local Wildlife Rescue center!</p>`,
    g3Title: "Injured or Hit Cat",
    g3Body: `<p><b>1. Protection:</b> A cat in pain will panic and can inflict severe bites/scratches! Use a thick blanket or heavy gloves.</p><p><b>2. 'Burrito' Method:</b> Wrap firmly in a blanket to immobilize legs so you can safely lift it without injury to either party.</p><p><b>3. Transport:</b> Place in a secure carrier or box. Keep warm with a wrapped hot water bottle if in shock.</p>`,
    g4Title: "Found or Injured Dog",
    g4Body: `<p><b>1. Approach:</b> Move slowly, crouch, approach from the side. Avoid direct eye contact and speak softly.</p><p><b>2. Handling Injured Dogs:</b> Even gentle dogs may bite when in severe pain. Move using a blanket as a stretcher. Muzzle gently with gauze if necessary.</p><p><b>3. Free Microchip Scan:</b> Available at most <b>MOL gas stations</b> and all veterinary clinics to contact the owner.</p>`,
    g5Title: "Hedgehogs & Bats",
    g5Body: `<p><b>🦔 Hedgehog in daylight:</b> Nocturnal animals. Roaming in daylight indicates illness/injury. Put in a high-walled box using gloves.</p><p><b>🦔 Small Hedgehogs in winter:</b> Under 400-500g in late autumn cannot survive hibernation without assistance.</p><p><b>🦇 Bat indoors/ground:</b> Protected species! <b>Never touch with bare hands!</b> Cover with a cloth, box it, and call local Park Authorities.</p>`,
    g6Title: "Large Wildlife (Deer, Fox, Boar)",
    g6Body: `<p><b>1. Personal Safety:</b> Keep distance from injured deer or wild boars! Hooves and tusks cause severe injury.</p><p><b>2. Road Accidents:</b> Turn hazard lights on, set up triangle. Call <b>112 Emergency</b> – they alert local hunting associations.</p><p><b>3. Highways:</b> Call 112 or highway operators; stay safe inside your vehicle.</p>`
  }
};

let currentLang = localStorage.getItem("allatmento_lang") || "hu";

function updateLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("allatmento_lang", lang);
  
  const langBtn = document.getElementById("langToggleBtn");
  if (langBtn) langBtn.innerText = lang === "hu" ? "🇬🇧 EN" : "🇭🇺 HU";

  const t = translations[lang];

  const map = {
    "appTitleText": t.appTitle, "appSubText": t.appSub, "btnActiveReportsText": t.btnActiveReports,
    "btnNewReportText": t.btnNewReport, "btnMyCasesText": t.btnMyCases, "btnInfoText": t.btnInfo,
    "activeReportsTitle": t.activeReportsTitle, "activeReportsSub": t.activeReportsSub,
    "toggleMapBtn": t.toggleMap, "toggleListBtn": t.toggleList, "myCasesTitle": t.myCasesTitle,
    "myCasesSub": t.myCasesSub, "step1Badge": t.step1Badge, "step1Title": t.step1Title,
    "step1Sub": t.step1Sub, "typeDog": t.typeDog, "typeCat": t.typeCat, "typeWild": t.typeWild,
    "typeOther": t.typeOther, "tovabb1": t.nextBtn, "step2Badge": t.step2Badge, "step2Title": t.step2Title,
    "step2Sub": t.step2Sub, "gpsButton": t.gpsBtn, "manualLocationBtn": t.mapSelectBtn,
    "eredmeny": t.locationDefaultText, "uploadLabelText": t.uploadPhotoText, "removePhotoBtn": t.removePhotoText,
    "vissza1": t.backBtn, "tovabb2": t.nextBtn, "step3Badge": t.step3Badge, "step3Title": t.step3Title,
    "step3Sub": t.step3Sub, "vissza2": t.backBtn, "kuldes": t.submitBtn, "step4Title": t.step4Title,
    "step4Sub": t.step4Sub, "toggleSzervezetekBtn": t.toggleOrganizations, "toggleUtmutatoBtn": t.toggleGuide,
    "optCatAll": t.catAll, "optCatShelter": t.catShelter, "optCatVet": t.catVet, "optCatAuth": t.catAuth,
    "optCatWild": t.catWild, "optCtyAll": t.ctyAll, "optCtyPest": t.ctyPest, "modalHintText": t.modalHint,
    "g1Title": t.g1Title, "g2Title": t.g2Title, "g3Title": t.g3Title, "g4Title": t.g4Title,
    "g5Title": t.g5Title, "g6Title": t.g6Title
  };

  for (const [id, text] of Object.entries(map)) {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
  }

  const htmlMap = {
    "g1Body": t.g1Body, "g2Body": t.g2Body, "g3Body": t.g3Body,
    "g4Body": t.g4Body, "g5Body": t.g5Body, "g6Body": t.g6Body
  };

  for (const [id, htmlText] of Object.entries(htmlMap)) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = htmlText;
  }

  document.querySelectorAll(".backToMenuBtn").forEach(btn => {
    btn.innerText = t.backToMenu;
  });

  const bejelentesKereso = document.getElementById("bejelentesKeresoInput");
  if (bejelentesKereso) bejelentesKereso.placeholder = t.searchPlaceholder;

  const szervezetKereso = document.getElementById("szervezetKeresoInput");
  if (szervezetKereso) szervezetKereso.placeholder = t.searchOrgPlaceholder;

  const mapSearchInput = document.getElementById("mapSearchInput");
  if (mapSearchInput) mapSearchInput.placeholder = t.searchAddressPlaceholder;

  const megjegyzes = document.getElementById("megjegyzes");
  if (megjegyzes) megjegyzes.placeholder = t.notesPlaceholder;

  const telefon = document.getElementById("telefon");
  if (telefon) telefon.placeholder = t.phonePlaceholder;

  if (typeof szurEsKirajzolBejelentesek === "function") szurEsKirajzolBejelentesek();
  if (typeof szurEsKirajzolSzervezetek === "function") szurEsKirajzolSzervezetek();
  if (typeof betoltSajatUgyek === "function") betoltSajatUgyek();

  if (typeof userMarker !== "undefined" && userMarker) {
    userMarker.setPopupContent(t.mapMarkerPopup);
  }
}

const langToggleBtn = document.getElementById("langToggleBtn");
if (langToggleBtn) {
  langToggleBtn.addEventListener("click", () => {
    const newLang = currentLang === "hu" ? "en" : "hu";
    updateLanguage(newLang);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateLanguage(currentLang);
});

function escapeHtml(text) {
  if (!text) return "";
  return String(text)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// === FIREBASE INICIALIZÁLÁS ===
const firebaseConfig = {
  apiKey: "AIzaSyD6cwQi2yitYYRNAlHjIQ9yLrJBAcexJmU",
  authDomain: "allatmento-app.firebaseapp.com",
  projectId: "allatmento-app",
  storageBucket: "allatmento-app.firebasestorage.app",
  messagingSenderId: "1023641672984",
  appId: "1:1023641672984:web:a6b3ea4899b3c49c0bd26d"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const imgbbApiKey = "5274f0761f88a38f610c030a7de51e0f"; 

let currentUserId = localStorage.getItem("allatmento_user_id");
if (!currentUserId) {
  currentUserId = "user_" + Math.random().toString(36).substr(2, 9);
  localStorage.setItem("allatmento_user_id", currentUserId);
}

const step0 = document.getElementById("step0");
const stepMap = document.getElementById("stepMap");
const stepSajat = document.getElementById("stepSajat");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");
const stepAdmin = document.getElementById("stepAdmin");

const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModalBtn = document.getElementById("closeModalBtn");
const fotoInput = document.getElementById("fotoInput");
const imagePreviewBox = document.getElementById("imagePreviewBox");
const previewImage = document.getElementById("previewImage");
const removePhotoBtn = document.getElementById("removePhotoBtn");
const uploadLabelText = document.getElementById("uploadLabelText");

const bejelentesKeresoInput = document.getElementById("bejelentesKeresoInput");
const szervezetKeresoInput = document.getElementById("szervezetKeresoInput");
const megyeValaszto = document.getElementById("megyeValaszto");
const szervezetekLista = document.getElementById("szervezetekLista");

const toggleMapBtn = document.getElementById("toggleMapBtn");
const toggleListBtn = document.getElementById("toggleListBtn");
const mainMapDiv = document.getElementById("mainMap");
const bejelentesekListaDiv = document.getElementById("bejelentesekLista");

let panzoomInstance = null;
let pontosLat = null;
let pontosLon = null;
let aktivReszletDocId = null;
let kommentekUnsubscribe = null;
let userMap;
let userMarker; 
let activeMarkers = {}; 
let osszesBejelentesMemoria = [];
let osszesSzervezetMemoria = [];

const mainMap = L.map('mainMap').setView([47.1625, 19.5033], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(mainMap);

db.collection("bejelentesek").onSnapshot((snapshot) => {
  const activeDocIds = snapshot.docs.map(doc => doc.id);
  const t = translations[currentLang];

  Object.keys(activeMarkers).forEach(id => {
    if (!activeDocIds.includes(id)) {
      mainMap.removeLayer(activeMarkers[id]);
      delete activeMarkers[id];
    }
  });

  osszesBejelentesMemoria = [];

  snapshot.docs.forEach((doc) => {
    const adat = doc.data();
    const id = doc.id;
    const statusz = adat.statusz || adat.status || "uj";
    const tisztitottMegjegyzes = escapeHtml(adat.megjegyzes || adat.helyszinLeiras || "");

    osszesBejelentesMemoria.push({ id: id, adat: adat });

    const reportLat = adat.lat;
    const reportLon = adat.lon || adat.lng;

    if (reportLat && reportLon) {
      if (statusz !== "megoldva") {
        const kepHtml = (adat.fotoUrl || adat.kepUrl)
          ? `<br><img src="${adat.fotoUrl || adat.kepUrl}" class="popup-img" onclick="openImageModal('${adat.fotoUrl || adat.kepUrl}')" alt="Állat fotója">` 
          : '';

        const statuszText = statusz === "uj" || statusz === "fuggoben" ? t.statusNewBadge : t.statusInProgBadge;

        const telefonSorHtml = adat.telefon || adat.bejelentoTelefon 
          ? `📞 ${adat.telefon || adat.bejelentoTelefon}` 
          : t.noPhone;
        
        const popupContent = `
          <strong style="font-size:14px;">${adat.fajta || adat.allatFajta}</strong><br>
          <span class="status-badge ${statusz}" style="display:inline-block; margin: 4px 0;">${statuszText}</span><br>
          <span style="color:#64748b; font-size:12px;">${tisztitottMegjegyzes || t.noNotes}</span><br>
          <span style="font-size:12px;">${telefonSorHtml}</span>
          ${kepHtml}
          ${getStatusButtonHtml(id, statusz, adat.vallaloId || adat.rescuerUid)}
        `;

        if (activeMarkers[id]) {
          activeMarkers[id].setPopupContent(popupContent);
        } else {
          const marker = L.marker([reportLat, reportLon]).addTo(mainMap).bindPopup(popupContent);
          activeMarkers[id] = marker;
        }
      } else {
        if (activeMarkers[id]) {
          mainMap.removeLayer(activeMarkers[id]);
          delete activeMarkers[id];
        }
      }
    }
  });

  szurEsKirajzolBejelentesek();
});

function szurEsKirajzolBejelentesek() {
  const bejelentesekLista = document.getElementById("bejelentesekLista");
  if (!bejelentesekLista) return;

  const t = translations[currentLang];
  const keresoSzo = bejelentesKeresoInput ? bejelentesKeresoInput.value.toLowerCase().trim() : "";
  const bejelentesMegyeValaszto = document.getElementById("bejelentesMegyeValaszto");
  const kivalasztottMegye = bejelentesMegyeValaszto ? bejelentesMegyeValaszto.value : "Összes";

  bejelentesekLista.innerHTML = "";

  const szurtBejelentesek = osszesBejelentesMemoria.filter((elem) => {
    const fajta = (elem.adat.fajta || elem.adat.allatFajta || "").toLowerCase();
    const megjegyzes = (elem.adat.megjegyzes || elem.adat.helyszinLeiras || "").toLowerCase();
    const telefon = (elem.adat.telefon || elem.adat.bejelentoTelefon || "").toLowerCase();
    const lezaras = (elem.adat.lezarasMegjegyzes || "").toLowerCase();
    const megye = elem.adat.megye || "";

    const matcheliKeresest = fajta.includes(keresoSzo) || megjegyzes.includes(keresoSzo) || telefon.includes(keresoSzo) || lezaras.includes(keresoSzo);
    
    let matcheliMegyet = (kivalasztottMegye === "Összes");
    if (!matcheliMegyet) {
      matcheliMegyet = megye.toLowerCase().includes(kivalasztottMegye.toLowerCase());
    }

    return matcheliKeresest && matcheliMegyet;
  });

  if (szurtBejelentesek.length === 0) {
    bejelentesekLista.innerHTML = `<p style="color: #64748b; text-align: center; margin-top: 15px;">${t.noReportsFound}</p>`;
    return;
  }

  szurtBejelentesek.forEach((elem) => {
    bejelentesekLista.innerHTML += createReportCardHtml(elem.id, elem.adat);
  });
}

const bejelentesMegyeValaszto = document.getElementById("bejelentesMegyeValaszto");
if (bejelentesMegyeValaszto) {
  bejelentesMegyeValaszto.addEventListener("change", szurEsKirajzolBejelentesek);
}

if (bejelentesKeresoInput) {
  bejelentesKeresoInput.addEventListener("input", szurEsKirajzolBejelentesek);
}

function createReportCardHtml(id, adat) {
  const t = translations[currentLang];
  const statusz = adat.statusz || adat.status || "uj";
  const statuszClass = (statusz === "fuggoben") ? "uj" : statusz; // uj, folyamatban vagy megoldva
  
  const statuszLabel = (statusz === "uj" || statusz === "fuggoben") 
    ? t.statusNew 
    : (statusz === "folyamatban" ? t.statusInProg : t.statusSolved);

  const kepUrl = adat.fotoUrl || adat.kepUrl;
  const kepHtml = kepUrl ? `<img src="${kepUrl}" class="popup-img" onclick="openImageModal('${kepUrl}', event)" style="margin-bottom:8px;">` : '';

  const tisztitottFajta = escapeHtml(adat.fajta || adat.allatFajta || "Állat");
  const tisztitottMegjegyzes = escapeHtml(adat.megjegyzes || adat.helyszinLeiras || "");
  const tisztitottTelefon = escapeHtml(adat.telefon || adat.bejelentoTelefon || "");
  const tisztitottLezaras = escapeHtml(adat.lezarasMegjegyzes || "");

  let idopontSzoveg = "";
  if (adat.idopont && adat.idopont.toDate) {
    const d = adat.idopont.toDate();
    const dateLoc = currentLang === "en" ? "en-US" : "hu-HU";
    idopontSzoveg = `🕒 ${d.toLocaleDateString(dateLoc)} ${d.toLocaleTimeString(dateLoc, {hour: '2-digit', minute:'2-digit'})}`;
  } else if (adat.createdAt) {
    const d = new Date(adat.createdAt);
    const dateLoc = currentLang === "en" ? "en-US" : "hu-HU";
    idopontSzoveg = `🕒 ${d.toLocaleDateString(dateLoc)} ${d.toLocaleTimeString(dateLoc, {hour: '2-digit', minute:'2-digit'})}`;
  }

  const hivasGombHtml = tisztitottTelefon 
    ? `<a href="tel:${tisztitottTelefon}" onclick="event.stopPropagation();" class="report-action-btn" style="background:#10b981; color:white; text-decoration:none; display:inline-flex; align-items:center; justify-content:center; gap:6px; margin-top:8px; font-weight:bold;">${t.callBtn} (${tisztitottTelefon})</a>`
    : `<p style="font-size:12px; color:#64748b; margin:4px 0;">${t.noPhone}</p>`;

  let terkepLinkSzoveg = t.openMapLink;
  if (adat.cim) {
    terkepLinkSzoveg = `📍 ${escapeHtml(adat.cim)}`;
  } else if (adat.megye && adat.megye !== "Ismeretlen") {
    terkepLinkSzoveg = `📍 ${escapeHtml(adat.megye)}`;
  }

  const reportLat = adat.lat;
  const reportLon = adat.lon || adat.lng;

  const terKepGombHtml = (reportLat && reportLon)
    ? `<a href="https://www.google.com/maps?q=${reportLat},${reportLon}" target="_blank" onclick="event.stopPropagation();" style="font-size:12px; color:#2563eb; text-decoration:underline; display:inline-block; width: fit-content; margin-top:4px; font-weight: 500;">${terkepLinkSzoveg}</a>`
    : '';

  let lezarasHtml = '';
  if (tisztitottLezaras) {
    const lezarasFoto = adat.lezarasFotoUrl 
      ? `<img src="${adat.lezarasFotoUrl}" class="popup-img" onclick="openImageModal('${adat.lezarasFotoUrl}', event)" style="margin-top:6px; max-height:140px; width:100%; object-fit:cover; border-radius:6px; cursor:pointer;" alt="Lezárási fotó">`
      : '';

    lezarasHtml = `
      <div style="color:#047857; background:#ecfdf5; padding:8px; border-radius:8px; border:1px solid #a7f3d0; font-size:12px; margin-top:6px; word-break:break-word;">
        <b>${t.solutionLabel}</b> ${tisztitottLezaras}
        ${lezarasFoto}
      </div>
    `;
  }

  const isCreator = (adat.createrId === currentUserId) || (firebase.auth().currentUser && adat.createrId === firebase.auth().currentUser.uid);
  const torlesGombHtml = isCreator 
    ? `
      <div class="delete-box-container" style="margin-top:8px;">
        <button type="button" class="report-action-btn btn-delete" onclick="showDeleteConfirm('${id}', event)">${t.deleteBtn}</button>
      </div>`
    : '';

  return `
    <div class="report-card-wrapper" data-report-id="${id}">
      <div class="report-card card-${statuszClass}" onclick="megnyitReszletek('${id}')" style="cursor: pointer; transition: all 0.2s ease;">
        <div class="report-header">
          <span class="report-title">${tisztitottFajta}</span>
          <span class="status-badge ${statusz}">${statuszLabel}</span>
        </div>
        <div class="report-body">
          ${kepHtml}
          <p style="margin:4px 0;">📝 ${tisztitottMegjegyzes || t.noNotes}</p>
          ${terKepGombHtml}
          ${idopontSzoveg ? `<p style="font-size:11px; color:#94a3b8; margin-top:4px;">${idopontSzoveg}</p>` : ''}
          ${hivasGombHtml}
          ${lezarasHtml}
        </div>
        ${getStatusButtonHtml(id, statusz, adat.vallaloId || adat.rescuerUid)}
        <button type="button" class="report-action-btn btn-outline" style="margin-top:6px; color:#1877f2; border-color:#cbd5e1; font-weight:bold;" onclick="shareReportById('${id}', event)">
          ${t.shareBtn}
        </button>
        ${torlesGombHtml}
      </div>
    </div>
  `;
}

window.shareReportById = function(docId, event) {
  if (event) { event.preventDefault(); event.stopPropagation(); }
  
  const elem = osszesBejelentesMemoria.find(item => item.id === docId);
  if (!elem) return;

  const adat = elem.adat;
  const rLat = adat.lat;
  const rLon = adat.lon || adat.lng;
  let terKepLink = (rLat && rLon) ? `https://www.google.com/maps?q=${rLat},${rLon}` : 'Nincs megadva';
  
  const megosztandoSzoveg = `🚨 ÁLLATMENTÉS BEJELENTÉS!\n\n🐾 Állat: ${adat.fajta || adat.allatFajta || 'Állat'}\n📝 Leírás: ${adat.megjegyzes || adat.helyszinLeiras || 'Nincs külön megjegyzés'}\n📞 Kapcsolat: ${adat.telefon || adat.bejelentoTelefon || 'Nincs megadva'}\n📍 Pontos helyszín (Térkép): ${terKepLink}`;

  if (navigator.share) {
    navigator.share({
      title: '🚨 Állatmentő Bejelentés',
      text: megosztandoSzoveg
    }).catch(() => console.log("Megosztás megszakítva"));
  } else {
    navigator.clipboard.writeText(megosztandoSzoveg);
    alert("📋 A bejelentés adatai és a Google Maps helyszín linkje másolva a vágólapra!");
    window.open('https://www.facebook.com/', '_blank');
  }
};

// Védett backend API hívó segédfüggvény
async function updateReportStatusOnServer(reportId, newStatus) {
  const user = firebase.auth().currentUser;
  if (!user) return false;

  try {
    const token = await user.getIdToken();
    const response = await fetch(`${BACKEND_URL}/reports/${reportId}/status`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ status: newStatus })
    });

    const result = await response.json();
    return result.success;
  } catch (error) {
    console.warn('Backend státusz hívás hiba, fallback Firestore:', error);
    return false;
  }
}

function getStatusButtonHtml(id, statusz, vallaloId) {
  const t = translations[currentLang];
  const user = firebase.auth().currentUser;
  const activeUid = user ? user.uid : null;
  const isVerifiedRescuer = currentUserProfile && 
    (currentUserProfile.role === 'verified_rescuer' || currentUserProfile.role === 'super_admin');

  if (statusz === "uj" || statusz === "fuggoben") {
    if (isVerifiedRescuer) {
      return `
        <div class="status-action-box" data-action-id="${id}">
          <button type="button" class="report-action-btn btn-action-take" onclick="changeStatus('${id}', 'folyamatban', event)">🐾 ${t.btnTake}</button>
        </div>`;
    }
    return `
      <p style="font-size:11px; color:#64748b; margin-top:6px; text-align:center;">
        🛡️ <i>Csak hitelesített mentők vállalhatják el</i>
      </p>`;
  } else if (statusz === "folyamatban") {
    if (isVerifiedRescuer && (vallaloId === activeUid || currentUserProfile.role === 'super_admin')) {
      return `
        <div class="status-action-box" data-action-id="${id}">
          <button type="button" class="report-action-btn btn-action-solve" onclick="showResolveInput('${id}', event)">${t.btnSolved}</button>
          <button type="button" class="report-action-btn btn-outline" style="margin-top:5px; color:#ef4444;" onclick="changeStatus('${id}', 'uj', event)">${t.btnCancelTake}</button>
        </div>`;
    } else {
      return `<p style="font-size:11px; color:#d97706; margin-top:6px; text-align:center;">${t.statusTakenByOther}</p>`;
    }
  } else {
    return `
      <p style="font-size:11px; color:#10b981; margin-top:6px; text-align:center;">${t.statusCaseClosed}</p>
      ${isVerifiedRescuer ? `<button type="button" class="report-action-btn btn-outline" style="font-size:11px; padding:4px;" onclick="changeStatus('${id}', 'uj', event)">${t.btnReopen}</button>` : ''}
    `;
  }
}

// Megoldás űrlap megjelenítése szövegmezővel ÉS lezárási fotó csatolóval
window.showResolveInput = function(docId, event) {
  if (event) { event.preventDefault(); event.stopPropagation(); }
  const t = translations[currentLang];
  const btn = event.target;
  const box = btn.closest('.status-action-box');

  if (box) {
    box.innerHTML = `
      <div class="resolve-input-box" onclick="event.stopPropagation();" style="background: var(--bg-card, #f8fafc); padding: 12px; border-radius: 10px; border: 1px solid #cbd5e1; margin-top: 8px; text-align: left;">
        <label class="resolve-input-label" style="font-size: 12px; font-weight: bold; color: #334155; display: block; margin-bottom: 4px;">
          ${t.resolveInputLabel} <span style="color: #ef4444;">*</span>
        </label>
        <textarea id="resolveInput_${docId}" onclick="event.stopPropagation();" placeholder="${t.resolvePlaceholder}" class="resolve-textarea" style="width: 100%; min-height: 65px; padding: 8px; border-radius: 6px; border: 1px solid #cbd5e1; font-size: 12px; box-sizing: border-box; resize: vertical;"></textarea>
        
        <div style="margin: 10px 0;">
          <input type="file" id="resolvePhotoInput_${docId}" accept="image/*" style="display: none;" onchange="handleResolvePhotoSelected('${docId}')">
          <label for="resolvePhotoInput_${docId}" id="resolvePhotoLabel_${docId}" style="display: flex; align-items: center; justify-content: center; gap: 6px; padding: 8px 12px; background: #e2e8f0; color: #334155; border-radius: 6px; font-size: 12px; font-weight: bold; cursor: pointer; border: 1px dashed #94a3b8;">
            📷 Lezárási fotó kiválasztása
          </label>
        </div>

        <div id="resolveError_${docId}" style="display: none; color: #ef4444; font-size: 11px; font-weight: bold; margin-bottom: 8px;"></div>
        
        <div style="display: flex; gap: 8px;">
          <button type="button" id="resolveSubmitBtn_${docId}" class="report-action-btn btn-action-solve" style="padding: 9px 12px; font-size: 12px; margin: 0; flex: 2; width: auto; white-space: nowrap;" onclick="submitResolve('${docId}', event)">${t.btnSaveResolve}</button>
          <button type="button" class="report-action-btn btn-outline" style="padding: 9px 12px; font-size: 12px; margin: 0; flex: 1; width: auto; white-space: nowrap;" onclick="cancelResolve('${docId}', event)">${t.btnCancel}</button>
        </div>
      </div>
    `;
  }
};

// Visszajelzés fotó kiválasztásakor
window.handleResolvePhotoSelected = function(docId) {
  const fileInput = document.getElementById(`resolvePhotoInput_${docId}`);
  const label = document.getElementById(`resolvePhotoLabel_${docId}`);
  if (fileInput && fileInput.files && fileInput.files[0] && label) {
    label.innerHTML = `✅ Fotó csatolva: <b>${escapeHtml(fileInput.files[0].name)}</b>`;
    label.style.background = '#dcfce7';
    label.style.color = '#15803d';
    label.style.borderColor = '#86efac';
  }
};

window.cancelResolve = function(docId, event) {
  if (event) { event.preventDefault(); event.stopPropagation(); }
  const t = translations[currentLang];
  const btn = event.target;
  const box = btn.closest('.status-action-box');
  if (box) {
    box.innerHTML = `
      <button type="button" class="report-action-btn btn-action-solve" onclick="showResolveInput('${docId}', event)">${t.btnSolved}</button>
      <button type="button" class="report-action-btn btn-outline" style="margin-top:5px; color:#ef4444;" onclick="changeStatus('${docId}', 'uj', event)">${t.btnCancelTake}</button>
    `;
  }
};

window.submitResolve = async function(docId, event) {
  if (event) { event.preventDefault(); event.stopPropagation(); }
  const t = translations[currentLang];
  const input = document.getElementById(`resolveInput_${docId}`);
  const photoInput = document.getElementById(`resolvePhotoInput_${docId}`);
  const errorDiv = document.getElementById(`resolveError_${docId}`);
  const submitBtn = document.getElementById(`resolveSubmitBtn_${docId}`);
  const lezarasMegjegyzes = input ? input.value.trim() : "";

  if (!lezarasMegjegyzes) {
    if (input) {
      input.style.borderColor = "#ef4444";
      input.focus();
    }
    if (errorDiv) {
      errorDiv.innerText = t.resolveRequiredError;
      errorDiv.style.display = "block";
    }
    return;
  }

  if (submitBtn) {
    submitBtn.innerText = "⏳ Mentés folyamatban...";
    submitBtn.disabled = true;
  }

  let lezarasFotoUrl = null;
  const photoFile = photoInput && photoInput.files ? photoInput.files[0] : null;

  try {
    // 1. Fotó feltöltése ImgBB-re, ha van csatolva
    if (photoFile) {
      const formData = new FormData();
      formData.append("image", photoFile);

      const response = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
        method: "POST",
        body: formData
      });

      const result = await response.json();
      if (result.success) {
        lezarasFotoUrl = result.data.url;
      }
    }

    const resolvedTimestamp = new Date().toISOString();
    const isVerifiedRescuer = currentUserProfile && 
      (currentUserProfile.role === 'verified_rescuer' || currentUserProfile.role === 'super_admin');

    // 2. Védett backend végpont frissítése
    if (isVerifiedRescuer) {
      const user = firebase.auth().currentUser;
      if (user) {
        const token = await user.getIdToken();
        await fetch(`${BACKEND_URL}/reports/${docId}/status`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            status: 'megoldva',
            lezarasMegjegyzes: lezarasMegjegyzes,
            lezarasFotoUrl: lezarasFotoUrl
          })
        });
      }
    }

    // 3. Firestore kliensoldali szinkronizáció
    await db.collection("bejelentesek").doc(docId).update({
      statusz: "megoldva",
      status: "megoldva",
      lezarasMegjegyzes: lezarasMegjegyzes,
      lezarasFotoUrl: lezarasFotoUrl,
      resolvedAt: resolvedTimestamp
    });

    console.log("Ügy sikeresen lezárva zárójelentéssel és fotóval!");
  } catch (error) {
    console.error("Hiba a lezárásnál:", error);
    alert("Nem sikerült lezárni az ügyet. Ellenőrizd a kapcsolatot!");
    if (submitBtn) {
      submitBtn.innerText = t.btnSaveResolve;
      submitBtn.disabled = false;
    }
  }
};

window.changeStatus = async function(docId, ujStatusz, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const user = firebase.auth().currentUser;
  const isVerifiedRescuer = currentUserProfile && 
    (currentUserProfile.role === 'verified_rescuer' || currentUserProfile.role === 'super_admin');

  if (!user || !isVerifiedRescuer) {
    alert('⚠️ Ezt a műveletet kizárólag ellenőrzött mentők hajthatják végre! Kérlek, jelentkezz be.');
    return;
  }

  await updateReportStatusOnServer(docId, ujStatusz === 'uj' ? 'fuggoben' : ujStatusz);

  const updateData = { 
    statusz: ujStatusz,
    status: ujStatusz === 'uj' ? 'fuggoben' : ujStatusz
  };

  if (ujStatusz === "folyamatban") {
    updateData.vallaloId = user.uid;
    updateData.rescuerUid = user.uid;
  } else if (ujStatusz === "uj") {
    updateData.vallaloId = null;
    updateData.rescuerUid = null;
    updateData.lezarasMegjegyzes = null;
    updateData.lezarasFotoUrl = null;
  }

  db.collection("bejelentesek").doc(docId).update(updateData)
    .then(() => console.log("Státusz frissítve!"))
    .catch((error) => console.error("Hiba:", error));
};

window.showDeleteConfirm = function(docId, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const t = translations[currentLang];
  const btn = event.target;
  const box = btn.closest('.delete-box-container');

  if (box) {
    box.innerHTML = `
      <div style="background:#fef2f2; padding:8px; border-radius:8px; border:1px solid #fecaca; text-align:center;">
        <span style="font-size:12px; color:#ef4444; font-weight:bold; display:block; margin-bottom:6px;">${t.deleteConfirmQuestion}</span>
        <div style="display:flex; gap:6px;">
          <button type="button" class="report-action-btn btn-danger" style="padding:6px; font-size:12px;" onclick="deleteReport('${docId}', event)">${t.btnYesDelete}</button>
          <button type="button" class="report-action-btn btn-outline" style="padding:6px; font-size:12px;" onclick="cancelDelete('${docId}', event)">${t.btnCancel}</button>
        </div>
      </div>
    `;
  }
};

window.cancelDelete = function(docId, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const t = translations[currentLang];
  const btn = event.target;
  const box = btn.closest('.delete-box-container');

  if (box) {
    box.innerHTML = `<button type="button" class="report-action-btn btn-delete" onclick="showDeleteConfirm('${docId}', event)">${t.deleteBtn}</button>`;
  }
};

window.deleteReport = function(docId, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const t = translations[currentLang];
  const elemek = document.querySelectorAll(`[data-report-id="${docId}"]`);
  elemek.forEach(elem => elem.remove());

  db.collection("bejelentesek").doc(docId).delete()
    .then(() => {
      console.log("Dokumentum törölve!");
      const sajatLista = document.getElementById("sajatUgyekLista");
      if (sajatLista && sajatLista.children.length === 0) {
        sajatLista.innerHTML = `<p style="color: #64748b;">${t.noMyCases}</p>`;
      }
    })
    .catch((error) => console.error("Hiba:", error));
};

let sajatUgyekUnsubscribe = null;

function betoltSajatUgyek() {
  const sajatLista = document.getElementById("sajatUgyekLista");
  const t = translations[currentLang];
  sajatLista.innerHTML = '<p style="color: #64748b;">⏳ Betöltés...</p>';

  if (sajatUgyekUnsubscribe) sajatUgyekUnsubscribe();

  const user = firebase.auth().currentUser;
  const activeUid = user ? user.uid : currentUserId;

  sajatUgyekUnsubscribe = db.collection("bejelentesek").onSnapshot((snapshot) => {
    sajatLista.innerHTML = "";
    let talalat = false;

    snapshot.docs.forEach((doc) => {
      const adat = doc.data();
      const id = doc.id;

      const isMyCreated = adat.createrId === activeUid || adat.createrId === currentUserId;
      const isMyTaken = adat.vallaloId === activeUid || adat.rescuerUid === activeUid || adat.vallaloId === currentUserId;

      if (isMyCreated || isMyTaken) {
        talalat = true;
        const szerep = isMyCreated ? t.myCreatedRole : t.myTakenRole;
        
        sajatLista.innerHTML += `
          <div style="margin-bottom: 4px; font-size:12px; font-weight:bold; color:#8b5cf6; text-align:left;">${szerep}</div>
          ${createReportCardHtml(id, adat)}
        `;
      }
    });

    if (!talalat) {
      sajatLista.innerHTML = `<p style="color: #64748b;">${t.noMyCases}</p>`;
    }
  });
}

toggleMapBtn.addEventListener("click", () => {
  toggleMapBtn.classList.add("active");
  toggleListBtn.classList.remove("active");
  mainMapDiv.style.display = "block";
  bejelentesekListaDiv.style.display = "none";
  if (bejelentesKeresoInput) bejelentesKeresoInput.style.display = "none";
  const bejelentesMegyeValaszto = document.getElementById("bejelentesMegyeValaszto");
  if (bejelentesMegyeValaszto) bejelentesMegyeValaszto.style.display = "none";
  setTimeout(() => { mainMap.invalidateSize(); }, 100);
});

toggleListBtn.addEventListener("click", () => {
  toggleListBtn.classList.add("active");
  toggleMapBtn.classList.remove("active");
  mainMapDiv.style.display = "none";
  bejelentesekListaDiv.style.display = "block";
  if (bejelentesKeresoInput) bejelentesKeresoInput.style.display = "block";
  const bejelentesMegyeValaszto = document.getElementById("bejelentesMegyeValaszto");
  if (bejelentesMegyeValaszto) bejelentesMegyeValaszto.style.display = "block";
});

const toggleSzervezetekBtn = document.getElementById("toggleSzervezetekBtn");
const toggleUtmutatoBtn = document.getElementById("toggleUtmutatoBtn");
const szervezetekSzakasz = document.getElementById("szervezetekSzakasz");
const utmutatoSzakasz = document.getElementById("utmutatoSzakasz");

if (toggleSzervezetekBtn && toggleUtmutatoBtn) {
  toggleSzervezetekBtn.addEventListener("click", () => {
    toggleSzervezetekBtn.classList.add("active");
    toggleUtmutatoBtn.classList.remove("active");
    szervezetekSzakasz.style.display = "block";
    utmutatoSzakasz.style.display = "none";
  });

  toggleUtmutatoBtn.addEventListener("click", () => {
    toggleUtmutatoBtn.classList.add("active");
    toggleSzervezetekBtn.classList.remove("active");
    szervezetekSzakasz.style.display = "none";
    utmutatoSzakasz.style.display = "block";
  });
}

fotoInput.addEventListener("change", function() {
  const t = translations[currentLang];
  const file = this.files[0];
  const uploadLabel = document.querySelector(".custom-file-upload");
  const uploadIcon = document.querySelector(".upload-icon");

  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      previewImage.src = e.target.result;
      imagePreviewBox.style.display = "block";
      
      uploadIcon.innerText = "✅";
      uploadLabelText.innerText = t.uploadSuccess;
      uploadLabel.classList.add("uploaded");
    };
    reader.readAsDataURL(file);
  }
});

removePhotoBtn.addEventListener("click", function() {
  const uploadLabel = document.querySelector(".custom-file-upload");
  const uploadIcon = document.querySelector(".upload-icon");
  const t = translations[currentLang];

  fotoInput.value = "";
  previewImage.src = "";
  imagePreviewBox.style.display = "none";
  
  uploadIcon.innerText = "📷";
  uploadLabelText.innerText = t.uploadPhotoText;
  uploadLabel.classList.remove("uploaded");
});

function openImageModal(url, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  
  modalImage.src = url;
  modalImage.style.transform = "none";
  imageModal.style.display = "flex";

  if (panzoomInstance) {
    panzoomInstance.destroy();
    panzoomInstance = null;
  }

  if (typeof Panzoom !== "undefined") {
    setTimeout(() => {
      panzoomInstance = Panzoom(modalImage, { 
        maxScale: 5, 
        minScale: 1, 
        contain: 'outside',
        cursor: 'move',
        exclude: [closeModalBtn]
      });
      const wrapper = document.querySelector('.modal-content-wrapper');
      if (wrapper) wrapper.addEventListener('wheel', panzoomInstance.zoomWithWheel);
    }, 100);
  }
}

closeModalBtn.addEventListener("click", function(e) {
  e.stopPropagation();
  imageModal.style.display = "none";
  modalImage.src = "";
  if (panzoomInstance) {
    panzoomInstance.destroy();
    panzoomInstance = null;
  }
});

function betoltSzervezetek(kivalasztottMegye) {
  szervezetekLista.innerHTML = '<p style="color: #64748b;">⏳ Szervezetek betöltése...</p>';

  let lekerdezes = db.collection("szervezetek");
  if (kivalasztottMegye !== "Összes") {
    lekerdezes = lekerdezes.where("megye", "==", kivalasztottMegye);
  }

  lekerdezes.get().then((snapshot) => {
    osszesSzervezetMemoria = [];
    
    snapshot.forEach((doc) => {
      osszesSzervezetMemoria.push(doc.data());
    });

    szurEsKirajzolSzervezetek();
  }).catch((err) => {
    console.error("Hiba a szervezetek lekérésekor:", err);
    szervezetekLista.innerHTML = '<p style="color: #ef4444;">Nem sikerült betölteni az adatokat.</p>';
  });
}

function szurEsKirajzolSzervezetek() {
  const t = translations[currentLang];
  const keresoSzo = szervezetKeresoInput ? szervezetKeresoInput.value.toLowerCase().trim() : "";
  const kivalasztottKat = document.getElementById("kategoriaValaszto") ? document.getElementById("kategoriaValaszto").value : "Összes";
  
  szervezetekLista.innerHTML = "";

  const szurtLista = osszesSzervezetMemoria.filter((szervezet) => {
    const nev = (szervezet.nev || "").toLowerCase();
    const cim = (szervezet.cim || "").toLowerCase();
    const megye = (szervezet.megye || "").toLowerCase();
    const kategoria = szervezet.kategoria || "";

    const matcheliKeresest = nev.includes(keresoSzo) || cim.includes(keresoSzo) || megye.includes(keresoSzo);
    let matcheliKategoriat = (kivalasztottKat === "Összes") || (kategoria === kivalasztottKat);

    return matcheliKeresest && matcheliKategoriat;
  });

  if (szurtLista.length === 0) {
    szervezetekLista.innerHTML = `<p style="color: #ef4444; text-align: center; margin-top: 15px;">${t.noOrgFound}</p>`;
    return;
  }

  szurtLista.forEach((szervezet) => {
    let kategoriaClass = "";
    let ikonosNev = szervezet.nev;

    if (szervezet.kategoria === "orvos") {
      kategoriaClass = "orvos"; ikonosNev = "🏥 " + szervezet.nev;
    } else if (szervezet.kategoria === "hatosag") {
      kategoriaClass = "hatosag"; ikonosNev = "🏛️ " + szervezet.nev;
    } else if (szervezet.kategoria === "vad") {
      kategoriaClass = "vad"; ikonosNev = "🦅 " + szervezet.nev;
    } else {
      kategoriaClass = "menhely"; ikonosNev = "🐕 " + szervezet.nev;
    }

    szervezetekLista.innerHTML += `
      <div class="info-card ${kategoriaClass}">
        <h3>${ikonosNev}</h3>
        <p>📍 ${szervezet.cim || szervezet.megye}</p>
        <p>📞 ${szervezet.telefon}</p>
        <a href="tel:${szervezet.telefon}" class="call-btn">${t.callOrgBtn}</a>
      </div>
    `;
  });
}

const kategoriaValaszto = document.getElementById("kategoriaValaszto");
if (kategoriaValaszto) {
  kategoriaValaszto.addEventListener("change", szurEsKirajzolSzervezetek);
}

if (megyeValaszto) {
  megyeValaszto.addEventListener("change", function() {
    betoltSzervezetek(this.value);
  });
}

if (szervezetKeresoInput) {
  szervezetKeresoInput.addEventListener("input", szurEsKirajzolSzervezetek);
}

document.getElementById("menuMapBtn").addEventListener("click", () => {
  step0.style.display = "none"; stepMap.style.display = "block";
  setTimeout(() => { mainMap.invalidateSize(); }, 100);
});

document.getElementById("menuNewBtn").addEventListener("click", () => {
  step0.style.display = "none"; step1.style.display = "block";
});

document.getElementById("menuSajatBtn").addEventListener("click", () => {
  step0.style.display = "none"; stepSajat.style.display = "block";
  betoltSajatUgyek();
});

document.getElementById("menuInfoBtn").addEventListener("click", () => {
  step0.style.display = "none"; step4.style.display = "block";
  betoltSzervezetek(megyeValaszto.value);
});

document.querySelectorAll(".backToMenuBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    const t = translations[currentLang];
    stepMap.style.display = "none"; stepSajat.style.display = "none";
    step1.style.display = "none"; step2.style.display = "none";
    step3.style.display = "none"; step4.style.display = "none";
    if (stepAdmin) stepAdmin.style.display = "none";
    step0.style.display = "block";

    if (sajatUgyekUnsubscribe) {
      sajatUgyekUnsubscribe();
      sajatUgyekUnsubscribe = null;
    }

    const mapDiv = document.getElementById("map");
    if (mapDiv) mapDiv.classList.remove("mutasd");
    document.getElementById("tovabb2").style.display = "none";
    document.getElementById("eredmeny").innerText = t.locationDefaultText;
  });
});

document.getElementById("gpsButton").addEventListener("click", function() {
  const t = translations[currentLang];
  const eredmeny = document.getElementById("eredmeny");
  eredmeny.innerHTML = t.gpsSearching;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(sikeresKereses, hibaKereses);
  } else {
    eredmeny.innerHTML = t.gpsNotSupported;
  }
});

document.getElementById("manualLocationBtn").addEventListener("click", function() {
  const t = translations[currentLang];
  if (!pontosLat || !pontosLon) {
    pontosLat = 47.4979;
    pontosLon = 19.0402;
  }
  document.getElementById("eredmeny").innerHTML = t.manualMapHint;
  megjelenitBejelentesTerkep(pontosLat, pontosLon, 12);
});

function sikeresKereses(pozicio) {
  const t = translations[currentLang];
  pontosLat = pozicio.coords.latitude;
  pontosLon = pozicio.coords.longitude;
  document.getElementById("eredmeny").innerHTML = t.gpsSuccess;
  megjelenitBejelentesTerkep(pontosLat, pontosLon, 16);
}

function hibaKereses() {
  const t = translations[currentLang];
  document.getElementById("eredmeny").innerHTML = t.gpsError;
}

function megjelenitBejelentesTerkep(lat, lon, zoomLevel) {
  const t = translations[currentLang];
  const mapDiv = document.getElementById("map");
  document.getElementById("mapSearchContainer").style.display = "flex";
  mapDiv.classList.add("mutasd");

  if (!userMap) {
    userMap = L.map('map').setView([lat, lon], zoomLevel);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(userMap);
    
    userMarker = L.marker([lat, lon], { draggable: true }).addTo(userMap);
    userMarker.bindPopup(t.mapMarkerPopup).openPopup();

    userMarker.on('dragend', function(event) {
      const position = userMarker.getLatLng();
      pontosLat = position.lat;
      pontosLon = position.lng;
      document.getElementById("eredmeny").innerHTML = t.locationSaved;
    });

    userMap.on('click', function(event) {
      pontosLat = event.latlng.lat;
      pontosLon = event.latlng.lng;
      userMarker.setLatLng(event.latlng);
      document.getElementById("eredmeny").innerHTML = t.locationSaved;
    });

  } else {
    userMap.setView([lat, lon], zoomLevel);
    if (typeof userMarker !== "undefined") {
      userMarker.setLatLng([lat, lon]);
      userMarker.setPopupContent(t.mapMarkerPopup);
    }
  }

  setTimeout(() => { userMap.invalidateSize(); }, 300);
  document.getElementById("tovabb2").style.display = "block";
}

document.getElementById("mapSearchBtn").addEventListener("click", async function() {
  const t = translations[currentLang];
  const query = document.getElementById("mapSearchInput").value.trim();
  const eredmenyDiv = document.getElementById("eredmeny");
  const searchBtn = document.getElementById("mapSearchBtn");

  if (!query) {
    eredmenyDiv.innerHTML = t.searchAddressError;
    return;
  }

  eredmenyDiv.innerHTML = t.searchSearching;
  searchBtn.innerText = "⏳";

  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=hu`);
    const data = await response.json();

    if (data && data.length > 0) {
      pontosLat = parseFloat(data[0].lat);
      pontosLon = parseFloat(data[0].lon);

      userMap.setView([pontosLat, pontosLon], 16);
      if (typeof userMarker !== "undefined") {
        userMarker.setLatLng([pontosLat, pontosLon]);
        userMarker.getPopup().setContent(t.mapMarkerPopup).openPopup();
      }

      const rovidCim = data[0].display_name.split(',')[0];
      eredmenyDiv.innerHTML = `${t.searchFound}<b>${rovidCim}</b>`;
    } else {
      eredmenyDiv.innerHTML = t.searchNotFound;
    }
  } catch (error) {
    console.error("Geocoding hiba:", error);
    eredmenyDiv.innerHTML = t.searchNetworkError;
  }

  searchBtn.innerText = "🔍";
});

document.getElementById("mapSearchInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("mapSearchBtn").click();
  }
});

document.getElementById("tovabb1").addEventListener("click", function() {
  const kivalasztottKarty = document.querySelector(".karty.kivalasztva");
  const btn = this;
  
  if (!kivalasztottKarty) {
    const t = translations[currentLang];
    const eredetiSzoveg = btn.innerText;

    btn.innerText = "⚠️ Válassz fajtát!";
    btn.style.backgroundColor = "#ef4444";
    btn.style.borderColor = "#ef4444";
    btn.style.color = "#ffffff";

    setTimeout(() => {
      btn.innerText = eredetiSzoveg;
      btn.style.backgroundColor = "";
      btn.style.borderColor = "";
      btn.style.color = "";
    }, 2000);

    return;
  }

  step1.style.display = "none";
  step2.style.display = "block";
});
document.getElementById("vissza1").addEventListener("click", () => { step2.style.display = "none"; step1.style.display = "block"; });
document.getElementById("tovabb2").addEventListener("click", () => { step2.style.display = "none"; step3.style.display = "block"; });
document.getElementById("vissza2").addEventListener("click", () => { step3.style.display = "none"; step2.style.display = "block"; });

document.querySelectorAll(".karty").forEach(karty => {
  karty.addEventListener("click", function() {
    document.querySelectorAll(".karty").forEach(k => k.classList.remove("kivalasztva"));
    this.classList.add("kivalasztva");
  });
});

document.getElementById("kuldes").addEventListener("click", async function() {
  await ujBejelentesKuldése();
});

let elozoKepernyoId = "stepMap";

// === RÉSZLETEK ÉS KOMMENTEK KEZELÉSE ===
window.megnyitReszletek = function(docId) {
  aktivReszletDocId = docId;
  
  if (stepSajat && stepSajat.style.display === "block") {
    elozoKepernyoId = "stepSajat";
  } else {
    elozoKepernyoId = "stepMap";
  }

  stepMap.style.display = "none";
  stepSajat.style.display = "none";
  const stepReszletek = document.getElementById("stepReszletek");
  if (stepReszletek) stepReszletek.style.display = "block";

  const reszletKartyaBox = document.getElementById("reszletKartyaBox");
  if (reszletKartyaBox) {
    reszletKartyaBox.innerHTML = '<p style="color: #64748b; font-size:13px;">⏳ Adatok betöltése...</p>';
  }

  if (kommentekUnsubscribe) kommentekUnsubscribe();

  kommentekUnsubscribe = db.collection("bejelentesek").doc(docId).onSnapshot((doc) => {
    if (!doc.exists) return;
    const adat = doc.data();

    const fajtaEl = document.getElementById("reszletFajta");
    if (fajtaEl) fajtaEl.innerText = adat.fajta || adat.allatFajta || "Állatmentés";

    const t = translations[currentLang];
    let terkepLinkSzoveg = t.openMapLink;
    if (adat.cim) {
      terkepLinkSzoveg = `📍 ${escapeHtml(adat.cim)}`;
    } else if (adat.megye && adat.megye !== "Ismeretlen") {
      terkepLinkSzoveg = `📍 ${escapeHtml(adat.megye)}`;
    }

    const rLat = adat.lat;
    const rLon = adat.lon || adat.lng;
    const terKepGombHtml = (rLat && rLon)
      ? `<a href="https://www.google.com/maps?q=${rLat},${rLon}" target="_blank" onclick="event.stopPropagation();" style="font-size:12px; color:#2563eb; text-decoration:underline; display:inline-block; width: fit-content; margin-top:4px; font-weight: 500;">${terkepLinkSzoveg}</a>`
      : '';

    if (reszletKartyaBox) {
      reszletKartyaBox.innerHTML = `
        <div class="reszlet-info-box">
          <p style="margin: 0 0 4px 0;"><b>Leírás:</b> ${escapeHtml(adat.megjegyzes || adat.helyszinLeiras) || 'Nincs megjegyzés'}</p>
          <p style="margin: 0;"><b>Telefon:</b> ${escapeHtml(adat.telefon || adat.bejelentoTelefon) || 'Nincs megadva'}</p>
          ${terKepGombHtml}
        </div>
      `;
    }

    const kommentek = adat.kommentek || [];
    const listaDiv = document.getElementById("reszletKommentekLista");
    if (listaDiv) {
      listaDiv.innerHTML = "";

      if (kommentek.length === 0) {
        listaDiv.innerHTML = `<p style="color: #64748b; text-align: center; font-size: 13px;">Még nincsenek üzenetek.</p>`;
      } else {
        const user = firebase.auth().currentUser;
        const activeUid = user ? user.uid : currentUserId;

        kommentek.forEach(k => {
          const isSajat = k.userId === activeUid || k.userId === currentUserId;
          const isBejelento = k.userId === adat.createrId;
          const isVallo = k.userId === adat.vallaloId || k.userId === adat.rescuerUid;

          let szerepNev = "👥 Érdeklődő";
          let szerepClass = "erdoklodo";

          if (isBejelento) {
            szerepNev = "✍️ Bejelentő";
            szerepClass = "bejelento";
          } else if (isVallo) {
            szerepNev = "🚗 Mentő";
            szerepClass = "mento";
          }

          if (isSajat) szerepNev += " (Én)";

          const buborekClass = `komment-buborek ${szerepClass} ${isSajat ? 'sajat' : ''}`;

          let idoStr = "";
          if (k.idopont && k.idopont.toDate) {
            idoStr = k.idopont.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          } else if (k.idopont) {
            idoStr = new Date(k.idopont).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          }

          listaDiv.innerHTML += `
            <div class="${buborekClass}">
              <div class="komment-szerep-label">${szerepNev}</div>
              <div class="komment-szoveg">${escapeHtml(k.szoveg)}</div>
              <div class="komment-buborek-idopont">${idoStr}</div>
            </div>
          `;
        });
        listaDiv.scrollTop = listaDiv.scrollHeight;
      }
    }

    const chatInputKontener = document.getElementById("chatInputKontener");
    if (chatInputKontener) {
      const user = firebase.auth().currentUser;
      const activeUid = user ? user.uid : currentUserId;
      const isErintett = (activeUid === adat.createrId) || (activeUid === adat.vallaloId) || (activeUid === adat.rescuerUid);

      if (!adat.vallaloId && !adat.rescuerUid) {
        chatInputKontener.innerHTML = `
          <div class="chat-disabled-hint">
            ⏳ A közvetlen chat akkor nyílik meg, ha valaki elvállalja a mentést.
          </div>`;
      } else if (!isErintett) {
        chatInputKontener.innerHTML = `
          <div class="chat-disabled-hint">
            🔒 A chat kizárólag a bejelentő és az elvállaló mentő számára elérhető.
          </div>`;
      } else {
        chatInputKontener.innerHTML = `
          <div style="display: flex; gap: 8px; width: 100%;">
            <input type="text" id="ujKommentInput" placeholder="Üzenet küldése..." style="flex: 1; margin: 0; padding: 10px; border: 1px solid #cbd5e1; border-radius: 10px; font-size: 13px;">
            <button type="button" id="kuldKommentBtn" class="btn btn-primary" style="width: auto; padding: 10px 16px; margin: 0;">Küldés</button>
          </div>`;

        const btn = document.getElementById("kuldKommentBtn");
        const inp = document.getElementById("ujKommentInput");
        if (btn) btn.addEventListener("click", kuldKommentFuggveny);
        if (inp) {
          inp.addEventListener("keypress", (e) => {
            if (e.key === "Enter") kuldKommentFuggveny();
          });
        }
      }
    }
  });
};

const backToListBtn = document.getElementById("backToListBtn");
if (backToListBtn) {
  backToListBtn.addEventListener("click", () => {
    if (kommentekUnsubscribe) {
      kommentekUnsubscribe();
      kommentekUnsubscribe = null;
    }
    const stepReszletek = document.getElementById("stepReszletek");
    if (stepReszletek) stepReszletek.style.display = "none";

    if (elozoKepernyoId === "stepSajat") {
      stepSajat.style.display = "block";
    } else {
      stepMap.style.display = "block";
    }
  });
}

const kuldKommentBtn = document.getElementById("kuldKommentBtn");
if (kuldKommentBtn) {
  kuldKommentBtn.addEventListener("click", () => {
    kuldKommentFuggveny();
  });
}

const ujKommentInput = document.getElementById("ujKommentInput");
if (ujKommentInput) {
  ujKommentInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      kuldKommentFuggveny();
    }
  });
}

async function kuldKommentFuggveny() {
  const input = document.getElementById("ujKommentInput");
  if (!input || !aktivReszletDocId) return;

  const szoveg = input.value.trim();
  if (!szoveg) return;

  try {
    const docRef = db.collection("bejelentesek").doc(aktivReszletDocId);
    const docSnap = await docRef.get();
    
    if (!docSnap.exists) return;
    const adat = docSnap.data();

    const user = firebase.auth().currentUser;
    const activeUid = user ? user.uid : currentUserId;

    const isErintett = (activeUid === adat.createrId) || (activeUid === adat.vallaloId) || (activeUid === adat.rescuerUid);
    if ((!adat.vallaloId && !adat.rescuerUid) || !isErintett) {
      alert("Csak a bejelentő és az elvállaló mentő küldhet üzenetet!");
      return;
    }

    const ujKommentObj = {
      userId: activeUid,
      szoveg: szoveg,
      idopont: new Date().toISOString()
    };

    await docRef.update({
      kommentek: firebase.firestore.FieldValue.arrayUnion(ujKommentObj)
    });

    input.value = "";
  } catch (err) {
    console.error("Hiba a komment küldésekor:", err);
    alert("Nem sikerült elküldeni az üzenetet.");
  }
}

// === ÚJ BEJELENTÉS KÜLDÉSE MEGYE-FELISMERÉSSEL ÉS E-MAIL ÉRTESÍTÉSSEL ===
async function ujBejelentesKuldése() {
  const submitBtn = document.getElementById("kuldes");
  const megjegyzesInput = document.getElementById("megjegyzes");
  const megjegyzes = megjegyzesInput ? megjegyzesInput.value.trim() : "";
  const telefon = document.getElementById("telefon").value;

  if (!megjegyzes) {
    const eredetiSzoveg = submitBtn.innerText;
    
    submitBtn.innerText = "⚠️ Írj leírást / megjegyzést!";
    submitBtn.style.backgroundColor = "#ef4444";
    submitBtn.style.borderColor = "#ef4444";
    submitBtn.style.color = "#ffffff";

    megjegyzesInput.style.borderColor = "#ef4444";
    megjegyzesInput.focus();

    setTimeout(() => {
      submitBtn.innerText = eredetiSzoveg;
      submitBtn.style.backgroundColor = "";
      submitBtn.style.borderColor = "";
      submitBtn.style.color = "";
      megjegyzesInput.style.borderColor = "";
    }, 2500);

    return;
  }

  submitBtn.innerText = "⏳ Feltöltés...";
  submitBtn.disabled = true;
  const kivalasztottKarty = document.querySelector(".karty.kivalasztva");
  const allatFajta = kivalasztottKarty ? kivalasztottKarty.dataset.fajta : "Nincs megadva";
  
  const fajl = fotoInput.files[0];
  let fotoUrl = null;

  try {
    // 1. Fotó feltöltése ImgBB-re (ha van csatolva)
    if (fajl) {
      const formData = new FormData();
      formData.append("image", fajl);

      const response = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
        method: "POST",
        body: formData
      });

      const result = await response.json();
      if (result.success) {
        fotoUrl = result.data.url;
      }
    }

    // 2. Fordított geokódolás (település & megye kinyerése)
    let mentettMegye = "Ismeretlen";
    let mentettCim = "";
    if (pontosLat && pontosLon) {
      try {
        const geoResp = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${pontosLat}&lon=${pontosLon}`);
        const geoData = await geoResp.json();
        if (geoData && geoData.address) {
          const addr = geoData.address;
          mentettMegye = addr.county || addr.state || addr.city || addr.town || "Ismeretlen";
          mentettMegye = mentettMegye.replace(" vármegye", "").replace(" megye", "").trim();
          
          const utca = addr.road || addr.pedestrian || addr.suburb || "";
          const varos = addr.city || addr.town || addr.village || "";
          mentettCim = utca ? `${varos}, ${utca}` : varos;
        }
      } catch (e) {
        console.log("Cím felismerési hiba:", e);
      }
    }

    const user = firebase.auth().currentUser;
    const activeUid = user ? user.uid : currentUserId;

    // 3. Mentés és e-mail értesítés a backend szerveren keresztül
    const reportPayload = {
      fajta: allatFajta,
      allatFajta: allatFajta,
      megjegyzes: megjegyzes,
      helyszinLeiras: megjegyzes,
      telefon: telefon,
      bejelentoTelefon: telefon,
      lat: pontosLat,
      lon: pontosLon,
      lng: pontosLon,
      megye: mentettMegye,
      cim: mentettCim,
      fotoUrl: fotoUrl,
      kepUrl: fotoUrl,
      createrId: activeUid
    };

    const response = await fetch(`${BACKEND_URL}/reports`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reportPayload)
    });

    if (!response.ok) {
      throw new Error('Sikertelen mentés a szerveren.');
    }

    let terKepLink = (pontosLat && pontosLon) ? `https://www.google.com/maps?q=${pontosLat},${pontosLon}` : 'Nincs megadva';
    const megosztandoSzoveg = `🚨 ÚJ ÁLLATMENTÉS BEJELENTÉS!\n\n🐾 Állat: ${allatFajta}\n📍 Megye: ${mentettMegye}\n📝 Leírás: ${megjegyzes || 'Nincs külön megjegyzés'}\n📞 Kapcsolat: ${telefon || 'Nincs megadva'}\n📍 Térkép link: ${terKepLink}`;

    const t = translations[currentLang];
    let relevansUtmutatoHtml = "";

    if (allatFajta === "Kutya") {
      relevansUtmutatoHtml = `
        <div class="guide-card" style="margin-top: 15px; text-align: left;">
          <div class="guide-header"><span class="guide-icon">🐶</span><h3>${t.g4Title}</h3></div>
          <div class="guide-body">${t.g4Body}</div>
        </div>`;
    } else if (allatFajta === "Macska") {
      relevansUtmutatoHtml = `
        <div class="guide-card" style="margin-top: 15px; text-align: left;">
          <div class="guide-header"><span class="guide-icon">🐱</span><h3>${t.g3Title}</h3></div>
          <div class="guide-body">${t.g3Body}</div>
        </div>`;
    } else if (allatFajta === "Vadállat") {
      relevansUtmutatoHtml = `
        <div class="guide-card" style="margin-top: 15px; text-align: left;">
          <div class="guide-header"><span class="guide-icon">🦅</span><h3>${t.g2Title}</h3></div>
          <div class="guide-body">${t.g2Body}</div>
        </div>
        <div class="guide-card" style="margin-top: 10px; text-align: left;">
          <div class="guide-header"><span class="guide-icon">🦊</span><h3>${t.g6Title}</h3></div>
          <div class="guide-body">${t.g6Body}</div>
        </div>`;
    } else {
      relevansUtmutatoHtml = `
        <div class="guide-card" style="margin-top: 15px; text-align: left;">
          <div class="guide-header"><span class="guide-icon">🦔</span><h3>${t.g5Title}</h3></div>
          <div class="guide-body">${t.g5Body}</div>
        </div>`;
    }

    step3.innerHTML = `
      <div style="padding: 10px 0; text-align: center;">
        <span style="font-size: 48px;">🎉</span>
        <h2>Köszönjük! / Thank you!</h2>
        <p style="font-size: 14px; margin-bottom: 15px;">A bejelentésed elmentve a(z) <b>${mentettMegye}</b> régióhoz.</p>

        <div class="success-share-box">
          <p class="share-box-title">📢 Segíts, hogy még gyorsabban kiérjen a segítség!</p>
          <p class="share-box-desc">Oszd meg a bejelentést Facebook csoportokban, Messengeren vagy Viberen:</p>
          
          <button type="button" id="shareBtn" class="btn btn-primary" style="background: #1877f2; border: none; font-size: 14px; padding: 12px; display: flex; align-items: center; justify-content: center; gap: 8px;">
            📲 Bejelentés Megosztása / Share Report
          </button>
        </div>

        <div style="margin-top: 15px;">
          <h3 style="font-size: 14px; text-align: left; color: var(--text-main); margin-bottom: 6px;">💡 Teendők a mentők kiérkezéséig:</h3>
          ${relevansUtmutatoHtml}
        </div>

        <button class="btn btn-outline" style="margin-top: 15px;" onclick="location.reload()">← Vissza a főmenübe</button>
      </div>
    `;

    const shareBtn = document.getElementById("shareBtn");
    if (shareBtn) {
      shareBtn.addEventListener("click", async () => {
        if (navigator.share) {
          try {
            await navigator.share({
              title: '🚨 Állatmentő Bejelentés',
              text: megosztandoSzoveg
            });
          } catch (err) {
            console.log("Megosztás megszakítva");
          }
        } else {
          navigator.clipboard.writeText(megosztandoSzoveg);
          alert("📋 A bejelentés adatai másolva a vágólapra!");
          window.open('https://www.facebook.com/', '_blank');
        }
      });
    }

  } catch (error) {
    console.error("Hiba: ", error);
    alert("Nem sikerült a beküldés. Ellenőrizd a kapcsolatot!");
    submitBtn.innerText = "🚨 BEJELENTÉS KÜLDÉSE";
    submitBtn.disabled = false;
  }
}

// ================= HITELESÍTÉS & BACKEND ÖSSZEKÖTÉS =================
const BACKEND_URL = 'https://allatmento-backend.onrender.com/api';
let isRegisterMode = false;
let currentUserProfile = null;

const authModal = document.getElementById('authModal');
const openAuthModalBtn = document.getElementById('openAuthModalBtn');
const closeAuthModalBtn = document.getElementById('closeAuthModalBtn');
const authForm = document.getElementById('authForm');
const authEmail = document.getElementById('authEmail');
const authPassword = document.getElementById('authPassword');
const authErrorBox = document.getElementById('authErrorBox');
const authSubmitBtn = document.getElementById('authSubmitBtn');
const authToggleLink = document.getElementById('authToggleLink');
const authToggleText = document.getElementById('authToggleText');
const userStatusBadge = document.getElementById('userStatusBadge');
const logoutBtn = document.getElementById('logoutBtn');

if (openAuthModalBtn) {
  openAuthModalBtn.addEventListener('click', () => {
    authModal.style.display = 'flex';
    authErrorBox.style.display = 'none';
  });
}

if (closeAuthModalBtn) {
  closeAuthModalBtn.addEventListener('click', () => {
    authModal.style.display = 'none';
  });
}

if (authToggleLink) {
  authToggleLink.addEventListener('click', (e) => {
    e.preventDefault();
    isRegisterMode = !isRegisterMode;
    document.getElementById('authModalTitle').textContent = isRegisterMode ? '📝 Mentő Regisztráció' : '🛡️ Mentői Belépés';
    authSubmitBtn.textContent = isRegisterMode ? 'Regisztráció beküldése' : 'Bejelentkezés';
    authToggleText.textContent = isRegisterMode ? 'Már van fiókod?' : 'Még nincs mentői fiókod?';
    authToggleLink.textContent = isRegisterMode ? 'Bejelentkezés' : 'Regisztráció';
    authErrorBox.style.display = 'none';
  });
}

// Űrlap beküldése (Login / Regisztráció)
if (authForm) {
  authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    authErrorBox.style.display = 'none';
    authSubmitBtn.disabled = true;
    authSubmitBtn.textContent = 'Feldolgozás...';

    const email = authEmail.value.trim();
    const password = authPassword.value;

    try {
      if (isRegisterMode) {
        // Regisztráció létrehozása
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        
        // Verifikációs e-mail kiküldése
        await userCredential.user.sendEmailVerification();
        
        // Kijelentkeztetés a megerősítésig
        await firebase.auth().signOut();
        
        alert('Sikeres regisztráció! Küldtünk egy megerősítő linket az e-mail címedre. Kérlek, kattints rá a fiókod aktiválásához!');
        authModal.style.display = 'none';
        authForm.reset();
      } else {
        // Bejelentkezés
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        
        // Ellenőrizzük, hogy megerősítette-e az e-mail címét
        if (!userCredential.user.emailVerified) {
          authErrorBox.innerHTML = `
            ⚠️ Az e-mail címed még nincs megerősítve!<br>
            <button type="button" id="resendVerificationBtn" class="btn btn-outline" style="font-size:11px; padding:4px 8px; margin-top:6px; color:#2563eb; border-color:#93c5fd;">
              Megerősítő e-mail újraküldése
            </button>
          `;
          authErrorBox.style.display = 'block';

          // Újraküldés gomb eseménykezelője
          document.getElementById('resendVerificationBtn').addEventListener('click', async () => {
            try {
              await userCredential.user.sendEmailVerification();
              alert('Az új megerősítő e-mailt elküldtük!');
            } catch (err) {
              alert('Hiba az újraküldéskor: ' + err.message);
            }
          });

          await firebase.auth().signOut();
          return;
        }

        authModal.style.display = 'none';
        authForm.reset();
      }
    } catch (err) {
      authErrorBox.textContent = err.message || 'Hiba történt a hitelesítés során.';
      authErrorBox.style.display = 'block';
    } finally {
      authSubmitBtn.disabled = false;
      authSubmitBtn.textContent = isRegisterMode ? 'Regisztráció beküldése' : 'Bejelentkezés';
    }
  });
}

// Kijelentkezés eseménykezelő
if (logoutBtn) {
  logoutBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signOut();
      currentUserProfile = null;
      updateAuthUI(null);

      // Nézetek visszaállítása a főmenüre
      if (stepAdmin) stepAdmin.style.display = 'none';
      if (stepMap) stepMap.style.display = 'none';
      if (stepSajat) stepSajat.style.display = 'none';
      if (step1) step1.style.display = 'none';
      if (step2) step2.style.display = 'none';
      if (step3) step3.style.display = 'none';
      if (step4) step4.style.display = 'none';
      step0.style.display = 'block';

      if (typeof szurEsKirajzolBejelentesek === 'function') szurEsKirajzolBejelentesek();
    } catch (err) {
      console.error('Hiba kijelentkezéskor:', err);
    }
  });
}

// Felhasználó állapotfigyelője
firebase.auth().onAuthStateChanged(async (user) => {
  if (user && user.emailVerified) {
    try {
      const token = await user.getIdToken(true);
      const res = await fetch(`${BACKEND_URL}/me`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();

      if (data.success && data.user) {
        currentUserProfile = data.user;
        updateAuthUI(data.user);
      } else {
        throw new Error('Sikertelen profil lekérés');
      }
    } catch (err) {
      console.warn('Backend profil lekérés hiba:', err);
      currentUserProfile = { uid: user.uid, role: 'public', email: user.email };
      updateAuthUI(currentUserProfile);
    }
  } else {
    currentUserProfile = null;
    updateAuthUI(null);
  }
  if (typeof szurEsKirajzolBejelentesek === "function") szurEsKirajzolBejelentesek();
});

function updateAuthUI(user) {
  const menuAdminBtn = document.getElementById('menuAdminBtn');

  if (user) {
    openAuthModalBtn.style.display = 'none';
    logoutBtn.style.display = 'flex';
    userStatusBadge.style.display = 'flex';

    if (user.role === 'super_admin') {
      userStatusBadge.innerHTML = '⚡ Rendszer<br>Admin';
      userStatusBadge.style.background = '#fef3c7';
      userStatusBadge.style.color = '#b45309';
      if (menuAdminBtn) menuAdminBtn.style.display = 'block';
    } else if (user.role === 'verified_rescuer') {
      userStatusBadge.innerHTML = '🐾 Ellenőrzött<br>Mentő';
      userStatusBadge.style.background = '#dcfce7';
      userStatusBadge.style.color = '#15803d';
      if (menuAdminBtn) menuAdminBtn.style.display = 'none';
    } else {
      userStatusBadge.innerHTML = '⏳ Jóváhagyásra<br>vár';
      userStatusBadge.style.background = '#f1f5f9';
      userStatusBadge.style.color = '#64748b';
      if (menuAdminBtn) menuAdminBtn.style.display = 'none';
    }
  } else {
    openAuthModalBtn.style.display = 'flex';
    logoutBtn.style.display = 'none';
    userStatusBadge.style.display = 'none';
    if (menuAdminBtn) menuAdminBtn.style.display = 'none';
  }
}

// ================= ADMIN DASHBOARD LOGIKA =================
const menuAdminBtn = document.getElementById('menuAdminBtn');
const adminUserList = document.getElementById('adminUserList');

if (menuAdminBtn) {
  menuAdminBtn.addEventListener('click', () => {
    step0.style.display = 'none';
    if (stepAdmin) stepAdmin.style.display = 'block';
    loadAdminUsers();
  });
}

async function loadAdminUsers() {
  if (!adminUserList) return;
  adminUserList.innerHTML = '<p style="color: #64748b; font-size: 13px;">⏳ Felhasználók betöltése...</p>';

  const user = firebase.auth().currentUser;
  if (!user) {
    adminUserList.innerHTML = '<p style="color: #ef4444; font-size: 13px;">Kérlek, jelentkezz be rendszergazdaként!</p>';
    return;
  }

  try {
    const token = await user.getIdToken(true);
    const res = await fetch(`${BACKEND_URL}/users`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.error || 'Hiba a felhasználók lekérésekor.');
    }

    const users = data.users || [];
    if (users.length === 0) {
      adminUserList.innerHTML = '<p style="color: #64748b; font-size: 13px; text-align: center;">Még nincsenek regisztrált felhasználók.</p>';
      return;
    }

    adminUserList.innerHTML = '';
    users.forEach(u => {
      const uid = u.uid || u.id;
      const role = u.role || 'public';
      
      let badgeHtml = '<span style="background: #f1f5f9; color: #64748b; font-size: 11px; padding: 2px 8px; border-radius: 12px; font-weight: bold;">Jóváhagyásra vár</span>';
      if (role === 'verified_rescuer') {
        badgeHtml = '<span style="background: #dcfce7; color: #15803d; font-size: 11px; padding: 2px 8px; border-radius: 12px; font-weight: bold;">Hitelesített Mentő</span>';
      } else if (role === 'super_admin') {
        badgeHtml = '<span style="background: #fef3c7; color: #b45309; font-size: 11px; padding: 2px 8px; border-radius: 12px; font-weight: bold;">Rendszer Admin</span>';
      }

      let actionBtns = '';
      if (role !== 'super_admin') {
        if (role === 'verified_rescuer') {
          actionBtns = `<button type="button" onclick="setRoleViaAdmin('${uid}', 'public')" class="btn btn-outline" style="padding: 6px 10px; font-size: 11px; color: #ef4444; border-color: #fca5a5;">Mentő jog megvonása</button>`;
        } else {
          actionBtns = `<button type="button" onclick="setRoleViaAdmin('${uid}', 'verified_rescuer')" class="btn btn-success" style="padding: 6px 10px; font-size: 11px;">✅ Mentővé kinevezés</button>`;
        }
      }

      adminUserList.innerHTML += `
        <div style="background: var(--bg-card, #ffffff); border: 1px solid #e2e8f0; border-radius: 12px; padding: 12px; display: flex; flex-direction: column; gap: 8px; text-align: left;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <b style="font-size: 13px;">${escapeHtml(u.email || uid)}</b>
            ${badgeHtml}
          </div>
          <div style="font-size: 11px; color: #94a3b8;">UID: ${uid}</div>
          <div style="display: flex; justify-content: flex-end; margin-top: 4px;">
            ${actionBtns}
          </div>
        </div>
      `;
    });
  } catch (err) {
    console.error('Hiba az admin lista betöltésekor:', err);
    adminUserList.innerHTML = `<p style="color: #ef4444; font-size: 13px;">${escapeHtml(err.message)}</p>`;
  }
}

// Rang módosítása az admin felületről
window.setRoleViaAdmin = async function(targetUid, newRole) {
  const user = firebase.auth().currentUser;
  if (!user) return;

  try {
    const token = await user.getIdToken();
    const res = await fetch(`${BACKEND_URL}/users/${targetUid}/role`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ role: newRole })
    });

    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.error || 'Sikertelen jogosultság módosítás');
    }

    alert('Jogosultság sikeresen frissítve!');
    loadAdminUsers();
  } catch (err) {
    alert('Hiba: ' + err.message);
  }
};