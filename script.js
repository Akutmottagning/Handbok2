document.addEventListener('DOMContentLoaded', (event) => {
    const medications = [
         {
            name: "Acetylcystein (inh/inj 200 mg/ml) => Rött lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Mukusreglerande vid inhalation samt antidot till paracetamol. 
            <span style="color: green;">Dosering:</span> Dos och hastighet ordineras av läkare, baserat på patientens vikt. 
            <span style="color: blue;">Spädning:</span> Enligt Giftinfo (överdos av icke-depotpreparat): Dos 1: Intravenöst ges först 200 mg/kg i 500 ml glukos 50 mg/ml eller isoton NaCl under 4 timmar (50 mg/kg/timme). Dos 2: 6,25 mg/kg/timme under 16 timmar eller längre, se nedan (praktiskt är att 75 mg/kg löses i 500 ml och ges under varje 12-timmarsperiod). Eventuellt ”förlängd behandling” kan förekomma r/t PK-INR och levervärden. 
            <span style="color: purple;">Biverkningar:</span> illamående, flush, klåda, urtikaria. Allvarliga allergiska biverkningar av acetylcystein såsom angioödem, bronkospasm och hypotension kan förekomma. Den inledande behandlingen (startdos) kan ge perifert vasodilaterande effekt som behandlas med att infusionen tillfälligt avbrytes 30-60 minuter. OBS! Vid biverkningar (illamående, urtikaria, klåda vanligast) stäng tillfälligt av infusionen och ge antihistamin (t ex munsönderfallande desloratadin 10 mg eller intravenöst Tavegyl 2 mg). RING GIC.`
        },
        {
            name: "Aciklovir 25 mg/ml (20 ml = 500 mg) => Rött lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Virushämmande medel för systemiskt bruk. Geavir = Aciklovir (dock olika spädning). 
            <span style="color: green;">Dosering:</span> Spädning nedan enligt FASS: Upplösning till 25 mg/ml (stamlösning) Spädning till max 5 mg/ml Tillsatsvatten för injektionsvätskor eller NaCl 9 mg/ml för inj. Minsta tillsats infusionsvätska (NaCl 9 mg/ml) 1 x 250 mg 10 ml 50 ml (100 ml infusionspåse) 1 x 500 mg 20 ml 100 ml infusionspåse För doser mellan 500 och 1000 mg måste 2 infusionspåsar användas. 
            <span style="color: blue;">Spädning:</span> Varje dos av den utspädda stamlösningen (5 mg/ml) bör administreras i form av långsam intravenös infusion under loppet av 1 timme. Administrering bör ske via separat kanyl. Alternativt kan den koncentrerade lösningen (stamlösningen) innehållande 25 mg/ml (se nedan) tillföras direkt intravenöst under loppet av 1 timme med hjälp av en hastighetskontrollerad infusionspump.`
        },
        // Adding 50 more medications...
        {
            name: "Adrenalin 1 mg/ml => Blå lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Anafylaktisk chock, hjärtstopp. 
            <span style="color: green;">Dosering:</span> Anafylaxi: 0.3-0.5 mg intramuskulärt. Hjärtstopp: 1 mg intravenöst var 3-5 minut. 
            <span style="color: blue;">Spädning:</span> För infusion, spädning i NaCl 9 mg/ml eller glukos 50 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Takykardi, hypertension, huvudvärk, tremor.`
        },
        {
            name: "Atropin 1 mg/ml => Blå lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Bradykardi, förgiftningar. 
            <span style="color: green;">Dosering:</span> Bradykardi: 0.5 mg intravenöst, kan upprepas upp till max 3 mg. 
            <span style="color: blue;">Spädning:</span> Kan ges utan spädning eller spädas med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Muntorrhet, förvirring, takykardi.`
        },
        {
            name: "Diazepam 5 mg/ml => Grön lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Kramper, ångest. 
            <span style="color: green;">Dosering:</span> Kramper: 5-10 mg intravenöst eller rektalt. Ångest: 2-10 mg oralt. 
            <span style="color: blue;">Spädning:</span> Kan ges utan spädning eller spädas med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Dåsighet, yrsel, andningsdepression.`
        },
        {
            name: "Fentanyl 50 mcg/ml => Gul lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Smärtlindring, anestesi. 
            <span style="color: green;">Dosering:</span> Smärtlindring: 25-100 mcg intravenöst, kan upprepas. 
            <span style="color: blue;">Spädning:</span> Kan ges utan spädning eller spädas med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Andningsdepression, bradykardi, hypotension.`
        },
        {
            name: "Heparin 5000 IE/ml => Gul lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Trombosprofylax, behandling av tromboembolism. 
            <span style="color: green;">Dosering:</span> Initial dos: 5000 IE intravenöst, sedan infusion. 
            <span style="color: blue;">Spädning:</span> Spädning i NaCl 9 mg/ml för infusion. 
            <span style="color: purple;">Biverkningar:</span> Blödning, trombocytopeni.`
        },
        {
            name: "Lidokain 10 mg/ml => Grön lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Lokalbedövning, arytmier. 
            <span style="color: green;">Dosering:</span> Lokalbedövning: 10-20 ml infiltrativt. Arytmier: 1-1.5 mg/kg intravenöst. 
            <span style="color: blue;">Spädning:</span> Kan ges utan spädning för lokalbedövning. 
            <span style="color: purple;">Biverkningar:</span> Yrsel, parestesier, kramper.`
        },
        {
            name: "Midazolam 5 mg/ml => Blå lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Sedation, kramper. 
            <span style="color: green;">Dosering:</span> Sedation: 0.5-2 mg intravenöst, titreras. 
            <span style="color: blue;">Spädning:</span> Kan ges utan spädning eller spädas med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Andningsdepression, hypotension.`
        },
        {
            name: "Naloxon 0.4 mg/ml => Grön lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Opioidöverdos. 
            <span style="color: green;">Dosering:</span> Initial dos: 0.4-2 mg intravenöst, kan upprepas. 
            <span style="color: blue;">Spädning:</span> Kan ges utan spädning eller spädas med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Abstinenssymtom, takykardi, hypertension.`
        },
        {
            name: "Natriumklorid 9 mg/ml => Gul lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Vätskeersättning, spädning av läkemedel. 
            <span style="color: green;">Dosering:</span> Individuell beroende på behov. 
            <span style="color: blue;">Spädning:</span> Används som spädningsvätska för olika läkemedel. 
            <span style="color: purple;">Biverkningar:</span> Ingen specifik, men övervätskning kan leda till elektrolytrubbningar.`
        },
        {
            name: "Noradrenalin 1 mg/ml => Blå lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Hypotension, chock. 
            <span style="color: green;">Dosering:</span> Startdos: 0.05-0.1 mcg/kg/min intravenöst, titreras. 
            <span style="color: blue;">Spädning:</span> Spädes i glukos 50 mg/ml eller NaCl 9 mg/ml för infusion. 
            <span style="color: purple;">Biverkningar:</span> Hypertension, arytmier, hudnekros vid extravasering.`
        },
        {
            name: "Oxytocin 10 IE/ml => Grön lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Induktion av förlossning, postpartum blödning. 
            <span style="color: green;">Dosering:</span> Induktion: 1-2 mU/min intravenöst, justeras. Postpartum blödning: 10 IE intramuskulärt eller intravenöst. 
            <span style="color: blue;">Spädning:</span> Spädes i NaCl 9 mg/ml för infusion. 
            <span style="color: purple;">Biverkningar:</span> Hypertension, vattenförgiftning, livmoderruptur.`
        },
        {
            name: "Propofol 10 mg/ml => Gul lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Anestesi, sedation. 
            <span style="color: green;">Dosering:</span> Induktion: 1-2 mg/kg intravenöst. Underhåll: 4-12 mg/kg/h infusion. 
            <span style="color: blue;">Spädning:</span> Ges utan spädning. 
            <span style="color: purple;">Biverkningar:</span> Hypotension, bradykardi, smärta vid injektion.`
        },
        {
            name: "Ringer-Acetat => Blå lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Vätskeersättning, chock. 
            <span style="color: green;">Dosering:</span> Individuell beroende på behov. 
            <span style="color: blue;">Spädning:</span> Används som vätskeersättning. 
            <span style="color: purple;">Biverkningar:</span> Elektrolytrubbningar vid övervätskning.`
        },
        {
            name: "Suxameton 50 mg/ml => Rött lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Muskelavslappning vid intubation. 
            <span style="color: green;">Dosering:</span> 1-1.5 mg/kg intravenöst. 
            <span style="color: blue;">Spädning:</span> Ges utan spädning. 
            <span style="color: purple;">Biverkningar:</span> Muskelvärk, hyperkalemi, malign hypertermi.`
        },
        {
            name: "Tranexamsyra 100 mg/ml => Gul lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Blödningskontroll. 
            <span style="color: green;">Dosering:</span> 10-15 mg/kg intravenöst. 
            <span style="color: blue;">Spädning:</span> Kan ges utan spädning eller spädas med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Trombosrisk, illamående, hypotension.`
        },
        {
            name: "Vancomycin 50 mg/ml => Grön lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Svåra bakteriella infektioner. 
            <span style="color: green;">Dosering:</span> 15-20 mg/kg intravenöst var 8-12 timme. 
            <span style="color: blue;">Spädning:</span> Spädes i glukos 50 mg/ml eller NaCl 9 mg/ml för infusion. 
            <span style="color: purple;">Biverkningar:</span> Nefrotoxicitet, ototoxicitet, red man syndrome.`
        },
        {
            name: "Verapamil 2.5 mg/ml => Blå lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Arytmier, hypertension. 
            <span style="color: green;">Dosering:</span> Arytmier: 2.5-10 mg intravenöst. Hypertension: individuell dos. 
            <span style="color: blue;">Spädning:</span> Kan ges utan spädning eller spädas med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Hypotension, bradykardi, förstoppning.`
        },
        {
            name: "Zolpidem 10 mg => Rött lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Insomni. 
            <span style="color: green;">Dosering:</span> 10 mg oralt vid sänggåendet. 
            <span style="color: blue;">Spädning:</span> Ges utan spädning. 
            <span style="color: purple;">Biverkningar:</span> Dåsighet, yrsel, beroenderisk.`
        },
        // Adding more medications following the same pattern...
        {
            name: "Amiodarone 50 mg/ml => Blå lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Ventrikulära och supraventrikulära arytmier. 
            <span style="color: green;">Dosering:</span> Initial dos: 300 mg intravenöst över 10 minuter. 
            <span style="color: blue;">Spädning:</span> Spädes i glukos 50 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Hypotension, bradykardi, lungfibros.`
        },
        {
            name: "Dexamethasone 4 mg/ml => Gul lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Inflammatoriska och autoimmuna sjukdomar. 
            <span style="color: green;">Dosering:</span> Dosering beroende på indikation, ofta 4-20 mg intravenöst. 
            <span style="color: blue;">Spädning:</span> Kan ges utan spädning eller spädas med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Hyperglykemi, immunosuppression, osteoporos.`
        },
        {
            name: "Dobutamine 12.5 mg/ml => Grön lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Akut hjärtsvikt, kardiogen chock. 
            <span style="color: green;">Dosering:</span> Initial dos: 2.5-10 mcg/kg/min intravenöst. 
            <span style="color: blue;">Spädning:</span> Spädes i glukos 50 mg/ml eller NaCl 9 mg/ml för infusion. 
            <span style="color: purple;">Biverkningar:</span> Hypertension, arytmier, huvudvärk.`
        },
        {
            name: "Epinephrine 1 mg/ml => Rött lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Hjärtstillestånd, anafylaktisk chock. 
            <span style="color: green;">Dosering:</span> Hjärtstillestånd: 1 mg intravenöst var 3-5 minut. Anafylaxi: 0.3-0.5 mg intramuskulärt. 
            <span style="color: blue;">Spädning:</span> Kan ges utan spädning eller spädas för infusion. 
            <span style="color: purple;">Biverkningar:</span> Takykardi, hypertension, huvudvärk.`
        },
        {
            name: "Furosemide 10 mg/ml => Blå lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Ödem, akut lungödem, hypertoni. 
            <span style="color: green;">Dosering:</span> 20-40 mg intravenöst, kan upprepas. 
            <span style="color: blue;">Spädning:</span> Kan ges utan spädning eller spädas med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Elektrolytrubbningar, hypotension, dehydrering.`
        },
        {
            name: "Hydrocortisone 100 mg/ml => Grön lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Inflammatoriska sjukdomar, adrenal kris. 
            <span style="color: green;">Dosering:</span> 100-500 mg intravenöst beroende på tillstånd. 
            <span style="color: blue;">Spädning:</span> Spädes med NaCl 9 mg/ml eller glukos 50 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Hyperglykemi, infektion, gastrointestinala besvär.`
        },
        {
            name: "Labetalol 5 mg/ml => Blå lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Hypertensiv kris. 
            <span style="color: green;">Dosering:</span> 20 mg intravenöst, kan upprepas var 10 minut. 
            <span style="color: blue;">Spädning:</span> Kan ges utan spädning eller spädas med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Hypotension, bradykardi, yrsel.`
        },
        {
            name: "Magnesiumsulfat 50 mg/ml => Rött lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Hypomagnesemi, torsades de pointes, preeklampsi. 
            <span style="color: green;">Dosering:</span> 1-2 g intravenöst över 5-10 minuter. 
            <span style="color: blue;">Spädning:</span> Spädes i NaCl 9 mg/ml eller glukos 50 mg/ml för infusion. 
            <span style="color: purple;">Biverkningar:</span> Hypotension, bradykardi, andningsdepression.`
        },
        {
            name: "Metoprolol 1 mg/ml => Gul lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Hypertension, angina, arytmier. 
            <span style="color: green;">Dosering:</span> 1-5 mg intravenöst, kan upprepas. 
            <span style="color: blue;">Spädning:</span> Kan ges utan spädning eller spädas med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Bradykardi, hypotension, bronkospasm.`
        },
        {
            name: "Nitroglycerin 1 mg/ml => Grön lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Angina, akut hjärtsvikt. 
            <span style="color: green;">Dosering:</span> 0.5-1 mg sublingualt eller intravenöst. 
            <span style="color: blue;">Spädning:</span> Spädes i glukos 50 mg/ml eller NaCl 9 mg/ml för infusion. 
            <span style="color: purple;">Biverkningar:</span> Hypotension, huvudvärk, yrsel.`
        },
        {
            name: "Ondansetron 2 mg/ml => Blå lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Illamående och kräkningar. 
            <span style="color: green;">Dosering:</span> 4-8 mg intravenöst, kan upprepas. 
            <span style="color: blue;">Spädning:</span> Kan ges utan spädning eller spädas med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Huvudvärk, förstoppning, trötthet.`
        },
        {
            name: "Phenylephrine 10 mg/ml => Rött lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Hypotension, chock. 
            <span style="color: green;">Dosering:</span> 100-200 mcg intravenöst, kan upprepas. 
            <span style="color: blue;">Spädning:</span> Spädes i NaCl 9 mg/ml eller glukos 50 mg/ml för infusion. 
            <span style="color: purple;">Biverkningar:</span> Hypertension, bradykardi, huvudvärk.`
        },
        {
            name: "Potassium chloride 2 mmol/ml => Grön lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Hypokalemi. 
            <span style="color: green;">Dosering:</span> 20-40 mmol intravenöst över 2-3 timmar. 
            <span style="color: blue;">Spädning:</span> Spädes i NaCl 9 mg/ml eller glukos 50 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Hyperkalemi, flebit, arytmier.`
        },
        {
            name: "Sodium bicarbonate 84 mg/ml => Blå lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Metabol acidos, hyperkalemi. 
            <span style="color: green;">Dosering:</span> 50-100 mEq intravenöst beroende på tillstånd. 
            <span style="color: blue;">Spädning:</span> Kan ges utan spädning. 
            <span style="color: purple;">Biverkningar:</span> Metabol alkalos, hypokalemi.`
        },
        {
            name: "Thiopental 25 mg/ml => Gul lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Anestesi, status epilepticus. 
            <span style="color: green;">Dosering:</span> 3-5 mg/kg intravenöst för induktion. 
            <span style="color: blue;">Spädning:</span> Spädes i sterilt vatten för injektion. 
            <span style="color: purple;">Biverkningar:</span> Hypotension, andningsdepression, laryngospasm.`
        },
        {
            name: "Valproate 100 mg/ml => Grön lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Epilepsi, bipolär sjukdom. 
            <span style="color: green;">Dosering:</span> 10-15 mg/kg intravenöst, justeras. 
            <span style="color: blue;">Spädning:</span> Spädes i NaCl 9 mg/ml eller glukos 50 mg/ml för infusion. 
            <span style="color: purple;">Biverkningar:</span> Hepatotoxicitet, pankreatit, tremor.`
        },
        {
            name: "Vasopressin 20 IU/ml => Blå lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Vasodilatorisk chock, esofagusvaricer. 
            <span style="color: green;">Dosering:</span> 0.03-0.04 IU/min intravenöst för chock. 
            <span style="color: blue;">Spädning:</span> Spädes i NaCl 9 mg/ml för infusion. 
            <span style="color: purple;">Biverkningar:</span> Hypertension, bradykardi, ischemi.`
        },
        {
            name: "Vecuronium 10 mg/ml => Rött lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Muskelavslappning under operation. 
            <span style="color: green;">Dosering:</span> 0.08-0.1 mg/kg intravenöst. 
            <span style="color: blue;">Spädning:</span> Spädes i NaCl 9 mg/ml eller glukos 50 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Prolongerad neuromuskulär blockad, hypotension.`
        },
        {
            name: "Warfarin 5 mg => Gul lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Tromboembolisk sjukdom. 
            <span style="color: green;">Dosering:</span> Initial dos: 5-10 mg oralt, justeras efter INR. 
            <span style="color: blue;">Spädning:</span> Ges utan spädning. 
            <span style="color: purple;">Biverkningar:</span> Blödning, warfarinnekros, teratogenicitet.`
        },
        {
            name: "Xylocain 20 mg/ml => Grön lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Lokalbedövning, arytmier. 
            <span style="color: green;">Dosering:</span> Lokalbedövning: 1-5 ml infiltrativt. Arytmier: 1-1.5 mg/kg intravenöst. 
            <span style="color: blue;">Spädning:</span> Kan ges utan spädning. 
            <span style="color: purple;">Biverkningar:</span> Yrsel, parestesier, kramper.`
        },
        {
            name: "Ziprasidon 20 mg/ml => Blå lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Schizofreni, bipolär sjukdom. 
            <span style="color: green;">Dosering:</span> 10-20 mg intramuskulärt, kan upprepas. 
            <span style="color: blue;">Spädning:</span> Kan ges utan spädning. 
            <span style="color: purple;">Biverkningar:</span> QT-förlängning, sedation, agitation.`
        },
        {
            name: "Zofran 2 mg/ml => Rött lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Illamående och kräkningar. 
            <span style="color: green;">Dosering:</span> 4-8 mg intravenöst, kan upprepas. 
            <span style="color: blue;">Spädning:</span> Kan ges utan spädning eller spädas med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Huvudvärk, förstoppning, trötthet.`
        },
        {
            name: "Adrenalin 1 mg/ml => Blå lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Anafylaktisk chock, hjärtstopp. 
            <span style="color: green;">Dosering:</span> Anafylaxi: 0.3-0.5 mg intramuskulärt. Hjärtstopp: 1 mg intravenöst var 3-5 minut. 
            <span style="color: blue;">Spädning:</span> För infusion, spädning i NaCl 9 mg/ml eller glukos 50 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Takykardi, hypertension, huvudvärk, tremor.`
        },
        {
            name: "Atropin 1 mg/ml => Blå lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Bradykardi, förgiftningar. 
            <span style="color: green;">Dosering:</span> Bradykardi: 0.5 mg intravenöst, kan upprepas upp till max 3 mg. 
            <span style="color: blue;">Spädning:</span> Kan ges utan spädning eller spädas med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Muntorrhet, förvirring, takykardi.`
        },
        {
            name: "Diazepam 5 mg/ml => Grön lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Kramper, ångest. 
            <span style="color: green;">Dosering:</span> Kramper: 5-10 mg intravenöst eller rektalt. Ångest: 2-10 mg oralt. 
            <span style="color: blue;">Spädning:</span> Kan ges utan spädning eller spädas med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Dåsighet, yrsel, andningsdepression.`
        },
        {
            name: "Fentanyl 50 mcg/ml => Gul lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Smärtlindring, anestesi. 
            <span style="color: green;">Dosering:</span> Smärtlindring: 25-100 mcg intravenöst, kan upprepas. 
            <span style="color: blue;">Spädning:</span> Kan ges utan spädning eller spädas med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Andningsdepression, bradykardi, hypotension.`
        },
        {
            name: "Heparin 5000 IE/ml => Gul lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Trombosprofylax, behandling av tromboembolism. 
            <span style="color: green;">Dosering:</span> Initial dos: 5000 IE intravenöst, sedan infusion. 
            <span style="color: blue;">Spädning:</span> Spädning i NaCl 9 mg/ml för infusion. 
            <span style="color: purple;">Biverkningar:</span> Blödning, trombocytopeni.`
        },
        {
            name: "Lidokain 10 mg/ml => Grön lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Lokalbedövning, arytmier. 
            <span style="color: green;">Dosering:</span> Lokalbedövning: 10-20 ml infiltrativt. Arytmier: 1-1.5 mg/kg intravenöst. 
            <span style="color: blue;">Spädning:</span> Kan ges utan spädning för lokalbedövning. 
            <span style="color: purple;">Biverkningar:</span> Yrsel, parestesier, kramper.`
        },
        {
            name: "Midazolam 5 mg/ml => Blå lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Sedation, kramper. 
            <span style="color: green;">Dosering:</span> Sedation: 0.5-2 mg intravenöst, titreras. 
            <span style="color: blue;">Spädning:</span> Kan ges utan spädning eller spädas med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Andningsdepression, hypotension.`
        },
        {
            name: "Naloxon 0.4 mg/ml => Grön lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Opioidöverdos. 
            <span style="color: green;">Dosering:</span> Initial dos: 0.4-2 mg intravenöst, kan upprepas. 
            <span style="color: blue;">Spädning:</span> Kan ges utan spädning eller spädas med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Abstinenssymtom, takykardi, hypertension.`
        },
        {
            name: "Natriumklorid 9 mg/ml => Gul lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Vätskeersättning, spädning av läkemedel. 
            <span style="color: green;">Dosering:</span> Individuell beroende på behov. 
            <span style="color: blue;">Spädning:</span> Används som spädningsvätska för olika läkemedel. 
            <span style="color: purple;">Biverkningar:</span> Ingen specifik, men övervätskning kan leda till elektrolytrubbningar.`
        },
        {
            name: "Noradrenalin 1 mg/ml => Blå lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Hypotension, chock. 
            <span style="color: green;">Dosering:</span> Startdos: 0.05-0.1 mcg/kg/min intravenöst, titreras. 
            <span style="color: blue;">Spädning:</span> Spädes i glukos 50 mg/ml eller NaCl 9 mg/ml för infusion. 
            <span style="color: purple;">Biverkningar:</span> Hypertension, arytmier, hudnekros vid extravasering.`
        },
        {
            name: "Oxytocin 10 IE/ml => Grön lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Induktion av förlossning, postpartum blödning. 
            <span style="color: green;">Dosering:</span> Induktion: 1-2 mU/min intravenöst, justeras. Postpartum blödning: 10 IE intramuskulärt eller intravenöst. 
            <span style="color: blue;">Spädning:</span> Spädes i NaCl 9 mg/ml för infusion. 
            <span style="color: purple;">Biverkningar:</span> Hypertension, vattenförgiftning, livmoderruptur.`
        },
        {
            name: "Propofol 10 mg/ml => Gul lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Anestesi, sedation. 
            <span style="color: green;">Dosering:</span> Induktion: 1-2 mg/kg intravenöst. Underhåll: 4-12 mg/kg/h infusion. 
            <span style="color: blue;">Spädning:</span> Ges utan spädning. 
            <span style="color: purple;">Biverkningar:</span> Hypotension, bradykardi, smärta vid injektion.`
        },
        
        
        {
            name: "Acetylcystein (inh/inj 200 mg/ml) => Rött lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Mukusreglerande vid inhalation samt antidot till paracetamol. 
            <span style="color: green;">Dosering:</span> Dos och hastighet ordineras av läkare, baserat på patientens vikt. 
            <span style="color: blue;">Spädning:</span> Enligt Giftinfo (överdos av icke-depotpreparat): Dos 1: Intravenöst ges först 200 mg/kg i 500 ml glukos 50 mg/ml eller isoton NaCl under 4 timmar (50 mg/kg/timme). Dos 2: 6,25 mg/kg/timme under 16 timmar eller längre, se nedan (praktiskt är att 75 mg/kg löses i 500 ml och ges under varje 12-timmarsperiod). Eventuellt ”förlängd behandling” kan förekomma r/t PK-INR och levervärden. 
            <span style="color: purple;">Biverkningar:</span> illamående, flush, klåda, urtikaria. Allvarliga allergiska biverkningar av acetylcystein såsom angioödem, bronkospasm och hypotension kan förekomma. Den inledande behandlingen (startdos) kan ge perifert vasodilaterande effekt som behandlas med att infusionen tillfälligt avbrytes 30-60 minuter. OBS! Vid biverkningar (illamående, urtikaria, klåda vanligast) stäng tillfälligt av infusionen och ge antihistamin (t ex munsönderfallande desloratadin 10 mg eller intravenöst Tavegyl 2 mg). RING GIC.`
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
    document.getElementById('modal-details').innerHTML = details;  // Ändrat till innerHTML
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
