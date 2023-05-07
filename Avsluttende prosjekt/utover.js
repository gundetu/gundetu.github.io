let lesMer1El = document.querySelector('.lesMerBtn1')
let lesMer2El = document.querySelector('.lesMerBtn2')
let lesMer3El = document.querySelector('.lesMerBtn3')
let simonaimg = document.getElementById('imgSimona')
let fosserimg = document.getElementById('imgFosser')
let alexanderssonimg = document.getElementById('imgAlexandersson')

let fakta1El = document.querySelector('.faktaSimona')
let fakta2El = document.querySelector('.faktaFosser')
let fakta3El = document.querySelector('.faktaTove')

lesMer1El.addEventListener('click', visMer1)
lesMer2El.addEventListener("click", visMer2)
lesMer3El.addEventListener("click", visMer3)

let knapp1count = 0;
let knapp2count = 0;
let knapp3count = 0;

function visMer1(){
        knapp1count ++
        if(knapp1count%2 == 0){
                simonaimg.classList.remove("fjernBilde")
                fakta1El.classList.remove('visAlt')
                lesMer1El.innerHTML = "Les Mer"
                
                
        }
        else{
                simonaimg.classList.add("fjernBilde")
                fakta1El.classList.add('visAlt')
                lesMer1El.innerHTML = "Vis Mindre"
                
        }
}

function visMer2(){
        knapp2count ++
        if(knapp2count%2 == 0){
                fosserimg.classList.remove("fjernBilde")
                fakta2El.classList.remove('visAlt')
                lesMer2El.innerHTML = "Les Mer"
        }
        else{
                fosserimg.classList.add("fjernBilde")
                fakta2El.classList.add('visAlt')
                lesMer2El.innerHTML = "Vis Mindre"
        }
}

function visMer3(){
        knapp3count ++
        if(knapp3count%2 == 0){
                alexanderssonimg.classList.remove("fjernBilde")
                fakta3El.classList.remove('visAlt')
                lesMer3El.innerHTML = "Les Mer"
               
        }
        else{
                alexanderssonimg.classList.add("fjernBilde")
                fakta3El.classList.add('visAlt')
                lesMer3El.innerHTML = "Vis Mindre"
        }
}

