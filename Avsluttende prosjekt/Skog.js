
if(!localStorage.best){
    localStorage.best = 0
}





//JavaScript skog

// Henter bilder
image_array = [
    'bekk.png',
    'myr.png',
    'sti.png',
    'stup.png',
    'gultomrade.png',
    'bronn.png',
    'hoydekurver.png',
    'spesiellDetalj.png',
    'stein.png',
    'grop.png',
    'vann.png',
    'tettSkog.png',
    'litenVei.png',
    'kolle.png',
    'jernbane.png',
    'gjerde.png',
    'bygning.png',


  ]

  
let svarEl = document.querySelector('#svar')
let sjekkBtn = document.querySelector('#sjekk')
let resultatEl = document.querySelector('#resultat')
let poengEl = document.querySelector('#poeng')
let BodyEl = document.querySelector('body')

let streak = 0;
let riktig;

let random_index;

  function get_random_image(){
    // Lager en tilfeldig index
    random_index = Math.floor(Math.random() * image_array.length);
  
    // henter bilde fra arrayet med den randomme indexen
    selected_image = image_array[random_index]
  
    // Gir image_shower "linken" til det valgte bildet
    document.getElementById('image_shower').src = `Bilder.prosjekt/${selected_image}`
    svarEl.value = ""

//Gir de ulike arrayverdiene riktige svar
if (random_index === 0){
    riktig = "bekk"
}
else if (random_index === 1){
    riktig = "myr"
}
else if (random_index === 2){
    riktig = "sti"
}
else if (random_index === 3){
    riktig = "stup"
}
else if(random_index === 4){
    riktig = "gult område"
}

else if(random_index === 5){
    riktig = "brønn"
}

else if(random_index === 6 ){
    riktig = "høydekurver"
}
else if(random_index === 7){
    riktig = "spesiell detalj"
}
else if(random_index === 8){
    riktig = "stein"
 } 
else if(random_index === 9){
    riktig = "grop"
 } 
else if(random_index === 10){
    riktig = "vann"
 } 
else if(random_index === 11){
    riktig = "tett skog"
 } 
else if(random_index === 12){
    riktig = "liten vei"
 } 
else if(random_index === 13){
    riktig = "kolle"
 } 
else if(random_index === 14){
    riktig = "jernbane"
 } 
else if(random_index === 15){
    riktig = "gjerde"
 } 
else if(random_index === 16){
    riktig = "bygning"
 } 

}
 
//kaller på funksjonen
 get_random_image()
//Gir sjekkSvar knappen en lytter, både klikk og dersom man klikker på enter
sjekkBtn.addEventListener("click", sjekkSvar)
//gir tastaturet en lytter
BodyEl.addEventListener("keydown", function(event){
    //dersom knappen som blir trykket på er Enter, kalles funksjonen 
    if(event.key === "Enter"){
        sjekkSvar()
    }
})

//Lager funksjonen 
function sjekkSvar(){
    //gjør om svaret til brukeren til små bokstaver
    let svar = svarEl.value.toLowerCase()
    
//sjekker om svaret til brukeren stemmer overens med det som er riktig
    if(svar === riktig){
        //Resultatet i html viser at man svarte rett
        resultatEl.innerHTML = "Du svarte rett!"
        //1 høyere streak 
        streak += 1 
        poengEl.innerHTML = "Du har " + streak + " i streak"
        //Sjekker om streaken er høyere enn den tidligerre lagret verdien
        if (streak >= localStorage.best){
            localStorage.best = streak
        }
        //kaller på funksjonen igjen 
        get_random_image()


//dersom streak er 5 eller 15 viser den en fint bilde
                if (streak === 5 ){
                    //i svar boksen skal det stå trykk enter slik at brukjeren vet at han skal gjøre det
                    svarEl.value = "Trykk Enter";
                    document.getElementById('image_shower').src = `Bilder.prosjekt/fempaarad.png`;
                    resultatEl.innerHTML = "Riktig!! Du har 5 på rad";
                    //det riktige svaret blir trykk enter 
                    riktig = "trykk enter"
                }
                //samme som med streak er lik 5 
                else if (streak === 15){
                    svarEl.value = "Trykk Enter";
                    document.getElementById('image_shower').src = `Bilder.prosjekt/gullstjerne.jpeg`;
                    resultatEl.innerHTML = "Riktig!! Du har 15 på rad"
                    riktig = "trykk enter"
               }
    }

    //dersom svaret ikke stemmer med det som er riktig skal det stå at bukeren han feil, streaken settes til null og funksjonen kalles ikke så brukeren må prøve på nytt
    else {
        if (streak >= localStorage.best){
            localStorage.best = streak
        }
        //console.log("Feil svar...")
    
        resultatEl.innerHTML = "Feil svar... Prøv på nytt <br> Din høyeste score er " + localStorage.best
        
        streak = 0
        poengEl.innerHTML = "Du har " + streak + " i streak "

    }
}
