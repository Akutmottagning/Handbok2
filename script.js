const medications = {
    "Acetylcystein": {
        "location": "Rött lkm-rum",
        "details": `Indikation: Mukusreglerande vid inhalation samt antidot till paracetamol.
Som antidot: Dos och hastighet ordineras av läkare, baserat på patientens vikt. Som antidot kan Acetylcystein ges peroralt men orsakar relativt ofta kräkningar varför intravenös tillförsel rekommenderas i första hand.
Enligt Giftinfo (överdos av icke-depotpreparat):
- Dos 1: Intravenöst ges först 200 mg/kg i 500 ml glukos 50 mg/ml eller isoton NaCl under 4 timmar (50 mg/kg/timme).
- Dos 2: 6,25 mg/kg/timme under 16 timmar eller längre, se nedan (praktiskt är att 75 mg/kg löses i 500 ml och ges under varje 12-timmarsperiod).
- Eventuellt ”förlängd behandling” kan förekomma r/t PK-INR och levervärden.
Biverkningar: illamående, flush, klåda, urtikaria. Allvarliga allergiska biverkningar av acetylcystein såsom angioödem, bronkospasm och hypotension kan förekomma. Den inledande behandlingen (startdos) kan ge perifert vasodilaterande effekt som behandlas med att infusionen tillfälligt avbrytes 30-60 minuter. OBS! Vid biverkningar (illamående, urtikaria, klåda vanligast) stäng tillfälligt av infusionen och ge antihistamin (t ex munsönderfallande desloratadin 10 mg eller intravenöst Tavegyl 2 mg). RING GIC.`
    },
    "Aciklovir": {
        "location": "Rött lkm-rum",
        "details": `Indikation: Virushämmande medel för systemiskt bruk.
Geavir = Aciklovir (dock olika spädning). Spädning nedan enligt FASS:
Upplösning till 25 mg/ml (stamlösning) Spädning till max 5 mg/ml
Tillsatsvatten för injektionsvätskor eller NaCl 9 mg/ml för inj. Minsta tillsats infusionsvätska
(NaCl 9 mg/ml)
1 x 250 mg 10 ml 50 ml (100 ml infusionspåse)
1 x 500 mg 20 ml 100 ml infusionspåse
För doser mellan 500 och 1000 mg måste 2 infusionspåsar användas.
Varje dos av den utspädda stamlösningen (5 mg/ml) bör administreras i form av långsam intravenös infusion under loppet av 1 timme. Administrering bör ske via separat kanyl. Alternativt kan den koncentrerade lösningen (stamlösningen) innehållande 25 mg/ml (se nedan) tillföras direkt intravenöst under loppet av 1 timme med hjälp av en hastighetskontrollerad infusionspump.`
    },
    "Actilyse": {
        "location": "Rött lkm-rum",
        "details": `Indikation: Trombolytisk behandling vid akut hjärtinfarkt, lungemboli och ischemisk stroke.
Dosering: Alteplas (Actilyse) ges i dosen 0,9 mg/kg, maxdos 90 mg. Blandas till koncentrationen 1 mg/ml.
Tio procent av dosen ges iv under 1-2 min (på röntgenbordet efter muntligt besked om DT-svaret från radiologen!), resten ges som infusion under 60 min. Notera tidpunkterna för injektion och infusionen. Följ puls, blodtryck och kroppstemperatur (särskilda riktlinjer rörande övervakning gäller).
Späds med tillhörande vätska: 20 mg resp. 50 mg späds med 20 ml resp. 50 ml till styrkan 1 mg/ml. 1. Överföringskanyl i vätska 2. Pulver i kanyl. 3. Vänd. 4. Skaka försiktigt blandningen.
Actilyse ska ges så tidigt som möjligt efter symtomdebut.
FASS anger olika dosscheman beroende på indikation och vikt.`
    },
    // Lägg till fler läkemedel här på samma sätt
};

// Funktion för att fylla listan med läkemedel
function populateMedicationList() {
    const medicationList = document.getElementById('medication-list');
    medicationList.innerHTML = '';
    for (let medication in medications) {
        let listItem = document.createElement('li');
        listItem.textContent = medication;
        listItem.onclick = function() {
            showMedicationInstructions(medication);
        };
        medicationList.appendChild(listItem);
    }
}

// Funktion för att visa anvisningar för valt läkemedel
function showMedicationInstructions(medication) {
    const resultDiv = document.getElementById('result');
    const details = medications[medication];
    resultDiv.innerHTML = `<h2>${medication}</h2>
                           <p><strong>Lokalisation:</strong> ${details.location}</p>
                           <p>${details.details}</p>`;
}

// Funktion för att filtrera läkemedelslistan baserat på sökinput
function filterMedications() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const medicationList = document.getElementById('medication-list');
    const listItems = medicationList.getElementsByTagName('li');

    for (let i = 0; i < listItems.length; i++) {
        let listItem = listItems[i];
        if (listItem.textContent.toLowerCase().includes(searchInput)) {
            listItem.style.display = '';
        } else {
            listItem.style.display = 'none';
        }
    }
}

// Initialiserar läkemedelslistan när sidan laddas
window.onload = populateMedicationList;
