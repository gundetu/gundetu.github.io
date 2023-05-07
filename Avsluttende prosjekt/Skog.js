
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
    // Get a random index
    random_index = Math.floor(Math.random() * image_array.length);
  
    // Get an image at the random_index
    selected_image = image_array[random_index]
  
    // Display the image
    document.getElementById('image_shower').src = `Bilder.prosjekt/${selected_image}`
    svarEl.value = ""


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
else if(random_index === 15){
    riktig = "bygning"
 } 

}
 
 
 get_random_image()

sjekkBtn.addEventListener("click", sjekkSvar)
BodyEl.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        sjekkSvar()
    }
})




function sjekkSvar(){
    let svar = svarEl.value.toLowerCase()
    

    if(svar === riktig){
        resultatEl.innerHTML = "Du svarte rett!"
        streak += 1 
        console.log('bra')
        poengEl.innerHTML = "Du har " + streak + " i streak"
        get_random_image()


                if (streak === 5 ){
                    svarEl.value = "Trykk Enter";
                    document.getElementById('image_shower').src = `Bilder.prosjekt/fempaarad.png`;
                    resultatEl.innerHTML = "Riktig!! Du har 5 på rad";
                    riktig = "Trykk Enter"
                }
                else if (streak === 15){
                    riktig = "Trykk Enter"
                    document.getElementById('image_shower').src = `Bilder.prosjekt/gullstjerne.jpeg`;
                    resultatEl.innerHTML = "Riktig!! Du har 15 på rad"
                    riktig = "Trykk Enter"
               }
    }
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



//<button id="nesteBilde"onclick="get_random_image()"> <i class="fas fa-random"></i> </button>