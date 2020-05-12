function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}
    getRes = decodeURI( $_GET( 'lijst' ) );
// bepaal de array
function BepaalALijst(){
    var getDiff  = decodeURI( $_GET( 'Diff' ) );
    switch(getRes){
        case 'Alphabet':
            var alpha = new Array('aanbod','aanraken','aanval','aardappel','aarde','aardig','acht','achter','actief','activiteit','ademen','afgelopen','afhangen','afmaken','afname','afspraak','afval','algemeen','alleen','alles','alsjeblieft','altijd','ander','andere','anders','angst','antwoord','antwoorden','appel','auto','avond','avondeten','baan','baby','bang','bank','basis','bedekken','bedreiging','bedreven','been','beer','beest','beetje','begin','begrijpen','begrip','behalve','beide','beker','belangrijk','bellen','belofte','beneden','benzine','berg','beroemd','beroep','bescherm','beslissen','best','betalen','beter','bevatten','bewegen','bewolkt','bezoek','bibliotheek','bieden','bijna','bijten','bijvoorbeeld','bijzonder','binnen','binnenkort','blad','blauw','blazen','blij','blijven','bloed','bloem','bodem','boek','boerderij','boete','boom','boon','boord','boos','bord','borstelen','bouwen','boven','branden','brandstof','breed','breken','brengen','brief','broer','broek','brood','brug','bruikbaar','bruiloft','bruin','buiten','bureau','buren','buurman','buurvrouw','cadeau','chocolade','cirkel','comfortabel','compleet','computer','conditie','controle','cool','correct','daar','daarom','dansen','dapper','deel','deken','deksel','delen','derde','deze','dichtbij','dienen','diep','dier','ding','dochter','doen','donker','dood','door','doorzichtig','doos','dorp','draad','draaien','dragen','drie','drijven','drinken','drogen','dromen','droog','druk','dubbel','duur','duwen','echt','eend','eenheid','eenzaam','eerste','eeuw','effect','eigen','eiland','einde','elektrisch','enkele','enthousiast','eten','even','examen','extreem','falen','familie','feest','feit','fijn','film','fles','foto','fout','fris','fruit','gaan','gebeuren','gebeurtenis','gebied','geboorte','geboren','gebruik','gebruikelijk','gebruiken','gedrag','gedragen','geel','geen','gehoorzamen','geit','geld','geliefde','gelijk','geloof','geluid','geluk','gemak','gemakkelijk','gemeen','genieten','genoeg','genot','gerecht','gereedschap','geschikt','gespannen','geur','gevaar','gevaarlijk','gevangenis','geven','gevolg','gewicht','gewoon','gezicht','gezond','gisteren','glad','glas','glimlach','goed','goedkoop','goud','graf','grap','grappig','gras','grens','grijs','groeien','groen','groente','groep','grof','grond','groot','grootmoeder','grootvader','haan','haar','haast','halen','half','hallo','hamer','hand','hard','hart','haten','hebben','heel','heet','helder','helft','help','hemel','herfst','herinneren','hert','heuvel','hier','hobby','hoed','hoek','hoeveel','hoeveelheid','hoewel','hond','honderd','honger','hoofd','hoog','hoogte','hoop','horen','hotel','houden','huilen','huis','huren','huur','idee','ieder','iedereen','iemand','iets','ijzer','instrument','jaar','jagen','jong','jongen','jouw','jullie','kaars','kaart','kaas','kamer','kans','kant','kantoor','kast','kasteel','kennen','kennis','keuken','keus','kiezen','kijken','kind','kist','klaar','klas','klasse','kleden','klein','kleren','kleur','klimmen','klok','kloppen','klopt','knie','knippen','koers','koffer','koffie','koken','komen','koning','koningin','koorts','kopen','kort','kost','kosten','koud','kraam','kracht','krant','krijgen','kruis','kuil','kunnen','kunst','laag','laat','laatst','lach','lachen','ladder','laken','lamp','land','lang','langs','langzaam','laten','leeftijd','leeg','leerling','leeuw','leger','leiden','lenen','lengte','lepel','leren','leuk','leven','lezen','lichaam','licht','liefde','liegen','liggen','lijk','lijken','liniaal','links','list','lomp','lood','lopen','lucht','luisteren','lunch','maag','maal','maaltijd','maan','maand','maar','maat','machine','maken','makkelijk','mama','mand','manier','markeren','markt','medicijn','meel','meer','meerdere','meest','meisje','melk','meneer','mengsel','mensen','meubel','mevrouw','middel','midden','mijn','miljoen','minder','minuut','missen','mits','model','modern','moeder','moeilijk','moeten','mogelijk','mogen','moment','mond','mooi','moord','moorden','morgen','munt','muziek','naald','naam','naar','naast','nacht','natuur','natuurlijk','neer','negen','nemen','netjes','neus','niet','niets','nieuw','nieuws','nobel','noch','nodig','noemen','nood','nooit','noord','noot','normaal','nummer','object','oceaan','ochtend','oefening','offer','olie','olifant','onder','onderwerp','onderzoek','oneven','ongeluk','ontsnappen','ontbijt','ontdekken','ontmoeten','ontvangen','ontwikkelen','onze','ooit','oorlog','oorzaak','oost','opeens','open','openlijk','opleiding','opnemen','oranje','orde','ouder','over','overal','overeenkomen','overleden','overvallen','paar','paard','pagina','papa','papier','park','partner','passeren','peper','perfect','periode','persoon','piano','pijn','pistool','plaat','plaatje','plaats','plafond','plank','plant','plastic','plat','plattegrond','plein','plus','poes','politie','poort','populair','positie','postzegel','potlood','praten','presenteren','prijs','prins','prinses','privé','proberen','probleem','product','provincie','publiek','punt','raak','raam','radio','raken','rapport','recht','rechtdoor','rechts','rechtvaardig','redden','reeds','regen','reiken','reizen','rekenmachine','rennen','repareren','rest','restaurant','resultaat','richting','rijk','rijst','rijzen','ring','rond','rood','rook','rots','roze','rubber','ruiken','ruimte','samen','schaap','schaar','schaduw','scheiden','scherp','schetsen','schieten','schijnen','schip','school','schoon','schouder','schreeuw','schreeuwen','schrijven','schudden','seconde','signaal','simpel','sinds','slaapkamer','slapen','slecht','sleutel','slim','slot','sluiten','smaak','smal','sneeuw','snel','snelheid','snijden','soep','soms','soort','sorry','speciaal','spel','spelen','sport','spreken','springen','staal','stad','stap','start','station','steen','stelen','stem','stempel','ster','sterk','steun','stil','stilte','stoel','stof','stoffig','stom','stop','storm','straat','straffen','structuur','student','studie','stuk','succes','suiker','taal','taart','tafel','tamelijk','tand','tante','taxi','team','teen','tegen','teken','tekenen','telefoon','televisie','tellen','tennis','terug','terugkomst','terwijl','test','tevreden','thee','thuis','tien','tijd','titel','toekomst','toen','toename','totaal','traan','tram','trein','trekken','trouwen','trui','tuin','tussen','tweede','uitleggen','uitnodigen','uitvinden','uitzoeken','vaak','vaarwel','vader','vakantie','vallen','vals','vandaag','vangen','vanmorgen','vannacht','varken','vast','vechten','veel','veer','veilig','veranderen','verandering','verder','verdienen','verdrietig','verenigen','verf','vergelijkbaar','vergelijken','vergelijking','vergeten','vergeven','vergissen','verhaal','verhoging','verjaardag','verkeerd','verkopen','verlaten','verleden','verliezen','vernietigen','veroveren','verrassen','vers','verschil','verschrikkelijk','verspreiden','verstand','verstoppen','versturen','vertellen','vertrekken','vertrouwen','verwachten','verwijderen','verzamelen','verzameling','vier','vierkant','vies','vijand','vijf','vijver','vinden','vinger','vlag','vlees','vlieg','vliegtuig','vloer','voeden','voedsel','voelen','voet','voetbal','vogel','volgende','volgorde','voor','voorbeeld','voorkomen','voorzichtig','voorzien','vork','vorm','vouwen','vraag','vragen','vrede','vreemd','vreemde','vriend','vriendelijk','vriezen','vrij','vrijheid','vroeg','vroeger','vrouw','vullen','vuur','waar','waarom','waarschijnlijk','wachten','wakker','wanneer','want','wapen','warm','wassen','water','week','weer','welke','welkom','wens','wereld','werelddeel','werk','west','wetenschap','wiel','wijn','wijs','wild','willen','wind','winkel','winnen','winter','wissen','wolf','wolk','wonder','woord','woud','wreed','zaak','zacht','zand','zeep','zeer','zeggen','zeil','zeker','zelfde','zetten','zeven','ziek','ziekenhuis','ziel','zien','zijn','zilver','zingen','zinken','zitten','zoals','zoeken','zoet','zomer','zonder','zonnig','zoon','zorg','zorgen','zout','zuid','zulke','zullen','zwaar','zwak','zwembad','zwemmen');

            return  alpha;
            break
        case 'Space':
            return new Array('ruimte', 'planeet', 'zonnestelsel', 'aarde', 'zon', 'maan', 'ster', 'venus','uranus','mercurius','mars','jupiter','saturnus','neptunus','pluto','asteroide','universum');
            break   
        case 'Stad':
            return new Array('amsterdam','barcelona','london','parijs','berlijn','antwerpen','rome','madrid','rotterdam');
            break       
        }
}        

        const random_indB = Math.floor( Math.random() * BepaalALijst().length ) ;
        const random_indA = Math.floor( Math.random() * BepaalALijst().length ) ;
        const chooser = Math.random();
        if( chooser >= 0.5){
            var word = BepaalALijst()[random_indA];
        }else{
            var word = BepaalALijst()[random_indB];
        }

        const BEGINLEVENS = 10
        var levens = BEGINLEVENS;


        var acces ='';
        var show = 0;
        var gokcount = 1;
    

        function beginword(){
            document.getElementById('raadbox').maxLength = word.length

                document.getElementById('word').innerHTML += "Het Woord: ";
                for(i = 0; i < word.length; i++){
                    if(word[i] != ' '){

                        document.getElementById('word').innerHTML += "<span id='letter' class='ster'>*</span>";;
                    }else{document.getElementById('word').innerHTML +="<span id='letter'>&nbsp</span>";;
                        document.getElementById('word').innerHTML += "";
                    }


                }
            }
        

        function showArray(vari){
            var res;
            for(i = 0; i < vari.length; i++){
                res += vari[i];
            }
            return res;
        }
function checkagain(){
    setTimeout(() => {   var again = confirm('wilt u nog een keer?'); 
    if(again){
        location.reload();
    }else{
        window.location.href = "index.html";
    }

}, 500);
}
function checkacces(acces){
    if(acces == 'all'){
        document.getElementById('word').innerHTML += "<br> Het Woord is: " + word;
        checkagain();

    }
    
}
function checkgeuss(){
    var checkgoodnes = 0;
    // get de value van de raadbox

    
    console.log(document.getElementById('raadbox').maxLength);

    var value = document.getElementById('raadbox').value;
    var gok = value.toLocaleLowerCase();  
    
    if(gokcount <= BEGINLEVENS){
    //als het de eerst gok buert is clear de boord dan
    if( gokcount <= 1){document.getElementById('word').innerHTML = " ";}

        var gokres = '';
                show++;
                
                for(i = 0; i < word.length; i++){ 

   
                            if(gok[i] == word[i]){
                                checkgoodnes++;
                                // gokres += "<div id='letter' class='ster'>*</div>";
                                // console.log('fout');
                                gokres += "<span id='letter' class='goedeletters'>"+word[i]+"</span>";
                            }else{

                                //gokres +=word[i]
                                gokres += "<span id='letter' class='ster'>*</span>";;
                            }

                        }

                document.getElementById('word').innerHTML += "show"+ gokcount+":"+gokres;
                document.getElementById('word').innerHTML += "<br>";
                document.getElementById('word').innerHTML += "gok-"+gokcount+":";
                //gokWord() is voor de style alleen. je kan er ook de variable gok doen, maar dan heb je er geen style meer bij
                document.getElementById('word').innerHTML += gokWord(gok);
                document.getElementById('word').innerHTML += "<br>";
                console.log("gok count:"+gokcount);
                        gokcount++;
                        if(checkgoodnes >= word.length){
                            alert('ye');
                        }
                document.getElementById('raadbox').value = "";

                if(checkgoodnes >= word.length){HangmanState(levens, 'WIN'); checkagain();}else{HangmanState(levens,' '); levens--;}
            
        }
    }

function gokWord(gok){
    var res = ''; 
    for(i = 0; i < gok.length; i++){ 

   
            res += "<span id='letter' class='goedeletters'>"+gok[i]+"</span>";

    }
return res;
}

function HangmanState(levens, acces){

        var OneProc = BEGINLEVENS / 6;


        console.log();
        if(BEGINLEVENS * 1 <= levens ){
            console.log(acces);
            if(acces == 'WIN'){
                document.getElementById("hang").src = 'galgjeWIN0.png';
            }else{
                document.getElementById("hang").src = 'galgje_fase0.png';
            }
            levens--;
        }else if(BEGINLEVENS * 0.80 <= levens ){
            //check of hij gewonnen heeft 
            //als dat zo is print dan de bijbehorende  plaatje
            console.log(acces);
            if(acces == 'WIN'){
                document.getElementById("hang").src = 'galgjeWIN1.png';
            }else{
                document.getElementById("hang").src = 'galgje_fase1.png';
            }
            levens--;
        }else if(BEGINLEVENS * 0.60 <= levens ){                    console.log(acces);
            //check of hij gewonnen heeft 
            //als dat zo is print dan de bijbehorende  plaatje
            if(acces == 'WIN'){
                document.getElementById("hang").src = 'galgjeWIN2.png';
            }else{

                document.getElementById("hang").src = 'galgje_fase2.png';
            }
            levens--;
        }else if(BEGINLEVENS * 0.40 <= levens){                    console.log(acces);
            //check of hij gewonnen heeft 
            //als dat zo is print dan de bijbehorende  plaatje
            if(acces == 'WIN'){
                document.getElementById("hang").src = 'galgjeWIN3.png';
            }else{

                document.getElementById("hang").src = 'galgje_fase3.png';
            }
            levens--;
        }else if(BEGINLEVENS * 0.20 <= levens){                    console.log(acces);
            //check of hij gewonnen heeft 
            //als dat zo is print dan de bijbehorende  plaatje
            if(acces == 'WIN'){
                document.getElementById("hang").src = 'galgjeWIN4.png';
            }else{

                document.getElementById("hang").src = 'galgje_fase4.png';
            }
            levens--;
        }else if( BEGINLEVENS * 0.00 <= levens){
            document.getElementById("hang").src = 'galgje_ded.png';
            setTimeout(() => {  alert('OOPS je hebt verloren. Het woord was: '+ word); }, 500);
            
        }
        

    }


    
