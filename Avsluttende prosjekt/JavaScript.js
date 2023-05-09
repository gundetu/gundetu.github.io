const burgerEl = document.querySelector('.fa-bars')

const NavEl = document.querySelector('nav')


burgerEl.addEventListener('click',showNav )

//switcher mellom å ha klassen show og ikke. 
function showNav (){
    console.log("Du trykket på hamburgermenyen ")

    NavEl.classList.toggle('show')
}



if(!localStorage.best){
    localStorage.best = 0
}

if(!localStorage.highscore){
    localStorage.highscore = 0
}


if(!localStorage.trekk){
    localStorage.trekk = 200
}

  