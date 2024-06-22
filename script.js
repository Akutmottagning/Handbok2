document.addEventListener('DOMContentLoaded', (event) => {
    const medications = [
        { name: "Acetylcystein (inh/inj 200 mg/ml) => Rött lkm-rum", details: "Indikation: Mukusreglerande vid inhalation samt antidot till paracetamol. Som antidot: Dos och hastighet ordineras av läkare, baserat på patientens vikt. Som antidot kan Acetylcystein ges peroralt men orsakar relativt ofta kräkningar varför intravenös tillförsel rekommenderas i första hand. Enligt Giftinfo (överdos av icke-depotpreparat): Dos 1: Intravenöst ges först 200 mg/kg i 500 ml glukos 50 mg/ml eller isoton NaCl under 4 timmar (50 mg/kg/timme). Dos 2: 6,25 mg/kg/timme under 16 timmar eller längre, se nedan (praktiskt är att 75 mg/kg löses i 500 ml och ges under varje 12-timmarsperiod). Eventuellt ”förlängd behandling” kan förekomma r/t PK-INR och levervärden. Biverkningar: illamående, flush, klåda, urtikaria. Allvarliga allergiska biverkningar av acetylcystein såsom angioödem, bronkospasm och hypotension kan förekomma. Den inledande behandlingen (startdos) kan ge perifert vasodilaterande effekt som behandlas med att infusionen tillfälligt avbrytes 30-60 minuter. OBS! Vid biverkningar (illamående, urtikaria, klåda vanligast) stäng tillfälligt av infusionen och ge antihistamin (t ex munsönderfallande desloratadin 10 mg eller intravenöst Tavegyl 2 mg). RING GIC." },
        { name: "Aciklovir 25 mg/ml (20 ml = 500 mg) => Rött lkm-rum", details: "Indikation: Virushämmande medel för systemiskt bruk. Geavir = Aciklovir (dock olika spädning). Spädning nedan enligt FASS: Upplösning till 25 mg/ml (stamlösning) Spädning till max 5 mg/ml Tillsatsvatten för injektionsvätskor eller NaCl 9 mg/ml för inj. Minsta tillsats infusionsvätska (NaCl 9 mg/ml) 1 x 250 mg 10 ml 50 ml (100 ml infusionspåse) 1 x 500 mg 20 ml 100 ml infusionspåse För doser mellan 500 och 1000 mg måste 2 infusionspåsar användas. Varje dos av den utspädda stamlösningen (5 mg/ml) bör administreras i form av långsam intravenös infusion under loppet av 1 timme. Administrering bör ske via separat kanyl. Alternativt kan den koncentrerade lösningen (stamlösningen) innehållande 25 mg/ml (se nedan) tillföras direkt intravenöst under loppet av 1 timme med hjälp av en hastighetskontrollerad infusionspump." },
        // More medications...
    ];

    const medicationsList = document.getElementById('medications-list');

    medications.forEach(medication => {
        const li = document.createElement('li');
        li.textContent = medication.name;
        li.addEventListener('click', () => showModal(medication.name, medication.details));
        medicationsList.appendChild(li);
    });
});

function filterList() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const listItems = document.querySelectorAll('#medications-list li');

    listItems.forEach(item => {
        if (item.textContent.toLowerCase().includes(searchInput)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function showModal(title, details) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-details').textContent = details;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
