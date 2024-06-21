const medications = {
    "Acetylcystein": "Indikation: Mukusreglerande vid inhalation samt antidot till paracetamol. Som antidot: Dos och hastighet ordineras av läkare baserat på patientens vikt. ...",
    "Aciklovir": "Indikation: Virushämmande medel för systemiskt bruk. Geavir = Aciklovir (dock olika spädning). Spädning nedan enligt FASS: ...",
    "Actilyse": "Indikation: Trombolytisk behandling vid akut hjärtinfarkt lungemboli och ischemisk stroke. Dosering: Alteplas (Actilyse) ges i dosen 09 mg/kg maxdos 90 mg. ...",
    "Adenosin": "Indikation: Antiarytmika och diagnostikum. Avbrytande av paroxysmal supraventrikulär takykardi innefattande AV-noden. Ges vid arytmi. ...",
    "Adrenalin": "Indikation: Katekolamin som stimulerar det sympatiska nervsystemet varvid hjärtfrekvens minutvolym och koronargenomblödning ökar. Bronkialmuskulaturen relaxeras och en avsvällning av bronkial-slemhinnan åstadkommes genom kärlkonstriktion. ...",
    // Lägg till fler läkemedel här
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
    resultDiv.textContent = medications[medication];
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
