const burgerEl = document.querySelector('.fa-bars')

const NavEl = document.querySelector('nav')



burgerEl.addEventListener('click',showNav)

function showNav (){
    console.log("Du trykket på hamburgermenyen ")

    NavEl.classList.toggle('show')
}





//JavaScript skog

// Henter bilder
image_array = [
    'bekk.png',
    'myr.png',
    'sti.png',
    'stup.png',
    'gultomraade.png',
    'brønn.png',
    'dyrket.mark.png',
    'høydekurver.png',
    'spesiell.detalj.png',
    'steinur.png',
    'grop.png'

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
else if(random_index === 10){
    riktig = "grop"
}
else if(random_index === 5){
    riktig = "brønn"
}
else if(random_index === 6 ){
    riktig = "dyrket mark"
}
else if(random_index === 7 ){
    riktig = "høydekurver"
}
else if(random_index === 8){
    riktig = "spesiell detalj"
}
else if(random_index === 9){
    riktig = "steinur"
 } }
 
 
 get_random_image()

sjekkBtn.addEventListener("click", sjekkSvar)
BodyEl.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        sjekkSvar()
    }
})




function sjekkSvar(){
    let svar = svarEl.value

    if(svar === riktig){
        resultatEl.innerHTML = "Du svarte rett!"
        streak += 1 
        poengEl.innerHTML = "Du har " + streak + " i streak"
        get_random_image()

        if (streak === 5){
            document.getElementById('image_shower').src = `Bilder.prosjekt/fempaarad.png`;
            resultatEl.innerHTML = "Riktig!! Du har 5 på rad"
            
        }
        else if (streak === 15){
            document.getElementById('image_shower').src = `Bilder.prosjekt/gullstjerne.jpeg`;
            resultatEl.innerHTML = "Riktig!! Du har 15 på rad"
            
        }

    }
    else {
        //console.log("Feil svar...")
        resultatEl.innerHTML = "Feil svar... Prøv på nytt"
        streak = 0
        poengEl.innerHTML = "Du har " + poeng + " i streak "
    }
}

