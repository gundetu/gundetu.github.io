const burgerEl = document.querySelector('.fa-bars')

const NavEl = document.querySelector('nav')


burgerEl.addEventListener('click',showNav )


function showNav (){
    console.log("Du trykket på hamburgermenyen ")

    NavEl.classList.toggle('show')
   
   
}






