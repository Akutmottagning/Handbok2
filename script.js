document.addEventListener('DOMContentLoaded', (event) => {
    const medications = [
        { name: "Acetylcystein (inh/inj 200 mg/ml) => Rött lkm-rum", details: "Indikation: Mukusreglerande vid inhalation samt antidot till paracetamol. Som antidot: Dos och hastighet ordineras av läkare, baserat på patientens vikt. Som antidot kan Acetylcystein ges peroralt men orsakar relativt ofta kräkningar varför intravenös tillförsel rekommenderas i första hand. Enligt Giftinfo (överdos av icke-depotpreparat): Dos 1: Intravenöst ges först 200 mg/kg i 500 ml glukos 50 mg/ml eller isoton NaCl under 4 timmar (50 mg/kg/timme). Dos 2: 6,25 mg/kg/timme under 16 timmar eller längre, se nedan (praktiskt är att 75 mg/kg löses i 500 ml och ges under varje 12-timmarsperiod). Eventuellt ”förlängd behandling” kan förekomma r/t PK-INR och levervärden. Biverkningar: illamående, flush, klåda, urtikaria. Allvarliga allergiska biverkningar av acetylcystein såsom angioödem, bronkospasm och hypotension kan förekomma. Den inledande behandlingen (startdos) kan ge perifert vasodilaterande effekt som behandlas med att infusionen tillfälligt avbrytes 30-60 minuter. OBS! Vid biverkningar (illamående, urtikaria, klåda vanligast) stäng tillfälligt av infusionen och ge antihistamin (t ex munsönderfallande desloratadin 10 mg eller intravenöst Tavegyl 2 mg). RING GIC." },
        { name: "Aciklovir 25 mg/ml (20 ml = 500 mg) => Rött lkm-rum", details: "Indikation: Virushämmande medel för systemiskt bruk. Geavir = Aciklovir (dock olika spädning). Spädning nedan enligt FASS: Upplösning till 25 mg/ml (stamlösning) Spädning till max 5 mg/ml Tillsatsvatten för injektionsvätskor eller NaCl 9 mg/ml för inj. Minsta tillsats infusionsvätska (NaCl 9 mg/ml) 1 x 250 mg 10 ml 50 ml (100 ml infusionspåse) 1 x 500 mg 20 ml 100 ml infusionspåse För doser mellan 500 och 1000 mg måste 2 infusionspåsar användas. Varje dos av den utspädda stamlösningen (5 mg/ml) bör administreras i form av långsam intravenös infusion under loppet av 1 timme. Administrering bör ske via separat kanyl. Alternativt kan den koncentrerade lösningen (stamlösningen) innehållande 25 mg/ml (se nedan) tillföras direkt intravenöst under loppet av 1 timme med hjälp av en hastighetskontrollerad infusionspump." },
               {
            name: "Actilyse (alteplas) 50 mg => Rött lkm-rum",
            details: "Indikation: Trombolytisk behandling vid akut hjärtinfarkt, lungemboli och ischemisk stroke. Dosering: Alteplas (Actilyse) ges i dosen 0,9 mg/kg, maxdos 90 mg. Blandas till koncentrationen 1 mg/ml. Tio procent av dosen ges iv under 1-2 min (på röntgenbordet efter muntligt besked om DT-svaret från radiologen!), resten ges som infusion under 60 min. Notera tidpunkterna för injektion och infusionen. Följ puls, blodtryck och kroppstemperatur (särskilda riktlinjer rörande övervakning gäller)."
        },
        {
            name: "Adenosin 5 mg/ml (2 ml) => Rött lkm-rum",
            details: "Indikation: Antiarytmika och diagnostikum. Avbrytande av paroxysmal supraventrikulär takykardi innefattande AV-noden. Ges vid arytmi. Ges endast i Akutrummet med uppkopplad defibrillator samt pågående dropp. Ges outspädd i.v; initialt 5 mg => upprepa 5mg eller enligt FASS, högre dos 10 mg => tredje dos 15 mg vb, Doser större än 15 mg krävs vanligtvis inte. Flusha med NaCl, 10 ml + 10 ml."
        },
        {
            name: "Adrenalin 0,1 mg/ml (förfyllda sprutor) eller 1 mg/ml",
            details: "Adrenalin är en katekolamin, som stimulerar det sympatiska nervsystemet varvid hjärtfrekvens, minutvolym och koronargenomblödning ökar. Bronkialmuskulaturen relaxeras och en avsvällning av bronkial-slemhinnan åstadkommes genom kärlkonstriktion."
        },
        {
            name: "Akineton inj 5 mg/ml (1 ml) => Grönt lkm-rum",
            details: "Parkinsonism. Medikamentellt betingade extrapyramidala symtom (akut dystoni och initial dyskinesi). Ges intramuskulärt eller långsamt intravenöst."
        },
        {
            name: "Albumin (Alburex) 200 g/liter (100 ml) Rött/Gult lkm-rum",
            details: "Blodsubstitut och plasmaproteiner. Ges vid återställande eller upprätthållande av cirkulerande blodvolym vid volymbrist och när användning av en kolloid är lämplig."
        },
        {
            name: "Alfentalin 0,5 mg/ml (2 ml) => Gult lkm-rum",
            details: "Ultrakortverkande opioid. Hanteras av erfaren anestesiolog. Indikation: Analgetikum vid korta eller medellånga kirurgiska ingrepp."
        },
        {
            name: "Amiodarone 50 mg/ml (3 ml)",
            details: "Retbarhetsnedsättande medel. Indikation: Ges vid symtomgivande hjärtarytmier inkl. symptomgivande ventrikulär och supraventrikulär takyarytmi, förmaksflimmer och förmaksfladder, AV-block, Wolff-Parkinson Whites syndrom, andra livshotande kammararytmier och kammarflimmer."
        },
        {
            name: "Anticholium inj-vätska 0,4 mg/ml (5 ml) => Gult lkm-rum (antidothyllan)",
            details: "Aktiv substans = fysostigmin. Indikation (enligt Giftinformationscentral): Fysostigmin (Anticholium) reverserar både centrala och perifera antikolinerga symtom."
        },
        {
            name: "Arixtra 2,5 mg/0,5 ml (förfylld spruta) => Rött lkm-rum",
            details: "Antitrombosmedel vid instabil angina eller icke ST-höjningsinfarkt (NSTEMI) för vilket akut invasiv behandling är inte aktuellt samt behandling av ST-höjningsinfarkt (STEMI) vid behandling av trombolytika som initialt inte ska erhålla någon repurfusionsbehandling."
        },
        {
            name: "Atorvastatin 80 mg tabl => Rött lkm-rum",
            details: "Som en del av AKS-behandling."
        },
        {
            name: "Atropin 0,5 mg/ml (1 ml alt. 20 ml) (OBS! 20 ml endast i Rött lkm-rum)",
            details: "Antikolinergikum, motverkar acetylkolin. Ges vid bradykardi, t.ex. AV-block. Ges även vid intubering. Atropin har kramplösande effekt på glatt muskulatur. Det hämmar motilitet och motverkar spastiska kontraktionstillstånd bland annat i gastrointestinalkanalen."
        },
        {
            name: "Atropinsulfat 10 mg/ml => Gult lkm-rum (antidothyllan)",
            details: "Obs! Högkoncentrerad atropin (10 mg/ml). Indikationer: Atropinsulfat används främst vid förgiftning med organiska fosforföreningar (exempelvis insekticider) och nervgaser."
        },
        {
            name: "Berinert 500 IE (pulver + vätska) => Rött lkm-rum",
            details: "Hereditärt angioödem typ I och II (HAE). Behandling av akuta anfall och prevention av anfall före ingrepp. OBS! Är ett dyrt läkemedel. Dosering; 20 IE/kg kroppsvikt. Lösningen ska administreras genom långsam i.v. injektion, kan också administreras genom infusion (4 ml/minut). Enligt Janusinfo: ”I svåra fall ges C1-INH-koncentrat (Berinert) långsamt iv. Dosering: 20 E/kg kroppsvikt (ofta räcker 500–1 000 E om om behandlingen sätts in i tid). Effekt efter 0,5–3 timmar (snabbare effekt i mukosan än i huden) och varar 3–5 dygn. Behandlingen upprepas vb. Patienter med återkommande svåra angioödem är ofta utrustade med C1-INH-koncentrat”. (Självadministrering sker då subkutant)"
        },
        {
            name: "Betapred (betametason) 0,5 mg/tabl",
            details: "Glukokortikoid. Verksam substans: betametason. Enligt Janusinfo: ”Kortison har ingen akut insättande effekt. Målsättningen med medicineringen är att blockera sena effekter av den allergiska reaktionen… Kortisonet har ingen effekt förrän efter ca 2 timmar…” Enligt Janusinfo: 6 år-vuxna => 10 tabletter (tuggas, sväljs hela eller löses i vatten). Enligt Läkemedelsboken vid allergi: 10 tabletter per os. OBS! Vid allergisk reaktion ges kortison i kombination med antihistamin vilket har snabbare effekt."
        },
        {
            name: "Betapred (betametason) 4 mg/ml",
            details: "Glukokortikoid. Ges vid astma, allergisk reaktion, transfusionsreaktion, pseudokropp, chock av olika genes, hjärnödem, steroidskydd. Status asthmaticus och allergiska reaktioner: 8 mg (2 ml) som långsam (1 min) intravenös injektion, kan upprepas var 4-6:e timme om det behövs."
        },
        {
            name: "Bricanyl (terbutalin) (0,5 mg/ml) => Rött lkm-rum",
            details: "Bronkvidgande medel vid akut astma, kronisk bronkit och bronkospasm. Dosering: Inhalation, spray eller intravenöst beroende på patientens tillstånd."
        },
        {
            name: "Brinavess 500 mg/25 ml (25 ml) => Rött lkm-rum",
            details: "Indikation: Återställande av normal sinusrytm vid förmaksflimmer. Ges som infusion."
        },
        {
            name: "Buccolam 10 mg => Grönt/ Rött lkm-rum",
            details: "Indikation: Akut behandling av långvariga, akut uppkomna konvulsiva anfall hos spädbarn, småbarn, barn och ungdomar (3 månader till < 18 år). Ges buccalt (i munslemhinnan)."
        },
        {
            name: "Budesonid (inhalation) => Rött lkm-rum",
            details: "Indikation: Inflammationshämmande medel vid astma och kronisk obstruktiv lungsjukdom (KOL)."
        },
        {
            name: "Burinex 0,5 mg/ml (4 ml) => Finns ej på Akuten",
            details: "Indikation: Loopdiuretikum för behandling av ödem vid hjärtsvikt och njursvikt."
        },
        {
            name: "Calcium (Calciumgluconat) (10 ml) => Rött lkm-rum",
            details: "Indikation: Behandling av hypokalcemi, hyperkalemi, magnesiumintoxikation och som kalciumkälla vid total parenteral nutrition (TPN)."
        },
        {
            name: "Carbomix 50 g => Rött lkm-rum",
            details: "Aktivt kol, används vid akut förgiftning för att förhindra absorption av giftet i mag-tarmkanalen."
        },
        {
            name: "Catepresan 150 mikrogram/ml (1 ml) => Finns i Trombolysvagnen, ej på Akuten",
            details: "Indikation: Ges vid hypertensiv kris. Sänker blodtrycket genom att stimulera alfa-2-receptorer i centrala nervsystemet."
        },
        {
            name: "Celeston 5,7 mg/ml (1 ml) => Grönt/Gult lkm-rum",
            details: "Glukokortikoid. Används vid allergiska reaktioner, astma och inflammatoriska tillstånd."
        },
        {
            name: "Celocurin 50 mg/ml (2 ml) => Finns på IVA, ej på Akuten",
            details: "Muskelavslappnande medel, används vid intubation och kirurgiska ingrepp."
        },
        {
            name: "Confidex 500 IE + 20 ml => Finns på IVA, ej på Akuten",
            details: "Blodprodukt, används för att behandla och förebygga blödning i samband med kirurgiska ingrepp eller trauma."
        },
        {
            name: "Cordarone (se Amiodarone)",
            details: "Antiarytmikum, används för att behandla allvarliga hjärtarytmier."
        },
        {
            name: "Cyanokit 5 g + 200 ml NaCl => Gult lkm-rum (antidothyllan)",
            details: "Antidot vid cyanidförgiftning. Ges som infusion."
        },
        {
            name: "Dantrolen, 20 mg pulver till injektionsvätska => Gult lkm-rum (antidothyllan)",
            details: "Muskelavslappnande medel, används vid malign hypertermi."
        },
        {
            name: "Cyklokapron (se Tranexamsyra)",
            details: "Antifibrinolytikum, används för att minska blödning."
        },
        {
            name: "Desentol (oral lösning) => Gult lkm-rum (antidothyllan)",
            details: "Används för behandling av förgiftningar."
        },
        {
            name: "Desferal 500 mg pulver => Gult lkm-rum (antidothyllan)",
            details: "Används för att behandla järnöverskott vid transfusionsberoende anemier."
        },
        {
            name: "Desloratadin tabl 5 mg",
            details: "Antihistamin, används för behandling av allergiska reaktioner."
        },
        {
            name: "Diazepam 5 mg/ml (2 ml)",
            details: "Anxiolytikum och antikonvulsivum, används för att behandla ångest och epileptiska anfall."
        },
        {
            name: "Digifab 40 mg per ampull => Gult lkm-rum (kylvara)",
            details: "Antidot för digoxin-förgiftning."
        },
        {
            name: "Digoxin 0,25 mg (1 ml) => Rött lkm-rum",
            details: "Kardioaktivt glykosid, används för att behandla hjärtsvikt och förmaksflimmer."
        },
        {
            name: "Diklofenak inj vätska 25 mg/ml (3 ml)",
            details: "NSAID, används för att behandla smärta och inflammation."
        },
        {
            name: "Dimaval 50 mg/ml (5 ml) => Gult lkm-rum (antidothyllan)",
            details: "Antidot vid tungmetallförgiftning."
        },
        {
            name: "DiTeeBooster (kylvara)",
            details: "Vaccin för difteri, tetanus och pertussis."
        },
        {
            name: "Dobutamin (dopamin) => Rött lkm-rum",
            details: "Inotropiskt medel, används för att behandla akut hjärtsvikt och chock."
        },
        {
            name: "Efedrin 50 mg/ml (1 ml) Rött lkm-rum",
            details: "Sympatomimetikum, används för att behandla hypotension."
        },
        {
            name: "Emla kräm 25mg/g + 25mg/g",
            details: "Lokalbedövning, används för att bedöva huden innan mindre ingrepp."
        } 
        
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
