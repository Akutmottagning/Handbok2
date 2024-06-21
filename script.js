const medications = {
    "paracetamol": "Paracetamol används för att lindra smärta och sänka feber. Ta 1-2 tabletter var 4-6 timme, men inte mer än 8 tabletter per dag.",
    "ibuprofen": "Ibuprofen är ett antiinflammatoriskt läkemedel som används för att behandla smärta och inflammation. Ta 1 tablett var 6-8 timme, men inte mer än 3 tabletter per dag."
    // Lägg till fler läkemedel och anvisningar här
};

function searchMedication() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (medications[searchInput]) {
        resultDiv.textContent = medications[searchInput];
    } else {
        resultDiv.textContent = 'Läkemedel hittades inte.';
    }
}
