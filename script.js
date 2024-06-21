const medications = {
    "paracetamol": "Paracetamol används för att lindra smärta och sänka feber. Ta 1-2 tabletter var 4-6 timme, men inte mer än 8 tabletter per dag.",
    "ibuprofen": "Ibuprofen är ett antiinflammatoriskt läkemedel som används för att behandla smärta och inflammation. Ta 1 tablett var 6-8 timme, men inte mer än 3 tabletter per dag.",
    "acetylsalicylsyra": "Acetylsalicylsyra används för att behandla smärta, feber och inflammation. Ta 1-2 tabletter var 4-6 timme, men inte mer än 8 tabletter per dag.",
    "diklofenak": "Diklofenak används för att behandla smärta och inflammation. Ta 1 tablett var 8-12 timme, men inte mer än 3 tabletter per dag.",
    "naproxen": "Naproxen används för att lindra smärta och inflammation. Ta 1 tablett var 8-12 timme, men inte mer än 2 tabletter per dag."
    // Lägg till fler läkemedel och anvisningar här
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
