document.addEventListener('DOMContentLoaded', (event) => {
    const medications = [
        { name: "Acetylcystein (inh/inj 200 mg/ml) => Rött lkm-rum", details: "Indikation: Mukusreglerande vid inhalation samt antidot till paracetamol. Som antidot: Dos och hastighet ordineras av läkare, baserat på patientens vikt. Som antidot kan Acetylcystein ges peroralt men orsakar relativt ofta kräkningar varför intravenös tillförsel rekommenderas i första hand. Enligt Giftinfo (överdos av icke-depotpreparat): Dos 1: Intravenöst ges först 200 mg/kg i 500 ml glukos 50 mg/ml eller isoton NaCl under 4 timmar (50 mg/kg/timme). Dos 2: 6,25 mg/kg/timme under 16 timmar eller längre, se nedan (praktiskt är att 75 mg/kg löses i 500 ml och ges under varje 12-timmarsperiod). Eventuellt ”förlängd behandling” kan förekomma r/t PK-INR och levervärden. Biverkningar: illamående, flush, klåda, urtikaria. Allvarliga allergiska biverkningar av acetylcystein såsom angioödem, bronkospasm och hypotension kan förekomma. Den inledande behandlingen (startdos) kan ge perifert vasodilaterande effekt som behandlas med att infusionen tillfälligt avbrytes 30-60 minuter. OBS! Vid biverkningar (illamående, urtikaria, klåda vanligast) stäng tillfälligt av infusionen och ge antihistamin (t ex munsönderfallande desloratadin 10 mg eller intravenöst Tavegyl 2 mg). RING GIC." },
        { name: "Aciklovir 25 mg/ml (20 ml = 500 mg) => Rött lkm-rum", details: "Indikation: Virushämmande medel för systemiskt bruk. Geavir = Aciklovir (dock olika spädning). Spädning nedan enligt FASS: Upplösning till 25 mg/ml (stamlösning) Spädning till max 5 mg/ml Tillsatsvatten för injektionsvätskor eller NaCl 9 mg/ml för inj. Minsta tillsats infusionsvätska (NaCl 9 mg/ml) 1 x 250 mg 10 ml 50 ml (100 ml infusionspåse) 1 x 500 mg 20 ml 100 ml infusionspåse För doser mellan 500 och 1000 mg måste 2 infusionspåsar användas. Varje dos av den utspädda stamlösningen (5 mg/ml) bör administreras i form av långsam intravenös infusion under loppet av 1 timme. Administrering bör ske via separat kanyl. Alternativt kan den koncentrerade lösningen (stamlösningen) innehållande 25 mg/ml (se nedan) tillföras direkt intravenöst under loppet av 1 timme med hjälp av en hastighetskontrollerad infusionspump." },
        {name: "Actilyse (alteplas) 50 mg => Rött lkm-rum ........................................................................ 7", details: "" },
    { name: "Adenosin 5 mg/ml (2 ml) => Rött lkm-rum ....................................................................... 8", details: "Adrenalin 0,1 mg/ml (förfyllda sprutor) eller 1 mg/ml ..................................................... 8" },
    { name: "Akineton inj 5 mg/ml (1 ml) => Grönt lkm-rum ................................................................ 9", details: "Albumin (Alburex) 200 g/liter (100 ml) Rött/Gult lkm-rum .............................................. 9" },
    { name: "Alfentalin 0,5 mg/ml (2 ml) => Gult lkm-rum .................................................................... 9", details: "Amiodarone 50 mg/ml (3 ml) ......................................................................................... 10" },
    { name: "Anticholium inj-vätska 0,4 mg/ml (5 ml) => Gult lkm-rum (antidothyllan) ..................... 10", details: "" },
    { name: "Arixtra 2,5 mg/0,5 ml (förfylld spruta) => Rött lkm-rum ................................................. 10", details: "" },
    { name: "Atorvastatin 80 mg tabl => Rött lkm-rum ....................................................................... 11", details: "Atropin 0,5 mg/ml (1 ml alt. 20 ml) (OBS! 20 ml endast i Rött lkm-rum) ........................ 11" },
    { name: "Atropinsulfat 10 mg/ml => Gult lkm-rum (antidothyllan) ............................................... 11", details: "" },
    { name: "Berinert 500 IE (pulver + vätska) => Gult lkm-rum (antidothyllan) ................................. 11", details: "Betapred (betametason) 0,5 mg/tabl ............................................................................. 12 Betapred (betametason) 4 mg/ml .................................................................................. 12" },
    { name: "Bricanyl (terbutalin) (0,5 mg/ml) => Rött lkm-rum ......................................................... 12", details: "" },
    { name: "Brinavess 500 mg/25 ml (25 ml) => Rött lkm-rum .......................................................... 12", details: "" },
    { name: "Buccolam 10 mg => Grönt/ Rött lkm-rum....................................................................... 13", details: "" },
    { name: "Budesonid (inhalation) => Rött lkm-rum ........................................................................ 14", details: "" },
    { name: "Burinex 0,5 mg/ml (4 ml) => Finns ej på Akuten ............................................................. 14", details: "" },
    { name: "Calcium (Calciumgluconat) (10 ml) => Rött lkm-rum ...................................................... 14", details: "" },
    { name: "Carbomix 50 g => Rött lkm-rum ...................................................................................... 15", details: "" },
    { name: "Catepresan 150 mikrogram/ml (1 ml) => Finns i Trombolysvagnen, ej på Akuten .......... 15", details: "" },
    { name: "Celeston 5,7 mg/ml (1 ml) => Grönt/Gult lkm-rum ........................................................ 16", details: "" },
    { name: "Celocurin 50 mg/ml (2 ml) => Finns på IVA, ej på Akuten ............................................... 16", details: "" },
    { name: "Confidex 500 IE + 20 ml => Finns på IVA, ej på Akuten ................................................... 16", details: "Cordarone (se Amiodarone) ........................................................................................... 16" },
    { name: "Cyanokit 5 g + 200 ml NaCl => Gult lkm-rum (antidothyllan) .......................................... 17", details: "Cyklokapron (se Tranexamsyra) ..................................................................................... 17" },
    { name: "Desentol (oral lösning) => Gult lkm-rum (antidothyllan) ................................................ 17", details: "" },
    { name: "Desferal 500 mg pulver => Gult lkm-rum (antidothyllan) ............................................... 18", details: "Desloratadin tabl 5 mg ................................................................................................... 18 Diazepam 5 mg/ml (2 ml) ............................................................................................... 18" },
    { name: "Digifab 40 mg per ampull => Gult lkm-rum (kylvara) ...................................................... 19", details: "" },
    { name: "Digoxin 0,25 mg (1 ml) => Rött lkm-rum ......................................................................... 19", details: "Diklofenak inj vätska 25 mg/ml (3 ml) ............................................................................ 20" },
    { name: "Dimaval 50 mg/ml (5 ml) => Gult lkm-rum (antidothyllan) ............................................. 20", details: "DiTeeBooster (kylvara) ................................................................................................... 20" },
    { name: "Dobutamin (dopamin) => Rött lkm-rum ......................................................................... 21", details: "3  Efedrin 50 mg/ml (1 ml) Rött lkm-rum ........................................................................... 21 Emla kräm 25mg/g + 25mg/g ......................................................................................... 21" },
    { name: "Ergenyl (valproinsyra) 400 mg/förp + 4 ml (pulver+vätska) => Rött lkm-rum ................. 22", details: "Esketamin (se Ketanest) ................................................................................................. 22" },
    { name: "Esmeron 10 mg/ml (se Rokuronium) => Finns på IVA, ej på Akuten ............................... 22", details: "Esomeprazol 40 mg/ml ................................................................................................... 22" },
    { name: "Fentanyl 50 µg/ml (2 ml) => Rött lkm-rum ..................................................................... 22", details: "" },
    { name: "Firazyr 30 mg (förfylld spruta) => Rött lkm-rum ............................................................. 22", details: "Flumazenil 0,1 mg/ml (5 ml) ........................................................................................... 23 Fysostigmin (se Anticholium).......................................................................................... 23 Geavir 500 mg (se Aciklovir) ........................................................................................... 23 Gensomycin 40 mg/ml (2 ml) ......................................................................................... 23 Giludop (se Dobutamin) ................................................................................................. 23" },
    { name: "Glukos 500 mg/ml (50%) => Rött lkm-rum ..................................................................... 23", details: "Glukos 300 mg/ml (30 %) (50 ml) ................................................................................... 24" },
    { name: "Glukos 100 mg/ml (10 %) => Rött lkm-rum .................................................................... 24", details: "Glucagon 1 mg ................................................................................................................ 24 Glytrin (glyceryltrinitrat) 0,4 mg/dos .............................................................................. 24" },
    { name: "Haldol (haloperidol) 5 mg/ml (1 ml) => Rött lkm-rum .................................................... 25", details: "Insulindropp vid hyperkalemi ......................................................................................... 25" },
    { name: "Isoprenalin => Rött lkm-rum ........................................................................................... 25", details: "" },
    { name: "Intralipid 200 mg/ml (100 ml) => Rött lkm-rum .............................................................. 26", details: "" },
    { name: "Kalinox, 50 % / 50 %, medicinsk gas => Finns på Barnakuten? ....................................... 26", details: "" },
    { name: "Kennacort 10 mg/ml (1 ml) => Finns ej på Akuten .......................................................... 27", details: "Keppra (se Levetiracetam) .............................................................................................. 27" },
    { name: "Ketalar (ketamin) 10 mg/ml => Finns ej på Akuten ......................................................... 27", details: "" },
    { name: "Ketanest (esketamin) 5 mg/ml (5 ml) resp. 25 mg/ml (2 ml) => Rött lkm-rum ............... 28", details: "Klonidin (se Catepresan) ................................................................................................. 28 Konakion 10 mg/ml (1 ml) .............................................................................................. 28" },
    { name: "Kontrastmedel (Positiv alt. Neutral) => Grönt/Gult lkm-rum .......................................... 28", details: "Lanexat (se Flumazenil) .................................................................................................. 28 Lederspan 20 mg/ml (1 ml) (se Trica) ............................................................................. 28" },
    { name: "Levetiracetam 100 mg/ml (5 ml) => Rött lkm-rum ......................................................... 29", details: "Lidokain 10 mg/ml .......................................................................................................... 29" },
    { name: "Livopan => Har utgått ..................................................................................................... 29", details: "Lustgas (se Kalinox) ........................................................................................................ 29 (Addex) Magnesium 1 mmol/ml ..................................................................................... 29 = Magnesio Sulfate S.A.L.F 2,5 g/10 ml = 1 mmol/ml ..................................................... 29" },
    { name: "Mannitol 150 mg/ml (500 ml) => Rött lkm-rum (vätskevagnen) ..................................... 30", details: "Matever (se Levetiracetam) ........................................................................................... 30" },
    { name: "Metalyse => Finns i Trombolysvagnen, ej på Akuten ...................................................... 30", details: "" },
    { name: "Metoprolol 1 mg/ml (5 ml) => Rött lkm-rum .................................................................. 31", details: "4" },
    { name: "Miacalcic => Finns på AVA, ej på Akuten ........................................................................ 31", details: "" },
    { name: "Midazolam (1 mg/ml) (5 ml) resp. 5 mg/ml (3 ml) => Rött lkm-rum ............................... 31", details: "" },
    { name: "Midazolam APL (3 mg/ml) (60 ml rektalgel) => Finns ej på Akuten ................................ 31", details: "" },
    { name: "MonoFer 100 mg/ml (5 ml) => Rött lkm-rum ................................................................. 32", details: "Morfin 10 mg/ml (1 ml) .................................................................................................. 32 Nafazolin-Lidokain Gult lkm-rum (ÖNH-hyllan) .............................................................. 32 Natriumbikarbonat 50 mg/ml (100 ml/flaska) ................................................................ 32" },
    { name: "=> Rött lkm-rum/ Gult lkm-rum (ÖNH-hyllan) ................................................................ 32", details: "" },
    { name: "Natriumklorid hyperton inhalation 30 mg/mL (3 %) => Finns ej på Akuten .................... 33", details: "" },
    { name: "Natriumklorid infusionslösning 30 mg/mL (3 %) => Finns ej på Akuten .......................... 33", details: "Naloxon (Nexodal) 0,4 mg/ml (1 ml) .............................................................................. 33 Nexium (se Esomeprazol) ............................................................................................... 33 Nitroglycerin (spray) (se Glytrin) .................................................................................... 33" },
    { name: "Nitroglycerin inj vätska 1 mg/ml (50 ml) => Finns på AVA, ej på Akuten ........................ 34", details: "" },
    { name: "Noradrenalin 1 mg/ml (4 ml) => Rött lkm-rum ............................................................... 34", details: "" },
    { name: "Ocplex 500 IE + 20 ml (pulver + lösning) => Rött lkm-rum .............................................. 35", details: "Octostim 15 μg/ml (2 ml) (kylvara) ................................................................................. 35" },
    { name: "Olanzapin (Zyprexa) 10 mg (pulver till inj vätska) => Gult lkm-rum (antidothyllan) ........ 36", details: "Ondasetron 2 mg/ml ...................................................................................................... 36" },
    { name: "OxyNorm oral lösning 1 mg/ml => Gult lkm-rum ............................................................ 36", details: "" },
    { name: "OxyNorm (oxykodon) inj vätska 10 mg/ml => Finns på AVA, ej på Akuten ..................... 36", details: "" },
    { name: "Palladon (2 mg/ml) (1 ml) => Grönt/Gult lkm-rum ......................................................... 37", details: "" },
    { name: "Pentocur / Pentothal / Tiopental => Finns på IVA, ej på Akuten ..................................... 37", details: "Pilexam 100 mg/ml (se Tranexamsyra) ........................................................................... 37" },
    { name: "Praxbind (2,5 g/50 ml) => Rött lkm-rum (kylvara) .......................................................... 38", details: "" },
    { name: "Primperan 5 mg/ml (2 ml) => Gult / Grönt lkm-rum ....................................................... 38", details: "" },
    { name: "Pro-Epanutin 75 mg/ml (10 ml) => Rött lkm-rum (kylvara) ............................................. 38", details: "" },
    { name: "Propofol 10 mg/ml (20 ml) => Rött/Gult lkm-rum .......................................................... 39", details: "Pulmicort (inhalation) (se Budenosid) ............................................................................ 39 Rapifen (se Alfentanil) .................................................................................................... 39" },
    { name: "Rapydan 70 mg/70 mg  => Finns ej på Akuten ................................................................ 40", details: "" },
    { name: "Robinul 0,2 mg/ml => Finns på AVA och IVA, ej på Akuten ............................................. 40", details: "" },
    { name: "Rokuronium 10 mg/ml => Finns på IVA, ej på Akuten .................................................... 40", details: "" },
    { name: "Ropivacain 2 mg/ml (10 ml) => Rött lkm-rum ................................................................. 40", details: "" },
    { name: "Seloken 1 mg/ml (5 ml) (se Metoprolol) => Rött lkm-rum .............................................. 40", details: "Solu-Cortef 100 mg (pulver + vätska) ............................................................................. 41 Solu-Medrol 1 g (pulver 1 g + vätska 15,6 ml) ................................................................ 41" },
    { name: "Spasmofen => Produceras inte längre ............................................................................ 41", details: "Statraxen 100 mg/ml (se Tranexamsyra) ........................................................................ 41 Stesolid 5 mg/ml (2 ml) (se Diazepam) ........................................................................... 41" },
    { name: "Succinylkolin (se Celocurin) => Finns på IVA, ej på Akuten ............................................. 41", details: "Tapin 25 mg/g + 25 mg/g ............................................................................................... 41 5  Tiamin ............................................................................................................................ 42" },
    { name: "Tavegyl 1 mg/ml (2 ml) => Finns ej på Akuten ................................................................ 42", details: "" },
    { name: "Teofyllamin 23 mg/ml (10 ml) => Rött lkm-rum ............................................................. 42", details: "" },
    { name: "Trandate (labetalol) 5 mg/ml (20 ml) => Rött lkm-rum................................................... 43", details: "Tranexamsyra 100 mg/ml (10 ml) .................................................................................. 43" },
    { name: "Tribonat (100 ml) => Rött lkm-rum ................................................................................. 44", details: "" },
    { name: "Trica 20 mg/ml => Grönt/Gult lkm-rum .......................................................................... 44", details: "Valproinsyra (se Ergenyl) ................................................................................................ 44" },
    { name: "Vancomycin => Finns på AVA, ej på Akuten .................................................................... 44", details: "" },
    { name: "ViperaTAb / Viperfav => Gult lkm-rum (antidothyllan) ................................................... 44", details: "Voltaren inj vätska (se Diklofenak) ................................................................................. 45 Xylocain 10 mg/ml .......................................................................................................... 45" },
    { name: "Xylocard 20 mg/ml (lidokain) => Rött lkm-rum ............................................................... 45", details: "Zyprexa (se Olanzapin) ................................................................................................... 45 Bilaga 1: Antibiotika på Akuten ...................................................................................... 46 Bilaga 2: Inhalationer ..................................................................................................... 47 Bilaga 3: Läkemedelsbehandling vid hjärtstopp ............................................................. 48 Referenser ...................................................................................................................... 48                       6" },
    { name: "Acetylcystein (inh/inj 200 mg/ml) => Rött lkm-rum", details: "Indikation: Mukusreglerande vid inhalation samt antidot till paracetamol. Som antidot: Dos och hastighet ordineras av läkare, baserat på patientens vikt. Som antidot kan Acetylcystein ges peroralt men orsakar relativt ofta kräkningar varför intravenös tillförsel rekommenderas i första hand. Enligt Giftinfo (överdos av icke-depotpreparat): - Dos 1: Intravenöst ges först 200 mg/kg i 500 ml glukos 50 mg/ml eller isoton NaCl under 4 timmar (50 mg/kg/timme). - Dos 2: 6,25 mg/kg/timme under 16 timmar eller längre, se nedan (praktiskt är att 75 mg/kg löses i 500 ml och ges under varje 12-timmarsperiod). - Eventuellt ”förlängd behandling” kan förekomma r/t PK-INR och levervärden.  Biverkningar: illamående, flush, klåda, urtikaria. Allvarliga allergiska biverkningar av acetylcystein såsom angioödem, bronkospasm och hypotension kan förekomma. Den inledande behandlingen (startdos) kan ge perifert vasodilaterande effekt som behandlas med att infusionen tillfälligt avbrytes 30-60 minuter. OBS! Vid biverkningar (illamående, urtikaria, klåda vanligast) stäng tillfälligt av infusionen och ge antihistamin (t ex munsönderfallande desloratadin 10 mg eller intravenöst Tavegyl 2 mg). RING GIC.         7" },
    { name: "Aciklovir 25 mg/ml (20 ml = 500 mg) => Rött lkm-rum", details: "Indikation: Virushämmande medel för systemiskt bruk. Geavir = Aciklovir (dock olika spädning). Spädning nedan enligt FASS:  Upplösning till 25 mg/ml (stamlösning) Spädning till max 5 mg/ml  Tillsatsvatten för injektionsvätskor e
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
