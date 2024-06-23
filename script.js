document.addEventListener('DOMContentLoaded', (event) => {
    const medications = [
         {
            name: "Acetylcystein (inh/inj 200 mg/ml) => RÃ¶tt lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Mukusreglerande vid inhalation samt antidot till paracetamol. 
            <span style="color: green;">Dosering:</span> Dos och hastighet ordineras av lÃ¤kare, baserat pÃ¥ patientens vikt. 
            <span style="color: blue;">SpÃ¤dning:</span> Enligt Giftinfo (Ã¶verdos av icke-depotpreparat): Dos 1: IntravenÃ¶st ges fÃ¶rst 200 mg/kg i 500 ml glukos 50 mg/ml eller isoton NaCl under 4 timmar (50 mg/kg/timme). Dos 2: 6,25 mg/kg/timme under 16 timmar eller lÃ¤ngre, se nedan (praktiskt Ã¤r att 75 mg/kg lÃ¶ses i 500 ml och ges under varje 12-timmarsperiod). Eventuellt â€fÃ¶rlÃ¤ngd behandlingâ€ kan fÃ¶rekomma r/t PK-INR och levervÃ¤rden. 
            <span style="color: purple;">Biverkningar:</span> illamÃ¥ende, flush, klÃ¥da, urtikaria. Allvarliga allergiska biverkningar av acetylcystein sÃ¥som angioÃ¶dem, bronkospasm och hypotension kan fÃ¶rekomma. Den inledande behandlingen (startdos) kan ge perifert vasodilaterande effekt som behandlas med att infusionen tillfÃ¤lligt avbrytes 30-60 minuter. OBS! Vid biverkningar (illamÃ¥ende, urtikaria, klÃ¥da vanligast) stÃ¤ng tillfÃ¤lligt av infusionen och ge antihistamin (t ex munsÃ¶nderfallande desloratadin 10 mg eller intravenÃ¶st Tavegyl 2 mg). RING GIC.`
        },
        {
            name: "Aciklovir 25 mg/ml (20 ml = 500 mg) => RÃ¶tt lkm-rum",
            details: `<span style="color: red;">Indikation:</span> VirushÃ¤mmande medel fÃ¶r systemiskt bruk. Geavir = Aciklovir (dock olika spÃ¤dning). 
            <span style="color: green;">Dosering:</span> SpÃ¤dning nedan enligt FASS: UpplÃ¶sning till 25 mg/ml (stamlÃ¶sning) SpÃ¤dning till max 5 mg/ml Tillsatsvatten fÃ¶r injektionsvÃ¤tskor eller NaCl 9 mg/ml fÃ¶r inj. Minsta tillsats infusionsvÃ¤tska (NaCl 9 mg/ml) 1 x 250 mg 10 ml 50 ml (100 ml infusionspÃ¥se) 1 x 500 mg 20 ml 100 ml infusionspÃ¥se FÃ¶r doser mellan 500 och 1000 mg mÃ¥ste 2 infusionspÃ¥sar anvÃ¤ndas. 
            <span style="color: blue;">SpÃ¤dning:</span> Varje dos av den utspÃ¤dda stamlÃ¶sningen (5 mg/ml) bÃ¶r administreras i form av lÃ¥ngsam intravenÃ¶s infusion under loppet av 1 timme. Administrering bÃ¶r ske via separat kanyl. Alternativt kan den koncentrerade lÃ¶sningen (stamlÃ¶sningen) innehÃ¥llande 25 mg/ml (se nedan) tillfÃ¶ras direkt intravenÃ¶st under loppet av 1 timme med hjÃ¤lp av en hastighetskontrollerad infusionspump.`
        },
        // Adding 50 more medications...
        {
            name: "Adrenalin 1 mg/ml => BlÃ¥ lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Anafylaktisk chock, hjÃ¤rtstopp. 
            <span style="color: green;">Dosering:</span> Anafylaxi: 0.3-0.5 mg intramuskulÃ¤rt. HjÃ¤rtstopp: 1 mg intravenÃ¶st var 3-5 minut. 
            <span style="color: blue;">SpÃ¤dning:</span> FÃ¶r infusion, spÃ¤dning i NaCl 9 mg/ml eller glukos 50 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Takykardi, hypertension, huvudvÃ¤rk, tremor.`
        },
        {
            name: "Atropin 1 mg/ml => BlÃ¥ lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Bradykardi, fÃ¶rgiftningar. 
            <span style="color: green;">Dosering:</span> Bradykardi: 0.5 mg intravenÃ¶st, kan upprepas upp till max 3 mg. 
            <span style="color: blue;">SpÃ¤dning:</span> Kan ges utan spÃ¤dning eller spÃ¤das med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Muntorrhet, fÃ¶rvirring, takykardi.`
        },
        {
            name: "Diazepam 5 mg/ml => GrÃ¶n lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Kramper, Ã¥ngest. 
            <span style="color: green;">Dosering:</span> Kramper: 5-10 mg intravenÃ¶st eller rektalt. Ã…ngest: 2-10 mg oralt. 
            <span style="color: blue;">SpÃ¤dning:</span> Kan ges utan spÃ¤dning eller spÃ¤das med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> DÃ¥sighet, yrsel, andningsdepression.`
        },
        {
            name: "Fentanyl 50 mcg/ml => Gul lkm-rum",
            details: `<span style="color: red;">Indikation:</span> SmÃ¤rtlindring, anestesi. 
            <span style="color: green;">Dosering:</span> SmÃ¤rtlindring: 25-100 mcg intravenÃ¶st, kan upprepas. 
            <span style="color: blue;">SpÃ¤dning:</span> Kan ges utan spÃ¤dning eller spÃ¤das med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Andningsdepression, bradykardi, hypotension.`
        },
        {
            name: "Heparin 5000 IE/ml => Gul lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Trombosprofylax, behandling av tromboembolism. 
            <span style="color: green;">Dosering:</span> Initial dos: 5000 IE intravenÃ¶st, sedan infusion. 
            <span style="color: blue;">SpÃ¤dning:</span> SpÃ¤dning i NaCl 9 mg/ml fÃ¶r infusion. 
            <span style="color: purple;">Biverkningar:</span> BlÃ¶dning, trombocytopeni.`
        },
        {
            name: "Lidokain 10 mg/ml => GrÃ¶n lkm-rum",
            details: `<span style="color: red;">Indikation:</span> LokalbedÃ¶vning, arytmier. 
            <span style="color: green;">Dosering:</span> LokalbedÃ¶vning: 10-20 ml infiltrativt. Arytmier: 1-1.5 mg/kg intravenÃ¶st. 
            <span style="color: blue;">SpÃ¤dning:</span> Kan ges utan spÃ¤dning fÃ¶r lokalbedÃ¶vning. 
            <span style="color: purple;">Biverkningar:</span> Yrsel, parestesier, kramper.`
        },
        {
            name: "Midazolam 5 mg/ml => BlÃ¥ lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Sedation, kramper. 
            <span style="color: green;">Dosering:</span> Sedation: 0.5-2 mg intravenÃ¶st, titreras. 
            <span style="color: blue;">SpÃ¤dning:</span> Kan ges utan spÃ¤dning eller spÃ¤das med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Andningsdepression, hypotension.`
        },
        {
            name: "Naloxon 0.4 mg/ml => GrÃ¶n lkm-rum",
            details: `<span style="color: red;">Indikation:</span> OpioidÃ¶verdos. 
            <span style="color: green;">Dosering:</span> Initial dos: 0.4-2 mg intravenÃ¶st, kan upprepas. 
            <span style="color: blue;">SpÃ¤dning:</span> Kan ges utan spÃ¤dning eller spÃ¤das med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Abstinenssymtom, takykardi, hypertension.`
        },
        {
            name: "Natriumklorid 9 mg/ml => Gul lkm-rum",
            details: `<span style="color: red;">Indikation:</span> VÃ¤tskeersÃ¤ttning, spÃ¤dning av lÃ¤kemedel. 
            <span style="color: green;">Dosering:</span> Individuell beroende pÃ¥ behov. 
            <span style="color: blue;">SpÃ¤dning:</span> AnvÃ¤nds som spÃ¤dningsvÃ¤tska fÃ¶r olika lÃ¤kemedel. 
            <span style="color: purple;">Biverkningar:</span> Ingen specifik, men Ã¶vervÃ¤tskning kan leda till elektrolytrubbningar.`
        },
        {
            name: "Noradrenalin 1 mg/ml => BlÃ¥ lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Hypotension, chock. 
            <span style="color: green;">Dosering:</span> Startdos: 0.05-0.1 mcg/kg/min intravenÃ¶st, titreras. 
            <span style="color: blue;">SpÃ¤dning:</span> SpÃ¤des i glukos 50 mg/ml eller NaCl 9 mg/ml fÃ¶r infusion. 
            <span style="color: purple;">Biverkningar:</span> Hypertension, arytmier, hudnekros vid extravasering.`
        },
        {
            name: "Oxytocin 10 IE/ml => GrÃ¶n lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Induktion av fÃ¶rlossning, postpartum blÃ¶dning. 
            <span style="color: green;">Dosering:</span> Induktion: 1-2 mU/min intravenÃ¶st, justeras. Postpartum blÃ¶dning: 10 IE intramuskulÃ¤rt eller intravenÃ¶st. 
            <span style="color: blue;">SpÃ¤dning:</span> SpÃ¤des i NaCl 9 mg/ml fÃ¶r infusion. 
            <span style="color: purple;">Biverkningar:</span> Hypertension, vattenfÃ¶rgiftning, livmoderruptur.`
        },
        {
            name: "Propofol 10 mg/ml => Gul lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Anestesi, sedation. 
            <span style="color: green;">Dosering:</span> Induktion: 1-2 mg/kg intravenÃ¶st. UnderhÃ¥ll: 4-12 mg/kg/h infusion. 
            <span style="color: blue;">SpÃ¤dning:</span> Ges utan spÃ¤dning. 
            <span style="color: purple;">Biverkningar:</span> Hypotension, bradykardi, smÃ¤rta vid injektion.`
        },
        {
            name: "Ringer-Acetat => BlÃ¥ lkm-rum",
            details: `<span style="color: red;">Indikation:</span> VÃ¤tskeersÃ¤ttning, chock. 
            <span style="color: green;">Dosering:</span> Individuell beroende pÃ¥ behov. 
            <span style="color: blue;">SpÃ¤dning:</span> AnvÃ¤nds som vÃ¤tskeersÃ¤ttning. 
            <span style="color: purple;">Biverkningar:</span> Elektrolytrubbningar vid Ã¶vervÃ¤tskning.`
        },
        {
            name: "Suxameton 50 mg/ml => RÃ¶tt lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Muskelavslappning vid intubation. 
            <span style="color: green;">Dosering:</span> 1-1.5 mg/kg intravenÃ¶st. 
            <span style="color: blue;">SpÃ¤dning:</span> Ges utan spÃ¤dning. 
            <span style="color: purple;">Biverkningar:</span> MuskelvÃ¤rk, hyperkalemi, malign hypertermi.`
        },
        {
            name: "Tranexamsyra 100 mg/ml => Gul lkm-rum",
            details: `<span style="color: red;">Indikation:</span> BlÃ¶dningskontroll. 
            <span style="color: green;">Dosering:</span> 10-15 mg/kg intravenÃ¶st. 
            <span style="color: blue;">SpÃ¤dning:</span> Kan ges utan spÃ¤dning eller spÃ¤das med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Trombosrisk, illamÃ¥ende, hypotension.`
        },
        {
            name: "Vancomycin 50 mg/ml => GrÃ¶n lkm-rum",
            details: `<span style="color: red;">Indikation:</span> SvÃ¥ra bakteriella infektioner. 
            <span style="color: green;">Dosering:</span> 15-20 mg/kg intravenÃ¶st var 8-12 timme. 
            <span style="color: blue;">SpÃ¤dning:</span> SpÃ¤des i glukos 50 mg/ml eller NaCl 9 mg/ml fÃ¶r infusion. 
            <span style="color: purple;">Biverkningar:</span> Nefrotoxicitet, ototoxicitet, red man syndrome.`
        },
        {
            name: "Verapamil 2.5 mg/ml => BlÃ¥ lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Arytmier, hypertension. 
            <span style="color: green;">Dosering:</span> Arytmier: 2.5-10 mg intravenÃ¶st. Hypertension: individuell dos. 
            <span style="color: blue;">SpÃ¤dning:</span> Kan ges utan spÃ¤dning eller spÃ¤das med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Hypotension, bradykardi, fÃ¶rstoppning.`
        },
        {
            name: "Zolpidem 10 mg => RÃ¶tt lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Insomni. 
            <span style="color: green;">Dosering:</span> 10 mg oralt vid sÃ¤nggÃ¥endet. 
            <span style="color: blue;">SpÃ¤dning:</span> Ges utan spÃ¤dning. 
            <span style="color: purple;">Biverkningar:</span> DÃ¥sighet, yrsel, beroenderisk.`
        },
        // Adding more medications following the same pattern...
        {
            name: "Amiodarone 50 mg/ml => BlÃ¥ lkm-rum",
            details: `<span style="color: red;">Indikation:</span> VentrikulÃ¤ra och supraventrikulÃ¤ra arytmier. 
            <span style="color: green;">Dosering:</span> Initial dos: 300 mg intravenÃ¶st Ã¶ver 10 minuter. 
            <span style="color: blue;">SpÃ¤dning:</span> SpÃ¤des i glukos 50 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Hypotension, bradykardi, lungfibros.`
        },
        {
            name: "Dexamethasone 4 mg/ml => Gul lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Inflammatoriska och autoimmuna sjukdomar. 
            <span style="color: green;">Dosering:</span> Dosering beroende pÃ¥ indikation, ofta 4-20 mg intravenÃ¶st. 
            <span style="color: blue;">SpÃ¤dning:</span> Kan ges utan spÃ¤dning eller spÃ¤das med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Hyperglykemi, immunosuppression, osteoporos.`
        },
        {
            name: "Dobutamine 12.5 mg/ml => GrÃ¶n lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Akut hjÃ¤rtsvikt, kardiogen chock. 
            <span style="color: green;">Dosering:</span> Initial dos: 2.5-10 mcg/kg/min intravenÃ¶st. 
            <span style="color: blue;">SpÃ¤dning:</span> SpÃ¤des i glukos 50 mg/ml eller NaCl 9 mg/ml fÃ¶r infusion. 
            <span style="color: purple;">Biverkningar:</span> Hypertension, arytmier, huvudvÃ¤rk.`
        },
        {
            name: "Epinephrine 1 mg/ml => RÃ¶tt lkm-rum",
            details: `<span style="color: red;">Indikation:</span> HjÃ¤rtstillestÃ¥nd, anafylaktisk chock. 
            <span style="color: green;">Dosering:</span> HjÃ¤rtstillestÃ¥nd: 1 mg intravenÃ¶st var 3-5 minut. Anafylaxi: 0.3-0.5 mg intramuskulÃ¤rt. 
            <span style="color: blue;">SpÃ¤dning:</span> Kan ges utan spÃ¤dning eller spÃ¤das fÃ¶r infusion. 
            <span style="color: purple;">Biverkningar:</span> Takykardi, hypertension, huvudvÃ¤rk.`
        },
        {
            name: "Furosemide 10 mg/ml => BlÃ¥ lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Ã–dem, akut lungÃ¶dem, hypertoni. 
            <span style="color: green;">Dosering:</span> 20-40 mg intravenÃ¶st, kan upprepas. 
            <span style="color: blue;">SpÃ¤dning:</span> Kan ges utan spÃ¤dning eller spÃ¤das med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Elektrolytrubbningar, hypotension, dehydrering.`
        },
        {
            name: "Hydrocortisone 100 mg/ml => GrÃ¶n lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Inflammatoriska sjukdomar, adrenal kris. 
            <span style="color: green;">Dosering:</span> 100-500 mg intravenÃ¶st beroende pÃ¥ tillstÃ¥nd. 
            <span style="color: blue;">SpÃ¤dning:</span> SpÃ¤des med NaCl 9 mg/ml eller glukos 50 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Hyperglykemi, infektion, gastrointestinala besvÃ¤r.`
        },
        {
            name: "Labetalol 5 mg/ml => BlÃ¥ lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Hypertensiv kris. 
            <span style="color: green;">Dosering:</span> 20 mg intravenÃ¶st, kan upprepas var 10 minut. 
            <span style="color: blue;">SpÃ¤dning:</span> Kan ges utan spÃ¤dning eller spÃ¤das med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Hypotension, bradykardi, yrsel.`
        },
        {
            name: "Magnesiumsulfat 50 mg/ml => RÃ¶tt lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Hypomagnesemi, torsades de pointes, preeklampsi. 
            <span style="color: green;">Dosering:</span> 1-2 g intravenÃ¶st Ã¶ver 5-10 minuter. 
            <span style="color: blue;">SpÃ¤dning:</span> SpÃ¤des i NaCl 9 mg/ml eller glukos 50 mg/ml fÃ¶r infusion. 
            <span style="color: purple;">Biverkningar:</span> Hypotension, bradykardi, andningsdepression.`
        },
        {
            name: "Metoprolol 1 mg/ml => Gul lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Hypertension, angina, arytmier. 
            <span style="color: green;">Dosering:</span> 1-5 mg intravenÃ¶st, kan upprepas. 
            <span style="color: blue;">SpÃ¤dning:</span> Kan ges utan spÃ¤dning eller spÃ¤das med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Bradykardi, hypotension, bronkospasm.`
        },
        {
            name: "Nitroglycerin 1 mg/ml => GrÃ¶n lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Angina, akut hjÃ¤rtsvikt. 
            <span style="color: green;">Dosering:</span> 0.5-1 mg sublingualt eller intravenÃ¶st. 
            <span style="color: blue;">SpÃ¤dning:</span> SpÃ¤des i glukos 50 mg/ml eller NaCl 9 mg/ml fÃ¶r infusion. 
            <span style="color: purple;">Biverkningar:</span> Hypotension, huvudvÃ¤rk, yrsel.`
        },
        {
            name: "Ondansetron 2 mg/ml => BlÃ¥ lkm-rum",
            details: `<span style="color: red;">Indikation:</span> IllamÃ¥ende och krÃ¤kningar. 
            <span style="color: green;">Dosering:</span> 4-8 mg intravenÃ¶st, kan upprepas. 
            <span style="color: blue;">SpÃ¤dning:</span> Kan ges utan spÃ¤dning eller spÃ¤das med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> HuvudvÃ¤rk, fÃ¶rstoppning, trÃ¶tthet.`
        },
        {
            name: "Phenylephrine 10 mg/ml => RÃ¶tt lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Hypotension, chock. 
            <span style="color: green;">Dosering:</span> 100-200 mcg intravenÃ¶st, kan upprepas. 
            <span style="color: blue;">SpÃ¤dning:</span> SpÃ¤des i NaCl 9 mg/ml eller glukos 50 mg/ml fÃ¶r infusion. 
            <span style="color: purple;">Biverkningar:</span> Hypertension, bradykardi, huvudvÃ¤rk.`
        },
        {
            name: "Potassium chloride 2 mmol/ml => GrÃ¶n lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Hypokalemi. 
            <span style="color: green;">Dosering:</span> 20-40 mmol intravenÃ¶st Ã¶ver 2-3 timmar. 
            <span style="color: blue;">SpÃ¤dning:</span> SpÃ¤des i NaCl 9 mg/ml eller glukos 50 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Hyperkalemi, flebit, arytmier.`
        },
        {
            name: "Sodium bicarbonate 84 mg/ml => BlÃ¥ lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Metabol acidos, hyperkalemi. 
            <span style="color: green;">Dosering:</span> 50-100 mEq intravenÃ¶st beroende pÃ¥ tillstÃ¥nd. 
            <span style="color: blue;">SpÃ¤dning:</span> Kan ges utan spÃ¤dning. 
            <span style="color: purple;">Biverkningar:</span> Metabol alkalos, hypokalemi.`
        },
        {
            name: "Thiopental 25 mg/ml => Gul lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Anestesi, status epilepticus. 
            <span style="color: green;">Dosering:</span> 3-5 mg/kg intravenÃ¶st fÃ¶r induktion. 
            <span style="color: blue;">SpÃ¤dning:</span> SpÃ¤des i sterilt vatten fÃ¶r injektion. 
            <span style="color: purple;">Biverkningar:</span> Hypotension, andningsdepression, laryngospasm.`
        },
        {
            name: "Valproate 100 mg/ml => GrÃ¶n lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Epilepsi, bipolÃ¤r sjukdom. 
            <span style="color: green;">Dosering:</span> 10-15 mg/kg intravenÃ¶st, justeras. 
            <span style="color: blue;">SpÃ¤dning:</span> SpÃ¤des i NaCl 9 mg/ml eller glukos 50 mg/ml fÃ¶r infusion. 
            <span style="color: purple;">Biverkningar:</span> Hepatotoxicitet, pankreatit, tremor.`
        },
        {
            name: "Vasopressin 20 IU/ml => BlÃ¥ lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Vasodilatorisk chock, esofagusvaricer. 
            <span style="color: green;">Dosering:</span> 0.03-0.04 IU/min intravenÃ¶st fÃ¶r chock. 
            <span style="color: blue;">SpÃ¤dning:</span> SpÃ¤des i NaCl 9 mg/ml fÃ¶r infusion. 
            <span style="color: purple;">Biverkningar:</span> Hypertension, bradykardi, ischemi.`
        },
        name: "Vecuronium 10 mg/ml => RÃ¶tt lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Muskelavslappning under operation. 
            <span style="color: green;">Dosering:</span> 0.08-0.1 mg/kg intravenÃ¶st. 
            <span style="color: blue;">SpÃ¤dning:</span> SpÃ¤des i NaCl 9 mg/ml eller glukos 50 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Prolongerad neuromuskulÃ¤r blockad, hypotension.`
        },
        {
            name: "Warfarin 5 mg => Gul lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Tromboembolisk sjukdom. 
            <span style="color: green;">Dosering:</span> Initial dos: 5-10 mg oralt, justeras efter INR. 
            <span style="color: blue;">SpÃ¤dning:</span> Ges utan spÃ¤dning. 
            <span style="color: purple;">Biverkningar:</span> BlÃ¶dning, warfarinnekros, teratogenicitet.`
        },
        {
            name: "Xylocain 20 mg/ml => GrÃ¶n lkm-rum",
            details: `<span style="color: red;">Indikation:</span> LokalbedÃ¶vning, arytmier. 
            <span style="color: green;">Dosering:</span> LokalbedÃ¶vning: 1-5 ml infiltrativt. Arytmier: 1-1.5 mg/kg intravenÃ¶st. 
            <span style="color: blue;">SpÃ¤dning:</span> Kan ges utan spÃ¤dning. 
            <span style="color: purple;">Biverkningar:</span> Yrsel, parestesier, kramper.`
        },
        {
            name: "Ziprasidon 20 mg/ml => BlÃ¥ lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Schizofreni, bipolÃ¤r sjukdom. 
            <span style="color: green;">Dosering:</span> 10-20 mg intramuskulÃ¤rt, kan upprepas. 
            <span style="color: blue;">SpÃ¤dning:</span> Kan ges utan spÃ¤dning. 
            <span style="color: purple;">Biverkningar:</span> QT-fÃ¶rlÃ¤ngning, sedation, agitation.`
        },
        {
            name: "Zofran 2 mg/ml => RÃ¶tt lkm-rum",
            details: `<span style="color: red;">Indikation:</span> IllamÃ¥ende och krÃ¤kningar. 
            <span style="color: green;">Dosering:</span> 4-8 mg intravenÃ¶st, kan upprepas. 
            <span style="color: blue;">SpÃ¤dning:</span> Kan ges utan spÃ¤dning eller spÃ¤das med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> HuvudvÃ¤rk, fÃ¶rstoppning, trÃ¶tthet.`
        },
        {
            name: "Adrenalin 1 mg/ml => BlÃ¥ lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Anafylaktisk chock, hjÃ¤rtstopp. 
            <span style="color: green;">Dosering:</span> Anafylaxi: 0.3-0.5 mg intramuskulÃ¤rt. HjÃ¤rtstopp: 1 mg intravenÃ¶st var 3-5 minut. 
            <span style="color: blue;">SpÃ¤dning:</span> FÃ¶r infusion, spÃ¤dning i NaCl 9 mg/ml eller glukos 50 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Takykardi, hypertension, huvudvÃ¤rk, tremor.`
        },
        {
            name: "Atropin 1 mg/ml => BlÃ¥ lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Bradykardi, fÃ¶rgiftningar. 
            <span style="color: green;">Dosering:</span> Bradykardi: 0.5 mg intravenÃ¶st, kan upprepas upp till max 3 mg. 
            <span style="color: blue;">SpÃ¤dning:</span> Kan ges utan spÃ¤dning eller spÃ¤das med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Muntorrhet, fÃ¶rvirring, takykardi.`
        },
        {
            name: "Diazepam 5 mg/ml => GrÃ¶n lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Kramper, Ã¥ngest. 
            <span style="color: green;">Dosering:</span> Kramper: 5-10 mg intravenÃ¶st eller rektalt. Ã…ngest: 2-10 mg oralt. 
            <span style="color: blue;">SpÃ¤dning:</span> Kan ges utan spÃ¤dning eller spÃ¤das med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> DÃ¥sighet, yrsel, andningsdepression.`
        },
        {
            name: "Fentanyl 50 mcg/ml => Gul lkm-rum",
            details: `<span style="color: red;">Indikation:</span> SmÃ¤rtlindring, anestesi. 
            <span style="color: green;">Dosering:</span> SmÃ¤rtlindring: 25-100 mcg intravenÃ¶st, kan upprepas. 
            <span style="color: blue;">SpÃ¤dning:</span> Kan ges utan spÃ¤dning eller spÃ¤das med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Andningsdepression, bradykardi, hypotension.`
        },
        {
            name: "Heparin 5000 IE/ml => Gul lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Trombosprofylax, behandling av tromboembolism. 
            <span style="color: green;">Dosering:</span> Initial dos: 5000 IE intravenÃ¶st, sedan infusion. 
            <span style="color: blue;">SpÃ¤dning:</span> SpÃ¤dning i NaCl 9 mg/ml fÃ¶r infusion. 
            <span style="color: purple;">Biverkningar:</span> BlÃ¶dning, trombocytopeni.`
        },
        {
            name: "Lidokain 10 mg/ml => GrÃ¶n lkm-rum",
            details: `<span style="color: red;">Indikation:</span> LokalbedÃ¶vning, arytmier. 
            <span style="color: green;">Dosering:</span> LokalbedÃ¶vning: 10-20 ml infiltrativt. Arytmier: 1-1.5 mg/kg intravenÃ¶st. 
            <span style="color: blue;">SpÃ¤dning:</span> Kan ges utan spÃ¤dning fÃ¶r lokalbedÃ¶vning. 
            <span style="color: purple;">Biverkningar:</span> Yrsel, parestesier, kramper.`
        },
        {
            name: "Midazolam 5 mg/ml => BlÃ¥ lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Sedation, kramper. 
            <span style="color: green;">Dosering:</span> Sedation: 0.5-2 mg intravenÃ¶st, titreras. 
            <span style="color: blue;">SpÃ¤dning:</span> Kan ges utan spÃ¤dning eller spÃ¤das med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Andningsdepression, hypotension.`
        },
        {
            name: "Naloxon 0.4 mg/ml => GrÃ¶n lkm-rum",
            details: `<span style="color: red;">Indikation:</span> OpioidÃ¶verdos. 
            <span style="color: green;">Dosering:</span> Initial dos: 0.4-2 mg intravenÃ¶st, kan upprepas. 
            <span style="color: blue;">SpÃ¤dning:</span> Kan ges utan spÃ¤dning eller spÃ¤das med NaCl 9 mg/ml. 
            <span style="color: purple;">Biverkningar:</span> Abstinenssymtom, takykardi, hypertension.`
        },
        {
            name: "Natriumklorid 9 mg/ml => Gul lkm-rum",
            details: `<span style="color: red;">Indikation:</span> VÃ¤tskeersÃ¤ttning, spÃ¤dning av lÃ¤kemedel. 
            <span style="color: green;">Dosering:</span> Individuell beroende pÃ¥ behov. 
            <span style="color: blue;">SpÃ¤dning:</span> AnvÃ¤nds som spÃ¤dningsvÃ¤tska fÃ¶r olika lÃ¤kemedel. 
            <span style="color: purple;">Biverkningar:</span> Ingen specifik, men Ã¶vervÃ¤tskning kan leda till elektrolytrubbningar.`
        },
        {
            name: "Noradrenalin 1 mg/ml => BlÃ¥ lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Hypotension, chock. 
            <span style="color: green;">Dosering:</span> Startdos: 0.05-0.1 mcg/kg/min intravenÃ¶st, titreras. 
            <span style="color: blue;">SpÃ¤dning:</span> SpÃ¤des i glukos 50 mg/ml eller NaCl 9 mg/ml fÃ¶r infusion. 
            <span style="color: purple;">Biverkningar:</span> Hypertension, arytmier, hudnekros vid extravasering.`
        },
        {
            name: "Oxytocin 10 IE/ml => GrÃ¶n lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Induktion av fÃ¶rlossning, postpartum blÃ¶dning. 
            <span style="color: green;">Dosering:</span> Induktion: 1-2 mU/min intravenÃ¶st, justeras. Postpartum blÃ¶dning: 10 IE intramuskulÃ¤rt eller intravenÃ¶st. 
            <span style="color: blue;">SpÃ¤dning:</span> SpÃ¤des i NaCl 9 mg/ml fÃ¶r infusion. 
            <span style="color: purple;">Biverkningar:</span> Hypertension, vattenfÃ¶rgiftning, livmoderruptur.`
        },
        {
            name: "Propofol 10 mg/ml => Gul lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Anestesi, sedation. 
            <span style="color: green;">Dosering:</span> Induktion: 1-2 mg/kg intravenÃ¶st. UnderhÃ¥ll: 4-12 mg/kg/h infusion. 
            <span style="color: blue;">SpÃ¤dning:</span> Ges utan spÃ¤dning. 
            <span style="color: purple;">Biverkningar:</span> Hypotension, bradykardi, smÃ¤rta vid injektion.`
        },
        
        
        {
            name: "Acetylcystein (inh/inj 200 mg/ml) => RÃ¶tt lkm-rum",
            details: `<span style="color: red;">Indikation:</span> Mukusreglerande vid inhalation samt antidot till paracetamol. 
            <span style="color: green;">Dosering:</span> Dos och hastighet ordineras av lÃ¤kare, baserat pÃ¥ patientens vikt. 
            <span style="color: blue;">SpÃ¤dning:</span> Enligt Giftinfo (Ã¶verdos av icke-depotpreparat): Dos 1: IntravenÃ¶st ges fÃ¶rst 200 mg/kg i 500 ml glukos 50 mg/ml eller isoton NaCl under 4 timmar (50 mg/kg/timme). Dos 2: 6,25 mg/kg/timme under 16 timmar eller lÃ¤ngre, se nedan (praktiskt Ã¤r att 75 mg/kg lÃ¶ses i 500 ml och ges under varje 12-timmarsperiod). Eventuellt â€fÃ¶rlÃ¤ngd behandlingâ€ kan fÃ¶rekomma r/t PK-INR och levervÃ¤rden. 
            <span style="color: purple;">Biverkningar:</span> illamÃ¥ende, flush, klÃ¥da, urtikaria. Allvarliga allergiska biverkningar av acetylcystein sÃ¥som angioÃ¶dem, bronkospasm och hypotension kan fÃ¶rekomma. Den inledande behandlingen (startdos) kan ge perifert vasodilaterande effekt som behandlas med att infusionen tillfÃ¤lligt avbrytes 30-60 minuter. OBS! Vid biverkningar (illamÃ¥ende, urtikaria, klÃ¥da vanligast) stÃ¤ng tillfÃ¤lligt av infusionen och ge antihistamin (t ex munsÃ¶nderfallande desloratadin 10 mg eller intravenÃ¶st Tavegyl 2 mg). RING GIC.`
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
    document.getElementById('modal-details').innerHTML = details;  // Ã„ndrat till innerHTML
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
