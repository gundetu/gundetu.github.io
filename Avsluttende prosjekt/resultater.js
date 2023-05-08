let quizEl = document.getElementById('Quiz')
let karttegnEl = document.getElementById('karttegn')
let memoryEl = document.getElementById('memory')

if(!localStorage.highscore ){
    quizEl.innerHTML = "0 poeng"
}
else{
    quizEl.innerHTML = localStorage.highscore + " poeng"
}


if(!localStorage.best){
    karttegnEl.innerHTML = " 0 i streak "
}
else{
    karttegnEl.innerHTML = localStorage.best + " i streak "
}

if(!localStorage.trekk){
    memoryEl.innerHTML = "ikke prøvd"
}
else{
    memoryEl.innerHTML = localStorage.trekk + " trekk"
}


